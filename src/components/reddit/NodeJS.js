// /r/nodejs component for the nodejs content

// Author: Neeraj


// import module

import React from "react";

class NodeJS extends React.Component{
    constructor(){
        super();
        this.state = {
            nodejsData : [],
            isLoaded : false,
        }
    }

    componentDidMount() {
        //fetch the data from subreddit nodejs api of reddit
        fetch("https://www.reddit.com/r/nodejs.json")
        .then(res => res.json())
        .then((data) => {
            this.setState({
                isLoaded : true,
                nodejsData : data,
            })
        })
    }
    
    render(){
        // return jsx

        var {isLoaded, nodejsData} = this.state;

        if(!isLoaded){
            return(
                <div>
                    Loading...
                </div>
            )
        }
        else{
            return(
                <div>
                    {nodejsData ? nodejsData.data.children.map((item, index) => {
                        return(
                            <div>
                                <h2>
                                    {item.data.title}
                                </h2>
                                <h4>
                                    {item.data.author}
                                </h4>
                                <h4>
                                    {item.data.subreddit_name_prefixed}
                                </h4>
                                <p>
                                    {item.data.selftext}
                                </p>

                                <div>
                                    <p>
                                        {item.data.ups} ups
                                    </p>
                                </div>
                                
                                <a href={item.data.url}>View...</a>

                                <hr />
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

export default NodeJS;