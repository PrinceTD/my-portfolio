import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import myProfile from "../../img/Prince.png"
import ModalItem from '../Modal/ModalItem';
import "./Slidbar.css"

const SlideBar = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className="">
            <div className="text-center pt-5">
                <img src={myProfile} alt="" width="70%" />
                <h3 className='pt-3'>PRINCE TALUKDER</h3>
                <p>Web Developer</p>
                <p className='pb-3'>
                    <a href="https://github.com/PrinceTD" target="_blank">
                        <span className='pe-3 icon-clr'>
                            <i className="fab fa-github">
                            </i>
                        </span>
                    </a>

                    <a href="https://www.linkedin.com/in/prince-talukder-1617631ab/" target="_blank">
                        <span className='pe-3 icon-clr'>
                            <i className="fab fa-linkedin-in">
                            </i>
                        </span>
                    </a>

                    <a href="talukderprince100@gmail.com">
                        <span className='pe-3 icon-clr'>
                        <i className="fas fa-envelope"></i>
                        </span>
                    </a>
                    <a href="https://www.instagram.com/_prince_talukder_/" target="_blank">
                        <span className='pe-3 icon-clr'>
                        <i className="fab fa-instagram"></i>
                        </span>
                    </a>
                </p>
                <div className="border-btn pt-2">
                    <a href="https://drive.google.com/file/d/1NnoC4TQRute4O58TaG8HhUvtkv6mMEmZ/view?usp=sharing" target="_blank">
                        <button className='p-4 btn-clr icon-clr'>
                            MY RESUME
                        </button>
                    </a>
                    <button onClick={handleOpen} className='border-0 p-4 btn-clr icon-clr'>
                        CONTACT ME
                    </button>
                </div>
            </div>
            <ModalItem
                handleClose={handleClose}
                open={open}
            >

            </ModalItem>
        </div>
    );
};

export default SlideBar;