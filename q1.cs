public class Solution
{
    public int[] TwoSum(int[] nums, int target)
    {
        Dictionary<int, int> numMap = new Dictionary<int, int>();
        for(int i=0;i<nums.Length;i++)
        {
            int comp = target - nums[i];
            if (numMap.ContainsKey(comp))
                return new int[] {numMap[comp],i};
            numMap[nums[i]] = i;
        }
        return new int[0];
    }
}
