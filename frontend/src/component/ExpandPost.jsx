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
    <>
        {loading && <div>Loading...</div>}
        {error && <div>Error</div>}
        {!loading && <div>{post.title},{post.content}</div>}


    </>
  )
}

export default ExpandPost