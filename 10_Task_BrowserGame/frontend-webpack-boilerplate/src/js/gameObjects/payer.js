
import Entity from "./entity";
export default class Player extends Entity{
   constructor(id, picture,colllider,X,Y,level,damage,typeAttack,velocity,speedAttack,hp,maxHp,armor,money,xp){
       super(id, picture,colllider,X,Y,level,damage,typeAttack,velocity,speedAttack,hp,maxHp,armor);
       this.money=money;
       this.xp=xp;

        
   }
   
}