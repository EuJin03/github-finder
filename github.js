class GitHub {
  constructor() {
    this.config = {
      headers: {
        Authorization: `token 3ad558f98dda6ede13115e21cc6b765e463fe6ca`,
      },
    };
    this.repos_count = 5;
    this.repos_sort = "created:asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}`,
      this.config
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
      this.config
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profile,
      repos,
    };
  }
}
