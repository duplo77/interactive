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

//”T-Shirt Info” section
/*$('#design').change(function(){
  if($('#design option:selected').text() === 'Theme - JS Puns'){
    $("#colors-js-puns").children().show()
    $('#color option[value="dimgrey"]').hide();
    $('#color option[value="steelblue"]').hide();
    $('#color option[value="tomato"]').hide();
  }
  else if($('#design option:selected').text() === 'Theme - I &#9829; JS') {
    $("#colors-js-puns").children().show()
    $('#color option[value="cornflowerblue"]').hide();
    $('#color option[value="darkslategrey"]').hide();
    $('#color option[value="gold"]').hide();
  }
  else {
  $('#colors-js-puns').hide();
  }
});*/

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

// ”Register for Activities” section first Try
/*$('.activities').on('change', (e) => {
  if (e.target.name.includes('js-frameworks')){
    $('input[type="checkbox"][name="express"]').prop('disabled', true);
  }
  else {
    $('input[type="checkbox"][name="express"]').prop('disabled', false);
  }
  if (e.target.name.includes('express')){
    $('input[type="checkbox"][name="js-frameworks"]').prop('disabled', true);
}
});
*/

///////// ”Register for Activities” section second Try
$('input[type="checkbox"][name="js-frameworks"]').change(function(){
  if(this.checked){
  $('input[type="checkbox"][name="express"]').prop('disabled', true);
  }
  else {
    $('input[type="checkbox"][name="express"]').prop('disabled', false);
  }
});

$('input[type="checkbox"][name="express"]').change(function(){
  if(this.checked){
  $('input[type="checkbox"][name="js-frameworks"]').prop('disabled', true);
  }
  else {
    $('input[type="checkbox"][name="js-frameworks"]').prop('disabled', false);
  }
});

$('input[type="checkbox"][name="node"]').change(function(){
  if(this.checked){
  $('input[type="checkbox"][name="js-libs"]').prop('disabled', true);
  }
  else {
    $('input[type="checkbox"][name="js-libs"]').prop('disabled', false);
  }
});

$('input[type="checkbox"][name="js-libs"]').change(function(){
  if(this.checked){
  $('input[type="checkbox"][name="node"]').prop('disabled', true);
  }
  else {
    $('input[type="checkbox"][name="node"]').prop('disabled', false);
  }
});

//costs

let cost = 0;
let showCost = $("<p></p>").text(cost);

$('.activities').on('change', (e) => {
  if ($(this).attr('name') === 'all') {
            cost += 200;
  }
  if($(this).attr('name') === 'js-frameworks'){
            cost += 100;
  }
  updateCost();
  });

  function updateCost(){
    $('.activities').append(showCost.text('The total cost is $' + cost));
  }

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

//name field cant be empty
$('#mail').click(function(){
   if($('#name').val() == ''){
      $('#name').addClass('warning');
      $('label[for="name"]').append('<p id="invalid-name" class="invalid">Please enter your name</p>');
   }
});

$('#name').change(function(){
  if ($('#name').val() !== ''){
  $('#name').removeClass('warning');
  $('#invalid-name').remove()
}
});


// valid Email
function IsEmail(email){
    var reg = /^[a-zA-Z0-9\.\-\+]+\@([a-zA-Z0-9\-]+\.)+[a-zA-Z0-9]{2,4}$/
    return reg.test(email)
}

$('#title').click(function(){
    if($('#mail').val() == ''){
       $('#mail').addClass('warning');
      $('label[for="mail"]').append('<p id="invalid-mail" class="invalid">Please enter a valid E-Mail</p>');
    }
    });

$('#mail').change(function(){
    if ($('#mail').val() !== ''){
        $('#mail').removeClass('warning');
        $('#invalid-mail').remove()
    }
    });



///////// Form validation messages

// Register Button
/*
$('button[type="submit"]').click(function(){
    var checked = $(".activities input:checked").length > 0;
if (!checked){
      $('.activities').prepend('<p id="noCheckbox" class="invalid">Please select an activity</p>');
}

if($('#name').val() == ''){
      $('#name').addClass('warning');
}

if($('#mail').val() == ''){
      $('#mail').addClass('warning');
      $('#mail').prepend('<p id="noCheckbox" class="invalid">Please enter a valid E-Mail</p>');
}
if($('#name').val() == ''){
      $('#name').addClass('warning');
      $('label[for="name"]').append('<p id="invalid-name" class="invalid">Please enter your name</p>');
}
if ($('#name').val() !== ''){
      $('#name').removeClass('warning');
      $('#invalid-name').remove()
      }
    });
*/




// info if no checkbox is checked
$('#payment').click(function(){
  var checked = $(".activities input:checked").length > 0;
    if (!checked){
      $('.activities').prepend('<p id="noCheckbox" class="invalid">Please select an activity</p>');
    }
});
//remove Please check at least one checkbox
$('input[type="checkbox"]').change(function(){
  if(this.checked){
  $('#noCheckbox').remove()
}
});


// credit card error if it is empty
$('#zip').click(function(){
  if($('#cc-num').val() == ''){
     $('#cc-num').addClass('warning');
  }
});

$('#cc-num').change(function(){
    if ($('#cc-num').val() !== ''){
        $('#cc-num').removeClass('warning');
    }
    });


// ZipCode error if it is empty
$('#cvv').click(function(){
  if($('#zip').val() == ''){
     $('#zip').addClass('warning');
  }
});

$('#zip').change(function(){
    if ($('#zip').val() !== ''){
        $('#zip').removeClass('warning');
    }
});


// CVV error if it is empty
$('#exp-month').click(function(){
  if($('#cvv').val() == ''){
     $('#cvv').addClass('warning');
  }
});

$('#cvv').change(function(){
    if ($('#cvv').val() !== ''){
        $('#cvv').removeClass('warning');
    }
});
