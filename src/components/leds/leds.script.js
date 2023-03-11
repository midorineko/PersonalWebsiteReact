
window.onAmazonLoginReady = function() {
  amazon.Login.setClientId('amzn1.application-oa2-client.bba55ff9c03e4a2cb20740b75862b8e9');
};
(function(d) {
  var a = d.createElement('script'); a.type = 'text/javascript';
  a.async = true; a.id = 'amazon-login-sdk';
  a.src = 'https://assets.loginwithamazon.com/sdk/na/login1.js';
  d.getElementById('amazon-root').appendChild(a);
})(document);

document.getElementById('LoginWithAmazon').onclick = function() {
  options = {}
  options.scope = 'profile';
  options.scope_data = {
      'profile' : {'essential': false}
  };
  amazon.Login.authorize(options,
      'https://www.example.com/handle_login.php');
  return false;
};