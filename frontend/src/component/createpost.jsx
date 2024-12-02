 import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Createpost() {

    const navigate = useNavigate()
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

            if (!res.data) {
                setError(true)
                return
            }

            // On success, clear the inputs and navigate
            setTitle('')
            setContent('')
            navigate('/leftside')

        } catch (e) {
            setLoading(false)
            console.log(e)
            setError(true) // Set error state if the request fails
        }
    }

    return (
        <div>
             <div className='createpost'>
            <div>Create Post</div>
            
            {loading && <div>Loading...</div>}
            {error && <div>Error creating post</div>}

            <input 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                type="text" 
                placeholder="Title" 
            />

            <textarea 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
                placeholder="Content" 
                rows="4" 
            />

            <button 
                onClick={Create} 
                disabled={loading || !title || !content}
            >
                {loading ? 'Creating...' : 'Create'}
            </button>
        </div>
        </div>
       
    )
}

export default Createpost