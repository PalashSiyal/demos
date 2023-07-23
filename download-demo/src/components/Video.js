import React from 'react'
import video from './video.mp4'

function Video() {                                  //2022 EAlphabits.com, All Rights Reserved.


    {/* // Function will execute on click of button */ }
    const onButtonClick = () => {
        // using Java Script method to get Video file
        fetch(video).then(response => {
            response.blob().then(blob => {
                // Creating new object of Video file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = video;
                alink.click();
            })
        })
    }
    return (
        <div>
            <center>
                <h1>Welcome to E-Alphabits</h1>
                <h3>Click on below button to download Video file</h3>
                <video width="320" height="240" controls>
                    <source src={video} type="video/mp4" />

                </video>
                <hr></hr>
                <button onClick={onButtonClick}>
                    Download Video
                </button><hr></hr>


            </center>


        </div>
    )
}

export default Video