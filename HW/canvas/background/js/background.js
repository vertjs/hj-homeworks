function getRandomArbit(min, max) {
  return max * Math.random() + min;
}

class Shape { // форма
  constructor() {
    this.size = getRandomArbit(0.1, 0.6);
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
    this.angle = getRandomArbit(0, 360);
    this.speed = getRandomArbit(-0.2, 0.2);
  }

  nextPoint(x, y, time) {
    return {
     x: x + Math.sin((x + (time / 10)) / 100) * 5,
     y: y + Math.sin((10 + x + (time / 10)) / 100) * 2
    }
  }
}

const canvas = document.getElementById('wall');
var ctx = canvas.getContext('2d');
var objs = [Cross, Circle];

canvas.setAttribute('width', getComputedStyle(canvas).width);
canvas.setAttribute('height', getComputedStyle(canvas).height);

for(let i = 0; i < getRandomArbit(50, 200); i++) {
  if(i % 2 == 0 ) {
    console.log(1);
    var shapeCross = objs[0];
    var shapeCircle = objs[1];
    var X = getRandomArbit(0, canvas.width);
    var Y = getRandomArbit(0, canvas.height);
    ctx.beginPath();
    ctx.arc(X, Y, getRandomArbit(0.1, 0.6)*12, 0, 2*Math.PI, true);
    drawCross(X,Y);
    setInterval(drawCross,20);
    ctx.stroke();
  }
};

function drawCross(x,y) {
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
