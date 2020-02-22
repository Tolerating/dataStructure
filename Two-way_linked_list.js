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

    /* 
        向列表的特定位置(从零开始)插入一个新的项 
        position:索引从零开始
    */
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

    /* 
        获取对应位置的元素
        position:索引从零开始
    */
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
        let content = this.head;
        let index = 0; 
        while(element !== content.data){
            content = content.next;
            index+=1;
        }
        return index;
    }

    /* 
        修改某个位置的元素,返回修改后的元素 
        position:索引从零开始
    */
    update(position,element){
        if (position === 0) {
            this.head.data = element;
            return this.head;
        }else if(position === this.length - 1){
            this.tail.data = element;
            return this.tail;
        }else{
            let content = this.head;
            while(position > 0){
                content = content.next;
                position-=1;
            }
            content.data = element;
            return content;
        }
    }

    /* 
        从列表中的特定位置移除一项
        position:索引从零开始
    */
    removeAt(position){
        if (position === 0) {
            let content = this.head;
            let head = this.head.data;
            [content.next.prev,this.head] = [null,content.next];
            this.length-=1;
            return head;
        }else if(position === this.length - 1){
            let last = this.tail.data;
            let content = this.tail;
            [content.prev.next,this.tail] = [null,content.prev];
            this.length-=1;
            return last;
        }else{
            let content = this.head;
            while(position > 0){
                content = content.next;
                position-=1;
            }
            [content.prev.next,content.next.prev] = [content.next,content.prev];
            this.length-=1;
            return content.data;
        }
    }

    /* 从列表中移除一项 */
    remove(element){
        if(element === this.head.data){
            let content = this.head;
            [content.next.prev,this.head] = [null,content.next];
            this.length-=1;
            return content.data;
        }else if(element === this.tail.data){
            let content = this.head;
            [content.prev.next,this.tail] = [null,content.prev];
            this.length-=1;
            return content.data;
        }
        let content = this.head;
        while(element !== content.data){
            content = content.next;
        }
        [content.prev.next,content.next.prev] = [content.next,content.prev];
        this.length-=1;
        return content.data;
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

    valueOf(){
        return this;
    }

    /* forwardString() : 返回正向遍历的节点字符串形式 */
    forwardString(){
        return this.toString();
    }
    /* backwordString() : 返回反向遍历的节点字符串形式  */
    backwordString(){
        let str = [];
        let current = this.tail;
        while(current.prev !== null){
            str.push(current.data);
            current = current.prev;
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
// link.insert(2,'刘凯');
// console.log(link.remove("张三"));
console.log(link.backwordString());
// console.log(link.isEmpty());