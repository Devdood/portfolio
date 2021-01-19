$(document).ready(function() {
    $.getJSON("./data/projects.json", function(data) {
        console.log(data.projects);
        var items = [];
        $.each(data.projects, function(key, val) {
			
            var projectEntity = `<li class="project shadowed">` +
							(val.img == "" ? `` : `<img class="project-icon" src="` + val.img + `"></img>`) +
							`<div class="info-box"><div class="info-box-content"><div class="title">` + val.title + `</div>
							<div class="role">Role: ` + val.role + `</div><div class="description">` + val.description + `<div>
							`;

            projectEntity += `<div class="links">`

            $.each(val.links, function(linkKey, linkVal) {
                projectEntity += `<a class="link" href="` + linkVal.link + `">` + linkVal.title + `</a>`
            });

            projectEntity += `</div></div></div>
						</li>`;

            items.push(projectEntity);
        });

        $("#projects-list").append(items);

        $( ".project" ).each(function( index ) {            
            $(this).find('.info-box:first').hide();
          });

        jQuery('.project').each(function() {
            jQuery(this).find('.info-box:first').hide();
        });
        jQuery('.project').hover(function() {
            jQuery(this).find('.info-box:first').fadeIn(150)
        }, function() {
            jQuery(this).find('.info-box:first').fadeOut(150);
        });
    });

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
});