function testArticleHasUrl(){
  var article = new Article('www.hello.com');
  try {
    assert.isTrue(article.url, 'www.hello.com');
    console.log("Passed: Article has URL");
  } catch(error) {
    console.log(error);
  }
}




testArticleHasUrl();
