### venn diagram
- illustrate relationships between different sets with circles where overlapping circles represent common elements

---
### universal set
- set containing all elements under consideration

---
### universal set formula
$$
\begin{aligned}
U = \forall x
\end{aligned}
$$

---
### union
- joining of either set
- or
![[5 Discrete Mathematics/Images/union.png]]

---
### union formula
$$
\begin{aligned}
A \cup B = \{x | x \in A \lor x \in B\}
\end{aligned}
$$

---
### intersection
- joining of both set
- and
![[5 Discrete Mathematics/Images/intersection.png]]

---
### intersection formula
$$
\begin{aligned}
A \cap B = \{x | x \in A \land x \in B\}
\end{aligned}
$$

---
### subtraction
- complement of A with respect to B
- small not
![[5 Discrete Mathematics/Images/subtraction.png]]

---
### subtraction formula
$$
\begin{aligned}
B - A = \{x | x \in B \land x \notin A\}
\end{aligned}
$$

---
### complementation
- complement of A with respect to U
- big not
![[5 Discrete Mathematics/Images/complementation.png]]

---
### complementation formula
$$
\begin{aligned}
A' = \{x | x \in U \land x \notin A\}
\end{aligned}
$$

---
### joint set
- if intersection equal nonempty set then nonzero common elements

---
### disjoint set
- if intersection equal empty set then zero common elements

---
### union cardinality
- size of finite set union

---
### union cardinality formula
$$
\begin{aligned}
|A \cup B| = |A| + |B| - |A \cap B|
\end{aligned}
$$

---
### intersection cardinality
- size of finite set intersection

---
### intersection cardinality formula
$$
\begin{aligned}
|A \cap B| = |A| + |B| - |A \cup B|
\end{aligned}
$$

---
### set identity
- set expression that satisfy the requirements of tautology
![[5 Discrete Mathematics/Images/set identity.png]]

---
### prove set identity
- subset method
- membership method
- identity method
![[5 Discrete Mathematics/Images/prove set identity.png]]

---
### union of set collection
- set containing elements of at least 1 set

---
### union of set collection formula
$$
\begin{aligned}
\bigcup_{k \in K}^n A_{k} = A_{1} \cup A_{2} \cup ... \cup A_{n} \\
k = \text{index} \\
K = \{1, 2, ... n\} \\
n = \text{number of sets}
\end{aligned}
$$

---
### intersection of set collection
- set containing elements of all sets

---
### intersection of set collection formula
$$
\begin{aligned}
\bigcap_{k \in K}^n A_{k} = A_{1} \cap A_{2} \cap ... \cap A_{n} \\
k = \text{index} \\
K = \{1, 2, ... n\} \\
n = \text{number of sets}
\end{aligned}
$$

---
### computer set theory
- if element of set then replace with 1
- if not element of set then replace with 0

---
### computer set formula
$$
\begin{aligned}
\{x, y \in \{0, 1\} | x + y = A \cup B\} \\
\{x, y \in \{0, 1\} | x \times y = A \cap B\} \\
\{x \in \{0, 1\} | \overline x = A'\}
\end{aligned}
$$

---
### multiple membership set
- unordered collection of possibly non distinct objects

---
### multiple membership set formula
$$
\begin{aligned}
A = \{n_{1} \times x_{1}, n_{2} \times x_{2}, ... n_{n} \times x_{n}\} \\
n = \text{multiplicity}
\end{aligned}
$$

---
### multiple membership union
- joining of either set where multiplicity of element equal maximum multiplicity between set collection

---
### multiset union formula
$$
\begin{aligned}
A \cup B = \max(n_{A}, n_{B})(x)
\end{aligned}
$$

---
### multiple membership intersection
- joining of both set where multiplicity of element equal minimum multiplicity between set collection

---
### multiset intersection formula
$$
\begin{aligned}
A \cap B = \min(n_{A}, n_{B})(x)
\end{aligned}
$$

---
### multiple membership subtraction
- complement of A with respect to B where multiplicity of element equal difference of multiplicity between set collection unless negative then zero

---
### multiset subtraction formula
$$
\begin{aligned}
A - B = (n_{A} - n_{B})(x)
\end{aligned}
$$

---
### multiple membership addition
- sum of A with respect to B where multiplicity of element equal sum of multiplicity between set collection

---
### multiset addition formula
$$
\begin{aligned}
A + B = (n_{A} + n_{B})(x)
\end{aligned}
$$

---
