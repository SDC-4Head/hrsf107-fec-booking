--DROP DATABASE IF EXISTS booking;

--CREATE DATABASE booking;

CREATE SCHEMA IF NOT EXISTS booking;

DROP TABLE booking.booking;

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

-- DELETE FROM booking.booking.booking where true;
