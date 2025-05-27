---
layout: post
title:  "Performance considerations in c#"
date:   2016-09-17
desc: "Performance considerations"
keywords: "csharp, performance"
categories: [csharp]
tags: [csharp]
icon: icon-csharp
---


The term performance generally refers to the execution speed of a program. You can sometimes increase execution speed by following certain basic rules in your source code. 

When you measure and optimize for performance, you should follow these general guidelines:
Start by setting performance goals and measuring the program's performance to determine when your code is not meeting those goals.
Write your code initially so that it is correct, follows good design principles, and clearly expresses your intent. Optimize later only if you determine that it is not meeting the performance goals. Code that is optimized for performance is often more difficult to read and maintain. It is generally better to write code that is readable, robust, and maintainable even if it is slightly slower than the most optimized code that you could write.
If you must optimize, start with the slowest parts of your program first. If you determine that a program is not meeting performance goals, identify the specific locations where performance can be improved, and which performance issues are primary causes of the problem. It usually does not make sense to optimize a method that is called rarely, or to optimize method A to run in under 50 milliseconds if the program as a whole has to wait 30 seconds for method B to run on another thread.

**Boxing and Unboxing**

It is best to avoid using value types in situations where they must be boxed a high number
 of times, for example in non-generic collections classes such as System.Collections.ArrayList. You can avoid boxing of value types by using generic collections such as System.Collections.Generic.List<T>. Boxing and unboxing are computationally expensive processes. When a value type is boxed, an entirely new object must be created. This can take up to 20 times longer than a simple reference assignment. When unboxing, the casting process can take four times as long as an assignment. For more information, see Boxing and Unboxing.

**Strings**
When you concatenate a large number of string variables, for example in a tight loop, use System.Text.StringBuilder instead of the C# + operator.