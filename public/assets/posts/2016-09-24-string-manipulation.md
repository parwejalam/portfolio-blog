 ---
layout: post
title:  "String manipulation in C#"
date:   2016-09-24
desc: "string manipulation"
keywords: "csharp, string, regex"
categories: [csharp]
tags: [csharp]
icon: icon-csharp
---

## Preface
Some code help to search, replace, remove string.

Strings are *immutable* in managed code, it is not possible (without using unsafe code) to modify the value of a string object after it has been
created. However, there are many ways to modify the value of a string and store the result in a new string object. The *System.String*class
provides methods that operate on an input string and return a new string object. In many cases, you can assign the new object to the variable
that held the original string.
The *System.Text.RegularExpressions.Regex* class provides additional methods that work in a similar manner.
The *System.Text.StringBuilder* class provides a character buffer that you can modify "in-place." You call
the *StringBuilder.ToString* method to create a new string object that contains the current contents of the
buffer.

## Example

The following example shows various ways to replace or remove substrings
in a specified string.

``` csharp

class ReplaceSubstrings
{
    string searchFor;
    string replaceWith;
    
    static void Main(string[] args)
    {
        ReplaceSubstrings app = new ReplaceSubstrings();
        string s = "The mountains are behind the clouds today.";
        
        // Replace one substring with another with String.Replace.
        // Only exact matches are supported.
        s = s.Replace("mountains", "peaks");
        Console.WriteLine(s);
        
        // Output: The peaks are behind the clouds today.
        // Use Regex.Replace for more flexibility.
        // Replace "the" or "The" with "many" or "Many".
        // using System.Text.RegularExpressions
        
        app.searchFor = "the"; // A very simple regular expression.
        app.replaceWith = "many";
        
        s = Regex.Replace(s, app.searchFor, app.ReplaceMatchCase,
        RegexOptions.IgnoreCase);
        Console.WriteLine(s);
        
        // Output: Many peaks are behind many clouds today.
        // Replace all occurrences of one char with another.
        s = s.Replace(' ', '_');
        Console.WriteLine(s);
        
        // Output: Many_peaks_are_behind_many_clouds_today.
        // Remove a substring from the middle of the string.
        string temp = "many_";
        int i = s.IndexOf(temp);
        
        if (i &gt;= 0)
        {
            s = s.Remove(i, temp.Length);
        }
        Console.WriteLine(s);
        
        // Output: Many_peaks_are_behind_clouds_today.
        // Remove trailing and leading whitespace.
        // See also the TrimStart and TrimEnd methods.
        string s2 = " I'm wider than I need to be. ";
        
        // Store the results in a new string variable.
        temp = s2.Trim();
        Console.WriteLine(temp);
        
        // Output: I'm wider than I need to be.
        // Keep the console window open in debug mode.
        Console.WriteLine("Press any key to exit");
        Console.ReadKey();
    }

    // Custom match method called by Regex.Replace
    // using System.Text.RegularExpressions
    string ReplaceMatchCase(Match m)
    {
        // Test whether the match is capitalized
        if (Char.IsUpper(m.Value[0]) == true)
        {
            // Capitalize the replacement string
            // using System.Text;
            StringBuilder sb = new StringBuilder(replaceWith);
            sb[0] = (Char.ToUpper(sb[0]));
            
            return sb.ToString();
        }
        else
        {
            return replaceWith;
        }
    }
}

```

# Example

To access the individual characters in a string by using array notation, you can use the *StringBuilder* object, which overloads
the **\[\]** operator to provide access to its internal character buffer.
You can also convert the string to an array of chars by using the *ToCharArray* method. The following example uses **ToCharArray** to
create the array. Some elements of this array are then modified. A string constructor that takes a char array as an input parameter is then
called to create a new string.

``` csharp

class ModifyStrings
{
    static void Main()
    {
        string str = "The quick brown fox jumped over the fence";
        System.Console.WriteLine(str);
        char[] chars = str.ToCharArray();
        int animalIndex = str.IndexOf("fox");
        if (animalIndex != -1)
        {
            chars[animalIndex++] = 'c';
            chars[animalIndex++] = 'a';
            chars[animalIndex] = 't';
        }
        
        string str2 = new string(chars);
        System.Console.WriteLine(str2);
        // Keep the console window open in debug mode
        System.Console.WriteLine("Press any key to exit.");
        System.Console.ReadKey();
    }
}

/* Output:

The quick brown fox jumped over the fence

The quick brown cat jumped over the fence

*/

```