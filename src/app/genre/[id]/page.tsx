import { getDiscoverMovies } from '@/app/utils/get-movies';
import MovieCarousel from '@/components/ui/movie-carousel';
import React from 'react'
import { Movie } from '../../../../typings';

type Props = {
    params: {
        id: string
    };
    searchParams: {
        genre: string
    };
}

async function GenrePage({ params, searchParams }: Props) {
    const { id } = params;
    const { genre } = searchParams;

    const movies: Movie[] = await getDiscoverMovies(id);
  return (
    <div className="max-w-7xl max-auto">
    <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
      <h1 className="text-6xl font-bold px-10">
        Genre: {genre}
      </h1>
      <MovieCarousel title="Movies" movies={movies} isVertical />
    </div>
   </div>
  )
}

export default GenrePage