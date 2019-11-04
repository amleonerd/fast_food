/*First thing that is going to
need to happen will be to setup a 
http server with NodeJS. 
To do this there is
going to have to be a new js file.
In that file require in the http 
and url builtin Nodejs modules 
and set them to a variable of the 
same name.*/
var sys = require("sys"),
    myhttp = require("http");

myhttp.createServer(function(request,response){
  var mystr = 'your dynamic value';
  callback(request, response, mystr); // injecting value using custom function
}).listen(8082);   //How do I pass a String here ?

function callback(request,response, str) {
    response.writeHeader(200, {"Content-Type": "text/plain"});
    response.write("msg");   //I want to access the string value being passed above
    response.end();
}
