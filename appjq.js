//Sidebar element positioning properties
var sideBarWidth = 180;
var sideBarPadding = 20;
var contentPadding = 40;


//check for clicks on label of input type = "checkbox", fire toggleMenu()
$( "input[type=checkbox]" ).on("click", function() {
	toggleMenu();
	//stateOne();
})

function toggleMenu () {
	if ($("#sidebartoggler:checked")[0]) {
		console.log("opening");
		$(".toggle").removeClass("fa-chevron-right");
		$(".toggle").addClass("fa-chevron-left");
		$(".sidebar").css({
			"left":"0px"
		});
		$(".toggle").css({
			"left": sideBarWidth + sideBarPadding
		});
		$(".page-content").css({
			"padding-left":sideBarWidth + contentPadding
		});
	}
	else {
		console.log("closing");
		$(".toggle").removeClass("fa-chevron-left");
		$(".toggle").addClass("fa-chevron-right");
		$(".sidebar").css({
			"left": -sideBarWidth
		});
		$(".toggle").css({
			"left": sideBarPadding
		});
			$(".page-content").css({
			"padding-left": contentPadding
		});
	}
}

function stateOne () {
	console.log("bangOne");
	setTimeout(function(){
		console.log("action One");
		stateTwo();
	},500);

}

function stateTwo () {
	console.log("bangTwo");
	setTimeout(function(){
		console.log("doing something else");
	},500);
}