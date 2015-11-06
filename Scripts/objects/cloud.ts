module objects {
	//CLOUD CLASS
	export class Cloud extends objects.GameObject {
		//PRIVATE INSTANCE VARIABLES
		private _dy:number;
		private _dx:number;
		
		// CONSTRUCTOR ++++++++++++++++++++++++
		constructor() {
			super("cloud");
			

			this._reset();
		}
		
		
		// PUBLIC METHODS
		
		/** 
		 * Update Method for Ocean Class
		 */
		public update():void {
			this.x += this._dx;
			this.y += this._dy;
			this._checkBounds();
		}
		
		//PRIVATE METHODS
		
		/**
		 * Resets the Ocean to y=-960
		 */
		private _reset():void {
			this._dx = Math.floor(Math.random() * 4) - 2; // horizontal drift
			this._dy = Math.floor(Math.random() * 5) + 5; // vertical speed
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