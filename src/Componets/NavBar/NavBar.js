import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const NavBar = () => {
    const [active, setActive] = useState("About")
    useEffect(() => {
        let currentURL = window.location.href
        console.log(currentURL);
        if (currentURL.endsWith('/'))
            setActive("About")
        else if (currentURL.endsWith('/project'))
            setActive("Project")
        else if (currentURL.endsWith('/blog'))
            setActive("Blog")
        else if (currentURL.endsWith('/resume'))
            setActive("Resume")
    }, [active])

    return (
        <div className="navbar"
           
        >
            <div className="nabvar_active">
                {active}
            </div>
            <div className='navbar_items'>

                {active !== "About" &&
                    <Link to='/about'>
                        <div className="navbar_item" onClick={() => setActive("About")}>About</div>
                    </Link>
                }

                {active !== "Resume" ?
                    <Link to='/resume'>
                        <div className="navbar_item" onClick={() => setActive("Resume")}>Resume</div>
                    </Link>
                    : null}


                {active !== 'Project' &&
                    <Link to='/project'>
                        <div className="navbar_item" onClick={() => setActive("Project")}>Project</div>
                    </Link>
                }
                {active !== "Blog" &&
                    <Link to='/blog'>
                        <div className="navbar_item" onClick={() => setActive("Blog")}>Blog</div>
                    </Link>
                }

            </div>
        </div>
    );
};

export default NavBar;