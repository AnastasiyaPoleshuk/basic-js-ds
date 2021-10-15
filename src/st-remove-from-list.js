const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */


module.exports = function removeKFromList(l, k) {
  
  if(l.value == k){
    l = l.next
  }

  l = removeNode(l, k);
  return l;
}

function removeNode(node, k) {
  if (!node) {
    return null;
  }

  if (k != node.value) {
    node.next = removeNode(node.next, k);
    return node;
  } else {
      let prev = node;
      node= node.next
      prev.next =  node.next;
      return node;
  }
}