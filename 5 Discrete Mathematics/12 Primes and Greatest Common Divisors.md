### prime number
- integer whose only two factors equal 1 and itself

---
### composite number
- integer with more than two factors

---
### fundamental theorem of arithmetic
- all integers greater than 1 expressible as prime number or unique product of prime numbers

---
### prime factorization
- express integer as product of prime numbers

---
### calculate prime factorization
- division with least prime number until zero prime factors

---
### trial division
- if integer not divisible by any prime number less or equal square root of integer then integer equal prime number

---
### trial division formula
$$
\begin{aligned}
\forall(p\le\sqrt n)\ (p\nmid n)\implies n\in P\\
p=\text{prime number}\\
n=\text{integer}\\
P=\{2,3,5,6,9,13,17,19,23,29,...\infty\}
\end{aligned}
$$

---
### sieve of eratosthenes
- algorithm for finding prime numbers less than integer
![[5 Discrete Mathematics/Images/sieve of eratosthenes.png]]

---
### calculate sieve of eratosthenes
- start with least prime number
- eliminate all numbers divisible by prime number
- increment prime number until square root of integer

---
### prime infinitude
- there exists infinitely many prime numbers

---
### calculate prime infinitude
- assume there exists finitely many prime numbers
- define integer *n* by multiplying finite set of prime numbers and adding 1
- integer *n* not divisible by any prime number from the finite set of prime numbers
- integer *n* must be prime number or unique product of prime numbers not element of the finite set of prime numbers

---
### prime number theorem
- distribution of prime numbers

---
### prime number formula
$$
\begin{aligned}
\lim_{x\implies\infty}\frac{\pi(x)}{\frac{x}{\ln(x)}}=1\\
\pi(x)=\text{prime counting function}
\end{aligned}
$$

---
### prime arithmetic sequence
- arithmetic sequence of prime numbers

---
### prime arithmetic sequence formula
$$
\begin{aligned}
ak+b\subset P\\
\forall(n>1)(n\nmid a\land n\nmid b)\\
k=\{0,1,2,...\infty\}
\end{aligned}
$$

---
### goldbach conjecture
- every even integer greater than 2 expressible as sum of two prime numbers

---
### twin prime conjecture
- there exists infinitely many prime numbers of two numbers apart

---
### greatest common divisor
- largest positive integer that divides two integers without remainder

---
### greatest common divisor formula
$$
\begin{aligned}
\gcd(a,b)
\end{aligned}
$$

---
### calculate greatest common divisor
- integer *a* division with least divisor equal quotient *q*
- if integer *b* divisible by quotient *q* then quotient *q* equal greatest common divisor
- if integer *b* not divisible by quotient *q* then increment divisor

---
### relatively prime
- greatest common divisor of 1

---
### relatively prime formula
$$
\begin{aligned}
\gcd(a,b)=1
\end{aligned}
$$

---
### pairwise relatively prime
- no two integers share prime factor

---
### pairwise relatively prime formula
$$
\begin{aligned}
\gcd(a_{k_{1}},a_{k_{2}})=1\\
1\le k_{1}\le k_{2}\le n\\
A=\{a_{1},a_{2},...a_{n}\}
\end{aligned}
$$

---
### gcd by prime factorization
- minimum exponents of prime factors equal greatest common divisor

---
### gcd by prime factorization formula
$$
\begin{aligned}
\gcd(a,b)=\prod_{p\in P}p^{\min(a_{p},\ b_{p})}\\
a_{p},b_{p}=\text{prime factor exponent}\\
p=\text{prime number}
\end{aligned}
$$

---
### lcm by prime factorization
- maximum exponents of prime factors equal least common multiple
- smallest positive integer thats divisible by both integers

---
### lcm by prime factorization formula
$$
\begin{aligned}
\text{lcm}(a,b)=\prod_{p\in P}p^{\max(a_{p},\ b_{p})}\\
a_{p},b_{p}=\text{prime factor exponent}\\
p=\text{prime number}
\end{aligned}
$$

---
### commonality theorem
- product of greatest divisor and least multiple between two integers equal product of two integers

---
### commonality formula
$$
\begin{aligned}
a\times b=\gcd(a,b)\times\text{lcm}(a,b)
\end{aligned}
$$

---
### gcd by euclidian algorithm
- successive divisions equal gcd of smaller integers and remainders

---
### gcd by euclidian formula
$$
\begin{aligned}
\gcd(a,b)=\gcd(b,a\ \text{mod}\ b)=\gcd(b,r)\\
a=bq+r
\end{aligned}
$$

---
### calculate gcd by euclidian algorithm
- larger integer *a* mod with smaller integer *b*
- larger integer *a* becomes smaller integer *b* and smaller integer *b* becomes remainder *r*
- gcd equal last nonzero remainder

---
### bezout identity
- greatest common divisor of two integers expressible as linear combination of bezout coefficients

---
### bezout formula
$$
\begin{aligned}
\gcd(a,b)=ax+by\\
x,y=\text{bezout coefficient}
\end{aligned}
$$

---
