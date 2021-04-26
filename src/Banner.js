import React, { useState } from 'react'
import './Banner.css'
import { Button } from '@material-ui/core'
import DatePicker from './Datepicker'
import { useHistory } from 'react-router-dom'

function Banner() {

  const [datepicker, setDatepicker] = useState(false);
  const history = useHistory();

  return (
    <div className="banner">
      <div className="banner_searchdate">
        <Button onClick={() => setDatepicker(!datepicker)}>Search Date</Button>
        {datepicker && <DatePicker />}
      </div>
      <div className="banner_info">
        <h1>Get out and stretch your imagination</h1>
        <p>Plan a diferent kind of gateway to uncover hidden gems near you</p>
        <Button onClick={() => history.push('/search')}>Explore More</Button>
      </div>
    </div>
  )
}

export default Banner
