const canvas = document.querySelector("canvas");

const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const gravity = 1.2

class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };
    
    //velocidade do jogador
    this.velocity = {
        x:0,
        y:1
    }

    this.width = 28;
    this.height = 28;
    }

  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  //função que irá atualizar(em relação a movimento/posição/velocidade) o jogador
  update(){
    this.position.y += this.velocity.y  
    this.draw()
    if(this.position.y + this.height + this.velocity.y <= canvas.height)
    this.velocity.y += gravity
    else this.velocity.y = 0
  }

}

const player = new Player();
player.update();

function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width, canvas.height)
    player.update()    
}

animate()
