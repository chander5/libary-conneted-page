"use strict";
let name=prompt("Enter your Name");
$(document).ready(function(){
    $('input').click(function(){
		$('this').val('border');
	});
});
console.log(name);