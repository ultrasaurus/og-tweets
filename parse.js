var fs = require("fs");


function filterMentions(t, mentions) {
 // match @mentions separate from text at end of line
 var re = /(@[^\s]*|[^@ ].*$)/g
 var result = t.full_text.match(re)
 if (result.length > 1) {
   for (var i=0; i < result.length-2; i++) {
     mentions[result[i]] = true;
   }
 }
 t.short_text = result[result.length-1];
}

function printTweet(t) {
  var name = t.user['screen_name'];
  console.log(name + ": " + t.short_text );
  if (!name) console.log(t);
}

function parseTweetFile(filePath) {
  var dataStr = fs.readFileSync(filePath);
  var data = JSON.parse(dataStr);
  console.log(data.length + " tweets");

  var mentions = {};
  for (var i in data) {
    filterMentions(data[i], mentions);
    printTweet(data[i]);
  }
  var names = Object.keys(mentions);
  console.log(names.length + ' mentions');
  console.log(names.join(' '));
}

parseTweetFile("./replies-all.json");