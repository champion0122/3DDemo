import { _decorator, Component, EventKeyboard, Input, input, KeyCode, Node, RigidBody, v3, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayerMovement')
export class PlayerMovement extends Component {
    @property(RigidBody) rigidBody: RigidBody;
    @property(Number) forceY: number = 0;
    @property(Number) forceX: number = 0;

    leftMoving: boolean = false;
    rightMoving: boolean = false;

    start() {
        input.on(Input.EventType.KEY_DOWN, this.keyListen, this);
    }

    keyListen(event: EventKeyboard) {
        if(event.keyCode === KeyCode.KEY_A || event.keyCode === KeyCode.ARROW_LEFT){
            this.leftMoving = true;
        } else if(event.keyCode === KeyCode.KEY_D || event.keyCode === KeyCode.ARROW_RIGHT){
            this.rightMoving = true;
        }

    }


    onDestroy(): void {
        input.off(Input.EventType.KEY_DOWN, this.keyListen, this);
    }

    applyForce(deltaTime: number) {
        let speedX;

        if(this.leftMoving){
            speedX = this.forceX * deltaTime;
        } else if(this.rightMoving){
            speedX = -this.forceX * deltaTime;
        } 
        // else {
        //     console.log('stop')
        //     speedX = 0
        // }

        const force = v3(speedX,0,this.forceY * deltaTime);
        this.rigidBody.applyForce(force);
        this.leftMoving = false;
        this.rightMoving = false;
    }

    update(deltaTime: number) {
        this.applyForce(deltaTime);

    }
}


