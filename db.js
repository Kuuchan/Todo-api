var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var sequilize;

if (env === 'production')//uses heroku environment
{
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres'
    });
}
else
{

     sequelize = new Sequelize(undefined, undefined, undefined, {//uses squlite
     'dialect': 'sqlite',
     'storage': __dirname + '/data/dev-todo-api.sqlite'
     });
}


var db = {};

db.todo = sequelize.import(__dirname + '/models/todo.js');
db.user = sequelize.import(__dirname + '/models/user.js');
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;