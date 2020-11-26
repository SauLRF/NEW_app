import React from "react"

const ItemCard =(props)=>{
    const {src,name,phone,email}=props;
    console.log(props)
    return(
      <div className="contact-card">
          <img src={src}/>
          <h3>Mr.{name}</h3>
          <p>Phone: {phone} </p>
          <p>Email: {email}</p>
      </div>
    )
    
  }

  export default ItemCard;
