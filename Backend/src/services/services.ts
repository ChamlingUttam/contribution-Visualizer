import fetch from "node-fetch";

const BASE_URL = "https://api.github.com";

interface GitHubRepo {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
}


interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

export const getUserRepo = async (username: string) => {
  try {
    const res = await fetch(`${BASE_URL}/users/${username}`, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        "User-Agent": "GITHUB_USER",
      },
    });

    if (!res.ok) {
      throw new Error(`GITHUB Api error : ${res.status} ${res.statusText}`);
    }

    const data = (await res.json()) as GitHubRepo[];

    return data.map((repo: any) => ({
      name: repo.name,
      description: repo.description,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      url: repo.html_url,
    }));
  } catch (error: any) {
    throw new Error(`failed to fetch user repo : ${error.message}`);
  }
};


export const getUserProfile = async(username:string)=>{

    try {
        
    const res = await fetch(`${BASE_URL}/users/${username}/repo`,{
        headers:{
            Authorization:`token ${process.env.GITHUB_TOKEN}`,
            "User-Agent":"GITHUB_USER"
        },
    })

    if(!res.ok){
        throw new Error(`${res.status} ${res.statusText}`)
    }

    const data = await res.json() as GitHubUser

    return {
         login: data.login,
    name: data.name,
    avatar: data.avatar_url,
    bio: data.bio,
    public_repos: data.public_repos,
    followers: data.followers,
    following: data.following,
    url: data.html_url

    }

    } catch (error:any) {
        throw new Error(`can't get the user profile : ${error.message}`)
    }
}
