import axios from 'axios';

const requestAPI = async (path, page = 1, tries = 5) => {
    try {
        return await axios.get('https://api.github.com/'+path+'?access_token=9137998f61ec2dc8ca525dc857cfd70042fbb28a&page='+page);
    } catch(e) {
        console.log(e);
    }
}

export async function loadStargazers(repo, page = 1, callback) {
    console.log(`loadStargazers from ${page} page`);
    let res;

    do {
        res = await requestAPI('repos/'+repo+'/stargazers', page++);
        
        res.data.map(starg => callback(starg));
    } while (res.data.length > 0)
}

export async function loadUser(login) {
    const res = (await requestAPI('users/'+login));

    return res.data;
}