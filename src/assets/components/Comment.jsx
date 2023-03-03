import React from "react";
import { useState } from "react";
import './component.css';

// importing images
import plus from '/icon-plus.svg';
import minus from '/icon-minus.svg';
// import user from '/images/avatars/image-amyrobson.webp'
import reply from '/icon-reply.svg';
import delet from '/icon-delete.svg';
import edit from '/icon-edit.svg'


// importing componenets
import AddComment from "./AddComment";


export default function Comment({comment}){ 
 
  const [isVisible, setIsVisible] =useState(false);
  const expand = () => {
    setIsVisible(!isVisible);
  };
  const [toreply,setToreply]= useState(false);
  const [todelete,setTodelete]=useState(false);
  const [toEdit,setToEdit] =useState(false);



  function add(){
    let input=document.getElementById('number');
    if(input.value){
      input.value =parseInt(input.value)+1
    }else{
      input.value=0;
    }
    
  }
  function numberOnly(){
    let input=document.getElementById('number');
    if(input.value<1){
      input.value=0
    }
  }

  function subtract(){
    let input=document.getElementById('number');
    
    if(input.value){
      if(input.value >0){
        input.value =parseInt(input.value)-1
      }
    }else{
      input.value=0;
    }
    
  }
  function doNothing(){}
  
  const replyTo = () => {
      setToreply(!toreply);
    };

  const deleteComment=()=>{
      setTodelete(!todelete)
  }

  // to be implemented further
  const cancleDelete=()=>{
    setTodelete(!todelete)
  }
  const removeComment=()=>{
    setTodelete(!todelete)
  }
  const editComment=()=>{
    setToEdit(!toEdit)
  }

  const currentUser=JSON.parse(localStorage.getItem('user'))
  const username=comment.user.username
  const isCurrentUser=currentUser.username===comment.user.username;
  
    return(
          <>
           <div  className="comment-container">
            <div onClick={comment.replyingTo? doNothing:expand} className="comment">
              <div className="score input-group">
                <img src={plus} alt="plus" id="plus" className="math-icon plus" onClick={add}/>
                <input type='number' id="number" placeholder={comment.score} onKeyUp={numberOnly}/>
                <img src={minus} alt="minus" id="minus" className="math-icon minus" onClick={subtract}/>
              </div>

              <div className="user-info">                
                <img src={comment.user.image.webp} alt="user" className="  user-img" />              
                <h3 className="user-name">{comment.user.username}</h3>
                <p className="time">{comment.createdAt}</p>
              </div>
             
              {  isCurrentUser? ( 
                 <div className="control--icons">           
                      <div className="delete-icon-container" id="delete" onClick={deleteComment}>                
                        <img src={delet} alt="delete" className="dalete-img"/>
                        <span className="delete">Delete</span>
                      </div>
                      {/* this is only rendered when delete is clicked */}
                    { todelete?(
                      <div className="delete--container">
                          <h3>Delete Comment</h3>
                          <p>Are you sure want to delete this comment? this will remove the comment and can't be undone</p>
                          <div className="buttons">
                            <button className="btn btn-cancel" id="cancel" onClick={cancleDelete}>No Cancel</button>
                            <button className="btn btn-remove" id="remove" onClick={removeComment}>Yes Delete</button>
                          </div>
                      </div>
                    ):(
                      <></>
                    )
                   }
                   {!toEdit &&(
                      <div className="reply-icon-container" id="Edit" onClick={editComment}>                
                        <img src={edit} alt="reply" className="reply-to"/>
                        <span className="">Edit</span>
                      </div>)
                   }
                </div>
              ):(
                <div className="control--icons">           
                 <div className="reply-icon-container" id="reply" onClick={replyTo}>                
                  <img src={reply} alt="reply" className="reply-to"/>
                  <span className="">{`Reply`}</span>
                </div>
                </div>
              )
              }
              <div className="user-comment">
                {toEdit?(
                <div className="textEditor">
                  <textarea name="comment" id="comment" className="textarea" defaultValue={`@${comment.replyingTo} ${comment.content}`} placeholder="Add comment"></textarea>
                  <button className="btn reply-btn">send</button>
                </div>):(
                <p className="text">
                  {comment.replyingTo?<span className="name--tag">@{comment.replyingTo}</span>:<></>}
                  {comment.content}
                 </p>)
                }
              </div>
            </div>
           
            {isVisible && comment.replies.length>0 ? (
                 
                  comment.replies.map((reply) => {                    
                    return (
                      <div className="reply-container">
                        <Comment 
                         key={reply.id}
                         comment={reply}
                        />
                      </div>
                    );
                  })
                ) : (
                  <></>
                )}
               
                {
                  
                  toreply?(
                    <AddComment
                        
                         currentUser={currentUser}
                         replyingto={username}

                         />
                                         
                  ): (

                    <></>
                  )
                }
            

           </div>
           
          </>
        )
}