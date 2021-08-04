import React, { Component } from "react";
import { Paper } from "@material-ui/core";

class UserCard extends Component {
	render() {
		const { Data } = this.props;
		console.log(this.props);
		return (
			<div className="card" key={Date.now()}>
				<div className="firstPart">
					<h1>{Data["name"]}</h1>
					<div className="firstPartBody">
						{" "}
						<label>{`Followers:`}</label>
						<h3>{Data["followers"]}</h3>
						<label>Following:</label>
						<h3>{Data["following"]}</h3>{" "}
					</div>
				</div>
				<div className="secondPart">
					<img src={Data["avatar_url"]} />
				</div>
				<div className="thirdPart">
					<h3>{Data["bio"]}</h3>
					<h3>{Data["public_repos"]}</h3>
					<a href={Data["url"]}>Link</a>
				</div>
			</div>
		);
	}
}

export default UserCard;
