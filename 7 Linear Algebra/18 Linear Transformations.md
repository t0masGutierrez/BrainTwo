### function
- map every element from A to 1 element of B

---
### function formula
$$
\begin{aligned}
f : A \to B \iff \forall a \in A , \exists ! b \in B : f ( a ) = b \\
f = \text { function } \\
A = \text { domain } \\
B = \text { codomain } \\
a = \text { preimage } \\
f ( a ) = \text { image } \\
f ( A ) = \text { range }
\end{aligned}
$$

---
### linear transformation
- function of vector space closed under vector addition and scalar multiplication

---
### linear transformation formula
$$
\begin{aligned}
L : \mathcal V \rightarrow \mathcal W \iff \begin { c a s e s }
L ( \vec v ) = \vec w \\
L ( \vec v _ { 1 } + \vec v _ { 2 } ) = L ( \vec v _ { 1 } ) + L ( \vec v _ { 2 } ) \\
L ( c \vec v ) = c L ( \vec v )
\end{cases}
\\
L = \text { linear transformation } \\
\mathcal V = \text { domain vector space } \\
\mathcal W = \text { codomain vector space } \\
\vec v = \text { preimage } \\
\vec w = \text { image } \\
c = \text { scalar }
\end{aligned}
$$

---
### linear operator
- linear transformation whose domain equal codomain

---
### linear operator formula
$$
\begin{aligned}
L : \mathcal V \rightarrow \mathcal V \\
L = \text { linear operator } \\
\mathcal V = \text { vector space }
\end{aligned}
$$

---
### identity linear operator
- linear transformation whose preimage equal image

---
### identity linear operator formula
$$
\begin{aligned}
I : \mathcal V \rightarrow \mathcal V \iff L ( \vec v ) = \vec v \\
L = \text { identity linear operator } \\
\mathcal V = \text { vector space } \\
\vec v = \text { vector }
\end{aligned}
$$

---
### translation
- translate vector along subspace

---
### translation formula
$$
\begin{aligned}
{}[ v _ { 1 } , \dots , v _ { i } , \dots , v _ { n } ] \mapsto [ v _ { 1 } , \dots , v _ { i } + c , \dots , v _ { n } ]
\end{aligned}
$$

---
### reflection
- reflect vector across subspace

---
### reflection formula
$$
\begin{aligned}
{}[ v _ { 1 } , \dots , v _ { i } , \dots , v _ { n } ] \mapsto [ v _ { 1 } , \dots , - v _ { i } , \dots , v _ { n } ]
\end{aligned}
$$

---
### contraction
- decrease vector along subspace

---
### contraction formula
$$
\begin{aligned}
{}[ v _ { 1 } , \dots , v _ { i } , \dots , v _ { n } ] \mapsto [ v _ { 1 } , \dots , c v _ { i } , \dots , v _ { n } ] \\
0 < c < 1
\end{aligned}
$$

---
### dilation
- increase vector along subspace

---
### dilation formula
$$
\begin{aligned}
{}[ v _ { 1 } , \dots , v _ { i } , \dots , v _ { n } ] \mapsto [ v _ { 1 } , \dots , c v _ { i } , \dots , v _ { n } ] \\
c > 1
\end{aligned}
$$

---
### projection
- project vector onto subspace

---
### projection formula
$$
\begin{aligned}
{}[ v _ { 1 } , \dots , v _ { i } , \dots , v _ { n } ] \mapsto [ v _ { 1 } , \dots , 0 , \dots , v _ { n } ]
\end{aligned}
$$

---
### rotation
- rotate vector about origin

---
### rotation formula
$$
\begin{aligned}
{}[ v _ { 1 } , \dots , v _ { i } , \dots , v _ { n } ] \mapsto \begin { b m a t r i x } \cos \theta & - \sin \theta \\ \sin \theta & \cos \theta \end { b m a t r i x } \begin { b m a t r i x } v _ { 1 } \\ \vdots \\ v _ { i } \\ \vdots \\ v _ { n } \end { b m a t r i x }
\end{aligned}
$$

---
### linear transformation zero property
- linear transformation of domain zero vector equal codomain zero vector

---
### linear transformation zero property formula
$$
\begin{aligned}
L ( \vec 0 _ { \mathcal V } ) = \vec 0 _ { \mathcal W } \\
L = \text { linear transformation } \\
\mathcal V = \text { domain vector space } \\
\mathcal W = \text { codomain vector space }
\end{aligned}
$$

---
### linear transformation linearity property
- linear transformation of linear combination equal linear combination of linear transformation

---
### linear transformation linearity property formula
$$
\begin{aligned}
L ( \sum _ { i = 1 } ^ { n } c _ { i } \vec v _ { i } ) = \sum _ { i = 1 } ^ { n } c _ { i } L ( \vec v _ { i } ) \\
L = \text { linear transformation } \\
n = \text { dimension } \\
c = \text { scalar } \\
\vec v = \text { preimage }
\end{aligned}
$$

---
### linear transformation composite property
- composition of linear transformation equal linear transformation 

---
### linear transformation composite property formula
$$
\begin{aligned}
( L _ { 1 } : \mathcal V _ { 1 } \rightarrow \mathcal V _ { 2 } ) \land ( L _ { 2 } : \mathcal V _ { 2 } \rightarrow \mathcal V _ { 3 } ) \implies L _ { 2 } \circ L _ { 1 } : \mathcal V _ { 1 } \rightarrow \mathcal V _ { 3 } \\
( L _ { 2 } \circ L _ { 1 } ) ( \vec v ) = L _ { 2 } ( L _ { 1 } ( \vec v ) ) \\
L = \text { linear transformation } \\
\mathcal V = \text { vector space }
\end{aligned}
$$

---
### linear transformation subspace property
- image of domain subspace equal subspace of codomain
- inverse image of codomain subspace equal subspace of domain

---
### linear transformation subspace property formula
$$
\begin{aligned}
( L : \mathcal V \rightarrow \mathcal W ) \land ( \mathcal V ' \le \mathcal V ) \implies L ( \mathcal V ' ) = \{ L ( \vec v ) \mid \vec v \in \mathcal V ' \} \le \mathcal W \\
( L : \mathcal V \rightarrow \mathcal W ) \land ( \mathcal W ' \le \mathcal W ) \implies L ^ { - 1 } ( \mathcal W ' ) = \{ \vec v \mid L ( \vec v ) \in \mathcal W ' \} \le \mathcal V \\
L = \text { linear transformation } \\
\mathcal V = \text { domain vector space } \\
\mathcal W = \text { codomain vector space } \\
\vec v = \text { preimage } \\
L ( \vec v ) = \text { image }
\end{aligned}
$$

---
