import React, { useState } from "react";
import "./App.css";
import NameForm from "./components/NameForm";
import { PaginLinks, RepoAPIOptions, RepoType } from "./types";
import RepoOptionControls from "./components/RepoOptionControls";
import Pagination from "./components/Pagination";
import parse_link_header from "./util/parse-link-header";
import { Octokit } from "octokit";
const octokit = new Octokit({});
import Box from "@mui/material/Box";
import PuffLoader from "react-spinners/PuffLoader";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import RepoList from "./components/RepoList";

function App () {

	const [repoOwner, setRepoOwner] = useState("");
	const [repoData, setRepoData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [repoType, setRepoType] = useState<RepoType>(RepoType.USERS);
	const [paginLinks, setPaginLinks] = useState<PaginLinks>({});
	const [options, setOptions] = useState<RepoAPIOptions>({
		type: "all",
		sort: "created",
		direction: "asc",
		per_page: 5,
		page: 1,
	});

	const getRepos = async function (url?: string) {
		const params = `type=${options.type}&sort=${options.sort}&direction=${options.direction}&per_page=${options.per_page}&page=${options.page}`;
		const target = url || `/${repoType}/${repoOwner}/repos?${params}`;
		setLoading(true);
		try {
			const res = await octokit.request(`GET ${target}`);
			if (res.status >= 400) {
				console.log(`ERROR: ${res.status}`);
				return;
			}
			setRepoData(res.data);
			if (res.headers.link) {
				const linksParsed: PaginLinks = parse_link_header(res.headers.link);
				setPaginLinks({
					first: linksParsed.first,
					prev: linksParsed.prev,
					next: linksParsed.next,
					last: linksParsed.last,
				});
			}
		} catch (err) {
			console.log(`ERROR: ${err}`);
		}
		setLoading(false);
	};

	return (
		<>
			
			<CssBaseline />

			<NameForm
				repoOwner={repoOwner}
				setRepoOwner={setRepoOwner}
				getRepos={getRepos}
				repoType={repoType}
				setRepoType={setRepoType}
			/>

			<Grid container spacing={3}>

				<Grid item xs={3}>
					<RepoOptionControls
						options={options}
						setOptions={setOptions}
						getRepos={getRepos}
						repoOwner={repoOwner}
					/>
				</Grid>

				<Grid item xs={7}>
					<Box sx={{ p: "1rem", maxWidth: "600px", ml: "auto", mr: "auto", textAlign: "center" }}>
						{repoData?.length ? (
							<>
								<Pagination
									getRepos={getRepos}
									paginLinks={paginLinks}
								/>
								<RepoList
									repoData={repoData}
								/>
							</>
						) : "Enter a Github Username or Organization above"}
					</Box>
				</Grid>

			</Grid>

			{loading ? (
				<PuffLoader color="rgb(25,118,210)" size={70}
					style={{ position: "fixed", right: "6rem", bottom: "6rem" }}
				/>
			) : undefined}

		</>
	);
}

export default App;
