--DROP DATABASE IF EXISTS booking;

--CREATE DATABASE booking;

CREATE SCHEMA IF NOT EXISTS booking;

CREATE SCHEMA IF NOT EXISTS hotels;

DROP TABLE booking.booking;

DROP TABLE booking.hotels;

CREATE TABLE booking.booking
(
  id                    INT PRIMARY KEY,
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
    hotelfk INT,
    bookingid INT,
    startdate TEXT,
    enddate TEXT
);

-- DELETE FROM booking.booking.booking where true;
