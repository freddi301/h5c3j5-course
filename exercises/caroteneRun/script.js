var carotene = {
  jumpAcceleration: 0,
  height: 0,
  element: document.querySelector('#carotene'),
};

var environment = {
  speed: 3,
  obstacles: [],
}

function createObstacle() {
  var img = document.createElement('img');
  img.src = "../../img/carotene.jpg";
  img.style.width = '80px';
  img.style.position = 'fixed';
  img.style.bottom = '200px';
  document.body.appendChild(img);
  environment.obstacles.push({ pos: 600, element: img })
}

document.body.addEventListener('keypress', function(e) {
  if (e.code === 'Space') {
    if (carotene.height === 0) {
      carotene.jumpAcceleration = 20;
    }
  }
})

function animate() {
  carotene.height += carotene.jumpAcceleration;
  carotene.element.style.bottom = (carotene.height + 200) + 'px';
  if (carotene.height > 0) {
    carotene.jumpAcceleration -= 1;
  } else {
    carotene.jumpAcceleration = 0;
  }
  environment.obstacles.forEach(function(obstacle){
    obstacle.pos -= environment.speed;
    obstacle.element.style.left = obstacle.pos + 'px';
  });
}

createObstacle();

setInterval(animate, 17);
