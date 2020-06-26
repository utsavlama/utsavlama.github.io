import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <div className="portfolio-intro">
                    <div>
                        <h1>Utsav Lama</h1>
                        <p>I derive enormous reward from seeing tiny changes occur from a tiny bit of code, and that is what drives me.</p>
                        <p>I value code that is <span>clean</span></p>
                        <p>See the tools that I use <Link to="/skills">here</Link></p>
                    </div>
                </div>
                <div className="moon">
                    <div className="crater crater-1">

                    </div>
                    <div className="crater crater-2">

                    </div>
                    <div className="crater crater-3">

                    </div>
                    <div className="crater crater-4">

                    </div>
                </div>
                <div className="stars">
                    <span className="star star-1"></span>
                    <span className="star star-2"></span>
                    <span className="star star-3"></span>
                    <span className="star star-4"></span>
                    <span className="star star-5"></span>
                    <span className="star star-6"></span>
                    <span className="star star-7"></span>
                    <span className="star star-8"></span>
                    <span className="star star-9"></span>
                    <span className="star star-10"></span>
                    <span className="star star-11"></span>
                    <span className="star star-12"></span>
                    <span className="star star-13"></span>
                    <span className="star star-14"></span>
                    <span className="star star-15"></span>
                    <span className="star star-16"></span>
                    <span className="star star-17"></span>
                    <span className="star star-18"></span>
                </div>
            </section>
        );
    }

}