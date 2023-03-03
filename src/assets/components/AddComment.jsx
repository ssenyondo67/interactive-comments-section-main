import React from "react";
import './component.css';


export default function AddComment(props){
   
    return(
        <div className="add-comment">
            <div className="image">
                <img src={props.currentUser.image.webp} alt="user" className="user-img" />
            </div>
            <textarea name="comment" id="comment" className="textarea" defaultValue={`@${props.replyingto} `} placeholder="Add comment"></textarea>
            <button className="btn reply-btn">send</button>
        </div>
    )
}