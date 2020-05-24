module.exports = RED => {
	function VariableNode(config) {
		RED.nodes.createNode(this, config);
		this.emitOnChange = config.emitOnChange == "true";
		
		this.on("input", msg => {
			if (msg._cmd == "get") {
				msg.payload = this.context().get("value");
				this.send(msg);
			} else {
				let valueBefore = this.context().get("value");
				this.context().set("value", msg.payload);
				
				if (this.emitOnChange && (typeof valueBefore === "undefined" || JSON.stringify(msg.payload) != JSON.stringify(valueBefore)))
					this.send(msg);
			}
		});
	}
	
	RED.nodes.registerType("variable", VariableNode);
};
