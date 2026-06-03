### algorithm
- procedure for performing arithmetic operations on representations of integers

---
### base b expansion of integer n
- represent integer as sum product of increasing base exponent

---
### base b expansion of integer n formula
$$
\begin{aligned}
n = a _ { k } b ^ { k } + a _ { k - 1 } b ^ { k - 1 } + . . . + a _ { 1 } b ^ { 1 } + a _ { 0 } b ^ { 0 } \\
k = \{ 0 , 1 , 2 , . . . b \} \\
a _ { k } = \text { digit }
\end{aligned}
$$

---
### binary
- represent integer as number less than 2

---
### binary formula
$$
\begin{aligned}
n _ { 2 } = \{ 0 , 1 \}
\end{aligned}
$$

---
### octal
- represent integer as number less than 8

---
### octal formula
$$
\begin{aligned}
n _ { 8 } = \{ 0 , 1 , 3 , 4 , 5 , 6 , 7 \}
\end{aligned}
$$

---
### decimal
- represent integer as number less than 10

---
### decimal formula
$$
\begin{aligned}
n _ { 10 } = \{ 0 , 1 , 3 , 4 , 5 , 6 , 7 , 8 , 9 \}
\end{aligned}
$$

---
### hexadecimal
- represent integer as number less than 10 and letter less than F

---
### hexadecimal formula
$$
\begin{aligned}
n _ { 16 } = \{ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , A , B , C , D , E , F \}
\end{aligned}
$$

---
### base conversion
- convert base
![[5 Discrete Mathematics/Images/base conversion.png]]

---
### base conversion formula
$$
\begin{aligned}
n = b q + r \\
b = \text { base } \\
q = \text { quotient } \\
r = \text { remainder }
\end{aligned}
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
\begin{aligned}
p _ { k } + q _ { k } + c _ { k - 1 } = b c _ { k } + s _ { k } \\
p = \text { addend } \\
q = \text { addend } \\
c = \text { carry } \\
b = \text { base } \\
s = \text { sum }
\end{aligned}
$$

---
### multiplication algorithm
- multiply corresponding digits and carry
![[5 Discrete Mathematics/Images/multiplication algorithm.png|150]]

---
### multiplication formula
$$
\begin{aligned}
\sum _ { k = 0 } ^ { n } p _ { k _ { 1 } } q _ { k _ { 2 } } b ^ { k _ { 1 } + k _ { 2 } } = p _ { 0 } q _ { 0 } b ^ { 0 } + p _ { 1 } q _ { 1 } b ^ { 2 } + . . . + p _ { n - 1 } q _ { n - 1 } b ^ { 2 n - 2 } \\
k = \{ 0 , 1 , 2 , . . . n - 1 \}
\end{aligned}
$$

---
### modular exponentiation
- exponentiate and operate modulus per exponent

---
### modular exponentiation formula
$$
\begin{aligned}
b ^ { n } \  \text { mod } \  m \\
m = \text { modulus }
\end{aligned}
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
