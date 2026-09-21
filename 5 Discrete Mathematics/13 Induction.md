### induction
- instance prove general propositional function true for all positive integers
![[5 Discrete Mathematics/Images/induction.png|300]]

---
### induction formula
$$
\begin{lgathered}
P(1)\\
P(k)\implies P(k+1)\\
\therefore\forall nP(n)
\end{lgathered}
$$

---
### calculate induction
- prove statement true for the 1st element $S₁$
- assume $Sₖ$ true for all *n = k* by replacing *n* with *k*
- prove $Sₖ+₁$ true by substituting $(k+1)$ into $S_{k}$
- solve and conclude $S_{k+1}$ true for all positive integers

---
### basis step
- proof of $P(1)$ for proof by induction of $\forall nP(n)$

---
### inductive step
- proof of $P(k)→P(k+1)$ for proof by induction of $\forall nP(n)$

---
### well ordering property
- every nonempty subset of nonnegative integers has least element

---
### strong induction
- instance prove general propositional function true for all positive integers less than *k*
![[5 Discrete Mathematics/Images/strong induction.png|300]]

---
### strong induction formula
$$
\begin{lgathered}
P(1)\\
P(j)\implies P(j+1)\\
\therefore\forall nP(n)\\
j=1,2,...k
\end{lgathered}
$$

---
### calculate strong induction
- prove statement true for the 1st element $S₁$
- assume $Sₖ$ true for all $n\le k$ by replacing *n* with *k*
- prove $Sₖ+₁$ true by substituting $(k+1)$ into $S_{k}$
- solve and conclude $S_{k+1}$ true for all positive integers

---
