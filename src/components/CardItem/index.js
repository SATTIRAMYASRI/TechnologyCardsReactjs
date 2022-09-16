import './index.css'

const Technology = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={className} style={{margin: `20px`}}>
      <div className="card-container">
        <h1 className="card-heading">{title}</h1>
        <p className="card-description">{description}</p>
        <div className="img-Alignment">
          <img src={imgUrl} alt={title} />
        </div>
      </div>
    </li>
  )
}
export default Technology
