import React from 'react';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <div className="portfolio-contact-content">
                    <div>
                        <h1>Reach me at</h1>
                        <p><a href="mailto:uts.lama@gmail.com"><span className="portfolio-link-small">uts.lama@gmail.com</span></a></p>
                        <hr className="portfolio-contact-line"/>
                        <ul className="portfolio-social">
                            <li><a href=""><i className="fa fa-github"></i></a></li>
                            <li><a href=""><i className="fa fa-linkedin"></i></a></li>
                            <li><a href=""><i className="fa fa-medium"></i></a></li>
                        </ul>
                    </div>
                    <div className="portfolio-contact-form">
                        <h2>Contact Form</h2>
                        <form>
                            <input type="text" placeholder="Full Name"/>
                            <input type="text" placeholder="Email"/>
                            <input type="text" placeholder="Re"/>
                            <textarea placeholder="Message"></textarea>
                            <input type="submit" value="Send"/>
                        </form>
                    </div>
                </div>
            </section>
        );
    }

}