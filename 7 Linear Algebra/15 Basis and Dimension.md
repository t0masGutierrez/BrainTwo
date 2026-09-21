### basis
- spanning
- linearly independent

---
### basis formula
$$
\begin{array}{l}
\text{span}(B)=\mathcal V\\
\text{rank}(B)=n
\end{array}
$$

---
### dimension
- number of elements of basis

---
### dimension formula
$$
\begin{array}{l}
\dim(\mathcal V)=|B|\\
\mathcal V=\text{vector space}\\
B=\text{basis}\\
|B|=\text{number of elements}
\end{array}
$$

---
### dimension example
- $\mathbb R^{n}$
- $\mathcal P_{n}$
- $\mathcal M_{\text{mn}}$

---
### dimension example formula
$$
\begin{array}{l}
\dim(\mathbb R^{n})=n\\
\dim(\mathcal P_{n})=n+1\\
\dim(\mathcal M_{\text{mn}})=m\cdot n\\
\end{array}
$$

---
### trivial dimension
- empty set equal basis of trivial vector space

---
### trivial dimension formula
$$
\begin{array}{l}
\dim(\{\vec0\})=0
\end{array}
$$

---
### basis equality property
- all bases share the same number of elements

---
### basis equality property formula
$$
\begin{array}{l}
(\text{span}(B_{1},B_{2})=\mathcal V)\land(\text{rank}(B_{1},B_{2})=n)\land(|B_{1}|\ne\infty)\implies|B_{1}|=|B_{2}|\\
B=\text{basis}\\
\mathcal V=\text{vector space}\\
n=\text{number of columns}
\end{array}
$$

---
### basis size property
- size of linearly independent set less or equal size of spanning set

---
### basis size property formula
$$
\begin{array}{l}
(\text{span}\ S=\mathcal V)\land(|S|\ne\infty)\land(\text{rank}\ T=n)\implies\infty\ne|T|\le|S|\\
S,T\subset\mathcal V\\
\mathcal V=\text{vector space}\\
n=\text{number of columns}\\
\end{array}
$$

---
### dimension subspace property
- dimension of subspace less or equal dimension of vector space

---
### dimension subspace property formula
$$
\begin{array}{l}
\mathcal W\le\mathcal V\implies\dim(\mathcal W)\le\dim(\mathcal V)\\
\dim(\mathcal W)=\dim(\mathcal V)\iff\mathcal W=\mathcal V\\
\mathcal W=\text{subspace}\\
\mathcal V=\text{vector space}
\end{array}
$$

---
### basis diagonalization property
- fundamental eigenvectors of diagonalizable matrix equal basis of $n$-dimensional real numbers

---
### basis diagonalization property formula
$$
\begin{array}{l}
A=PDP^{-1}\implies B=\{\vec x\mid A\vec x=\lambda\vec x\}\\
A=\text{diagonalizable matrix}\\
P=\text{eigenmatrix}\\
D=\text{diagonal matrix}\\
P^{-1}=\text{inverse eigenmatrix}\\
B=\text{basis}\\
\vec x=\text{eigenvector}\\
\lambda=\text{eigenvalue}
\end{array}
$$

---
### dimension spanning property
- size of spanning set less dimension of vector space

---
### dimension spanning property formula
$$
\begin{array}{l}
|S|<\dim(\mathcal V)\implies\text{span}(S)=\mathcal V\\
S=\text{spanning set}\\
\mathcal V=\text{vector space}
\end{array}
$$

---
### dimension linear independence property
- size of linearly independent set greater dimension of vector space

---
### dimension linear independence property formula
$$
\begin{array}{l}
|T|>\dim(\mathcal V)\implies\text{rank}(T)=n\\
T=\text{linearly independent set}\\
\mathcal V=\text{vector space}
\end{array}
$$

---
### dimension basis property
- size of basis equal dimension of vector space

---
### dimension basis property formula
$$
\begin{array}{l}
(|S|=\dim\mathcal V)\lor(|T|=\dim\mathcal V)\iff(S=B)\lor(T=B)\\
S,T,B=\text{basis}\\
\mathcal V=\text{vector space}
\end{array}
$$

---
