import React from "react";

const Attachment = ({attachments}) => {
    let image = attachments.image === undefined ? false:true;
    let video = attachments.video === undefined ? false:true; 
  
    const vURL= "https://www.youtube.com/embed/";
    let result = null;
    if(video)
      {
        result = vURL.concat(attachments.video)
        
      }
        if(image===true) {
            return (<img src={attachments.image} className="card-img-top wd-border-bottom" alt=""></img>);
        }
        else{
            return ( <iframe height="300px" width="100%" src={result} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> );
        }
        
      
};
export default Attachment;
