import React from "react"
import './ClickItem.css'

const ClickItem = props => (
	<div className="clickItem">
		<div className="img-container">
		<img className={props.curScore === 0 ? "style_prevu_kit_ex" : undefined} onClick={() => props.selectCharacter(props.reploid)} alt={props.reploid} src={props.image} />
		</div>
	</div>
)

export default ClickItem