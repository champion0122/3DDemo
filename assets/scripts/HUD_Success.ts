import { _decorator, Component, director, Director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HUD_Success')
export class HUD_Success extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }

    onBtnClick() {
        director.loadScene(director.getScene().name);
    }
}


