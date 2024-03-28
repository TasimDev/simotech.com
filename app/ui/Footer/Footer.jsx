import Link from "next/link"
import FooterLink from "./footer-link"



const Footer = () => {
    return (
        <footer id="footer">
            <div className="container footer__container">
                <div className="footer__top">
                    <span>Are you ready?</span>
                    <div className="title">Let's start</div>
                </div>
                <div className="footer__center">
                    <ul className="footer-list">
                        <li className="services">
                            <header><h2>Services</h2></header>
                            <Link href="/services/websites">Websites</Link>
                            <Link href="/services/webapps">Web Apps</Link>
                            <Link href="/services/e-commerce">E-Commerce</Link>
                            <Link href="/services/SMM">Social Media Marketing</Link>
                        </li>
                        <li className="about">
                            <header><h2>Neotet</h2></header>
                            <Link href="/about">About</Link>
                            <Link href="/about">Our Team</Link>
                            <Link href="/contact">Careers</Link>
                            <Link href="/contact">Contact us</Link>
                        </li>
                        <li className="contact">
                            <header><h2>Find us</h2></header>
                            <div className="email">
                                <Link href="mailto:neotet.co@gmail.com">hello@neotet.co</Link>
                            </div>
                            <div className="place">
                                <p> Ruse, Bulgaria </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="footer__socials">
                    <div>
                        <p>Copyright &copy NEOTET, 2024. All rights reserved.</p>
                    </div>
                    <ul className="socials">
                        <FooterLink />
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer