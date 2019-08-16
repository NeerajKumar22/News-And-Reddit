
// Programming.js : Renders Tech component
// Author : Neeraj 

// importing modules...

import React from "react";


// declare class for programming related news

class ProgrammingNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            programmingNews: [],
            programmingItems: [],
            isLoaded: false,
        }
    }

    componentDidMount(){

        // fetch the data from api

        fetch("https://newsapi.org/v2/everything?q=apple&from=2019-08-05&to=2019-08-05&sortBy=popularity&apiKey=1266633d38234df8962f1a4595f3fcf9")
        .then((response) => {
            return response.json();
        })
        .then((myJson) =>{
            this.setState({
                isLoaded: true,
                programmingNews: myJson.articles,
            })
        })
    }
    
    render() {

        // return jsx

        var {isLoaded, programmingNews} = this.state;

        if(!isLoaded){
            return <div>
                Loading...
            </div>
        }
        else{
            return (
                <div>
                    {programmingNews ? programmingNews.map((item, index) => {
                        return(
                            <div>
                                <h2>
                                    {item.title}
                                </h2>

                                <h5>
                                    {item.author}
                                </h5>

                                <h5>
                                    {item.source.name}
                                </h5>

                                <div>
                                    <img src={item.urlToImage} alt={"img"} style={{width:100}} />
                                </div>

                                <b>
                                    {item.description}
                                </b>

                                <a target="_blank" rel="noopener noreferrer" href={item.url}>View...</a>
                            </div>
                        )
                    }): ""
                }
                </div>
            )
        }

      
    }
}

// export component

export default ProgrammingNews;