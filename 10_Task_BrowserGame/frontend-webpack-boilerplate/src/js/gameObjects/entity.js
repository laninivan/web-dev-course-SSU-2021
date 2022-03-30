
import Acting from "./acting";
 export default class Entity extends Acting{
    constructor(id, picture,colllider,X,Y,level,damage,typeAttack,velocity,speedAttack,hp,maxHp,armor){
        super(id, picture,colllider,X,Y,level,damage,typeAttack,velocity);
        this.speedAttack=speedAttack;
        this.hp=hp;
        this.maxHp=maxHp;
        this.armor=armor;
        this.isCanAttack=true;
    }
    isCollision(X,Y){
        return super.isCollision(X,Y);
    }

    moveWithVelosity(offsetX,offsetY,maxCordX,maxCordY){
       
        
        super.moveWithVelosity(offsetX,offsetY,maxCordX,maxCordY);
    }
    attack(entity){
            super.attack(entity);       
    }
 }