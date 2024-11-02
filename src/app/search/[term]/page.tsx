import { getPopularMovies, getSearchMovies } from "@/app/utils/get-movies";
import MovieCarousel from "@/components/ui/movie-carousel";
import { notFound } from "next/navigation";

type Props = Promise<{ term: string }>;

async function SearchPage({params}:{params: Props}) {
  let {term} = await params;

  if(!term)
    return notFound();

  term = decodeURI(term);

  const movies = await getSearchMovies(term);

  const popularMovies = await getPopularMovies();

  return (
   <div className="max-w-7xl max-auto">
    <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
      <h1 className="text-6xl font-bold px-10">
        Results for {term}
      </h1>
      <MovieCarousel title="Movies" movies={movies} isVertical />
      <MovieCarousel title="See popular movies" movies={popularMovies} />
    </div>
   </div>
  )
}

export default SearchPage