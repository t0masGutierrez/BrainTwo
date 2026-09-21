### algorithm
- procedure for performing arithmetic operations on representations of integers

---
### base b expansion of integer n
- represent integer as sum product of increasing base exponent

---
### base b expansion of integer n formula
$$
\begin{array}{l}
n=a_{k}b^{k}+a_{k-1}b^{k-1}+...+a_{1}b^{1}+a_{0}b^{0}\\
k=\{0,1,2,...b\}\\
a_{k}=\text{digit}
\end{array}
$$

---
### binary
- represent integer as number less than 2

---
### binary formula
$$
\begin{array}{l}
n_{2}=\{0,1\}
\end{array}
$$

---
### octal
- represent integer as number less than 8

---
### octal formula
$$
\begin{array}{l}
n_{8}=\{0,1,3,4,5,6,7\}
\end{array}
$$

---
### decimal
- represent integer as number less than 10

---
### decimal formula
$$
\begin{array}{l}
n_{10}=\{0,1,3,4,5,6,7,8,9\}
\end{array}
$$

---
### hexadecimal
- represent integer as number less than 10 and letter less than F

---
### hexadecimal formula
$$
\begin{array}{l}
n_{16}=\{0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F\}
\end{array}
$$

---
### base conversion
- convert base
![[5 Discrete Mathematics/Images/base conversion.png]]

---
### base conversion formula
$$
\begin{array}{l}
n=bq+r\\
b=\text{base}\\
q=\text{quotient}\\
r=\text{remainder}
\end{array}
$$

---
### calculate base conversion
- integer *n* division with base *b* equal quotient
- integer *n* subtraction base *b* multiplication with quotient *q* equal remainder *r*
- repeat until quotient zero
- base conversion equal descending remainder

---
### addition algorithm
- sum corresponding digits and carry
![[5 Discrete Mathematics/Images/addition algorithm.png|200]]

---
### addition formula
$$
\begin{array}{l}
p_{k}+q_{k}+c_{k-1}=bc_{k}+s_{k}\\
p=\text{addend}\\
q=\text{addend}\\
c=\text{carry}\\
b=\text{base}\\
s=\text{sum}
\end{array}
$$

---
### multiplication algorithm
- multiply corresponding digits and carry
![[5 Discrete Mathematics/Images/multiplication algorithm.png|150]]

---
### multiplication formula
$$
\begin{array}{l}
\sum_{k=0}^{n}p_{k_{1}}q_{k_{2}}b^{k_{1}+k_{2}}=p_{0}q_{0}b^{0}+p_{1}q_{1}b^{2}+...+p_{n-1}q_{n-1}b^{2n-2}\\
k=\{0,1,2,...n-1\}
\end{array}
$$

---
### modular exponentiation
- exponentiate and operate modulus per exponent

---
### modular exponentiation formula
$$
\begin{array}{l}
b^{n}\ \text{mod}\ m\\
m=\text{modulus}
\end{array}
$$

---
### calculate modular exponentiation
- base 2 expansion of integer *n*
- result equal 1
- if exponent equal 0 then square result
- if exponent equal 1 then result multiplication with base
- operate modulus
- repeat until exponent zero

---
