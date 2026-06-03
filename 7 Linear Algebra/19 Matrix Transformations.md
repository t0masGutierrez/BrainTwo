### action
- if known action of linear transformation on domain basis then known action of linear transformation on domain because every vector equal linear combination of basis vector

---
### action formula
$$
\begin{aligned}
( L : \mathcal V \rightarrow \mathcal W ) \land ( B = \set { \vec b _ { 1 } , \dots , \vec b _ { n } } ) \implies \\
\forall \vec v \in \mathcal V : L ( \vec v ) = L ( \sum _ { i = 1 } ^ { n } c _ { i } \vec b _ { i } ) = \sum _ { i = 1 } ^ { n } c _ { i } L ( \vec b _ { i } ) \\
L = \text { linear transformation } \\
\mathcal V = \text { domain vector space } \\
\mathcal W = \text { codomain vector space } \\
B = \text { basis } \\
c = \text { scalar } \\
\vec b = \text { basis vector } \\
\vec v = \text { preimage } \\
\vec L ( \vec v ) = \text { image }
\end{aligned}
$$

---
### matrix transformation
- image as C-coordinates equal matrix multiplication with preimage as B-coordinates
- jth column of matrix transformation equal jth basis image expressed as C-coordinates

---
### matrix transformation formula
$$
\begin{aligned}
( L : \mathcal V \rightarrow \mathcal W ) \land ( B = \set { \vec b _ { 1 } , \dots , \vec b _ { n } } ) \land ( C = \set { \vec c _ { 1 } , \dots \vec c _ { m } } ) \implies \\
\forall \vec v \in \mathcal V : [ L ( \vec v ) ] _ { C } = A _ { BC } [ \vec v ] _ { B } \\
\dim ( \mathcal V ) = n \\
\dim ( \mathcal W ) = m \\
| A _ { BC } | = m \times n \\
L = \text { linear transformation } \\
\mathcal V = \text { domain vector space } \\
\mathcal W = \text { codomain vector space } \\
B = \text { domain basis } \\
\vec b = \text { domain basis vector } \\
C = \text { codomain basis } \\
\vec c = \text { codomain basis vector } \\
{}[ L ( \vec v ) ] _ { C } = \text { image coordinate vector } \\
{}[ \vec v ] _ { B } = \text { preimage coordinate vector } \\
A = \text { matrix transformation }
\end{aligned}
$$

---
### terminology
- matrix $A _ { BC }$ equal matrix $A$ of the linear transformation $L$ with respect to the domain basis $B$ and codomain basis $C$

---
### matrix transformation transition property
- matrix transformation with change of coordinates

---
### matrix transformation transition property formula
$$
\begin{aligned}
( L : \mathcal V \rightarrow \mathcal W ) \land ( [ \vec v ] _ { D } = P _ { BD } [ \vec v ] _ { B } ) \land ( [ L ( \vec v ) ] _ { E } = Q _ { CE } [ L ( \vec v ) ] _ { C } ) \implies A _ { DE } = Q _ { CE } A _ { BC } P _ { BD } ^ { - 1 } \\
L = \text { linear transformation } \\
\mathcal V = \text { domain vector space } \\
\mathcal W = \text { codomain vector space } \\
B , D = \text { domain basis } \\
C , E = \text { codomain basis } \\
{}[ \vec v ] _ { B } , [ \vec v ] _ { D } = \text { preimage coordinate vector } \\
{}[ L ( \vec v ) ] _ { C } , [ L ( \vec v ) ] _ { E } = \text { image coordinate vector } \\
P = \text { domain transition matrix } \\
Q = \text { codomain transition matrix } \\
A = \text { matrix transformation }
\end{aligned}
$$

---
### matrix transformation similarity property
- matrices representing the same linear operator with respect to different bases equal similar matrices

---
### matrix transformation similarity property formula
$$
\begin{aligned}
( L : \mathcal V \rightarrow \mathcal V ) \land ( [ L ( \vec v ) ] _ { B } = A _ { BB } [ \vec v ] _ { B } ) \land ( [ L ( \vec v ) ] _ { D } = A _ { DD } [ \vec v ] _ { D } ) \land ( [ \vec v ] _ { D } = P _ { BD } [ \vec v ] _ { B } ) \implies A _ { BB } \sim A _ { DD } \\
A _ { BB } = P _ { BD } ^ { - 1 } A _ { DD } P _ { BD } \\
A _ { DD } = P _ { BD } A _ { BB } P _ { BD } ^ { - 1 } \\
L = \text { linear transformation } \\
\mathcal V = \text { vector space } \\
{}[ \vec v ] _ { B } , [ \vec v ] _ { D } = \text { coordinate vector } \\
\vec v = \text { coordinatized vector } \\
B , D = \text { basis } \\
P = \text { transition matrix } \\
P ^ { - 1 } = \text { inverse transition matrix }
\end{aligned}
$$

---
### matrix transformation composite property
- composition of matrix transformation equal matrix transformation

---
### matrix transformation composite property formula
$$
\begin{aligned}
( L _ { 1 } : \mathcal V _ { 1 } \rightarrow \mathcal V _ { 2 } ) \land ( L _ { 2 } : \mathcal V _ { 2 } \rightarrow \mathcal V _ { 3 } ) \implies L _ { 2 } \circ L _ { 1 } : \mathcal V _ { 1 } \rightarrow \mathcal V _ { 3 } \\
( [ L ( \vec v _ { 1 } ) ] _ { C } = A _ { BC } [ \vec v _ { 1 } ] _ { B } ) \land ( [ L ( \vec v _ { 2 } ) ] _ { D } = A _ { CD } [ \vec v _ { 2 } ] _ { C } ) \implies A _ { BD } = A _ { CD } A _ { BC } \\
L = \text { linear transformation } \\
\mathcal V = \text { vector space } \\
B = \text { 1st basis } \\
C = \text { 2nd basis } \\
D = \text { 3rd basis } \\
{}[ \vec v _ { 1 } ] _ { B } , [ \vec v _ { 2 } ] _ { C } = \text { preimage coordinate vector } \\
{}[ L ( \vec v _ { 1 } ) ] _ { C } , [ L ( \vec v _ { 2 } ) ] _ { D } = \text { image coordinate vector } \\
A = \text { matrix transformation }
\end{aligned}
$$

---
