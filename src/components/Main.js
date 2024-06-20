import FormAddPosts from "./FormAddPosts"
import Posts from "./Posts"

function Main({posts,onAddPost}) {
    return (
        <main>
          <FormAddPosts onAddPost={onAddPost}/>
          <Posts posts={posts}/>  
        </main>
    )
}

export default Main
