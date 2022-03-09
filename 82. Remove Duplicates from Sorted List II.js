/* 
Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.


Example 1:

Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]


Example 2:

Input: head = [1,1,1,2,3]
Output: [2,3]

Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  if (!head) return null

  let dummy = new ListNode(-Infinity, head)
  let previous = dummy
  let current = head
  let next = current.next

  while (current) {
    if (current && next && current.val === next.val) {
      while (next && current.val === next.val) {
        next === next.next
      }

      previous.next = next
      current = next
      next = next ? next.next : null
    } else {
      previous = current
      current = next
      next = next ? next.next : null
    }
  }

  return dummy.next
}
