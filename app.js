// init github
const github = new GitHub();
// init UI
const ui = new UI();
// footer year
const currentYear = new Date().getFullYear();
document.getElementById(
  "footer"
).innerHTML = `GitHub Finder &copy; ${currentYear}`;

// Search input
const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", e => {
  // Get input text
  const userText = e.target.value;

  if (userText !== "") {
    // Make http call
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        // Show alert
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    ui.clearProfile();
  }
});
