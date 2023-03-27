import React from "react";
import { RepoType } from "../types";
import { TextField, Button, Stack, ToggleButtonGroup, ToggleButton } from "@mui/material";
import Box from "@mui/material/Box";

interface IProps {
	repoOwner: string,
	setRepoOwner: (value: string) => void,
	getRepos: (value?: string) => void,
	repoType: RepoType,
	setRepoType: (value: RepoType) => void,
}

const NameForm = function ({ repoOwner, setRepoOwner, getRepos, repoType, setRepoType }: IProps) {

	const handleSubmit = function (e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		getRepos();
	};

	return (
		<>
			<Box sx={{ p: "1rem", pt: "2rem", boxShadow: 2, mb: "1rem" }}>
				<Stack
					direction="row"
					alignItems="center"
					spacing={3}
					justifyContent="center"
				>
					<ToggleButtonGroup value={repoType} color="info" size="small">
						<ToggleButton
							onClick={() => setRepoType(RepoType.USERS)}
							value="users"
						>User</ToggleButton>
						<ToggleButton
							onClick={() => setRepoType(RepoType.ORGS)}
							value="orgs"
						>Organization</ToggleButton>
					</ToggleButtonGroup>

					<form onSubmit={handleSubmit}>
						<Stack direction="row" alignItems="center" spacing={3}>
							<TextField
								value={repoOwner}
								onChange={(e) => setRepoOwner(e.target.value)}
								aria-label="Repository Organization or Username"
								size="small"
							/>
							<Button
								type="submit"
								size="large"
								variant="contained"
								aria-label="Submit repository search"
							>Search</Button>
						</Stack>
					</form>
				</Stack>
			</Box>
		</>
	);

};

export default NameForm;