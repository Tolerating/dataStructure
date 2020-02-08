/* 栈 */
class Stack{
    constructor(){
        // 栈的属性
        this.items = [];
    }
    // 元素入栈
    // element:要入栈的元素
    push(element){
        this.items.push(element);
    }
    // 元素出栈
    pop(){
        this.items.pop();
    }
    // 查看栈顶元素
    peek(){
        this.items[this.items.length-1];
    }
    // 判断栈结构是否为空
    isEmpty(){
        return this.items.length === 0;
    }
    // 返回栈结构的元素个数
    size(){
        return this.items.length;
    }

    // 将栈结构的内容以字符形式返回
    toString(){
        return this.items.toString();
    }
    
}