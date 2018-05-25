const Queue = require('./structor').Queue;

// 例题1：基数排序
function baseSort(arr) {
  let queues = [],
      n = arr.length,
      nums = [];
  for(let i = 0; i < 10; i ++) {
    queues.push(new Queue());
  }
  function addNums(nums, queues, n, digit) {
    for (let i = 0; i < n; i++) {
      if (digit == 1) {
        queues[nums[i] % 10].enqueue(nums[i]);
      } else {
        queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
      }
    }
  }
  function collect(queues, nums) {
    let i = 0;
    for(let digit = 0; digit < 10; digit ++) {
      while(!queues[digit].empty()) {
        nums[i ++] = queues[digit].dequeue();
      }
    }
  }
  addNums(arr, queues, n, 1);
  collect(queues, nums);
  addNums(nums, queues, n, 10);
  collect(queues, nums);
  return nums;
}

