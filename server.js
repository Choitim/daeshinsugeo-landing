const express = require('express');
 const app = express();

 app.use(express.static(__dirname + '/assets'));


 app.listen(8080, function(){
    console.log('listen on 8080');
 });

 app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')

 });

 app.get('/subscribe', function(req,res){
    res.sendFile(__dirname + '/subscribe.html')
 });


 app.get('/sign', function(req, res){
    res.sendFile(__dirname + '/sign.html')

 });




  const makeAdder = function(x) {
    return function(y) {
      return x + y;
    }
  }
  
  const addTwo = makeAdder(2);
  
  console.log(addTwo(3)); // 5
  

    




