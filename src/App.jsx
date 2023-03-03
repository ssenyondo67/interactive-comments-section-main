import { useState } from 'react'

import './App.css'


// importing components
import Comment from "./assets/components/Comment"
import AddComment from './assets/components/AddComment'

// importing data
import data from "./data.json"

// learning pursose only
import { familyTree } from "./data";
import Family from "./Family";


function App() {
  const [count, setCount] = useState(0)
  const comments= data.comments.map((comment)=>{                   
                   return   (
                    <Comment 
                         key={comment.id}
                         comment={comment}
                         
                    />
                   )
  }
  );

  return (
         <main> 
       <div className="comments-container">
           {comments}
          <AddComment currentUser={data.currentUser} />
         </div>        
      </main>
  )
}

export default App

