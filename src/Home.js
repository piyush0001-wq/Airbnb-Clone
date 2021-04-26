import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'
import HostBanner from './HostBanner'

function Home() {
  return (
    <div className="home">
      <Banner />
      <h1>Live anywhere</h1>
      <div className="home_section">
        <Card src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=320" title="Entrie Homes" />

        <Card src="https://a0.muscache.com/im/pictures/7f254627-3922-4880-b8fa-545b8551117e.jpg?im_w=320" title="Farms and nature" />

        <Card src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=320" title="Something unique" />

      </div>

      <div className="home_section">
        <HostBanner img="https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=1200" title="Become a Host" description="Earn extra income and unlock new opportunities by sharing your space." />
      </div>

      <div className="home_section">
        <Card src="https://a0.muscache.com/im/pictures/aa4bdc57-eb45-4351-8ff1-32bdb5f30242.jpg?im_w=960" title="Hill-top " description="5 guests · 2 bedrooms · 3 beds · 3 bathrooms" price="₹6,699/ night" />

        <Card src="https://a0.muscache.com/im/pictures/aa4bdc57-eb45-4351-8ff1-32bdb5f30242.jpg?im_w=960" title="Hill-top " description="5 guests · 2 bedrooms · 3 beds · 3 bathrooms" price="₹6,699/ night" />

        <Card src="https://a0.muscache.com/im/pictures/aa4bdc57-eb45-4351-8ff1-32bdb5f30242.jpg?im_w=960" title="Hill-top " description="5 guests · 2 bedrooms · 3 beds · 3 bathrooms" price="₹6,699/ night" />
      </div>
    </div>
  )
}

export default Home
