module objects {
	//Game Object Class
	export class GameObject extends createjs.Sprite {
		//protected Instance Variables ++++++++++++++
		protected _width: number;
		protected _height: number;
		protected _isColliding: boolean;
		protected _name: string;
		
		//CONSTRUCTOR +++++++++++++++++++++++++++++++
		constructor(imageString:string) {
			super(atlas, imageString);
			
			this._name = imageString;
			this._width = this.getBounds().width;
			this._height = this.getBounds().height;
			this.regX = this._width * 0.5;
			this.regY = this._height * 0.5;
			this._isColliding = false;
		}
		
		// UTILITY METHOD TO get current position
		public getPosition():createjs.Point {
			var position:createjs.Point = new createjs.Point(this.x, this.y);
			return position;
		}
		
		// UTility METHOD to get half the height of the object
		public getHalfHeight():number {
			return this._height * 0.5;
		}
		
		// Getter Method to check collision flag of object
		public getIsColliding():boolean {
			return this._isColliding;
		}
		
		// Setter Method to set the collision flag of the object - true or false
		public setIsColliding(isColliding:boolean) {
			this._isColliding = isColliding;
		}
		
		//Getter Method to get the name of the object
		public getName():string {
			return this._name;
		}
		
	}
}