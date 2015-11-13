var managers;
(function (managers) {
    // COLISSION CLASS +++++++++++++++++++++++++++++++++
    var Collision = (function () {
        /**
         * Empty Constructor +++++++++++++++++++++++++++
         */
        function Collision() {
        }
        /**
         * update method
         */
        Collision.prototype.update = function (object1, object2) {
            this._checkCollision(object1, object2);
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++
        /**
         * Private Utility Method - Distance - returns distance between to points in pixels
         */
        Collision.prototype._distance = function (p1, p2) {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        };
        /**
         * Private Utility Method that checks collision between the plane object and other objects
         */
        Collision.prototype._checkCollision = function (object1, object2) {
            // check the distance between plane and other object
            if (this._distance(object1.getPosition(), object2.getPosition()) <
                (object1.getHalfHeight() + object2.getHalfHeight())) {
                // Check if plane is not already colliding
                if (!object2.getIsColliding()) {
                    switch (object2.getName()) {
                        case "island":
                            scoreboard.addScore(100);
                            createjs.Sound.play("yay");
                            break;
                        case "cloud":
                            scoreboard.removeLives(1);
                            createjs.Sound.play("thunder");
                            break;
                    }
                    object2.setIsColliding(true);
                }
            }
            else {
                object2.setIsColliding(false);
            }
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map