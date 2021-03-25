import React from 'react'
import imageTv from '../../img/device-3.png'
import imageDownload from '../../img/device-2.jpg'
import imageDevice from '../../img/device-1.png'


function Home(props) {

    return (
        <div className="homeContainer">

            <div className="sectionHome">
                <div className="containerHomeText">
                    <h1>Unlimited movies, TV <br></br>shows, and more.</h1>
                    <h3>Watch anywhere. Cancel anytime.</h3>
                    <h4 className="emailText">Ready to watch? Enter your email to create or restart your membership.</h4>
                </div>
            </div>

            <div className="sectionWatch">
                <div className="containerWatchText">
                    <h1>Enjoy on your TV.</h1>
                    <h4>Watch on Smart TVs, Playstation, Xbox<br></br>
                        Chromecast, Apple TV, Blu-ray players, and<br></br>
                        more.</h4>
                <img src={imageTv} alt="WatchTv"/>
                </div>


            </div>

            <div className="sectionDownload">
                <div className="containerDownloadText">
                    <h1>Download your shows<br></br> to watch offline.</h1>
                    <h4>Save your favorites easily and always have<br></br> something to watch.</h4>
                <img src={imageDownload} alt="Download"/>
                </div>
            </div>

            <div className="sectionDevice">
                <div className="containerDeviceText">
                    <h1>Watch everywhere.</h1>
                    <h4>Stream unlimited movies and TV shows on<br></br> your phone, tablet, laptop, 
                    and TV without<br></br> paying more.</h4>
                <img src={imageDevice} alt="Device"/>
                </div>

            </div>

            <div className="sectionQuestions">
                <div className="containerQuestionsText">
                    <h1>Frequently Asked Questions</h1>

                    <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
                </div>


            </div>




        </div>
    )
}

export default Home