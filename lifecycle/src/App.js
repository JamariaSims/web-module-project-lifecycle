import axios from "axios";
import "./App.css";
import React, { Component } from "react";
import dummyData from "./components/dummyData";
import UserCard from "./components/UserCard";
import { Button } from "@material-ui/core";
class App extends Component {
	constructor() {
		super();
		this.state = {
			userData: [],
			followersData: [],
		};
	}
	componentDidMount() {
		let responce = [];
		axios.get("https://api.github.com/users/jamariasims").then((res) => {
			responce.push(res.data);
			axios
				.get("https://api.github.com/users/JamariaSims/followers")
				.then((res) => {
					responce.push(res.data);
					this.setState({
						...this.state,
						followersData: responce[1],
						userData: responce[0],
					});
				});
		});
	}

	render() {
		const convertedData = Object.values(this.state.userData);
		const onClickFire = (site) => {
			axios.get(site).then((res) => {
				const info = res.data;
				info.map((item) => {
					let userName = item.login;
					let userPic = item.avatar_url;
					this.setState({
						...this.state,
						followers: [userName, userPic],
					});
				});
			});
		};
		console.log(this.state.followersData);
		return (
			<div className="App">
				<div className="Card">
					<img src={convertedData[3]} />
					<h1>{convertedData[18]}</h1>
					<div className="CardBody">
						<h3 id="left">{`Location: ${convertedData[21]}`}</h3>
						<h3 id="left">{`${convertedData[24]}`}</h3>
					</div>
					<div className="CardFooter">
						<h3 id="left">{`Followers: ${convertedData[28]}`}</h3>
						<span />
						<h3 id="right">{`Following: ${convertedData[29]}`}</h3>
					</div>
					<div
						id="button"
						onClick={() => {
							document.querySelectorAll(".friend").classList.toggle("hide");
						}}
					>
						View Friends
					</div>
					<div id="link">
						<a id="web" href={convertedData[20]}>
							My Website
						</a>
					</div>
				</div>
				<div id="friends">
					{this.state.followersData.map((item) => (
						<div id="friend" className="friend">
							<img src={item.avatar_url} />
							<h3>{item.login}</h3>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default App;
