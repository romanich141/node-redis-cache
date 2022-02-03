const redis = require("redis");

class RedisClient {
    constructor() {
        this.client = null;
    }

    async init({ host, port }) {
        this.client = redis.createClient({ 
            url: `redis://${ host }:${ port }` 
        });
        
        await this.client.connect();

        return this.client;
    }

    // async connect() {
    //     await this.client.connect();
        
    //     return this.client;
    // }

    async get(key) {
        return await this.client.get(key);
    }
}

module.exports = RedisClient;