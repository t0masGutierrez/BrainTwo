### sequence
- unordered collection of numbers

---
### sequence formula
$$
\begin{array}{l}
\{a_{n}\}_{n=1}^{\infty}=a_{1},a_{2},...a_{n}...\\
n=\text{index}
\end{array}
$$

---
### explicit function
- general term as function of index

---
### explicit function formula
$$
\begin{array}{l}
a_{n}=f(n)
\end{array}
$$

---
### implicit function
- general term as function of preceding term(s)

---
### implicit function formula
$$
\begin{array}{l}
a_{n+1}=f(a_{n})
\end{array}
$$

---
### arithmetic sequence
- add each term of sequence with common difference

---
### arithmetic sequence formula
$$
\begin{array}{l}
a_{n}=a_{1}+(n-1)d\\
a_{1}=\text{1st term}\\
d=\text{common difference}
\end{array}
$$

---
### geometric sequence
- multiply each term of sequence with common ratio

---
### geometric sequence formula
$$
\begin{array}{l}
a_{n}=a_{1}r^{n-1}\\
a_{1}=\text{1st term}\\
r=\text{common ratio}
\end{array}
$$

---
### limit of sequence
- $a_{n}$ behavior as n approaches infinity
![[3 Calculus/Images/limit of sequence.png]]

---
### limit of sequence formula
$$
\begin{array}{l}
\lim_{n\to\infty}a_{n}=L\\
\lim_{n\to\infty}b_{n}=K
\end{array}
$$

---
### composite limit of sequence
- replace function argument with limit of sequence

---
### composite limit of sequence formula
$$
\begin{array}{l}
\lim_{n\to\infty}a_{n}=L\land\lim_{n\to L}f(n)=L\to\lim_{n\to\infty}f(a_{n})=f(L)
\end{array}
$$

---
### convergent sequence
- limit of sequence does exist

---
### divergent sequence
- limit of sequence does not exist

---
### squeeze theorem of sequence
- approximate limit by squeezing $f(n)$ between two functions
- $g(n)≤f(n)≤h(n)$ for all *x* near *n*
- $\lim_{n\to\infty}g(n)=\lim_{n\to\infty}h(n)=L$
- if both conditions met then $\lim_{x\to n}f(x)=L$
![[3 Calculus/Images/squeeze theorem.png]]

---
### absolute value theorem of sequence
- absolute value of convergent sequence also converges but converse not always true

---
### absolute value formula of sequence
$$
\begin{array}{l}
\lim_{n\to\infty}a_{n}=L\to\lim_{n\to\infty}|a_{n}|=|L|
\end{array}
$$

---
### increasing sequence
- every term greater than or equal preceding term

---
### increasing sequence formula
$$
\begin{array}{l}
\forall(n\in N)(a_{n}\le a_{n+1})
\end{array}
$$

---
### decreasing sequence
- every term less than or equal preceding term

---
### decreasing sequence formula
$$
\begin{array}{l}
\forall(n\in N)(a_{n}\ge a_{n+1})
\end{array}
$$

---
### monotone sequence
- sequence either increasing or decreasing

---
### monotone sequence formula
$$
\begin{array}{l}
\forall(n\in N)(a_{n}\le a_{n+1})\lor\forall(n\in N)(a_{n}\ge a_{n+1})
\end{array}
$$

---
### lower bound sequence
- every term greater than or equal some number

---
### lower bound sequence formula
$$
\begin{array}{l}
\forall(n\in N)(a_{n}>m)\\
m=\text{lower bound}
\end{array}
$$

---
### upper bound sequence
- every term less than or equal some number

---
### upper bound sequence formula
$$
\begin{array}{l}
\forall(n\in N)(a_{n}<M)\\
M=\text{upper bound}
\end{array}
$$

---
### bound sequence
- there exists upper bound and lower bound

---
### bound sequence formula
$$
\begin{array}{l}
\exists(n\in N)(a_{n}>m)\land\exists(n\in N)(a_{n}<M)
\end{array}
$$

---
### bound monotone sequence theorem
- if bound monotone sequence then convergent sequence

---
### series
- sum of terms from sequence

---
### series formula
$$
\begin{array}{l}
\sum_{n=1}^{\infty}a_{n}=a_{1}+a_{2}+...+a_{n}...\\
n=\text{index}
\end{array}
$$

---
### nth partial sum
- sum of the first *n* terms from sequence

---
### nth partial sum formula
$$
\begin{array}{l}
S_{n}=\sum_{k=1}^{n}a_{k}=a_{1}+a_{2}+...+a_{n}\\
n=\text{number of terms}\\
k=\text{index}
\end{array}
$$

---
### limit of nth partial sum
- $S_{n}$ behavior as *n* approaches infinity
![[3 Calculus/Images/limit of nth partial sum.png|300]]

---
### limit of nth partial sum formula
$$
\begin{array}{l}
\lim_{n\to\infty}S_{n}=\lim_{n\to\infty}\sum_{k=1}^{n}a_{k}=S
\end{array}
$$

---
### convergent series
- limit of nth partial sum does exist

---
### convergent series formula
$$
\begin{array}{l}
\lim_{n\to\infty}S_{n}=S\to\sum_{n=1}^{\infty}a_{n}=S
\end{array}
$$

---
### divergent series
- limit of nth partial sum does not exist

---
### divergent series formula
$$
\begin{array}{l}
\lim_{n\to\infty}S_{n}\ne S\to\sum_{n=1}^{\infty}a_{n}\ne S
\end{array}
$$

---
### harmonic series
- sum of terms from harmonic sequence

---
### harmonic series formula
$$
\begin{array}{l}
\sum_{n=1}^{\infty}\frac{1}{n}=1+\frac{1}{2}+...+\frac{1}{n}...
\end{array}
$$

---
### geometric series
- sum of terms from geometric sequence

---
### geometric series formula
$$
\begin{array}{l}
|r|<1\to\sum_{n=1}^{\infty}a_{1}r^{n-1}=\frac{a_{1}}{1-r}\\
|r|\ge1\to\sum_{n=1}^{\infty}a_{1}r^{n-1}\ne S\\
a_{1}=\text{1st term}\\
r=\text{common ratio}
\end{array}
$$

---
### telescoping series
- series where most terms of nth partial sum cancel and some first terms and some last terms remain

---
### telescoping series formula
$$
\begin{array}{l}
\sum_{n=1}^{\infty}(a_{n}-a_{n+1})=a_{1}-\lim_{n\to\infty}a_{n+1}\\
\end{array}
$$

---
### convergent series theorem
- if $\sum_{n=1}^{\infty}a_{n}$ converges then $\lim_{n\to\infty}a_{n}$ equal zero

---
### nth term divergence test
- contrapositive of convergent series theorem

---
### nth term divergence test formula
$$
\begin{array}{l}
\lim_{n\to\infty}a_{n}\ne0\to\sum_{n=1}^{\infty}a_{n}\ne S
\end{array}
$$

---
### integral test
- if integral converges then series converges and inverse
- $f(x)$ continuous, $f(x)$ positive, and $f(x)$ decreasing such that $\forall nf(n)=a_{n}$

---
### integral test formula
$$
\begin{array}{l}
\int_{n}^{\infty}f(x)dx=S\to\sum_{n=1}^{\infty}a_{n}=S\\
\int_{n}^{\infty}f(x)dx\ne S\to\sum_{n=1}^{\infty}a_{n}\ne S
\end{array}
$$

---
### p series
- sum of terms from harmonic power sequence

---
### p series formula
$$
\begin{array}{l}
p>1\to\sum_{n=1}^{\infty}\frac{1}{n^{p}}=\frac{1}{1^{p}}+\frac{1}{2^{p}}+...+\frac{1}{n^{p}}...=S\\
p\le1\to\sum_{n=1}^{\infty}\frac{1}{n^{p}}=\frac{1}{1^{p}}+\frac{1}{2^{p}}+...+\frac{1}{n^{p}}...\ne S\\
p=\text{power}
\end{array}
$$

---
### comparison test
- if larger series converges then smaller series converges
- if smaller series diverges then larger series diverges

---
### comparison test formula
$$
\begin{array}{l}
\forall n(a_{n}\le b_{n})\sum_{n=1}^{\infty}b_{n}=S\to\sum_{n=1}^{\infty}a_{n}=S\\
\forall n(a_{n}\le b_{n})\sum_{n=1}^{\infty}a_{n}\ne S\to\sum_{n=1}^{\infty}b_{n}\ne S\\
\end{array}
$$

---
### limit comparison test
- if limit of series ratio does exist then both series either converge or diverge

---
### limit comparison test formula
$$
\begin{array}{l}
\lim_{n\to\infty}\frac{a_{n}}{b_{n}}=0\le L\le\infty\to\sum_{n=1}^{\infty}a_{n},b_{n}=S\ \ \lor\sum_{n=1}^{\infty}a_{n},b_{n}\ne S\\
\lim_{n\to\infty}\frac{a_{n}}{b_{n}}=0\ \ \land\sum_{n=1}^{\infty}b_{n}=S\to\sum_{n=1}^{\infty}a_{n}=S\\
\lim_{n\to\infty}\frac{a_{n}}{b_{n}}=\infty\ \ \land\sum_{n=1}^{\infty}b_{n}\ne S\to\sum_{n=1}^{\infty}a_{n}\ne S
\end{array}
$$

---
### alternating series
- series whose terms alternate between positive and negative

---
### alternating series test
- if absolute value of non increasing terms approach zero then series converges
![[3 Calculus/Images/alternating series test.png]]

---
### alternating series test formula
$$
\begin{array}{l}
\forall n(a_{n+1}\le a_{n})\land\lim_{n\to\infty}a_{n}=0\to\sum_{n=1}^{\infty}a_{n}(-1)^{n+1}=S\\
\end{array}
$$

---
### absolutely convergent series
- absolute value of series converges
- possible rearrangement of terms without changing sum of series

---
### conditionally convergent series
- series converges but absolute value of series diverges
- impossible rearrangement of terms without changing sum of series

---
### absolute convergence theorem
- if $\sum_{n=1}^{\infty}|a_{n}|$ converges then $\sum_{n=1}^{\infty}a_{n}$ converges
- if $\sum_{n=1}^{\infty}a_{n}$ diverges then $\sum_{n=1}^{\infty}|a_{n}|$ diverges

---
### ratio test
- if absolute value of series ratio $<1$ then series converges
- if absolute value of series ratio $>1$ then series diverges

---
### ratio test formula
$$
\begin{array}{l}
\lim_{n\to\infty}|\frac{a_{n+1}}{a_{n}}|<1\to\sum_{n=1}^{\infty}a_{n}=S\\
\lim_{n\to\infty}|\frac{a_{n+1}}{a_{n}}|>1\to\sum_{n=1}^{\infty}a_{n}\ne S\\
\lim_{n\to\infty}|\frac{a_{n+1}}{a_{n}}|=1\to\sum_{n=1}^{\infty}a_{n}=\ ?\\
\end{array}
$$

---
### root test
- if absolute value of series nth root $<1$ then series converges
- if absolute value of series nth root $>1$ or equal $\infty$ then series diverges

---
### root test formula
$$
\begin{array}{l}
\lim_{n\to\infty}|\sqrt[n]{a_{n}}|<1\to\sum_{n=1}^{\infty}a_{n}=S\\
\lim_{n\to\infty}|\sqrt[n]{a_{n}}|>1\ \ \lor\lim_{n\to\infty}|\sqrt[n]{a_{n}}|=\infty\to\sum_{n=1}^{\infty}a_{n}\ne S\\
\lim_{n\to\infty}|\sqrt[n]{a_{n}}|=<=1\to\sum_{n=1}^{\infty}a_{n}=?\\
\end{array}
$$

---
### test summary
- divergence
- geometric series
- telescoping series
- p series
- alternating series
- integral
- root
- ratio
- comparison
- limit comparison
![[3 Calculus/Images/test strategy.png]] ![[3 Calculus/Images/test strategy1.png]]

---
### taylor polynomial
- polynomial approximation of $f(x)$ about point *c* by finitely summing derivatives of $f(x)$
- higher degree polynomials better approximate $f(x)$
![[3 Calculus/Images/taylor polynomial.png]]

---
### taylor polynomial formula
$$
\begin{array}{l}
P_{n}(x)=f(c)+f'(c)(x-c)+\frac{f''(c)}{2!}(x-c)^{2}+...+\frac{f^{n'}(c)}{n!}(x-c)^{n}\\
c=\text{center}
\end{array}
$$

---
### mclaurin polynomial
- polynomial approximation of $f(x)$ about point 0 by finitely summing derivatives of $f(x)$

---
### mclaurin polynomial formula
$$
\begin{array}{l}
P_{n}(x)=f(0)+f'(0)x+\frac{f''(0)}{2!}x^{2}+...+\frac{f^{n'}(0)}{n!}x^{n}\\
c=0
\end{array}
$$

---
### power series
- series of powers

---
### power series formula
$$
\begin{array}{l}
f(x)=\sum_{n=1}^{\infty}a_{n}(x-c)^{n}
\end{array}
$$

---
### domain of power series
- set of all *x* where power series converges
![[3 Calculus/Images/domain of power series.png]]

---
### power series convergence theorem
- series converges for all *x*
- series converges for $|x-c|<R$
- series converges for $x=c$

---
### interval of convergence
- interval about center where power series converges including endpoint(s)
![[3 Calculus/Images/interval of convergence.png]]

---
### radius of convergence
- $\pm$ number about center where power series converges
![[3 Calculus/Images/radius of convergence.png]]

---
### calculate radius of convergence
- ratio test or root test
- if radius of convergence equal finite number then test endpoint convergence
![[3 Calculus/Images/endpoint convergence.png]]

---
### endpoint convergence
- substitute $x=c\pm R$ into power series
- simplify power series into the form $\sum_{n=1}^{\infty}a_{n}$
- apply series test
- if series converges at endpoint then close interval

---
### power series differentiation property
$$
\begin{array}{l}
f'(x)=\sum_{n=1}^{\infty}[na_{n}(x-c)^{n-1}]\\
\end{array}
$$

---
### power series integration property
$$
\begin{array}{l}
\int f(x)dx=\sum_{n=1}^{\infty}[\frac{a_{n}}{n+1}(x-c)^{n+1}]
\end{array}
$$

---
### operations with power series
- constant multiple
- power
- sum difference
![[3 Calculus/Images/operations with power series.png]]

---
### function conversion power series
- replace function with power series

---
### function conversion power series formula
- harmonic
- geometric
- natural logarithm
- natural exponential
- sine
- cosine
- arctangent
- arcsine
- binomial
![[3 Calculus/Images/function as power series formula.png]]

---
### taylor series
- polynomial approximation of $f(x)$ about point *c* by infinitely summing derivatives of $f(x)$

---
### taylor series formula
$$
\begin{array}{l}
P_{n}(x)=\sum_{n=1}^{\infty}\frac{f^{n'}(c)}{n!}(x-c)^{n}\\
c=\text{center}
\end{array}
$$

---
