$(document).ready(function(){
	
	//Scroll to Home page
	$(function () { 
		$("#brand").click(function () { 
			$("#panel1").removeClass("space");
			$("#panel2").removeClass("space");
			$("#panel3").removeClass("space");
		}); 
	}); 

	//Scroll to Home page
	$(function () { 
		$("#Home").click(function () { 
			$("#panel2").removeClass("space");
			$("#panel3").removeClass("space");
			$("#panel1").addClass("space");
   	 		$("body").scrollTo($("#panel1"), 1200);
		}); 
	}); 

	//Scroll to Our Services page
	$(function () { 
		$("#Services").click(function () { 
			$("#panel1").removeClass("space");
			$("#panel2").addClass("space")
   	 		$("body").scrollTo($("#panel2"), 1200); 
		}); 
	});

	//Scroll to Contact Us page
	$(function () { 
		$("#Contact").click(function () { 
			$("#panel1").removeClass("space");
			$("#panel2").removeClass("space");
			$("#panel3").addClass("space")
   	 		$("body").scrollTo($("#panel3"), 1200); 
		}); 
	});

	//add space class to panel 1
	// $(function () {
	// 	$("#Home").click(function () {
	// 		$("#panel1").addClass("space");
	// 	});
	// });
});