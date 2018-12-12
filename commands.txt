#move to api directory
cd api

#build docker image for api
docker build -t maria/node-web-app .

#run docker container
docker run -p 3000:8080 -d maria/node-web-app

#check if running
docker ps

#see console logs of the container
docker logs <id>

_________________________________

#move to importer directory
cd ../importer

#build docker image for importer app
docker build -t maria/node-importer-app .

#run docker container
docker run --network="host" -d maria/node-importer-app

docker ps -a

docker logs <id>

_________________________________

#stop running containers
docker stop $(docker ps -aq)

#remove all stopped containers
docker rm $(docker ps -aq)

#remove images
docker rmi $(docker images -q)

_________________________________
