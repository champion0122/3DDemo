import { _decorator, Component, Node, v3, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('FollowPlayer')
export class FollowPlayer extends Component {
    @property(Node) targetNode: Node;
    @property(Vec3) offset: Vec3 = v3(0, 0, 0);

    start() {

    }

    tempPos: Vec3 = v3(0, 0, 0);
    update(deltaTime: number) {
        this.targetNode.getPosition(this.tempPos);
        this.tempPos.add(this.offset)
        this.node.setPosition(this.tempPos);
    }
}
