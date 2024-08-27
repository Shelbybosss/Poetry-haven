import React from 'react'
import background from "../../assets/feather.jpg"
import "./hero.css";

function Hero() {
  return (
    <>
        <div className='hero-main' id='main'>
            
            <div className='inner-hero'>
                <h1>Poetry        Haven</h1>
            </div>
        </div>

        <div className='searchpoet' id='searchpoet'>
            <div className='inner-search-poet'>
                <h1>Search Poetries of your Favorite Poet ✨</h1>
                <input type='text' className='searchinput' placeholder='Enter Name of poet'></input>
                <button className='submit-btn'>Submit</button>
            </div>
        </div>

        <div className="outer-container" id='subscribe'> {/* Outer div for centering */}
      <div className="subscribenow" id="subscribenow"> {/* Inner div with subscribe content */}
        <h2>Subscribe Now</h2>
        <p>Get the latest updates delivered straight to your inbox!</p>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>

    <footer className="footer">
  <p>&copy; 2024 Poetry Haven. All Rights Reserved.</p>
</footer>
    </>
  )
}

export default Hero