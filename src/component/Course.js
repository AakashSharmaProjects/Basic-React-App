import {useState, useEffect} from 'react';
import Auth from '../auth/Auth';

export default function Course(props) {
  const[emailId,setEmailId] = useState();
  const [comment, setComment] = useState();

useEffect(()=>{
const email = Auth.getToken();
if(email !== "")
setEmailId(email);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    Auth.onAuthentication();
    props.history.push({
      pathname: '/result',
        data: {comment, emailId}
    })    
  };

  return(
    <section id="entry-page">
    <div className="form-horizontal course-details">
      <h1>Enter Your Comments</h1>
      <form onSubmit={handleSubmit}>
      <label>
          <p>Email</p>
          <input type="text" defaultValue ={emailId} disabled = {true}/>
        </label>
        <div className='row'>
          <p>Course Code</p>          
           <input type="text"/>
        </div>
        <label>
          <p>Course Name</p>
          <input type="text"/>
        </label>
        <label>
          <p>Favourite Subject</p>
          <input type="text"/>
        </label>
        <label>
          <p>Favourite Language</p>
          <input type="text"/>
        </label>             
        <label>
          <p>Comment</p>
          <textarea className="form-control" onChange={e => setComment(e.target.value)} rows={5}/>
        </label>
       
        <div>
          <button className='btn' type="submit">Submit</button>
        </div>
      </form>
    </div>
    </section>
    );
}