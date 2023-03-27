import { RepoAPIOptions } from "../types";
import { Select, SelectChangeEvent, Stack, TextField, Button, OutlinedInput } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";

interface IProps {
	options: RepoAPIOptions,
	setOptions: (value: RepoAPIOptions) => void,
	getRepos: (value?: string) => void,
	repoOwner: string,
}

const RepoOptionControls = function ({
	options,
	setOptions,
	getRepos,
	repoOwner,
}: IProps) {

	return (
		<>
			<Box sx={{ pl: "2rem", pr: "2rem" }}>
				<Stack spacing={1} direction="column" alignItems="left" justifyContent="space-between">
					<h4>API Options</h4>
					<FormControl>
						<InputLabel id="form-option-type" shrink>Type</InputLabel>
						<Select
							labelId="form-option-type"
							value={options.type}
							defaultValue="all"
							size="small"
							input={<OutlinedInput notched label="Type" />}
							style={{ marginBottom: "1rem" }}
							onChange={(e: SelectChangeEvent<string>) => {
								setOptions({ ...options, type: e.target.value });
							}}
						>
							<MenuItem value="all">All</MenuItem>
							<MenuItem value="public">Public</MenuItem>
							<MenuItem value="private">Private</MenuItem>
							<MenuItem value="forks">Forks</MenuItem>
							<MenuItem value="sources">Sources</MenuItem>
							<MenuItem value="member">Member</MenuItem>
						</Select>
					</FormControl>

					<FormControl>
						<InputLabel id="form-option-sort">Sort</InputLabel>
						<Select
							labelId="form-option-sort"
							value={options.sort}
							defaultValue="full_name"
							size="small"
							input={<OutlinedInput notched label="Sort" />}
							style={{ marginBottom: "1rem" }}
							onChange={(e: SelectChangeEvent<string>) => {
								setOptions({ ...options, sort: e.target.value });
							}}
						>
							<MenuItem value="created">Created</MenuItem>
							<MenuItem value="updated">Updated</MenuItem>
							<MenuItem value="pushed">Pushed</MenuItem>
							<MenuItem value="full_name">Name</MenuItem>
						</Select>
					</FormControl>

					<FormControl>
						<InputLabel id="form-option-direction">Direction</InputLabel>
						<Select
							labelId="form-option-direction"
							defaultValue="asc"
							value={options.direction}
							size="small"
							input={<OutlinedInput notched label="Direction" />}
							style={{ marginBottom: "1rem" }}
							onChange={(e: SelectChangeEvent<string>) => {
								setOptions({ ...options, direction: e.target.value });
							}}
						>
							<MenuItem value="asc">Ascending</MenuItem>
							<MenuItem value="desc">Descending</MenuItem>
						</Select>
					</FormControl>

					<TextField
						type="number"
						label="Per Page"
						value={options.per_page}
						size="small"
						style={{ marginBottom: "1rem" }}
						InputProps={{
							inputProps: {
								min: 1, max: 100,
							},
						}}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setOptions({ ...options, per_page: Number(e.target.value) });
						}}
					/>

					<TextField
						type="number"
						label="Page"
						value={options.page}
						size="small"
						style={{ marginBottom: "1rem" }}
						InputProps={{
							inputProps: {
								min: 1,
							},
						}}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setOptions({ ...options, page: Number(e.target.value) });
						}}
					/>

					{repoOwner.length > 0 ? (
						<Button
							size="medium"
							variant="contained"
							onClick={() => getRepos()}
						>Update</Button>
					) : undefined}

				</Stack>
			</Box>
		</>
	);

};

export default RepoOptionControls;