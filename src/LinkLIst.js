/* 链表 */
class LinkList{

    constructor(){
        this.head = null;
        this.length = 0;    //存放链表中元素的个数
    }

    /* 
    链表常见的操作:
    1.append(element): 向列表尾部添加一个新的节点
    2.insert(position,element): 向列表的特定位置插入一个新的节点
    3.get(position): 获取对应位置的元素
    4.indexOf(element): 返回元素在列表中的索引。如果列表中没有范元素返回-1
    5.update(position,element):修改某个位置的元素
    6.removeAt(position): 从列表中的特定位置移除一项
      remove(element): 从列表中删除一项
    7.isEmpty():判断链表是否为空
    8.size(): 返回链表包含的元素个数
    9.toString():将链表中的节点转换成字符串返回
    */

    // append(element): 向列表尾部添加一个新的节点
    append(element){
        let newNode = new Node(element);
        // 判断是否添加的是第一个节点
        if (this.length === 0) {
            this.head = newNode;
        }else{
            let current = this.head;
            // 判断节点指向的下一个节点的next属性是否为null
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length +=1;
    }

    // insert(position,element): 向列表的特定位置插入一个新的节点
    // position从小标0开始
    insert(position,data){
        if(position < 0 || position > this.length){
            return false;
        }
        // if (LinkList.judgePosition(position)) {
        //     return false;
        // }
        let node = new Node(data);
        if (position === 0) {
            node.next = this.head;
            this.head = node;
        }else{
            let index = 0;
            let current = this.head;
            let previous = null;
            while(index++ < position){
                previous = current;
                current = current.next;
            }
            node.next = current;
            previous.next = node;
        }
        this.length +=1;
        return true;
    }

    // get(position): 获取对应位置的元素
    // position从下标0开始
    get(position){
        if(position < 0 || position >= this.length){
            return false;
        }
        // if (LinkList.judgePosition(position)) {
        //     return false;
        // }
        let index = 0;
        // let listString = "";
        let current = this.head;
        while (index++ < position) {
            current = current.next;
        }
        return current.data;

    }

    // indexOf(element): 返回元素在列表中的索引。如果列表中没有范元素返回-1
    indexOf(element){
        let current = this.head;
        let index = 0;
        while(current){
            if (current.data == element) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }

    // update(position,element):修改某个位置的元素
    update(position,element){
        if(position < 0 || position >= this.length){
            return false;
        }
        // if (LinkList.judgePosition(position)) {
        //     return false;
        // }
        let index = 0;
        let current = this.head;
        while (index++ < position) {
            current = current.next;
        }
        current.data = element;
        return current.data;
    }

    // removeAt(position): 从列表中的特定位置移除一项
    removeAt(position){
        if(position < 0 || position >= this.length){
            return false;
        }
        if (position === 0) {
            this.head = this.head.next
        }else{
            let index = 0;
            let current = this.head;
            let previous = null;
            while (index++ < position) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
            
            
        }
        this.length -=1;
        return true;
    }

    // remove(element): 从列表中删除一项
    remove(element){
        let index = this.indexOf(element);
        return this.removeAt(index);
    }

    // isEmpty():判断链表是否为空
    isEmpty(){
        return this.length === 0;
    }
    // size(): 返回链表包含的元素个数.
    size(){
        return this.length;
    }
    // toString():将链表中的节点转换成字符串返回
    toString(){
        let current = this.head;
        let listString = "";
        while (current) {
            listString += current.data + ' ';
            current = current.next;
        }
        
        return listString;
    }

    static judgePosition(position){
        return position < 0 || position > this.length
    }
}

/* 节点类 */
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }  
}


// 测试代码
let link = new LinkList();
link.append('hello');
link.append('world');
link.append("lk");
link.append("lk3");
console.log(link.remove('lk'));
console.log(link.toString());