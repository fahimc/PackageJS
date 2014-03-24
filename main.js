(function(){

	function init(){
		window.addEventListener('load',onload);
	}
	function onload(){
		var test = new app.com.Test();
		var sub = new app.Sub();
		console.log(test,sub);
	}
	init();

})();