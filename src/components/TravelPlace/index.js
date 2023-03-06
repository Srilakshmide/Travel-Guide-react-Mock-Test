import './index.css'

const TravelPlace = props => {
  const {placeDetails} = props
  const {imageUrl, name, description} = placeDetails

  return (
    <li className="place-item">
      <img src={imageUrl} alt={name} className="image" />
      <h1 className="title">{name}</h1>
      <p className="description">{description}</p>
    </li>
  )
}

export default TravelPlace
