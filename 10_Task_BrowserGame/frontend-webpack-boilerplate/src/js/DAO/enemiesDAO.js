import Collider from "../colider/collider";
import RoundArea from "../colider/roundarea";
import Decorations from "../gameObjects/decoration";
import Enemies from "../gameObjects/enemy";
import DecorationsDAO from "./decorationsDAO";
import PictureDAO from "./pictureDAO";

 export default class EnemiesDAO{
     constructor(context,pictures){
        this.pictures = pictures
        this.context=context;
     }
enemies = [];

drawAll(){
    this.enemies.forEach(enem=>{
        enem.draw(this.context);
     })
}


    movementInItsOwnDirection(maxCordX,maxCordY){
        this.enemies.forEach(enem=>{
            enem.moveWithVelosity(maxCordX,maxCordY)
         })
    }

    create(pictureName,collider,posx,posY,level,damage,typeAttack, velocity, speedAttack,hp, maxHp, armor,centerCanvasCordX, centerCanvasCordY){       
        this.enemies.push(new Enemies(this.enemies.length,this.pictures.getByKey(pictureName),collider,posx,posY, level, damage,typeAttack, velocity, speedAttack,hp,maxHp,armor, centerCanvasCordX, centerCanvasCordY))
    }

    createEnemie_1(posX,posY,posPlayerX,posPlayerY){
        this.create('Enemy_1_img',new Collider(new RoundArea(0,0,15)),
        posX, posY,1,1,'melee',1,1, 2, 2, 0,posPlayerX, posPlayerY)
    }
    
    createEnemie_2(posX,posY,posPlayerX,posPlayerY){
        this.create('Enemy_2_img',new Collider(new RoundArea(0,0,10)),
        posX, posY,2,2,'melee',2,1, 5, 5, 0,posPlayerX, posPlayerY)
    }


    offsetAllPositions(offsetX,offsetY,maxCordX,maxCordY){
        this.enemies.forEach(en=>{
            en.move(offsetX,offsetY,maxCordX,maxCordY);       
         })
    }

 }