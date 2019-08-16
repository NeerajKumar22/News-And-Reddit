// /r/mathematics component for the mathematics content

// Author: Neeraj


// import module

import React from "react";

class Mathematics extends React.Component{
    constructor(){
        super();
        this.state = {
            mathematicsData : [],
            isLoaded : false,
        }
    }

    componentDidMount() {
        // fetch the data from subreddit mathematics api of reddit

        fetch("https://www.reddit.com/r/mathematics.json")
        .then((res => res.json()))
        .then((data) => {
            this.setState({
                isLoaded : true,
                mathematicsData : data,
            })
        })
    }
    

    render(){
        // return jsx

        var {isLoaded, mathematicsData} = this.state;

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
                    {mathematicsData ? mathematicsData.data.children.map((item, index) => {
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

export default Mathematics;