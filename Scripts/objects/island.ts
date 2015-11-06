module objects {
	//OCEAN CLASS
	export class Island extends objects.GameObject {
		//PRIVATE INSTANCE VARIABLES
		private _dy:number;
		
		// CONSTRUCTOR ++++++++++++++++++++++++
		constructor() {
			super("island");
			
			this._dy = 5;
			this._reset();
		}
		
		
		// PUBLIC METHODS
		
		/** 
		 * Update Method for Ocean Class
		 */
		public update():void {
			this.y += this._dy;
			this._checkBounds();
		}
		
		//PRIVATE METHODS
		
		/**
		 * Resets the Ocean to y=-960
		 */
		private _reset():void {
			this.x = Math.floor(Math.random() * 640) + 1;
			this.y = -this._height;
		}
		
		/**
		 * Checks to see if ocean needs to be reset
		 */
		private _checkBounds():void {
			if(this.y >= (480 + this._height)) {
				this._reset();
			}
		}
	}
}