DOCKER_COMPOSE=$(shell which docker-compose 2> /dev/null || echo docker compose)

_docker-install:
	if [ `$(DOCKER_COMPOSE) images -q | wc -l` -eq 0 ] ; then $(DOCKER_COMPOSE) pull && $(DOCKER_COMPOSE) build ; fi

docker-start-dev: _docker-install
	ENV="development" $(DOCKER_COMPOSE) up -d

docker-start-prod: _docker-install
	ENV="production" $(DOCKER_COMPOSE) up -d

