// 14. Longest Common Prefix
public class Solution {
    public string LongestCommonPrefix(string[] input) 
    {
        int i = 0;
        StringBuilder sb = new();
        // Finds the shortest string and puts it in first 
        string shortest = input.OrderBy(s => s.Length).First();

        foreach(char c in shortest)
        {
            if (input.Any(s => s[i] != c))
                break;
            sb.Append(c);
            i++;
        }
        return sb.ToString();
    }
}
