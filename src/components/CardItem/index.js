import './index.css'

const CardItem = props => {
  const {cardItems} = props
  const {title, description, imgUrl, className} = cardItems

  return (
    <li className={`${className} card-item`}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="img-container">
        <img src={imgUrl} alt={title} className="card-img" />
      </div>
    </li>
  )
}

export default CardItem
