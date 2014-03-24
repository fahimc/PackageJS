PackageJS
=========

Dependency loader and Class inheritance library 



##Eaxmple of a Class   

```
package("app.Sub",{
	extends:["app.com.Test","app.com.Base"]
},function(){

	function Sub(){
		this.index=2;
	};

	Sub.prototype=
	{
		SubMethod:function(){

		}
	};

	return Sub;
})
```

