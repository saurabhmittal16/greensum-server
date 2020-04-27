# GreenSum-Server

Node Server for the GreenSum Project.

## Technologies-

NodeJS  
Fastify  
MongoDB  
JWT for Auth

## Tools-

- [Compass](https://docs.mongodb.com/compass/master/install/) - To view data saved to mongo database
- [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) - To run the `test.http` file and test the API


## Installation -

1. Install NodeJS v10.18.0, MongoDB v4.0.14
2. Clone the repository using git
3. Run the mongod service  
   For Linux -

    ```shell
    sudo service mongod start
    ```

4. Install the dependencies in the project folder

    ```shell
    npm install
    ```

5. Run the node server using command -

    ```shell
    npm run dev
    ```

6. Use postman to send a GET request to [localhost:8080](localhost:8080) to test the server
