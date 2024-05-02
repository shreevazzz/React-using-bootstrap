import image from '../assets/news.jpg'

const Newsitems = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 flex-item" style={{ maxWidth: "445px" }}>
      <img src={src?src:image} style={{ height: "230px", width: "425px" }} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description?description.slice(0, 90):"Archaeologists in Egypt believe they've unearthed a previously unknown pyramid complex after analyzing satellite imagery. "}
        </p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  )
 
}



export default Newsitems



