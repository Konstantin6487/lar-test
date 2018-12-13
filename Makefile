install: install-deps

run:
	npm run start

install-deps:
	npm install

build:
	rm -rf build
	npm run build

lint:
	npm run lint

test:
	npm test -- --coverage

deploy:
	npm run deploy

cost:
	npm run cost

.PHONY: build
