$(document).ready(function() {

    var tableCellNonNumeric = "<td class=\"mdl-data-table__cell--non-numeric\">";

    $.getJSON('https://api.github.com/users/terrythompson/repos', function(response) {

        $.each(response, function(index, repo) {
            var repoNameLink = "<a href=\"" + repo.html_url + "\" target=\"_blank\">" + repo.name + "</a>";

            var repoUpdate = new Date(repo.updated_at);
            var repoUpdateLocale = repoUpdate.toString("MM/dd/yy, HH:mm");

            $('#reposTableBody').append("<tr>" + tableCellNonNumeric + repoNameLink + "</td><td>" + repoUpdateLocale + " EST</td></tr>");
        });
    });
});
