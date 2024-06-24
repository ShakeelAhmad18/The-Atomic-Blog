
import Results from "./Results"
import SearchPosts from "./SearchPosts"
import { usePost } from "../context/PostContext"

function Header() {
    const { onClearPost } = usePost();
    return (
        <header>
            <h1><span>📊</span>The Atomic Blog</h1>
            <div>
                <Results />
                <SearchPosts />
                <button onClick={onClearPost}>Clear Post</button>
            </div>
        </header>
    )
}

export default Header
