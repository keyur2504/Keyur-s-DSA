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
  pushspl(v, pos) {
    var n = new node(v);

    if (pos < 1) {
      alert("Invalid position.");
      return;
    }

    if (pos === 1 || this.isEmpty()) {
      this.pushB(v);
    } else if (pos > this.sizefor() + 1) {
      this.pushE(v);
    } else {
      var c = this.head;
      var i = 0;

      while (i < pos - 2) {
        c = c.next;
        i++;
      }
      var temp = c.next;
      n.prev = c;
      n.next = temp;
      temp.prev = n;
      c.next = n;
      this.size++;
    }
  }
  popspl(pos) {
    var c = this.head;
    var i = 0;
    while (i < pos - 2) {
      c = c.next;
      i++;
    }
   var  temp = c.next;
    c.next = temp.next;
    temp = temp.next;
    temp.prev = c;
    this.size--;
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
z.pushE(60);
z.pushE(90);
// z.pushspl(100, 4);
z.popspl(2);
z.print();
