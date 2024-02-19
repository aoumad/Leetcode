import { mergeTwoLists } from "./Merged_two_sorted_list";

 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }



function mergeKLists(lists: Array<ListNode | null>): ListNode | null
{
    let interval =  1;
    while (interval < lists.length)
    {
        for (let i = 0; i < lists.length - interval; i += interval * 2)
        {
            lists[i] = mergeTwoLists(lists[i], lists[i + interval]);

        }
        interval *= 2;
    }
    return (lists.length > 0 ? lists[0]: null);
};