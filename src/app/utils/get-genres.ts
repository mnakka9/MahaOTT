import { Genres } from "../../../typings";

export async function getGenres() {
    const getGenresUrl = "https://api.themoviedb.org/3/genre/movie/list";

const options: RequestInit = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        authorization: `Bearer ${process.env.API_KEY}`,
    },
    next: {
        revalidate: 60 * 60 * 24,
    }
};

const respone = await fetch(getGenresUrl, options);

const data = (await respone.json()) as Genres

return data;
}