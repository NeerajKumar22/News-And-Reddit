// /r/reddit component for reddit news

// Author : Neeraj 

// import modules

import React from "react";
import { Link, Route } from 'react-router-dom';
import Programming from "./Programming";
import DataStructure from "./DataStructure";
import ReactJS from './ReactJS';
import CS from './CS';
import JavaScript from "./JavaScript";
import NodeJS from "./NodeJS";
import Python from "./Python";
import Django from "./Django";
import EthicalHacking from "./EthicalHacking";
import Mathematics from "./Mathematics";


class Reddit extends React.Component{
    constructor(){
        super();
        this.state = {
            redditArticle: [],
            isLoaded: false,
        }
    }

    componentDidMount(){
        //fetch the data form subreddit india api of reddit

        fetch("https://www.reddit.com/r/india.json")
        .then(res => res.json())
        .then((data) => {
            this.setState({
                isLoaded: true,
                redditArticle: data,
            })
        });
    }


    render(){
        // return jsx

        var{isLoaded, redditArticle} = this.state;

        if(!isLoaded){
            return (
                <div>
                    Loading...
                </div>
            )
        }
        else{
            return(
                <div>
                    
                    {/* reddit button */}
                
            {/* Programing Button */}
                    <button>
                        <Link to="/reddit/programming">/r/Programming</Link>
                    </button>
                    <Route exact path="/reddit/programming" component={Programming} />

            {/* Data Structure Button */}
                    <button>
                        <Link to="/reddit/datastructure">/r/DataStructure</Link>
                    </button>
                    <Route exact path="/reddit/datastructure" component={DataStructure} />

            {/* CS Button */}
                    <button>
                        <Link to="/reddit/cs">/r/CS</Link>
                    </button>
                    <Route exact path="/reddit/cs" component={CS} />

            {/* reactjs Button */}
                    <button>
                        <Link to="/reddit/reactjs">/r/reactjs</Link>
                    </button>
                    <Route exact path="/reddit/reactjs" component={ReactJS} />

            {/* javascript Button */}
                    <button>
                        <Link to="/reddit/javascript">/r/javascript</Link>
                    </button>
                    <Route exact path="/reddit/javascript" component={JavaScript} />

            {/* nodejs Button */}
                    <button>
                        <Link to="/reddit/nodejs">/r/nodejs</Link>
                    </button>
                    <Route exact path="/reddit/nodejs" component={NodeJS} />

            {/* python Button */}
                    <button>
                        <Link to="/reddit/python">/r/python</Link>
                    </button>
                    <Route exact path="/reddit/python" component={Python} />

            {/* django Button */}
                    <button>
                        <Link to="/reddit/django">/r/django</Link>
                    </button>
                    <Route exact path="/reddit/django" component={Django} />

            {/* EthicalHacking Button */}
                    <button>
                        <Link to="/reddit/ethicalhacking">/r/ethicalhacking</Link>
                    </button>
                    <Route exact path="/reddit/ethicalhacking" component={EthicalHacking} />
            
            {/* mathematics button */}
                    <button>
                        <Link to="/reddit/mathematics">/r/mathematics</Link>
                    </button>
                    <Route exact path="/reddit/mathematics" component={Mathematics} />


                    {redditArticle ? redditArticle.data.children.map((item, index) => {
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

                                <a href={item.data.url}>View...</a>

                                <div>
                                    <p>
                                        {item.data.ups} ups
                                    </p>
                                </div>

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

// export Component

export default Reddit