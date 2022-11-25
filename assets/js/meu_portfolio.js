function carregar_Footer(){
    $('footer').load('./footer.html');
}
function carregar_Nav(){
    $('header').load('./header.html');
}
function carregar_projeto_canvas(){
    $('#spa_projetos_canvas').load('./projeto_canvas.html');
}

function verifica_Active(){
    $(document).ready(function () {

        // Scroll spy
        $('body').scrollspy({
            target: "#nav_scroll"
        });
    
        // Navbar fade
        changeNavbar();
    
        $(window).scroll(function () {
            changeNavbar();
        });
    
        function changeNavbar() {
            var navbar = $("#nav_scroll");
            if ($(this).scrollTop() >= 100) {
                navbar.addClass("active").removeClass("  ");
            } else if ($(this).scrollTop() < 100) {
                navbar.removeClass("active").addClass(" ");
            }
        }
    });
}

function verifica_Scroll(){
    // $(document).ready(function() {
	// 	$('a[href*=#]').bind('click', function(e) {
    //         e.preventDefault(); // prevent hard jump, the default behavior

    //         var target = $(this).attr("href"); // Set the target as variable

    //         // perform animated scrolling by getting top-position of target-element and set it as scroll target
    //         $('html, body').stop().animate({
    //                 scrollTop: $(target).offset().top
    //         }, 600, function() {
    //                 location.hash = target; //attach the hash (#jumptarget) to the pageurl
    //         });

    //         return false;
	// 	});
    // });
    
    
    $(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();

		// Assign active class to nav links while scolling
		$('.navbar-collapse').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                $('.navigation a.active').removeClass('active');
                $('.navigation a').eq(i).addClass('active');
            }
		});
    }).scroll();

}