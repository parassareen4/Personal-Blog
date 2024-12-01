import  { useState } from 'react'

function Allposts() {


    const [posts, setPosts] =useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const getPosts = async () => {
        try {
            const res = await fetch(`${window.API_URL}/api/post/all`,{
                headers: {
                    Authorization: ` Bearer ${localStorage.getItem("token")}`,
                  }})
            if(!res.ok){
                setError(true)
                return
            }
            setLoading(true)
            console.log(res)
            console.log(
                "fetched posts successfully"
            )
            const data = await res.json()
            console.log(data)
            setPosts(data)
            setLoading(false)
        } catch (e) {
            setError(true)
        }
    }
    





  return (<>
   <div>Allposts</div>
    {loading && <div>Loading...</div>}
    {error && <div>Error</div>}
    {!loading && !error && posts.map(post => <div key={post._id}>{post.title}</div>)}
    <button onClick={getPosts}>Get Posts</button>

  </>
   
  )
}

export default Allposts