// /r/DataStructure component for the datastructure content

// Author : neeraj

// import module

import React from "react";

class DataStructure extends React.Component{
    constructor(){
        super();
        this.state = {
            dsData : [],
            isLoaded : false,
        }
    }

    componentDidMount() {
        // fetch the data from subreddit datastructure api of reddit

        fetch("https://www.reddit.com/r/datastructure.json")
        .then((res => res.json()))
        .then((data) => {
            this.setState({
                isLoaded : true,
                dsData : data,
            })
        })
    }

    render(){
        // return jsx

        var {isLoaded, dsData} = this.state;

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
                    {dsData ? dsData.data.children.map((item, index) => {
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

export default DataStructure;