import Head from 'next/head';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-test-id="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">
              If you have any inquiries or would like to discuss any of my
              projects. Please don't hesitate to contact me.
            </p>
            <ul className="contact-links">
              <li className="contact-item">
                Email: sharmainerpayong@gmail.com
              </li>
              <li className="contact-item">Phone: +43 123 456 7890</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
