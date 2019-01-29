// Set focus on the first text field || When Page loaded
$("#name").first().focus();
$("#other-title").hide();
$("#colors-js-puns").children().hide()
$("#payment").val('credit card');
$("p:contains('PayPal')").hide();
$("p:contains('Bitcoin')").hide();



///////// ”Job Role” section

$('#title').change(function(){
  if($('#title option:selected').text() === 'Other'){
  $('#other-title').show();
  }
  else {
  $('#other-title').hide();
  }
});



///////// ”T-Shirt Info” section
$('#design').on('change', (e) => {
  if (e.target.value.includes('puns')) {
    $("#colors-js-puns").children().show()
    $("#color").val('');
    $('#color option[value="dimgrey"]').hide();
    $('#color option[value="steelblue"]').hide();
    $('#color option[value="tomato"]').hide();
    $('#color option[value="cornflowerblue"]').show();
    $('#color option[value="darkslategrey"]').show();
    $('#color option[value="gold"]').show();
  }
  else if (e.target.value.includes('heart')) {
    $("#colors-js-puns").children().show()
    $("#color").val('');
    $('#color option[value="cornflowerblue"]').hide();
    $('#color option[value="darkslategrey"]').hide();
    $('#color option[value="gold"]').hide();
    $('#color option[value="dimgrey"]').show();
    $('#color option[value="steelblue"]').show();
    $('#color option[value="tomato"]').show();
  }
  else {
  $('#colors-js-puns').hide();
  }
});



///////// ”Register for Activities” section second Try
let cost = 0;
let showCost = $("<p></p>");
$('.activities').append(showCost);


$('input[type="checkbox"][name="all"]').change(function(){
  if(this.checked){
  cost += 200;
  }
  else {
  cost -= 200;
  }
  showCost.text('Total price is $' + cost);
});

$('input[type="checkbox"][name="npm"]').change(function(){
  if(this.checked){
  cost += 100;
  }
  else {
  cost -= 100;
  }
  showCost.text('Total price is $' + cost);
});

$('input[type="checkbox"][name="build-tools"]').change(function(){
  if(this.checked){
  cost += 100;
  }
  else {
  cost -= 100;
  }
  showCost.text('Total price is $' + cost);
});

$('input[type="checkbox"][name="js-frameworks"]').change(function(){
  if(this.checked){
  $('input[type="checkbox"][name="express"]').prop('disabled', true);
  cost += 100;
  }
  else {
    $('input[type="checkbox"][name="express"]').prop('disabled', false);
      cost -= 100;
  }
  showCost.text('Total price is $' + cost);
});

$('input[type="checkbox"][name="express"]').change(function(){
  if(this.checked){
  $('input[type="checkbox"][name="js-frameworks"]').prop('disabled', true);
  cost += 100;
  }
  else {
    $('input[type="checkbox"][name="js-frameworks"]').prop('disabled', false);
      cost -= 100;
  }
  showCost.text('Total price is $' + cost);
});

$('input[type="checkbox"][name="node"]').change(function(){
  if(this.checked){
  $('input[type="checkbox"][name="js-libs"]').prop('disabled', true);
    cost += 100;
  }
  else {
    $('input[type="checkbox"][name="js-libs"]').prop('disabled', false);
    cost -= 100;
  }
  showCost.text('Total price is $' + cost);
});

$('input[type="checkbox"][name="js-libs"]').change(function(){
  if(this.checked){
  $('input[type="checkbox"][name="node"]').prop('disabled', true);
    cost += 100;
  }
  else {
    $('input[type="checkbox"][name="node"]').prop('disabled', false);
      cost -= 100;
  }
  showCost.text('Total price is $' + cost);
});



//costs
/*let cost = 0;
let showCost = $("<p></p>");
$('.activities').append(showCost);

$('.activities').on('click', (e) => {

  if ($('input[type=checkbox]').attr('name') === 'all'){
            cost += 200;
  }
  if($('input[type=checkbox]').attr('name') === 'js-frameworks'){
            cost += 100;
  }
  if($('input[type=checkbox]').attr('name') === 'js-libs'){
            cost += 100;
  }
  if($('input[type=checkbox]').attr('name') === 'express'){
            cost += 100;
  }
  if($('input[type=checkbox]').attr('name') === 'node'){
            cost += 100;
  }
  if($('input[type=checkbox]').attr('name') === 'build-tools'){
            cost += 100;
  }
  if($('input[type=checkbox]').attr('name') === 'npm'){
            cost += 100;
  }
showCost.text('Total price is $' + cost);
  });
*/
//let showCost = $("<p></p>").text(cost);
//.text('The total cost is $' + cost)




///////// "Payment Info" section
$('#payment').on('change', (e) => {
  if (e.target.value.includes('credit'))      {
    $("#credit-card").show();
    $("p:contains('PayPal')").hide();
    $("p:contains('Bitcoin')").hide();
}
  else if (e.target.value.includes('paypal')) {
    $("p:contains('PayPal')").show();
    $("p:contains('Bitcoin')").hide();
    $("#credit-card").hide();
}
  else if (e.target.value.includes('bitcoin')) {
      $("p:contains('Bitcoin')").show();
      $("#credit-card").hide();
      $("p:contains('PayPal')").hide();
}
  else if (e.target.value.includes('select_method')){
          $("p:contains('Bitcoin')").hide();
          $("#credit-card").hide();
          $("p:contains('PayPal')").hide();
}
});


///////// Form validation



// valid Name -> Remove Error message "empty name field"

$('#name').on('input', function(){
  var input=$(this)
  var reg = /[a-z]|[A-Z]/;
  var is_name=reg.test(input.val());
    if(is_name){
      input.css("border","2px solid green");
      $('p:contains("Please enter your name")').remove()
  }
    else{
      input.css("border","2px solid red");
  }
  });



// valid Email -> Remove Error message "empty mail field"
$('#mail').on('input', function(){
  var input=$(this)
  var reg = /^[^@]+@[^@.]+\.[a-z]+$/i;
  var is_email=reg.test(input.val());
    if(is_email){
      input.css("border","2px solid green");
      $('p:contains("E-Mail")').remove()
  }
    else{
      input.css("border","2px solid red");
  }
  });



///////// Form validation messages


// Register Button

$('button[type="submit"]').click(function(){

$('.invalid').remove();

    var checked = $(".activities input:checked").length > 0;
if (!checked){
      $('.activities').prepend('<p id="noCheckbox" class="invalid">Please select an activity</p>');
      alert('Please check the red fields')
}
//&& $('.invalid:not:(contains:("Please enter a valid E-Mail")')
if($('#mail').val() == ''){
      $('#mail').addClass('warning');
      $('label[for="mail"]').prepend('<p id="invalid-mail" class="invalid">Please enter a valid E-Mail</p>');
}
if ($('#mail').val() !== ''){
      $('#name').removeClass('warning');
      $('#noCheckbox').remove()
}
if($('#name').val() == ''){
      $('#name').addClass('warning');
      $('label[for="name"]').append('<p id="invalid-name" class="invalid">Please enter your name</p>');
}
if ($('#name').val() !== ''){
      $('#name').removeClass('warning');
      $('#invalid-name').remove()
}
if($('#cc-num').val() == ''){
   $('#cc-num').addClass('warning')
   $("label[for='payment']").append('<p id="ccnumber" class="invalid">Please enter a credit card number</p>');
}
if ($('#cc-num').val() !== ''){
    $('#cc-num').removeClass('warning');
}
if($('#zip').val() == ''){
   $('#zip').addClass('warning');
}
if ($('#zip').val() !== ''){
    $('#zip').removeClass('warning');
}
if($('#cvv').val() == ''){
   $('#cvv').addClass('warning');
}
if ($('#cvv').val() !== ''){
    $('#cvv').removeClass('warning');
}
if($('#cc-num').val().length > 16){
  $('#cc-num').css('border-color', 'red');
    $("label[for='payment']").append('<p id="ccnumber" class="invalid">Please enter a number that is between 13 and 16 digits long.</p>');
}
if($('#cc-num').val().length > 0 && $('#cc-num').val().length < 13 ){
  $('#cc-num').css('border-color', 'red');
    $("label[for='payment']").append('<p id="ccnumber" class="invalid">Please enter a number that is between 13 and 16 digits long.</p>');
}
if($('#zip').val().length !== 5){
      $('#zip').css('border-color', 'red');
}
if($('#cvv').val().length !== 3){
   $('#cvv').css('border-color', 'red');
}
      return false;
});



//remove Please check at least one checkbox
$('input[type="checkbox"]').change(function(){
  if(this.checked){
  $('#noCheckbox').remove()
}
});



// credit card error if it is empty
$('#cc-num').off().on('input',function(){
var input=$(this);
var reg = /^[0-9]{13,16}$/;
var is_number=reg.test(input.val());
  if(is_number){
    input.css("border","2px solid green");
    $("p:contains('Please enter a credit card number')").hide();
    $("p:contains('between 13 and 16')").hide();
}
  else{
    input.css("border","2px solid red");
  }});

$('#cc-num').on('input',function(){
  $('.invalid').remove();

var input=$(this);
var reg = /(^.{1,12}$|^.{17,10000}$)/;
var is_number=reg.test(input.val());
  if(is_number){
  input.css("border","2px solid red");

    $("p:contains('Please enter a credit card number')").hide();
    $("label[for='payment']").append('<p id="ccnumber" class="invalid">Please enter a number that is between 13 and 16 digits long.</p>');
  }});



// ZipCode error if it is empty
  $('#zip').on('input',function(){
  var input=$(this);
  var reg = /^[0-9]{5}$/;
  var is_zip=reg.test(input.val());
    if(is_zip){
      input.css("border","2px solid green");
  }
    else{
      input.css("border","2px solid red");
    }});



// CVV error if it is empty
    $('#cvv').on('input',function(){
    var input=$(this);
    var reg = /^[0-9]{3}$/;
    var is_cvv=reg.test(input.val());
      if(is_cvv){
        input.css("border","2px solid green");
    }
      else{
        input.css("border","2px solid red");
      }});
