import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODdmYzIxYjg5MGQ0MjQ4NzY3M2E2YTViYWJiYTkwMyIsInN1YiI6IjY0NDZkNzBmNmRjNTA3MDU0OWQ0YjI0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8VF3EBOa8KSuGnzVVrULTG2azwMK00gW1JFxAVXSeVk',
  },
});

export async function getMovie(path, page = 1) {
  const params = {
    page: page,
  };

  const res = await instance.get(path, params);

  return await res.data;
}
