# My Node.js Server with Docker

This project sets up a basic Node.js server that serves an HTML file. The server is then containerized using Docker.

- `index.html`: The HTML file to be served.
- `server.js`: The Node.js server code.
- `Dockerfile`: Instructions to build the Docker image.
- `.dockerignore`: Specifies which files and directories to ignore when building the Docker image.
- `package.json`: Contains the project metadata and dependencies.

## Prerequisites

- [Node.js](https://nodejs.org/) (if you need to test the server locally without Docker)
- [Docker](https://www.docker.com/)

## Setup and Run

### Running the Server Locally

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/my-node-server.git
    cd my-node-server
    ```

2. Install dependencies (if any):

    ```sh
    npm install
    ```

3. Start the server:

    ```sh
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000`.

### Running the Server with Docker

1. Clone the repository (if you haven't already):

    ```sh
    https://github.com/codewithmuh/dockerize-nodejs.git
    cd my-node-server
    ```
### Using node:20 docker image
1. Build the Docker image:

    ```sh
    docker build -t my-node-server .
    ```

2. Run the Docker container:

    ```sh
    docker run -it --rm -p 3000:3000 my-node-server
    ```

3. Open your browser and navigate to `http://localhost:3000`.

### Using chainguard cgr.dev/chainguard/node:latest docker image
1. Build the Docker image:

    ```sh
    docker build -f  Dockerfile-distroless -t my-node-cg .
    ```

2. Run the Docker container:

    ```sh
    docker run -it --rm -p 3000:3000 my-node-cg
    ```

3. Open your browser and navigate to `http://localhost:3000`.
