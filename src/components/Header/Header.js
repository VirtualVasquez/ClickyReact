import React, { Component } from "react"
import './Header.css'

const Header = props => (
    <header>
    <p>Clicky Game</p>
    <p >{props.message}</p>
    <p>Score: {props.curScore} | Top Score: {props.topScore}</p>
    </header>
)

export default Header