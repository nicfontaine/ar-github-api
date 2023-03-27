## About
Utilize the Github REST API to list repositories of any user or organization; sort and filter via the supported options.

## Architecture
Typescript, React, Material UI. MUI to provide basic layout, styling, and support future theming.   

A toggle is used for switching between Org/User entry, to maintain 1 search input. The filter/sort controls require selection of an "update" button to send a new request, as the user may want to update multiple options before submitting.   

I couldn't find a way to find the total number of repositories, but the `list` response header could be used for basic pagination navigation.

## Run
- `npm i`
- `npm run start`

## Deploy

#### Github Pages
- `npm run deploy` to build and deploy to `gh-pages` branch
- Access at [https://nicfontaine.github.io/ar-github-api](https://nicfontaine.github.io/ar-github-api)

#### Hosting Service
Static files in the `build` directory can be hosted with DNS configuration, without need of a backend server setup.


## Future Enhancements
- Display more repo information like description, language, topics, etc. and support filtering on that data
- Add button and label icons
- Add octokit throttling plugin for rate limiting
- Handle REST errors gracefully, with UI for user
- Add custom theming, and dark/light mode
- Add testing for UI controls, pagination, API, errors