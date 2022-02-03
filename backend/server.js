require('dotenv').config();
const { 
    SERVER_PORT, 
    API, 
    EXPIRE_TIME, 
    PORT_REDIS,
    HOST_REDIS,
} = process.env;
const RedisClient = require("./redis/RedisClient");
const app = require("express")();
const cors = require("cors");
const fetch = ( ...args ) => import('node-fetch').then (({ default: fetch }) => fetch ( ...args ));

app.use(cors());

// create redis client
const redisClient = new RedisClient();

// connect to redis client
(async () => {
    try {
        await redisClient.init({ 
            host: HOST_REDIS, 
            port: PORT_REDIS 
        });
    } catch (error) {
        throw error;
    }
})();

const getCache = async (req, res, next) => {
    const { username } = req.params;

    try {
        const data = await redisClient.get(username);
        if (data !== null) {
            res.send(data)
        } else {
            next();
        }
    } catch (error) {
        throw error;
    }
}

const getRepos = async (req, res) => {
    const { username } = req.params;
    
    try {
        const response = await fetch(`${ API }/${ username }`)
        const data = await response.json();

        await redisClient.set(
            username, 
            JSON.stringify(data), 
            { EX: EXPIRE_TIME, }
        );

        res.send(data);
    } catch (error) {
       res.status(500).send({ error: 'Something broke!' });
    }
}

app.get("/", (req, res) => {
    res.send("Server is working")
})

app.get("/repos/:username", getCache, getRepos)


app.listen(SERVER_PORT, () => {
    console.log(`server started in port ${ SERVER_PORT }`)
})