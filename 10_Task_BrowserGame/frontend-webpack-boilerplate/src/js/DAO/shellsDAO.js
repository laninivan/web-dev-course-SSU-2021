import Collider from "../colider/collider";
import RoundArea from "../colider/roundarea";
import Shells from "../gameObjects/shells";
import Picture from "../visualization/picture";
import PictureDAO from "./pictureDAO";


 export default class ShellsDAO{
     constructor(context,pictures){
        this.pictures = pictures
        this.context=context;
     }
shells = [];

drawAll(){
    this.shells.forEach(sh=>{
        sh.draw(this.context);
     })
}

     create(pictureName,cursorX,cursorY,centerCanvasCordX,centerCanvasCordY,damage,velosity){
        this.shells.push(new Shells(1,this.pictures.getByKey(pictureName),new Collider(new RoundArea(centerCanvasCordX,centerCanvasCordY,15))
        ,centerCanvasCordX,centerCanvasCordY,1,damage,'shell',velosity,cursorX,cursorY));
         }

      createStandartShell(cursorX,cursorY,centerCanvasCordX,centerCanvasCordY){
         this.create('Simple_Projectile',cursorX,cursorY,centerCanvasCordX,centerCanvasCordY,1,5)
      }

    offsetAllPositions(offsetX,offsetY,maxCordX,maxCordY){
        this.shells.forEach(sh=>{
            sh.move(offsetX,offsetY,maxCordX,maxCordY);
         })
    }
    movementInItsOwnDirection(maxCordX,maxCordY){
        this.shells.forEach(sh=>{
            sh.moveWithVelosity(maxCordX,maxCordY);
         })
    }

    removeUsedProjectlies(){
      this.shells.forEach((sh,index)=>{
         if(!sh.isVisible)
         {
            this.shells.splice(index,1);
         }
               
               
         
      })
    }
 }