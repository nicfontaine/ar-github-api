/*
 * parse_link_header()
 *
 * Parse the Github Link HTTP header used for pageination
 * http://developer.github.com/v3/#pagination
 */
function parse_link_header (header) {
	if (header.length === 0) {
		throw new Error("input must not be of zero length");
	}

	// Split parts by comma
	var parts = header.split(",");
	var links = {};
	// Parse each part into a named link
	for(var i = 0; i < parts.length; i++) {
		var section = parts[i].split(";");
		if (section.length !== 2) {
			throw new Error("section could not be split on ';'");
		}
		var url = section[0].replace(/<(.*)>/, "$1").trim();
		var name = section[1].replace(/rel="(.*)"/, "$1").trim();
		links[name] = url;
	}
	return links;
}

export default parse_link_header;