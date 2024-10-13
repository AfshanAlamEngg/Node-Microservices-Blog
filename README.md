# Blog Application

This is a basic microservices-based blog application built with Node.js and React. The application consists of two main services: the Post service and the Comment service. The frontend is a simple React client.

## Table of Contents

- Features
- Architecture
- Installation
- Usage
- API Endpoints
- Contributing
- License

## Features

- Create, read, update, and delete blog posts.
- Add comments to blog posts.
- Simple and responsive React frontend.

## Architecture

The application is divided into three main components:

1. **Post Service**: Manages blog posts.
2. **Comment Service**: Manages comments on blog posts.
3. **React Client**: Provides a user interface for interacting with the blog.

## Installation

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- Docker (optional, for containerized deployment)

### Steps

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/blog-application.git
    cd blog-application
    ```

2. Install dependencies for each service:
    ```sh
    cd post-service
    npm install
    cd ../comment-service
    npm install
    cd ../client
    npm install
    ```

3. Start the services:
    ```sh
    # In separate terminal windows or using a process manager like pm2
    cd post-service
    npm start
    cd ../comment-service
    npm start
    cd ../client
    npm start
    ```

## Usage

Once the services are running, you can access the React client at `http://localhost:3000`. Use the interface to create, view, update, and delete posts and comments.

## API Endpoints

### Post Service

- `GET /posts`: Retrieve all posts.
- `POST /posts`: Create a new post.
- `GET /posts/:id`: Retrieve a specific post.
- `PUT /posts/:id`: Update a specific post.
- `DELETE /posts/:id`: Delete a specific post.

### Comment Service

- `GET /comments`: Retrieve all comments.
- `POST /comments`: Create a new comment.
- `GET /comments/:id`: Retrieve a specific comment.
- `PUT /comments/:id`: Update a specific comment.
- `DELETE /comments/:id`: Delete a specific comment.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
