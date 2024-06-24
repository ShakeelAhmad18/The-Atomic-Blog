
import { usePost } from "../context/PostContext"

function SearchPosts() {
    const { searchQuery, setSearchQuery } = usePost();
    return (
        <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="search posts..." />
    )
}

export default SearchPosts
