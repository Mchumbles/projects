// Put your announceMachines function here! ✨
// See ./original.js for its older JavaScript code.

function announceMachines(announce, ...machines) {
	let labelledMachines = 0;

	for (let machine of machines) {
		if (machine.label) {
			announce(machine.label);
			labelledMachines++;
		} else {
			announce(`Make: ${machine.make}; Model: ${machine.model}`);
		}
	}

	return labelledMachines;
}

module.exports.announceMachines = announceMachines;
