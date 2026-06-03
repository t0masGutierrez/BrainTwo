### binary relation
- subset of cartesian product represent relationship between pairs of elements
- relate each element of set A to every element of set B

---
### binary relation formula
$$
\begin{aligned}
R \subseteq A \times B \implies ( a _ { i } , b _ { j } ) \in R \\
i , j = 1 , 2 , . . . n \\
i , j = \text { index }

\end{aligned}
$$

---
### self relation
- relation from A to A

---
### self relation formula
$$
\begin{aligned}
R \subseteq A \times A
\end{aligned}
$$

---
### reflexive relation
- every element relation of itself

---
### reflexive relation formula
$$
\begin{aligned}
\forall a ( a , a ) \in R
\end{aligned}
$$

---
### symmetric relation
- if element *a* relate element *b* then element *b* relate element *a*

---
### symmetric relation formula
$$
\begin{aligned}
( a , b ) \in R \implies ( b , a ) \in R
\end{aligned}
$$

---
### antisymmetric relation
- if element *a* relate element *b* and element *b* relate element *a* then both element equal

---
### antisymmetric relation formula
$$
\begin{aligned}
( a , b ) \in R \land ( b , a ) \in R \implies a = b
\end{aligned}
$$

---
### transitive relation
- if element *a* relate element *b* and element *b* relate element *c* then element *a* relate element *c*

---
### transitive relation formula
$$
\begin{aligned}
( a , b ) \in R \land ( b , c ) \in R \implies ( a , c ) \in R
\end{aligned}
$$

---
### composite relation
- if relation *P* relate element *a* to element *b* and relation *Q* relate element *b* to element *c* then composition of *P* and *Q* relate element *a* to element *c*

---
### composite relation formula
$$
\begin{aligned}
( a , b ) \in P \land ( b , c ) \in Q \implies ( a , c ) \in P \circ Q
\end{aligned}
$$

---
### composite self relation
- powers of self relation represent multiple compositions of relation with self

---
### composite self relation formula
$$
\begin{aligned}
R ^ { n } = R ^ { n - 1 } \circ R
\end{aligned}
$$

---
### binary matrix relation
- represent relation as matrix of 0s and 1s

---
### binary matrix relation formula
$$
\begin{aligned}
( a _ { i } , b _ { j } ) \in R \implies m _ { ij } = 1 \\
( a _ { i } , b _ { j } ) \notin R \implies m _ { ij } = 0 \\
i = \text { row index } \\
j = \text { column index }
\end{aligned}
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
\begin{aligned}
( a , b ) \in R \\
a = \text { initial vertex } \\
b = \text { terminal vertex }
\end{aligned}
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
\begin{aligned}
a R a \\
a R b \implies b R a \\
a R b \land b R c \implies a R c \\
\therefore a \sim b
\end{aligned}
$$

---
### equivalence class
- set of all elements *x* such that there exists equivalence relation with element *a* 

---
### equivalence class formula
$$
\begin{aligned}
{}[ a ] = \{ x \in A | x \sim a \}
\end{aligned}
$$

---
### representative
- element of equivalence class

---
### representative formula
$$
\begin{aligned}
x \in [ a ]
\end{aligned}
$$

---
### modulo congruence class
- groups of integers that have the same remainder after dividing by *n*

---
### modulo congruence class formula
$$
\begin{aligned}
{}[ a ] = \{ x \in Z | x \equiv a \  \text { mod } \  n \}
\end{aligned}
$$

---
### partition
- division of set *A* into nonempty pairwise disjoint subsets whose union equal set *A*
![[5 Discrete Mathematics/Images/partition.png|600]]

---
### partition formula
$$
\begin{aligned}
A _ { i } = \{ A _ { 1 } , A _ { 2 } , . . . A _ { k } \} \\
\forall i ( A _ { i } \ne \emptyset ) \\
\forall i \forall j ( i \ne j ) ( A _ { i } \cap A _ { j } = \emptyset ) \\
\bigcup _ { i = 1 } ^ { k } A _ { i } = A \\
\therefore A _ { i } = \{ x \in A | x \sim a _ { i } \}
\end{aligned}
$$

---
