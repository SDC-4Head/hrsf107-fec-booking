DROP DATABASE IF EXISTS booking;

CREATE DATABASE booking;

CREATE SCHEMA IF NOT EXISTS booking
CREATE SCHEMA IF NOT EXISTS hotels;

DROP TABLE booking.hotels;
DROP TABLE booking.booking;

CREATE TABLE booking.booking
(
  id                    SERIAL PRIMARY KEY,
  stars                 DOUBLE PRECISION,
  price                 INT,
  weeklyViewCount       INT,
  serviceFee            INT,
  weeklyDiscountPercent INT,
  isRareFind            BOOLEAN,
  cleaningFee           INT
);

CREATE TABLE booking.hotels
(
  bookingid SERIAL PRIMARY KEY ,
  hotelfk   INT NOT NULL REFERENCES booking.booking(id),
  startdate TEXT NOT NULL,
  enddate   TEXT NOT NULL
);

-- DELETE FROM booking.booking.booking where true;
