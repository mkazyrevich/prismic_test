	
var Prismic = require('prismic-javascript');
 
var apiEndpoint = "https://makstestrep.prismic.io/api/v2";
 
Prismic.getApi(apiEndpoint).then(function(api) {  return api.getSingle('test_type')}).then(function(response) {
  console.log("Documents: ", response.data.users);
}, function(err) {
  console.log("Something went wrong: ", err);
});