import { useState } from "react"
import { usePost } from "../context/PostContext"


function Archive() {
    const [isArchieve, setIsArchieve] = useState(false)
    const { onAddPost, createRandomPost } = usePost();

    const [posts] = useState(() => 
        Array.from({ length: 1000 }, () => createRandomPost())
    )
    console.log(posts)
    return (
        <aside>
            <h2>Post Archive</h2>
            <button onClick={() => setIsArchieve((s) => !s)}>
                {isArchieve ? 'Hide Archieve Post' : 'Show Archieve Post'}
            </button>

            {isArchieve && <ul>
                {posts.map((post, i) => (
                    <li key={i}>
                        <p>
                            <strong>{post.title}:</strong> {post.body}
                        </p>
                        <button onClick={() => onAddPost((post))}>Add as new Post</button>
                    </li>
                ))}
            </ul>}
        </aside>
    )

}

export default Archive
