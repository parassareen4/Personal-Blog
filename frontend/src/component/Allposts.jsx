import  { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Allposts() {
    const navigate = useNavigate()

    const [posts, setPosts] =useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    

    const getPosts = async () => {
        try {
            const res = await axios.get(`${window.API_URL}/api/post/all`,{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`
                }

            }
        ) 
            setPosts(res.data)
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
    useEffect(()=>{
        getPosts();
    },[])
  return (
    <div className='mainallposts'>
         <div className='allposts'>

<h1>Allposts</h1>
 {loading && <div>Loading...</div>}

 {error && <div>Error</div>}

 {!loading  && posts.map(post => <div key={post._id}><Posts {...post} ></Posts></div>)}

 

</div>


<button onClick={()=>navigate('/createpost')}>Create Post</button>
    </div>
 
   
  )
}


 function Posts(props) {
    const navigate = useNavigate()
  return (
    <div className='posts' onClick={()=>navigate(`/expandpost/${props._id}`)}>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <p>{props.author}</p>
        <p>{new Date(props.date).toLocaleDateString()}</p>

    </div>

  )
}




export default Allposts