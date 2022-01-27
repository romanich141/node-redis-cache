require('dotenv').config();
const { PORT, API, EXPIRE_TIME } = process.env;
const app = require("express")();
const cors = require("cors");
const fetch = ( ...args ) => import('node-fetch').then (({ default: fetch }) => fetch ( ...args ));
const redis = require("redis");

app.use(cors());

const redisClient = redis.createClient({ url: 'redis://127.0.0.1:6379' });

const connectRedis = async () => {
    await redisClient.connect();
}

connectRedis();

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


app.listen(PORT, () => {
    console.log(`server started in port ${ PORT }`)
})