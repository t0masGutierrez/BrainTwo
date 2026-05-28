### bounded above
- there exist upper bound such that every element of set lesser or equal upper bound

---
### bounded above formula
$$
\begin{aligned}
\exists u \in \mathbb R, \forall x \in S \subset \mathbb R: x \le u \\
S = \text{bounded above set} \\
u = \text{upper bound} 
\end{aligned}
$$

---
### bounded below
- there exist lower bound such that every element of set greater or equal lower bound

---
### bounded below formula
$$
\begin{aligned}
\exists w \in \mathbb R, \forall x \in S \subset \mathbb R: w \le x \\
S = \text{bounded below set} \\
w = \text{lower bound} 
\end{aligned}
$$

---
###  bounded
- both bounded below and bounded above

---
### bounded formula
$$
\begin{aligned}
\exists u, w \in \mathbb R, \forall x \in S \subset \mathbb R: w \le x \le u \\
S = \text{bounded set} \\
u = \text{upper bound} \\
w = \text{lower bound} 
\end{aligned}
$$

---
### unbounded
- either unbounded below or unbounded above

---
### unbounded formula
$$
\begin{aligned}
\exists u, w \in \mathbb R, \exists x \in S \subset \mathbb R: (x < w) \lor (x > u) \\
S = \text{unbounded set} \\
u = \text{upper bound} \\
w = \text{lower bound}
\end{aligned}
$$

---
### supremum
- least upper bound of bounded above set

---
### supremum formula
$$
\begin{aligned}
(\forall x \in S \subset \mathbb R: x \le u) \land (\exists u' \in \mathbb R: u' < u \implies \exists x \in S: x > u') \implies u = \sup S \\
S = \text{bounded above set} \\
u = \text{supremum} \\
\end{aligned}
$$

---
### infimum
- greatest lower bound of bounded below set

---
### infimum formula
$$
\begin{aligned}
(\forall x \in S \subset \mathbb R: w \le x) \land (\exists w' \in \mathbb R: w' > w \implies \exists x \in S: x < w') \implies w = \inf S \\
S = \text{bounded below set} \\
w = \text{infimum} \\
\end{aligned}
$$

---
### least upper bound property
- for every nonempty bounded above set there exists supremum

---
### least upper bound property formula
$$
\begin{aligned}
\exists u \in \mathbb R, \forall x \in S \subset \mathbb R: x \le u \implies \exists \sup S \in \mathbb R \\
S = \text{bounded above set} \\
u = \text{upper bound} \\
\end{aligned}
$$

---
### greatest lower bound property
- for every nonempty bounded below set there exists infimum

---
### greatest lower bound property formula
$$
\begin{aligned}
\exists w \in \mathbb R, \forall x \in S \subset \mathbb R: w \le x \implies \exists \inf S \in \mathbb R \\
S = \text{bounded below set} \\
w = \text{lower bound} 
\end{aligned}
$$

---
### negative supremum property
- infimum of set equal negative supremum of negative set

---
### negative supremum property formula
$$
\begin{aligned}
\inf S = -\sup (-S) \\
S = \text{bounded set}
\end{aligned}
$$

---
### epsilon supremum property
- supremum subtraction with epsilon lesser set

---
### epsilon supremum property formula
$$
\begin{aligned}
\forall \epsilon > 0, \exists x \in S \subset \mathbb R: u - \epsilon < x < u \implies u = \sup S \\
S = \text{bounded above set} \\
u = \text{supremum}
\end{aligned}
$$

---
### subset supremum property
- subset of set equal subsupremum of supremum

---
### subset supremum property formula
$$
\begin{aligned}
S_{2} \subset S_{1} \subset \mathbb R \implies \sup S_{2} \le \sup S_{1} \\
S = \text{bounded above set}
\end{aligned}
$$

---
### maximum supremum property
- set containing supremum of set equal maximum of set

---
### maximum supremum property formula
$$
\begin{aligned}
\sup S \in S \implies \sup S = \max S \\
S = \text{bounded above set}
\end{aligned}
$$

---
### addition supremum property
- supremum of sum equal sum of supremum

---
### addition supremum property formula
$$
\begin{aligned}
\sup(S_{1} + S_{2}) = \sup S_{1} + \sup S_{2} \\
S = \text{bounded above set}
\end{aligned}
$$

---
### union supremum property
- supremum of union equal maximum of supremum

---
### union supremum property formula
$$
\begin{aligned}
\sup(S_{1} \cup S_{2}) = \max \set{\sup S_{1}, \sup S_{2}} \\
S = \text{bounded above set}
\end{aligned}
$$

---
### archimedean property
- natural numbers are unbounded above

---
### archimedean property formula
$$
\begin{aligned}
\forall x \in \mathbb R^+, \forall y \in \mathbb R, \exists n \in \mathbb N: y < nx 
\end{aligned}
$$

---
### density property
- between every two real numbers there exists rational number

---
### density property formula
$$
\begin{aligned}
(x, y \in \mathbb R) \land (x < y) \implies \exists q \in \mathbb Q: x < q < y
\end{aligned}
$$

---
