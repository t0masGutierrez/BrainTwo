### span
- set of all possible finite linear combinations of the vectors of set

---
### span formula
$$
\begin{lgathered}
\text{span}(S)=\{\sum_{i=1}^{n}c_{i}\vec v_{i}\mid c\in\mathbb R,\vec v\in S\}\\
S=\text{set}\\
n=\text{dimension}\\
c=\text{scalar}\\
\vec v=\text{vector}
\end{lgathered}
$$

---
### spanning
- span of set equal vector space

---
### spanning formula
$$
\begin{lgathered}
\text{span}(\set{\vec v_{1},\dots,\vec v_{n}})=\mathcal V\\
\vec v=\text{vector}\\
n=\text{dimension}\\
\mathcal V=\text{vector space}
\end{lgathered}
$$

---
### spanning example
- standard unit vector
- standard unit polynomial
- standard unit matrix

---
### spanning example formula
$$
\begin{lgathered}
\text{span}(\{\vec e_{1},\vec e_{2},\dots,\vec e_{n}\})=\mathbb R^{n}\\
\text{span}(\{1,x,x^{2},\dots,x^{n}\})=\mathcal P_{n}(x)\\
\text{span}(\psi_{\text{ij}})=\mathcal M_{\text{mn}}\\
\end{lgathered}
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
\begin{lgathered}
\text{span}(\emptyset)=\{\vec0\}
\end{lgathered}
$$

---
### span intersection property
- span of set equal smallest subspace of vector space containing every vector of set

---
### span intersection property formula
$$
\begin{lgathered}
\text{span}(S)=\bigcap\{\mathcal W\le\mathcal V\mid S\subset\mathcal W\}\\
\mathcal W=\text{subspace}\\
\mathcal V=\text{vector space}\\
S=\text{set}\\
\end{lgathered}
$$

---
### span subset property
- set equal subset of span of set
- span of subset equal subset

---
### span subset property formula
$$
\begin{lgathered}
S\subset\text{span}(S)\\
S_{1}\subset S_{2}\implies\text{span}(S_{1})\subset\text{span}(S_{2})\\
S=\text{set}
\end{lgathered}
$$

---
### span subset subspace property
- span of subset of subspace equal subset of subspace

---
### span subset subspace property formula
$$
\begin{lgathered}
S\subset\mathcal W\le\mathcal V\implies\text{span}(S)\subset\mathcal W\\
S=\text{set}\\
\mathcal W=\text{subspace}\\
\mathcal V=\text{vector space}
\end{lgathered}
$$

---
### span subspace property
- span of subspace equal subspace

---
### span subspace property formula
$$
\begin{lgathered}
S\le\mathcal V\implies\text{span}(S)=S\le\mathcal V\\
S,\text{span}(S)=\text{subspace}\\
\mathcal V=\text{vector space}
\end{lgathered}
$$

---
### span row space property
- row space of matrix equal the span of the rows of matrix

---
### span row space property formula
$$
\begin{lgathered}
A=\begin{bmatrix}\vec a_{1}\\\vec a_{2}\\\vdots\\\vec a_{m}\end{bmatrix}
\implies
\text{Row}(A)=\text{span}\{\vec a_{1},\vec a_{2},\dots,\vec a_{m}\}\\
A=\text{matrix}\\
\vec a=\text{row vector}
\end{lgathered}
$$

---
