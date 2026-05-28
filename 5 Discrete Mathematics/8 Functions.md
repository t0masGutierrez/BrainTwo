### function
- map every element from A to 1 element of B

---
### function formula
$$
\begin{aligned}
f: A \rightarrow B \\
f(a) = b
\end{aligned}
$$

---
### domain
- if $f$ is function from A to B then A is domain of $f$ 

---
### codomain
- if $f$ is function from A to B then B is codomain of $f$ 

---
### preimage
- if $f(a) = b$ then *a* is preimage of *b*

---
### image
- if $f(a) = b$ then *b* is image of *a*

---
### range
- if $f$ is function from A to B then subset of B is range of $f$ 

---
### function equality
- two functions equal if and only if they have the same domain codomain and mapping

---
### function equality formula
$$
\begin{aligned}
f = g \iff \forall a, \forall b: f(a) = g(b)
\end{aligned}
$$

---
### injection
- every element of domain map to 1 element of codomain
- into

---
### injection formula
$$
\begin{aligned}
\forall a, \forall b: f(a) = f(b) \implies a = b
\end{aligned}
$$

---
### injective property
- if monotone function then injective function

---
### injective property formula
$$
\begin{aligned}
\forall a, \forall b: a < b \implies f(a) \le f(b) \\
\forall a,\forall b: a > b \implies f(a) \ge f(b)
\end{aligned}
$$

---
### surjection
- every element of codomain map to $\ge1$ element of domain
- onto

---
### surjection formula
$$
\begin{aligned}
\forall b, \exists a: f(a) = b
\end{aligned}
$$

---
### bijection
- every element of codomain map to 1 element of domain
- into and onto

---
### bijection formula
$$
\begin{aligned}
\forall b, \exists !a: f(a) = b
\end{aligned}
$$

---
### function summary
- if injective then every input has 1 output
- if surjective then every output has $\ge1$ input
- if bijective then every output has 1 input
![[5 Discrete Mathematics/Images/function summary.png]]

---
### inverse function
- map every element from B to 1 element of A
![[5 Discrete Mathematics/Images/inverse function.png]]

---
### inverse function formula
$$
\begin{aligned}
f : B \to A \\
f^{-1}(b) = a
\end{aligned}
$$

---
### invertibility
- invertible function if and only if bijective function

---
### invertibility formula
$$
\begin{aligned}
\forall a \in A: (f^{-1} \circ f)(a) = f^{-1}(b) = a \\
\forall b \in B:(f \circ f^{-1})(b) = f(a) = b
\end{aligned}
$$

---
### composite function
- map every element from A to 1 element of B to 1 element of C
![[5 Discrete Mathematics/Images/composite function.png]]

---
### composite function formula
$$
\begin{aligned}
f : A \to B \to C \\
(f \circ g)(a) = c
\end{aligned}
$$

---
### identity function
- map every element from A to 1 element of A
![[5 Discrete Mathematics/Images/identity function.png|300]]

---
### identity function formula
$$
\begin{aligned}
f(a) = a
\end{aligned}
$$

---
### identity property
- inverse of inverse function equal function

---
### identity formula
$$
\begin{aligned}
f = (f^{-1})^{-1}
\end{aligned}
$$

---
### graph
- set of ordered pairs

---
### graph formula
$$
\begin{aligned}
\{(a, b) | a \in A, f(a) = b\}
\end{aligned}
$$

---
### floor function
- map every *x* from set of real numbers to the largest integer $\le x$
![[5 Discrete Mathematics/Images/floor function.png|300]]

---
### ceiling function
- map every *x* from set of real numbers to the largest integer $\ge x$
![[5 Discrete Mathematics/Images/ceiling function.png|300]]

---
### rounding function identity
- floor function
- ceiling function
![[5 Discrete Mathematics/Images/rounding function identity.png]]

---
### partial function
- map every element from subset of A to 1 element of B

---
