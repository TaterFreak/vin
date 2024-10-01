DOCKER_COMPOSE=$(shell which docker-compose 2> /dev/null || echo docker compose)
MONGO_CONTAINER = $(DOCKER_COMPOSE) exec mongo
MONGO_USER = admin
MONGO_PASSWORD = admin

_docker-install:
	if [ `$(DOCKER_COMPOSE) images -q | wc -l` -eq 0 ] ; then $(DOCKER_COMPOSE) pull && $(DOCKER_COMPOSE) build ; fi

docker-start-dev: _docker-install
	ENV="development" $(DOCKER_COMPOSE) up -d

docker-start-prod: _docker-install
	ENV="production" $(DOCKER_COMPOSE) up -d

create-nitro-db:
	@echo "Creating nitro database..."
	$(MONGO_CONTAINER) mongosh -u $(MONGO_USER) -p $(MONGO_PASSWORD) --file ./scripts/create_nitro_db.js
	@echo "Nitro database created with 'defaultCollection'."
