### cartesian biproduct
- set of all 2-tuples from 2 sets

---
### cartesian biproduct formula
$$
\begin{aligned}
X \times Y = \{(x, y) | x \in X, y \in Y\} \ne Y \times X
\end{aligned}
$$

---
### binary relation
- subset of cartesian product represent relationship between 2-tuples from two sets

---
### binary relation formula
$$
\begin{aligned}
(x, y) \in R \subset X \times Y \implies xRy
\end{aligned}
$$

---
### equivalence relation
- reflexive
- symmetric
- transitive

---
### equivalence relation formula
$$
\begin{aligned}
(R \subset S \times S) \land (x \in S) \implies x \sim x \\
(R \subset S \times S) \land (x, y \in S) \land (x \sim y) \implies y \sim x \\
(R \subset S \times S) \land (x, y, z \in S) \land (x \sim y) \land (y \sim z) \implies x \sim z 
\end{aligned}
$$

---
### equivalence class
- nonempty disjoint set consisting of all elements equivalent with representative under the equivalence relation

---
### equivalence class formula
$$
\begin{aligned}
{}[x] = \set{y \in S| y \sim x} \\
x = \text{representative} 
\end{aligned}
$$

---
### injection
- every element of domain map to 1 element of codomain

---
### injection formula
$$
\begin{aligned}
\forall a \in A, \forall b \in B: f(a_{1}) = f(a_{2}) \implies a_{1} = a_{2} \\
f: A \rightarrow B \\
f = \text{injection}
\end{aligned}
$$

---
### surjection
- every element of codomain map to $\ge1$ element of domain

---
### surjection formula
$$
\begin{aligned}
\forall b \in B, \exists a \in A: f(a) = b \\
f: A \rightarrow B \\
f = \text{surjection}
\end{aligned}
$$

---
### bijection
- every element of codomain map to 1 element of domain

---
### bijection formula
$$
\begin{aligned}
\forall b \in B, \exists !a \in A: f(a) = b \\
f: A \rightarrow B \\
f = \text{bijection}
\end{aligned}
$$

---
