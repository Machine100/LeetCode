
def twoSum(self, nums, target):
	"""
	:type nums: List[int]
	:type target: int
	:rtype: List[int]
	"""
        
	length = len(nums)
	for i in nums:
		for j in nums+1:
			sum= nums[i] + nums[j]
				if sum = target:
					somehow break both loops
	return (i,j)

list nums = [1,2,3,4,5,6,7,8,9]
int target = 11


print (twosum(array, target))