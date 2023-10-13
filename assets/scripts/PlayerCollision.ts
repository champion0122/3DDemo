import { _decorator, BoxCollider, Component, ICollisionEvent, ITriggerEvent, Node, RigidBody, v3 } from 'cc';
import { PlayerMovement } from './PlayerMovement';
const { ccclass, property } = _decorator;

@ccclass('PlayerCollision')
export class PlayerCollision extends Component {
    @property(Node) success_scene: Node;

    start() {
        let collider = this.node.getComponent(BoxCollider);
        collider.on('onCollisionEnter', this.onCollisionEnter, this);
        collider.on('onTriggerEnter', this.onTriggerEnter, this);
    }

    onDestroy() {
        let collider = this.node.getComponent(BoxCollider);
        collider.off('onCollisionEnter', this.onCollisionEnter, this);
        collider.off('onTriggerEnter', this.onTriggerEnter, this);
    }

    onCollisionEnter(event: ICollisionEvent) {
        console.log(event.otherCollider.node.name)
        // if(event.otherCollider.node.name === 'EndPoint') {
        //     console.log(this.node)
        // }
    }

    onTriggerEnter(event: ITriggerEvent) {
        console.log(event.otherCollider.node.name);
        let playerMovement = this.node.getComponent(PlayerMovement);
        let rigidBody = this.node.getComponent(RigidBody);

        playerMovement.enabled = false;
        rigidBody.setLinearVelocity(v3(0, 0, 0));
        this.success_scene.active = true;
    }

    update(deltaTime: number) {
        
    }
}


