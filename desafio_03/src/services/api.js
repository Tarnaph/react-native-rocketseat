import { create } from 'apisauce';

export default create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3+json',
    'User-Agent': 'GithubExplorer',
  },
});
