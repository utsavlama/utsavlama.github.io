import React from 'react';
import {Link} from 'react-router-dom';

export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <div className="portfolio-clients-content">
                    <div>
                        <div>
                            <h1>Portfolio</h1>
                            <p>Here is some of my work.</p>
                            <p>Get my contact details <Link to="/contact">
                                here
                            </Link></p>
                        </div>
                    </div>
                    <div className="portfolio-client-card">
                        <i class="fas fa-caret-up fa-3x"></i>
                        <div>
                            <div>
                                image here
                            </div>
                            <div>
                                <p>
                                    image description here
                                </p>
                            </div>
                        </div>
                        <i class="fas fa-caret-down fa-3x"></i>
                    </div>
                </div>
            </section>
        );
    }

}