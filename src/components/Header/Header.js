import React, { Component } from "react"
import './Header.css'

class Header extends Component {
    render() {
        return(
            <header>
            <p>Clicky Game</p>
            <p>Click an image to begin!</p>
            <p>Score: 0 | Top Score: 0</p>
            </header>
        )
    }
}

export default Header