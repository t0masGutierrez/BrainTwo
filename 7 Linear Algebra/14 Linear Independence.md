### linear independence
- zero vector not expressible as nontrivial linear combination of the vectors of set

---
### linear independence formula
$$
\begin{aligned}
\sum_{i=1}^n c_{i} \vec v_{i} = \vec 0 \implies \forall i: c_{i} = 0 \\
S = \{\vec v_{1}, \dots, \vec v_{n}\} \subset \mathcal V \\
n = \text{number of columns} \\
c = \text{scalar} \\
\vec v = \text{vector} \\
S = \text{linearly independent set} \\
\mathcal V = \text{vector space}
\end{aligned}
$$

---
### linear dependence
- zero vector expressible as nontrivial linear combination of the vectors of set

---
### linear dependence formula
$$
\begin{aligned}
\exists c_{i} \ne 0 : \sum_{i=1}^n c_{i} \vec v_{i} = \vec 0 \\
S = \{\vec v_{1}, \dots, \vec v_{n}\} \subset \mathcal V \\
n = \text{number of columns} \\
c = \text{scalar} \\
\vec v = \text{vector} \\
S = \text{linearly dependent set} \\
\mathcal V = \text{vector space}
\end{aligned}
$$

---
### linear independence test
- generate matrix whose columns equal the vectors of set
- form the reduced row echelon of the system
- vectors of set corresponding with pivot columns of RREF equal the linearly independent vectors of set
- vectors of set corresponding with nonpivot columns of RREF equal the linearly dependent vectors of set
- if number of pivot columns equal number of columns then linearly independent set
- if number of pivot columns not equal number of columns then linearly dependent set

---
### linear independence empty property
- empty set equal linearly independent set

---
### linear independence empty property formula
$$
\begin{aligned}
\emptyset = \{\}
\end{aligned}
$$

---
### linear independence singleton property
- nonzero singleton set equal linearly independent set

---
### linear independence singleton property formula
$$
\begin{aligned}
(S = \{\vec v\}) \land (\vec v \ne 0) \implies \text{rank}(S) = n \\
S = \text{set} \\
\vec v = \text{vector} \\
n = \text{number of columns}
\end{aligned}
$$

---
### linear independence zero property
- set with zero vector equal linearly dependent set

---
### linear independence zero property formula
$$
\begin{aligned}
\vec 0 \in S \implies \text{rank}(S) < n \\
S = \text{set} \\
n = \text{number of columns}
\end{aligned}
$$

---
### linear independence size property
- for collection of $n$ vectors, each with $m$ coordinates, if $n > m$ then linear dependent set

---
### linear independence size property formula
$$
\begin{aligned}
(\vec v \in \mathbb R^m) \land (n > m) \implies \text{rank}(\{\vec v_{1} \dots, \vec v_{n}\}) \ne n \\
\vec v = \text{vector} \\
m = \text{number of coordinates} \\
n = \text{number of vectors}
\end{aligned}
$$

---
### linear independence scalar property
- set with scalar multiple of vector equal linearly dependent set

---
### linear independence scalar property formula
$$
\begin{aligned}
(\sum_{i=1}^n c_{i}\vec v_{i} = \vec 0) \land (\exists i \ne j: \vec v_{i} = c\vec v_{j}) \implies \text{rank}(S) < n \\
n = \text{number of columns} \\
c = \text{scalar} \\
\vec v = \text{vector} \\
S = \text{set} 
\end{aligned}
$$

---
### linear independence redundancy property
- set without redundant vector equal linearly independent set

---
### linear independence redundancy property formula
$$
\begin{aligned}
\nexists \vec v \in S: \text{span}(S) = \text{span}(S \setminus \{\vec v\}) \implies \text{rank}(S) = n \\
\forall i \in \set{2, \dots, n}: \vec v_{i} \not\in \text{span}(\{\vec v_{1} \dots \vec v_{i-1} \}) \implies \text{rank}(S) = n \\
\vec v = \text{redundant vector} \\
S = \text{set} \\
n = \text{number of columns}
\end{aligned}
$$

---
### linear independence subset property
- every finite subset of linearly independent set equal equal linearly independent subset

---
### linear independence subset property formula
$$
\begin{aligned}
\forall S_{k} = \set{\vec v_{1}, \dots, \vec v_{k}} \subset S: \text{rank}(S_{k}) = k \iff \text{rank}(S) = n \\
S = \set{\vec v_{1}, \dots, \vec v_{n}} \\
n = \text{number of columns} \\
S = \text{set} 
\end{aligned}
$$

---
### linear independence uniqueness property
- for every element of span of linearly independent set there exists unique linear combination of vectors of linearly independent set

---
### linear independence uniqueness property formula
$$
\begin{aligned}
\forall \vec v \in \text{span}(S), \exists !(\sum_{i=1}^k c_{i}\vec v_{i}) \implies \text{rank}(S) = n \\
\vec v = \text{vector} \\
S = \text{set} \\
c = \text{scalar} \\
n = \text{number of columns}
\end{aligned}
$$

---
