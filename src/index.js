import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Header from "./components/Header";

ReactDOM.render(
	<React.StrictMode>
		<div className="App">
			<Header />
			<div className="Content">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
					voluptate? Minus soluta laudantium debitis. Totam ipsam, non
					accusantium optio voluptates cumque nulla enim eum sint perferendis
					aperiam odio! Neque, accusamus!
				</p>
			</div>
		</div>
	</React.StrictMode>,
	document.getElementById("root")
);
