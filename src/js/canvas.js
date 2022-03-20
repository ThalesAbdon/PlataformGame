import platform from '../img/platform2.png'
import hills from '../img/hills.png'
import background from '../img/background.png'
import platformSmallTall from '../img/platformSmallTall2.png'

import spriteIdleLeft from '../img/SpriteIdleLeft.png'
import spriteIdleRight from '../img/SpriteIdleRight.png'
import spriteRunLeft from '../img/SpriteRunLeft.png'
import spriteRunRight from '../img/SpriteRunRight.png'


const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
const gravity = 1.2;

canvas.width = 1280;
canvas.height = 720;


//Personagem Principal
class Player {
  constructor() {

    this.speed = 10
    this.position = {
      x: 100,
      y: 100,
    };

    //velocidade do jogador
    this.velocity = {
      x: 0,
      y: 1,
    };

    this.width = 149;
    this.height = 181;

    this.image = createImage(spriteIdleRight)
    this.frames = 0
    this.sprites = {
      idle: {
        right: createImage(spriteIdleRight),
        left: createImage(spriteIdleLeft),
        cropWidth: 137.7
      },
      run: {
          right: createImage(spriteRunRight),
          left: createImage(spriteRunLeft),
          cropWidth: 153.8
      }
    }
    this.currentSprite = this.sprites.idle.right
    this.currentCropWidth = 137.7
  }
  draw() {
    c.drawImage(
      this.currentSprite,
      this.currentCropWidth * this.frames,
      0,
      this.currentCropWidth,
      181,

      this.position.x,
      this.position.y,
      this.width,
      this.height
      )
  }
  //função que irá atualizar(em relação a movimento/posição/velocidade) o jogador
  update() {
    this.frames++
    
    if( this.frames > 9 && (this.currentSprite === this.sprites.idle.left)) 
       this.frames = 0
    else if((this.frames > 8 && (this.currentSprite === this.sprites.idle.right)))
       this.frames = 0
    else if(this.frames > 7 && this.currentSprite === this.sprites.run.right)
     this.frames = 0 
    else if(this.frames > 7 && this.currentSprite === this.sprites.run.left)
    this.frames = 0
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
let platformSmallTallImage = createImage(platformSmallTall)
let player = new Player()
let platforms = []
let genericObject = []

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
 player.position.x = 30
 platforms = [
  new Platform({x:-1,y:624,image: platformImage}), 
  new Platform({x:platformImage.width * 1.3,y:624,image: platformImage}),
  new Platform({x:platformImage.width * 2.9,y:624,image: platformImage}),
  new Platform({x:platformImage.width * 4.2,y:504,image: platformSmallTallImage}),
  new Platform({x:platformImage.width * 5.2,y:504,image: platformSmallTallImage}),
  new Platform({x:platformImage.width * 6.2,y:424,image: platformSmallTallImage}),
  new Platform({x:platformImage.width * 7.2,y:624,image: platformSmallTallImage})
];

 genericObject = [
  new GenericObject({
    x: -1,
    y: -1,
    image: createImage(background)
  }),
  new GenericObject({
    x: 150,
    y: 150,
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
  
  if ((keys.right.pressed && player.position.x < 400)) {
    player.velocity.x = player.speed
  } else if ((keys.left.pressed && player.position.x > 100) || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
    player.velocity.x = -player.speed
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
        scrollOffset += player.speed
      platforms.forEach((platform) => {
        platform.position.x -= player.speed;
      })
      genericObject.forEach(genericObject => {
        genericObject.position.x -= player.speed * 0.66
      })

    } else if (keys.left.pressed && scrollOffset > 0) {
        scrollOffset -= player.speed
      platforms.forEach((platform) => {
        platform.position.x += player.speed;
      })
      genericObject.forEach(genericObject => {
        genericObject.position.x += player.speed * 0.66
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
  if(scrollOffset === 3900){
    console.log("você Ganhou!");
    alert('Parabéns, você terminou essa DEMO, o jogo irá reiniciar do 0');
    location.reload()
  }
  //Lose Condition
  if(player.position.y > canvas.height)
   init()
}

init()
animate()

//movimentar o personagem para baixo
window.addEventListener("keydown", ({ keyCode }) => {
  switch (keyCode) {
    case 65:
      console.log("left");
      keys.left.pressed = true;
      player.currentSprite = player.sprites.run.left
      player.currentCropWidth = player.sprites.run.cropWidth
      break;
    case 83:
      console.log("down");
      break;
    case 68:
      console.log("right");
      keys.right.pressed = true;
      player.currentSprite = player.sprites.run.right
      player.currentCropWidth = player.sprites.run.cropWidth
      break;
    case 87:
      console.log("up");
      player.velocity.y -= 22;
      break;
  }
});

window.addEventListener("keyup", ({ keyCode }) => {
  switch (keyCode) {
    case 65:
      console.log("left");
      keys.left.pressed = false;
      player.currentSprite = player.sprites.idle.left
      player.currentCropWidth = player.sprites.idle.cropWidth
      break;
    case 83:
      console.log("down");
      break;
    case 68:
      console.log("right");
      keys.right.pressed = false;
      player.currentSprite = player.sprites.idle.right
      player.currentCropWidth = player.sprites.idle.cropWidth
      break;
    case 87:
      console.log("up");
      break;
  }
});
