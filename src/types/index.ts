export interface PaginLinks {
	first?: string,
	next?: string,
	prev?: string,
	last?: string,
}

export interface RepoAPIOptions {
	type: string,
	sort: string,
	direction: string,
	per_page: number,
	page: number,
}

export enum RepoType {
	USERS = "users",
	ORGS = "orgs",
}