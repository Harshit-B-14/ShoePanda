function Contact(){
    return <div className="contact">
        <h1 className="contact-heading">Contact Us</h1>
        <p>Have questions about your order or products? We're here to help.</p>
        <div className="contact-details">
        <p className="important-p"><strong>Email : </strong>shoepanda.shop@gmail.com</p>
        <p className="important-p"><strong>Phone : </strong>+91 9847382955</p>
        <p className="important-p"><strong>Address : </strong>Delhi, India</p>
        </div>

            <p>We usually reply within 24 hours</p>
        <div className="contact-follow">
            <p className="important-p"><strong>Follow us : </strong></p>
            <p className="important-p" style={{textAlign: "center" ,whiteSpace: "pre"}}>Instagram  |  LinkedIn  |  Twitter</p>
        </div>
        {/* <Footer></Footer> */}
    </div>
}

export default Contact;