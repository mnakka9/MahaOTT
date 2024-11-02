import { getDiscoverMovies } from '@/app/utils/get-movies';
import MovieCarousel from '@/components/ui/movie-carousel';
import React from 'react'
import { Movie } from '../../../../typings';
import { getGenres } from '@/app/utils/get-genres';

type Props = Promise<{ id: string }>

async function GenrePage({ params }: { params: Props}) {
    const { id } = await params;
    
    const genres = await getGenres();

    const genre = genres.genres.find(x => x.id == parseInt(id))?.name

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