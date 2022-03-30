import DrawObject from "../visualization/drawObject";
import ImageObject from "../visualization/imageObject";
import Picture from "../visualization/picture";

 export default class PictureDAO {
constructor(){
    this.pictures = new  Map();
    this.pictures.set('Deco_1',new ImageObject("images/content/deco_1.png",-50,-50,100,100));
    this.pictures.set('Deco_2',new ImageObject("images/content/deco_2.png",-50,-35,100,70));
    this.pictures.set('Deco_3',new ImageObject("images/content/deco_3.png",-50,-75,100,150));
    this.pictures.set('Deco_4',new ImageObject("images/content/deco_4.png",-50,-75,100,150));
    
    this.pictures.set('Simple_Projectile',new ImageObject("images/content/shell_1.png",-4,-4,8,8));
    this.pictures.set('Player',new DrawObject(0,0,15,'gray'));
    this.pictures.set('a',new DrawObject(0,0,25,'red'));
    this.pictures.set('b',new DrawObject(0,0,10,'darkred'));
    this.pictures.set('c',new DrawObject(0,0,30,'black'));
    this.pictures.set("PlayerImg",new ImageObject("images/content/player.png",-15,-20,30,40));
    this.pictures.set("Enemy_1_img",new ImageObject("images/content/enemy_1.png",-15,-20,30,40));
    this.pictures.set("Enemy_2_img",new ImageObject("images/content/enemy_2.png",-10,-15,20,30));
}
 getByKey(key)
{
    return this.pictures.get(key);
}



 }