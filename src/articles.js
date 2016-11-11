function Articles (){
  this.items = [];
  this.apiUrls = [];
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

Articles.prototype._returnResult = function (httpRequest) {
  if (httpRequest.status === 200) {
    var response = httpRequest.responseText;
    this.pushToItemsArray(response);
  } else {
    return httpRequest.status;
  }
};

Articles.prototype.pushToItemsArray = function (response) {
  var headers = JSON.parse(response);
  console.log(headers);
  this.items.push(headers);
};


Articles.prototype.getWebUrls = function () {
  for(var i = 0; i < 10; i++){
  var apiUrl = this.items[0].response.results[i].apiUrl;
    console.log(apiUrl);
    this.apiUrls.push(apiUrl);
  }
};



// Delete later
var articles = new Articles();
articles.getArticlesFromAPI();

//
