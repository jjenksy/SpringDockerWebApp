#!/bin/bash
# https://github.com/frodenas/docker-mongodb/blob/master/Dockerfile

ROOT_USER="dbadmin"
# ROOT_PASS=${MONGODB_ROOT_PASSWORD:-$(pwgen -s -1 16)}
ROOT_PASS="password"
ROOT_DB="admin"
ROOT_ROLE="root"

USER="dbadmin"
PASS="password"
DB="codeTest"
ROLE="readWrite"

# Start MongoDB service
#/usr/bin/mongod --nojournal &
echo "Starting MongoDB to add users and roles...."
/usr/bin/mongod &
while ! nc -vz localhost 27017; do sleep 1; done

#Set authSchema to 3 so it works with RoboMongo
#echo "Setting authSchema to currentVersion:3"
#mongo $ROOT_DB --eval "db.system.version.save({ '_id' : 'authSchema', 'currentVersion' : 3 });"

# Create Root User if there are values (-z means empty, -n means not empty)
if [[ -n $ROOT_USER ]] && [[ -n $ROOT_PASS ]] && [[ -n $ROOT_ROLE ]]
then
	echo "Creating root user: \"$ROOT_USER\"..."
	mongo $ROOT_DB --eval "db.createUser({ user: '$ROOT_USER', pwd: '$ROOT_PASS', roles: [ { role: '$ROOT_ROLE', db: '$ROOT_DB' } ] });"
fi

# Create Web User if there are values (-z means empty, -n means not empty)
if [[ -n $USER ]] && [[ -n $PASS ]] && [[ -n $ROLE ]] && [[ -n $DB ]]
then
	echo "Creating web user: \"$USER\"..."
	mongo $DB --eval "db.createUser({ user: '$USER', pwd: '$PASS', roles: [ { role: '$ROLE', db: '$DB' } ] });"
fi

echo "Added MongoDB users and roles...."

# Stop MongoDB service
echo "Shutting down MongoDB after adding users/roles...."
/usr/bin/mongod --shutdown

echo "========================================================================"
echo "MongoDB Root User: $ROOT_USER"
echo "MongoDB Root Role: $ROOT_ROLE"
echo "========================================================================"
echo "========================================================================"
echo "MongoDB User: $USER"
echo "MongoDB Database: $DB"
echo "MongoDB Role: $ROLE"

#Override environment vars for passwords since they're only used 
#during initialization of MongoDB container
export MONGODB_ROOT_PASSWORD=""
export MONGODB_PASSWORD=""

rm -f /.firstrun