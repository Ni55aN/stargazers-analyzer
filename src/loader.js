import axios from 'axios';

const requestAPI = async (path, page = 1) => {
    const token = localStorage.getItem('accessToken');
    
    return await axios.get(`https://api.github.com/${path}?access_token=${token}&page=${page}`);
}

export async function loadStargazers(repo, page = 1, callback) {
    console.log(`loadStargazers from ${page} page`);
    let res;

    do {
        res = await requestAPI('repos/'+repo+'/stargazers', page++);
        
        for(let starg of res.data) {
            await callback(starg)
        }
    } while (res.data.length > 0)
}

export async function loadUser(login) {
    const res = (await requestAPI('users/'+login));

    return res.data;
}

export async function loadRepo(repo) {
    const res = (await requestAPI('repos/'+repo));

    return res.data;
}