
import GameObject from "./gameobject";
 export default class Decoration extends GameObject{
   constructor(id, picture,colllider,X,Y){
      super(id, picture,colllider,X,Y);
   }

   draw(context){
    super.draw(context);
 }

 }