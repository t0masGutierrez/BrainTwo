### divisibility
- number *a* divisible by number *b* if and only if there exists integer *c* such that number *a* equal *bc* without remainder

---
### divisibility formula
$$
\begin{aligned}
b | a \iff \exists c(a = bc) \\
a = \text{dividend} \\
b = \text{divisor} \\
b|a = \text{b divides a}
\end{aligned}
$$

---
### divisibility addition property
$$
\begin{aligned}
b |a \land b |c \implies b|(a + c)
\end{aligned}
$$

---
### divisibility multiplication property
$$
\begin{aligned}
b|a \implies \forall c (b|ac)
\end{aligned}
$$

---
### divisibility transition property
$$
\begin{aligned}
b|a \land a|c \implies b|c
\end{aligned}
$$

---
### division
- inverse operation of multiplication

---
### division formula
$$
\begin{aligned}
a = bq + r \\
b = \text{divisor} \\
q = \text{quotient} \\
r = \text{remainder} \\
a = \text{dividend}
\end{aligned}
$$

---
### quotient
- result of division without remainder

---
### quotient formula
$$
\begin{aligned}
q = a \ \text{div} \ b = floor(\frac{a}{b}) \\
a = \text{dividend} \\
b = \text{divisor}
\end{aligned}
$$

---
### remainder
- amount left over after division

---
### remainder formula
$$
\begin{aligned}
r = a \ \text{mod} \ b = a - bq \\
a = \text{dividend} \\
b = \text{divisor}
\end{aligned}
$$

---
### congruence relation
- if equivalent elements then applying modulus operation preserves equivalence

---
### congruence relation formula
$$
\begin{aligned}
a \equiv b (\text{mod} \ m) \iff k = m |(a - b) \\
n = \text{modulus} \\
k = Z^+
\end{aligned}
$$

---
### congruence operation
- addition preserves equivalence and multiplication preserves equivalence

---
### congruence operation formula
$$
\begin{aligned}
a + c \equiv b + d \ (\text{mod} \ m) \\
a \times c \equiv b \times d \ (\text{mod} \ m)
\end{aligned}
$$

---
### modular arithmetic
- system of arithmetic where numbers wrap around upon reaching the modulus
![[11 Discrete Mathematics/Images/modular arithmetic.png]]

---
### modular arithmetic formula
$$
\begin{aligned}
a +_{m} b \equiv (a + b) \ \text{mod} \ m \equiv [(a \ \text{mod} \ m) + (b \ \text{mod} \ m)] \ \text{mod} \ m \\
a \times_{m} b \equiv(a \times b) \ \text{mod} \ m \equiv [(a \ \text{mod} \ m) \times (b \ \text{mod} \ m)] \ \text{mod} \ m \\
Z_{m} = \{0, 1, ... m - 1\}
\end{aligned}
$$

---
