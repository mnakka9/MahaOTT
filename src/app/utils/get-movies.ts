import { URL } from "url";
import { SearchResult } from "../../../typings";
import { MovieDetail, WatchProvider } from "../../../movietype";

async function fetchFromTMDB(url: URL, cacheTime?: number) {
  url.searchParams.set("include_adult", "false");
  url.searchParams.set("include_video", "false");
  url.searchParams.set("sort_by", "popularity.desc");
  url.searchParams.set("language", "en-US");
  url.searchParams.set("region", "IN");
  url.searchParams.set("with_original_language", "te|en|hi");
  url.searchParams.set("page", "1");

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${process.env.API_KEY}`,
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 24,
    },
  };

  const response = await fetch(url.toString(), options);
  const data = (await response.json()) as SearchResult;

  return data;
}

export default fetchFromTMDB;

export async function getMovies(url: URL) {
  const data = await fetchFromTMDB(url);

  return data.results;
}

export async function getUpcomingMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/upcoming");

  return await getMovies(url);
}

export async function getTopRatedMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/top_rated");

  return await getMovies(url);
}

export async function getPopularMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/popular");

  return await getMovies(url);
}

export async function getDiscoverMovies(id?: string, keyword?: string){
    const url = new URL("https://api.themoviedb.org/3/discover/movie");

    if(id){
        url.searchParams.set("with_genres", id);
    }

    if(keyword){
        url.searchParams.set("with_keywords", keyword);
    }


    return await getMovies(url);
}

export async function getSearchMovies(term?: string){
    const url = new URL("https://api.themoviedb.org/3/search/movie");

    if(term){
        url.searchParams.set("query", term);
    }

    return await getMovies(url);
}

export async function getMovieById(id: string, cacheTime?: number){

    const url = new URL(`https://api.themoviedb.org/3/movie/${id}`);
    url.searchParams.set("include_adult", "false");
    url.searchParams.set("include_video", "false");
    url.searchParams.set("sort_by", "popularity.desc");
    url.searchParams.set("language", "en-US");
    url.searchParams.set("region", "IN");
    url.searchParams.set("with_original_language", "te|en|hi");

    const options: RequestInit = {
        method: "GET",
        headers: {
          accept: "application/json",
          authorization: `Bearer ${process.env.API_KEY}`,
        },
        next: {
          revalidate: cacheTime || 60 * 60 * 24,
        },
      };

    const resp = await fetch(url.toString(), options);

    const data = (await resp.json()) as MovieDetail

    return data;
}

export async function getWatchProvidersById(id: string, cacheTime?: number){

    const url = new URL(`https://api.themoviedb.org/3/movie/${id}/watch/providers`);
    const options: RequestInit = {
        method: "GET",
        headers: {
          accept: "application/json",
          authorization: `Bearer ${process.env.API_KEY}`,
        },
        next: {
          revalidate: cacheTime || 60 * 60 * 24,
        },
      };

    const resp = await fetch(url.toString(), options);

    const data = (await resp.json()) as WatchProvider

    return data;
}
