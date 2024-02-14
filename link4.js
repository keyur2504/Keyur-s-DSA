class node {
  constructor(value) {
    this.value = value;
    this.next = null;
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
  pushB(value) {
    if (this.isEmpty()) {
      this.head = n;
    }

    var c = this.head;
    while (c) {
      if (c.value === value) {
        alert("invalid");
        return;
      }
      c = c.next;
    }
    var n = new node(value);
    n.next = this.head;
    this.head = n;
    this.size++;
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
z.pushB(50);
z.print();
