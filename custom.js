if (location.hash) {
    setTimeout(function() {

	window.scrollTo(0, 0);
    }, 1);
}

var projects = ["cruisercommand","superwebrecorder","kartobot","zorkensburg"];

var fixHash = function(instant) {
    var hash = window.location.hash.substring(1);
    if (projects.indexOf(hash) != -1) {
	$("#l_"+hash).text("Go back");
	$("#l_"+hash).attr("href","#portfolio");
	$(".project-special").each(function() {
	    if (!$(this).hasClass("project-" + hash)) {
		if (instant == true) {
		    $(this).hide();
		} else {
		    $(this).fadeOut();
		}
	    }
	});
	$(".extended-"+hash).show();
    } else if (hash == "portfolio") {
	$(".link").each(function() {
	    $(this).text("Read more...");
	    $(this).attr("href","#"+$(this)[0].id.substring(2));
	});
	$(".readmore").each(function() {
	    $(this).hide();
	});
	$(".project-special").each(function() {
	    $(this).fadeIn();
	});
    } else if (hash == "about") {
	$(".about").tab('show');
    }
};

var initTabs = function(){
    var hash = window.location.hash;
    hash && $('ul.nav a[href="' + hash + '"]').tab('show');
    if (projects.indexOf(hash.substring(1)) != -1) {
	$(".portfolio").tab('show');
	fixHash(true);
    }

    $('.nav-tabs a').click(function (e) {
	$(this).tab('show');
	var scrollmem = $('body').scrollTop();
	window.location.hash = this.hash;
	$('html,body').scrollTop(scrollmem);
    });
    $(document).on("click",".link",function (e) {
	var scrollmem = $('body').scrollTop();
	window.location.hash = this.hash;
	setTimeout(function() {
	    $('html,body').scrollTop(scrollmem);
	},1);
    });
};

$(window).on('hashchange', function() {
    fixHash(false);
});

$( document ).ready(function() {
    initTabs();

    $(".readmore").each(function() {
	$(this).hide();
    });
    fixHash(true);
});