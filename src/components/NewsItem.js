import React from 'react'

const NewsItem=(props) =>{
    let {title,description,imageUrl,newsUrl,author,date,source}=props;//destructuring is done from this.prop object.
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
          <span className=" badge rounded-pill bg-danger">
   {source.name}
   </span>
          </div>
  <img src={imageUrl?imageUrl:"https://resources.pulse.icc-cricket.com/ICC/photo/2023/03/13/1aa815fd-ddf6-445d-be4c-85b702ca6e03/GettyImages-1472909629.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
  {/*  */}
    <h5 className="card-title">{title}...
    </h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-body-secondary">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a rel="norefrer" href={newsUrl} target="_blank" className="btn btn-dark">Read More</a>
  </div>
</div>  
      </div>
    )
  }
export default NewsItem