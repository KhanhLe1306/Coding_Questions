partial class Program{
    static int PivotIndex(int[] nums) {
        for (int i = 0; i < nums.Length; i++){
        int leftSum = 0;
        for (int j = 0; j < i; j++){
            leftSum += nums[j];
        }

        int rightSum = 0;
        for (int j = i + 1; j < nums.Length; j++){
            rightSum += nums[j];
        }

        if (leftSum == rightSum) return i;
        }
        return -1;
    }
}