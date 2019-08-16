// Business.js : Renders Business component
// Author : Neeraj 

// importing modules...

import React from "react";

// declares class BusinessNews for business kind of news...

class BusinessNews extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            businessNews: [],
            businessItem: [],
            isLoaded: false,
        }
    }

    componentDidMount(){
        fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1266633d38234df8962f1a4595f3fcf9")
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            this.setState({
                isLoaded: true,
                businessNews: myJson.articles,
            })
        })
    }

    render(){

        // return jsx
        
        var {isLoaded, businessNews} = this.state;
        if(!isLoaded){
            return <div>Loading...</div>
        }
        else{
            return(
                <div>
                    {businessNews ? businessNews.map((businessItem, index) => {
                        return(
                            <div>
                                <h2>
                                    {businessItem.title}
                                </h2>
                                <h5>
                                    {businessItem.author}
                                </h5>
                                <h5>
                                    {businessItem.source.name}
                                </h5>
                                <div>
                                    <img src={businessItem.urlToImage} alt={"img"} style={{width: 100}} />
                                </div>
                                <b>
                                    {businessItem.description}
                                </b>

                                <a target="_blank" rel="noopener noreferrer" href={businessItem.url}>View...</a>

                                <hr />
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

export default BusinessNews;