//@ts-nocheck
import Logger from "bunyan";

const bunyan = require('bunyan');

export class LogManager {
    #logger:Logger;

    constructor() {
        if(LogManager._instance) {
            return LogManager._instancel
        } else {
            this.#logger = bunyan.createLogger(
                {name:"retail_pos_logger",
                streams: [
                    {
                        stream: process.stderr,
                        level: "info"
                    }
                ]
            });
            LogManager._instance = this;
        }
        
    }

    getLogger() {
        return this.#logger
    }
}

