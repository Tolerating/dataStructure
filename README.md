## 栈
栈是一种受限的线性表，它的特点是后进先出（LIFO）

- 栈仅允许在表的一端进行插入和删除运算。这一端被称为栈顶，相对地，另一端称为栈底。
- 向一个栈插入新元素又称作进栈、入栈或压栈，它是把新元素放到栈顶元素的上面，使之称为新的栈顶元素；
- 从一个栈删除元素又称作出栈或退栈，它是把栈顶元素删除掉，使其相邻的元素成为新的栈顶元素。

**函数调用栈：**函数之间的调用是使用栈结构实现的。假设有A、B、C三个函数，调用次序为A-->B，B--->C。
首先是函数A执行后进栈，调用函数B后，B进栈，调用函数C后，C进栈，C函数执行完毕后出栈，然后是函数B执行完毕后出栈，最后是A。

## 队列
队列的特点是先进先出(FIFO)

## 链表
### 单向链表
链表是由头(头指针)和节点组成，节点包括一个数据区和一个地址域（指向下一个节点）

相对于数组，链表有一些优点：

- 内存空间不是必须连续的，可以充分利用计算机的内存，实现灵活的内存动态管理。
- 链表不必在创建时就确定大小，并且可以无限的延伸下去
- 链表在插入和删除数据时，效率更高

相对于数组，链表有一些缺点：

- 链表访问任何一个位置的元素时，都需要从头（即head）开始访问（无法跳过第一个元素访问任何一个元素）
- 无法通过下标直接访问元素，需要从头一个个访问，知道找到对应的元素。

### 双向链表
* 即可以从头遍历到尾，又可以从尾遍历到头
* 一个节点既有向前连接的引用，也有一个向后连接的引用
缺点：
* 每次在插入或删除某个节点时，需要处理四个引用，而不是两个。
* 并且相对于单向链表，必然占用内存空间更大一些
## 集合
集合通常是由一组无序的,不能重复的元素构成
集合是一个特殊的数组:
* 元素没有顺序,也不能重复
* 不能通过下标值进行访问
> ES6中已经有了集合这个数据结构,就是Set类

## 哈希表