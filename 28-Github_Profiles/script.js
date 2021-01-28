const APIURL = 'https://api.github.com/users/';

const main = document.querySelector(`.main`);
const form = document.querySelector(`.form`);
const search = document.querySelector(`.search`);

async function getUser(userName) {
    try {
        const { data } = await axios(APIURL + userName);

        console.log(data);

        createUserCard(data);
        getRepos(userName);
    } catch (err) {
        if (err.response.status == 404) {
            createErrorCard(`No profile with this username`);
        }
    }
}

async function getRepos(userName) {
    try {
        const { data } = await axios(APIURL + userName + '/repos?sort=created');
        addReposToCard(data);
    } catch (err) {
        createErrorCard(`Problem fetching repos`);
    }
}

function createUserCard(user) {
    const cardHTML = `
    <div class="pf_img" style="background-image: url('${user.avatar_url}');">
    </div>
    <div class="content">
        <div class="name">${user.name}</div>
        <div class="info">${user.bio}</div>
        <div class="social">
            <span class="followers">${user.followers} <strong>Followers</strong></span>
            <span class="following">${user.following} <strong>Following</strong></span>
            <span class="Repos">${user.public_repos} <strong>Repos</strong></span>
        </div>

        <div class="repository"></div>
    </div>
    `;

    main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
    const cardHTML = `
    <div class="error">
            <h1>${msg}</h1>
        </div>
    `
    main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
    const reposEl = document.querySelector(`.repository`);

    repos
        .slice(0, 5)
        .forEach(repo => {
            const repoEl = document.createElement(`a`);
            repoEl.href = repo.html_url;
            repoEl.target = `_blank`;
            repoEl.innerHTML = repo.name;

            reposEl.appendChild(repoEl);
        })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = search.value;

    if (user) {
        getUser(user);
        search.value = '';
    }
})