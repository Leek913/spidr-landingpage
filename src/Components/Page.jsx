

import Title from '../Assets/Spidr-Title.png';
import Logo from '../Assets/Spidr-Logo-2.png'
import SubmissionHeader from './SubmissionHeader';
import Forms from './Forms';

export default function Page() {
    return (
        <header style={{ textAlign: 'center' }} className = 'Page-Header'>
            <img src ={Logo} alt = 'SpidrLogo' className = 'Spidr-Logo'/>
            <h1 className = 'CompanyName-Border' >
                <img src = {Title} alt = 'SpidrTtile' className = 'Spidr-Title-Logo'/>
                </h1>
            <h1 className = 'Header'>Let Him Cook</h1>
            <h2 className = 'Header-Summary Fade-In'>Or… let Fry Force cook for him.</h2>
            <div>
                <SubmissionHeader />
                <Forms className = 'Form' />
            </div>
        </header>
    )
       
}