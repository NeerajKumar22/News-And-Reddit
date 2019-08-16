// /r/javascript component for the javascript content

// Author: Neeraj


// import module

import React from "react";

class JavaScript extends React.Component{
    constructor(){
        super();
        this.state = {
            javascriptData : [],
            isLoaded : false,
        }
    }

    componentDidMount(){

        //fetch the data from subreddit javascript api of reddit

        fetch("https://www.reddit.com/r/javascript.json")
        .then(res => res.json())
        .then((data) => {
            this.setState({
                isLoaded : true,
                javascriptData : data,
            })
        })
    }

    render(){
        // return jsx

        var {isLoaded, javascriptData} = this.state;

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
                    {javascriptData ? javascriptData.data.children.map((item, index) => {
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

export default JavaScript;