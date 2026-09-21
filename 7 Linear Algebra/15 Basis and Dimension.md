### basis
- spanning
- linearly independent

---
### basis formula
$$
\begin{lgathered}
\text{span}(B)=\mathcal V\\
\text{rank}(B)=n
\end{lgathered}
$$

---
### dimension
- number of elements of basis

---
### dimension formula
$$
\begin{lgathered}
\dim(\mathcal V)=|B|\\
\mathcal V=\text{vector space}\\
B=\text{basis}\\
|B|=\text{number of elements}
\end{lgathered}
$$

---
### dimension example
- $\mathbb R^{n}$
- $\mathcal P_{n}$
- $\mathcal M_{\text{mn}}$

---
### dimension example formula
$$
\begin{lgathered}
\dim(\mathbb R^{n})=n\\
\dim(\mathcal P_{n})=n+1\\
\dim(\mathcal M_{\text{mn}})=m\cdot n\\
\end{lgathered}
$$

---
### trivial dimension
- empty set equal basis of trivial vector space

---
### trivial dimension formula
$$
\begin{lgathered}
\dim(\{\vec0\})=0
\end{lgathered}
$$

---
### basis equality property
- all bases share the same number of elements

---
### basis equality property formula
$$
\begin{lgathered}
(\text{span}(B_{1},B_{2})=\mathcal V)\land(\text{rank}(B_{1},B_{2})=n)\land(|B_{1}|\ne\infty)\implies|B_{1}|=|B_{2}|\\
B=\text{basis}\\
\mathcal V=\text{vector space}\\
n=\text{number of columns}
\end{lgathered}
$$

---
### basis size property
- size of linearly independent set less or equal size of spanning set

---
### basis size property formula
$$
\begin{lgathered}
(\text{span}\ S=\mathcal V)\land(|S|\ne\infty)\land(\text{rank}\ T=n)\implies\infty\ne|T|\le|S|\\
S,T\subset\mathcal V\\
\mathcal V=\text{vector space}\\
n=\text{number of columns}\\
\end{lgathered}
$$

---
### dimension subspace property
- dimension of subspace less or equal dimension of vector space

---
### dimension subspace property formula
$$
\begin{lgathered}
\mathcal W\le\mathcal V\implies\dim(\mathcal W)\le\dim(\mathcal V)\\
\dim(\mathcal W)=\dim(\mathcal V)\iff\mathcal W=\mathcal V\\
\mathcal W=\text{subspace}\\
\mathcal V=\text{vector space}
\end{lgathered}
$$

---
### basis diagonalization property
- fundamental eigenvectors of diagonalizable matrix equal basis of $n$-dimensional real numbers

---
### basis diagonalization property formula
$$
\begin{lgathered}
A=PDP^{-1}\implies B=\{\vec x\mid A\vec x=\lambda\vec x\}\\
A=\text{diagonalizable matrix}\\
P=\text{eigenmatrix}\\
D=\text{diagonal matrix}\\
P^{-1}=\text{inverse eigenmatrix}\\
B=\text{basis}\\
\vec x=\text{eigenvector}\\
\lambda=\text{eigenvalue}
\end{lgathered}
$$

---
### dimension spanning property
- size of spanning set less dimension of vector space

---
### dimension spanning property formula
$$
\begin{lgathered}
|S|<\dim(\mathcal V)\implies\text{span}(S)=\mathcal V\\
S=\text{spanning set}\\
\mathcal V=\text{vector space}
\end{lgathered}
$$

---
### dimension linear independence property
- size of linearly independent set greater dimension of vector space

---
### dimension linear independence property formula
$$
\begin{lgathered}
|T|>\dim(\mathcal V)\implies\text{rank}(T)=n\\
T=\text{linearly independent set}\\
\mathcal V=\text{vector space}
\end{lgathered}
$$

---
### dimension basis property
- size of basis equal dimension of vector space

---
### dimension basis property formula
$$
\begin{lgathered}
(|S|=\dim\mathcal V)\lor(|T|=\dim\mathcal V)\iff(S=B)\lor(T=B)\\
S,T,B=\text{basis}\\
\mathcal V=\text{vector space}
\end{lgathered}
$$

---
