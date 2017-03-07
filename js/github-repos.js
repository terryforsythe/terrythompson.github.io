$(document).ready(function() {

    var tableCellNonNumeric = "<td class=\"mdl-data-table__cell--non-numeric\">";

    $.getJSON('https://api.github.com/users/terrythompson/repos', function(response) {

        $.each(response, function(index, repo) {
            var repoNameLink = "<a href=\"" + repo.html_url + "\" target=\"_blank\">" + repo.name + "</a>";
            var repoUpdateDate = repo.updated_at.substring(0, 10);
            var repoUpdateTime = repo.updated_at.substring(11, 16) + " EST";
            var repoUpdate = repoUpdateDate + ", " + repoUpdateTime;

            $('#reposTableBody').append("<tr>" + tableCellNonNumeric + repoNameLink + "</td><td>" + repoUpdate + "</td></tr>");
        });

    });

});
