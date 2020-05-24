module.exports = RED => {
	function VariableNode(config) {
		RED.nodes.createNode(this, config);
		this.emitOnChange = config.emitOnChange === "true";
		
		this.on("input", (msg, send, done) => {
			if (msg._cmd == "get") {
				msg.payload = this.context().get("value");
				send(msg);
			} else {
				let valueBefore = this.context().get("value");
				this.context().set("value", msg.payload);
				
				if (this.emitOnChange && (typeof valueBefore === "undefined" || JSON.stringify(msg.payload) != JSON.stringify(valueBefore)))
					send(msg);
				else
					send(null);
			}
			
			if (done) done();
		});
	}
	
	RED.nodes.registerType("variable", VariableNode);
};
