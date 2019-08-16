// Header.js : Renders Header component
// Author : Neeraj 

// importing modules...

import React from "react";
import { Link } from 'react-router-dom';
// import Reddit from "../reddit/Reddit"

// declares class header for  manage different tabs...

class Header extends React.Component{
    render(){

        // return jsx
        
        return(
            <div>
                <div>
                    <h1>
                        Alt Lab
                    </h1>
                </div>

                <div>
                    <button>
                        <Link to="/news">All</Link>
                    </button>

                    <button>
                        <Link to="/news/programming">Programming News</Link>
                    </button>

                    <button>
                        <Link to="/news/tech">Tech News</Link>
                    </button>
                    
                    <button>
                        <Link to="/news/business">Business News</Link>
                    </button>

                    <button>
                        <Link to="/reddit">Reddit</Link>
                    </button>
                   
                </div>
                
            </div>
        )
    }
}

// export component

export default Header;