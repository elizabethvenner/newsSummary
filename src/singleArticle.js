function singleArticle (url) {
  this.url = url;
  this.headline = "";
  this.image = "";
  this.newsSummary = "";
}

singleArticle.prototype.getInfoFromAPI = function () {
  var httpRequest = new XMLHttpRequest();
  var _this = this;
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      _this._responseHandler(httpRequest);
    } else {
      return httpRequest.readyState;
    }
  };
  httpRequest.open('GET', url+'?show-fields=body', true);
  httpRequest.send(null);
};

singleArticle.prototype._responseHandler = function (httpRequest) {
  if (httpRequest.status === 200) {
    this.headline = httpRequest.responseText.response.content.webTitle;
  } else {
    return httpRequest.status;
  }
};

var objects = []

Article.apiURLS.forEach(function(url, index){
  objects.push('article' + index = new Article(url);)
});

objects.forEach(function(article){
  article.getInfoFromAPI();
})
