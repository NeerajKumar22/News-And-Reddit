/**
 * Article.js: Renders article component
 * Author: Neeraj
 */

// imports Module

import React from "react";
// import { Link } from 'react-router-dom';

// declare class for News component

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newsArticle: [],
            activeTab: 0,
            items: [],
            isLoaded: false,

        };
    }
    componentDidMount() {

        // fetch the data by news api

        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1266633d38234df8962f1a4595f3fcf9')
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                this.setState({
                    isLoaded: true,
                    newsArticle: myJson.articles,
                })
            })

    }
    
    render() {

        // return jsx
        
        var { isLoaded, newsArticle } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        }
        else {
            return (
                <div>
                    {newsArticle ? newsArticle.map((item, index) => {
                        return (
                            <div>
                                <h2>
                                    {item.title}
                                </h2>

                                <h5>
                                    {item.author}
                                </h5>

                                <h6>
                                    {item.source.name}
                                </h6>

                                <div>
                                    <img src={item.urlToImage} alt={"img"} style={{ width: 100 }} />
                                </div>

                                <b>{item.description}</b>
                                <a target="_blank" rel="noopener noreferrer" href={item.url}>View...</a>

                                <hr />
                            </div>
                        );
                    }) : ""
                    }
                </div>
            )
        }

    }
}

// export component

export default News;