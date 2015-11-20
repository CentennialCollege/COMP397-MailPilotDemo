/// <reference path="_reference.ts"/>

// GLOBAL GAME FRAMEWORK VARIABLES
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;
var state: number;
var currentState: objects.Scene; // alias for our current state
var atlas: createjs.SpriteSheet; // sprite atlas (or texture atlas);

// GAME OBJECTS
var menu: states.Menu;
var game: states.Game;
var over: states.Over;

// MANAGERS
var scoreboard:managers.ScoreBoard;

var data = {

"images": [
    "../../Assets/images/atlas.png"
],

"frames": [
    [2, 2, 226, 176, 0, 0, -1],
    [230, 2, 150, 50, 0, 0, 0],
    [230, 54, 150, 50, 0, 0, 0],
    [230, 106, 62, 60, 0, 0, -1],
    [294, 106, 61, 49, 0, -4, -10]
],

"animations": {
    "cloud": [0],
    "RestartButton": [1],
    "StartButton": [2],
    "island": [3],
    "plane": [4]
}

};

// manifest of all our assets
var manifest = [
    { id: "ocean", src: "../../Assets/images/ocean.gif" },
    { id: "engine", src: "../../Assets/audio/engine.ogg" },
    { id: "thunder", src: "../../Assets/audio/thunder.ogg" },
    { id: "yay", src: "../../Assets/audio/yay.ogg" }
];

function preload(): void {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(manifest);
    
    // Spritesheet is configured
    atlas = new createjs.SpriteSheet(data);
}

function init():void {
    canvas = document.getElementById("canvas"); // reference to canvas element
    stage = new createjs.Stage(canvas); // passing canvas to stage
    stage.enableMouseOver(20); // enable mouse events
    createjs.Ticker.setFPS(60); // set frame rate to 60 fps
    createjs.Ticker.on("tick", gameLoop); // update gameLoop every frame
    setupStats(); // sets up our stats counting

    scoreboard = new managers.ScoreBoard();

    state = config.MENU_STATE;
    changeState(state);

}

// Main Game Loop
function gameLoop(event: createjs.Event): void {
    stats.begin(); // start counting


    currentState.update(); // calling State's update method
    stage.update(); // redraw/refresh stage every frame

    stats.end(); // stop counting
}

// Setup Game Stats
function setupStats():void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// state machine prep
function changeState(state): void {
    // Launch various scenes

    switch (state) {
        case config.MENU_STATE:
            // show the menu scene
            stage.removeAllChildren();
            menu = new states.Menu();
            currentState = menu;
            break;
        case config.PLAY_STATE:
            // show the play scene
            stage.removeAllChildren();
            game = new states.Game();
            currentState = game;
            break;
        case config.OVER_STATE:
            // show the game over scene
            stage.removeAllChildren();
            over = new states.Over();
            currentState = over;
            break;
    }

    currentState.start();
    console.log(currentState.numChildren);
}
 