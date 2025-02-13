
import './App.css'

import logo1 from './img/logo1.png'
import logo2 from './img/logo2.png'
import logo3 from './img/logo3.png'
import logo4 from './img/logo4.png'
import logo5 from './img/logo5.png'
import logo6 from './img/logo6.png'
import logo7 from './img/logo7.png'
import logo8 from './img/logo8.png'

function App() {
  return (

    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />


        <header className='header container'>
              <div className='foodi'>
                    <div className='FF'>
                        <h1 className='F'>F</h1>
                    </div>
                    <h2>OODI</h2>
              </div>


              <div className='aas'>

                      <a className='a1' href="">Home</a>
                      <a className='a2' href="">Menu</a>
                      <a className='a2' href="">Services</a>
                      <a className='a2' href="">Offers</a>
              </div>


              <div className='buttonandsearch'>
              <i class="fa-solid fa-magnifying-glass"></i>
                    <button className='button1'>Contact</button>
              </div>

        </header>

        <main className='main container'>
            <section className='section1'>
                  <div className='diveinto'>
                        <h1 className='text3'> Dive into Delights </h1>
                        <h1 className='text4 displayflex'> Of Delectable   <h1 className='foodtext'> Food</h1></h1><br />
                        <p className='gray text9'>Where Each Plate Weaves a Story of Culinary </p>
                        <p className='gray text9'>Mastery and Passionate Craftsmanship</p><br /><br />
                        <div className='buttonandwatch'>
                              <button className='button2 text9'>Order Now</button>
                              <a className='a2 gray text9' href="">Watch Video</a>
                        </div>
                  </div>
                  <div className='girlimg'>
                        <img className='logo1' src={logo1} alt="" />
                  </div>
            </section>
            <section className='section2'>
                        <div className='customer'>
                              <h2 className='red'>Customer Favorites</h2><br />
                              <h1 className='text5'>Popular Categories</h1><br />
                        </div>
                        <div className='ovqatlar'>
                              <div className='ovqat'>
                                    <div className='ovqatimgdiv'>
                                          <img className='ovqatimg' src={logo2} alt="" /><br /><br />

                                    </div><br />
                                    <h2 className='text7'>Main Dish</h2><br />
                                          <p className='gray'>(86 dishes)</p>
                              </div>
                              <div className='ovqat'>
                                    <div className='ovqatimgdiv'>
                                          <img className='ovqatimg' src={logo3} alt="" /><br /><br />

                                    </div><br />
                                    <h2 className='text7'>Break Fast</h2><br />
                                          <p className='gray'>(12 break fast)</p>
                              </div>
                              <div className='ovqat'>
                                    <div className='ovqatimgdiv'>
                                          <img className='ovqatimg' src={logo4} alt="" /><br /><br />

                                    </div><br />
                                    <h2 className='text7'>Dessert</h2><br />
                                          <p className='gray'>(48 dessert)</p>
                              </div>
                              <div className='ovqat'>
                                    <div className='ovqatimgdiv'>
                                          <img className='juice' src={logo5} alt="" /><br /><br />

                                    </div><br />
                                    <h2 className='text7'>Browse All</h2><br />
                                          <p className='gray'>(255 Items)</p>
                              </div>
                        </div>

                        <div className='specialdishesbigdiv'>
                              <div className='specialdishes'>
                                          <h2 className='specialdishes red'>Special Dishes</h2><br />
                                          <h1 className='text4'>Standout Dishes </h1>
                                          <h1 className='text4'>From Our Menu</h1>
                              </div>
                              
                        </div>
                        <div className='foodsdiv'>
                              <div className='fooddiv'>
                                    <img className='ovqatimg2' src={logo6} alt="" /><br />
                                    <h1>Fattoush salad</h1><br />
                                    <h3>Description of the item</h3><br />
                                    <h4>$24.00</h4>
                              </div>
                              <div className='fooddiv'>
                                    <img className='ovqatimg2' src={logo6} alt="" /><br />
                                    <h1>Fattoush salad</h1><br />
                                    <h3>Description of the item</h3><br />
                                    <h4>$24.00</h4>
                              </div>
                              <div className='fooddiv'>
                                    <img className='ovqatimg2' src={logo6} alt="" /><br />
                                    <h1>Fattoush salad</h1><br />
                                    <h3>Description of the item</h3><br />
                                    <h4>$24.00</h4>
                              </div>
                        </div>
            </section>
            <section className='section3'>

                  <div className='oshpaz'>
                        <img className='oshpazimg' src={logo7} alt="" />
                  </div>
                  <div className='Testimonials'>
                        <h2 className='red'>Testimonials</h2><br />
                        <h1 className='text4'>What Our Customers </h1>
                        <h1 className='text4'>Say About Us</h1><br />
                        <p className='gray text9'>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
                  </div>

            </section>
            <section className='section4'>
            <div className='Testimonials'>
                        <h2 className='red'>Our Story & Services</h2><br />
                        <h1 className='text4'>Our Culinary Journey</h1>
                        <h1 className='text4'> And Services </h1><br />
                        <p className='gray text9'>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p><br />
                        <button className='button2 text9'>Explore</button>
                  </div>
                  <div className="fourdiv">
                        <div className='onediv'>
                              <img src={logo8} alt="" /><br />
                              <h2>Catering</h2><br />
                              <p className='gray'>Delight your guests with our flavors and presentation</p>
                        </div>
                        <div className='onediv'>
                              <img src={logo8} alt="" /><br />
                              <h2>Catering</h2><br />
                              <p className='gray'>Delight your guests with our flavors and presentation</p>
                        </div>
                        <div className='onediv'>
                              <img src={logo8} alt="" /><br />
                              <h2>Catering</h2><br />
                              <p className='gray'>Delight your guests with our flavors and presentation</p>
                        </div>
                        <div className='onediv'>
                              <img src={logo8} alt="" /><br />
                              <h2>Catering</h2><br />
                              <p className='gray'>Delight your guests with our flavors and presentation</p>
                        </div>
                  </div>
            </section>

        </main>


            <footer className='container footer'>
            <div className='foodi'>
                    <div className='FF'>
                        <h1 className='F'>F</h1>
                    </div>
                    <h2>OODI</h2>
              </div>
              <a className='a2' href="">Useful links</a>
              <a className='a2' href="">Main Menu</a>
              <a className='a2' href="">Contact Us</a>
                  <p className='gray'>Copyright 2023 Dscode | All rights reserved</p>
            </footer>

    </>
  )
}

export default App

