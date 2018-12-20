class GitHub {
  constructor() {
    this.client_id = "63d534480f0cfb2f5a3b";
    this.client_secret = "81cb30fc45b35d0c2ff8f8679c8741c94794647f";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );
    const profileData = await profileResponse.json();

    return {
      profile: profileData
    };
  }
}
