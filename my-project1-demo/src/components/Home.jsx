import React from 'react'
import vg from '../assets/2.webp';
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home'>
        <main>
            <h1>IOT</h1>
            <p>Solution to all your Problems</p>
        </main>
        </div>

        <div className='home2'>
            <img src={vg} alt='graphics'/>
                <div>
                    <p>
                    We are your one and only solution to the tech problems
you face
every day. We are leading tech company whose aim is to
increase the
problem solving ability in children.

                    </p>
                </div>
        </div>
        <div className='home3'>
            <div>
                <h1>Who we are</h1>
                <p>The way we do business is just as important as the business itself. Our employees all understand the responsibility we bear as we work together toward helping our customers design & develop innovative products for the connected world of people, businesses and things.
We are driven by the desire to identify, understand and satisfy the needs and expectations of our customers. As a technology solutions and engineering partner, we play a vital role in our customer’s success. We take this faith placed in us seriously and provide them with superior value through our global presence and commitment to quality.</p>
            </div>
        </div>
        <div className="home4">

            <div>
                <h1>
                    Brands
                </h1>
                <article>
                    <div style={{animationDelay:"0.3s"}}>
                        <AiFillGoogleCircle/>
                        <p>Google</p>
                    </div>

                    <div style={{animationDelay:"0.5s"}}>
                        <AiFillAmazonCircle/>
                        <p>Amazon</p>
                    </div>

                    <div style={{animationDelay:"0.7s"}}>
                        <AiFillYoutube/>
                        <p>Youtube</p>
                    </div>

                    <div style={{animationDelay:"0.9s"}}>
                        <AiFillInstagram/>
                        <p>Instagram</p>
                    </div>

                </article>
            </div>
        </div>
    </>
  )
}

export default Home