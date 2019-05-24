<!DOCTYPE HTML>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>Jasmine v2.0 DOM Tests Spec Runner</title>
 
  <link rel="shortcut icon" type="image/png" href="images/jasmine_favicon.png">
  <link rel="stylesheet" type="text/css" href="lib/jasmine-core/jasmine.css">
 
  <script type="text/javascript" src="lib/jasmine-core/jasmine.js"></script>
  <script type="text/javascript" src="lib/jasmine-core/jasmine-html.js"></script>
  <script type="text/javascript" src="lib/jasmine-core/boot.js"></script>
  <script type="text/javascript" src="lib/jasmine-core/jquery-1.7.2.js"></script>
  <script type="text/javascript" src="lib/jasmine-core/jasmine-jquery.js"></script>
   
  <script type="text/javascript">
    var MSG = "42";
      describe("Show message tests", function() {
        beforeEach(function() {
          setUpHTMLFixture();
            $('#txtMessage').val(MSG);
            $('#btnShowMessage').trigger( "click" );
     });
   
  it ("should display the message when button is clicked.", function() {
    expect($('#pMsg')).toHaveText($('#txtMessage').val());
  });
});
  
describe("Hide message tests", function() {
  beforeEach(function() {
    setUpHTMLFixture();
    $('#pMsg').text(MSG);
    $('#btnHideMessage').trigger( "click" );
  });
});
  </script>
</head>
<body>
</body>
</html>
