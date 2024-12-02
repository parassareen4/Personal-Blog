import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function ExpandPost() {

    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const params = useParams()
    const id = params.id
    const getPost = async () => {
        try {
            const res = await axios.get(`${window.API_URL}/api/post/${id}`,{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`
                }
            }
        )
            setPost(res.data)
            setLoading(false)
            console.log(res.data)
            if(!res.data){
                setError(true)
                return
            }
          
        } catch (e) {
            console.log(e)
        }
    }
  useEffect(() => {
      getPost()
  }, [])

  return (
    <div className='expandpost'>
        {loading && <div>Loading...</div>}
        {error && <div>Error</div>}
        {!loading && <div><h1>{post.title}</h1><p>{post.content}</p><p>Author: {post.author?.name || 'Unknown'}</p><p>Date: {new Date(post.date).toLocaleDateString()}</p></div>}


    </div>
  )
}

export default ExpandPost


