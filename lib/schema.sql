-- ============================================================
-- ZoditoRentals — Supabase SQL Schema
-- Run this in Supabase > SQL Editor
-- ============================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ── STATIONS ─────────────────────────────────────────────────
create table if not exists stations (
  id            serial primary key,
  name          text not null,
  address       text not null,
  lat           decimal(10, 7) not null,
  lng           decimal(10, 7) not null,
  city          text not null default 'Hyderabad',
  available_count integer default 0,
  created_at    timestamptz default now()
);

-- Seed Hyderabad stations
insert into stations (name, address, lat, lng) values
  ('Hitech City Metro',    'Hitech City, Cyberabad, Hyderabad',           17.4486, 78.3908),
  ('Banjara Hills Rd 12',  'Road 12, Banjara Hills, Hyderabad',           17.4156, 78.4347),
  ('Jubilee Hills',        'Jubilee Hills Check Post, Hyderabad',          17.4313, 78.4074),
  ('Madhapur Junction',    'Madhapur Main Road, Hyderabad',               17.4483, 78.3915),
  ('Gachibowli Stadium',   'Near Gachibowli Stadium, Hyderabad',          17.4401, 78.3489),
  ('Kondapur Signal',      'Kondapur Main Road, Hyderabad',               17.4603, 78.3595),
  ('JNTU Metro',           'JNTU-H Campus Road, Kukatpally, Hyderabad',   17.4938, 78.3867),
  ('Ameerpet Cross',       'Ameerpet Junction, Hyderabad',                17.4374, 78.4490),
  ('Kukatpally Y-Junction','Kukatpally Housing Board, Hyderabad',         17.4942, 78.3985);

-- ── BIKES ────────────────────────────────────────────────────
create table if not exists bikes (
  id              serial primary key,
  name            text not null,
  type            text not null check (type in ('Scooter','Cruiser','Electric','Sport','Commuter')),
  price_per_hour  integer not null,
  status          text not null default 'available' check (status in ('available','rented','maintenance')),
  station_id      integer references stations(id),
  fuel_type       text not null default 'Petrol',
  cc              integer default 0,
  rating          decimal(2,1) default 4.5,
  review_count    integer default 0,
  image_url       text,
  created_at      timestamptz default now()
);

-- Seed bikes
insert into bikes (name, type, price_per_hour, station_id, fuel_type, cc, rating, review_count) values
  ('Honda Activa 6G',      'Scooter',  49, 1, 'Petrol',  110, 4.8, 2840),
  ('Royal Enfield Classic','Cruiser',  89, 2, 'Petrol',  350, 4.9, 1620),
  ('Ather 450X',           'Electric', 65, 3, 'Electric', 0,  4.7,  980),
  ('TVS Jupiter',          'Scooter',  45, 4, 'Petrol',  110, 4.6, 1440),
  ('Bajaj Pulsar NS200',   'Sport',    79, 5, 'Petrol',  200, 4.8,  760),
  ('Hero Splendor Plus',   'Commuter', 35, 6, 'Petrol',  100, 4.5, 3200),
  ('Yamaha MT-15',         'Sport',    85, 7, 'Petrol',  155, 4.8,  540),
  ('Ola S1 Pro',           'Electric', 70, 8, 'Electric', 0,  4.6,  890),
  ('Suzuki Access 125',    'Scooter',  52, 9, 'Petrol',  125, 4.7, 1100);

-- ── PROFILES (extends Supabase auth.users) ───────────────────
create table if not exists profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  full_name   text,
  phone       text,
  avatar_url  text,
  is_admin    boolean default false,
  created_at  timestamptz default now()
);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ── BOOKINGS ─────────────────────────────────────────────────
create table if not exists bookings (
  id            uuid primary key default uuid_generate_v4(),
  user_id       uuid references auth.users(id) on delete cascade,
  bike_id       integer references bikes(id),
  station_id    integer references stations(id),
  start_time    timestamptz not null,
  end_time      timestamptz not null,
  total_hours   integer not null,
  total_amount  integer not null,
  status        text not null default 'pending' check (status in ('pending','active','completed','cancelled')),
  razorpay_order_id   text,
  razorpay_payment_id text,
  created_at    timestamptz default now()
);

-- ── PAYMENTS ─────────────────────────────────────────────────
create table if not exists payments (
  id              uuid primary key default uuid_generate_v4(),
  booking_id      uuid references bookings(id) on delete cascade,
  amount          integer not null,
  gst             integer not null,
  insurance       integer not null default 30,
  grand_total     integer not null,
  razorpay_id     text,
  status          text default 'pending' check (status in ('pending','success','failed','refunded')),
  created_at      timestamptz default now()
);

-- ── ROW LEVEL SECURITY ───────────────────────────────────────
alter table profiles  enable row level security;
alter table bookings  enable row level security;
alter table payments  enable row level security;
alter table bikes     enable row level security;
alter table stations  enable row level security;

-- Public read for bikes and stations
create policy "Public can read bikes"    on bikes    for select using (true);
create policy "Public can read stations" on stations for select using (true);

-- Users can only see their own data
create policy "Users see own profile"  on profiles  for all using (auth.uid() = id);
create policy "Users see own bookings" on bookings  for all using (auth.uid() = user_id);
create policy "Users see own payments" on payments  for select using (
  booking_id in (select id from bookings where user_id = auth.uid())
);

-- ── INDEXES ──────────────────────────────────────────────────
create index if not exists idx_bikes_status      on bikes(status);
create index if not exists idx_bikes_type        on bikes(type);
create index if not exists idx_bookings_user     on bookings(user_id);
create index if not exists idx_bookings_status   on bookings(status);
create index if not exists idx_bookings_bike     on bookings(bike_id);
