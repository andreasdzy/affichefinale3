/////////////////////////Première class


class boules {
  constructor(){
    this.taille = random(1, 5);
  }
  
  afficher(){
    noStroke();
    this.x = mouseX + random(-10,50);
    this.y = mouseY + random(-10,50);
    graphics.circle(this.x, this.y, this.taille);
    
  }
}


/////////////////////////Deuxième class


class Particule {
  constructor() {
    this.pos = p5.Vector.random2D().mult(75)
    //direction des particules
    this.vel = createVector(-1,0)
    //variation de vitesse entre les diff particules
    this.acc = this.pos.copy().mult(random(0.00001,0.00001))

  }
  update() {
    this.vel.add(this.acc)
    this.pos.add(this.vel)
  }
  show() {
    noStroke()
    fill(255)
    ellipse(this.pos.x, this.pos.y, 5)
  }
  edges() {
    if ( this.pos.x < -width /2 || this.pos.x > width /2 || this.pos.y < -height /2 ||
       this.pos.y > height /2) {
      return true
    } else {
      return false
    }
  }
}
class Particule2 extends Particule {
  constructor() {
    super()
    this.vel = createVector(1,0)
  }
  update() {
    this.vel.add(this.acc)
    this.pos.add(this.vel)
  }
  show() {
    noStroke()
    fill(255)
    ellipse(this.pos.x, this.pos.y, 5)
  }
  edges() {
    if ( this.pos.x < -width /2 || this.pos.x > width /2 || this.pos.y < -height /2 ||
       this.pos.y > height /2) {
      return true
    } else {
      return false
    }
  }
}