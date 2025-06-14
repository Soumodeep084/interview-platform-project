export interface CodeQuestion {
    id: string;
    title: string;
    description: string;
    difficulty: "easy" | "medium" | "hard";
    examples: Array<{
        input: string;
        output: string;
        explanation?: string;
    }>;
    starterCode: {
        javascript: string;
        python: string;
        java: string;
    };
    constraints?: string[];
}

export const LANGUAGES = [
    { id: "javascript", name: "JavaScript", icon: "/javascript.png" },
    { id: "python", name: "Python", icon: "/python.png" },
    { id: "java", name: "Java", icon: "/java.png" },
] as const;

export const QUESTION_GROUPS: CodeQuestion[][] = [
    [
        {
            id: "two-sum",
            title: "Two Sum",
            description:
                "Given an array of integers `nums` and an integer `target`, return indices of the two numbers in the array such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.",
            difficulty: "easy",
            examples: [
                {
                    input: "nums = [2,7,11,15], target = 9",
                    output: "[0,1]",
                    explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]",
                },
                {
                    input: "nums = [3,2,4], target = 6",
                    output: "[1,2]",
                },
            ],
            starterCode: {
                javascript: `function twoSum(nums, target) {
    // Write your solution here
}`,
                python: `def two_sum(nums, target):
    # Write your solution here
    pass`,
                java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your solution here
          
    }
}`,
            },
            constraints: [
                "2 ≤ nums.length ≤ 104",
                "-109 ≤ nums[i] ≤ 109",
                "-109 ≤ target ≤ 109",
                "Only one valid answer exists.",
            ],
        },
        {
            id: "group-anagrams",
            title: "Group Anagrams",
            description:
                "Given an array of strings `strs`, group the anagrams together.",
            difficulty: "medium",
            examples: [
                {
                    input: "strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']",
                    output: "[['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]",
                },
            ],
            starterCode: {
                javascript: `function groupAnagrams(strs) {
    // Write your solution here    
}`,
                python: `def group_anagrams(strs):
    # Write your solution here
    pass`,
                java: `public List<List<String>> groupAnagrams(String[] strs) {
    // Write your solution here
          
}`,
            },
            constraints: [
                "1 ≤ strs.length ≤ 1000",
                "0 ≤ strs[i].length ≤ 100",
                "strs[i] consists of lowercase English letters.",
            ],
        },
        {
            id: "binary-tree-maximum-path-sum",
            title: "Binary Tree Maximum Path Sum",
            description:
                "Given a non-empty binary tree, find the maximum path sum. The path must be from one node to another, and it can be any path in the tree.",
            difficulty: "hard",
            examples: [
                {
                    input: "root = [1,2,3]",
                    output: "6",
                    explanation: "The maximum path sum is 6.",
                },
            ],
            starterCode: {
                javascript: `function maxPathSum(root) {
    // Write your solution here
    
}`,
                python: `def max_path_sum(root):
    # Write your solution here
    pass`,
                java: `public int maxPathSum(TreeNode root) {
    // Write your solution here
          
}`,
            },
            constraints: [
                "The number of nodes in the tree is in the range [1, 3 * 10^4].",
                "-1000 ≤ Node.val ≤ 1000",
            ],
        },
    ],

   [
        {
            id: "reverse-linked-list",
            title: "Reverse Linked List",
            description: "Reverse a singly linked list.",
            difficulty: "easy",
            examples: [
                {
                    input: "head = [1, 2, 3, 4, 5]",
                    output: "[5, 4, 3, 2, 1]",
                },
            ],
            starterCode: {
                javascript: `function reverseList(head) {
    // Write your solution here
    
  }`,
                python: `def reverse_list(head):
      # Write your solution here
      pass`,
                java: `public ListNode reverseList(ListNode head) {
          // Write your solution here
          
      }`,
            },
            constraints: [
                "The number of nodes in the list is in the range [0, 5000].",
                "-5000 ≤ Node.val ≤ 5000",
            ],
        },
        {
            id: "longest-substring-without-repeating-characters",
            title: "Longest Substring Without Repeating Characters",
            description:
                "Given a string `s`, find the length of the longest substring without repeating characters.",
            difficulty: "medium",
            examples: [
                {
                    input: "s = 'abcabcbb'",
                    output: "3",
                    explanation: "The answer is 'abc', with the length of 3.",
                },
                {
                    input: "s = 'bbbbb'",
                    output: "1",
                    explanation: "The answer is 'b', with the length of 1.",
                },
            ],
            starterCode: {
                javascript: `function lengthOfLongestSubstring(s) {
    // Write your solution here
    
  }`,
                python: `def length_of_longest_substring(s):
      # Write your solution here
      pass`,
                java: `public int lengthOfLongestSubstring(String s) {
          // Write your solution here
          
      }`,
            },
            constraints: [
                "0 ≤ s.length ≤ 5 * 10^4",
                "-1000 ≤ s[i] ≤ 1000",
            ],
        },
        {
            id: "word-ladder",
            title: "Word Ladder",
            description:
                "Given two words `beginWord` and `endWord`, and a dictionary's word list, find the length of the shortest transformation sequence from `beginWord` to `endWord`, such that only one letter can be changed at a time, and each transformed word must exist in the dictionary.",
            difficulty: "hard",
            examples: [
                {
                    input:
                        "beginWord = 'hit', endWord = 'cog', wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog']",
                    output: "5",
                    explanation:
                        "One shortest transformation sequence is 'hit' -> 'hot' -> 'dot' -> 'dog' -> 'cog', which is 5 words long.",
                },
            ],
            starterCode: {
                javascript: `function ladderLength(beginWord, endWord, wordList) {
    // Write your solution here
    
}`,
                python: `def ladder_length(begin_word, end_word, word_list):
      # Write your solution here
      pass`,
                java: `public int ladderLength(String beginWord, String endWord, List<String> wordList) {
          // Write your solution here
          
      }`,
            },
            constraints: [
                "1 ≤ beginWord.length ≤ 10",
                "1 ≤ endWord.length ≤ 10",
                "1 ≤ wordList.length ≤ 5000",
                "beginWord and endWord are distinct and have the same length.",
                "All words in the dictionary are of the same length.",
                "You may assume that all dictionary words are unique.",
            ],
        },
    ],

    [
        {
            id: "valid-parentheses",
            title: "Valid Parentheses",
            description:
                "Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
            difficulty: "easy",
            examples: [
                {
                    input: "s = '()'",
                    output: "true",
                },
                {
                    input: "s = '()[]{}'",
                    output: "true",
                },
            ],
            starterCode: {
                javascript: `function isValid(s) {
    // Write your solution here
    
  }`,
                python: `def is_valid(s):
      # Write your solution here
      pass`,
                java: `public boolean isValid(String s) {
          // Write your solution here
          
      }`,
            },
            constraints: [
                "1 ≤ s.length ≤ 10^4",
                "s consists of parentheses only.",
            ],
        },
        {
            id: "course-schedule",
            title: "Course Schedule (Topological Sort)",
            description:
                "There are a total of `numCourses` courses you have to take, labeled from 0 to `numCourses - 1`. Some courses may have prerequisites, for example, to take course 0 you have to first take course 1, which is expressed as a pair `[0,1]` meaning that course 0 depends on course 1. Given the total number of courses and a list of prerequisite pairs, return true if you can finish all courses.",
            difficulty: "medium",
            examples: [
                {
                    input:
                        "numCourses = 2, prerequisites = [[1,0]]",
                    output: "true",
                    explanation: "There are two courses in total. After taking course 0, you can take course 1.",
                },
            ],
            starterCode: {
                javascript: `function canFinish(numCourses, prerequisites) {
    // Write your solution here
    
  }`,
                python: `def can_finish(num_courses, prerequisites):
      # Write your solution here
      pass`,
                java: `public boolean canFinish(int numCourses, int[][] prerequisites) {
          // Write your solution here
          
      }`,
            },
            constraints: [
                "The number of courses is in the range [1, 100].",
                "0 ≤ prerequisites.length ≤ 5000",
                "prerequisites[i].length == 2",
                "0 ≤ prerequisites[i][0], prerequisites[i][1] < numCourses",
            ],
        },
        {
            id: "median-of-two-sorted-arrays",
            title: "Median of Two Sorted Arrays",
            description:
                "Given two sorted arrays `nums1` and `nums2`, return the median of the two sorted arrays.",
            difficulty: "hard",
            examples: [
                {
                    input: "nums1 = [1,3], nums2 = [2]",
                    output: "2.0",
                },
                {
                    input: "nums1 = [1,2], nums2 = [3,4]",
                    output: "2.5",
                },
            ],
            starterCode: {
                javascript: `function findMedianSortedArrays(nums1, nums2) {
    // Write your solution here
    
  }`,
                python: `def find_median_sorted_arrays(nums1, nums2):
      # Write your solution here
      pass`,
                java: `public double findMedianSortedArrays(int[] nums1, int[] nums2) {
          // Write your solution here
          
      }`,
            },
            constraints: [
                "nums1.length == nums2.length",
                "nums1[i] ≤ nums2[i]",
            ],
        },
    ],

    [
        {
            id: "merge-two-sorted-lists",
            title: "Merge Two Sorted Lists",
            description:
                "Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.",
            difficulty: "easy",
            examples: [
                {
                    input: "l1 = [1,2,4], l2 = [1,3,4]",
                    output: "[1,1,2,3,4,4]",
                },
            ],
            starterCode: {
                javascript: `function mergeTwoLists(l1, l2) {
      // Write your solution here
      
    }`,
                python: `def merge_two_lists(l1, l2):
        # Write your solution here
        pass`,
                java: `public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
            // Write your solution here
            
        }`,
            },
            constraints: [
                "The number of nodes in each list is in the range [0, 50].",
                "-100 ≤ Node.val ≤ 100",
            ],
        },
        {
            id: "number-of-islands",
            title: "Number of Islands (DFS/BFS)",
            description:
                "Given an `m x n` 2D binary grid map of 1's (land) and 0's (water), count the number of islands. An island is surrounded by water, and it is formed by connecting adjacent lands horizontally or vertically.",
            difficulty: "medium",
            examples: [
                {
                    input: "grid = [['1','1','1','1','0'],['1','1','0','1','0'],['1','1','0','0','0'],['0','0','0','0','0']]",
                    output: "1",
                },
            ],
            starterCode: {
                javascript: `function numIslands(grid) {
      // Write your solution here
      
    }`,
                python: `def num_islands(grid):
        # Write your solution here
        pass`,
                java: `public int numIslands(char[][] grid) {
            // Write your solution here
            
        }`,
            },
            constraints: [
                "m == grid.length",
                "n == grid[i].length",
                "1 ≤ m, n ≤ 300",
                "grid[i][j] is '0' or '1'.",
            ],
        },
        {
            id: "serialize-and-deserialize-binary-tree",
            title: "Serialize and Deserialize Binary Tree",
            description:
                "Design an algorithm to serialize and deserialize a binary tree. A binary tree can be serialized to a string, and the tree can be deserialized back to its original structure from that string.",
            difficulty: "hard",
            examples: [
                {
                    input: "root = [1,2,3,null,null,4,5]",
                    output: "Serialized: '1,2,3,null,null,4,5'; Deserialized: [1,2,3,null,null,4,5]",
                },
            ],
            starterCode: {
                javascript: `function serialize(root) {
      // Write your solution here
      
    }
    
    function deserialize(data) {
      // Write your solution here
    }`,
                python: `class Codec:
        def serialize(self, root):
            # Write your solution here
            pass
    
        def deserialize(self, data):
            # Write your solution here
            pass`,
                java: `public class Codec {
        public String serialize(TreeNode root) {
            // Write your solution here
            
        }
    
        public TreeNode deserialize(String data) {
            // Write your solution here
            
        }
    }`,
            },
            constraints: [
                "The number of nodes in the tree is in the range [0, 104].",
                "Do not use any built-in library for serialization/deserialization.",
            ],
        },
    ],
];




