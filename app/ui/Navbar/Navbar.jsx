'use client'

import Image from 'next/image'
import Link from 'next/link'

import { FaAngleRight, FaSquareXmark } from "react-icons/fa6";
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMenuActive, setMenuActive] = useState(false);
    const [isServicesMenuActive, setServicesMenuActive] = useState(false);
    const [isSticky, setSticky] = useState(false);

    const headerBtnClick = () => {
        setMenuActive(!isMenuActive);
        serviceCloseClick();
    };

    const serviceLinkClick = () => {
        setServicesMenuActive(true);
        setMenuActive(false);
    };

    const serviceCloseClick = () => {
        setServicesMenuActive(false);
    };

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        updateHeader(scrollTop);
        setSticky(scrollTop > 100);
    };

    const updateHeader = (scrollTop, isMouseOver = false) => {
        const headerNav = document.querySelector('#header');
        const headerLogo = document.querySelector('.header__logo #logo');

        if (scrollTop > 100 || isMouseOver) {
            headerNav.classList.add('sticky');
            headerLogo.setAttribute('src', '/logo/neotet-white-logo.png');
        } else {
            headerNav.classList.remove('sticky');
            headerLogo.setAttribute('src', '/logo/neotet-logo.png');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const logoSrc = isSticky ? '/logo/neotet-white-logo.png' : '/logo/neotet-logo.png';
    return (
        <nav>
            <header className={`header ${isMenuActive ? 'active' : ''}`} id="header">
                <div className="container header__container flex" >
                    <Link href="/" className="header__logo flex" onClick={serviceCloseClick}>
                        <Image src={logoSrc} width={110} height={50} alt="Logo for Neotet Digital Agency" id="logo" />
                        <span>SIMO</span>
                    </Link>

                    <ul className={`header__menu flex ${isMenuActive ? 'active' : ''}`}>
                        <li className="list-item">
                            <span onClick={serviceLinkClick} title="Neotet's Service Page" className="links service-links">
                                Services
                            </span>
                        </li>
                        <li className='list-item' onClick={serviceCloseClick}>
                            <Link href='/projects' title='Projects created by Neotet - Digital Agency' className='links'>Projects</Link>
                        </li>
                        <li className="list-item" onClick={serviceCloseClick}>
                            <Link href='/about' title='Learn more about our company, Neotet - Digital Agency' className='links'>About</Link>
                        </li>
                    </ul>

                    <Link href="/contact" title="Contact with Agency, Neotet - Digital Agency" className="btn contact-btn header__button" onClick={serviceCloseClick}>
                        <div className="text">Contect me</div>
                        <span className="icon">
                            <FaAngleRight />
                        </span>
                    </Link>

                    <div className={`header__button-mobile ${isMenuActive ? 'active' : ''}`} id="header-btn" onClick={headerBtnClick}>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>

                    <ul className={`header__menu-mobile flex ${isMenuActive ? 'active' : ''}`} id="header-menu">
                        <li><span title="Learn more about Services to our comoany, Neotet - Digital Agency." className="service-links" onClick={serviceLinkClick}>Services</span></li>
                        <li><Link href='/projects' title='Projects created by Neotet - Digital Agency' onClick={headerBtnClick} >Projects</Link></li>
                        <li><Link href='/about' title='Learn more about our company, Neotet - Digital Agency' onClick={headerBtnClick} >About</Link></li>
                        <li><Link href='/contact' title='Contact with Agency, Neotet - Digital Agency' onClick={headerBtnClick} >Contact</Link></li>
                        <li className="social">
                            <p>Drop us a line </p>
                            <Link href="mailto:neotet.co@gmail.com" title="message">
                                neotet.co@gmail.com
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>

            <div id="service-menu" className={isServicesMenuActive ? 'active' : ''}>
                <div className="wrapper">
                    <div className="container">
                        <button id="close-service-menu" onClick={serviceCloseClick}>
                            <FaSquareXmark />
                        </button>
                        <header>
                            <h2>Services</h2>
                            <p>Supercharge your digital presence with our digital services.</p>
                        </header>
                        <ul>
                            <li><Link href="/services/websites" title="Services" onClick={serviceCloseClick}>Websites</Link></li>
                            <li><Link href="/services/webapps" title="Web Apps" onClick={serviceCloseClick}>Web Apps</Link></li>
                            <li><Link href="/services/e-commerce" title="E-Commerce" onClick={serviceCloseClick}>E-Commerce</Link></li>
                            <li><Link href="/services/SMM" title="Social Media Marketing" onClick={serviceCloseClick}>Social Media Marketing</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
