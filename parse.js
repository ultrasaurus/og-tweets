var fs = require("fs");

var dataStr = fs.readFileSync("./all.json");
var data = JSON.parse(dataStr);
console.log("length:", data.length);


function filterMentions(t) {
 // match @mentions separate from text at end of line
 var re = /(@[^\s]*|[^@ ].*$)/g
 var result = t.full_text.match(re)
}

function printTweet(t) {
  var name = t.user['screen_name'];
  console.log(name, ": ", t.full_text);
  if (!name) console.log(t);
}

for (var i in data) {
  printTweet(data[i]);
}

