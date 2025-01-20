import React from "react";
function JobCard({image, title, description}){
    return(
        <div>
            <img
                src={image}
                alt={title}
                className=""
            />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default JobCard;