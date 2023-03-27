import { render, screen, cleanup } from "@testing-library/react";
import RepoList from "../RepoList";

afterEach(() => {
	cleanup();
});

test("Should create single github repo item", () => {
	const repoData = [{ id: 1, full_name: "Test repo", html_url: "https://example.com" }];
	render(<RepoList repoData={repoData} />);
	const repoItem = screen.getByTestId("1");
	expect(repoItem).toBeInTheDocument();
	const repoItemName = screen.getByTestId("Test repo");
	expect(repoItemName).toHaveTextContent("Test repo");
});