const display = document.getElementById("input")
function clearInput() {
	display.value =" ";
}
function deleteInput(){
	display.value = display.value.slice(0,-1);
};
function appendValue(value){
	display.value += value;
}

function calculate (){
	try {
		display.value = Math.round( eval(display.value))/10
	} catch (error) {
		display.value = 'Error'
	}
}