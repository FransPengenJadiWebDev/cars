import { MdSearch } from "react-icons/md";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

const SearchBar = ({search, setSearch} : Props) => {
  return (
    <div className= 'flex gap-3 items-center rounded-4xl px-3 py-2 text-[16px] bg-orange-500'>
    <MdSearch className=" pointer-events-none"/>
    <input 
      type="text" 
      placeholder='Search' 
      value={search} 
      onChange={(e) => setSearch(e.target.value)} 
      className="relative outline-none text-white placeholder:text-white"
    />
</div>
    
  )
}

export default SearchBar