## Prod

Using the production Dockerfile, build and tag the Docker image:

`$ docker build -f Dockerfile.prod -t pokedex:prod .`

Spin up the container:

`$ docker run -it --rm -p 3000:80 pokedex:prod`

Access the app using [http://localhost:3000](http://localhost:3000).

### Using docker compose:

Build the image and fire up the container:

`$ docker-compose -f docker-compose.prod.yml up -d --build`

Stop the app container:

`$ docker-compose stop`

## Dev 

Build and tag the Docker image:

`$ docker build -t pokedex:dev .`

Spin up the container:

`$ docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3000:3000 pokedex:dev`

### Using docker compose:

Build the image and fire up the container:

`$ docker-compose up -d --build`

Stop the app container:

`$ docker-compose stop`

# Available scripts in the React app

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed!
