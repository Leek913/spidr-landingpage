
import FirstImage from '../Assets/Air-Fryer.png';
import AnimatedGif from '../Assets/Animation.gif'

export default function Submitted() {
    return(
        <div className='Center-Wrapper'>
            <div>
                <h1 className='Confirmation-phrase'>We got it! Thank you for your submission</h1>
                <h2 className="ThankYou-Message">Please check the console!</h2>
                <div className="Circle-Image-Container">
                    <img src={FirstImage} alt="Profile" className="Circle-Image" />
                    <img src={AnimatedGif} alt="Air Fryer Animation" className="Gif-Image" />
                </div>
            </div>
        </div>
        
    )
}