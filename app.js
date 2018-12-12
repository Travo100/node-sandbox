require('dotenv').config()
const inquirer = require("inquirer");
const cTable = require("console.table");
const DB = require("./db");

var db = new DB("localhost", "sandboxDB", "root", process.env.password);

db.getAllRecords("foo", data => { 
    console.table(data);
    db.closeConnection();
});
