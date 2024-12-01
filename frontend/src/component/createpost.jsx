import axios from 'axios'
import { useState } from 'react'
 

function Createpost() {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const Create = async () => {
        try {
            setLoading(true)
            const res = await axios.post(`${window.API_URL}/api/post/create`, 
                {
                    title,
                    content
                }, 
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
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

  return (
    <div className='createpost'>
        <div>Createpost</div>
        {loading && <div>Loading...</div>}
        {error && <div>Error</div>}
        
            <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="title" />
            <input onChange={(e) => setContent(e.target.value)} type="text" placeholder="content" />
            <button onClick={Create}>Create</button>
        

    </div>
  )
}

export default Createpost