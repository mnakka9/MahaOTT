import MovieCarousel from "@/components/ui/movie-carousel";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "./utils/get-movies";

export default async function Home() {
  const upComingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Welcome to Maha OTT</h1>
        <div className="flex flex-col space-y-2 xL:-mt-48">
          <MovieCarousel title="Upcoming" movies={upComingMovies} /> 
          <MovieCarousel title="Top Rated" movies={topRatedMovies} /> 
          <MovieCarousel title="Popular" movies={popularMovies} /> 
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Developed by Mahesh Nakka</p>
      </footer>
    </div>
  );
}
