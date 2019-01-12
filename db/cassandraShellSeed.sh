#!/bin/bash

counter=1
while [[ ${counter} -le 10 ]]
  do
  sed -i '' s/[0-9][0-9]*/${counter}/g ./db/cassandraController.cqlsh
#   cat ./db/schemaCassandra.cql
  cqlsh -f ./db/cassandraController.cqlsh
  ((counter++))
done
