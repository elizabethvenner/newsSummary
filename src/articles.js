function Articles (){
  this.items = [];
  this.webTitles = [];
}

Articles.prototype.getArticlesFromAPI = function () {
  var httpRequest = new XMLHttpRequest();
  var _this = this;
  httpRequest.onreadystatechange = function(){
    if (httpRequest.readyState == XMLHttpRequest.DONE) {
      _this._returnResult(httpRequest);
    } else {
      return httpRequest.readyState;
    }
  };
  httpRequest.open('GET', 'https://content.guardianapis.com/search?api-key=f81f1495-6eed-4a8f-bb2c-19e085e510f2', true);
  httpRequest.send(null);
};
var response;

Articles.prototype._returnResult = function (httpRequest) {
  if (httpRequest.status === 200) {
    response = httpRequest.responseText;
    this.pushToItemsArray(response);
  } else {
    return httpRequest.status;
  }
};

Articles.prototype.pushToItemsArray = function (response) {
  var headers = JSON.parse(response);
  this.items.push(headers);
};


Articles.prototype.getWebTitles = function () {
  for(var i = 0; i < 10; i++){
  var webTitle = this.items[0].response.results[i].webTitle;
    // console.log(webTitle);
    this.webTitles.push(webTitle);
  }
};



// Delete later
var articles = new Articles();
articles.getArticlesFromAPI();

//
