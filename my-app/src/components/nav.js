import React from "react";

import {
    NavLink
} from "react-router-dom";

export default class Nav extends Component {
    defaultLink = e => {
        this.props.onClick(e.target.innerText);
    }
    render() {
        return (
            <nav className="main-nav">
                <ul>
                    <li><NavLink to='/sunsets' onClick={this.defaultLink}>Sunsets</NavLink></li>
                    <li><NavLink to='/waterfalls' onClick={this.defaultLink}>Waterfalls</NavLink></li>
                    <li><NavLink to='/rainbows' onClick={this.defaultLink}>Rainbows</NavLink></li>
                </ul>
            </nav>


        )
    }
}


