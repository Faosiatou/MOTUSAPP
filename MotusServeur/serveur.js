const express = require('express')
const app = express()
const path = require('path')
const sessionStorage = require('sessionstorage-for-nodejs');

var ls = require('local-storage');
const sessions = require('express-session')

const port = process.env.PORT || 3000
//const port2 = 3001



var fs = require("fs")
text_francais = fs.readFileSync("data/liste_francais_utf8.txt", "utf8")
text = text_francais.toString().split('\r\n')

// express session


app.set('trust proxy', 1) // trust first proxy
app.use(sessions({
  secret: 's3Cur3',
  name: 'sessionId'
}));


app.get('/callback',(req,res)=>{
  
  req.session.user = req.query.token;

  res.redirect('/')
})



app.use(function (req, res, next){
  if(req.session.user) {
   next()
  }else{
    console.log("erreur")
    res.redirect('http://localhost:4000/login.html')
  }
})

app.use(express.static('www'));










var bodyParser = require('body-parser')
app.use( bodyParser.json() );       //to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     //to support URL-encoded bodies
  extended: true
})); 

app.use(express.json());       //to support JSON-encoded bodies
app.use(express.urlencoded()); 

var rand = ~~(Math.random()*text.length);
var rValue = text[rand];
console.log(rValue)


/*app.post('/test', function(req, res) {
  var mot = req.body.mot
  res.send(mot)
  console.log(mot)  
});
*/
app.get('/health', (req, res) => {
  res.send(JSON.stringify(req.session))
})

app.get('/mot' , function(req, res){
  //console.log(taille)
  res.send(rValue)
})

/*app.get('/', function(req, res) {
  res.render(__dirname + '/html/page.html')
})
*/

//app.engine('html', require('ejs').renderFile);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

