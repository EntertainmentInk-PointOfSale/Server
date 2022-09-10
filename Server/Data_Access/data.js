var mysql = require('mysql2');
var data =  require('../../credentials.json');

var con = mysql.createConnection({
    host : "localhost",
    user : data.mysql_user,
    password: data.mysql_pass
})

con.connect(function(err) {
    if (err) {
        console.log('err ' + err.stack);
        return;
    }

    console.log('Connected as id ' + con.threadId);
})
