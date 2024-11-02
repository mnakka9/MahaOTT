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
import { getGenres } from '@/app/utils/get-genres';

async function GenreDropdown() {

    const data: Genres = await getGenres();

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