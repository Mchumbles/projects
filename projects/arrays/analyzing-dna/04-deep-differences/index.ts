// Write your deepDifferences function here! ✨
// You'll need to export it so the tests can run it.

export function deepDifferences(
	a: string[][],
	b: string[][]
): ((string | undefined)[] | undefined)[] | undefined {
	if (a.length !== b.length) {
		return undefined;
	}

	let c: ((string | undefined)[] | undefined)[] = [];

	for (let i = 0; i < a.length; i++) {
		if (a[i].length !== b[i].length) {
			c.push(undefined);
			continue;
		}

		let d: (string | undefined)[] = [];

		for (let j = 0; j < a[i].length; j++) {
			if (a[i][j] !== b[i][j]) {
				d.push(undefined);
			} else {
				d.push(a[i][j]);
			}
		}
		c.push(d);
	}

	return c;
}
