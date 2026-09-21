### bounded above
- there exist upper bound such that every element of set lesser or equal upper bound

---
### bounded above formula
$$
\begin{lgathered}
\exists u\in\mathbb R,\forall x\in S\subset\mathbb R:x\le u\\
S=\text{bounded above set}\\
u=\text{upper bound}
\end{lgathered}
$$

---
### bounded below
- there exist lower bound such that every element of set greater or equal lower bound

---
### bounded below formula
$$
\begin{lgathered}
\exists w\in\mathbb R,\forall x\in S\subset\mathbb R:w\le x\\
S=\text{bounded below set}\\
w=\text{lower bound}
\end{lgathered}
$$

---
###  bounded
- both bounded below and bounded above

---
### bounded formula
$$
\begin{lgathered}
\exists u,w\in\mathbb R,\forall x\in S\subset\mathbb R:w\le x\le u\\
S=\text{bounded set}\\
u=\text{upper bound}\\
w=\text{lower bound}
\end{lgathered}
$$

---
### unbounded
- either unbounded below or unbounded above

---
### unbounded formula
$$
\begin{lgathered}
\exists u,w\in\mathbb R,\exists x\in S\subset\mathbb R:(x<w)\lor(x>u)\\
S=\text{unbounded set}\\
u=\text{upper bound}\\
w=\text{lower bound}
\end{lgathered}
$$

---
### supremum
- least upper bound of bounded above set

---
### supremum formula
$$
\begin{lgathered}
(\forall x\in S\subset\mathbb R:x\le u)\land(\exists u'\in\mathbb R:u'<u\implies\exists x\in S:x>u')\implies u=\sup S\\
S=\text{bounded above set}\\
u=\text{supremum}\\
\end{lgathered}
$$

---
### infimum
- greatest lower bound of bounded below set

---
### infimum formula
$$
\begin{lgathered}
(\forall x\in S\subset\mathbb R:w\le x)\land(\exists w'\in\mathbb R:w'>w\implies\exists x\in S:x<w')\implies w=\inf S\\
S=\text{bounded below set}\\
w=\text{infimum}\\
\end{lgathered}
$$

---
### least upper bound property
- for every nonempty bounded above set there exists supremum

---
### least upper bound property formula
$$
\begin{lgathered}
\exists u\in\mathbb R,\forall x\in S\subset\mathbb R:x\le u\implies\exists\sup S\in\mathbb R\\
S=\text{bounded above set}\\
u=\text{upper bound}\\
\end{lgathered}
$$

---
### greatest lower bound property
- for every nonempty bounded below set there exists infimum

---
### greatest lower bound property formula
$$
\begin{lgathered}
\exists w\in\mathbb R,\forall x\in S\subset\mathbb R:w\le x\implies\exists\inf S\in\mathbb R\\
S=\text{bounded below set}\\
w=\text{lower bound}
\end{lgathered}
$$

---
### negative supremum property
- infimum of set equal negative supremum of negative set

---
### negative supremum property formula
$$
\begin{lgathered}
\inf S=-\sup(-S)\\
S=\text{bounded set}
\end{lgathered}
$$

---
### epsilon supremum property
- supremum subtraction with epsilon lesser set

---
### epsilon supremum property formula
$$
\begin{lgathered}
\forall\epsilon>0,\exists x\in S\subset\mathbb R:u-\epsilon<x<u\implies u=\sup S\\
S=\text{bounded above set}\\
u=\text{supremum}
\end{lgathered}
$$

---
### subset supremum property
- subset of set equal subsupremum of supremum

---
### subset supremum property formula
$$
\begin{lgathered}
S_{2}\subset S_{1}\subset\mathbb R\implies\sup S_{2}\le\sup S_{1}\\
S=\text{bounded above set}
\end{lgathered}
$$

---
### maximum supremum property
- set containing supremum of set equal maximum of set

---
### maximum supremum property formula
$$
\begin{lgathered}
\sup S\in S\implies\sup S=\max S\\
S=\text{bounded above set}
\end{lgathered}
$$

---
### addition supremum property
- supremum of sum equal sum of supremum

---
### addition supremum property formula
$$
\begin{lgathered}
\sup(S_{1}+S_{2})=\sup S_{1}+\sup S_{2}\\
S=\text{bounded above set}
\end{lgathered}
$$

---
### union supremum property
- supremum of union equal maximum of supremum

---
### union supremum property formula
$$
\begin{lgathered}
\sup(S_{1}\cup S_{2})=\max\set{\sup S_{1},\sup S_{2}}\\
S=\text{bounded above set}
\end{lgathered}
$$

---
### archimedean property
- natural numbers are unbounded above

---
### archimedean property formula
$$
\begin{lgathered}
\forall x\in\mathbb R^{+},\forall y\in\mathbb R,\exists n\in\mathbb N:y<nx
\end{lgathered}
$$

---
### density property
- between every two real numbers there exists rational number

---
### density property formula
$$
\begin{lgathered}
(x,y\in\mathbb R)\land(x<y)\implies\exists q\in\mathbb Q:x<q<y
\end{lgathered}
$$

---
