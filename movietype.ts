export interface MovieDetail {
    adult: boolean
    backdrop_path: string
    belongs_to_collection: BelongsToCollection
    budget: number
    genres: Genre[]
    homepage: string
    id: number
    imdb_id: string
    origin_country: string[]
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: ProductionCompany[]
    production_countries: ProductionCountry[]
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: SpokenLanguage[]
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
  }
  
  export interface BelongsToCollection {
    id: number
    name: string
    poster_path: string
    backdrop_path: string
  }
  
  export interface Genre {
    id: number
    name: string
  }
  
  export interface ProductionCompany {
    id: number
    logo_path?: string
    name: string
    origin_country: string
  }
  
  export interface ProductionCountry {
    iso_3166_1: string
    name: string
  }
  
  export interface SpokenLanguage {
    english_name: string
    iso_639_1: string
    name: string
  }

  export interface WatchProvider {
    id: number
    results: Results
  }
  
  export interface Results {
    IN: In
  }
  
  export interface In {
    link: string
    flatrate: Flatrate[]
    ads: Ad[]
    rent: Rent[]
  }
  
  export interface Flatrate {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Ad {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  
  export interface Rent {
    logo_path: string
    provider_id: number
    provider_name: string
    display_priority: number
  }
  