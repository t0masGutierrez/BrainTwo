### binary relation
- subset of cartesian product represent relationship between pairs of elements
- relate each element of set A to every element of set B

---
### binary relation formula
$$
\begin{array}{l}
R\subseteq A\times B\implies(a_{i},b_{j})\in R\\
i,j=1,2,...n\\
i,j=\text{index}

\end{array}
$$

---
### self relation
- relation from A to A

---
### self relation formula
$$
\begin{array}{l}
R\subseteq A\times A
\end{array}
$$

---
### reflexive relation
- every element relation of itself

---
### reflexive relation formula
$$
\begin{array}{l}
\forall a(a,a)\in R
\end{array}
$$

---
### symmetric relation
- if element *a* relate element *b* then element *b* relate element *a*

---
### symmetric relation formula
$$
\begin{array}{l}
(a,b)\in R\implies(b,a)\in R
\end{array}
$$

---
### antisymmetric relation
- if element *a* relate element *b* and element *b* relate element *a* then both element equal

---
### antisymmetric relation formula
$$
\begin{array}{l}
(a,b)\in R\land(b,a)\in R\implies a=b
\end{array}
$$

---
### transitive relation
- if element *a* relate element *b* and element *b* relate element *c* then element *a* relate element *c*

---
### transitive relation formula
$$
\begin{array}{l}
(a,b)\in R\land(b,c)\in R\implies(a,c)\in R
\end{array}
$$

---
### composite relation
- if relation *P* relate element *a* to element *b* and relation *Q* relate element *b* to element *c* then composition of *P* and *Q* relate element *a* to element *c*

---
### composite relation formula
$$
\begin{array}{l}
(a,b)\in P\land(b,c)\in Q\implies(a,c)\in P\circ Q
\end{array}
$$

---
### composite self relation
- powers of self relation represent multiple compositions of relation with self

---
### composite self relation formula
$$
\begin{array}{l}
R^{n}=R^{n-1}\circ R
\end{array}
$$

---
### binary matrix relation
- represent relation as matrix of 0s and 1s

---
### binary matrix relation formula
$$
\begin{array}{l}
(a_{i},b_{j})\in R\implies m_{\text{ij}}=1\\
(a_{i},b_{j})\notin R\implies m_{\text{ij}}=0\\
i=\text{row index}\\
j=\text{column index}
\end{array}
$$

---
### reflexive matrix
- diagonal elements of matrix equal 1
![[5 Discrete Mathematics/Images/reflexive matrix.png]]

---
### symmetric matrix
- corresponding elements of matrix equal itself
![[5 Discrete Mathematics/Images/symmetric matrix.png]]

---
### antisymmetric matrix
- corresponding elements of matrix equal complement
![[5 Discrete Mathematics/Images/asymmetric matrix.png]]

---
### composite matrix
- if matrix *P* relate set *A* to set *B* and matrix *Q* relate set *B* to set *C* then composition of *P* and *Q* relate set *A* to set *C*

---
### composite self matrix
- powers of self matrix represent multiple compositions of relation with self

---
### digraph
- represent relation as directional graph of vertices and edges where vertices represent elements and edges represent relations
![[5 Discrete Mathematics/Images/digraph.png]]

---
### digraph formula
$$
\begin{array}{l}
(a,b)\in R\\
a=\text{initial vertex}\\
b=\text{terminal vertex}
\end{array}
$$

---
### reflexive digraph
- for every vertex there exists loop

---
### symmetric digraph
- for every edge between different vertices there exists opposite edge between same vertices

---
### antisymmetric digraph
- for every edge between different vertices there exists no opposite edge between same vertices

---
### transitive digraph
- if edge relate vertex *a* and vertex *b* and edge relate vertex *b* and vertex *c* then edge relate vertex *a* and vertex *c*

---
### digraph summary
- reflexivity
- symmetry
- transitivity
![[5 Discrete Mathematics/Images/digraph summary.png]]

---
### equivalence relation
- reflexive
- symmetric
- transitive

---
### equivalence relation formula
$$
\begin{array}{l}
aRa\\
aRb\implies bRa\\
aRb\land bRc\implies aRc\\
\therefore a\sim b
\end{array}
$$

---
### equivalence class
- set of all elements *x* such that there exists equivalence relation with element *a*

---
### equivalence class formula
$$
\begin{array}{l}
{}[a]=\{x\in A|x\sim a\}
\end{array}
$$

---
### representative
- element of equivalence class

---
### representative formula
$$
\begin{array}{l}
x\in[a]
\end{array}
$$

---
### modulo congruence class
- groups of integers that have the same remainder after dividing by *n*

---
### modulo congruence class formula
$$
\begin{array}{l}
{}[a]=\{x\in Z|x\equiv a\ \text{mod}\ n\}
\end{array}
$$

---
### partition
- division of set *A* into nonempty pairwise disjoint subsets whose union equal set *A*
![[5 Discrete Mathematics/Images/partition.png|600]]

---
### partition formula
$$
\begin{array}{l}
A_{i}=\{A_{1},A_{2},...A_{k}\}\\
\forall i(A_{i}\ne\emptyset)\\
\forall i\forall j(i\ne j)(A_{i}\cap A_{j}=\emptyset)\\
\bigcup_{i=1}^{k}A_{i}=A\\
\therefore A_{i}=\{x\in A|x\sim a_{i}\}
\end{array}
$$

---
