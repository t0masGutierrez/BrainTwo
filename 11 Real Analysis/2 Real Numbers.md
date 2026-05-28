### why natural numbers
- cardinality
- ordinality
- infinity

---
### why natural numbers formula
$$
\begin{aligned}
S = \emptyset \implies |S| \not\in S \\ 
S = \emptyset \implies x_{n} \not \in x_{n+1} \\
S = \emptyset \implies \infty \not \in S \\
\end{aligned}
$$

---
### natural numbers
- set of whole numbers from 0 to positive infinity

---
### natural numbers formula
$$
\begin{aligned}
\mathbb N = \{0, 1, 2, \dots, \infty\}
\end{aligned}
$$

---
### peano axioms
- zero
- success
- distinct 
- induct

---
### peano axioms formula
$$
\begin{aligned}
0 \in \mathbb N \\
S(n) = n + 1 \implies \forall n \in \mathbb N: S(n) \in \mathbb N \\
S(n) = S(m) \implies n = m \\
(K \subset \mathbb N) \land (0 \in K) \land (\forall n \in K: S(n) \in K) \implies K = \mathbb N
\end{aligned}
$$

---
### construct natural numbers
- initialize zero as the empty set
- successor equal the union of natural number with singleton set containing natural number
- natural numbers equal the set of successors

---
### construct natural numbers formula
$$
\begin{aligned}
0 &= \emptyset \\
1 &= S(0) = 0 \cup \{0\} = \{0\} \\
2 &= S(1) = 1 \cup \{1\} = \{0\} \cup \{1\} = \{0, 1\} \\
3 &= S(2) = 2 \cup \{2\} = \{0, 1\} \cup \{2\} = \{0, 1, 2\} \\
\vdots \\ 
\mathbb N &= \{S(n) | 0 \le n < \infty\}
\end{aligned}
$$

---
### why integers
- subtraction

---
### why integers formula
$$
\begin{aligned}
\forall(m>n) \in \mathbb N: n - m \not\in \mathbb N
\end{aligned}
$$

---
### integers
- set of natural numbers and negative natural numbers

---
### integers formula
$$
\begin{aligned}
\mathbb Z = \{n - m| n, m \in \mathbb N \}
\end{aligned}
$$

---
### integers arithmetic
- addition
- multiplication

---
### integers arithmetic formula
$$
\begin{aligned}
{}[(m, n)] + [(m', n')] = [(m + m', n + n')] \\
{}[(m, n)] \cdot [(m', n')] = [(mm' + nn', mn' + nm')]
\end{aligned}
$$

---
### construct integers
- equivalence relation equal natural pairs with equal difference
- equivalence class equal the set of natural pairs with equal difference
- integers equal the set of equivalence classes

---
### construct integers formula
$$
\begin{aligned}
(m, n) \sim (m', n') \iff m + n' = m' + n \\
{}[(m, n)] = \{(m', n') \in \mathbb N \times \mathbb N |(m, n) \sim (m', n')\} \\
\mathbb Z = \{[(m, n)] | (m, n) \in \mathbb N \times \mathbb N\}
\end{aligned}
$$

---
### why rational numbers
- division

---
### why rational numbers formula
$$
\begin{aligned}
\exists p, q \in \mathbb Z, q \ne 0: \frac{p}{q} \not\in \mathbb Z
\end{aligned}
$$

---
### rational numbers
- set of ratios of integers

---
### rational numbers formula
$$
\begin{aligned}
\mathbb Q = \{\frac{p}{q}| p, q \in \mathbb Z, q \ne 0\} \\
\end{aligned}
$$

---
### rational numbers arithmetic
- addition
- multiplication

---
### rational numbers arithmetic formula
$$
\begin{aligned}
{}[(p, q)] + [(p', q')] = [(pq' + qp', qq')] \\
{}[(p, q)] \cdot [(p', q')] = [(pp', qq')]
\end{aligned}
$$

---
### construct rational numbers
- equivalence relation equal integer pairs with equal quotient
- equivalence class equal the set of integer pairs with equal quotient
- rational numbers equal the set of equivalence classes

---
### construct rational numbers formula
$$
\begin{aligned}
(p, q) \sim (p', q') \iff pq' = qp' \\
{}[(p, q)] = \{(p', q') \in \mathbb Z \times \mathbb Z |(p, q) \sim (p', q')\} \\
\mathbb Q = \{[(p, q)] | (p, q) \in \mathbb Z \times \mathbb Z\}
\end{aligned}
$$

---
### why real numbers
- irrationality

---
### why real numbers formula
$$
\begin{aligned}
\exists p, q \in \mathbb Z, q \ne 0: \frac{p}{q} \not\in \mathbb Q
\end{aligned}
$$

---
### real numbers
- set of rational numbers and irrational numbers

---
### real numbers formula
$$
\begin{aligned}
\mathbb R = \mathbb Q \cup \{\mathbb R ∖ \mathbb Q \}
\end{aligned}
$$

---
### field
- set with two binary operations that satisfy the 9 field axioms

---
### field formula
$$
\begin{aligned}
(+) : F \times F \rightarrow F \\
(\cdot ) : F \times F \rightarrow F
\end{aligned}
$$

---
### axiom field property
- additive commutativity
- additive associativity
- additive identity
- additive inverse
- distributivity
- multiplicative commutativity
- multiplicative associativity
- multiplicative identity
- multiplicative inverse

---
### axiom field property formula
$$
\begin{aligned}
x + y = y + x \\
x + (y + z) = (x + y) + z \\
x + 0 = x \\
x + (-x) = 0 \\
x\cdot (y + z) = x \cdot y + x \cdot z \\
x \cdot y = y \cdot x \\
x \cdot (y \cdot z) = (x \cdot y) \cdot z \\
x \cdot 1 = x \\
x \cdot (\frac{1}{x}) = 1
\end{aligned}
$$

---
### ordinality field property
- addition
- multiplication
- negative multiplication
- trichotomy
- transitivity

---
### ordinality field property formula
$$
\begin{aligned}
(x, y, z \in F) \land (x < y) \implies x + z < y + z \\
(x, y \in F) \land (x < y) \land (z > 0) \implies x \cdot z < y \cdot z \\
(x, y \in F) \land (x < y) \land (z < 0) \implies x \cdot z > y \cdot z \\
x, y \in F \implies (x < y) \lor (x = y) \lor (y < x) \\
(x, y, z \in F) \land (x < y) \land (y < z) \implies x < z 
\end{aligned}
$$

---
### complex number
- ordered pair of real numbers

---
### complex number formula
$$
\begin{aligned}
z = a + bi \\
a = \text{real part} \\
b = \text{imaginary part} \\
i = \text{imaginary number}
\end{aligned}
$$

---
### complex number property
- square
- conjugate
- multiplication
- addition
- real

---
### complex number property formula
$$
\begin{aligned}
|z|^2 = (z)(\overline z) \\
|\overline z| = |z| \\
|zw| = (|z|)(|w|) \\
|z + w| \le |z| + |w| \\
|\text{Re}(z)| \le |z| 
\end{aligned}
$$

---
### complex conjugate
- ordered pair of real numbers with negative imaginary part

---
### complex conjugate formula
$$
\begin{aligned}
\overline z = a - bi \\
a = \text{Re}(z) \\
b = \text{Im}(z) \\
i = \sqrt {-1}
\end{aligned}
$$

---
### complex conjugate property
- conjugate addition
- conjugate multiplication
- real sum
- imaginary difference
- real product

---
### complex conjugate property formula
$$
\begin{aligned}
\overline {z + w} = \overline z + \overline w \\
\overline {z \cdot w} = \overline z \cdot \overline w \\ 
z + \overline z = \text{Re}(z) \\
z - \overline z = \text{Im}(z) \\
z \cdot \overline z \in \mathbb R^+ \iff z \ne 0
\end{aligned}
$$

---
