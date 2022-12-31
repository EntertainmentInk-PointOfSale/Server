//@ts-nocheck
import Logger from "bunyan";

const bunyan = require('bunyan');

export class LogManager {
    private static logger:Logger;
    
    private static makeLogger() {
        var path_to_info_log  = __dirname + "/logs/info.log"
        var path_to_error_log = __dirname + "/logs/error.log"
        this.logger = bunyan.createLogger(
            {name:"retail_pos_logger",
            streams: [
                {
                    path: path_to_info_log,
                    level: "info"
                },
                {
                    path: path_to_error_log,
                    level: "error"
                }
            ]
        });
    }

    public static getLogger(): Logger {
        if (typeof LogManager.logger === "undefined") {
            LogManager.makeLogger();
        }
        return LogManager.logger;
    }
}

