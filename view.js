window.onload = function() {
  // scriptHead('notes.js');
  // scriptHead('note.js');
  heading("Jekl News");
  div('errors');
  newsItems();
  div('full');
  // scriptBody('controller.js');
  console.log("1st");
  console.log(window.location);
  if (findTestFile(window.location) === "testIndex.html") {
     scriptBody('test/newsFeatureSpec.js');
  }
};

function findTestFile (location){
    var filePath = location.pathname.split('/');
    var fileName = filePath[filePath.length -1];
    return fileName;
}

function heading(text) {
  var h1 = document.createElement("H1");
  var t = document.createTextNode(text);
  h1.appendChild(t);
  document.body.appendChild(h1);
}

function div(idValue) {
  var div = document.createElement('DIV');
  div.setAttribute("id", idValue);
  document.body.appendChild(div);
}

function newsItems() {
  var ul = document.createElement('UL');
  ul.setAttribute("id", "notes");
  document.body.appendChild(ul);
}

function scriptHead(srcValue) {
  var script = document.createElement('SCRIPT');
  script.setAttribute("src", srcValue);
  document.head.appendChild(script);
}

function scriptBody(srcValue) {
  var script = document.createElement('SCRIPT');
  script.setAttribute("src", srcValue);
  document.body.appendChild(script);
}

function addNoteToList(note) {
  var a = document.createElement('a');
  var ul = document.getElementById("notes");
  var li = document.createElement("li");
  var text = document.createTextNode(note.truncator(note.getNoteText()));
  a.id = myNotes.getNoteIndex();
  a.title = text;
  a.href = "#" + a.id;
  a.appendChild(text);
  li.appendChild(a);
  ul.appendChild(li);
}
