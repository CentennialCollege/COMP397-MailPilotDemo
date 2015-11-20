var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // Plane Class
    var Plane = (function (_super) {
        __extends(Plane, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++
        function Plane() {
            _super.call(this, "plane");
            this.y = 430;
            // play engine sound
            this._engineSound = createjs.Sound.play("engine", 0, 0, 0, -1, 1, 0);
        }
        /**
         * Update Method for Plane Class
        */
        Plane.prototype.update = function () {
            this.x = stage.mouseX;
        };
        Plane.prototype.engineOff = function () {
            console.log("Engine off");
            this._engineSound.stop();
        };
        return Plane;
    })(objects.GameObject);
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map