# Search Advertisements

## Getting Started

- After cloning the repo we need to install the dependencies for frontend as well as backend
- For that we need to run the below command

  ```
      cd ./DeepTalekar-frontend
      yarn install

      cd ..
      cd ./DeepTalekar-backend
      yarn install
  ```

- Now for setting up the backend you will need to have a MongoDB Database up & running with the connection string and the port number on which the backend should run on stored in the `.env` file in the `DeepTalekar-backend` directory
- The content of the `.env` file should look like this:

  ```
  DATABASE_URL="<YOUR_DATABASE_CONNECTION_STRING>"
  PORT=<PORT_NUMBER_OF_YOUR_WISH>
  ```

## Running the Backend Application

- For running the backend in dev mode we need to run the following command

  ```
    cd ./DeepTalekar-backend
    yarn run dev
  ```

## Running the Frontend Application

- For running the frontend in dev mode we need to run the following command

  ```
    cd ./DeepTalekar-frontend
    yarn run dev
  ```

- Open http://localhost:3000 with your browser to see the result.
