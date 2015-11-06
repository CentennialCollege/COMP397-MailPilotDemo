module objects {
	//Game Object Class
	export class GameObject extends createjs.Sprite {
		//protected Instance Variables ++++++++++++++
		protected _width: number;
		protected _height: number;
		
		//CONSTRUCTOR +++++++++++++++++++++++++++++++
		constructor(imageString:string) {
			super(atlas, imageString);
			
			this._width = this.getBounds().width;
			this._height = this.getBounds().height;
			this.regX = this._width * 0.5;
			this.regY = this._height * 0.5;
			
		}
		
		
		
	}
}