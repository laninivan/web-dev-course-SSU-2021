
import Collider from "../colider/collider";
import RoundArea from "../colider/roundarea";
import ImageObject from "../visualization/imageObject";
import Aura from "./aura";
import Entity from "./entity";
export default class Player extends Entity{
   constructor(id, picture,colllider,X,Y,level,damage,typeAttack,velocity,speedAttack,hp,maxHp,armor,money,xp){
       super(id, picture,colllider,X,Y,level,damage,typeAttack,velocity,speedAttack,hp,maxHp,armor);
       this.money=money;
       this.xp=xp;
        this.countShell=1;
        this.aura = new Aura(0,new ImageObject("images/content/aura_0.png",-50,-55,100,100),new Collider(new RoundArea(0,-5,50)),X,Y);      
   }
   attack(entity){
    super.attack(entity);
}

draw(context){
    super.draw(context);
    this.aura.draw(context);
}
repulsion(entity){
    this.aura.repulsion(entity);
}

}