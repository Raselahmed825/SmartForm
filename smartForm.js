// Your jQuery goes here

var userData = {};
if(window.localStorage.getItem('userData')){
  userData= JSON.parse(localStorage.getItem('userData'));
  $('.question').hide();
  $('#'+userData.currentQuestion).show();
  $("#name").val(userData.name);
  $("#email").val(userData.email);
}else {

userData = {

  name:"test",
  email:"",
  html:{links:[], dislikes:[]},
  css: {links:[], dislikes:[]},
  js:  {links:[], dislikes:[]},
  strengths: {html:"", css:"", js:""},
  currentQuestion: "welcome"

};
localStorage.setItem('userData', JSON.stringify(userData));
}


$("#startBtn").click(function(event){
  $("#welcome").hide();
  $("#q1").show();
  //add a new code to check if the user have entered previous values
  if(userData.name){
    $("#name").val(userData.name);
  }
});


$("#name").change(function(event){

  console.log($("#name").val());
});


$("#email").change(function(event){

  console.log($("#email").val());
//to-do: validate email value
  if($("#email").val() && $("#name").val() )
    $("#q1Next").prop("disabled",false);

});


$("#q1Next").click(function(event){
  userData.name= $("#name").val();
  userData.email= $("#email").val();
  userData.currentQuestion = "q1";
  localStorage.setItem('userData', JSON.stringify(userData));
  $("#q1").hide();
  $("#q2").show();

});

$("#htmlQ").click(function(event){

    $("#q1").hide();
    $("#q2a").show();

});



$("#cssQ").click(function(event){

    $("#q1").hide();
    $("#q2b").show();

});

$("#jsQ").click(function(event){

    $("#q1").hide();
    $("#q2c").show();

});


$(".prevQ2").click(function(event){

    $("#q2").show();
    $(this).parent().hide();

});
