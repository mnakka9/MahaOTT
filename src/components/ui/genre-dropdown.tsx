import React from 'react'
import { Genres } from '../../../typings';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react';

async function GenreDropdown() {
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

return (
    <DropdownMenu> 
        <DropdownMenuTrigger className="text-gray-900 flex justify-center items-center">
            Genre <ChevronDown className="ml-1" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Select a genre</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {data.genres.map((genre) => (
                <DropdownMenuItem key={genre.id}>
                   <a href={`/genre/${genre.id}?genre=${genre.name}`}>
                   <span>{genre.name}</span>
                   </a>
                </DropdownMenuItem>
            ))}
        </DropdownMenuContent>
    </DropdownMenu>
);

}

export default GenreDropdown