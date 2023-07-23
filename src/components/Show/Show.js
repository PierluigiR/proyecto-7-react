import React from 'react'

const Show = (props) => {
  return (
    
        <article style={{ border: "2px solid #E84E0F" , borderRadius: "8px", margin: "0.25rem", padding: "1rem"}} >
                <i class="bi bi-bookmark-star-fill"></i>
                <h6 >{props.fecha}</h6>
                <h4 >{props.evento}</h4>
                <h5>{props.lugar}</h5>
        </article>
  
      
    
  )
}

export default Show;
