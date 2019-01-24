DROP KEYSPACE IF EXISTS test;

CREATE KEYSPACE test
  WITH replication = {'class':'SimpleStrategy', 'replication_factor' : 1};

CREATE TABLE test.testtable
(
  id                    INT PRIMARY KEY,
  stars                 DOUBLE,
  price                 INT,
  weeklyViewCount       INT,
  serviceFee            INT,
  weeklyDiscountPercent INT,
  isRareFind            BOOLEAN,
  cleaningFee           INT
);

