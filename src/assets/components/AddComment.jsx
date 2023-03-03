import React from "react";
import './component.css';


export default function AddComment({currentUser}){
    return(
        <div className="add-comment">
            <div className="image">
                <img src={currentUser.image.webp} alt="user" className="user-img" />
            </div>
            <textarea name="comment" id="comment" className="textarea" placeholder="Add comment"></textarea>
            <button className="btn reply-btn">send</button>
        </div>
    )
}