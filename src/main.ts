import './style.css'
import {GameUI} from "./ui/gameui";
import {SpaceObjectUI} from "./ui/spaceobjectui";

const fighter = new SpaceObjectUI("FighterLaser_lightblue.png",0.,1.);
//fighter.model.position.x = 300;
//fighter.model.position.y = 300;
fighter.model.velocity.x = 30;
fighter.model.velocity.y = 50;

const gameui = new GameUI("canvas");
gameui.addSpaceObjectUI(fighter);
gameui.run();
