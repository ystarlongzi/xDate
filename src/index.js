export let proto = {
	now() {
		return new Date();
	},

	parse(date, clone) {
		const type = typeof date;

		if (type == 'string') {
			if (isNaN(Number(date))) {
				date = date.replace(/[\/\-\.]/g, '/');
			}
			else {
				date = date * 1;
			}
		}

		if (type !== 'object' || clone === true) {
			date = new Date(date);
		}

		return isNaN(date.getTime()) ? null : date;
	},
};




