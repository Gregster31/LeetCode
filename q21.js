/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = val===undefined ? 0 : val
    this.next = next===undefined ? null : next
}

var mergeTwoLists = function(list1, list2) {
    // Starting point of merged list
    let dummy_list = new ListNode()
    let current_node = dummy_list

    // Iterate through both list until one becomes None
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            current_node.next = list1
            list1 = list1.next
        } else {
            current_node.next = list2
            list2 = list2.next
        }
        current_node = current_node.next
    } 
    current_node.next = list1 || list2;

    return dummy_list.next

};
