### span
- set of all possible finite linear combinations of the vectors of set

---
### span formula
$$
\begin{aligned}
\text {span} ( S ) = \{ \sum _ { i = 1 } ^ { n } c _ { i } \vec v _ { i } \mid c \in \mathbb R , \vec v \in S \} \\
S = \text {set} \\
n = \text {dimension} \\
c = \text {scalar} \\
\vec v = \text {vector}
\end{aligned}
$$

---
### spanning
- span of set equal vector space

---
### spanning formula
$$
\begin{aligned}
\text {span} ( \set { \vec v _ { 1 } , \dots , \vec v _ { n } } ) = \mathcal V \\
\vec v = \text {vector} \\
n = \text {dimension} \\
\mathcal V = \text {vector space}
\end{aligned}
$$

---
### spanning example
- standard unit vector
- standard unit polynomial
- standard unit matrix

---
### spanning example formula
$$
\begin{aligned}
\text {span} ( \{ \vec e _ { 1 } , \vec e _ { 2 } , \dots , \vec e _ { n } \} ) = \mathbb R ^ { n } \\
\text {span} ( \{ 1 , x , x ^ { 2 } , \dots , x ^ { n } \} ) = \mathcal P _ { n } ( x ) \\
\text {span} ( \psi _ { ij } ) = \mathcal M _ { mn } \\
\end{aligned}
$$

---
### span test
- generate augmented matrix whose left columns equal the vectors of set and whose right matrix equal the possible element of span
- form the reduced row echelon of the system
- if consistent system then element of span
- if inconsistent system then not element of span

---
### spanning test
- generate matrix whose rows equal the vectors of set
- form the reduced row echelon of the system
- nonzero rows of RREF equal the simplified vectors of set
- zero rows of RREF equal the redundant vectors of set
- if number of nonzero rows equal number of rows then spanning set
- if number of nonzero rows not equal number of rows then nonspanning set

---
### span empty property
- span of empty set equal trivial subspace

---
### span empty property formula
$$
\begin{aligned}
\text {span} ( \emptyset ) = \{ \vec 0 \}
\end{aligned}
$$

---
### span intersection property
- span of set equal smallest subspace of vector space containing every vector of set

---
### span intersection property formula
$$
\begin{aligned}
\text {span} ( S ) = \bigcap \{ \mathcal W \le \mathcal V \mid S \subset \mathcal W \} \\
\mathcal W = \text {subspace} \\
\mathcal V = \text {vector space} \\
S = \text {set} \\
\end{aligned}
$$

---
### span subset property
- set equal subset of span of set
- span of subset equal subset

---
### span subset property formula
$$
\begin{aligned}
S \subset \text {span} ( S ) \\
S _ { 1 } \subset S _ { 2 } \implies \text {span} ( S _ { 1 } ) \subset \text {span} ( S _ { 2 } ) \\
S = \text {set}
\end{aligned}
$$

---
### span subset subspace property
- span of subset of subspace equal subset of subspace

---
### span subset subspace property formula
$$
\begin{aligned}
S \subset \mathcal W \le \mathcal V \implies \text {span} ( S ) \subset \mathcal W \\
S = \text {set} \\
\mathcal W = \text {subspace} \\
\mathcal V = \text {vector space}
\end{aligned}
$$

---
### span subspace property
- span of subspace equal subspace

---
### span subspace property formula
$$
\begin{aligned}
S \le \mathcal V \implies \text {span} ( S ) = S \le \mathcal V \\
S , \text {span} ( S ) = \text {subspace} \\
\mathcal V = \text {vector space}
\end{aligned}
$$

---
### span row space property
- row space of matrix equal the span of the rows of matrix

---
### span row space property formula
$$
\begin{aligned}
A = \begin{bmatrix} \vec a _ { 1 } \\ \vec a _ { 2 } \\ \vdots \\ \vec a _ { m } \end{bmatrix}
\implies
\text {Row} ( A ) = \text {span} \{ \vec a _ { 1 } , \vec a _ { 2 } , \dots , \vec a _ { m } \} \\
A = \text {matrix} \\
\vec a = \text {row vector}
\end{aligned}
$$

---
