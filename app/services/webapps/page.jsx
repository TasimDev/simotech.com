import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

export default function Page() {
    return (
        <main className="service websites">
            <header className="service-header">
                <div className="container">
                    <div className="service-title">
                        <h2>Web Application & Software Development</h2>
                        <p>We don't just build applications, we are architects of digital experiences that redefine excellence. Our services are designed to catapult your business into the future, delivering solutions that are not just functional but truly transformative.</p>
                    </div>
                </div>
                <div className="image">
                    <Image
                        src='/webapps-service.jpg'
                        alt="Website&Debelopment Image"
                        layout='fill'
                    />
                </div>
            </header>
            <section className="service-types">

                <ul>
                    <li>Application Websites</li>
                    <li>SaaS</li>
                    <li>Operating systems</li>
                    <li>Web Applications</li>
                    <li>Application Website</li>
                    <li>SaaS</li>
                    <li>Operating systems</li>
                    <li>Web Applications</li>
                    <li>Application Website</li>
                    <li>SaaS</li>
                    <li>Operating systems</li>
                    <li>Web Applications</li>
                    <li>Application Website</li>
                    <li>SaaS</li>
                    <li>Operating systems</li>
                    <li>Web Applications</li>
                    <li>Application Website</li>
                    <li>SaaS</li>
                    <li>Operating systems</li>
                    <li>Web Applications</li>
                    <li>Application Website</li>
                    <li>SaaS</li>
                    <li>Operating systems</li>
                    <li>Web Applications</li>
                    <li>Application Website</li>
                    <li>SaaS</li>
                    <li>Operating systems</li>
                    <li>Web Applications</li>
                    <li>Application Website</li>
                    <li>SaaS</li>
                    <li>Operating systems</li>
                    <li>Web Applications</li>
                    <li>Application Website</li>
                    <li>SaaS</li>
                    <li>Operating systems</li>
                    <li>Web Applications</li>
                    <li>Application Websites</li>
                    <li>SaaS</li>
                    <li>Operating systems</li>
                    <li>Web Applications</li>
                    <li>Application Website</li>
                    <li>SaaS</li>
                    <li>Operating systems</li>
                    <li>Web Applications</li>
                    <li>Application Website</li>
                    <li>SaaS</li>
                    <li>Operating systems</li>
                    <li>Web Applications</li>
                    <li>Application Website</li>
                    <li>SaaS</li>
                    <li>Operating systems</li>
                    <li>Web Applications</li>
                    <li>Application Website</li>
                    <li>SaaS</li>
                    <li>Operating systems</li>
                    <li>Web Applications</li>
                    <li>Application Website</li>
                    <li>SaaS</li>
                    <li>Operating systems</li>
                    <li>Web Applications</li>
                    <li>Application Website</li>
                    <li>SaaS</li>
                    <li>Operating systems</li>
                    <li>Web Applications</li>
                    <li>Application Website</li>
                    <li>SaaS</li>
                    <li>Operating systems</li>
                    <li>Web Applications</li>
                    <li>Application Website</li>
                    <li>SaaS</li>
                    <li>Operating systems</li>
                    <li>Web Applications</li>
                </ul>

            </section>
            <section className="service-quote">
                <div className="container">
                    <p>Embark on a journey of digital transformation with NEOTET. Let's build applications that redefine standards and elevate your business to new heights. Contact us today to discuss your project and discover how NEOTET's Web Application & Software Development services can be a game-changer for your business.</p>
                    <Link href="/contact" className="btn"><div className="text">Contact us</div> <span className="icon"><FaAngleRight /></span></Link>
                </div>
            </section>
            <section className="service-info">
                <div className="container">
                    <header className="service-info-title">
                        <h2>Our Approach</h2>
                    </header>
                    <div className="info">
                        <ul className="service-info-list">
                            <li className="service-info-list-item">
                                <header className="info-title">
                                    Collaborative Ideation
                                </header>
                                <main className="info-body">
                                    At NEOTET, collaboration is at the heart of our process. We work closely with you to grasp your unique vision, challenges, and objectives. Through collaborative ideation, we transform concepts into robust solutions that serve as the cornerstone of your digital success.
                                </main>
                            </li>
                            <li className="service-info-list-item">
                                <header className="info-title">
                                    Tailored Solutions
                                </header>
                                <main className="info-body">
                                    Recognizing the distinctiveness of every business, we take pride in delivering custom web applications and software precisely aligned with your unique requirements. From user-friendly interfaces to intricate backend systems, our solutions are meticulously crafted for success.
                                </main>
                            </li>

                        </ul>
                    </div>
                </div>

            </section>
            <section className="service-info">
                <div className="container">
                    <header className="service-info-title">
                        <h2>Services We Offer</h2>
                    </header>
                    <div className="info">
                        <ul className="service-info-list">
                            <li className="service-info-list-item">
                                <header className="info-title">
                                    Web Application Development
                                </header>
                                <main className="info-body">
                                    NEOTET specializes in creating dynamic and responsive web applications, delivering seamless user experiences. Whether it's a customer-facing platform or an internal tool, we ensure your web application is intuitive, scalable, and in perfect harmony with your business goals.
                                </main>
                            </li>
                            <li className="service-info-list-item">
                                <header className="info-title">
                                    Software Development
                                </header>
                                <main className="info-body">
                                    From concept to execution, our software development services cover the entire lifecycle. We build scalable and robust software solutions that optimize processes, enhance efficiency, and drive tangible business results.
                                </main>
                            </li>
                            <li className="service-info-list-item">
                                <header className="info-title">
                                    Mobile App Development
                                </header>
                                <main className="info-body">
                                    <p>In a mobile-centric world, NEOTET keeps you connected with your audience. Our mobile app development services encompass iOS, Android, and cross-platform applications, ensuring your brand reaches users wherever they are.</p>
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