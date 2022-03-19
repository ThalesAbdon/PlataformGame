const canvas = document.querySelector("canvas");

const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const gravity = 1.2;

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
    this.position.y += this.velocity.y
    this.position.x += this.velocity.x
    this.draw();
    if (this.position.y + this.height + this.velocity.y <= canvas.height)
      this.velocity.y += gravity;
    else this.velocity.y = 0;
  }
}

const player = new Player();
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}

player.update();

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  player.update();

  if (keys.right.pressed){
      player.velocity.x = 5
  } else if(keys.left.pressed){
      player.velocity.x = -5
  }else player.velocity.x = 0
}

animate();

//movimentar o personagem para baixo
window.addEventListener('keydown', ({keyCode}) => {
    switch(keyCode){
        case 65:
            console.log('left')
            keys.left.pressed = true
            break
        case 83:
            console.log('down')
            break    
        case 68:
            console.log('right')
            keys.right.pressed = true
            break
        case 87:
            console.log('up')
            player.velocity.y -= 20
            break             
    }
})

window.addEventListener('keyup', ({keyCode}) => {
    switch(keyCode){
        case 65:
            console.log('left')
            keys.left.pressed = false
            break
        case 83:
            console.log('down')
            break    
        case 68:
            console.log('right')
            keys.right.pressed = false
            break
        case 87:
            console.log('up')
            player.velocity.y -= 20
            break             
    }
})