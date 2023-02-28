import React, { useEffect, useRef } from "react";
import SampleImg from "../assets/sample.png";
import * as PIXI from "pixi.js";

/*
    // Create the application helper and add its render target to the page
    let app = new PIXI.Application({ width: 640, height: 360 });
    document.body.appendChild(app.view);

    // Create the sprite and add it to the stage
    let sprite = PIXI.Sprite.from('sample.png');
    app.stage.addChild(sprite);

    // Add a ticker callback to move the sprite back and forth
    let elapsed = 0.0;
    app.ticker.add((delta) => {
      elapsed += delta;
      sprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
    });
*/

const Example = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a new PixiJS application
    const app = new PIXI.Application({ width: 640, height: 360 });

    // Add the canvas that PixiJS automatically created to the DOM
    canvasRef.current?.appendChild(app.view);

    // Create the sprite and add it to the stage
    let sprite = PIXI.Sprite.from(SampleImg);
    app.stage.addChild(sprite);

    // Add a ticker callback to move the sprite back and forth
    let elapsed = 0.0;
    app.ticker.add((delta) => {
      elapsed += delta;
      sprite.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
    });
  }, []);

  return <div ref={canvasRef}></div>;
};

export default Example;
