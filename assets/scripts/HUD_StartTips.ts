import { _decorator, Component, Node } from 'cc';
import { PlayerMovement } from './PlayerMovement';
const { ccclass, property } = _decorator;

@ccclass('HUD_StartTips')
export class HUD_StartTips extends Component {
    @property(PlayerMovement) PlayerMovement: PlayerMovement;

    start() {

    }

    update(deltaTime: number) {
        
    }

    onBtnClick() {
        this.PlayerMovement.enabled = true;
        console.log(this.PlayerMovement);
        this.node.active = false;
    }
}


