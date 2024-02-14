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
    } else {
      n.next = this.head;
      this.head.prev = n;
      this.head = n;
    }
    this.size++;
  }
  pushE(v) {
    var n = new node(v);
    var c = this.head;
    while (c.next != null) {
      c = c.next;
    }
    c.next = n;
    n.prev = c;
    this.size++;
  }
  popB() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }
  print() {
    var c = this.head;
    while (c.next != null) {
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
z.pushB(40);
z.pushB(10);
z.pushE(50);
z.popB();
// z.popB();
z.print();
