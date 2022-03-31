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
    this.pictures.set("PlayerImg",new ImageObject("images/content/player.png",-30,-30,60,60));
    this.pictures.set("Enemy_1_img",new ImageObject("images/content/enemy_1.png",-30,-30,60,60));
    this.pictures.set("Enemy_2_img",new ImageObject("images/content/enemy_2.png",-15,-15,30,30));
    this.pictures.set("Enemy_3_img",new ImageObject("images/content/enemy_3.png",-30,-30,60,60));

    this.pictures.set("plHP1",new ImageObject("images/content/hp1.png",-75,-75,150,150));
    this.pictures.set("plHP2",new ImageObject("images/content/hp2.png",-75,-75,150,150));
    this.pictures.set("plHP3",new ImageObject("images/content/hp3.png",-75,-75,150,150));
    this.pictures.set("plHP4",new ImageObject("images/content/hp4.png",-75,-75,150,150));
    this.pictures.set("plHP5",new ImageObject("images/content/hp5.png",-75,-75,150,150));
    this.pictures.set("plHP6",new ImageObject("images/content/hp6.png",-75,-75,150,150));
    this.pictures.set("plHP7",new ImageObject("images/content/hp7.png",-75,-75,150,150));
    this.pictures.set("plHP8",new ImageObject("images/content/hp8.png",-75,-75,150,150));
    this.pictures.set("money",new ImageObject("images/content/money.png",-25,-25,50,50));
}
 getByKey(key)
{
    return this.pictures.get(key);
}



 }