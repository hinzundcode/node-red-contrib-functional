module.exports = RED => {
	function PropNode(config) {
		RED.nodes.createNode(this, config);
		this.propertyName = config.propertyName;
		
		this.on("input", msg => {
			msg.payload = { [this.propertyName]: msg.payload };
			this.send(msg);
		});
	}
	
	RED.nodes.registerType("prop", PropNode);
};
