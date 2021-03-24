const http = require("http");

const host = "localhost";
const port = 8000;

function Route(name, path, methods, callback) {
	if (!this) {
		return new Route(name, path, methods, callback);
	}

	this.name = name;
	this.path = path;
	this.methods = methods;
	this.callback = callback;
}


const server = http.createServer((request, response) => {
    response.end("test");
});

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});