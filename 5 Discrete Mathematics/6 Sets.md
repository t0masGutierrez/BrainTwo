### natural number
- set of counting numbers excluding zero
- $N=\{1,2,3,...\}$

---
### whole number
- set of natural numbers including zero
- $W=\{0,1,2,3,...\}$

---
### integer
- set of whole numbers including negative
- $Z=\{...,⁻2,⁻1,0,1,2,...\}$

---
### rational number
- set of numbers expressible as ratio of two integers
- $Q=\{\frac{p}{q}|p∈Z,q∈Z,q≠0\}$

---
### irrational number
- set of numbers not expressible as ratio of two integers
- $R\backslash Q=\{x∈R|x∉Q\}$

---
### real number
- set of numbers including rational and irrational
- $R=\{x|⁻∞<x<⁺∞\}$

---
### complex number
- set of imaginary numbers including imaginary part
- $C=\{a+bi|a,b∈R,i²=⁻1\}$

---
### set
- unordered collection of distinct objects

---
### set formula
$$
\begin{array}{l}
x\in A=\text{x is element of set A}\\
A\ni x=\text{set A contains element x}\\
x\notin A=\text{x is not element of set A}\\
\end{array}
$$

---
### roster method
- method of describing set by enclosing list of elements inside braces

---
### roster formula
$$
\begin{array}{l}
A=\{x_{1},x_{2},...x_{n}\}
\end{array}
$$

---
### set builder method
- method of describing set by stating propertys that elements must satisfy to be members

---
### set builder formula
$$
\begin{array}{l}
A=\{x|P(x)\}\\
P(x)=\text{proposition function}
\end{array}
$$

---
### interval method
- method of describing set by stating domain that elements must satisfy to be members
![[5 Discrete Mathematics/Images/interval method.png]]

---
### interval formula
$$
\begin{array}{l}
{}[a,b]\\
{}[a,b)\\
(a,b]\\
(a,b)
\end{array}
$$

---
### set equality
- two sets equal if and only if they have the same elements

---
### set equality formula
$$
\begin{array}{l}
A=B\iff\forall x(x\in A\iff x\in B)\\
\end{array}
$$

---
### null set
- empty set containing 0 elements

---
### null set formula
$$
\begin{array}{l}
\emptyset=\{\}
\end{array}
$$

---
### singleton set
- set containing 1 element

---
### singleton set formula
$$
\begin{array}{l}
A=\{x_{1}\}
\end{array}
$$

---
### universal set
- set containing all elements under consideration

---
### universal set formula
$$
\begin{array}{l}
U=\forall x
\end{array}
$$

---
### improper subset
- every element of set A also element of set B and possibly equal

---
### improper subset formula
$$
\begin{array}{l}
A\subseteq B\equiv\forall x(x\in A\implies x\in B)
\end{array}
$$

---
### improper superset
- set B contain every element of set A and possibly equal

---
### improper superset formula
$$
\begin{array}{l}
B\supseteq A\equiv\forall x(x\in B\implies x\in A)
\end{array}
$$

---
### two subset theorem
- for every nonempty set A there exists proper subset $\emptyset$ and improper subset A

---
### two subset formula
$$
\begin{array}{l}
\forall A(A\ne\emptyset)(\emptyset\subset A\land A\subseteq A)
\end{array}
$$

---
### proper subset
- every element of set A also element of set B and impossibly equal

---
### proper subset formula
$$
\begin{array}{l}
A\subset B\equiv A\subseteq B\land A\ne B
\end{array}
$$

---
### proper superset
- set B contain some element of set A and impossibly equal

---
### proper superset formula
$$
\begin{array}{l}
B\supset A\equiv(\forall x\in A:x\in B)\land(\exists y\in B:y\not\in A)
\end{array}
$$

---
### subset equality
- two sets equal if and only if they have the same elements

---
### subset equality formula
$$
\begin{array}{l}
A=B\iff A\subseteq B\land B\supseteq A
\end{array}
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
\begin{array}{l}
|A|=n\\
n=\text{number of elements}
\end{array}
$$

---
### power set
- set of all subsets of set A including set A and set $\emptyset$

---
### power set formula
$$
\begin{array}{l}
\mathcal{P}(A)=2^{n}\\
n=\text{number of elements}
\end{array}
$$

---
### tuple
- ordered collection of objects

---
### tuple formula
$$
\begin{array}{l}
a=(x_{1},x_{2},...x_{n})
\end{array}
$$

---
### tuple equality
- two tuples equal if and only if they have the same corresponding pair of elements

---
### tuple equality formula
$$
\begin{array}{l}
a=b\iff\forall n(a_{n}=b_{n})
\end{array}
$$

---
### cartesian product
- set of all n-tuples from *n* sets

---
### cartesian product formula
$$
\begin{array}{l}
A\times B=\{(a,b)|a\in A,b\in B\}\ne B\times A
\end{array}
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
\begin{array}{l}
A\times B=B\times A\iff A=\emptyset\lor B=\emptyset
\end{array}
$$

---
### relation
- subset of cartesian product represent relationship between n-tuples from *n* sets

---
### relation formula
$$
\begin{array}{l}
R\subseteq A\times B
\end{array}
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
\begin{array}{l}
\forall x\in A:P(x)\equiv x\in A\implies P(x)
\end{array}
$$

---
### existential domain restriction
- existential quantification of conjunction

---
### existential domain restriction formula
$$
\begin{array}{l}
\exists x\in A:P(x)\equiv x\in A\land P(x)
\end{array}
$$

---
### truth set
- set of all elements in the domain of discourse that satisfy predicate

---
### truth set formula
$$
\begin{array}{l}
T=\{x\in D|P(x)\}\\
D=\text{domain of discourse}
\end{array}
$$

---
### truth set property
- universal domain restriction true over domain of discourse if and only if truth set equal domain of discourse
- existential domain restriction true over domain of discourse if and only if nonempty truth set

---
### truth set property formula
$$
\begin{array}{l}
\forall(x\in D)P(x)\iff T=D\\
\exists(x\in D)P(x)\iff T\ne\emptyset
\end{array}
$$

---
