var mysql = require('mysql2');
var data =  require('../../credentials.json');
var queries = require('./Queries/creation_queries.json')

class Data {

    constructor() {

        this.pool;

        //Define inital connection used to construct DB
        let con = mysql.createConnection({
            host : "localhost",
            user : data.mysql_user,
            password: data.mysql_pass
        })

        con.connect(function(err) {
            if (err) {
                console.log('err ' + err.stack);
                return;
            }

            console.log("Connected " + con)

            console.log('Connected as id ' + con.threadId);
        })

        con.query(queries.create_db, function(error, results, fields) {
            if(error) {
                console.log(error);
            }
            console.log("Database succesfullly created");
        })

        con = mysql.createConnection({
            host : "localhost",
            user : data.mysql_user,
            password: data.mysql_pass,
            database : "EI_PLACE_DATA"
        })

        con.query(queries.create_stock_category, function(error, results, fields) {
            if(error) {
                console.log(error);
            }
            console.log("Stock Category succesfullly created");
        })

        con.query(queries.create_tax, function(error, results, fields) {
            if(error) {
                console.log(error);
            }
            console.log("Tax succesfullly created");
        })



       
    }

}

module.exports = {Data}







