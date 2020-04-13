
var myheading = "This is My Web Page!";
var linktag = "<a href=\"http://www.webxpertz.net\"> Web Site Link!</a>";
var sometext = "This text can be affected by other statements.";
var begineffect = "<em>";
var endeffect = "</em>";
var beginpara = "<p>";
var endpara = "</p>";

document.write(myheading);
document.write(`${begineffect} ${sometext} ${endeffect}`);
document.write(`${beginpara} ${linktag} ${endpara}`);
document.write(`${beginpara} ${sometext} ${endpara}`);