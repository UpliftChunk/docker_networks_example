> Create image.1 (tmp1)
```
docker build . -t tmp1:latest
```
> Create image.2 (tmp2)
```
docker build . -t tmp2:latest
```

> Create network (network2)
```
docker network create network2
```

> Create a container with image.2 (name it as container2)
```
docker run -p 5000:5000 -e LOCAL_PORT=5000 --network network2 --name container2 tmp2:latest
```

> Create a container with image.1 
```
docker run -p 4000:4000 -e LOCAL_PORT=4000 -e ORIGIN_PORT=5000 -e SECOND_CONTAINER=container2 --network network2 tmp1:latest
```

:octocat: Both the containers are available at localhost at respective ports :+1: 

:octocat: First container talks to second container through network using container name. :shipit:
