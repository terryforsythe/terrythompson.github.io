$(document).ready(function() {
      $.getJSON('https://api.github.com/users/terrythompson/repos', function(response) {

         for (var repoIndex = 0; repoIndex < response.length; repoIndex++) {
           var repo = response[repoIndex];
           var repoName = repo.name;
           var repoUpdated = repo.updated_at;
           var repoLink = repo.html_url;

           $('#reposTableBody').append("<tr><td class=\"mdl-data-table__cell--non-numeric\">" + repoName +
           "</td><td>" + repoUpdated + "</td><td class=\"mdl-data-table__cell--non-numeric\">"
           + repoLink + "</td></tr>");
         }

      });
});
