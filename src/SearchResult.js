import React from 'react'

import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import './searchresult.css'

function SearchResult({
  img, location, title, description, star, price, total
}) {
  return (
    <div class="searchresult">
      <img src={img} alt="Image" width="300px" />
      <FavoriteBorderOutlinedIcon className="searchpage_heart" />
      <div className="ssearchresult_info">
        <div className="ssearchresult_infoTop">
          <h3>{title}</h3>
          <p>{location}</p>
          <p>{description}</p>
        </div>

        <div className="ssearchresult_infoBottom">
          <div className="ssearchresult_stars">
            <StarOutlinedIcon className="ssearchresult_star" />
            <p> <strong> {star} </strong></p>
          </div>
          <div className="ssearchresult_price">
            <p>  <strong>{price} </strong> </p>
            <p>  {total} </p>


          </div>

        </div>

      </div>

    </div>
  )
}

export default SearchResult
