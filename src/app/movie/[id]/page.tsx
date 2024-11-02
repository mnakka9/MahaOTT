import getImagePath from "@/app/utils/get-image-path";
import { getMovieById, getWatchProvidersById } from "@/app/utils/get-movies";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

async function MoviePage({ params: { id } }: Props) {
  const movieDetail = await getMovieById(id);
  const streamingServices = await getWatchProvidersById(id);
  console.log(movieDetail);
  let indianServices = streamingServices.results.IN;
  let movieLang = movieDetail.original_language;

  if(movieDetail.spoken_languages && movieDetail.spoken_languages.length > 0){
    movieLang = movieDetail.spoken_languages[0]?.english_name ?? movieLang;
  }

  if(indianServices == undefined){
    indianServices = {
        link: "",
        ads: [],
        flatrate: [],
        rent: []
    };
  }

  if(indianServices.rent == undefined){
    indianServices.rent = [];
  }

  if(indianServices.ads == undefined){
    indianServices.ads = [];
  }

  if(indianServices.flatrate == undefined){
    indianServices.flatrate = [];
  }

  return (
    <div className="max-w-7xl mx-auto p-4 z-40 mt-20"> {/* Added `mt-20` for spacing */}
      {/* Title and Release Date */}
      <div className="text-center mb-6">
        <h1 className="text-4xl text-red-600 font-bold mb-2">{movieDetail.title}</h1>
        <p className="text-gray-500">
          Release Date:{" "}
          {new Date(movieDetail.release_date).toLocaleDateString()}
        </p>
      </div>

      {/* Poster and Overview */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-8">
        <div className="flex-shrink-0">
          <Image
            src={getImagePath(
              movieDetail.poster_path || movieDetail.backdrop_path
            )}
            alt={movieDetail.title}
            width={300}
            height={450}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Overview, Languages, and Genres */}
        <div>
          {/* Overview */}
          <h2 className="text-2xl text-fuchsia-600 font-semibold mb-3">Overview</h2>
          <p className="text-gray-700 mb-4">{movieDetail.overview}</p>

          {/* Languages */}
          <h2 className="text-xl text-rose-500 font-semibold mb-2">Language</h2>
          <p className="text-gray-600 mb-4">{movieLang}</p>

          {/* Genres */}
          <h2 className="text-xl text-blue-700 font-semibold mb-2">Genres</h2>
          <div className="flex flex-wrap gap-2">
            {movieDetail.genres.map((genre) => (
              <span
                key={genre.id}
                className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>

          <h2 className="text-xl text-orange-600 mb-4 mt-8">Streaming details: for more click <a target="_blank" href={indianServices.link}> here </a></h2>
          <h3 className="text-xl text-blue-600 mb-2">Streaming</h3>
          <div className="flex flex-wrap gap-2">
            {indianServices.flatrate.map((genre) => (
              <span
                key={genre.provider_id}
                className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm"
              >
                {genre.provider_name}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {indianServices.ads.map((genre) => (
              <span
                key={genre.provider_id}
                className="bg-sky-500 text-white px-3 py-1 rounded-full text-sm"
              >
                {genre.provider_name}
              </span>
            ))}
          </div>

          <h3 className="text-xl text-blue-600 mb-2 mt-3">Rent</h3>
          <div className="flex flex-wrap gap-2">
            {indianServices.rent.map((genre) => (
              <span
                key={genre.provider_id}
                className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm"
              >
                {genre.provider_name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
