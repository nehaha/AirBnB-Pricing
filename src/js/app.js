requirejs.config({
	"baseUrl": "js",
	"paths": {
		"app": "../app",
		"jquery": "//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min"
	}	
});

requirejs(("app/main"));