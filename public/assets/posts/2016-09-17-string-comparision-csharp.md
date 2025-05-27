---
layout: post
title:  "String comparision in C#"
date:   2016-09-17
desc: "Performance considerations"
keywords: "csharp, performance"
categories: [csharp]
tags: [csharp]
icon: icon-csharp
---

## Preface
I was thinking about to write a blog from quite a time. so, finally it is the end of my wait. You are reading my first blog. I want to choose the simplest yet most usable topic. I was looking for threading and performance considerations, there i find myself asking me questions regarding string comparision. Although, i understand and use them frequently but sometimes i feel like to check out them before use.

### Learnings
* String comparision
* String comparsions in Collection, Dictionary

String is basic data-structure we do use in our simplest to any level of programs. When you compare strings, you are producing a result that says one string is greater than or less than the other, or that the two strings are equal. The rules by which the result is determined are different depending on whether you are performing ordinal comparison or culture-sensitive comparison. It is important to use the correct kind of comparison for the specific task. 

Use basic ordinal comparisons when you have to compare or sort the values of two strings without regard to linguistic (culture) conventions. A basic ordinal comparison (**System.StringComparison.Ordinal**) is **case-sensitive**, which means that the two strings must match character for character: **"and" does not equal "And" or "AND"**. A frequently-used variation is **System.StringComparison.OrdinalIgnoreCase**, which will **match "and", "And", and "AND"**. StringComparison.OrdinalIgnoreCase is often used to compare file names, path names, network paths, and any other string whose value does not change based on the locale of the user's computer. 

Culture-sensitive comparisons are typically used to compare and sort strings that are input by end users, because the characters and sorting conventions of these strings might vary depending on the locale of the user's computer. Even strings that contain identical characters might sort differently depending on the culture of the current thread.

> When you compare strings, you should use the methods that explicitly specify what kind of comparison you intend to perform. This makes your code much more maintainable and readable. Whenever possible, use the overloads of the methods of the **System.String** and **System.Array** classes that take a **StringComparison** enumeration parameter, so that you can specify which type of comparison to perform. It is best to avoid using the == and != operators when you compare strings. Also, avoid using the **String.CompareTo** instance methods because none of the overloads takes a StringComparison.

### Example
The following example shows how to correctly compare strings whose values will not change based on the locale of the user's computer. In addition, it also demonstrates the string interning feature of C#. When a program declares two or more identical string variables, the compiler stores them all in the same location. By calling the **ReferenceEquals** method, you can see that the two strings actually refer to the same object in memory. Use the **String.Copy** method to avoid interning, as shown in the example.

``` csharp

// Internal strings that will never be localized.
string root = @"C:\users";
string root2 = @"C:\Users";

// Use the overload of the Equals method that specifies a StringComparison.
// Ordinal is the fastest way to compare two strings.
bool result = root.Equals(root2, StringComparison.Ordinal);

Console.WriteLine("Ordinal comparison: {0} and {1} are {2}", root, root2,
                    result ? "equal." : "not equal.");

// To ignore case means "user" equals "User". This is the same as using
// String.ToUpperInvariant on each string and then performing an ordinal comparison.
result = root.Equals(root2, StringComparison.OrdinalIgnoreCase);
Console.WriteLine("Ordinal ignore case: {0} and {1} are {2}", root, root2,
                     result ? "equal." : "not equal.");

// A static method is also available.
bool areEqual = String.Equals(root, root2, StringComparison.Ordinal);


// String interning. Are these really two distinct objects?
string a = "The computer ate my source code.";
string b = "The computer ate my source code.";

// ReferenceEquals returns true if both objects
// point to the same location in memory.
if (String.ReferenceEquals(a, b))
    Console.WriteLine("a and b are interned.");
else
    Console.WriteLine("a and b are not interned.");

// Use String.Copy method to avoid interning.
string c = String.Copy(a);

if (String.ReferenceEquals(a, c))
    Console.WriteLine("a and c are interned.");
else
    Console.WriteLine("a and c are not interned.");

// Output:
// Ordinal comparison: C:\users and C:\Users are not equal.
// Ordinal ignore case: C:\users and C:\Users are equal.
// a and b are interned.
// a and c are not interned.

```

### Example
The following example shows how to compare strings the preferred way by using the System.String methods that take a StringComparison enumeration.

```csharp

// "They dance in the street."
// Linguistically (in Windows), "ss" is equal to 
// the German essetz: 'ß' character in both en-US and de-DE cultures.
string first = "Sie tanzen in die Straße."; 
string second = "Sie tanzen in die Strasse.";

Console.WriteLine("First sentence is {0}", first);
Console.WriteLine("Second sentence is {0}", second);

// Store CultureInfo for the current culture. Note that the original culture
// can be set and retrieved on the current thread object.
System.Threading.Thread thread = System.Threading.Thread.CurrentThread;
System.Globalization.CultureInfo originalCulture = thread.CurrentCulture;

// Set the culture to en-US.
thread.CurrentCulture = new System.Globalization.CultureInfo("en-US");

// For culture-sensitive comparisons, use the String.Compare 
// overload that takes a StringComparison value.
int i = String.Compare(first, second, StringComparison.CurrentCulture);
Console.WriteLine("Comparing in {0} returns {1}.", originalCulture.Name, i);

// Change the current culture to Deutch-Deutchland.
thread.CurrentCulture = new System.Globalization.CultureInfo("de-DE");
i = String.Compare(first, second, StringComparison.CurrentCulture);
Console.WriteLine("Comparing in {0} returns {1}.", thread.CurrentCulture.Name, i);

// For culture-sensitive string equality, use either StringCompare as above
// or the String.Equals overload that takes a StringComparison value.
thread.CurrentCulture = originalCulture;
bool b = String.Equals(first, second, StringComparison.CurrentCulture);
Console.WriteLine("The two strings {0} equal.", b == true ? "are" : "are not");

/*
 * Output:
    First sentence is Sie tanzen in die Straße.
    Second sentence is Sie tanzen in die Strasse.
    Comparing in en-US returns 0.
    Comparing in de-DE returns 0.
    The two strings are equal.
 */

```

### Example
The following example shows how to sort and search for strings in an array in a culture-sensitive manner by using the static **Array** methods that take a **System.StringComparer** parameter.

```csharp

class SortStringArrays
{
    static void Main()
    {

        string[] lines = new string[]
        {
            @"c:\public\textfile.txt",
            @"c:\public\textFile.TXT",
            @"c:\public\Text.txt",
            @"c:\public\testfile2.txt"
        };

        Console.WriteLine("Non-sorted order:");
        foreach (string s in lines)
        {
            Console.WriteLine("   {0}", s);
        }

        Console.WriteLine("\n\rSorted order:");

        // Specify Ordinal to demonstrate the different behavior.
        Array.Sort(lines, StringComparer.Ordinal);

        foreach (string s in lines)
        {
            Console.WriteLine("   {0}", s);
        }


        string searchString = @"c:\public\TEXTFILE.TXT";
        Console.WriteLine("Binary search for {0}", searchString);
        int result = Array.BinarySearch(lines, searchString, StringComparer.OrdinalIgnoreCase);
        Console.WriteLine("{0} {1}", result > 0 ? "Found" : "Did not find", searchString);

        // Keep the console window open in debug mode.
        System.Console.WriteLine("Press any key to exit.");
        System.Console.ReadKey();
    }
}
/*
 * Output:
    Non-sorted order:
       c:\public\textfile.txt
       c:\public\textFile.TXT
       c:\public\Text.txt
       c:\public\testfile2.txt

    Sorted order:
       c:\public\Text.txt
       c:\public\testfile2.txt
       c:\public\textFile.TXT
       c:\public\textfile.txt
    Binary search for c:\public\TEXTFILE.TXT
    Found at index 2.
 */

```

Collection classes such as System.Collections.Hashtable, System.Collections.Generic.Dictionary<TKey, TValue>, and System.Collections.Generic.List<T> have constructors that take a System.StringComparer parameter when the type of the elements or keys is string. 
In general, you should use these constructors whenever possible, and specify either **Ordinal** or **OrdinalIgnoreCase**.

<table class="table">
  <thead>
    <tr>
      <th>StringComparsionValue</th>
      <th>Data meaning</th>
      <th>Data behavior</th>
    </tr>
  </thead>
  <tbody>
    <tr scope="row">
      <td>Ordinal</td>
      <td>
            Case-sensitive internal identifiers
            Case sensitive identifiers in standards like XML and HTTP
             Case sensitive security-related settings
      </td>
      <td>
            A non-linguistic identifier, where bytes match exactly.
      </td>
    </tr>
    <tr scope="row">
          <td>OrdinalIgnoreCase</td>
          <td>
                Case-insensitive internal identifiers
                Case-insensitive identifiers in standards like XML and HTTP
                File paths
                Registry keys/values
                Environment variables
                Resource identifiers (handle names, for example)
                Case insensitive security related settings
          </td>
          <td>
                A non-linguistic identifier, where case is irrelevant, especially a piece of data stored in most Microsoft Windows system services.
          </td>
        </tr>
        <tr scope="row">
                  <td>
                  InvariantCulture
                  or
                  InvariantCultureIgnoreCase
                  </td>
                  <td>
                           Some persisted linguistically-relevant data
                        Display of linguistic data requiring a fixed sort order
                  </td>
                  <td>
                        Culturally-agnostic data, which still is linguistically relevant.
                  </td>
                </tr>
         <tr scope="row">
                   <td>
CurrentCulture
or
CurrentCultureIgnoreCase
                   </td>
                   <td>
    Data displayed to the user
   Most user input
                   </td>
                   <td>
   Data that requires local linguistic customs.
                   </td>
                 </tr>
</tbody>
</table>