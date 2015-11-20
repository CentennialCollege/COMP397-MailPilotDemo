module objects {
	// Plane Class
	export class Plane extends objects.GameObject {
		private _engineSound:createjs.AbstractSoundInstance;
		// CONSTRUCTOR ++++++++++++++++++++++++++++
		constructor() {
			super("plane");
			
			this.y = 430;
			// play engine sound
			this._engineSound = createjs.Sound.play("engine",0,0,0,-1,1,0);
		}
		
		/** 
		 * Update Method for Plane Class
		*/
		public update():void {
			this.x = stage.mouseX;
		}
		
		public engineOff():void {
			console.log("Engine off");
			this._engineSound.stop();
		}
	}
}