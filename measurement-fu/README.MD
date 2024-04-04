## Measurement Fu

### Prerequisites

-[Docker](https://docs.docker.com/get-docker/)


### Start Docker

> The following command will run the django server and create a local postgres database.

```sh
 docker compose -f docker-compose.dev.yml up 
```
Depending on your docker version this may work for you instead(OPTIONAL)
```sh
 docker-compose -f docker-compose.dev.yml up  
```

### Access on your browser
> The site should now be running at http://localhost:8000/(There is nothing on the / url the frontend is on a seperate site)
> Graphql Endpoints here http://localhost:8000/graphql/

#### Username

```sh
admin
```
#### Password

```sh
admin
```

### List containers

> This command will list all your containers

```sh
docker ps -a
```

### Attach Docker

> this command attach docker to your terminal for input. You will need this when you need to add input(e.g pdb inputs) 

```sh
docker attach [container-id]
```

### Go inside the comtainer

This will list containers with `container id` the run:

```sh
docker exec -it [container-id] bash
```

Depending on your docker version this may work for you instead(OPTIONAL)

```sh
docker exec -it [container-id] sh
```

### Cleanup

> The following command will delete all volumes and containers

```sh
Ctrl+C
docker-compose -f docker-compose.dev.yml down --volumes --remove-orphans --rmi local
```