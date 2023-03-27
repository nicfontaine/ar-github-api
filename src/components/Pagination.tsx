import { PaginLinks } from "../types";
import { Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";

interface IProps {
	paginLinks: PaginLinks,
	getRepos: (value?: string) => void,
}

const Pagination = function ({ paginLinks, getRepos }: IProps) {

	return (
		<>
			{Object.keys(paginLinks) ? (
				<>
					<Box sx={{ mb: "1rem" }}>
						<Stack direction="row" spacing={1} justifyContent="center">
							{Object.keys(paginLinks).map((p) => {
								const link = paginLinks[p as keyof PaginLinks] || "";
								return (
									<Button
										key={p}
										variant="outlined"
										disabled={link.length <= 0}
										size="small"
										onClick={() => {
											getRepos(link);
										}}
									>{p}</Button>
								);
							})}
						</Stack>
					</Box>
				</>
			) : undefined}
		</>
	);

};

export default Pagination;