# Hash Tables

This lesson is about hashing and hash tables.

## Learning Objectives

* Students can describe a Hash Function and a Hash Table
* Students can identify common uses of hash tables
* Students can classify the performance of hash table operations using big o
* Students know that collisions will occur, and that there are many ways to handle them.
  * Students can specifically define chaining and linear probing (at a high level)

## Introduce & Motivate Hash Functions (5 minutes)

* __Discuss: Whats the Big O of finding a specific *value* in Linked Lists and Arrays?__
  * *Both are linear time—we may have to scan the whole list to find the value or prove that the value does not exist.*
  * *Lists are not optimized for this use case, hash tables are!*
* Hash tables are key/value pair based storage.
  * Lists are too, but the key is always the index.
  * Hash tables use an array to store data and a hash function to create the index values for each key.
  * Hash tables can use any kind of data as a key, as long as the data can be run through a hash function.
  * Hash Tables will allow us to do O(1) search, insert, and remove by key
    * *This is amazing, emphasize that it's pretty amazing.*
* __What is a hash function?__
  * *There are many kinds, like cryptographic hash functions, but lets focus on hash functions for hash tables for now.*
  * *Hash functions transform input data into an integer, called the hash code*
  * *Hash functions are deterministic--same input always yields the same hash code*
* __How is a hash function used by a hash table?__
  * *We run the key through the hash function to produce an integer*
  * *That integer is used as the index in the underlying array*
* It's worth noting that hashing is used in a lot of other places in CS. We're focused on hash tables for now, but the principles of hash functions are used for checksums, cryptocurrency, encryption, database passwords, and more...

## Hash Functions (10 minutes)

* __What features do we want in a hash function?__
  * *Speed, it should be easy to compute*
  * *Uniqueness, ideally every input would map to a unique output*
  * *Distribution, any output hash value should be equally likely. We want a uniform distribution of possible output values*
  * *Distribution matters because true uniqueness is impossible (pigeonhole principle)*
* Pigeonhole principle: there is no way to put 5 things into 4 buckets without putting at least 2 things into one of those buckets.
* In hash tables: we have to make an array with a specific size before we start hashing things, because our hash function needs to produce an index value that can be used in the underlying array.
* Like dynamic arrays, we will have to resize as we add too many things to the table.
  * But hold that thought!
* Example of a hash function, "Prime Modulo" strategy:
```js
function hash(key) {
  return (key * 13) % sizeOfArray;
}
```
* *Note that we assume the key is an integer in this case*
  * *It's possible to interpret any binary data as an integer so this isn't completely insane*
  * *Try not to focus on this for now if possible*
* We pick some small prime number, multiply that by the key, then modulo by the size of the array. Then use that value as the index in the underlying array.
  * *You may have to describe the modulo operator at this time!*
* The prime number helps to distribute the produced hash_codes uniformly within the range of the modulo.
  * There are number theory reasons for this, most critically if the modulus and the size of the hash table share a common factor, the distribution collapses.

* __What if two keys hash to the same hash code, but we want to associate different values with those 2 keys?__
  * *Because this is possible, we have to store the keys AND values in our hash tables*
  * *That's not ideal, but it's also not avoidable*
* There are many other kinds of hash functions, exploring them could be interesting but not critical in understanding hash tables. Curious students can search for:
  * [Shift Multiply](https://lemire.me/blog/2016/06/27/a-fast-alternative-to-the-modulo-reduction/)
  * [Murmur](https://en.wikipedia.org/wiki/MurmurHash)
  * [Tabulation](https://en.wikipedia.org/wiki/Tabulation_hashing)
  * *This list is not exhaustive*


## Hash Tables -- Hash Value As An Index (15 minutes)

* Hash Tables are typically backed by an array.
* We use the hash function to create the index value from the key
* We use modulo so everything is always inside the range of the array
* __Exercise: using the prime modulo hash function above, simulate the insertion of the following 4 values into a hash table with an array size 8__
  * 1, 3, 4, 9 (assume the keys and values are the same, so essentially we're using a "hash set")
  * *1 => 5*
  * *3 => 7*
  * *4 => 4*
  * *9 => 5*
* __Uh oh, 1 and 9 both yield 5 as the index for the array. What can we do?__
  * *Let the students squirm on this, some of them might invent chaining or linear probing on their own. They might also suggest resizing, which is a good solution!*

## Handling Collisions (20 minutes)

* Collisions are inevitable, we have to do SOMETHING to handle them.
* Simple solution:
  * Resize every time there is a single collision.
  * __Upside/downside?__
    * *easy to implement*
    * *could lead to lots of wasted space*
    * *computationally wasteful as well, copying the array a lot*
* Chaining: instead of storing just the keys/values in the array store a linked list
  * When a collision occurs, add the value at the end of the linked list!
  * __Can we still say that insert/lookup/remove are constant time?__
    * *Yes and no—traversing the linked list now might take linear time!*
    * *But, we can force the array to resize when any chain gets longer than some fixed length. Now, it's still constant because we'll only traverse 3 hops or 5 hops (or whatever number you choose) before resizing. As long as that number is a constant that doesn't scale as the table gets bigger, we can still call our performance amortized constant time.*
* Linear Probing: if a collision occurs, look in the slot to the right of the hash code. If it's empty store the data there. If it's full go one more to the right... repeat!
  * __Can we still say insert/lookup/remove are constant time?__
    * *Just like above, yes and no. If we restrict the number of "probes" we do to a fixed constant before we resize, then we can still say amortized constant time*
  * __What if we have a collision, then remove the first of the two items that collided?__
    * *Students should notice that we'll get to the hash-code, and it's empty. How do we know to look one to the right? Do we ALWAYS have to search the 3 or so neighboring locations?*
    * *No, but we do have to introduce the "tombstone", where we mark places where deletions occurred differently from places where no values have ever existed.*
* __Pair/Share: Which of these two strategies is better?__
  * *Loaded question, they have tradeoffs*
  * *Chaining is generally considered slower due to the bad cache utilization of linked lists*
  * *Linear probing is a bit harder to implement*
  * *Other strategies exist like Cuckoo Hashing!!*

> Implementing one or both of these strategies would be nice bonus work, but not the focus of this class, so don't spend TOO much time talking about them unless you intend to make students implement a hash table from scratch!

## Performance of Hash Tables (5 min)

* The efficiency of a hash table hinges on:
  * The quality of the hash function
    * Fewer collisions better, faster to compute better.
  * The collision handling strategy:
    * cache utilization, avoiding linear lookups
* Another interesting measure is utilization
  * Most hash tables are about 50% empty space, to avoid collisions
  * Different collision handling strategies perform differently at higher/lower utilization rates.

## Exercises

* [Detect anagrams](https://leetcode.com/problems/valid-anagram/description/)
* [Top K items](https://leetcode.com/problems/top-k-frequent-elements/description/)
* Bonus/Stretch: [Check Summing](https://github.com/Tebs-Lab/check-suming)
