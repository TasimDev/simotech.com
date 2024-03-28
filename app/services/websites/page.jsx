import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

export default function Page() {
    return (
        <main className="service websites">
            <header className="service-header">
                <div className="container">
                    <div className="service-title">
                        <h2>Website Design & Development</h2>
                        <p>In the dynamic landscape of the online world, a captivating website is your gateway to success. Our team of experienced designers and developers is dedicated to elevating your online presence with cutting-edge solutions tailored to your unique needs.</p>
                    </div>
                </div>
                <div className="image">
                    <Image
                        src='/websites-service.jpg'
                        alt="Website&Debelopment Image"
                        layout='fill'
                    />
                </div>
            </header>
            <section className="service-types">

                <ul>
                    <li>Business websites</li>
                    <li>Blog websites</li>
                    <li>Portfolio websites</li>
                    <li>Event websites</li>
                    <li>Personal websites</li>
                    <li>Business websites</li>
                    <li>Blog websites</li>
                    <li>Portfolio websites</li>
                    <li>Event websites</li>
                    <li>Personal websites</li>
                    <li>Business websites</li>
                    <li>Blog websites</li>
                    <li>Portfolio websites</li>
                    <li>Event websites</li>
                    <li>Personal websites</li>
                    <li>Business websites</li>
                    <li>Blog websites</li>
                    <li>Portfolio websites</li>
                    <li>Event websites</li>
                    <li>Personal websites</li>
                    <li>Business websites</li>
                    <li>Blog websites</li>
                    <li>Portfolio websites</li>
                    <li>Event websites</li>
                    <li>Personal websites</li>
                    <li>Business websites</li>
                    <li>Blog websites</li>
                    <li>Portfolio websites</li>
                    <li>Event websites</li>
                    <li>Personal websites</li>
                    <li>Business websites</li>
                    <li>Blog websites</li>
                    <li>Portfolio websites</li>
                    <li>Event websites</li>
                    <li>Personal websites</li>
                    <li>Business websites</li>
                    <li>Blog websites</li>
                    <li>Portfolio websites</li>
                    <li>Event websites</li>
                    <li>Personal websites</li>
                    <li>Business websites</li>
                    <li>Blog websites</li>
                    <li>Portfolio websites</li>
                    <li>Event websites</li>
                    <li>Personal websites</li>
                    <li>Business websites</li>
                    <li>Blog websites</li>
                    <li>Portfolio websites</li>
                    <li>Event websites</li>
                    <li>Personal websites</li>
                    <li>Business websites</li>
                    <li>Blog websites</li>
                    <li>Portfolio websites</li>
                    <li>Event websites</li>
                    <li>Personal websites</li>
                    <li>Business websites</li>
                    <li>Blog websites</li>
                    <li>Portfolio websites</li>
                    <li>Event websites</li>
                    <li>Personal websites</li>
                </ul>

            </section>
            <section className="service-quote">
                <div className="container">
                    <p>Feel the difference with <span>Neotet Digital Agency</span> – where we're dedicated to making something special just for you. Empower your decisions, grow your business, and navigate the digital world with confidence.</p>
                    <Link href="/contact" className="btn"><div className="text">Contact us</div> <span className="icon"><FaAngleRight /></span></Link>
                </div>
            </section>
            <section className="service-info">
                <div className="container">
                    <header className="service-info-title">
                        <h2>What Sets Us Apart ?</h2>
                    </header>
                    <div className="info">
                        <ul className="service-info-list">
                            <li className="service-info-list-item">
                                <header className="info-title">
                                    Innovative Designs
                                </header>
                                <main className="info-body">
                                    We believe in the power of creativity to make a lasting impression. Our team of skilled designers crafts visually appealing and user-centric websites that stand out in the crowded digital space.
                                </main>
                            </li>
                            <li className="service-info-list-item">
                                <header className="info-title">
                                    Responsive Development
                                </header>
                                <main className="info-body">
                                    In a mobile-first era, your website needs to be accessible across all devices. Our development team ensures seamless functionality, whether your audience is viewing your site on a desktop, tablet, or smartphone.
                                </main>
                            </li>
                            <li className="service-info-list-item">
                                <header className="info-title">
                                    User-Focused Approach
                                </header>
                                <main className="info-body">
                                    Understanding your target audience is at the core of our strategy. We create intuitive user interfaces and engaging experiences that keep visitors coming back for more.
                                </main>
                            </li>
                            <li className="service-info-list-item">
                                <header className="info-title">
                                    Robust Technology
                                </header>
                                <main className="info-body">
                                    Our developers leverage the latest technologies to build robust and scalable websites. From e-commerce platforms to content management systems, we tailor solutions that align with your business goals.
                                </main>
                            </li>
                        </ul>
                    </div>
                </div>

            </section>
            <section className="service-info">
                <div className="container">
                    <header className="service-info-title">
                        <h2>Our Service Offerings</h2>
                    </header>
                    <div className="info">
                        <ul className="service-info-list">
                            <li className="service-info-list-item">
                                <header className="info-title">
                                    Website Design
                                </header>
                                <main className="info-body">
                                    Transform your vision into a captivating digital experience. Our design team combines aesthetics with functionality, creating websites that leave a lasting impression.
                                </main>
                            </li>
                            <li className="service-info-list-item">
                                <header className="info-title">
                                    Web Development
                                </header>
                                <main className="info-body">
                                    From custom web applications to responsive websites, our development team ensures a seamless user experience backed by powerful technology.
                                </main>
                            </li>
                            <li className="service-info-list-item">
                                <header className="info-title">
                                    E-Commerce Solutions
                                </header>
                                <main className="info-body">
                                    <p>Take your online business to new heights with our e-commerce solutions. We build secure and scalable platforms that enhance the online shopping experience.</p>
                                    <Link href="/services/e-commerce" className="btn"><div className="text">Learn more</div> <span className="icon"><FaAngleRight /></span></Link>
                                </main>
                            </li>
                            <li className="service-info-list-item">
                                <header className="info-title">
                                    SEO and Digital Marketing
                                </header>
                                <main className="info-body">
                                    <p>Ensure your website gets noticed. Our SEO and digital marketing strategies are designed to boost your online visibility, drive traffic, and maximize conversions.</p>
                                    <Link href="/services/SMM" className="btn"><div className="text">Learn more</div> <span className="icon"><FaAngleRight /></span></Link>
                                </main>
                            </li>
                        </ul>
                    </div>
                </div>

            </section>
            <section className="service-quote projects">
                <div className="container">
                    <p>Are you interested, you can see our projects.</p>
                    <Link href="/projects" className="btn"><div className="text">Projects</div> <span className="icon"><FaAngleRight /></span></Link>
                </div>
            </section>
        </main>
    );
}