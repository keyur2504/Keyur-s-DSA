class node {
  constructor(v) {
    this.value = v;
    this.next = null;
    this.prev = null;
  }
}
class linklist {
  constructor() {
    this.head = null;

    this.size = 0;
  }
  isEmpty() {
    if (this.size == 0) {
      return 1;
    }
  }
  sizefor() {
    return this.size;
  }
  pushB(v) {
    var n = new node(v);
    if (this.isEmpty()) {
      this.head = n;
      this.head.prev = this.head;
      this.head.next = this.head;
    } else {
      var temp = this.head.prev;
      n.next = this.head;
      this.head.prev = n;
      n.prev = temp;
      temp.next = n;

      this.head = n;
    }
    this.size++;
    // console.log(this.head);
  }
  print() {
    var c = this.head;
    while (c.next != this.head) {
      console.log(c.value);
      c = c.next;
    }
    console.log(c.value);
  }
}

var z = new linklist();

z.pushB(10);
z.pushB(20);
z.pushB(30);

z.print();
