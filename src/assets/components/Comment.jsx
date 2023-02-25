import React from "react";
import './component.css';

// importing images
import plus from '/icon-plus.svg';
import minus from '/icon-minus.svg';
// import user from '/images/avatars/image-amyrobson.webp'
import reply from '/icon-reply.svg';

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

// let subtract=document.getElementById('minus');


export default function Comment(props){ 
   
    return(
          <>
           <div className="comment">
              <div className="score input-group">
                <img src={plus} alt="plus" id="plus" className="math-icon plus" onClick={add}/>
                <input type='number' id="number" placeholder={props.score} onKeyUp={numberOnly}/>
                <img src={minus} alt="minus" id="minus" className="math-icon minus" onClick={subtract}/>
              </div>

              <div className="user-info">                
                <img src={props.img} alt="user" className="  user-img" />              
                <h3 className="user-name">{props.username}</h3>
                <p className="time">{props.createdAt}</p>
              </div>

              <div className="reply-icon-container" id="reply">
                <img src={reply} alt="reply" className="reply-to"/>
                <span className="">Reply</span>
              </div>

              <div className="user-comment">
                <p className="text">{props.content}</p>
              </div>

           </div>
           <div className="reply" id={`replyTo${props.username}`}>
            
           </div>
          </>
        )
}