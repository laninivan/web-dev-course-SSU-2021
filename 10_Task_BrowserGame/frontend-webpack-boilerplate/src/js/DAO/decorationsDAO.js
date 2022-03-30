import Collider from "../colider/collider";
import RoundArea from "../colider/roundarea";
import Decorations from "../gameObjects/decoration";
import PictureDAO from "./pictureDAO";

 export default class DecorationsDAO{
     constructor(context,pictures){
         this.context=context;
        this.pictures = pictures
     }
decorations =[];


createDecoration(pictureName,X,Y){
    this.decorations.push(new Decorations(1,this.pictures.getByKey(pictureName),new Collider(new RoundArea(X,Y,15)),X,Y));
}

createDeco_1(X,Y){
    this.createDecoration('Deco_1',X,Y);
}
createDeco_2(X,Y){
    this.createDecoration('Deco_2',X,Y);
}
createDeco_3(X,Y){
    this.createDecoration('Deco_3',X,Y);
}
createDeco_4(X,Y){
    this.createDecoration('Deco_4',X,Y);
}

drawAll(){
    this.decorations.forEach(dec=>{
        dec.draw(this.context);
     })
}

offsetAllPositions(offsetX,offsetY,maxCordX,maxCordY){
    this.decorations.forEach(dec=>{
        dec.move(offsetX,offsetY,maxCordX,maxCordY);
        
     })
}

}