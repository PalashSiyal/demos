import React from 'react'
import img from './nature.jpg'


function Photo() {                          //2022 EAlphabits.com, All Rights Reserved.


    {/* // Function will execute on click of button */ }
    const onButtonClick = () => {
        // using Java Script method to get Photo file
        fetch('https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg').then(response => {
            response.blob().then(blob => {
                // Creating new object of Photo file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg';
                alink.click();
            })
        })
    }
    return (
        <div>
            <center>
                <h1>Welcome to E-Alphabits</h1>
                <h3>Click on below button to download Photo file</h3>
                <img src={img} style={{ width: "300px" }}></img><hr></hr>
                <button onClick={onButtonClick}>
                    Download Photo
                </button>
            </center>


        </div>
    )
}

export default Photo