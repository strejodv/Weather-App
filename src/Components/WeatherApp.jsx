import React from 'react'
import sunny from '../assets/images/sunny.png'
import cloudy from '../assets/images/cloudy.png'
import rainy from '../assets/images/rainy.png'
import snowy from '../assets/images/snowy.png'

const WeatherApp = () => {
  return (
    <div className="container">
        <div className="weather-app">
           <div className="search">
            <div className="search-top"></div>
            <i className="fa-solid fa-location-dot"></i>
            <div className="location">Location</div>
            </div> 
            <div className="search-bar">
                <input type="text" placeholder="Enter Location"></input>
               <i className="fa-solid fa-magnifying-glass"></i> 
            </div>
            <div className="weather">
                <img src={sunny} alt="sunny" />
                <div className="weather-type">Clear</div>
                <div className="temp">28°</div>
            </div>
            <div className="weather-date">
                <p>Fri, 3 May</p>
            </div>
            <div className="weather-data">
                <div className="humidity">
                <div className="data-name">Humidity</div>
                <i className="fa-solid fa-droplet"></i>
                <div className="data">35%</div>
                </div>
                <div className="wind">
                <div className="data-name">Wind</div>
                <i className="fa-solid fa-wind"></i>
                <div className="data">3 km/h</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp