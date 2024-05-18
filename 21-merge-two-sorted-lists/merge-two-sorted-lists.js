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
var mergeTwoLists = function(list1, list2) {
     let list1Pointer = list1;
    let list2Pointer = list2;
    let mergedList = null;
    let tail = null;

    // Merge the lists
    while (list1Pointer!== null && list2Pointer!== null) {
        if (list1Pointer.val < list2Pointer.val) {
            if (mergedList === null) {
                mergedList = list1Pointer;
                tail = mergedList;
            } else {
                tail.next = list1Pointer;
                tail = tail.next;
            }
            list1Pointer = list1Pointer.next;
        } else {
            if (mergedList === null) {
                mergedList = list2Pointer;
                tail = mergedList;
            } else {
                tail.next = list2Pointer;
                tail = tail.next;
            }
            list2Pointer = list2Pointer.next;
        }
    }

    // Append the remaining nodes from list1
    if (list1Pointer!== null) {
        if (mergedList === null) {
            mergedList = list1Pointer;
        } else {
            tail.next = list1Pointer;
        }
    }

    // Append the remaining nodes from list2
    if (list2Pointer!== null) {
        if (mergedList === null) {
            mergedList = list2Pointer;
        } else {
            tail.next = list2Pointer;
        }
    }

    return mergedList;
};