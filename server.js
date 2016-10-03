var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
'article-two': {
title: 'Article-One | Zoo9',
heading:'Fawad Khan',
date: 'Sept 22, 2016',
content:   `                <p>
                    Fawad Afzal Khan is a Pakistani actor and singer. As a singer, he was one of the members of the band Entity Paradigm, an  alternative rock band based in Lahore. Their debut album Irtiqa was released in 2003, but the band was dissolved in 2007. Wikipedia
                
                </p>
                <p>
                    Novemberer 29, 1981 (age 34), Karachi, Pakistan
                    Height: 1.8 m
                    Upcoming movie: Maula Jatt 2
                    Children: Ayaan Khan
                </p>`

},
 'article-three': {
title: 'Article-One | Zoo9',
heading:'Fawad Khan',
date: 'Sept 22, 2016',
content:   `                <p>
                    Fawad Afzal Khan is a Pakistani actor and singer. As a singer, he was one of the members of the band Entity Paradigm, an  alternative rock band based in Lahore. Their debut album Irtiqa was released in 2003, but the band was dissolved in 2007. Wikipedia
                
                </p>
                <p>
                    Novemberer 29, 1981 (age 34), Karachi, Pakistan
                    Height: 1.8 m
                    Upcoming movie: Maula Jatt 2
                    Children: Ayaan Khan
                </p>`

},
 'article-one': {
title: 'Article-One | Zoo9',
heading:'Fawad Khan',
date: 'Sept 22, 2016',
content:   `                <p>
                    Fawad Afzal Khan is a Pakistani actor and singer. As a singer, he was one of the members of the band Entity Paradigm, an  alternative rock band based in Lahore. Their debut album Irtiqa was released in 2003, but the band was dissolved in 2007. Wikipedia
                
                </p>
                <p>
                    Novemberer 29, 1981 (age 34), Karachi, Pakistan
                    Height: 1.8 m
                    Upcoming movie: Maula Jatt 2
                    Children: Ayaan Khan
                </p>`

}
};
function createTemplate(data){
    
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;
var htmlTemplate = 
`<html>
<head>
    <title>
        ${title}
        </title>
        <meta name="viewport" content="width-device-width, initial-scale=1"/>
           <link href="/ui/style.css" rel="stylesheet" />
    </head>
     <body>
        <div class="container">
        <div>
            <a href='/'>Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
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



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function(req,res){
   counter = counter  + 1;
   res.send(counter.toString());
});

app.get('/:articleName', function(req,res){
    var articleName = res.params.articleName;
  res.send(createTemplate(articles[articleName]))
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names = [];
app.get('/submit-name/:name', function(req,res){
    var name = res.query.name;
    
    names.push(name);
    res.send(JSON.stringify(names));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
