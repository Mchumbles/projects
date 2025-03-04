// Write your class and interface here! ✨
// You'll need to export it so the tests can run it.

export interface PuppyInTheWindow {
	readonly colors: string[];
	readonly furriness: number;
	readonly owner: string | undefined;
}

export class Puppy implements PuppyInTheWindow {
	colors: string[];
	furriness: number;
	owner: string | undefined;

	constructor(colors: string[], furriness: number) {
		this.colors = colors;
		this.furriness = furriness;
		this.owner = undefined;
	}

	adopt(owner: string): void {
		this.owner = owner;
	}
}
