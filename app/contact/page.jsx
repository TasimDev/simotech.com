import Image from 'next/image';
import dynamic from 'next/dynamic';
import Link from 'next/link';

export default function Page() {
    const DynamicForm = dynamic(() => import('./FormComponent'), { ssr: false });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    };

    return (
        <main id="contact-page">
            <header>
                <div className="container">
                    <header>
                        <div className="images">
                            <div className="profile">
                                <Image
                                    src="/tanju-ceo-1.jpg"
                                    alt="Description of the image"
                                    className="image-profile"
                                    width={50}
                                    height={60}
                                />
                            </div>
                            <div className="profile">
                                <Image
                                    src="/tasim-ceo.jpg"
                                    alt="Description of the image"
                                    className="image-profile"
                                    width={50}
                                    height={60}
                                />
                            </div>
                        </div>
                        <div className="header-title">
                            <h2>We'd love to hear from you!</h2>
                            <p>
                                Whether you want to tell us about a project, join our team, or just say hi, write to us! We’d love to hear from you.
                            </p>
                        </div>
                    </header>
                </div>
            </header>
            <section id="contact-info">
                <div className="container">
                    <header className="contact-title">
                        <h2>Discuss your next project with us!</h2>
                    </header>
                    <DynamicForm />
                </div>
            </section>
            <section id="contact-names">
                <div className="container">
                    <div className="first">
                        <header>
                            <h2>Contact Us</h2>
                        </header>
                        <ul>
                            <li>
                                <header>Bulgaria Central Office</header>
                                <main><p>Ruse, Bulgaria <br />
                                    7000</p></main>
                            </li>
                            <li>
                                <header>Turkiye</header>
                                <main><p>Coming soon</p></main>
                            </li>
                            <li>
                                <header>New York</header>
                                <main><p>Coming soon</p></main>
                            </li>
                        </ul>
                    </div>
                    <div className="second">
                        <header>
                            <h2>Get In Touch</h2>
                        </header>
                        <ul>
                            <li>
                                <header><Link href="#">hello@neotet.com</Link></header>
                                <main><p>If you would like to send us an RFP or a project brief, feel free to use the above email address. We will get back to you as soon as we can!</p></main>
                            </li>
                            <li>
                                <header><Link href="#">Schedule a call</Link></header>
                                <main><p>Writing messages isn’t quite for you? - That's fine! We can meet up instead. Schedule a call and share your story with us!</p></main>
                            </li>

                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
