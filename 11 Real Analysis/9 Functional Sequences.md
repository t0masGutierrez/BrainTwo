### limit interchange
- interchange of limit and operation equal preservation of operation under limit

---
### limit interchange formula
$$
\begin{aligned}
T ( \lim _ { n \rightarrow \infty } f _ { n } ) = \lim _ { n \rightarrow \infty } T ( f _ { n } ) \\
T = \text { operation } \\
\set { f _ { n } } = \text { sequence }
\end{aligned}
$$

---
### pointwise convergent
- for every point there exists limit of sequence

---
### pointwise convergent formula
$$
\begin{aligned}
\forall x \in S : \lim _ { n \rightarrow \infty } f _ { n } ( x ) = f ( x ) \\
f _ { n } : S \rightarrow \mathbb R \\
f = \text { pointwise limit } \\
\set { f _ { n } } = \text { pointwise convergent sequence }
\end{aligned}
$$

---
### uniform convergent
- there exists limit of sequence for every point

---
### uniform convergent formula
$$
\begin{aligned}
\forall \epsilon > 0 , \exists N \in \mathbb N , \forall n \ge N : | f _ { n } ( x ) - f ( x ) | < \epsilon \\
f _ { n } : S \rightarrow \mathbb R \\
f = \text { uniform limit } \\
\set { f _ { n } } = \text { uniform convergent sequence }
\end{aligned}
$$

---
### series
- sum of terms of sequence

---
### series formula
$$
\begin{aligned}
\sum _ { n = 1 } ^ { \infty } f _ { n } ( x ) \\
f _ { n } : S \rightarrow \mathbb R \\
\set { f _ { n } } = \text { sequence } \\
\sum f _ { n } = \text { series }
\end{aligned}
$$

---
### limit interchange property
- pointwise convergence does not preserve continuity
- pointwise convergence does not preserve differentiability
- pointwise convergence does not preserve integrability

---
### limit interchange property formula
$$
\begin{aligned}
\exists x \in S : \lim _ { t \rightarrow x } \lim _ { n \rightarrow \infty } f _ { n } ( t ) \ne \lim _ { n \rightarrow \infty } \lim _ { t \rightarrow x } f _ { n } ( t ) \\
\exists x \in S : \frac { d } { dx } \lim _ { n \rightarrow \infty } f _ { n } ( x ) \ne \lim _ { n \rightarrow \infty } f _ { n } ' ( x ) \\
\exists a < b : \int _ { a } ^ { b } \lim _ { n \rightarrow \infty } f _ { n } ( x ) d x \ne \lim _ { n \rightarrow \infty } \int _ { a } ^ { b } f _ { n } ( x ) d x \\
\end{aligned}
$$

---
### supremum uniform convergence property
- maximum error approaches zero as limit approaches infinity

---
### supremum uniform convergence property formula
$$
\begin{aligned}
\forall x \in S : \lim _ { n \rightarrow \infty } \sup _ { x \in S } | f _ { n } ( x ) - f ( x ) | = 0 \\
f _ { n } : S \rightarrow \mathbb R \\
f = \text { uniform limit } \\
\set { f _ { n } } = \text { uniform convergent sequence }
\end{aligned}
$$

---
### continuous uniform convergence property
- uniform convergence preserve continuity

---
### continuous uniform convergence property formula
$$
\begin{aligned}
\lim _ { t \rightarrow x } \lim _ { n \rightarrow \infty } f _ { n } ( t ) = \lim _ { n \rightarrow \infty } \lim _ { t \rightarrow x } f _ { n } ( t ) \\
x = \text { limit point } \\
f _ { n } = \text { continuous function } \\
\set { f _ { n } } = \text { uniform convergent sequence }
\end{aligned}
$$

---
### differentiable uniform convergence property
- uniform convergence preserve differentiability

---
### differentiable uniform convergence property formula
$$
\begin{aligned}
\frac { d } { dx } \lim _ { n \rightarrow \infty } f _ { n } ( x ) = \lim _ { n \rightarrow \infty } f _ { n } ' ( x ) \\
f _ { n } = \text { continuous function } \\
\set { f _ { n } } = \text { uniform convergent sequence }
\end{aligned}
$$

---
### integrable uniform convergence property
- uniform convergence preserve integrability

---
### integrable uniform convergence property formula
$$
\begin{aligned}
\int _ { a } ^ { b } \lim _ { n \rightarrow \infty } f _ { n } ( x ) d x = \lim _ { n \rightarrow \infty } \int _ { a } ^ { b } f _ { n } ( x ) d x \\
\end{aligned}
$$

---
### cauchy uniform convergence property
- uniform convergent sequence equal uniform cauchy sequence

---
### cauchy uniform convergence property formula
$$
\begin{aligned}
\forall \epsilon > 0 , \exists N \in \mathbb N , \forall n , m \ge N : | f _ { n } ( x ) - f _ { m } ( x ) | < \epsilon \\
f _ { n } : S \rightarrow \mathbb R \\
f = \text { uniform limit } \\
\set { f _ { n } } = \text { uniform convergent sequence }
\end{aligned}
$$

---
### absolute convergence series property
- finite sum of terms of sequence

---
### absolute convergence series property formula
$$
\begin{aligned}
\sum _ { n = 1 } ^ { \infty } | f _ { n } ( x ) | < \infty \\
f _ { n } : S \rightarrow \mathbb R \\
\set { f _ { n } } = \text { sequence } \\
\sum f _ { n } = \text { absolute convergent series }
\end{aligned}
$$

---
### uniform convergence series property
- there exists limit of series for every point

---
### uniform convergence series property formula
$$
\begin{aligned}
\forall x \in X : | f _ { n } ( x ) | \le M _ { n } \land \sum M _ { n } < \infty \implies \forall \epsilon > 0 , \exists N \in \mathbb N , \forall n \ge N : | \sum _ { k = 1 } ^ { n } f _ { k } ( x ) - \sum _ { k = 1 } ^ { \infty } f _ { k } ( x ) | < \epsilon \\
f _ { n } : X \rightarrow \mathbb R \\
f = \text { uniform limit } \\
\set { f _ { n } } = \text { sequence } \\
\sum f _ { n } = \text { uniform convergent series }
\end{aligned}
$$

---
