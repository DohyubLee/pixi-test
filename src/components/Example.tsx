import React, { useEffect, useRef } from "react";
import SampleImg from "../assets/sample.png";
import * as PIXI from "pixi.js";
import { ICanvas } from "pixi.js";

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

interface CustomICanvas extends ICanvas {
  Node: Node;
}

const Example = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 새로운 PixiJS application 생성합니다
    const app = new PIXI.Application({ width: 640, height: 360 });

    // PixiJS가 자동으로 생성한 캔버스를 DOM에 추가합니다.
    canvasRef.current?.appendChild(app.view);

    // 스프라이트를 생성하고 스테이지에 추가
    // Sprite는 화면에 표시되는 단일 이미지를 의미
    // stage란 화면에 그려질 elelments 들을 가지고 있는 일종의 도화지다.
    let sprite = PIXI.Sprite.from(SampleImg);
    app.stage.addChild(sprite);

    // 스프라이트를 앞뒤로 이동하는 티커 콜백 추가
    // ticker란 애니메이션(움직임)을 구현하는 핵심개념이며
    // 화면을 일정 간격으로 업데이트하여 애니메이션을 만들어냅니다.
    let elapsed = 0.0;
    app.ticker.add((delta) => {
      // delta에는 Tick마다 흘러간 시간이 매개변수로 전달됩니다.
      // 따라서 delta 값을 이용해서 흘러간 시간을 체크할 수 있고,
      // Frame rate도 조절할 수 있습니다.
      elapsed += delta;
      sprite.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
    });
  }, []);

  return <div className="can_wrap" ref={canvasRef}></div>;
};

export default Example;
