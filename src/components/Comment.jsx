import React from "react";

const Comment = ({comment, user  }) => {
return(
    <div className="comment">
        <div className="comment-user">
            <h3>{user}</h3>
        </div>
        <div className="comment-text">
            <span>{comment}</span>
        </div>
    </div>
)
}
export default Comment;
