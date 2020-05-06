module.exports = RED => {
	function IdentityNode(config) {
		RED.nodes.createNode(this, config);
		
		this.on("input", msg => {
			this.send(msg);
		});
	}
	
	RED.nodes.registerType("identity", IdentityNode);
};
