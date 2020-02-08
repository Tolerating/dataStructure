/* 队列 */
class Queue{
    constructor(){
        this.items=[];
    }

    //enqueu(element):向队列尾部添加一个(或多个新的项)
    enqueue(elements){
        this.items.push(elements);
    }

    //dequeue(): 移除队列的第一项(即排在队列最前面的项),并返回被移除的元素
    dequeue(){
        return this.items.shift();
    }
    //front():返回队列中第一个元素
    front(){
        return this.items[0];
    }
    //isEmpty(): 如果队列中不包含任何元素,返回true,否则返回false
    isEmpty(){
        return this.items.length === 0;
    }
    //size(): 返回队列包含的元素个数
    size(){
        return this.items.length;
    }
    //toString(): 将队列中的内容,转成字符串形式
    toString(){
        return this.items.toString();
    }
}


// 击鼓传花游戏规则
/* 
几个朋友一起玩一个游戏,围成一圈,开始数数,数到某个数字的人自动淘汰.
最后剩下的这个人会自动获胜
*/
function passGame(nameList,num){
    let queue = new Queue();
    nameList.forEach(element => {
        console.log('名字:',element);
        queue.enqueue(element);
    });
    while(queue.size() > 1){
        for (let i = 0; i < num -1; i++) {
            queue.enqueue(queue.dequeue());            
        }
        queue.dequeue();
    }
    console.log(queue.front());
}
let nameList = ['Lilei','Jake','Davi','Jhon','Jiao'];
passGame(nameList,3);