import React from 'react'



const NewsItem = (props)=>{


    return (
    <div className="card"  style = {{ width : '18rem'}}>
     <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style= {{zIndex : '1' , left : '250px'}}>
    {props.source}
    <span class="visually-hidden">unread messages</span>
  </span>
        <img src={props.imgUrl?props.imgUrl:"https://as2.ftcdn.net/v2/jpg/04/00/24/31/1000_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg"} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text pt-3"><small className="text-body-secondary ">By {props.author} on {new Date(props.date).toGMTString()}</small></p>
            <a href={props.url} target = "_blank" className="btn btn-sm btn-primary">Know More..</a>
        </div>
    </div>
  )

}

export default NewsItem
