module.exports = RED => {
	function GetCommandNode(config) {
		RED.nodes.createNode(this, config);
		
		this.on("input", (msg, send, done) => {
			msg._cmd = "get";
			send(msg);
			
			if (done) done();
		});
	}
	
	RED.nodes.registerType("cmd-get", GetCommandNode);
};
