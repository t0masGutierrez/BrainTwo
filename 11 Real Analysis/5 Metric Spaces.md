### metric
- distance between coordinates of set

---
### metric formula
$$
\begin{aligned}
d: X \times X \rightarrow \mathbb R = [0, \infty)
\end{aligned}
$$

---
### euclidean metric
- nonnegativity operation on real number equal distance between real numbers

---
### euclidean metric formula
$$
\begin{aligned}
x, y \in \mathbb R^n \implies d(x, y) = \|x - y\| = \sum_{i=1}^n \sqrt {(x_{i} - y_{i})^2} \\
x, y = \text{coordinate} \\
\|\cdot \| = \text{norm} \\

\end{aligned}
$$

---
### metric space
- set whose distance between coordinates equal real number

---
### metric space formula
$$
\begin{aligned}
x = y \iff d(x, y) = 0 \\
x \ne y \implies d(x, y) > 0 \\
d(x, y) = d(y, x) \\
d(x, y) \le d(x, z) + d(z, y) 
\end{aligned}
$$

---
### open ball
- sphere with finite radius from center

---
### open ball formula
$$
\begin{aligned}
B_{r}(x_{0}) = \{x \in X |d(x, x_{0}) < r\} \\
r = \text{radius} \\
x_{0} = \text{center} \\
X = \text{metric space}
\end{aligned}
$$

---
### neighborhood
- region where there exists open ball around center

---
### neighborhood formula
$$
\begin{aligned}
\exists r > 0: B_{r}(x_{0}) \subset N \subset X\\
r = \text{radius} \\
B = \text{open ball} \\
x_{0} = \text{center} \\
N = \text{neighborhood} \\
X = \text{metric space} 
\end{aligned}
$$

---
### interior point
- every point of neighborhood around interior point equal point of set

---
### interior point formula
$$
\begin{aligned}
\exists r > 0: B_{r}(x_{0}) \subset S \subset X \\
r = \text{radius} \\
B = \text{open ball} \\
x_{0} = \text{interior point} \\
X = \text{metric space} 
\end{aligned}
$$

---
### limit point
- every neighborhood around limit point contain point of set

---
### limit point formula
$$
\begin{aligned}
\forall r > 0: B_{r}(x_{0}) \setminus \{x_{0}\} \cap (S \subset X) \ne \emptyset \\
r = \text{radius} \\
B = \text{open ball} \\
x_{0} = \text{limit point} \\
X = \text{metric space} 
\end{aligned}
$$

---
### open
- every point of open set equal interior point of open set

---
### open formula
$$
\begin{aligned}
\forall x \in S \subset X, \exists r > 0: B_{r}(x) \subset S  \\
x = \text{interior point} \\
S = \text{open set} \\
X = \text{metric space} \\
r = \text{radius} \\
B = \text{open ball}
\end{aligned}
$$

---
### relatively open
- every point of relatively open set equal interior point of relatively open set

---
### relatively open formula
$$
\begin{aligned}
\forall x \in S \subset Y \subset X, \exists r > 0: B_{r}(x) \cap Y \subset S \\
x = \text{interior point} \\
S = \text{relatively open set} \\
X = \text{metric space} \\
r = \text{radius} \\
B = \text{open ball}
\end{aligned}
$$

---
### closed
- every limit point of closed set equal point of closed set

---
### closed formula
$$
\begin{aligned}
S' \subset S \subset X \\
S' = \text{derived set} \\
S = \text{closed set} \\
X = \text{metric space}
\end{aligned}
$$

---
### interior
- largest open subset of the set

---
### interior formula
$$
\begin{aligned}
S^{\circ} = \{x \in X|\exists r > 0: B_{r}(x) \subset S \subset X\} \\
x = \text{interior point} \\
X = \text{metric space} \\
r = \text{radius} \\
B = \text{open ball}
\end{aligned}
$$

---
### closure
- smallest closed superset of the set

---
### closure formula
$$
\begin{aligned}
\overline S = S \cup S' \\
S' = \text{derived set} 
\end{aligned}
$$

---
### boundary
- intersection of set and complement of set

---
### boundary formula
$$
\begin{aligned}
\partial S = \overline S \setminus S^{\circ} = \overline S \cap \overline {S^c} \\
\overline S = \text{closure} \\
S^{\circ} = \text{interior} \\
c = \text{complement} 
\end{aligned}
$$

---
### perfect
- closed set and every point of perfect set equal limit point of perfect set

---
### perfect formula
$$
\begin{aligned}
S' = S \subset X \\
S' = \text{derived set} \\
S = \text{perfect set} \\
X = \text{metric space}
\end{aligned}
$$

---
### dense
- every point of metric space equal point of closure

---
### dense formula
$$
\begin{aligned}
S \subset \overline S = X \\
S = \text{dense set} \\
\overline S = \text{closure} \\
X = \text{metric space} \\
\end{aligned}
$$

---
### bounded
- every point of bounded set within finite radius from center

---
### bounded formula
$$
\begin{aligned}
\exists x_{0} \in X, \exists r > 0: S \subset B_{r}(x_{0}) \subset X \\
x_{0} = \text{center} \\
X = \text{metric space} \\
r = \text{radius} \\
S = \text{bounded set} 
\end{aligned}
$$

---
### totally bounded
- every point of totally bounded set within finite cover of open ball

---
### totally bounded formula
$$
\begin{aligned}
\forall r > 0, \exists \set {x_{i}}_{i=1}^{n} \subset X: S \subset \bigcup_{i=1}^n B_{r}(x_{i}) \subset X \\
r = \text{radius} \\
x_{i} = \text{center} \\
\set{x_{i}} = \text{sequence} \\
X = \text{metric space} \\
S = \text{totally bounded set} \\
B = \text{open ball} \\


\end{aligned}
$$

---
### euclidean metric property
- negative
- root
- inequality
- reverse inequality
- multiplication
- addition
- subtraction
- absolute subtraction

---
### euclidean metric property formula
$$
\begin{aligned}
|x| = |-x| \\
|x| = \sqrt{x^2} \\
|x| \le c \iff -c \le x \le c \\
|x| \ge c \iff x \ge c \lor x \le -c \\
|x \cdot y| = (|x|)(|y|) \\
|x + y| \le |x| + |y| \\
|x - y| \le |x| + |y| \\
||x| - |y|| \le |x - y| 
\end{aligned}
$$

---
### interval limit point property
- every point of interval equal limit point including endpoint

---
### interval limit point property
$$
\begin{aligned}
S = (a, b) \subset X \implies S' = [a, b] \\
S = \text{interval} \\
S' = \text{derived set} \\
X = \text{metric space}
\end{aligned}
$$

---
### join complement property
- complement of set union equal intersection of set complement

---
### join complement property formula
$$
\begin{aligned}
(\bigcup_{i \in I} S_{i})^c = \bigcap_{i \in I} (S_{i}^c) \\
c = \text{complement}
\end{aligned}
$$

---
### cover complement property
- closed set equal complement of open set
- open set equal complement of closed set

---
### cover complement property formula
$$
\begin{aligned}
S' \subset S \subset X \iff \forall x \in S^c, \exists r > 0: B_{r}(x) \subset S^c \\
\forall x \in S \subset X, \exists r > 0: B_{r}(x) \subset S \iff (S')^c \subset S^c  \\
S' = \text{derived set} \\
c = \text{complement} \\
r = \text{radius} \\
B = \text{open ball} 
\end{aligned}
$$

---
### join cover property
- union of open set equal open set
- intersection of closed set equal closed set
- finite intersection of open set equal open set
- finite union of closed set equal closed set

---
### join cover property formula
$$
\begin{aligned}
\forall x \in S \subset X, \exists r > 0: B_{r}(x) \subset S \implies B_{r}(x) \subset \bigcup_{i \in I} S_{i} \\
S' \subset S \subset X  \implies S' \subset \bigcap_{i \in I} S_{i}   \\
\forall x \in S \subset X, \exists r > 0: B_{r}(x) \subset S \implies B_{r}(x) \subset \bigcap_{i=1}^n S_{i} \\
S' \subset S \subset X  \implies S' \subset \bigcup_{i=1}^n S_{i}  \\
\end{aligned}
$$

---
### closure property
- derived closure
- equal closure
- sup closure
- sub closure
- union closure

---
### closure property formula
$$
\begin{aligned}
\overline S' \subset \overline S \subset X \\
S' \subset S \subset X \iff \overline S = S \\
\exists x_{0} \in \mathbb R, \exists r > 0:  S \subset B_{r}(x_{0}) \subset \mathbb R\implies \exists \sup S \in \overline S \\ 
(S \subset K) \land (K' \subset K \subset X) \implies \overline S \subset \overline K = K \\
\overline {\bigcup_{i \in I} A_{i}} = \bigcup_{i \in I} \overline A_{i} \\
\end{aligned}
$$

---
### totally bounded property
- forward
- reverse
- complete

---
### totally bounded property formula
$$
\begin{aligned}
\forall r > 0, \exists \set {x_{i}}_{i=1}^{n} \subset X: S \subset \bigcup_{i=1}^n B_{r}(x_{i}) \subset X \implies \exists x_{0} \in X, \exists r > 0: S \subset B_{r}(x_{0}) \\
\exists x_{0} \in X, \exists r > 0: S \subset B_{r}(x_{0}) \subset X \not\implies  \forall r > 0, \exists \set {x_{i}}_{i=1}^{n} \subset X: S \subset \bigcup_{i=1}^n B_{r}(x_{i}) \\
\forall r > 0, \exists \set {x_{i}}_{i=1}^{n} \subset \mathbb R^k: S \subset \bigcup_{i=1}^n B_{r}(x_{i}) \subset \mathbb R^k \iff \exists x_{0} \in \mathbb R^k, \exists r > 0: S \subset B_{r}(x_{0})
\end{aligned}
$$

---
