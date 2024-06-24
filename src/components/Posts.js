import List from "./List"
import { usePost } from "../context/PostContext"

function Posts() {
    const { posts } = usePost();

    return (
        <section>
            <List posts={posts} />
        </section>
    )
}

export default Posts
