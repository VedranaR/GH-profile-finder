//Instantiate GitHub
const github = new GitHub();

//Search for the input
const search = document.getElementById("search");

search.addEventListener("keyup", e => {
  const user = e.target.value;

  if (user !== "") {
    //Make http call
    github.getUser(user).then(data => {
      console.log(data);
    });
  }
});
