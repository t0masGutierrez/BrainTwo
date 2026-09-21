### divisibility
- number *a* divisible by number *b* if and only if there exists integer *c* such that number *a* equal *bc* without remainder

---
### divisibility formula
$$
\begin{lgathered}
b|a\iff\exists c(a=bc)\\
a=\text{dividend}\\
b=\text{divisor}\\
b|a=\text{b divides a}
\end{lgathered}
$$

---
### divisibility addition property
$$
\begin{lgathered}
b|a\land b|c\implies b|(a+c)
\end{lgathered}
$$

---
### divisibility multiplication property
$$
\begin{lgathered}
b|a\implies\forall c(b|ac)
\end{lgathered}
$$

---
### divisibility transition property
$$
\begin{lgathered}
b|a\land a|c\implies b|c
\end{lgathered}
$$

---
### division
- inverse operation of multiplication

---
### division formula
$$
\begin{lgathered}
a=bq+r\\
b=\text{divisor}\\
q=\text{quotient}\\
r=\text{remainder}\\
a=\text{dividend}
\end{lgathered}
$$

---
### quotient
- result of division without remainder

---
### quotient formula
$$
\begin{lgathered}
q=a\ \text{div}\ b=floor(\frac{a}{b})\\
a=\text{dividend}\\
b=\text{divisor}
\end{lgathered}
$$

---
### remainder
- amount left over after division

---
### remainder formula
$$
\begin{lgathered}
r=a\ \text{mod}\ b=a-bq\\
a=\text{dividend}\\
b=\text{divisor}
\end{lgathered}
$$

---
### congruence relation
- if equivalent elements then applying modulus operation preserves equivalence

---
### congruence relation formula
$$
\begin{lgathered}
a\equiv b(\text{mod}\ m)\iff k=m|(a-b)\\
n=\text{modulus}\\
k=Z^{+}
\end{lgathered}
$$

---
### congruence operation
- addition preserves equivalence and multiplication preserves equivalence

---
### congruence operation formula
$$
\begin{lgathered}
a+c\equiv b+d\ (\text{mod}\ m)\\
a\times c\equiv b\times d\ (\text{mod}\ m)
\end{lgathered}
$$

---
### modular arithmetic
- system of arithmetic where numbers wrap around upon reaching the modulus
![[5 Discrete Mathematics/Images/modular arithmetic.png]]

---
### modular arithmetic formula
$$
\begin{lgathered}
a+_{m}b\equiv(a+b)\ \text{mod}\ m\equiv[(a\ \text{mod}\ m)+(b\ \text{mod}\ m)]\ \text{mod}\ m\\
a\times_{m}b\equiv(a\times b)\ \text{mod}\ m\equiv[(a\ \text{mod}\ m)\times(b\ \text{mod}\ m)]\ \text{mod}\ m\\
Z_{m}=\{0,1,...m-1\}
\end{lgathered}
$$

---
