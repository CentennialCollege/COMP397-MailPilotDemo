module objects {
	// Plane Class
	export class Plane extends objects.GameObject {
		// CONSTRUCTOR ++++++++++++++++++++++++++++
		constructor() {
			super("plane");
			
			this.y = 430;
			// play engine sound
			createjs.Sound.play("engine",0,0,0,-1,1,0);
		}
		
		/** 
		 * Update Method for Plane Class
		*/
		public update():void {
			this.x = stage.mouseX;
		}
	}
}