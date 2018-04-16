vvar express = require("express");
var bodyParser = require('body-parser');
var app = express();
const mongoClient = require('mongodb').MongoClient;
app.use(bodyParser.urlencoded({extended: true}));
var database = null;

new mongoClient("mongodb://ds153198.mlab.com:53198/node_db", {
  auth: {
    user:'admin',
    password:'pass',
    }
}).connect(
  (err, db) => {
      if (err) return console.error(err);
      console.log('Database connected');
      database = db.db('node_db'); 
});
  
//   , function (err, client){
//   db = client('node_db')
//   app.listen(3000, () => {
//     console.log('listening on 3000')
//   })
// });
                                               
                    
//       (err, client) => {
  
//   db = client.db('node_db');
//   app.listen(3000, () => {
//     console.log('listening on 3000')
//   })
// })





app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.post('/firstName', (req, res) => {
  console.log(req.body)
});
