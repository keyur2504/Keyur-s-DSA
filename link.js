class node {
  constructor(v) {
    this.value = v;
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
  sizefor() {
    return this.size;
  }
  pushB(v) {
    var n = new node(v);
    if (this.isEmpty()) {
      this.head = n;
      this.size++;
    } else {
      n.next = this.head;
      this.head = n;
      this.size++;
    }
  }
  pushE(v) {
    var n = new node(v);
    var c = this.head;
    if (this.isEmpty()) {
      this.head = n;
      this.size++;
    } else {
      while (c.next != null) {
        c = c.next;
      }
      c.next = n;
      this.size++;
    }
  }
  pushspl(v, pos) {
    var n = new node(v);
    // var pos=0
    if (this.isEmpty()) {
      pushB(v);
    } else if (this.sizefor() + 1 == pos) {
      pushE(v);
    } else {
      var c = this.head;
      var i = 0;

      while (i < pos - 2) {
        c = c.next;
        i++;
      }
      var temp = c.next;
      n.next = temp;
      c.next = n;
    }
  }
  popspl(pos) {
    // var n = new node(pos);
    var c = this.head;
    var b = this.head;
    var i = 0;
    if (this.isEmpty()) {
      this.pushB();
    }
    while (i < pos - 1) {
      // this.head = n;
      c = c.next;
      i++;
    }
    console.log("c:", c);
    var temp = c.next;
    console.log("temp:", temp);
    // c = undefined;
    var j = 0;
    while (j < pos - 2) {
      b = b.next;
      j++;
    }
    console.log("b:", b);
    b.next = temp;
    console.log("b.next temp:", temp);
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
z.pushE(10);
z.pushE(20);
z.pushE(30);
z.pushE(40);
z.pushE(5);
z.popspl(2);
// z.pushspl(25)

// console.log(z);

z.print();
