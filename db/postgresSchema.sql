DROP DATABASE IF EXISTS booking;

CREATE DATABASE booking;

DROP SCHEMA IF EXISTS booking;

CREATE SCHEMA booking;

CREATE TABLE booking
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
