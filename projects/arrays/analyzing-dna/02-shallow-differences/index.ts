// Write your shallowDifferences function here! ✨
// You'll need to export it so the tests can run it.

export function shallowDifferences(
	a: string[],
	b: string[]
): (string | undefined)[] | undefined {
	if (a.length !== b.length) {
		return undefined;
	}

	let c: (string | undefined)[] = [];

	for (let i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) {
			c.push(undefined);
		} else {
			c.push(a[i]);
		}
	}

	return c;
}
