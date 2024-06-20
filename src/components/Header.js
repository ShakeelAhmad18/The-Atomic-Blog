import Results from "./Results"
import SearchPosts from "./SearchPosts"

function Header({posts,searchQuery,setSearchQuery,onClearPost}) {
    return (
        <header>
            <h1><span>📊</span>The Atomic Blog</h1>
            <div>
                <Results posts={posts}/>
                <SearchPosts searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <button onClick={onClearPost}>Clear Post</button>
            </div>
        </header>
    )
}

export default Header
