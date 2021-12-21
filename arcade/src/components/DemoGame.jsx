// this is something I got from https://doc.babylonjs.com/extensions/Babylon.js+ExternalLibraries/BabylonJS_and_ReactJS
// using it to learn how to make BabylonJS content work with React and hopefully Ionic?? 
// man I'm a little out of my depth right now haha



import React from "react";
import { FreeCamera, Vector3, HemisphericLight } from "@babylonjs/core";
import { ActionManager } from "@babylonjs/core/Actions/actionManager.js";
import { ExecuteCodeAction } from "@babylonjs/core/Actions/directActions.js"
import { Animation } from "@babylonjs/core/Animations/animation.js";
import { SceneLoader } from "@babylonjs/core/Loading/sceneLoader.js";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial.js";
import { Texture } from "@babylonjs/core/Materials/Textures/texture.js";
import SceneComponent from "./SceneComponent"; // uses above component in same directory
// import SceneComponent from 'babylonjs-hook'; // if you install 'babylonjs-hook' NPM.
// import "../App.css"; probably not needed in this app?


const onSceneReady = (scene) => {
    // This creates and positions a free camera (non-mesh)
    var camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);

    // This targets the camera to scene origin
    camera.setTarget(Vector3.Zero());

    const canvas = scene.getEngine().getRenderingCanvas();

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;


    /// START OF MY CODE IS HERE ///
    var pushButtonMaterial = new StandardMaterial("pushButtonMaterial");
    pushButtonMaterial.diffuseTexture = new Texture("./textures/soap_bar_texture.png");

    var winPaddleMaterial = new StandardMaterial("winPaddleMaterial");
    winPaddleMaterial.diffuseTexture = new Texture("./textures/soap_bar_texture2.png");

    console.log("before");
    SceneLoader.ImportMesh('', './models/', 'soapbar.babylon');
    console.log("after");
    SceneLoader.ImportMeshAsync('', './models/', 'soapbar.babylon').then((result) => {
        var pushButton = result.meshes[0];
        pushButton.material = pushButtonMaterial;

        var winPaddle = pushButton.clone();
        winPaddle.material = winPaddleMaterial;
        winPaddle.animations = [];

        winPaddle.position.z = 10;
        pushButton.position.z = -10;
        const framerate = 30;

        var decideOutcomeAction = new ExecuteCodeAction(
            ActionManager.OnPickTrigger,
            //determine, based on random chance and current rotation of paddle, which animation(s) to play
            function () {
                //get current orientation of paddle
                var winSideFacingCamera;
                if (winPaddle.rotation.x == 2 * Math.PI) {
                    winPaddle.rotation.x = 0;
                } else if (winPaddle.rotation.x == 3 * Math.PI) {
                    winPaddle.rotation.x = Math.PI;
                }
                console.log("start of function winPaddle.rotation.x: " + winPaddle.rotation.x);
                if (winPaddle.rotation.x == Math.PI) {
                    winSideFacingCamera = false;
                } else {
                    winSideFacingCamera = true;
                }
                console.log("winSideFacingCamera: " + winSideFacingCamera);

                //animation to spin winPaddle
                const animPaddle = new Animation("animPaddle", "rotation.x", framerate, Animation.ANIMATIONTYPE_FLOAT);
                const paddleKeys = [];

                // flip PI rads win or lose
                paddleKeys.push({
                    frame: 0,
                    value: winPaddle.rotation.x
                });
                paddleKeys.push({
                    frame: framerate / 2,
                    value: winPaddle.rotation.x + Math.PI
                });

                // determine if player wins
                if (Math.random() < 0.5) {
                    console.log("win");
                    //won this time so...
                    //if you won last time
                    if (winSideFacingCamera) {
                        paddleKeys.push({
                            frame: framerate,
                            value: winPaddle.rotation.x + (2 * Math.PI)
                        });
                    }
                } else {
                    console.log("lose");
                    //lost this time so...
                    //if you lose last time
                    if (!winSideFacingCamera) {
                        paddleKeys.push({
                            frame: framerate,
                            value: winPaddle.rotation.x + (2 * Math.PI)
                        });
                    }
                }

                animPaddle.setKeys(paddleKeys);
                winPaddle.animations = [(animPaddle)];

                scene.beginAnimation(winPaddle, 0, framerate);
            }
        );


        pushButton.actionManager = new ActionManager(scene);
        pushButton.isPickable = true; ///AHHHHHHHHHHHHAHAHAHAHAHA I fucking figured it out DAMN they could have mentioned this in the ACtions section of docs
        pushButton.actionManager.registerAction(decideOutcomeAction);
    });


    // const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
    // const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, 0, 50, new BABYLON.Vector3(0, 0, 0));
    // Don't think I'll need my camera or light, but I've saved the lines here so I can see the
    // parameters later
    // camera.attachControl(canvas, true);
    // const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
    /// END OF MY CODE IS HERE ///

    /**
     * Will run on every frame render.  We are spinning the box on y-axis.
     */
};

const onRender = (scene) => {
    console.log("onRender")
};

export default () => (
    <div>
        <SceneComponent antialias onSceneReady={onSceneReady} onRender={onRender} id="my-canvas" />
    </div>
);