let jsdom = require('jsdom');

class Drawer{
  static Init(){
    const canvas = document.cleateElement("canvas");
    canvas.width = 600;
    canvas.height = 600;
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    ctx.fillRect(10,10,100,100);
    /*
    this.app = new PIXI.Application(800,600,{backgrondColor : 0x000000 }); 
    this.container = new PIXI.Container();
    this.app.stage.addClild(this.container);
    this.Renderer = new PIXI.autoDetectRenderer(800,600);
    */
  }
}

module.exports = Drawer; 
