//Instantiate GitHub
const github = new GitHub();

//Initiate UI
const ui = new UI();

//Search for the input
const search = document.getElementById("search");

search.addEventListener("keyup", e => {
  const user = e.target.value;

  if (user !== "") {
    //Make http call
    github.getUser(user).then(data => {
      //data profile is the json file getUser() is returning
      if (data.profile.message === "Not Found") {
        //Show alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        //Show profile
        ui.showProfile(data.profile);

        //data repos is the json file getUser() is returning
        ui.showRepos(data.repos);
      }
    });
  } else {
    //Clear profile
    ui.clearProfile();
  }
});
