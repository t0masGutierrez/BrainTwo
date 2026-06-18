### instance space
- domain of possible inputs

---
### instance space formula
$$
\begin{aligned}
X = \set { x _ { i } } _ { i = 1 } ^ { m } \\
x = \text {data}
\end{aligned}
$$

---
### label space
- codomain of possible outputs

---
### label space formula
$$
\begin{aligned}
Y = \set { 0 , 1 }
\end{aligned}
$$

---
### concept
- true target function responsible for generating labels

---
### concept formula
$$
\begin{aligned}
c : X \rightarrow Y \\
c = \text {concept} \\
X = \text {instance space} \\
Y = \text {label space}
\end{aligned}
$$

---
### concept class
- collection of possible target functions

---
### concept class formula
$$
\begin{aligned}
\mathcal C = \set { c _ { i } } _ { i = 1 } ^ { m } \\
c = \text {concept}
\end{aligned}
$$

---
### hypothesis
- learned predictor

---
### hypothesis formula
$$
\begin{aligned}
h : X \rightarrow Y \\
h = \text {hypothesis} \\
X = \text {instance space} \\
Y = \text {label space}
\end{aligned}
$$

---
### hypothesis class
- collection of possible hypotheses

---
### hypothesis class formula
$$
\begin{aligned}
\mathcal H = \set { h _ { i } } _ { i = 1 } ^ { m } \\
h = \text {hypothesis}
\end{aligned}
$$

---
### data distribution
- probability distribution responsible for generating the examples observed by learner

---
### data distribution formula
$$
\begin{aligned}
S \sim \mathcal D ^ { m } \\
S = \set { ( x _ { i } , y _ { i } ) } _ { i = 1 } ^ { m } \\
\mathcal D : X \times Y \rightarrow [ 0 , 1 ] \\
S = \text {training dataset} \\
\mathcal D = \text {data distribution}
\end{aligned}
$$

---
### PAC assumptions
- iid sampling
- same data distribution
- fixed hypothesis class

---
### PAC assumptions formula
$$
\begin{aligned}
( x , y ) \overset { \text {i.i.d.} } { \sim } \mathcal D \\
\mathcal D _ { train } = \mathcal D _ { test } \\
\Delta \mathcal H = 0
\end{aligned}
$$

---
### loss
- error on single prediction

---
### loss formula
$$
\begin{aligned}
\ell ( h ( x ) , y ) \\
h = \text {hypothesis} \\
x = \text {data} \\
y = \text {label}
\end{aligned}
$$

---
### classification loss
- classification error on single prediction

---
### classification loss formula
$$
\begin{aligned}
\ell ( h ( x ) , y ) = 1 [ h ( x ) \ne y ] = \begin{cases}
0 , \  h ( x ) = y \\
1 , \  h ( x ) \ne y
\end{cases}
\\
h = \text {hypothesis} \\
x = \text {data} \\
y = \text {label}
\end{aligned}
$$

---
### population risk
- expected loss on data distribution

---
### population risk formula
$$
\begin{aligned}
L _ { \mathcal D } ( h ) = E _ { \mathcal D } [ \ell ( h ( x ) , y ) ] \\
E = \text {expected value} \\
\mathcal D = \text {data distribution} \\
\ell = \text {loss} \\
h = \text {hypothesis} \\
x = \text {data} \\
y = \text {label}
\end{aligned}
$$

---
### empirical risk
- average loss on training dataset

---
### empirical risk formula
$$
\begin{aligned}
\hat L _ { S } ( h ) = \frac { 1 } { m } \sum _ { i = 1 } ^ { m } \ell ( h ( x _ { i } ) , y _ { i } ) \\
S = \text {training dataset} \\
h = \text {hypothesis} \\
m = \text {number of examples} \\
\ell = \text {loss} \\
x = \text {data} \\
y = \text {label}
\end{aligned}
$$

---
### approximation error
- error as result of finite hypothesis class

---
### approximation error formula
$$
\begin{aligned}
L _ { \mathcal D } ( h ^ { * } ) - L _ { \mathcal D } ( c ) \\
h ^ { * } = \arg \min _ { h \in \mathcal H } \hat L ( h ) \\
L _ { \mathcal D } = \text {population risk} \\
h = \text {hypothesis} \\
c = \text {concept} \\
\mathcal H = \text {hypothesis class} \\
S = \text {training dataset}
\end{aligned}
$$

---
### estimation error
- error as result of finite training dataset

---
### estimation error formula
$$
\begin{aligned}
L _ { \mathcal D } ( \hat h ) - L _ { \mathcal D } ( h ^ { * } ) \\
\hat h = \arg \min _ { h \in \mathcal H } \hat L _ { S } ( h ) \\
h ^ { * } = \arg \min _ { h \in \mathcal H } L _ { \mathcal D } ( h ) \\
L _ { \mathcal D } = \text {population risk} \\
\mathcal D = \text {data distribution} \\
h = \text {hypothesis} \\
\mathcal H = \text {hypothesis class} \\
S = \text {training dataset}
\end{aligned}
$$

---
### consistent hypothesis
- hypothesis fits training dataset perfectly with zero empirical risk

---
### consistent hypothesis formula
$$
\begin{aligned}
\hat L _ { S } ( h ) = 0 \\
\hat L _ { S } = \text {empirical risk} \\
S = \text {training dataset} \\
h = \text {hypothesis}
\end{aligned}
$$

---
### accuracy
- allowable error

---
### accuracy formula
$$
\begin{aligned}
\epsilon
\end{aligned}
$$

---
### confidence
- probability of success

---
### confidence formula
$$
\begin{aligned}
1 - \delta
\end{aligned}
$$

---
### probably approximately correct
- how many training examples are necessary for the learner to identify hypothesis with confidence at least delta complement and error at most epsilon

---
### probably approximately correct formula
$$
\begin{aligned}
\forall \mathcal D : \underset { S \sim \mathcal D ^ { m } } { P } ( L _ { \mathcal D } ( \hat h ) \le \epsilon ) \ge 1 - \delta \\
\hat h = \arg \min _ { h \in \mathcal H } \hat L _ { S } ( h ) \\
S = \text {training dataset} \\
\mathcal D = \text {data distribution} \\
L _ { \mathcal D } = \text {population risk} \\
h = \text {hypothesis} \\
\epsilon = \text {error} \\
1 - \delta = \text {confidence} \\
\mathcal H = \text {hypothesis class}
\end{aligned}
$$

---
### PAC learning setting
- if there exists concept inside of hypothesis class then realizable setting
- if concept may be outside of hypothesis class then agnostic setting

---
### PAC learning setting formula
$$
\begin{aligned}
\exists h ^ { * } \in \mathcal H : L _ { \mathcal D } ( h ^ { * } ) = 0 \\
\inf _ { h \in \mathcal H } L _ { \mathcal D } ( h ) > 0 \\
h ^ { * } = \arg \min _ { h \in \mathcal H } \hat L _ { S } ( h ) \\
h = \text {hypothesis} \\
\mathcal H = \text {hypothesis class} \\
L _ { \mathcal D } = \text {population risk} \\
\end{aligned}
$$

---
### uniform convergence property
- difference between population risk and empirical risk approaches zero as number of training examples approaches infinity

---  
### uniform convergence property formula
$$  

\begin{aligned}  

| \mathcal H | < \infty \implies

P \left ( \sup _ { h \in \mathcal H } | L _ { \mathcal D } ( h ) - \hat L _ { S } ( h ) | \le \sqrt { \frac { \ln ( \frac { 2 | \mathcal H | } { \delta } ) } { 2 m } } \right ) \ge 1 - \delta \\

\mathcal H = \text {hypothesis class} \\

h = \text {hypothesis} \\

L _ { \mathcal D } = \text {population risk} \\

\hat L _ { S } = \text {empirical risk} \\

1 - \delta = \text {confidence} \\

m = \text {number of training examples}

\end{aligned}  

$$

---
