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
   
 // it ("should remove the message when button is clicked.", function() {
 //   expect($('#pMsg')).toHaveText("");
 // });
});
