### open cover
- collection of open set whose union contain covered set

---
### open cover formula
$$
\begin{aligned}
S \subset \bigcup_{i \in I} Y_{i} \subset X \\
S = \text{covered set} \\
I = \text{index set} \\
Y = \text{open set} \\
\set{Y} = \text{open cover} \\
X = \text{metric space} 
\end{aligned}
$$

---
### compact
- for every open cover of compact set there exists finite subcover

---
### compact formula
$$
\begin{aligned}
\forall \set{Y_{i}}_{i\in I} \subset X, \exists \{Y_{i_{j}}\}_{j=1}^n \subset \{Y_{i}\}_{i\in I}: S \subset \bigcup_{j=1}^n Y_{i_{j}} \subset X \\
Y = \text{open set} \\
\set{Y} = \text{open cover} \\
I, J = \text{index set} \\
X = \text{metric space} \\
S = \text{compact set} 
\end{aligned}
$$

---
### sequential compactness property
- for every sequence of sequentially compact set there exists convergent subsequence

---
### sequential compactness property formula
$$
\begin{aligned}
\forall \set {a_{n}} \subset S \subset X, \exists \set {a_{n_{k}}} \subset \set {a_{n}}, \exists L \in S:\lim_{k \rightarrow \infty} a_{n_{k}} = L \\
\set {a_{n}} = \text{sequence} \\
\set {a_{n_{k}}} = \text{subsequence} \\
X = \text{metric space} \\
L = \text{subsequential limit}
\end{aligned}
$$

---
### equivalent compactness property
- topologically compact set of metric space equal sequentially compact set

---
### equivalent compactness property formula
$$
\begin{aligned}
\forall \set{Y_{i}} \subset X, \exists \{Y_{i_{1}}, \dots Y_{i_{n}}\} \subset \{Y_{i}\}: S \subset \bigcup_{k=1}^n Y_{i_{k}} \subset X \\
\iff \forall \set {a_{n}} \subset S \subset X, \exists \set {a_{n_{k}}} \subset \set {a_{n}}, \exists L \in S:\lim_{k \rightarrow \infty} a_{n_{k}} = L \\
S = \text{compact set} \\
Y = \text{open set} \\
\set{Y} = \text{open cover} \\
X = \text{metric space} \\
\set {a_{n}} = \text{sequence} 
\end{aligned}
$$

---
### closed bounded compactness property
- closed bounded set of metric space equal compact set

---
### closed bounded compactness property formula
$$
\begin{aligned}
(S' \subset S \subset X ) \land \\
(S \subset X, \exists x_{0} \in X, \exists r > 0: B_{r}(x_{0}) \supset S) \implies \\
\forall \set {a_{n}} \subset S \subset X, \exists \set {a_{n_{k}}} \subset \set {a_{n}}, \exists L \in S:\lim_{k \rightarrow \infty} a_{n_{k}} = L \lor \\
\forall \set{Y_{i}} \subset X, \exists \{Y_{i_{1}}, \dots Y_{i_{n}}\} \subset \{Y_{i}\}: S \subset \bigcup_{k=1}^n Y_{i_{k}} \subset X \\
S' = \text{derived set} \\
S = \text{compact set} \\
X = \text{metric space} \\
x_{0} = \text{center} \\
r = \text{radius} \\
B = \text{open ball} \\
\set {a_{n}} = \text{sequence} \\
\set {a_{n_{k}}} = \text{subsequence} \\
L = \text{subsequential limit} \\
Y = \text{open set} \\
\set{Y} = \text{open cover} 
\end{aligned}
$$

---
### limit point compactness property
- for every infinite subset of compact set there exists limit point of compact set

---
### limit point compactness property formula
$$
\begin{aligned}
(S \subset K) \land (|S| = \infty) \implies \exists x_{0} \in S, \forall r > 0: N_{r}(x_{0}) \setminus \{x_{0}\} \cap S \ne \emptyset \\
K = \text{compact set} \\
X = \text{metric space} \\
r = \text{radius} \\
N = \text{neighborhood} \\
x_{0} = \text{limit point}
\end{aligned}
$$

---
### heine-borel compactness property
- closed bounded set of k-dimensional real numbers equal compact set

---
### heine-borel compactness property formula
$$
\begin{aligned}
(S' \subset S \subset X ) \land \\
(S \subset X, \exists x_{0} \in X, \exists r > 0: B_{r}(x_{0}) \supset S) \iff \\
\forall \set{Y_{i}}_{i\in I} \subset X, \exists \{Y_{i_{j}}\}_{j=1}^n \subset \{Y_{i}\}_{i\in I}: S \subset \bigcup_{j=1}^n Y_{i_{j}} \subset X \\
S = \text{compact set} \\
S' = \text{derived set} \\
X = \text{metric space} \\
x_{0} = \text{center} \\
r = \text{radius} \\
B = \text{open ball} \\
Y = \text{open set} \\
\set{Y} = \text{open cover} \\
I, J = \text{index set} 
\end{aligned}
$$

---
### bolzano-weierstrass compactness property
- for every bounded sequence of real numbers there exists convergent subsequence

---  
### bolzano-weierstrass compactness property formula
$$  
\begin{aligned}  
(S \subset \mathbb R^k) \land (\set {0, 1, 2, 3, \dots, n} \not\sim S) \implies \exists x_{0} \in \mathbb R^k, \forall r > 0: N_{r}(x_{0}) \setminus \{x_{0}\} \cap \mathbb R^k \ne \emptyset \\  
S = \text{bounded set} \\  
r = \text{radius} \\  
N = \text{neighborhood} \\  
x_{0} = \text{limit point}  
\end{aligned} 
$$

---
### closed subset compactness property
- closed subset of compact set equal compact set

---
### closed subset compactness property formula
$$
\begin{aligned}
S' \subset S \subset K \implies \forall \set{Y_{i}}_{i\in I} \subset X, \exists \{Y_{i_{j}}\}_{j=1}^n \subset \{Y_{i}\}_{i\in I}: S \subset \bigcup_{j=1}^n Y_{i_{j}} \subset X \\
S' = \text{derived set} \\
S = \text{closed set} \\
K = \text{compact set} \\
Y = \text{open set} \\
\set{Y} = \text{open cover} \\
I, J = \text{index set} \\
X = \text{metric space} \\
\end{aligned}
$$

---
### intersection compactness property
- for every finite subcollection of compact set there exists nonempty intersection
- for every collection of compact set there exists nonempty intersection

---
### intersection compactness property formula
$$
\begin{aligned}
\bigcap_{j=1}^n S_{i_{j}} \ne \emptyset \implies \bigcap _{i} S_{i} \ne \emptyset \\
S = \text{compact set} 
\end{aligned}
$$

---
### k-cell compactness property
- every k-cell equal compact set

---
### k-cell compactness property formula
$$
\begin{aligned}
\forall \set{Y_{i}}_{i\in I} \subset X, \exists \{Y_{i_{j}}\}_{j=1}^n \subset \{Y_{i}\}_{i\in I}: \prod_{i=1}^k [a_{i}, b_{i}] \subset \bigcup_{j=1}^n Y_{i_{j}}  \subset X \\
Y = \text{open set} \\
\set{Y} = \text{open cover} \\
I, J = \text{index set} \\
X = \text{metric space} \\
\prod_{i=1}^k [a_{i}, b_{i}] = \text{k-cell} 
\end{aligned}
$$

---
