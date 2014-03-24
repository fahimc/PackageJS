
package("app.com.Test",{
	extends:["app.com.Base"]
},function(){

	function Test(){
		this.index=0;
		var sub = new app.Sub();
	};

	Test.prototype=
	{
		init:function(){

		}
	};

	return Test;
});
