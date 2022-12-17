//@ts-nocheck

import { StockCategoryAccess } from "./ModelAccess/StockCategoryAccess";
import { StockCategoryDB } from "./ModelDBs/StockCategoryDB";

var mysql = require('mysql2');
var data =  require('../../credentials.json');
const { TaxAccess } = require('./ModelAccess/TaxAccess');
var queries = require('./Queries/creation_queries.json')


//Data Singleton
var myData = (function() {
    'use strict';

    var instance;
    var _pool = null;

    var _con = mysql.createConnection({
        host : "localhost",
        user : data.mysql_user,
        password: data.mysql_pass
    })

    function _createTables() {
        _con.connect(function(err) {
            if (err) {
                console.log('err ' + err.stack);
                return;
            }
            
            console.log('Connected as id ' + _con.connectionId);
        })

        _con.query(queries.create_db, function(error, results, fields) {
            if(error) {
                console.log(error);
            }
            console.log("Database succesfullly created");
        })

        _con = mysql.createConnection({
            host : "localhost",
            user : data.mysql_user,
            password: data.mysql_pass,
            database : "EI_PLACE_DATA"
        })

        _con.query(queries.create_stock_category, function(error, results, fields) {
            if(error) {
                console.log(error);
            }
            console.log("Stock Category succesfullly created");
        })

        _con.query(queries.create_tax, function(error, results, fields) {
            if(error) {
                console.log(error);
            }
            console.log("Tax succesfullly created");
        })

        _con.query(queries.create_supplier, function(error, results, fields) {
            if(error) {
                console.log(error);
            }
            console.log("Supplier succesfullly created");
        })

        _con.query(queries.create_stock, function(error, results, fields) {
            if(error) {
                console.log(error);
            }
            console.log("Stock succesfullly created");
        })

        _pool = mysql.createPool({
            host : "localhost",
            user : data.mysql_user,
            password: data.mysql_pass,
            database : "EI_PLACE_DATA",
            connectionLimit : 10,
            queueLimit : 0
        })
    }

    function _createInstance() {
        var object = new Object();

        _createTables();


        return object;
    }

    return {
        getInstance: function () {
            if(!instance){
                console.log("Made instance")
                instance = _createInstance();
            }
            return instance;
        },

        getPool: function () {
            return _pool;
        }
    }
})();

myData.getInstance();

const tax:TaxDB = new TaxAccess(myData.getPool())
const category:StockCategoryDB = new StockCategoryAccess(myData.getPool())

module.exports = {myData,tax,category}







