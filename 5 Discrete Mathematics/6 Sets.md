### natural number
- set of counting numbers excluding zero
- $N = \{1, 2, 3, ...\}$

---
### whole number
- set of natural numbers including zero
- $W = \{0, 1, 2, 3, ...\}$

---
### integer
- set of whole numbers including negative
- $Z = \{..., ⁻2, ⁻1, 0, 1, 2, ...\}$

---
### rational number
- set of numbers expressible as ratio of two integers
- $Q = \{\frac{p}{q} | p ∈ Z, q ∈ Z, q ≠ 0\}$

---
### irrational number
- set of numbers not expressible as ratio of two integers
- $R\backslash Q = \{x ∈ R | x ∉ Q\}$

---
### real number
- set of numbers including rational and irrational
- $R = \{x | ⁻∞ < x < ⁺∞\}$

---
### complex number
- set of imaginary numbers including imaginary part
- $C = \{a + bi | a, b ∈ R, i² = ⁻1\}$

---
### set
- unordered collection of distinct objects

---
### set formula
$$
\begin{aligned}
x \in A = \text{x is element of set A} \\
A \ni x = \text{set A contains element x} \\
x \notin A = \text{x is not element of set A} \\
\end{aligned}
$$

---
### roster method
- method of describing set by enclosing list of elements inside braces

---
### roster formula
$$
\begin{aligned}
A = \{x_{1}, x_{2}, ... x_{n}\}
\end{aligned}
$$

---
### set builder method
- method of describing set by stating propertys that elements must satisfy to be members

---
### set builder formula
$$
\begin{aligned}
A = \{x | P(x)\} \\
P(x) = \text{proposition function}
\end{aligned}
$$

---
### interval method
- method of describing set by stating domain that elements must satisfy to be members
![[11 Discrete Mathematics/Images/interval method.png]]

---
### interval formula
$$
\begin{aligned}
{}[a, b] \\
{}[a, b) \\
(a, b] \\
(a, b)
\end{aligned}
$$

---
### set equality
- two sets equal if and only if they have the same elements

---
### set equality formula
$$
\begin{aligned}
A = B \iff \forall x(x \in A \iff x \in B) \\
\end{aligned}
$$

---
### null set
- empty set containing 0 elements

---
### null set formula
$$
\begin{aligned}
\emptyset = \{\}
\end{aligned}
$$

---
### singleton set
- set containing 1 element

---
### singleton set formula
$$
\begin{aligned}
A = \{x_{1}\}
\end{aligned}
$$

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
### improper subset
- every element of set A also element of set B and possibly equal

---
### improper subset formula
$$
\begin{aligned}
A \subseteq B \equiv \forall x(x \in A \implies x \in B)
\end{aligned}
$$

---
### improper superset
- set B contain every element of set A and possibly equal

---
### improper superset formula
$$
\begin{aligned}
B \supseteq A \equiv \forall x(x \in B \implies x \in A)
\end{aligned}
$$

---
### two subset theorem
- for every nonempty set A there exists proper subset $\emptyset$ and improper subset A

---
### two subset formula
$$
\begin{aligned}
\forall A(A \ne \emptyset)(\emptyset \subset A \land A \subseteq A)
\end{aligned}
$$

---
### proper subset
- every element of set A also element of set B and impossibly equal

---
### proper subset formula
$$
\begin{aligned}
A \subset B \equiv A \subseteq B \land A \ne B
\end{aligned}
$$

---
### proper superset
- set B contain some element of set A and impossibly equal

---
### proper superset formula
$$
\begin{aligned}
B \supset A \equiv (\forall x \in A: x \in B) \land (\exists y \in B: y \not\in A)
\end{aligned}
$$

---
### subset equality
- two sets equal if and only if they have the same elements

---
### subset equality formula
$$
\begin{aligned}
A = B \iff A \subseteq B \land B \supseteq A
\end{aligned}
$$

---
### finite set
- set with finite number of elements

---
### infinite set
- set with uncountable number of elements

---
### cardinality
- size of finite set

---
### cardinality formula
$$
\begin{aligned}
|A| = n \\
n = \text{number of elements}
\end{aligned}
$$

---
### power set
- set of all subsets of set A including set A and set $\emptyset$ 

---
### power set formula
$$
\begin{aligned}
\mathcal{P}(A) = 2^n \\
n = \text{number of elements}
\end{aligned}
$$

---
### tuple
- ordered collection of objects

---
### tuple formula
$$
\begin{aligned}
a = (x_{1}, x_{2}, ... x_{n})
\end{aligned}
$$

---
### tuple equality
- two tuples equal if and only if they have the same corresponding pair of elements

---
### tuple equality formula
$$
\begin{aligned}
a = b \iff \forall n(a_{n} = b_{n})
\end{aligned}
$$

---
### cartesian product
- set of all n-tuples from *n* sets

---
### cartesian product formula
$$
\begin{aligned}
A \times B = \{(a, b) | a \in A, b \in B\} \ne B \times A
\end{aligned}
$$

---
### calculate cartesian product
- construct n-tuple from 1st element of A and every element of B
- construct n-tuple from 2nd element of A and every element of B
- construct n-tuple from nth element of A and every element of B

---
### cartesian product equality
- two cartesian products equal if and only if they have the null set factor

---
### cartesian product equality formula
$$
\begin{aligned}
A \times B = B \times A \iff A = \emptyset \lor B = \emptyset
\end{aligned}
$$

---
### relation
- subset of cartesian product represent relationship between n-tuples from *n* sets

---
### relation formula
$$
\begin{aligned}
R \subseteq A \times B
\end{aligned}
$$

---
### domain restriction
- restrict domain such that domain of discourse valid if and only if domain meet condition

---
### universal domain restriction
- universal quantification of conditional

---
### universal domain restriction formula
$$
\begin{aligned}
\forall x \in A:P(x) \equiv x \in A \implies P(x)
\end{aligned}
$$

---
### existential domain restriction
- existential quantification of conjunction

---
### existential domain restriction formula
$$
\begin{aligned}
\exists x \in A:P(x) \equiv x \in A \land P(x)
\end{aligned}
$$

---
### truth set
- set of all elements in the domain of discourse that satisfy predicate

---
### truth set formula
$$
\begin{aligned}
T = \{x \in D | P(x)\} \\
D = \text{domain of discourse}
\end{aligned}
$$

---
### truth set property
- universal domain restriction true over domain of discourse if and only if truth set equal domain of discourse
- existential domain restriction true over domain of discourse if and only if nonempty truth set

---
### truth set property formula
$$
\begin{aligned}
\forall (x \in D)P(x) \iff T = D \\
\exists (x \in D)P(x) \iff T \ne \emptyset
\end{aligned}
$$

---
