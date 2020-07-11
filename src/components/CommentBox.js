import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveComment, fetchComments } from 'actions';
import { useHistory } from 'react-router-dom';

const CommentBox = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const auth = useSelector((state) => state.auth);
    const [comment,setComment] = useState('');

    useEffect(()=> {
        shouldNavigateAway();
    },[])

 const shouldNavigateAway= () =>{
        if(!auth){
            history.push('/');
        }
    }

    const handleChange= (event) => {
       setComment(event.target.value)
   };
   const fetchTheComments = () => dispatch(fetchComments());
   const handleSubmit = (event) => {
       event.preventDefault();

       // Todo - Call an action creator
       //and save comment
       dispatch(saveComment(comment));

       setComment('');
   }

    return (<div>
                <form onSubmit={handleSubmit}>
                    <h3>Add a comment</h3>
                    <textarea onChange={handleChange} value={comment}/>
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>
                <button className={"fetch-comments"} onClick={fetchTheComments}>Fetch Comments</button>
            </div>
            );
}

export default CommentBox;