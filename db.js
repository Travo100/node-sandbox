const mysql = require("mysql");

function Database(host, database, user, password) {
    this.connection = mysql.createConnection({
        host     : host,
        user     : user,
        password : password,
        database : database
    });

    this.connection.connect(err => {
        if(err) throw err;
        console.log(`Connection made with ${this.connection.threadId}`);
    })

    this.getAllRecords = (tableName, cb) => {
        this.connection.query("SELECT * FROM ??", [tableName], (err, data) => {
            if(err) throw err;

            cb(data);
        });
    }

    this.closeConnection = () => {
        this.connection.end();
    }
}

module.exports = Database;