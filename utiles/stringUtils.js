function slugify(value) {
	return value
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
}

function parsePrice(value) {
	return Number(value.replace(/[^\d.-]/g, ''));
}

export { slugify, parsePrice };
