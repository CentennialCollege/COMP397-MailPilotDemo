var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // GAME CLASS
    var Game = (function (_super) {
        __extends(Game, _super);
        // CONSTRUCTOR
        function Game() {
            _super.call(this);
            this._clouds = [];
        }
        // PUBLIC METHODS
        Game.prototype.start = function () {
            //add ocean to scene
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);
            //add island to scene
            this._island = new objects.Island();
            this.addChild(this._island);
            //add plane to scene
            this._plane = new objects.Plane();
            this.addChild(this._plane);
            //add cloud to scene
            for (var cloud = 0; cloud < 3; cloud++) {
                this._clouds[cloud] = new objects.Cloud();
                this.addChild(this._clouds[cloud]);
            }
            stage.addChild(this);
        };
        // PRIVATE METHODS
        /**
         * Private Utility Method - Distance - returns distance between to points in pixels
         */
        Game.prototype._distance = function (p1, p2) {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        };
        Game.prototype._checkCollision = function (object) {
            // check the distance between plane and other object
            if (this._distance(this._plane.getPosition(), object.getPosition()) <
                (this._plane.getHalfHeight() + object.getHalfHeight())) {
                // Check if plane is not already colliding
                if (!object.getIsColliding()) {
                    switch (object.getName()) {
                        case "island":
                            console.log("Island Hit");
                            break;
                        case "cloud":
                            console.log("Cloud Hit");
                            break;
                    }
                    object.setIsColliding(true);
                }
            }
            else {
                object.setIsColliding(false);
            }
        };
        // update the scene every frame
        Game.prototype.update = function () {
            this._ocean.update();
            this._island.update();
            this._plane.update();
            //update each cloud
            for (var cloud = 0; cloud < 3; cloud++) {
                this._clouds[cloud].update();
                this._checkCollision(this._clouds[cloud]);
            }
            this._checkCollision(this._island);
        };
        return Game;
    })(objects.Scene);
    states.Game = Game;
})(states || (states = {}));
//# sourceMappingURL=game.js.map