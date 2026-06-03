### null space
- subset of domain vectors that map to codomain zero vector
- aka null space

---
### null space formula
$$
\begin{aligned}
\text { null } ( L ) = \{ \vec v \mid \vec v \in \mathcal V , L : \mathcal V \rightarrow \mathcal W , L ( \vec v ) = \vec 0 _ { \mathcal W } \} \\
L = \text { linear transformation } \\
\mathcal V = \text { domain vector space } \\
\mathcal W = \text { codomain vector space } \\
\vec v = \text { preimage }
\end{aligned}
$$

---
### range
- subset of codomain vectors that map to domain vector

---
### range formula
$$
\begin{aligned}
\text { range } ( L ) = \{ L ( \vec v ) \mid \vec v \in \mathcal V , L : \mathcal V \rightarrow \mathcal W \} \\
L = \text { linear transformation } \\
\mathcal V = \text { domain vector space } \\
\mathcal W = \text { codomain vector space } \\
\vec v = \text { preimage } \\
L ( \vec v ) = \text { image }
\end{aligned}
$$

---
### null space basis
- form the reduced row echelon of the matrix transformation
- fundamental solutions of homogeneous linear system equal the basis vectors of null space

---
### range basis
- form the reduced row echelon of the matrix transformation
- vectors of set corresponding with pivot columns of RREF equal the basis vectors of range

---
### dimension property
- domain dimension equal null space dimension addition with range dimension

---
### dimension property formula
$$
\begin{aligned}
\dim ( \mathcal V ) \ne \infty \implies \dim ( \mathcal W \ne \infty ) \land \dim ( \text { null } \  L ) + \dim ( \text { range } \  L ) = \text { dim } ( \mathcal V ) \\
L : \mathcal V \rightarrow \mathcal W \\
\text { dim } ( \mathcal V ) = n \\
\text { dim } ( \mathcal W ) = m \\
\mathcal V = \text { domain vector space } \\
\mathcal W = \text { codomain vector space } \\
L = \text { linear transformation }
\end{aligned}
$$

---
### null space subspace property
- null space equal subspace of domain

---
### null space subspace property formula
$$
\begin{aligned}
\text { null } ( L ) \le \mathcal V \\
L : \mathcal V \rightarrow \mathcal W \\
L = \text { linear transformation } \\
\mathcal V = \text { domain vector space } \\
\mathcal W = \text { codomain vector space }
\end{aligned}
$$

---
### null space solution property
- null space equal complete solution set of homogeneous linear system

---
### null space solution property formula
$$
\begin{aligned}
\text { null } ( L ) = \{ \vec x \mid \vec x \in \mathbb R ^ { n } , A \in \mathcal M _ { m n } , L : \mathbb R ^ { n } \rightarrow \mathbb R ^ { m } , A \vec x = 0 \} \\
L = \text { linear transformation } \\
A = \text { matrix transformation } \\
\vec x = \text { preimage } \\
A \vec x = \text { image }
\end{aligned}
$$

---
### null space dimension property
- dimension of null space equal dimension of domain subtraction with rank of matrix transformation

---
### null space dimension property formula
$$
\begin{aligned}
{}[ L ( \vec v ) ] _ { C } = A _ { B C } [ \vec v ] _ { B } \implies \dim ( \text { null } \  L ) = \text { dim } ( \mathcal V ) - \text { rank } ( A ) \\
L : \mathcal V \rightarrow \mathcal W \\
L = \text { linear transformation } \\
{}[ \vec v ] _ { B } = \text { preimage coordinate vector } \\
{}[ L ( \vec v ) ] _ { C } = \text { image coordinate vector } \\
A = \text { matrix transformation } \\
B = \text { domain basis } \\
C = \text { codomain basis } \\
\mathcal V = \text { domain vector space } \\
\mathcal W = \text { codomain vector space }
\end{aligned}
$$

---
### range subspace property
- range equal subspace of codomain

---
### range subspace property formula
$$
\begin{aligned}
\text { range } ( L ) \le \mathcal W \\
L : \mathcal V \rightarrow \mathcal W \\
L = \text { linear transformation } \\
\mathcal V = \text { domain vector space } \\
\mathcal W = \text { codomain vector space }
\end{aligned}
$$

---
### range column property
- range equal column space of matrix transformation

---
### range column property formula
$$
\begin{aligned}
\text { range } ( L ) = \{ A _ { B C } \vec x \mid \vec x \in \mathbb R ^ { n } , A _ { B C } \in \mathcal M _ { m n } , L : \mathbb R ^ { n } \rightarrow \mathbb R ^ { m } \} = \text { Col } ( A _ { B C } ) \\
L = \text { linear transformation } \\
A = \text { matrix transformation } \\
B = \text { domain basis } \\
C = \text { codomain basis } \\
\vec x = \text { preimage } \\
A \vec x = \text { image }
\end{aligned}
$$

---
### range dimension property
- dimension of range equal rank of matrix transformation

---
### range dimension property formula
$$
\begin{aligned}
{}[ L ( \vec v ) ] _ { C } = A _ { B C } [ \vec v ] _ { B } \implies \dim ( \text { range } \  L ) = \text { rank } ( A _ { B C } ) \\
L : \mathcal V \rightarrow \mathcal W \\
L = \text { linear transformation } \\
{}[ \vec v ] _ { B } = \text { preimage coordinate vector } \\
{}[ L ( \vec v ) ] _ { C } = \text { image coordinate vector } \\
A = \text { matrix transformation } \\
B = \text { domain basis } \\
C = \text { codomain basis } \\
\mathcal V = \text { domain vector space } \\
\mathcal W = \text { codomain vector space }
\end{aligned}
$$

---
