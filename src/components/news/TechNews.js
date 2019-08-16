// Tech.js : Renders Tech component
// Author : Neeraj 

// importing modules...

import React from "react";

// declare class for tech news

class TechNews extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            techNews: [],
            techItem: [],
            isLoaded: false,

        }
    }

    componentDidMount(){
        fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=1266633d38234df8962f1a4595f3fcf9")
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            this.setState({
                isLoaded: true,
                techNews: myJson.articles,
            })
        })
    }

    render(){

        // return jsx

        var {isLoaded, techNews} = this.state;
        
        if(!isLoaded){
            return <div>Loading...</div>
        }
        else{
            return(
                <div>
                    {techNews ? techNews.map((techItem, index) => {
                        return(
                            <div>
                                <h2>
                                    {techItem.title}
                                </h2>

                                <h5>
                                    {techItem.author}
                                </h5>

                                <h5>
                                    {techItem.source.name}
                                </h5>

                                <div>
                                    <img src={techItem.urlToImage} alt={"img"} style={{width: 100}} />
                                </div>

                                <b>
                                    {techItem.description}
                                </b>

                                <a target="blank" rel="noopener noreferrer" href={techItem.url}>View...</a>
                            </div>
                        )
                    }) : ""
                }
                </div>
            )
        }
      
    }
}

// export component

export default TechNews;