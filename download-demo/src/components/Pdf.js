import React from 'react'

function Pdf() {                                 //2022 EAlphabits.com, All Rights Reserved.


    {/* // Function will execute on click of button */ }
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('SamplePDF.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }
    return (
        <div>
            <center>
                <h1>Welcome to E-Alphabits</h1>
                <h3>Click on below button to download PDF file</h3><hr></hr>
                <button onClick={onButtonClick}>
                    Download PDF
                </button>
            </center>


        </div>
    )
}

export default Pdf