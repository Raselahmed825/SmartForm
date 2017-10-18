
//local storage
var userData = {};
if(localStorage.getItem('userData')){
  userData = JSON.parse(localStorage.getItem('userData'));
  $(".question").hide();
  $("#"+userData.currentQuestion).show();
  $("#name").val(userData.name);
  $("#email").val(userData.email);

  if(userData.name!="" && userData.email!="")
    $("#q1nxt").prop("disabled",false);
  var l = $("#q2a input[name='LHTML']");
  for(var i=0; i<userData.html.likes; i++){
    $(l[userData.html.likes[i]]).prop('checked', true);
  }


  var dl = $("#q2a input[name='DHTML']");
  for(var i=0; i<userData.html.dislikes; i++){
    $(dl[userData.html.dislikes[i]]).prop('checked', true);
  }

  l = $("#q2b input[name='LCSS']");
  for(var i=0; i<userData.css.likes; i++){
    $(l[userData.css.likes[i]]).prop('checked', true);
  }


  dl = $("#q2b input[name='DCSS']");
  for(var i=0; i<userData.css.dislikes; i++){
    $(dl[userData.css.dislikes[i]]).prop('checked', true);
  }

  l = $("#q2c input[name='LJS']");
  for(var i=0; i<userData.js.likes; i++){
    $(l[userData.js.likes[i]]).prop('checked', true);
  }


  dl = $("#q2c input[name='DJS']");
  for(var i=0; i<userData.js.dislikes; i++){
    $(dl[userData.js.dislikes[i]]).prop('checked', true);
  }


  $("#htmlnxt, #cssnxt, #jsnxt").click(function(event){
    if (userData.position[0] == true && userData.position[1] == true && userData.position[2] == true) {
      $("#q2").hide();
      $("#q2a").hide();
      $("#q2b").hide();
      $("#q2c").hide();
      $("#q3").show();
    }
  });

  var kk = $("#q3 input[name='Rhtml']");
  for(var i=0; i<kk.length; i++){
    if(i == userData.strengths.html)
      $(kk[i]).prop('checked', true);
  }


  var kk = $("#q3 input[name='Rcss']");
  for(var i=0; i<kk.length; i++){
    if(i == userData.strengths.css)
      $(kk[i]).prop('checked', true);
  }


  var kk = $("#q3 input[name='Rjs']");
  for(var i=0; i<kk.length; i++){
    if(i == userData.strengths.js)
      $(kk[i]).prop('checked', true);
  }

  
  $("#q3nxt").click(function(event){
    if(userData.strengths.html!="" && userData.strengths.css!="" && userData.strengths.js!=""){
      $("#q3").hide();
      $("#thanks").show();
    }
  });

}else{
  userData = {
    name:"",
    email:"",
    html: {likes: [], dislikes: []},
    css: {likes: [], dislikes: []},
    js: {likes: [], dislikes: []},
    position: [false, false, false],
    strengths: {html:"", css:"", js:""},
    currentQuestion: "welcome"
  };
  localStorage.setItem('userData', JSON.stringify(userData));
}

$("#startbtn").click(function(event){
  $("#welcome").hide('blind');
  $("#q1").show('blind');

});


function validateName(name){
	var re = /^[A-Za-z ]+$/;
	return re.test(name);
}

function validateEmail(email){
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

$("#name").change(function(event){
  if(!validateName($("#name").val()))
    alert("Please enter a valid name");
});

$("#email").change(function(event){

  //to-do: validate email value
  if(!validateEmail($("#email").val()))
    alert("Please enter a valid email address");
    if(validateName($("#name").val()) && validateEmail($("#email").val()))
      $("#q1nxt").prop("disabled",false);
});

$("#q1nxt").click(function(event){
  userData.name = $("#name").val();
  userData.email = $("#email").val();
  userData.currentQuestion = "q1";
  localStorage.setItem('userData', JSON.stringify(userData));
  $("#q1").hide('blind');
  $("#q2").show('blind');
});

$("#htmlQ").click(function(event){
  $("#q2").hide('blind');
  $("#q2a").show('blind');
});

$("#cssQ").click(function(event){
  $("#q2").hide('blind');
  $("#q2b").show('blind');
});

$("#jsQ").click(function(event){
  $("#q2").hide('blind');
  $("#q2c").show('blind');
});

$(".prevQ2").click(function(event){
  $(this).parent().parent().parent().hide('blind');
  $("#q2").show('blind');
});

$("#q2a input[name='LHTML']").click(function(event){
			if (this.checked) {
        userData.html.likes.push($("input[name='LHTML']").index(this));
				userData.currentQuestion = "q2a";
        localStorage.setItem('userData', JSON.stringify(userData));
				console.log(JSON.stringify(userData));
			}
});

$("#q2a input[name='DHTML']").click(function(event){
			if (this.checked) {
       userData.position[0] = true;
        userData.html.dislikes.push($("input[name='DHTML']").index(this));
				userData.currentQuestion = "q2a";
        localStorage.setItem('userData', JSON.stringify(userData));
				console.log(JSON.stringify(userData));
			}
});

$("#htmlnxt").click(function(event){
		if (userData.position == true && userData.position == true && userData.position== true)
		{
			$("#q2").hide('blind');
			$("#q2a").hide('blind');
			$("#q3").show('blind');
		}
    else{
      $("#q2a").hide('blind');
  		$("#q2").show('blind');

    }
});

$("#q2b input[name='LCSS']").click(function(event){
			if (this.checked) {
        userData.css.likes.push($("input[name='LCSS']").index(this));
				userData.currentQuestion = "q2b";
        localStorage.setItem('userData', JSON.stringify(userData));
			}
});

$("#q2b input[name='DCSS']").click(function(event){
			if (this.checked) {
        userData.css.dislikes.push($("input[name='DCSS']").index(this));
				userData.currentQuestion = "q2b";
        localStorage.setItem('userData', JSON.stringify(userData));
			}
});

$("#cssnxt").click(function(event){
		if (userData.position[0] == true && userData.position[1] == true && userData.position[2] == true)
		{
			$("#q2").hide('blind');
			$("#q2b").hide('blind');
			$("#q3").show('blind');
		}
    else{
      $("#q2b").hide('blind');
  		$("#q2").show('blind');
    }
});

$("#q2c input[name='LJS']").click(function(event){
			if (this.checked) {
        userData.position[2] = true;
        userData.js.likes.push($("input[name='LJS']").index(this));
				userData.currentQuestion = "q2c";
        localStorage.setItem('userData', JSON.stringify(userData));
			}
});

$("#q2c input[name='DJS']").click(function(event){
			if (this.checked) {
        userData.position[2] = true;
        userData.js.dislikes.push($("input[name='DJS']").index(this));
				userData.currentQuestion = "q2c";
        localStorage.setItem('userData', JSON.stringify(userData));
			}
});

$("#jsnxt").click(function(event){
		if (userData.position[0] == true && userData.position[1] == true && userData.position[2] == true)
		{
			$("#q2").hide('blind');
			$("#q2c").hide('blind');
			$("#q3").show('blind');
		}
    else{
      $("#q2c").hide('blind');
  		$("#q2").show('blind');
    }
});

var i;

$("#q3 input[name='Rhtml']").click(function(event){
			if (this.checked) {
        i = $("input[name='Rhtml']").index(this);
        console.log(i);
        userData.strengths.html=i;
				userData.currentQuestion = "q3";
        localStorage.setItem('userData', JSON.stringify(userData));
				console.log(JSON.stringify(userData));
			}
});

$("#q3 input[name='Rcss']").click(function(event){
			if (this.checked) {
        i = $("input[name='Rcss']").index(this);
        console.log(i);
        userData.strengths.css=i;
				userData.currentQuestion = "q3";
        localStorage.setItem('userData', JSON.stringify(userData));
				console.log(JSON.stringify(userData));
			}
});

$("#q3 input[name='Rjs']").click(function(event){
			if (this.checked) {
        i = $("input[name='Rjs']").index(this);
        console.log(i);
        userData.strengths.js=i;
				userData.currentQuestion = "q3";
        localStorage.setItem('userData', JSON.stringify(userData));
				console.log(JSON.stringify(userData));
			}
});


$("#q3nxt").click(function(event){
  if(userData.strengths.html!="" && userData.strengths.css!="" && userData.strengths.js!=""){
    $("#q3").hide('blind');
    $("#thanks").show('blind');
    userData.currentQuestion = "thanks";
    localStorage.setItem('userData', JSON.stringify(userData));
  }
  else{
    alert("Please select an answer!");
  }
});

$("#q3prev").click(function(event){
  $("#q3").hide('blind');
  $("#q2").show('blind');
  userData.currentQuestion = "q2";
  localStorage.setItem('userData', JSON.stringify(userData));
});

$("#thanksnxt").click(function(event){
  $("#thanks").hide('blind');
  $("#answers").show('blind');
  userData.currentQuestion = "answers";
  localStorage.setItem('userData', JSON.stringify(userData));

  $("#ansname").append(userData.name);
  $("#ansemail").append(userData.email);

  var str;
  $("#q2a input[name='LHTML']").each(function() {
    if(this.checked){
     str = this.value;
     $("#anshtmllikes").append(" | "+str+" | ");
   }
  });

  $("#q2a input[name='DHTML']").each(function() {
    if(this.checked){
     str = this.value;
     $("#anshtmldlikes").append(" | "+str+" | ");
   }
  });

  $("#q2b input[name='LCSS']").each(function() {
    if(this.checked){
     str = this.value;
     $("#anscsslikes").append(" | "+str+" | ");
   }
  });

  $("#q2b input[name='DCSS']").each(function() {
    if(this.checked){
     str = this.value;
     $("#anscssdlikes").append(" | "+str+" | ");
   }
  });

  $("#q2c input[name='LJS']").each(function() {
    if(this.checked){
     str = this.value;
     $("#ansjslikes").append(" | "+str+" | ");
   }
  });

  $("#q2c input[name='DJS']").each(function() {
    if(this.checked){
     str = this.value;
     $("#ansjsdlikes").append(" | "+str+" | ");
   }
  });

  $("#q3 input[name='Rhtml']").each(function() {
    if(this.checked){
     str = this.value;
     $("#anshtmlstr").append(str);
   }
  });

  $("#q3 input[name='Rcss']").each(function() {
    if(this.checked){
     str = this.value;
     $("#anscssstr").append(str);
   }
  });

  $("#q3 input[name='Rjs']").each(function() {
    if(this.checked){
     str = this.value;
     $("#ansjsstr").append(str);
   }
  });
});


$("#delanswers").click(function(event){
  $("#answers").hide('blind');
  $("#welcome").show('blind');
  delete userData;
  userData = {
    name:"",
    email:"",
    html: {likes: [], dislikes: []},
    css: {likes: [], dislikes: []},
    js: {likes: [], dislikes: []},
    position: [false, false, false],
    strengths: {html:"", css:"", js:""},
    currentQuestion: "welcome"
  };
  localStorage.setItem('userData', JSON.stringify(userData));
  location.reload();

});
