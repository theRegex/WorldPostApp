import sha256 from 'sha256';

const functions = {};


functions.UniqueId = function(callback){
	if(typeof callback != 'function') return;
	this.timer = null;
	let currentTime = Date.now();
	let elaspedTime = null;
	let id = null;

	this.timer = setTimeout(()=>{
		elaspedTime = Date.now();
		id = sha256(currentTime + elaspedTime);
		clearTimeout(this.timer);
	},500);
	return Promise.resolve(id);
}