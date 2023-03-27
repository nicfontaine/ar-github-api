import { Card, Stack } from "@mui/material";
import Box from "@mui/material/Box";

interface IProps {
	repoData: any
}

const RepoList = function ({ repoData }: IProps) {

	return (
		<Stack spacing={1}>
			{repoData.map((repo: any) => {
				return (
					<Card
						key={repo.id}
						sx={{ p: "0.6rem 0.9rem", bgcolor: "#efefef" }}
						variant="outlined"
						data-testid={repo.id}
					>
						<Box display="flex" flexDirection="row">
							<Box sx={{ fontWeight: 500 }} data-testid={repo.full_name}>{repo.full_name}</Box>
							{/* <Box sx={{ ml: "1rem" }}>{repo.description}</Box> */}
							<Box sx={{ ml: "auto" }}>
								<a
									href={repo.html_url}
									target="_blank"
									rel="noreferrer"
									aria-label={`Github repository: ${repo.full_name}`}
								>Link</a>
							</Box>
						</Box>
					</Card>
				);
			})}
		</Stack>
	);

};

export default RepoList;