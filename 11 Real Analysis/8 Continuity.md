### continuous
- for every epsilon distance between point of continuous function there exists delta distance between input point

---
### continuous formula
$$
\begin{aligned}
\forall \epsilon > 0, \exists \delta > 0, \forall x \in X: d(x, t) < \delta \implies d(f(x), f(t)) < \epsilon \\
f: X \rightarrow Y \\
f = \text{continuous function} \\
X, Y = \text{metric space} 
\end{aligned}
$$

---
### uniform continuous
- for every epsilon distance between every point of uniform continuous function there exists delta distance between every input point

---
### uniform continuous formula
$$
\begin{aligned}
\forall \epsilon > 0, \exists \delta > 0, \forall x_{1}, x_{2} \in X: d(x_{1}, x_{2}) < \delta \implies d(f(x_{1}), f(x_{2})) < \epsilon \\
f: X \rightarrow Y \\
x_{1}, x_{2} = \text{continuous point} \\
f = \text{continuous function} \\
X, Y = \text{metric space} 
\end{aligned}
$$

---
### lipschitz
- every slope of lipschitz function within finite distance

---
### lipschitz formula
$$
\begin{aligned}
\exists M \ge 0, \forall x_{1}, x_{2} \in X: \frac{d(f(x_{1}), f(x_{2}))}{d(x_{1}, x_{2})} \le M \\
f: X \rightarrow Y \\
M = \text{lipschitz constant} \\
f = \text{M-lipschitz function}
\end{aligned}
$$

---
### separated
- every point of 1st subset equal isolated point of 2nd subset and vice versa

---
### separated formula
$$
\begin{aligned}
A, B \subset X \implies \overline A \cap B = A \cap \overline B = \emptyset \\
A, B = \text{separated set} \\
\overline A, \overline B = \text{closure} \\
X = \text{metric space}
\end{aligned}
$$

---
### disconnected
- there exists union of nonempty separated set

---
### disconnected formula
$$
\begin{aligned}
\exists A, B \in X: S = A \cup B \\
A, B = \text{separated set} \\
X = \text{metric space} \\
S = \text{disconnected set} 
\end{aligned}
$$

---
### path
- continuous function connecting coordinate

---
### path formula
$$
\begin{aligned}
\gamma(0) = x_{0} \land \gamma(1) = x_{1} \\
\gamma: [0, 1] \rightarrow X \\
\gamma = \text{continuous function} \\
x_{0}, x_{1} = \text{coordinate} \\
X = \text{metric space} 
\end{aligned} 
$$

---
### path connected
- for every coordinate of path connected set there exists continuous function connecting coordinate

---
### path connected formula
$$
\begin{aligned}
\forall x_{0}, x_{1} \in S  \subset X: \gamma(0) = x_{0} \land \gamma(1) = x_{1} \\
\gamma: [0, 1] \rightarrow S \\
x_{0}, x_{1} = \text{coordinate} \\
S  = \text{path connected set} \\
\gamma = \text{continuous function} \\
X = \text{metric space} 
\end{aligned} 
$$

---
### locally bounded
- domain of locally bounded function within finite distance

---
### locally bounded formula
$$
\begin{aligned}
\forall t \in X, \exists \delta > 0, \exists M \in \mathbb R, \forall x \in X: d(x, t) < \delta \implies |f(x)| \le M \\
f: X \rightarrow \mathbb R \\
f = \text{locally bounded function} \\
X = \text{metric space} 
\end{aligned}
$$

---
### globally bounded
- range of bounded function within finite distance

---
### globally bounded formula
$$
\begin{aligned}
\exists M \in \mathbb R, \forall x \in X: |f(x)| \le M \\
f: X \rightarrow \mathbb R \\
f = \text{bounded function} \\
X = \text{metric space} 
\end{aligned}
$$

---
### set property
- range
- inverse range
- range subset
- inverse range subset
- double range subset
- double inverse range subset
- range union
- inverse range complement

---
### set property formula
$$
\begin{aligned}
(f: A \subset X \rightarrow Y) \implies f(A) = \set{f(x) \in Y| x \in A} \\
(f: X \rightarrow B \subset Y) \implies f^{-1}(B) = \set{x \in X| f(x) \in B} \\
A' \subset A \implies f(A') \subset f(A) \\
B' \subset B \implies f^{-1}(B') \subset f^{-1}(B) \\
A \subset f^{-1}\circ f(A) \\
f\circ f^{-1}(B) \subset B \\
f(\bigcup_{i} A_{i}) = \bigcup_{i} f(A_{i}) \\
f^{-1}(B^c) = f^{-1}(B)^c 
\end{aligned}
$$

---
### limit property
- unique
- addition
- subtraction
- multiplication
- division

---
### limit property formula
$$
\begin{aligned}
(\lim_{x \rightarrow t} f(x) = L) \land (\lim_{x \rightarrow t} f(x) = K) \implies L = K \\
(\lim_{x \rightarrow t} f(x) = L) \land (\lim_{x \rightarrow t} g(x) = K) \implies \lim_{x \rightarrow t} (f+g)(x) = L + K \\
(\lim_{x \rightarrow t} f(x) = L) \land (\lim_{x \rightarrow t} g(x) = K) \implies \lim_{x \rightarrow t} (f-g)(x) = L - K \\
(\lim_{x \rightarrow t} f(x) = L) \land (\lim_{x \rightarrow t} g(x) = K) \implies \lim_{x \rightarrow t} (f \cdot g)(x) = L \cdot K \\
(\lim_{x \rightarrow t} f(x) = L) \land (\lim_{x \rightarrow t} g(x) = K \ne 0) \implies \lim_{x \rightarrow t} (\frac{f}{g})(x) = \frac{L}{K}
\end{aligned}
$$

---
### limit continuity property
- continuous function at input point approaches continuous function at limit point as input point approaches limit point

---
### limit continuity property formula
$$
\begin{aligned}
\forall t \in X:\lim_{x\rightarrow t}f(x) = f(t) \\
f: X \rightarrow Y \\
t = \text{limit point} \\
f = \text{continuous function} \\
X, Y = \text{metric space} 
\end{aligned}
$$

---
### operation continuity property
- addition
- subtraction
- multiplication
- division

---
### operation continuity property
$$
\begin{aligned}
\lim_{x\rightarrow t}f(x) = f(t) \land \lim_{x\rightarrow t}g(x) = g(t) \implies \lim_{x\rightarrow t}(f+g)(x) = (f+g)(t) \\
\lim_{x\rightarrow t}f(x) = f(t) \land \lim_{x\rightarrow t}g(x) = g(t) \implies \lim_{x\rightarrow t}(f-g)(x) = (f-g)(t) \\
\lim_{x\rightarrow t}f(x) = f(t) \land \lim_{x\rightarrow t}g(x) = g(t) \implies \lim_{x\rightarrow t}(f\cdot g)(x) = (f\cdot g)(t) \\
\lim_{x\rightarrow t}f(x) = f(t) \land \lim_{x\rightarrow t}g(x) = g(t) \ne 0 \implies \lim_{x\rightarrow t}(\frac{f}{g})(x) = (\frac{f}{g})(t) \\
\end{aligned}
$$

---
### convergence continuity property
- continuous function of convergent sequence equal convergent sequence

---
### convergence continuity property formula
$$
\begin{aligned}
\forall a \in X, \forall \set{a_{n}} \subset X: \lim_{n\rightarrow \infty} a_{n} = a \implies \lim_{n\rightarrow \infty} f(a_{n}) = f(a) \\
f: X \rightarrow Y \\
a = \text{sequential limit} \\
\set {a_{n}}, \set {f(a_{n})} = \text{convergent sequence} \\
f = \text{continuous function} \\
f(a) = \text{limit} \\
X, Y = \text{metric space} 
\end{aligned}
$$

---
### open inverse continuity property
- inverse continuous function of codomain open set equal domain open set

---
### open inverse continuity property formula
$$
\begin{aligned}
\forall y \in Y, \exists \epsilon > 0: N_{\epsilon}(y) \subset Y
\implies \forall x \in f^{-1}(Y), \exists \epsilon > 0: N_{\epsilon}(x) \subset f^{-1}(Y) \\
f:  X \rightarrow Y \\
x, y = \text{interior point} \\
N = \text{neighborhood} \\
Y, f^{-1}(Y) = \text{open set} \\
f = \text{continuous function} \\
X, Y = \text{metric space} 
\end{aligned}
$$

---
### closed inverse continuity property
- inverse continuous function of codomain closed set equal domain closed set

---
### closed inverse continuity property formula
$$
\begin{aligned}
Y'\subset Y \implies f^{-1}(Y)' \subset f^{-1}(Y) \\
f:  X \rightarrow Y \\
Y', f^{-1}(Y)' = \text{derived set} \\
Y, f^{-1}(Y) = \text{closed set} \\
f = \text{continuous function} \\
X, Y = \text{metric space}
\end{aligned}
$$

---
### composite continuity property
- composition of continuous function equal continuous function

---
### composite continuity property formula
$$
\begin{aligned}
\lim_{x\rightarrow t}f(x) = f(t) \land \lim_{x\rightarrow t}g(f(x)) = g(f(t)) \implies \lim_{x\rightarrow t}(g \circ f)(x) = (g \circ f)(t) \\
f: X \rightarrow Y \\
g: Y \rightarrow Z \\
g \circ f: X \rightarrow Z \\
t = \text{limit point} \\
f, g = \text{continuous function} \\
X, Y, Z = \text{metric space} 
\end{aligned}
$$

---
### compact continuity property
- continuous function of compact domain equal compact range

---
### compact continuity property formula
$$
\begin{aligned}
\forall \set{A_{i}}_{i\in I} \subset Y, \exists \{A_{i_{j}}\}_{j=1}^n \subset \{A_{i}\}_{i\in I}: f(X) \subset \bigcup_{j=1}^n A_{i_{j}} \subset Y \\
f: X \rightarrow Y \\
A = \text{open set} \\
\set{A} = \text{open cover} \\
I, J = \text{index set} \\
f = \text{continuous function} \\
X, f(X) = \text{compact set}
\end{aligned}
$$

---
### extremum continuity property
- for every continuous function of compact domain there exists minimum and maximum

---
### extremum continuity property formula
$$
\begin{aligned}
\exists x_{0}, x_{1} \in X: f(x_{0}) \le f(X) \le f(x_{1}) \\
f: X \rightarrow \mathbb R \\
f = \text{continuous function} \\
X = \text{compact set}
\end{aligned}
$$

---
### cauchy uniform continuity property
- uniform continuous function of cauchy sequence equal cauchy sequence

---
### cauchy uniform continuity property formula
$$
\begin{aligned}
\forall \delta > 0, \exists N \in \mathbb N, \forall n, m \ge N: d(a_{n}, a_{m}) < \delta \implies \forall \epsilon > 0, \exists N \in \mathbb N, \forall n, m \ge N: d(f(a_{n}), f(a_{m})) < \epsilon \\
f: X \rightarrow Y \\
\{_{c}a_{n}\}, \{_{c}f(a_{n})\} = \text{cauchy sequence} \\
f = \text{uniform continuous function}
\end{aligned}
$$

---
### compact uniform continuity property
- continuous function of compact domain equal uniform continuous function

---
### compact uniform continuity property formula
$$
\begin{aligned}
\forall \epsilon > 0, \exists \delta > 0, \forall x_{1}, x_{2} \in X: d(x_{1}, x_{2}) < \delta \implies d(f(x_{1}), f(x_{2})) < \epsilon \\
f: X \rightarrow Y \\
f = \text{continuous function} \\
f = \text{uniform continuous function} \\
X = \text{compact set} \\
X, Y = \text{metric space} 
\end{aligned}
$$

---
### boundary uniform continuity property
- there exists limit of uniform continuous function on interval endpoint
- uniform continuous function equal bounded function

---
### boundary uniform continuity property formula
$$
\begin{aligned}
\lim_{x \rightarrow a}f(x)=f(a) \land \lim_{x \rightarrow b}f(x)=f(b) \\
\exists M \in \mathbb R, \forall x \in (a, b): |f(x)| \le M \\
f: (a, b) \rightarrow \mathbb R \\
f = \text{uniform continuous function} 
\end{aligned}
$$

---
### extension uniform continuity property
- uniform continuous function of dense domain and complete codomain extend uniquely into domain

---
### extension uniform continuity property formula
$$
\begin{aligned}
\exists ! F:X \rightarrow Y: F(S) = f(S) \land \\
\forall \epsilon > 0, \exists \delta > 0, \forall x_{1}, x_{2} \in S: d(x_{1}, x_{2}) < \delta \implies \\
d(F(x_{1}), F(x_{2})) < \epsilon \\
f: \overline S = X \rightarrow Y \\
f, F = \text{uniform continuous function} \\
S = \text{dense set} \\
X = \text{metric space} \\
Y = \text{complete metric space} 
\end{aligned}
$$

---
### hierarchy lipschitz property
- lipschitz function equal uniform continuous function
- uniform continuous function equal continuous function

---
### hierarchy lipschitz property formula
$$
\begin{aligned}
\mathcal A \subset C^\infty \subset \dots \subset C^m \subset \dots \subset C^1 \subset LIP \subset C_{u} \subset C \\
\mathcal A = \text{analytic} \\
C^n = \text{continuous differentiable} \\
LIP = \text{lipschitz} \\
C_{u} = \text{uniform continuous} \\
C = \text{continuous}
\end{aligned}
$$

---
### real connected property
- connected set of real numbers contain every intermediate real number of set

---
### real connected property formula
$$
\begin{aligned}
\forall x, y \in S \subset \mathbb R: x < y \implies [x, y] \subset S \\
S = \text{connected set}
\end{aligned}
$$

---
### intermediate connected property
- continuous function on interval contain every intermediate value on interval

---
### intermediate connected property formula
$$
\begin{aligned}
f(a) < c < f(b) \implies \exists x \in (a, b): f(x) = c \\
f: [a, b] \rightarrow \mathbb R \\
f = \text{continuous function}
\end{aligned}
$$

---
### path connected property
- path connected set equal connected set

---
### path connected property formula
$$
\begin{aligned}
\forall x_{0}, x_{1} \in S \subset X: \gamma(0) = x_{0} \land \gamma(1) = x_{1} \implies \not\exists A, B \in X: S = A \cup B \\
\gamma: [0, 1] \rightarrow S \\
x_{0}, x_{1} = \text{coordinate} \\
S  = \text{connected set} \\
\gamma = \text{continuous function} \\
A, B = \text{separated set} \\
X = \text{metric space} 
\end{aligned}
$$

---
