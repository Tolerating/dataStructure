/* 双向链表 */
/* 双向链表常见操作 
1. append(element) : 向列表尾部添加一个新的项
2. insert(position,element) : 向列表的特定位置(从零开始)插入一个新的项
3. get(position) : 获取对应位置的元素
4. indexOf(element) : 返回元素在列表中的索引。如果列表中没有该元素返回-1
5. update(position,element) : 修改某个位置的元素
6. removeAt(position) : 从列表中的特定位置移除一项
7. remove(element) : 从列表中移除一项
8. isEmpty() : 如果链表中不包含任何元素,返回true,如果链表长度大于0则返回false
9. size() : 返回链表包含元素的个数
10.toString() : 输出链表中的元素的值
11.forwardString() : 返回正向遍历的节点字符串形式
12.backwordString() : 返回反向遍历的节点字符串形式 
*/
class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /* 向列表尾部添加一个新的项 */
    append(element){
        let newNode = new Node(element);
        if(this.length === 0){
            [this.head,this.tail,this.length] = [newNode,newNode,1]
        }else{
            let current = this.head;
            while(current.next !== null){
                current = current.next;
            }
            this.length+=1;
            [current.next,newNode.prev,this.tail] = [newNode,current,newNode];
        }
    }

    /* 向列表的特定位置(从零开始)插入一个新的项 */
    insert(position,element){
        let newNode = new Node(element);
        if(this.length === 0){
            [this.head,this.tail,this.length] = [newNode,newNode,1]
        }else if(position === this.length - 1){
            let last = this.tail;
            [last.next,newNode.prev] = [newNode,last];
            this.length+=1;
        }else if(position === 0){
            let fir = this.head;
            [fir.prev,newNode.next] = [newNode,fir];
            this.length+=1;
        }else{
            let content = this.head;
            while(position > 0){
                content = content.next;
                position-=1;
            }
            let front = content.prev;
            [front.next,newNode.prev,newNode.next,content.prev] = [newNode,front,content,newNode];
            this.length+=1;
        }
    
    }

    /* 获取对应位置的元素 */
    get(position){
        if(position === 0){
            return this.head;
        }else if(position === this.length - 1){
            return this.tail;
        }else{
            let content = this.head;
            while(position > 0){
                content = content.next;
                position-=1;
            }
            return content;
        }
    }

    /* 返回元素在列表中的索引。如果列表中没有该元素返回-1 */
    indexOf(element){

    }

    /* 判断链表是否为空 */
    isEmpty(){
        return this.length === 0;
    }
    /* 返回链表包含元素的个数 */
    size(){
        return this.length;
    }

    /* 输出链表中的元素的值 */
    toString(){
        let str = [];
        let current = this.head;
        while(current.next !== null){
            str.push(current.data);
            current = current.next;
        }
        str.push(current.data);
        return str.valueOf();
    }
}

/* 节点类 */
class Node{
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }  
}

let link = new DoubleLinkedList();
link.append('张三');
link.append('张三1');
link.append('张三2');
link.append(1234685);
link.insert(2,'刘凯');
console.log(link.toString());
console.log(link.get(1));
// console.log(link.isEmpty());