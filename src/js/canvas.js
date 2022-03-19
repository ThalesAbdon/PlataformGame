import platform from '../img/platform2.png'
import hills from '../img/hills.png'
import background from '../img/background.png'

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
const gravity = 1.2;

canvas.width = 1280;
canvas.height = 720;


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

class GenericObject {
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

function createImage(imageSrc){
  const image = new Image()
  image.src = imageSrc
  return image
}
let platformImage = createImage(platform)
let player = new Player();
let platforms = [
  new Platform({x:-1,y:624,image: platformImage}), 
  new Platform({x:platformImage.width * 1.3,y:624,image: platformImage})
];

let genericObject = [
  new GenericObject({
    x: -1,
    y: -1,
    image: createImage(background)
  }),
  new GenericObject({
    x: 150,
    y: 50,
    image: createImage(hills)
  })

]


const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

let scrollOffset = 0

function init(){


 platformImage = createImage(platform)
 player = new Player();
 platforms = [
  new Platform({x:-1,y:624,image: platformImage}), 
  new Platform({x:platformImage.width * 1.3,y:624,image: platformImage})
];

 genericObject = [
  new GenericObject({
    x: -1,
    y: -1,
    image: createImage(background)
  }),
  new GenericObject({
    x: 150,
    y: 50,
    image: createImage(hills)
  })

]

 scrollOffset = 0
}

player.update();
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'gray'
  c.fillRect(0, 0, canvas.width, canvas.height);

  genericObject.forEach(genericObject => {
    genericObject.draw()
  })

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
      })
      genericObject.forEach(genericObject => {
        genericObject.position.x -= 3
      })

    } else if (keys.left.pressed) {
        scrollOffset -=5
      platforms.forEach((platform) => {
        platform.position.x += 5;
      })
      genericObject.forEach(genericObject => {
        genericObject.position.x += 3
      })
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

  //Win Condition
  if(scrollOffset > 3000){
    console.log("você Ganhou!");
  }
  //Lose Condition
  if(player.position.y > canvas.height)
   init()
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
