---
layout: post
title:  "Using implicit conversion"
date:   2017-01-22
desc: "Using implicit conversion"
keywords: "implicit conversion"
categories: [csharp]
tags: [csharp]
icon: icon-csharp
---

{{ site.categories.cat }}

I have seen code like below some times back. But now i got the time to explore what it is and how can add value to when i write code. Thought to share.

``` csharp
public static implicit operator PostData(byte[] byteArray) => new PostData(byteArray);

or

public static implicit operator PostData(byte[] byteArray) 
{
	new PostData(byteArray);
}
```

What it actually do.

Suppose there is a method M that asks for PostData object.

``` csharp
void M(PostData postData)
{
	// ...
}

```

Then, we can simply call M by passing byte[] argument instead of PostData<byte[]>. The conversion will implicitly taken care by the compiler.

``` csharp
M(byteArraay);

```

One more thing, that can make you excited if you have not written code like this before.

``` csharp
public static implicit operator PostData(byte[] byteArray) 
{
	new PostData(byteArray);
}

is equivalent to 

public static implicit operator PostData(byte[] byteArray) => new PostData(byteArray);
```

The part before => is equivalent to the part before {

The part after => is body.

Below is a examples, to make it more clear.

``` csharp
namespace Library
{
    public class TestClass
    {
        // we want to call M by passing byteArray or string. however method is asking for PostData object
        void M( PostData data )
        {
            // ...
        }

        void M2() {
            byte[] b = new byte[] { 32, 4, 42, 6 };

            // calling M by passing byteArray
            M( b );

            // calling M by passing string
            M( "Hello world!" );
        }
    }

    public class PostData
    {
        // constructor
        public PostData( byte[] data ) {  /* do something */ }
        public PostData( string data ) { /* do something */ }

        public static implicit operator PostData( byte[] byteArray ) => new PostData( byteArray );

        public static implicit operator PostData( string data )
        {
            return new PostData( data );
        }
    }
}
```







