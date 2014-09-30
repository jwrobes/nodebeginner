function route(handle, pathname, response, request){
	console.log('About to route a request for ' + pathname)
	if (typeof handle[pathname] === 'function') {
		return handle[pathname](response, request);
	} else {
		// console.log("Sorry bud, nothing to do for you 
		// 	when you ask for " + pathname);
		console.log("Not found mofo" + pathname)
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("404 not found mofo");
		response.end();
	}
}

exports.route = route;