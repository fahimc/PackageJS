var package =function(classNamespace,classOptions,classFunc){
//check extended classes
_package.addAfter(classNamespace,classOptions.extends?classOptions.extends:[],classFunc);
};

var _package={
	classes:[],
	addAfter:function(classNamespace,extendCollection,classFunc){
		var hasNewClass=false;
		var classA;
		//loop through base classes and see if they exist
		for(var b=0;b<extendCollection.length;b++){
			var classB =extendCollection[b];

			var hasExtendClass=false;
			

			//loop through classes
			for(var a=0;a<this.classes.length;a++){
				classA = this.classes[a];
				
				if(classB==classA.name)
				{
					hasExtendClass=true;
					
				}
				//check if new class exists and add it
				
			}
			
			if(!hasExtendClass)this.classes.push({name:classB});


		}
		for(var a=0;a<this.classes.length;a++){
			classA = this.classes[a];
			if(classA.name==classNamespace && !classA._class)
			{
				classA._class = classFunc;
				classA._extends = extendCollection;
				hasNewClass=true;
			}
		}

		if(!hasNewClass)this.classes.push({name:classNamespace,_class:classFunc,_extends : extendCollection});

	},
	clone : function(obj, deep) {

		// if (!_Class.isObject(obj))
			// throw 'Can only clone objects and/or arrays';

			var result = obj instanceof Array ? [] : {};
			for (var key in obj) {
				if ( typeof obj[key] === 'object' && deep === true) {
					result[key] = _Class.clone(obj[key], deep);
				} else {
					result[key] = obj[key];
				}
			}

			return result;

		},
		extend : function(obj, base,p) {

			var pro = this.clone(obj.prototype,true);


			obj.prototype = Object.create(new base());

			obj.prototype.constructor = obj;

			obj.prototype._baseClass = base;

			Object.defineProperty(obj.prototype, 'constructor', {
				enumerable : false,
				value : obj
			});


			if(pro)this.proto(obj,pro);
			if(p)this.proto(obj,p);


		},
		proto : function(_class, obj) {
		for (var name in obj) {
			_class.prototype[name] = obj[name];
		}
	},
		init:function(){
			window.addEventListener('DOMContentLoaded',this.onReady.bind(this));
		},
		recompose:function(obj,string,func){
			var parts = string.split('.');
			var newObj = obj[parts[0]];

			if(parts[1]){
				if(!newObj)newObj= obj[parts[0]]={};
				parts.splice(0,1);
				var newString = parts.join('.');
				return this.recompose(newObj,newString,func);
			}
			if(!newObj)newObj= obj[parts[0]]= func();
			return newObj;
		},
		reduce:function(obj,i) {return obj[i]},
		onReady:function(event){
		//create namespaces
		for(var a=0;a<this.classes.length;a++){
			var classA = this.classes[a];
				//create name space
				var newClass = this.recompose(window,classA.name,classA._class);

				
			}
			
			for(var a=0;a<this.classes.length;a++){
			//extend base classes
			for(var b=0;b<this.classes[a]._extends.length;b++){
				var base =this.classes[a]._extends[b].split('.').reduce(this.reduce,window);
				this.extend(newClass,base);
			}
		}
	}
}
;
_package.init();