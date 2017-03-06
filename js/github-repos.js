$(document).ready(function() {
      $.getJSON('https://api.github.com/users/terrythompson/repos', function(reposResults) {
          console.log(reposResults);
      });
});
