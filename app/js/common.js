$(function() {

	$(".btn_mnu").click(function() {
		$(this).toggleClass("active");
		$(".left_side").toggleClass("active");
	});
	$(window).on("load", function() {
		$(".loader_inner").fadeOut();
		$(".loader").delay(400).fadeOut("slow");
	});
});

