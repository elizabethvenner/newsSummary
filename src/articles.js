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
  httpRequest.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body', true);
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
