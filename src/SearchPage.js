import React from 'react'
import { Button } from '@material-ui/core'
import './searchpage.css'
import './searchresult.css'
import SearchResult from './SearchResult'

function SearchPage() {
  return (
    <div className="Search_page">
      <div className="searchpage_info">
        <p>62 stays 26 agust to 29 august 5 guest</p>
        <h1>Places to stay near you</h1>
        <Button variant="outlined">Cancellation flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Instant Book</Button>
        <Button variant="outlined">More filters</Button>
        <p>Review COVID-19 travel restrictions before you book. <span className="learn_more">Learn more</span></p>
        <h1>Explore all 300+ stays</h1>

        <SearchResult img="https://a0.muscache.com/im/pictures/aa4bdc57-eb45-4351-8ff1-32bdb5f30242.jpg?im_w=960" title="Hill-top" description="2 guests · 1 bedroom · 1 bed · 1 bathroom" star={4.5} price="₹6,699/ night" total="₹7,699/ night" location="Shivpuri" />

        <SearchResult img="https://a0.muscache.com/im/pictures/aa4bdc57-eb45-4351-8ff1-32bdb5f30242.jpg?im_w=960" title="Hill-top" description="2 guests · 1 bedroom · 1 bed · 1 bathroom" star={4.5} price="₹6,699/ night" total="₹7,699/ night" location="Shivpuri" />


      </div>
      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14415.085153269658!2d77.66505484999999!3d25.412465299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1618927108819!5m2!1sen!2sin" >
        </iframe>
      </div>

    </div>
  )
}

export default SearchPage
