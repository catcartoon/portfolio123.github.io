/* sale */
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
	// This function will display the specified tab of the form...
	var x = document.getElementsByClassName("tab");
	x[n].style.display = "block";
	//... and fix the Previous/Next buttons:
	if (n == 0) {
		document.getElementById("prevBtn").style.display = "none";
	} else {
		document.getElementById("prevBtn").style.display = "inline";
	}
	if (n == (x.length - 1)) {
		document.getElementById("nextBtn").innerHTML = "Submit";
	} else {
		document.getElementById("nextBtn").innerHTML = "Next";
	}
	//... and run a function that will display the correct step indicator:
	fixStepIndicator(n)
}

function nextPrev(n) {
	// This function will figure out which tab to display
	var x = document.getElementsByClassName("tab");
	// Exit the function if any field in the current tab is invalid:
	if (n == 1 && !validateForm()) return false;
	// Hide the current tab:
	x[currentTab].style.display = "none";
	// Increase or decrease the current tab by 1:
	currentTab = currentTab + n;
	// if you have reached the end of the form...
	if (currentTab >= x.length) {
		// ... the form gets submitted:
		document.getElementById("regForm").submit();
		return false;
	}
	// Otherwise, display the correct tab:
	showTab(currentTab);
}

function validateForm() {
	// This function deals with validation of the form fields
	var x, y, i, valid = true;
	x = document.getElementsByClassName("tab");
	y = x[currentTab].getElementsByTagName("input");
	// A loop that checks every input field in the current tab:
	for (i = 0; i < y.length; i++) {
		// If a field is empty...
		if (y[i].value == "") {
			// add an "invalid" class to the field:
			y[i].className += " invalid";
			// and set the current valid status to false
			valid = false;
		}
	}
	// If the valid status is true, mark the step as finished and valid:
	if (valid) {
		document.getElementsByClassName("step")[currentTab].className += " finish";
	}
	return valid; // return the valid status
}

function fixStepIndicator(n) {
	// This function removes the "active" class of all steps...
	var i, x = document.getElementsByClassName("step");
	for (i = 0; i < x.length; i++) {
		x[i].className = x[i].className.replace(" active", "");
	}
	//... and adds the "active" class on the current step:
	x[n].className += " active";
}



/* feauture */
$(".hover").mouseleave(
	function () {
		$(this).removeClass("hover");
	}
);

// filter

$(document).ready(function () {
	$('.list').click(function () {
		const value = $(this).attr('data-filter');
		if (value == 'all') {
			$('.itemBox').show('1000');
		} else {
			$('.itemBox').not('.' + value).hide('1000');
			$('.itemBox').filter('.' + value).show('1000');
		}
	})

	// add active class on selected item

	$('.list').click(function () {
		$(this).addClass('active').siblings().removeClass('active')
	})
})

// menu
function toggleMenu() {
	const toggleMenu = document.querySelector('.toggleMenu');
	const navigation = document.querySelector('.navigation');
	toggleMenu.classList.toggle('active');
	navigation.classList.toggle('active');
}





/* search */
$(document).on('click','.search', function(){
	$('.search-bar').addClass('search-bar-active')
});

$(document).on('click','.search-cancel', function(){
	$('.search-bar').removeClass('search-bar-active')
});

/* login-sign-up form */
$(document).on('click','.user,.already-acount', function(){
	$('.form').addClass('login-active').removeClass('sign-up-active')
});

$(document).on('click','.sign-up-btn', function(){
	$('.form').addClass('sign-up-active').removeClass('login-active')
});

$(document).on('click','.form-cancel', function(){
	$('.form').removeClass('login-active').removeClass('sign-up-active')
});

