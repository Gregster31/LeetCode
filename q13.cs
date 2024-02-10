using System;
using System.Collections.Generic;

public class Solution {
    // Dict to easily convert the values
    Dictionary<char, int> romanValues = new Dictionary<char, int> 
    {
        {'I', 1},
        {'V', 5},
        {'X', 10},
        {'L', 50},
        {'C', 100},
        {'D', 500},
        {'M', 1000}
    };

    public int RomanToInt(string s) {
        int total = 0;
        int prevValue = 0;
        // Iterate through the string in reverse
        for (int i = s.Length - 1; i >= 0; i--) {
            int currValue = romanValues[s[i]];
            if (currValue >= prevValue) 
                total += currValue;
            else 
                total -= currValue;
            prevValue = currValue;
        }
        return total;
    }
}
