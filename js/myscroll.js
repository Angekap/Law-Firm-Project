$(document).ready(function(){
	
	//Scroll to Home page
	$(function () { 
		$("#Home").click(function () { 
   	 		$("body").scrollTo($("#panel1"), 1200); 
		}); 
	}); 

	//Scroll to Our Services page
	$(function () { 
		$("#Services").click(function () { 
   	 		$("body").scrollTo($("#panel2"), 1200); 
		}); 
	});

	//Scroll to Contact Us page
	$(function () { 
		$("#Contact").click(function () { 
   	 		$("body").scrollTo($("#panel3"), 1200); 
		}); 
	}); 
});