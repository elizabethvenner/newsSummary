function Articles (){
  this.items = [];
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
    console.log(response);
    this.pushToItemsArray(response);
  } else {
    return httpRequest.status;
  }
};

Articles.prototype.pushToItemsArray = function (response) {
  this.items.push(response);
};

var articles = new Articles();
articles.getArticlesFromAPI();
