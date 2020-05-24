module.exports = RED => {
	function NextCommandNode(config) {
		RED.nodes.createNode(this, config);
		
		this.on("input", (msg, send, done) => {
			msg._cmd = "next";
			send(msg);
			
			if (done) done();
		});
	}
	
	RED.nodes.registerType("cmd-next", NextCommandNode);
};
