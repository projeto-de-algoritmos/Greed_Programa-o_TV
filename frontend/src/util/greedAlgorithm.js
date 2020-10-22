function greed(program){
	let sortedPrograms = program.sort(comparison)
	let result = []
	let baseDate = new Date();
	sortedPrograms.forEach((item, index) => {
		let startDate = new Date(baseDate);
		baseDate.setMinutes(baseDate.getMinutes() + parseInt(item.duration))
		let endDate = new Date(baseDate);
		result[index] = {start: startDate, end: endDate, id: item.id};
	})
	console.log(result)
	console.log(sortedPrograms)
	return(result)
}

function comparison(a, b){
	let deadlineA = new Date(a.date.split('-')[0], a.date.split('-')[1], a.date.split('-')[2], a.time.split(':')[0], a.time.split(':')[1]);
	let deadlineB = new Date(b.date.split('-')[0], b.date.split('-')[1], b.date.split('-')[2], b.time.split(':')[0], b.time.split(':')[1]);
	if(deadlineA.getTime() > deadlineB.getTime())
		return 1;
	else if (deadlineA.getTime() < deadlineB.getTime())
		return -1;
	return 0
}

export default greed;
