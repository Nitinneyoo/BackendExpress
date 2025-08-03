import "dotenv/config";

import express from "express";

const app = express();

const port = 4000;

const GithubData = {
	login: "Nitinneyoo",
	id: 77562762,
	node_id: "MDQ6VXNlcjc3NTYyNzYy",
	avatar_url: "https://avatars.githubusercontent.com/u/77562762?v=4",
	gravatar_id: "",
	url: "https://api.github.com/users/Nitinneyoo",
	html_url: "https://github.com/Nitinneyoo",
	followers_url: "https://api.github.com/users/Nitinneyoo/followers",
	following_url:
		"https://api.github.com/users/Nitinneyoo/following{/other_user}",
	gists_url: "https://api.github.com/users/Nitinneyoo/gists{/gist_id}",
	starred_url: "https://api.github.com/users/Nitinneyoo/starred{/owner}{/repo}",
	subscriptions_url: "https://api.github.com/users/Nitinneyoo/subscriptions",
	organizations_url: "https://api.github.com/users/Nitinneyoo/orgs",
	repos_url: "https://api.github.com/users/Nitinneyoo/repos",
	events_url: "https://api.github.com/users/Nitinneyoo/events{/privacy}",
	received_events_url:
		"https://api.github.com/users/Nitinneyoo/received_events",
	type: "User",
	user_view_type: "public",
	site_admin: false,
	name: "Nitin Singh",
	company: null,
	blog: "",
	location: null,
	email: null,
	hireable: null,
	bio: "TypeScript wizard juggling React, TanStack Query, and Router. Crafting dashboards and charts—bugs are my caffeine!",
	twitter_username: null,
	public_repos: 30,
	public_gists: 0,
	followers: 2,
	following: 3,
	created_at: "2021-01-17T05:09:21Z",
	updated_at: "2025-07-30T11:30:38Z",
};

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
	res.send("Welcome to Twitter");
});

app.get("/login", (req, res) => {
	res.send("<h1> Please Login to Continue");
});

app.get('/github', (req,res) => {
  res.json(GithubData)
})

app.listen(process.env.PORT, () => {
	console.log(`Example app listening on port ${port}`);
});
