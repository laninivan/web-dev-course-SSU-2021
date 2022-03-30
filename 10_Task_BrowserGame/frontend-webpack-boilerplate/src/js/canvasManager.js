
import ImageObject from './visualization/imageObject';
import DrawObject from './visualization/drawObject';
import Picture from './visualization/picture';

import EntityDAO from './DAO/entityDAO';
import DecorationsDAO from './DAO/decorationsDAO';
import PictureDAO from './DAO/pictureDAO';
import Decoration from './gameObjects/decoration';
import Collider from './colider/collider';
import RoundArea from './colider/roundarea';

const canvas = document.querySelector('canvas')
canvas.width = innerWidth * 0.933;
canvas.height = innerHeight
const context = canvas.getContext('2d')
let centerCanvasCordY = canvas.height / 2;
let centerCanvasCordX = canvas.width / 2;

let directVoluePlayerY = 0;
let directVoluePlayerX = 0;
let isGameOver = true;
let isPause = false;
let isFillPauseOrGameOver = false;

let skillMaxHpCnt = 1;
let increaseForNextMaxHP = 0.125;
let skillVelosityCnt = 1;
let increaseForVelosity = 0.125;
let skillDamagekCnt = 1;
let increaseForDamage = 0.125;
let skillSpeedAttackCnt = 1;
let increaseForSpeedAttack = 0.125;
var entityDAO;
function animate() {

   let numberFrame=requestAnimationFrame(animate);
   setColorPriceSkills();
   if (!isGameOver && !isPause) {

      context.fillStyle = 'rgba(0,10,10,0.99)'
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = "white";
      context.strokeStyle = "#F00";
      context.font = 'bold 15px sans-serif';

      entityDAO.offsetAllPositions(directVoluePlayerX, directVoluePlayerY, canvas.width, canvas.height);
      isGameOver = entityDAO.service(canvas.width, canvas.height);
   }
   else if (isPause) {



      context.fillStyle = 'rgba(250,250,250,0.1)'
      if (!isFillPauseOrGameOver) {
         context.fillRect(0, 0, canvas.width, canvas.height);
         isFillPauseOrGameOver = true;
      }


      context.fillStyle = "white";
      context.strokeStyle = "#F00";
      context.font = 'bold 40px sans-serif';
      context.fillText("PAUSE", canvas.width / 2 - 40 * 1.5, canvas.height / 2);
   }
   else {
      context.fillStyle = 'rgba(250,250,250,0.1)'
      if (!isFillPauseOrGameOver) {
         let storagLength=10;
         if(window.localStorage.length!=0){
           
            for(let i=0;i<storagLength;i++){
               if(entityDAO.wave>=window.localStorage[i]){
                  for(let j=storagLength-1;j>=i;j--){
                     window.localStorage.setItem(j,window.localStorage.getItem(j-1));
                  }
                  window.localStorage.setItem(i,entityDAO.wave);
                  break;
               }
            }
         }
         else{
               window.localStorage.setItem(0,entityDAO.wave);
         }
         
         //console.log( window.localStorage)
         //window.localStorage.clear();
        
         context.fillRect(0, 0, canvas.width, canvas.height);
         isFillPauseOrGameOver = true;
         document.getElementById("component-interface").style.display = 'none';
         document.getElementById("endGameMenu").style.display = 'block';
         cancelAnimationFrame(numberFrame)
      }
      

   }


}

function setColorPriceSkills(){
   if(entityDAO.player.money>=skillMaxHpCnt*10)
      priceHp.style.color="white";
      else priceHp.style.color="red";

      if(entityDAO.player.money>=skillVelosityCnt*10)
      priceVelocity.style.color="white";
      else priceVelocity.style.color="red";

      if(entityDAO.player.money>=skillSpeedAttackCnt*10)
      priceSpeedRecharge.style.color="white";
      else priceSpeedRecharge.style.color="red";

      if(entityDAO.player.money>=entityDAO.player.countShell*10)
      priceCountShells.style.color="white";
      else priceCountShells.style.color="red";

      if(entityDAO.player.money>=skillDamagekCnt*10)
      priceDamage.style.color="white";
      else priceDamage.style.color="red";

      if(entityDAO.player.money>=(entityDAO.player.aura.power+1)*10)
      priceAura.style.color="white";
      else priceAura.style.color="red";

      if(entityDAO.player.money>=(entityDAO.player.armor+1)*10)
      priceArmor.style.color="white";
      else priceArmor.style.color="red";

}

window.addEventListener('keyup', function (event) {
   if (event.code == 'KeyW' || event.code == 'KeyS') {
      setTimeout(() => { directVoluePlayerY = 0; }, 100);

   }
   else if (event.code == 'KeyD' || event.code == 'KeyA') {
      setTimeout(() => { directVoluePlayerX = 0; }, 100);

   }
   else if (event.code == 'Space' && !isGameOver) {
      isPause = !isPause;
      isFillPauseOrGameOver = false;
   }
   else if (event.code == 'Escape') {
      isGameOver=true;
   }
})

window.addEventListener('keydown', function (event) {

   if (event.code == 'KeyW') {
      directVoluePlayerY = 1;
   }
   else if (event.code == 'KeyS') {
      directVoluePlayerY = -1;
   }
   else if (event.code == 'KeyD') {
      directVoluePlayerX = -1;
   }
   else if (event.code == 'KeyA') {
      directVoluePlayerX = 1;
   }

})

window.addEventListener('click', function (event) {
   if (!isGameOver && !isPause && event.clientX <= centerCanvasCordX * 2) {
      entityDAO.createShell(event.clientX, event.clientY, centerCanvasCordX, centerCanvasCordY);
   }


})

startButton.onclick = function () {
   canvas.style.display="block";
   mainMenu.style.display="none";
   initGame();
  document.getElementById("component-interface").style.display = 'block';
  animate();
}
restartButton.onclick = function () {
   initGame();
  document.getElementById("component-interface").style.display = 'block';
  document.getElementById("endGameMenu").style.display = 'none';
  animate();
}
ratingButton.onclick= function () {

   ratingList.innerHTML = "<li>"+window.localStorage[0]+
   "</li><li>"+window.localStorage[1]+
   "</li><li>"+window.localStorage[2]+
   "</li><li>"+window.localStorage[3]+
   "</li><li>"+window.localStorage[4]+
   "</li><li>"+window.localStorage[5]+
   "</li><li>"+window.localStorage[6]+
   "</li><li>"+window.localStorage[7]+
   "</li><li>"+window.localStorage[8]+
   "</li><li>"+window.localStorage[9]+"</li>";



   document.getElementById("rating").style.display = 'block';
   mainMenu.style.display="none";
}
exitButton.onclick= function () {
   close();
}
exitToMenuButton.onclick= function () {
   mainMenu.style.display="block";
   canvas.style.display="none";
   document.getElementById("component-interface").style.display = 'none';
   document.getElementById("endGameMenu").style.display = 'none';
}
backFromRating.onclick= function () {
   mainMenu.style.display="block";
   canvas.style.display="none";
   document.getElementById("rating").style.display = 'none';
   document.getElementById("component-interface").style.display = 'none';
   document.getElementById("endGameMenu").style.display = 'none';
}

bSkillHpPlus.onclick = function () {
   if (skillMaxHpCnt <= 10 && entityDAO.player.money>=skillMaxHpCnt*10) {
      entityDAO.player.money-=skillMaxHpCnt*10;
      
      skillMaxHpCnt++;
      priceHp.innerHTML = skillMaxHpCnt*10;
      entityDAO.player.maxHp *= (1 + increaseForNextMaxHP);
      increaseForNextMaxHP *= 2;
      bPlusInfo.setAttribute('data-title', "Повышение здоровья на " + increaseForNextMaxHP * 100 + "%")
   }
}
bSkillVelocityPlus.onclick = function () {
   if (skillVelosityCnt <= 10 && entityDAO.player.money>=skillVelosityCnt*10) {
      entityDAO.player.money-=skillVelosityCnt*10;
      skillVelosityCnt++;
      priceVelocity.innerHTML = skillVelosityCnt*10;
      entityDAO.player.velocity *= (1 + increaseForVelosity);
      increaseForVelosity *= 2;
      bVelocityPlusInfo.setAttribute('data-title', "Повышение скорости перемещения на " + increaseForVelosity * 100 + "%")
   }
}

bSkillSpeedAttackPlus.onclick = function () {
   if (skillSpeedAttackCnt <= 10 && entityDAO.player.money>=skillSpeedAttackCnt*10) {
      entityDAO.player.money-=skillSpeedAttackCnt*10;
      skillSpeedAttackCnt++;
      priceSpeedRecharge.innerHTML = skillSpeedAttackCnt*10;
      entityDAO.player.speedAttack *= (1 + increaseForSpeedAttack);
      increaseForSpeedAttack *= 2;
      bSpeedAttackPlusInfo.setAttribute('data-title', "Повышение скорости перемещения на " + increaseForSpeedAttack * 100 + "%")
   }
}

bSkillCountShellsPlus.onclick = function () {
   if (entityDAO.player.countShell <= 9 && entityDAO.player.money>=entityDAO.player.countShell*10) {
      entityDAO.player.money-=entityDAO.player.countShell*10;

      entityDAO.player.countShell++;
      priceCountShells.innerHTML = entityDAO.player.countShell*10;
      bCountShellsPlusInfo.setAttribute('data-title', "Увеличение количества снарядов до " + (entityDAO.player.countShell + 1))
   }
}


bSkillDamagePlus.onclick = function () {
   if (skillDamagekCnt <= 10 && entityDAO.player.money>=skillDamagekCnt*10) {
      entityDAO.player.money-=skillDamagekCnt*10;
      skillDamagekCnt++;
      priceDamage.innerHTML =skillDamagekCnt*10;
      entityDAO.player.damage *= (1 + increaseForDamage);
      increaseForDamage *= 2;
      bDamagePlusInfo.setAttribute('data-title', "Повышение урона нанасимого противникам на " + increaseForDamage * 100 + "%")
   }
}

bSkillAuraPlus.onclick = function () {
   if (entityDAO.player.aura.power <= 10 && entityDAO.player.money>=(entityDAO.player.aura.power+1)*10) {
      entityDAO.player.money-=(entityDAO.player.aura.power+1)*10;
      if (entityDAO.player.aura.power == 0) {
        
         entityDAO.player.aura.picture = new ImageObject("images/content/aura_1.png", -50, -55, 100, 100);
      }
      else if (entityDAO.player.aura.power == 4) {
         let wight=entityDAO.player.aura.picture.wight;
         let height= entityDAO.player.aura.picture.height;
         let posX= entityDAO.player.aura.picture.X;
         let posY= entityDAO.player.aura.picture.Y;
         entityDAO.player.aura.picture = new ImageObject("images/content/aura_2.png", posX, posY, wight, height);
      }
      else if (entityDAO.player.aura.power == 9) {
         let wight=entityDAO.player.aura.picture.wight;
         let height= entityDAO.player.aura.picture.height;
         let posX= entityDAO.player.aura.picture.X;
         let posY= entityDAO.player.aura.picture.Y;
         entityDAO.player.aura.picture = new ImageObject("images/content/aura_3.png", posX, posY, wight, height);
      }
      entityDAO.player.aura.power++;
      priceAura.innerHTML =(entityDAO.player.aura.power+1)*10;
      entityDAO.player.aura.increasingSize(0.1)
      bAuraPlusInfo.setAttribute('data-title', "Повышает радиус отталкивающей ауры до " + (entityDAO.player.aura.picture.wight/2 * 1.1) + " и силу отталкивания до " + (entityDAO.player.aura.power + 1))
   }
}


bSkillArmorsPlus.onclick = function () {
   if (entityDAO.player.armor <= 10 && entityDAO.player.money>=(entityDAO.player.armor+1)*10) {
      entityDAO.player.money-=(entityDAO.player.armor+1)*10;
      entityDAO.player.armor++;
      priceArmor.innerHTML =(entityDAO.player.armor+1)*10;
      bArmorsPlusInfo.setAttribute('data-title', "Повышает защиту до " + (entityDAO.player.armor + 1))
   }
}

function initGame(){
isGameOver = false;
isPause = false;
isFillPauseOrGameOver = false;

skillMaxHpCnt = 1;
increaseForNextMaxHP = 0.125;
skillVelosityCnt = 1;
increaseForVelosity = 0.125;
skillDamagekCnt = 1;
increaseForDamage = 0.125;
skillSpeedAttackCnt = 1;
increaseForSpeedAttack = 0.125;

   entityDAO = new EntityDAO(context);
   entityDAO.createPlayer(centerCanvasCordX, centerCanvasCordY);
   entityDAO.Init();
   priceHp.innerHTML = skillMaxHpCnt*10;
   priceVelocity.innerHTML = skillVelosityCnt*10;
   priceSpeedRecharge.innerHTML = skillSpeedAttackCnt*10;
   priceCountShells.innerHTML = entityDAO.player.countShell*10;
   priceDamage.innerHTML =skillDamagekCnt*10;
   priceAura.innerHTML =(entityDAO.player.aura.power+1)*10;
   priceArmor.innerHTML =(entityDAO.player.armor+1)*10;

   bPlusInfo.setAttribute('data-title', "Повышение здоровья на " + increaseForNextMaxHP * 100 + "%")
   bVelocityPlusInfo.setAttribute('data-title', "Повышение скорости перемещения на " + increaseForVelosity * 100 + "%")
   bSpeedAttackPlusInfo.setAttribute('data-title', "Повышение скорости перемещения на " + increaseForSpeedAttack * 100 + "%")
   bCountShellsPlusInfo.setAttribute('data-title', "Увеличение количества снарядов до " + (entityDAO.player.countShell + 1))
   bDamagePlusInfo.setAttribute('data-title', "Повышение урона нанасимого противникам на " + increaseForDamage * 100 + "%")
   bAuraPlusInfo.setAttribute('data-title', "Повышает радиус отталкивающей ауры до " + (entityDAO.player.aura.picture.wight/2 * 1.1) + " и силу отталкивания до " + (entityDAO.player.aura.power + 1))
   bArmorsPlusInfo.setAttribute('data-title', "Повышает защиту до " + (entityDAO.player.armor + 1))
}





