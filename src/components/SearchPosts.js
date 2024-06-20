function SearchPosts({searchQuery,setSearchQuery}) {
    return (
        <input value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}  placeholder="search posts..."/>
    )
}

export default SearchPosts
