module managers {
	// COLISSION CLASS +++++++++++++++++++++++++++++++++
	export class Collision {
		/**
		 * Empty Constructor +++++++++++++++++++++++++++
		 */
		constructor() {
		}
		
		/**
		 * update method
		 */
		public update(object1:objects.GameObject, object2:objects.GameObject):void {
			this._checkCollision(object1, object2)
		}
		
		// PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++
		/**
         * Private Utility Method - Distance - returns distance between to points in pixels
         */
        private _distance(p1: createjs.Point, p2: createjs.Point): number {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        }
		
		/**
         * Private Utility Method that checks collision between the plane object and other objects
         */
        private _checkCollision(object1:objects.GameObject,object2:objects.GameObject): void {
            // check the distance between plane and other object
            if (this._distance(object1.getPosition(), object2.getPosition()) <
                (object1.getHalfHeight() + object2.getHalfHeight())) {
                        
                // Check if plane is not already colliding
                if (!object2.getIsColliding()) {
                    
                    switch(object2.getName()) {
                        case "island":
                           createjs.Sound.play("yay");
                        break;
                        case "cloud":
                            createjs.Sound.play("thunder");
                        break;
                    }
                    object2.setIsColliding(true);
                }
            } else {
                object2.setIsColliding(false);
            }

        }
	}
}