class node {
  constructor(v) {
    this.value = v;
    this.left = null;
    this.right = null;
  }
}

class tree {
  constructor() {
    this.root = null;
  }

  insert(a) {
    var n = new node(a);
    if (this.root == null) {
      this.root = n;
    } else {
      if (a < this.root.value) {
        if (this.root.left == null) this.root.left = n;
        else this.insertleft(this.root.left, n);
      } else {
        if (this.root.right == null) this.root.right = n;
        else this.insertright(this.root.right, n);
      }
    }
  }

  insertleft(leftnode, n) {
    if (n.value < leftnode.value) {
      if (leftnode.left == null) leftnode.left = n;
      else this.insertleft(leftnode.left, n);
    } else {
      if (leftnode.right == null) leftnode.right = n;
      else this.insertleft(leftnode.right, n);
    }
  }

  insertright(rightnode, n) {
    if (n.value < rightnode.value) {
      if (rightnode.left == null) rightnode.left = n;
      else this.insertright(rightnode.left, n);
    } else {
      if (rightnode.right == null) rightnode.right = n;
      else this.insertright(rightnode.right, n);
    }
  }

  search(v) {
    if (this.root >= v) {

      searchV(this.root.left, v);

    } else if (this.root <= v) {

      serchV(this.root.right, v);
      
    } else {
      alert("Pleas enter Value");
    }
  }

  serchV(z, v) {
    if (z.value >= v) {
      if (z.v == v) {
        alert("Found");
      } else {
        serchV(this.root.left, v);
      }
    } else if (z.v <= v) {
      serchV(z.right, v);
    } else {
      alert("Not found");
    }
  }
}

function inorder(root) {
  if (root) {
    inorder(root.left);
    console.log(root.value);
    inorder(root.right);
  }
}

let myTree = new tree();
myTree.insert(5);
myTree.insert(3);
myTree.insert(7);
myTree.insert(70);
myTree.insert(10);
myTree.insert(2);
myTree.insert(15);
myTree.search(70);

inorder(myTree.root, 2);
console.log(myTree);
