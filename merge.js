module.exports = RED => {
	function MergeNode(config) {
		RED.nodes.createNode(this, config);
		
		this.on("input", msg => {
			let value = this.context().get("value");
			if (typeof value === "undefined") value = {};
			
			value = { ...value, ...msg.payload };
			this.context().set("value", value);
			
			msg.payload = value;
			this.send(msg);
		});
	}
	
	RED.nodes.registerType("merge", MergeNode);
};
