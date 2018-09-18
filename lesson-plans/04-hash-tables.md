# Hash Tables

This lesson is about hashing and hash tables.

## Learning Objectives

* Students can describe a Hash Function and a Hash Table
* Students can identify common uses of hash tables
* Students can classify the performance of hash table operations using big o
* Students know that collisions will occur, and that there are many ways to handle them.

## Introduce & Motivate Hash Functions (5 minutes)

* __Discuss: Whats the Big O of finding a specific *value* in Linked Lists and Arrays?__
* Hash Tables will allow us to do O(1) search, insert, and remove
* But we give up the power to have "ordered" data
* Hash functions are deterministic
* Hash functions are often "one way"
* __Where else is hashing used?__
  * *Lots of good examples*
  * *checksum, cryptocurrency, encryption, database passwords...*
* __Give an example hash function -- prime modulus__
  * *There are many others!*

## Hash Tables -- Hash Value As An Index (15 minutes)

* Hash Tables are typically backed by an array.
* We use the hash function to create the index value from the key
* So we have to use modulo so everything is always inside the range
* __I Do/We Do/You do The simplest hash table, size 8...__
  * __I__ Define a simple hash function Map ints to the size of the table using modulo
    * *I generally use something like `return (7*key) % tableSize`*
    * *Also: draw the empty array before inserting values*
  * __I__ Insert 1 value,
  * __We__ Insert 2 more values
  * __You__ Insert 1 value
  * __You__ Insert 1 value that results in a collision
  * __Socratic__
    * __What should we do about this collision?__
    * *Hopefully someone says "resize!"*
    * *Hopefully someone says "just throw an error!"*
* Describe Chaining
* There are lots of other ways to resolve collisions, just FYI.
  * Linear probing, cuckoo hashing...

## Performance of Hash Tables

* __Classify the operations insert, delete, and get using Big O__
  * Then go over the answers as a class.

## Characteristics of Hash Functions

* Discuss distribution / uniqueness
* Speed to compute
* "cryptographically secure"
* "checksum"

## Class Exercises

* Advice:
  * Hash tables are fundamentally about making "search" fast.
  * If you're searching for items over an over again, use a hash table!

* Top K items -- https://leetcode.com/problems/top-k-frequent-elements/description/
* Detect anagrams -- https://leetcode.com/problems/valid-anagram/description/
* [Pair Sums](https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/practice-problems/algorithm/pair-sums/)
