var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var code1={
    title:'BALAJI IAMD',
    heading:'CODE 1',
    date:'AUG 15,2017',
    content:`               <p>this is my first code and plz help to me understand this concept and i want to learn something new
                            <br/>this is my first code and plz help to me understand this concept and i want to learn something new
                            <br/>this is my first code and plz help to me understand this concept and i want to learn something new</p>
                            
                            <p>this is my first code and plz help to me understand this concept and i want to learn something new
                            <br/>this is my first code and plz help to me understand this concept and i want to learn something new
                            <br/>this is my first code and plz help to me understand this concept and i want to learn something new</p>
                            
                            <p>this is my first code and plz help to me understand this concept and i want to learn something new
                            <br/>this is my first code and plz help to me understand this concept and i want to learn something new
                            <br/>this is my first code and plz help to me understand this concept and i want to learn something new</p>
                            `
    
};
function createTemplate (data){
var title=data.title;
var date=data.date;
var heading=data.heading;
var content=data.content;
var htmlTemplate= 
`
<html>
    <head>
           <title>
            ${title}
            </title>
            <link href="/ui/style.css" rel="stylesheet" />
    </head>
        <body>
            <div>
                <a href="/">Home</a>
            </div>
                     <hr/>
            <h3>
                    ${heading}
            </h3>
            <div class="container">
                    <div>
                        ${date}
                    </div>
                    <div>
                        ${content}
                            
                    </div>
            </div>
            </body>
</html>
`;
return htmlTemplate;
}


app.get('/code1',function(req,res)
{
    res.send(createTemplate(code1));
});
app.get('/code2',function(req,res)
{
    res.send('HI  THIS IS A NEW PAGE IN JS CODE2');
});
app.get('/code3',function(req,res)
{
    res.send('HI  THIS IS A NEW PAGE IN JS CODE3');
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
