import { useState } from 'react'

import './App.css'


// importing components
import Comment from "./assets/components/Comment"
import AddComment from './assets/components/AddComment'

// importing data
import data from "./data.json"



function App() {
  const [count, setCount] = useState()
  const comments= data.comments.map((comment)=>{
                   return   (
                    <Comment 
                         key={comment.id}
                         comment={comment}

                    />
                   )
  }
  );
  localStorage.setItem("user",JSON.stringify(data.currentUser))

  

  return (
         <main> 
       <div className="comments-container">
           {comments}
          <AddComment                  
                 replyingto={""}
                 currentUser={data.currentUser} />
         </div>        
       
      </main>
  )
}

export default App

