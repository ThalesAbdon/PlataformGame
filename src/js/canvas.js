import platform from '../img/platform2.png'
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1280;
canvas.height = 720;

const gravity = 1.2;

//Personagem Principal
class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };

    //velocidade do jogador
    this.velocity = {
      x: 0,
      y: 1,
    };

    this.width = 28;
    this.height = 28;
  }

  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  //função que irá atualizar(em relação a movimento/posição/velocidade) o jogador
  update() {
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
    this.draw();
    if (this.position.y + this.height + this.velocity.y <= canvas.height)
      this.velocity.y += gravity;
    else this.velocity.y = 0;
  }
}

class Platform {
  constructor({x,y,image}) {
    this.position = {
      x,
      y
    };

    this.image = image
    this.width = image.width ;
    this.height = image.height;
    
  }

  draw() {
    c.drawImage(this.image,this.position.x,this.position.y)
  }
}

const image = new Image()
image.src = platform

const player = new Player();
const platforms = [new Platform({x:-1,y:624,image}), new Platform({x:image.width - 3,y:624,image})];

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

player.update();

let scrollOffset = 0

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'gray'
  c.fillRect(0, 0, canvas.width, canvas.height);
  platforms.forEach((platform) => {
    platform.draw();
  })
  player.update();
  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = 5;
  } else if (keys.left.pressed && player.position.x > 100) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
        scrollOffset +=5
      platforms.forEach((platform) => {
        platform.position.x -= 5;
      });
    } else if (keys.left.pressed) {
        scrollOffset -=5
      platforms.forEach((platform) => {
        platform.position.x += 5;
      });
    }
  }

  //Sistema de colisão com a plataforma
  platforms.forEach((platform) => {
    if (
      player.position.y + player.height <= platform.position.y &&
      player.position.y + player.height + player.velocity.y >=
        platform.position.y &&
      player.position.x + player.width >= platform.position.x &&
      player.position.x <= platform.position.x + platform.width
    ) {
      player.velocity.y = 0;
    }
  });

  if(scrollOffset > 3000){

  }
}

animate()

//movimentar o personagem para baixo
window.addEventListener("keydown", ({ keyCode }) => {
  switch (keyCode) {
    case 65:
      console.log("left");
      keys.left.pressed = true;
      break;
    case 83:
      console.log("down");
      break;
    case 68:
      console.log("right");
      keys.right.pressed = true;
      break;
    case 87:
      console.log("up");
      player.velocity.y -= 20;
      break;
  }
});

window.addEventListener("keyup", ({ keyCode }) => {
  switch (keyCode) {
    case 65:
      console.log("left");
      keys.left.pressed = false;
      break;
    case 83:
      console.log("down");
      break;
    case 68:
      console.log("right");
      keys.right.pressed = false;
      break;
    case 87:
      console.log("up");
      player.velocity.y -= 20;
      break;
  }
});
