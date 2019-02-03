function rand(min, max) {
  return max * Math.random() + min;
}

class Shape { // форма
  constructor() {
    this.size = rand(0.1, 0.6);
    this.strokeColor = 'white';
    this.strokeWidth = 5 * this.size;
  }
}

class Circle extends Shape {
  constructor() {
    super();
    this.radius = 12 * this.size;
  }

  nextPoint(x, y, time) {
    return {
      x: x + Math.sin((50 + x + (time / 10)) / 100) * 3,
      y: y + Math.sin((45 + x + (time / 10)) / 100) * 4
    };
  }
}

class Cross extends Shape {
  constructor() {
    super();
    this.side = 20 * this.size;
    this.angle = rand(0, 360);
    this.speed = rand(-0.2, 0.2);
  }

  nextPoint(x, y, time) {
    return {
     x: x + Math.sin((x + (time / 10)) / 100) * 5,
     y: y + Math.sin((10 + x + (time / 10)) / 100) * 2
    }
  }
}

const canvas = document.getElementById('wall'),
      ctx = canvas.getContext('2d'),
      objs = [Cross, Cross];

canvas.setAttribute('width', getComputedStyle(canvas).width);
canvas.setAttribute('height', getComputedStyle(canvas).height);

for(let i = 0; i < rand(50, 200); i++) {
  console.log(1);
  var shape = objs[Math.round(rand(0,1))],
        X = rand(0,canvas.width),
        Y = rand(0,canvas.height);
  ctx.beginPath();

  if(shape instanceof Circle) {
    ctx.arc(X, Y, shape.radius, 0, 2*Math.PI, true);
  }
  if(shape == Cross) {
    drawCross(X,Y);
    //setInterval(drawCross,20);
  }

  ctx.stroke();

}

function drawCross(x,y) {
  //let {w, h} = shape.nextPoint(x,y, new Date());
  const shap = new Cross();
  ctx.lineWidth = shap.strokeWidth;
  ctx.strokeStyle = shap.strokeColor;
  ctx.save();
  ctx.translate(x+shap.side/2, y-shap.side/2);
  ctx.rotate(shap.angle*Math.PI/180);
  ctx.moveTo(x, y);
  ctx.lineTo(x+shap.side, y);
  ctx.moveTo(x+shap.side/2, y-shap.side/2);
  ctx.lineTo(x+shap.side/2, y+shap.side/2);
  ctx.restore();
}
