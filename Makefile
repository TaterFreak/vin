DOCKER_COMPOSE=$(shell which docker-compose 2> /dev/null || echo docker compose)

_docker-install:
	if [ `$(DOCKER_COMPOSE) images -q | wc -l` -eq 0 ] ; then $(DOCKER_COMPOSE) pull && $(DOCKER_COMPOSE) build ; fi

docker-start: _docker-install
	$(DOCKER_COMPOSE) up -d

