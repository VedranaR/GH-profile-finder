class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}" />
            <a
              href="${user.html_url}"
              target="_blank"
              class=" btn btn-primary btn-block mt-4 mb-4"
              >View Profile</a
            >
          </div>
          <div class="col-md-9">
            <span class="badge badge-info" style="font-size:100%"
              >Public Repos: ${user.public_repos}</span
            >
            <span class="badge badge-info" style="font-size:100%"
              >Public Gists: ${user.public_gists}</span
            >
            <span class="badge badge-info" style="font-size:100%">Followers: ${
              user.followers
            }</span>
            <span class="badge badge-info" style="font-size:100%">Following: ${
              user.following
            }</span>
            <br />
            <br />
            <ul class="list-group">
              <li class="list-group-item p-2 m-2">Company: ${user.company}</li>
              <li class="list-group-item p-2 m-2">Website/Blog: ${
                user.blog
              }</li>
              <li class="list-group-item p-2 m-2">Location: ${
                user.location
              }</li>
              <li class="list-group-item p-2 m-2">Member Since: ${
                user.created_at
              }</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  //Show user repos
  showRepos(repos) {
    let output = "";

    repos.forEach(repo => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${
                repo.html_url
              }" target="_blank" class="badge badge-warning p-3" style="font-size:100%; color: #000">${
        repo.name
      }</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-info p-2 m-2" style="font-size:100%">Stars: ${
              repo.stargazers_count
            }</span>
            <span class="badge badge-success p-2 m-2" style="font-size:100%">Watchers: ${
              repo.watchers_count
            }</span>
            <span class="badge badge-info p-2 m-2" style="font-size:100%">Forks: ${
              repo.forks_count
            }</span>

            </div>
          </div>
        </div>
      `;
    });

    // Output repos
    document.getElementById("repos").innerHTML = output;
  }

  //Show alert message for no user case
  showAlert(message, className) {
    //Clear an old alert
    this.clearAlert();

    //Create div
    const div = document.createElement("div");
    //add classes
    div.className = className;
    //add text
    div.appendChild(document.createTextNode(message));
    //get parent
    const container = document.querySelector(".searchContainer");
    //get search box
    const search = document.querySelector(".search");
    //insert alert
    container.insertBefore(div, search);

    //clear the alert div after 3 sec
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  //Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }
}
