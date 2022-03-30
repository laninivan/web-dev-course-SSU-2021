import GameObject from "./gameobject";

 export default class Acting extends GameObject{
    constructor(id, picture,colllider,X,Y,level,damage,typeAttack,velocity){
        super(id, picture,colllider,X,Y);
        
        this.level=level;
        this.damage=damage;
        this.typeAttack=typeAttack;
        this.velocity=velocity;
     }

     isCollision(X,Y){
         return super.isCollision(X,Y);
     }

     moveWithVelosity(offsetX,offsetY,maxCordX,maxCordY){
       
         super.move(offsetX*this.velocity,offsetY*this.velocity,maxCordX,maxCordY);

     }
     attack(entity){
         if(this.damage>entity.armor)
        entity.hp=entity.hp+entity.armor-this.damage;
     }

 }