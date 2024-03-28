import Image from "next/image";
import Link from "next/link";
import { FaAngleRight, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export default function Page() {
    return (
        <main id="about-page">
            <header>
                <div className="container"><span className="title">New Generation Digital Agency</span>
                    <h2>Where inovation meets the digital frontier.</h2>
                    <p>As a digital company, we make new generation web products to determine the future.</p></div>

            </header>
            <section id="quote">
                <header><div className="title">We Make New Generation</div>
                    <div className="text">
                        {'\u00A0'}{'\u00A0'}{'\u00A0'}Websites{'\u00A0'}{'\u00A0'}{'\u00A0'}Web Apps{'\u00A0'}{'\u00A0'}{'\u00A0'}Digital Products{'\u00A0'}{'\u00A0'}{'\u00A0'}
                        E-Commerce{'\u00A0'}{'\u00A0'}{'\u00A0'}Digital Marketing{'\u00A0'}{'\u00A0'}{'\u00A0'}Social Media Marketing{'\u00A0'}{'\u00A0'}{'\u00A0'}
                        Saas{'\u00A0'}{'\u00A0'}{'\u00A0'}Websites{'\u00A0'}{'\u00A0'}{'\u00A0'}Web Apps{'\u00A0'}{'\u00A0'}{'\u00A0'}Digital Products{'\u00A0'}{'\u00A0'}{'\u00A0'}
                        E-Commerce{'\u00A0'}{'\u00A0'}{'\u00A0'}Digital Marketing{'\u00A0'}{'\u00A0'}{'\u00A0'}Social Media Marketing{'\u00A0'}{'\u00A0'}{'\u00A0'}
                        Saas{'\u00A0'}{'\u00A0'}{'\u00A0'}Websites{'\u00A0'}{'\u00A0'}{'\u00A0'}Web Apps{'\u00A0'}{'\u00A0'}{'\u00A0'}Digital Products{'\u00A0'}{'\u00A0'}{'\u00A0'}
                        E-Commerce{'\u00A0'}{'\u00A0'}{'\u00A0'}Digital Marketing{'\u00A0'}{'\u00A0'}{'\u00A0'}Social Media Marketing{'\u00A0'}{'\u00A0'}{'\u00A0'}
                        Saas{'\u00A0'}{'\u00A0'}{'\u00A0'}Websites{'\u00A0'}{'\u00A0'}{'\u00A0'}Web Apps{'\u00A0'}{'\u00A0'}{'\u00A0'}Digital Products{'\u00A0'}{'\u00A0'}{'\u00A0'}
                        E-Commerce{'\u00A0'}{'\u00A0'}{'\u00A0'}Digital Marketing{'\u00A0'}{'\u00A0'}{'\u00A0'}Social Media Marketing{'\u00A0'}{'\u00A0'}{'\u00A0'}
                        Saas
                    </div>

                </header>

            </section>
            <main>
                <div className="container">
                    <ul className="team">

                        <li className="profile">
                            <div className="department">
                                <span>FOUNDER / DEVELOPER</span>
                            </div>
                            <main className="profile-info">
                                <div className="names">
                                    <div className="name"><span className="name"><h3>Tasim Tasim </h3></span>
                                        <span className="image">
                                            <Image
                                                src="/tasim-ceo.jpg"
                                                alt="Tasim Ceo"
                                                width={50}
                                                height={60}
                                            />
                                        </span>
                                    </div>
                                    <p>Hello, I'm Tasim. The mind behind NEOTET, I've dedicated years to shaping this idea, convinced that NEOTET will redefine the landscape and trajectory of Digital Services on the Internet. Join us in this endeavor. Let's collaborate and make a lasting impact together. Be part of our journey. </p></div>
                                <div className="socials">
                                    <a href="#"><FaLinkedinIn /></a>
                                </div>
                            </main>

                        </li>
                        <li className="profile">
                            <div className="department">
                                <span>FOUNDER / DEVELOPER</span>
                            </div>
                            <main className="profile-info">
                                <div className="names">
                                    <div className="name"><span className="name"><h3>Tanju Tasim </h3></span>
                                        <span className="image">
                                            <Image
                                                src="/tanju-ceo-1.jpg"
                                                alt="Tasim Ceo"
                                                width={50}
                                                height={60}
                                            />
                                        </span>
                                    </div>
                                    <p>Hey there, it's Tanju from NEOTET. I've always envisioned NEOTET as a game-changer, reshaping not just your business but your entire perspective on the online world. Become a part of our community and discover the difference. Join us on this exciting journey! </p></div>
                                <div className="socials">
                                    <a href="#"><FaLinkedinIn /></a>
                                    <a href="#"><FaInstagram /></a>
                                </div>
                            </main>

                        </li>
                    </ul>
                </div>

            </main>
            <section id="contact">
                <div className="container">
                    <div className="wrapper">
                        <header>
                            <h3>Let us take your business
                                further than it has ever been.
                            </h3>
                        </header>

                        <Link href="/contact" className="btn contact-btn"><div className="text">Contact Us</div> <span className="icon"> <FaAngleRight /></span></Link>

                    </div>

                </div>
            </section>
        </main>
    );
}