
import { usePost } from "../context/PostContext"

function Results() {
    const { posts } = usePost();

    return (
        <p>
            🚀 {posts.length} atomic post found
        </p>
    )
}

export default Results
