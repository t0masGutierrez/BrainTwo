### complexity
- number of distinct relationships the hypothesis can represent aka size of hypothesis class

---
### complexity formula
$$
\begin{aligned}
| \mathcal H | \\
\mathcal H = \text {hypothesis class}
\end{aligned}
$$

---
### shattering
- for every possible labeling there exists hypothesis that realizes such labeling

---
### shattering formula
$$
\begin{aligned}
\forall ( y _ { 1 } , \dots , y _ { m } ) \in \set { 0 , 1 } ^ { m } , \exists h \in \mathcal H : h ( x _ { i } ) = y _ { i } \\
y = \text {label} \\
h = \text {hypothesis} \\
\mathcal H = \text {hypothesis class} \\
x = \text {data}
\end{aligned}
$$

---
### VC dimension
- maximum number of points that the hypothesis class can shatter

---
### VC dimension formula
$$
\begin{aligned}
d _ { VC } ( \mathcal H ) = \max \set { m \mid \forall ( y _ { 1 } , \dots , y _ { m } ) \in \set { 0 , 1 } ^ { m } , \exists h \in \mathcal H : h ( x _ { i } ) = y _ { i } } \\
h = \text {hypothesis} \\
\mathcal H = \text {hypothesis class} \\
x = \text {data}
\end{aligned}
$$

---
### rademacher complexity
- how well the hypothesis can fit random noise

---
### rademacher complexity formula
$$
\begin{aligned}
\widehat { \mathfrak R } _ { S } ( \mathcal H )
=
E _ { \sigma }
\left [
\sup _ { h \in \mathcal H }
\frac { 1 } { m }
\sum _ { i = 1 } ^ { m }
\sigma _ { i } h ( x _ { i } )
\right ] \\
\sigma \in \set { - 1 , 1 } \\
\sigma = \text {rademacher variable} \\
m = \text {number of training examples} \\
h = \text {hypothesis} \\
x = \text {data}
\end{aligned}
$$

---
### covering number
- smallest number of open balls with radius epsilon that cover the hypothesis class

---
### covering number formula
$$
\begin{aligned}
N ( X ) = \min \set { m \mid \exists x \in \set { x _ { i } } _ { i = 1 } ^ { m } : X \subset \bigcup _ { i = 1 } ^ { m } B _ { \epsilon } ( x _ { i } ) } \\
x = \text {data} \\
m = \text {number of open balls} \\
\epsilon = \text {error} \\
X = \text {instance space} \\

B = \text {open ball}
\end{aligned}
$$

---
### KL divergence
- probability distribution shift between prior and poster

---
### KL divergence formula
$$
\begin{aligned}
K L ( Q \| P ) = \int P ( x ) \ln \frac { P ( x ) } { Q ( x ) } d x \\
P = \text {prior probability distribution} \\
Q = \text {posterior probability distribution}
\end{aligned}
$$

---
### kolmogorov complexity
- length of shortest computer program capable of generating data

---
### kolmogorov complexity formula
$$
\begin{aligned}
K ( x ) = \min _ { p } \set { | p | \mid U ( p ) = x } \\
x = \text {object} \\
p = \text {computer program} \\
| p | = \text {number of bits} \\
U = \text {universal turing machine}
\end{aligned}
$$

---
### minimum description length
- minimum number of bits capable of describing model and remaining unexplained data

---
### minimum description length formula
$$
\begin{aligned}
M D L ( h , S ) = \min _ { h } \left [ L ( h ) + L ( S \mid h ) \right ] \\
h = \text {hypothesis} \\
S = \text {training dataset} \\
L = \text {length}
\end{aligned}
$$

---
