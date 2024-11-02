import Link from "next/link"
import SearchInput from "./search-input"
import GenreDropdown from "./genre-dropdown"

function Header() {
  return (
    <header className="fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-blue-200/0 via-blue-900/25 to-blue-900">
        <Link className="cursor-pointer text-2xl" href="/">Maha OTT</Link>

        <div className="flex space-x-2">
            <GenreDropdown />
            <SearchInput />
        </div>
    </header>
  )
}

export default Header