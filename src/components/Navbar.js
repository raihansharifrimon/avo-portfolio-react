import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [state, setState] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [])

    const handleScroll = () => {
        if(window.scrollY > 120) {
            setState(true);
        }else {
            setState(false);
        }
    }
    return (
        <div className={`navbar ${state ? 'white-bg' : 'transparent'}`}>
            <div className="container">
                <div className="navbar__content">
                    <div className="navbar__left">
                        <img src={state ? '/images/logo-dark.png' : '/images/logo-light.png'} alt="logo" />
                    </div>
                    <ul className="navbar__right">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="showcase">Showcases &#10010;</Link></li>
                        <li><Link to="">Portfolio</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
