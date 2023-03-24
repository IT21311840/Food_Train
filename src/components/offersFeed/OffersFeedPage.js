import React from 'react'
import data from './OffersData'
import OffersFeed from './OffersFeed'
function OffersFeedPage() {
  return (
    <div>
      <div>
        {data.map(Data =>{
            return <div><OffersFeed Data = {Data}/></div>

        })}
      </div>
    </div>
  )
}

export default OffersFeedPage
