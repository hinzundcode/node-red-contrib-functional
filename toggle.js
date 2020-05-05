module.exports = RED => {
	function ToggleNode(config) {
		RED.nodes.createNode(this, config);
		
		let setState = state => {
			this.context().set("state", state);
			
			if (state) this.status({ fill: "green", shape: "dot", text: "true" });
			else this.status({ fill: "red", shape: "dot", text: "false" });
		};
		
		setState(config.initialState === "true");
		
		this.on("input", msg => {
			let state = this.context().get("state");
			
			setState(!state);
			
			msg.payload = state;
			this.send(msg);
		});
	}
	
	RED.nodes.registerType("toggle", ToggleNode);
};
