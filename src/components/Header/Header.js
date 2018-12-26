import React from "react"
import './Header.css'

const Header = props => (
    <header>
    <h3>Clicky Game</h3>
    <h3 className={props.message.indexOf('incorrectly') !== -1 ? "desc-incorrect" : props.message.indexOf('correctly') !== -1 ? "desc-correct" : "desc-normal"} >{props.message}</h3>
    <h3>Score: {props.curScore} | Top Score: {props.topScore}</h3>
    </header>
)

export default Header