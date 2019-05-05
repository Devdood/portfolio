$(document).ready(function() {
    $.getJSON("./data/projects.json", function(data) {
        console.log(data.projects);
        var items = [];
        $.each(data.projects, function(key, val) {

            var projectEntity = `<li class="project">
							<div class="title">` + val.title + `</div>
							<div class="description">` + val.description + `</div>
							`;

            projectEntity += `<div class="links">`

            $.each(val.links, function(linkKey, linkVal) {
                projectEntity += `<a class="link" href="` + linkVal.link + `">` + linkVal.title + `</a>`
            });

            projectEntity += `</div>
						</li>`;

            items.push(projectEntity);
        });

        $("#projects-list").append(items);
    });
});