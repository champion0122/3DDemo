import { _decorator, Component, Label, Node, Vec3 } from 'cc';
import { PlayerMovement } from './PlayerMovement';
const { ccclass, property } = _decorator;

@ccclass('HUD_Distance')
export class HUD_Distance extends Component {
    @property(Node) player: Node;
    @property(PlayerMovement) PlayerMovement: PlayerMovement;

    spentTime: number = 0;
    content: Label;

    start() {
        this.content = this.node.getComponent(Label);
    }

    checkDropDown() {
        return this.player.position.y < 0;
    }

    update(deltaTime: number) {
        const prevZPos = this.player.position.z
        if(this.PlayerMovement.enabled)
            this.spentTime += deltaTime;
        // this.content.string = '当前距离：' + prevZPos.toFixed(2);
        this.content.string = '已用时间：' + this.spentTime.toFixed(2);

        if(this.checkDropDown()) {
            this.player.setPosition(0, 1, prevZPos);
        }
    }
}


