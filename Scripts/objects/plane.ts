module objects {
	// Plane Class
	export class Plane extends objects.GameObject {
		// CONSTRUCTOR ++++++++++++++++++++++++++++
		constructor() {
			super("plane");
			
			this.y = 430;
			
		}
		
		/** 
		 * Update Method for Plane Class
		*/
		public update():void {
			this.x = stage.mouseX;
		}
	}
}