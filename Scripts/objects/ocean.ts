module objects {
	//OCEAN CLASS
	export class Ocean extends createjs.Bitmap {
		//PRIVATE INSTANCE VARIABLES
		private _dy:number;
		
		// CONSTRUCTOR ++++++++++++++++++++++++
		constructor() {
			super(assets.getResult("ocean"));
			
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
			this.y = -960;
		}
		
		/**
		 * Checks to see if ocean needs to be reset
		 */
		private _checkBounds():void {
			if(this.y >= 0) {
				this._reset();
			}
		}
	}
}