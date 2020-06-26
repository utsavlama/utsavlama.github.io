import React from 'react';
import { Link } from 'react-router-dom';
import ButtonCategory from './components/ButtonCategory';

export default class Skills extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            frontend: [
                {
                    name: "JavaScript",
                    logo: require("./../images/skills/javascript-logo.png"),
                    description: "JavaScript is a browser scripting language used to handle data and events in the browser."
                },
                {
                    name: "HTML5",
                    logo: require("./../images/skills/html5-logo.png"),
                    description: "HTML5 is a markup language that structures web pages in the web"
                },
                {
                    name: "CSS3",
                    logo: require("./../images/skills/css3-logo.png"),
                    description: "CSS3 is a style sheet language provides instruction regarding the presentation of web contents the to the browser"
                },
                {
                    name: "React.JS",
                    logo: require("./../images/skills/react-logo.png"),
                    description: "React is an open-source JavaScript library to build user interfaces in the web"
                },
                {
                    name: "JQuery",
                    logo: require("./../images/skills/jquery-logo.png"),
                    description: "JQuery is a JavaScript library to maniupate and traverse DOM tree, and build dynamic web components"
                }
            ],
            backend: [
                {
                    name: "C#",
                    logo: require("./../images/skills/csharp-logo.png"),
                    description: "C# is a general-purpose, multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines."
                },
                {
                    name: "Java",
                    logo: require("./../images/skills/java-logo.png"),
                    description: "Java is a general-purpose programming language that is class-based and object-oriented, and designed to have as few implementation dependencies as possible."
                },
                {
                    name: "PHP",
                    logo: require("./../images/skills/php-logo.png"),
                    description: "PHP is a popular general-purpose scripting language that is especially suited to web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994; the PHP reference implementation is now produced by The PHP Group."
                }
            ],
            databases: [
                {
                    name: "MySQL",
                    logo: require("./../images/skills/mysql-logo.png"),
                    description: "MySQL is an open-source relational database management system."
                },
                {
                    name: "Oracle",
                    logo: require("./../images/skills/oracle-logo.png"),
                    description: "Oracle Database is a multi-model database management system produced and marketed by Oracle Corporation."
                }
            ],
            miscellaneous: [
                {
                    name: "Git",
                    logo: require("./../images/skills/git-logo.png"),
                    description: "Git is a distributed version-control system for tracking changes in source code during software development."
                },
                {
                    name: "Google Compute Engine",
                    logo: require("./../images/skills/googlecloudcompute-logo.png"),
                    description: "Google Compute Engine is the Infrastructure as a Service component of Google Cloud Platform."
                },
                {
                    name: "Amazon Web Services",
                    logo: require("./../images/skills/aws-logo.png"),
                    description: "Amazon Web Services is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis."
                }
            ],
            currentIndex: 0,
            currentCategoryIndex: 0,
            currentCategoryObject: ""
        };

        this.handleCategoryButtonClick = this.handleCategoryButtonClick.bind(this);
        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleClickPrevious = this.handleClickPrevious.bind(this);
    }

    handleCategoryButtonClick(categoryIndex) {
        this.setState({
            currentCategoryIndex: categoryIndex,
            currentIndex: 0
        });

        if (categoryIndex === 0) {
            this.state.currentCategoryObject = this.state.frontend
        }
        else if (categoryIndex === 1) {
            this.state.currentCategoryObject = this.state.backend
        }
        else if (categoryIndex === 2) {
            this.state.currentCategoryObject = this.state.databases
        }
        else {
            this.state.currentCategoryObject = this.state.miscellaneous
        }
    }

    handleClickNext() {

        let nextIndex = this.state.currentIndex + 1;

        if (nextIndex > this.state.currentCategoryObject.length - 1) {
            this.setState({
                currentIndex: 0
            });
        }
        else {
            this.setState({
                currentIndex: nextIndex
            });
        }
    }

    handleClickPrevious() {

        let previousIndex = this.state.currentIndex - 1;

        if (previousIndex < 0) {
            this.setState({
                currentIndex: this.state.currentCategoryObject.length - 1
            });
        }
        else {
            this.setState({
                currentIndex: previousIndex
            });
        }
    }

    componentDidMount() {
        this.setState({
            currentCategoryObject: this.state.frontend
        });
    }

    render() {

        let currentCategoryObject = this.state.currentCategoryObject === "" ? this.state.frontend : this.state.currentCategoryObject;
        return (
            <section>
                <div className="portfolio-skills-content">
                    <div>
                        <ButtonCategory value={0} onButtonClick={this.handleCategoryButtonClick} activeOn={this.state.currentCategoryIndex === 0 ? true : false} name="Front-end" />
                        <ButtonCategory value={1} onButtonClick={this.handleCategoryButtonClick} activeOn={this.state.currentCategoryIndex === 1 ? true : false} name="Back-end" />
                        <ButtonCategory value={2} onButtonClick={this.handleCategoryButtonClick} activeOn={this.state.currentCategoryIndex === 2 ? true : false} name="Databases" />
                        <ButtonCategory value={3} onButtonClick={this.handleCategoryButtonClick} activeOn={this.state.currentCategoryIndex === 3 ? true : false} name="Miscellaneous" />
                    </div>
                    <div>
                        <div>
                            <h1>Tools I use</h1>
                            <p>Below are the tools I use</p>
                            <p>See my work <Link to="/portfolio">here</Link></p>
                        </div>
                    </div>
                    <div className="portfolio-skills-card">
                        <i class="fas fa-caret-up fa-2x" onClick={this.handleClickPrevious}></i>
                        <div>
                            <div className="portfolio-skills-header">
                                <h2>{currentCategoryObject[this.state.currentIndex].name}</h2>
                                <div className="portfolio-skills-logo">
                                    <img src={currentCategoryObject[this.state.currentIndex].logo} alt={currentCategoryObject[this.state.currentIndex].logo} />
                                </div>
                            </div>
                            <div>
                                <p>{currentCategoryObject[this.state.currentIndex].description}
                                </p>
                            </div>
                        </div>
                        <i className="fas fa-caret-down fa-2x" onClick={this.handleClickNext}></i>
                    </div>
                </div>
            </section>
        );
    }

}