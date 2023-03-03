import React from "react";
import { useState } from "react";
import './component.css';

// importing images
import plus from '/icon-plus.svg';
import minus from '/icon-minus.svg';
// import user from '/images/avatars/image-amyrobson.webp'
import reply from '/icon-reply.svg';
import delet from '/icon-delete.svg';


   

// let subtract=document.getElementById('minus');


export default function Comment({comment,currentUser}){ 

  const [isVisible, setIsVisible] =useState(false);
  const expand = () => {
    setIsVisible(!isVisible);
  };


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
  function doNothing(){

  }

  //  console.log(currentUser)
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
              <div className="control--icons">
                <div className="delete-icon-container" id="delete">                
                  <img src={delet} alt="delete" className="dalete-img"/>
                  <span className="delete">Delete</span>
                </div>
                <div className="reply-icon-container" id="reply">                
                  <img src={reply} alt="reply" className="reply-to"/>
                  <span className="">{`Reply`}</span>
                </div>
              </div>
              

              <div className="user-comment">
                <p className="text">
                  {comment.replyingTo?<span className="name--tag">@{comment.replyingTo}</span>:<></>}
                  {comment.content}
                  </p>
              </div>
            </div>
            {isVisible && comment.replies.length>0 ? (
                 
                  comment.replies.map((reply) => {
                    console.log(reply);
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


           </div>
           
          </>
        )
}