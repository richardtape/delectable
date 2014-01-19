//Adding event handlers to enable the stripping of inline scripts from the html
document.addEventListener('DOMContentLoaded', function () {
	restore_options();
	//restore options is working; I'm setting options directly in the db via Resources / Local Storage tab in Dev Tools
	document.querySelector('button').addEventListener('click', save_options());
});


// Saves options to localStorage.
function save_options(){
  
  	var error_msg = [];
  
	var e_username = document.getElementById("username");
	var username = e_username.value;
	if(username != ""){
		localStorage["username"] = username;
	}else{
		error_msg.push("You didn't enter a username");
	}
	
	var e_password = document.getElementById("password");
	var password = e_password.value;
	if(password != ""){
		localStorage["password"] = password;
	}else{
		error_msg.push(" You didn't enter a password");
	}
	
	var e_endpoint = document.getElementById("endpoint");
	var endpoint = e_endpoint.value;
	if(endpoint != ""){
		localStorage["endpoint"] = endpoint;
	}else{
		error_msg.push(" You didn't enter an XML-RPC endpoint");
	}
	
	var e_category_name = document.getElementById("category_name");
	var category_name = e_category_name.value;
	localStorage["category_name"] = category_name;
	
	var e_post_type = document.getElementById("post_type");
	var post_type = e_post_type.value;
	localStorage["post_type"] = post_type;
	
	var status = document.getElementById("status");
	
	if(error_msg.length > 0){
		$('#status').fadeIn();
		status.innerHTML = "Oops! <br />" + error_msg.toString();
	}else{
		$('#status').addClass('success_message').fadeIn();
		status.innerHTML = "Options Saved.";
		setTimeout(function() {
			$('#status').fadeOut('slow',function(){
				$('#status').removeClass('success_message')
			});
		}, 4000);
	}

}

// Restores select box state to saved value from localStorage.
function restore_options() {
	
	var username = localStorage["username"];
	var password = localStorage["password"];
	var endpoint = localStorage["endpoint"];
	var category_name = localStorage["category_name"];
	var post_type = localStorage["post_type"];
	
	var e_username = document.getElementById("username");
	var e_password = document.getElementById("password");
	var e_endpoint = document.getElementById("endpoint");
	var e_category_name = document.getElementById("category_name");
	var e_post_type = document.getElementById("post_type");
	
	if(username){
		e_username.value = username;
	}
	
	if(password){
		e_password.value = password;
	}
	
	if(endpoint){
		e_endpoint.value = endpoint;
	}
	
	if(category_name){
		e_category_name.value = category_name;
	}
	
	if(post_type){
		e_post_type.value = post_type;
	}
	
}
$(function() {

	//View Advanced Options
	$('#advanced_options').slideUp();
	
	$('#advanced_options_link a').click(function(){
	
		$('#advanced_options').slideToggle();
		return false;
	
	});


$(function(){
			
		//Moved from options.html to adhere to new security rules
		$('#endpoint').blur(function(){
			
			var endpoint_url = $('#endpoint').val();
				
			if(!endpoint_url.match(/\/xmlrpc\.php$/)){
				$('#endpoint').css("border-color","red");
			}else{
				$('#endpoint').css("border-color","#A9A9A9");
			}
			
		});
			
	});




});