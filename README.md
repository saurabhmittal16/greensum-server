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

1. Install [NodeJS v12](https://github.com/nodesource/distributions#installation-instructions),  [MongoDB v4.2](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)
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

## Notes-

- Enable authentication in MongoDB using [this](https://medium.com/mongoaudit/how-to-enable-authentication-on-mongodb-b9e8a924efac) link and this [fix](https://stackoverflow.com/questions/23943651/mongodb-admin-user-not-authorized).