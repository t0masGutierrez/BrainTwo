### function
- map every element from A to 1 element of B

---
### function formula
$$
\begin{aligned}
f: A \to B \iff \forall a \in A, \exists ! b \in B: f(a) = b \\
f = \text{function} \\
A = \text{domain} \\
B = \text{codomain} \\
a = \text{preimage} \\
f(a) = \text{image} \\
f(A) = \text{range}
\end{aligned}
$$

---
### linear transformation
- function of vector space closed under vector addition and scalar multiplication

---
### linear transformation formula
$$
\begin{aligned}
L: \mathcal V \rightarrow \mathcal W \iff \begin{cases} 
L(\vec v) = \vec w \\
L(\vec v_{1} + \vec v_{2}) = L(\vec v_{1}) + L(\vec v_{2}) \\
L(c\vec v) = cL(\vec v)
\end{cases}
\\
L = \text{linear transformation} \\
\mathcal V = \text{domain vector space} \\
\mathcal W = \text{codomain vector space} \\
\vec v = \text{preimage} \\
\vec w = \text{image} \\
c = \text{scalar}
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
L = \text{linear operator} \\
\mathcal V = \text{vector space}
\end{aligned}
$$

---
### identity linear operator
- linear transformation whose preimage equal image

---
### identity linear operator formula
$$
\begin{aligned}
I : \mathcal V \rightarrow \mathcal V \iff L(\vec v) = \vec v \\
L = \text{identity linear operator} \\
\mathcal V = \text{vector space} \\
\vec v = \text{vector}
\end{aligned}
$$

---
### translation
- translate vector along subspace

---
### translation formula
$$
\begin{aligned}
{}[v_{1}, \dots, v_{i}, \dots, v_{n}] \mapsto [v_{1}, \dots, v_{i} + c, \dots, v_{n}]
\end{aligned}
$$

---
### reflection
- reflect vector across subspace

---
### reflection formula
$$
\begin{aligned}
{}[v_{1}, \dots, v_{i}, \dots, v_{n}] \mapsto [v_{1}, \dots, -v_{i}, \dots, v_{n}]
\end{aligned}
$$

---
### contraction
- decrease vector along subspace

---
### contraction formula
$$
\begin{aligned}
{}[v_{1}, \dots, v_{i}, \dots, v_{n}] \mapsto [v_{1}, \dots, cv_{i}, \dots, v_{n}] \\
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
{}[v_{1}, \dots, v_{i}, \dots, v_{n}] \mapsto [v_{1}, \dots, cv_{i}, \dots, v_{n}] \\
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
{}[v_{1}, \dots, v_{i}, \dots, v_{n}] \mapsto [v_{1}, \dots, 0, \dots, v_{n}]
\end{aligned}
$$

---
### rotation
- rotate vector about origin

---
### rotation formula
$$
\begin{aligned}
{}[v_{1}, \dots, v_{i}, \dots, v_{n}] \mapsto \begin{bmatrix} \cos \theta & -\sin \theta \\ \sin \theta & \cos \theta \end{bmatrix} \begin{bmatrix} v_{1} \\ \vdots \\ v_{i} \\ \vdots \\ v_{n} \end{bmatrix} 
\end{aligned}
$$

---
### linear transformation zero property
- linear transformation of domain zero vector equal codomain zero vector

---
### linear transformation zero property formula
$$
\begin{aligned}
L(\vec 0_{\mathcal V}) = \vec 0_{\mathcal W} \\
L = \text{linear transformation} \\
\mathcal V = \text{domain vector space} \\
\mathcal W = \text{codomain vector space}
\end{aligned}
$$

---
### linear transformation linearity property
- linear transformation of linear combination equal linear combination of linear transformation

---
### linear transformation linearity property formula
$$
\begin{aligned}
L(\sum_{i=1}^n c_{i}\vec v_{i}) = \sum_{i=1}^n c_{i} L(\vec v_{i}) \\
L = \text{linear transformation} \\
n = \text{dimension} \\
c = \text{scalar} \\
\vec v = \text{preimage} 
\end{aligned}
$$

---
### linear transformation composite property
- composition of linear transformation equal linear transformation 

---
### linear transformation composite property formula
$$
\begin{aligned}
(L_{1}: \mathcal V_{1} \rightarrow \mathcal V_{2}) \land (L_{2}: \mathcal V_{2} \rightarrow \mathcal V_{3}) \implies L_{2} \circ L_{1} : \mathcal V_{1} \rightarrow \mathcal V_{3} \\
(L_{2} \circ L_{1})(\vec v) = L_{2}(L_{1}(\vec v)) \\
L = \text{linear transformation} \\
\mathcal V = \text{vector space} 
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
(L : \mathcal V \rightarrow \mathcal W) \land (\mathcal V' \le \mathcal V) \implies L(\mathcal V') = \{L(\vec v) \mid \vec v \in \mathcal V'\} \le \mathcal W \\
(L : \mathcal V \rightarrow \mathcal W) \land (\mathcal W' \le \mathcal W) \implies L^{-1}(\mathcal W') = \{\vec v \mid L(\vec v) \in \mathcal W'\} \le \mathcal V \\
L = \text{linear transformation} \\
\mathcal V = \text{domain vector space} \\
\mathcal W = \text{codomain vector space} \\
\vec v = \text{preimage} \\
L(\vec v) = \text{image}
\end{aligned}
$$

---
