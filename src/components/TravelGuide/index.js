import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TravelPlace from '../TravelPlace'
import './index.css'

class TravelGuide extends Component {
  state = {isLoading: true, travelData: []}

  componentDidMount() {
    this.getTravelGuideData()
  }

  getTravelGuideData = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const data = await response.json()
    console.log(data)
    const formattedData = data.packages.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      imageUrl: eachItem.image_url,
      description: eachItem.description,
    }))
    this.setState({travelData: formattedData, isLoading: false})
  }

  render() {
    const {travelData, isLoading} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Travel Guide</h1>
        <hr className="line" />
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul className="places-list">
            {travelData.map(eachPlace => (
              <TravelPlace key={eachPlace.id} placeDetails={eachPlace} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default TravelGuide
