### sequence
- unordered collection of numbers

---
### sequence formula
$$
\begin{aligned}
\{ a _ { n } \} _ { n = 1 } ^ { \infty } = a _ { 1 } , a _ { 2 } , . . . a _ { n } . . . \\
n = \text { index }
\end{aligned}
$$

---
### explicit function
- general term as function of index

---
### explicit function formula
$$
\begin{aligned}
a _ { n } = f ( n )
\end{aligned}
$$

---
### implicit function
- general term as function of preceding term(s)

---
### implicit function formula
$$
\begin{aligned}
a _ { n + 1 } = f ( a _ { n } )
\end{aligned}
$$

---
### arithmetic sequence
- add each term of sequence with common difference

---
### arithmetic sequence formula
$$
\begin{aligned}
a _ { n } = a _ { 1 } + ( n - 1 ) d \\
a _ { 1 } = \text { 1st term } \\
d = \text { common difference }
\end{aligned}
$$

---
### geometric sequence
- multiply each term of sequence with common ratio

---
### geometric sequence formula
$$
\begin{aligned}
a _ { n } = a _ { 1 } r ^ { n - 1 } \\
a _ { 1 } = \text { 1st term } \\
r = \text { common ratio }
\end{aligned}
$$

---
### limit of sequence
- $a _ { n }$ behavior as n approaches infinity
![[3 Calculus/Images/limit of sequence.png]]

---
### limit of sequence formula
$$
\begin{aligned}
\lim _ { n \to \infty } a _ { n } = L \\
\lim _ { n \to \infty } b _ { n } = K
\end{aligned}
$$

---
### composite limit of sequence
- replace function argument with limit of sequence

---
### composite limit of sequence formula
$$
\begin{aligned}
\lim _ { n \to \infty } a _ { n } = L \land \lim _ { n \to L } f ( n ) = L \to \lim _ { n \to \infty } f ( a _ { n } ) = f ( L )
\end{aligned}
$$

---
### convergent sequence
- limit of sequence does exist

---
### divergent sequence
- limit of sequence does not exist

---
### squeeze theorem of sequence
- approximate limit by squeezing $f ( n )$ between two functions 
- $g ( n ) ≤ f ( n ) ≤ h ( n )$ for all *x* near *n*
- $\lim _ { n \to \infty } g ( n ) = \lim _ { n \to \infty } h ( n ) = L$
- if both conditions met then $\lim _ { x \to n } f ( x ) = L$
![[3 Calculus/Images/squeeze theorem.png]]

---
### absolute value theorem of sequence
- absolute value of convergent sequence also converges but converse not always true

---
### absolute value formula of sequence
$$
\begin{aligned}
\lim _ { n \to \infty } a _ { n } = L \to \lim _ { n \to \infty } | a _ { n } | = | L |
\end{aligned}
$$

---
### increasing sequence
- every term greater than or equal preceding term

---
### increasing sequence formula
$$
\begin{aligned}
\forall ( n \in N ) ( a _ { n } \le a _ { n + 1 } )
\end{aligned}
$$

---
### decreasing sequence
- every term less than or equal preceding term

---
### decreasing sequence formula
$$
\begin{aligned}
\forall ( n \in N ) ( a _ { n } \ge a _ { n + 1 } )
\end{aligned}
$$

---
### monotone sequence
- sequence either increasing or decreasing

---
### monotone sequence formula
$$
\begin{aligned}
\forall ( n \in N ) ( a _ { n } \le a _ { n + 1 } ) \lor \forall ( n \in N ) ( a _ { n } \ge a _ { n + 1 } )
\end{aligned}
$$

---
### lower bound sequence
- every term greater than or equal some number

---
### lower bound sequence formula
$$
\begin{aligned}
\forall ( n \in N ) ( a _ { n } > m ) \\
m = \text { lower bound }
\end{aligned}
$$

---
### upper bound sequence
- every term less than or equal some number

---
### upper bound sequence formula
$$
\begin{aligned}
\forall ( n \in N ) ( a _ { n } < M ) \\
M = \text { upper bound }
\end{aligned}
$$

---
### bound sequence
- there exists upper bound and lower bound

---
### bound sequence formula
$$
\begin{aligned}
\exists ( n \in N ) ( a _ { n } > m ) \land \exists ( n \in N ) ( a _ { n } < M )
\end{aligned}
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
\begin{aligned}
\sum _ { n = 1 } ^ { \infty } a _ { n } = a _ { 1 } + a _ { 2 } + . . . + a _ { n } . . . \\
n = \text { index }
\end{aligned}
$$

---
### nth partial sum
- sum of the first *n* terms from sequence

---
### nth partial sum formula
$$
\begin{aligned}
S _ { n } = \sum _ { k = 1 } ^ { n } a _ { k } = a _ { 1 } + a _ { 2 } + . . . + a _ { n } \\
n = \text { number of terms } \\
k = \text { index }
\end{aligned}
$$

---
### limit of nth partial sum
- $S _ { n }$ behavior as *n* approaches infinity
![[3 Calculus/Images/limit of nth partial sum.png|300]]

---
### limit of nth partial sum formula
$$
\begin{aligned}
\lim _ { n \to \infty } S _ { n } = \lim _ { n \to \infty } \sum _ { k = 1 } ^ { n } a _ { k } = S
\end{aligned}
$$

---
### convergent series
- limit of nth partial sum does exist

---
### convergent series formula
$$
\begin{aligned}
\lim _ { n \to \infty } S _ { n } = S \to \sum _ { n = 1 } ^ { \infty } a _ { n } = S
\end{aligned}
$$

---
### divergent series
- limit of nth partial sum does not exist

---
### divergent series formula
$$
\begin{aligned}
\lim _ { n \to \infty } S _ { n } \ne S \to \sum _ { n = 1 } ^ { \infty } a _ { n } \ne S
\end{aligned}
$$

---
### harmonic series
- sum of terms from harmonic sequence

---
### harmonic series formula
$$
\begin{aligned}
\sum _ { n = 1 } ^ { \infty } \frac { 1 } { n } = 1 + \frac { 1 } { 2 } + . . . + \frac { 1 } { n } . . .
\end{aligned}
$$

---
### geometric series
- sum of terms from geometric sequence

---
### geometric series formula
$$
\begin{aligned}
| r | < 1 \to \sum _ { n = 1 } ^ { \infty } a _ { 1 } r ^ { n - 1 } = \frac { a _ { 1 } } { 1 - r } \\
| r | \ge 1 \to \sum _ { n = 1 } ^ { \infty } a _ { 1 } r ^ { n - 1 } \ne S \\
a _ { 1 } = \text { 1st term } \\
r = \text { common ratio }
\end{aligned}
$$

---
### telescoping series
- series where most terms of nth partial sum cancel and some first terms and some last terms remain

---
### telescoping series formula
$$
\begin{aligned}
\sum _ { n = 1 } ^ { \infty } ( a _ { n } - a _ { n + 1 } ) = a _ { 1 } - \lim _ { n \to \infty } a _ { n + 1 } \\
\end{aligned}
$$

---
### convergent series theorem
- if $\sum _ { n = 1 } ^ { \infty } a _ { n }$ converges then $\lim _ { n \to \infty } a _ { n }$ equal zero

---
### nth term divergence test
- contrapositive of convergent series theorem

---
### nth term divergence test formula
$$
\begin{aligned}
\lim _ { n \to \infty } a _ { n } \ne 0 \to \sum _ { n = 1 } ^ { \infty } a _ { n } \ne S
\end{aligned}
$$

---
### integral test
- if integral converges then series converges and inverse
- $f ( x )$ continuous, $f ( x )$ positive, and $f ( x )$ decreasing such that $\forall n f ( n ) = a _ { n }$

---
### integral test formula
$$
\begin{aligned}
\int _ { n } ^ { \infty } f ( x ) d x = S \to \sum _ { n = 1 } ^ { \infty } a _ { n } = S \\
\int _ { n } ^ { \infty } f ( x ) d x \ne S \to \sum _ { n = 1 } ^ { \infty } a _ { n } \ne S
\end{aligned}
$$

---
### p series
- sum of terms from harmonic power sequence

---
### p series formula
$$
\begin{aligned}
p > 1 \to \sum _ { n = 1 } ^ { \infty } \frac { 1 } { n ^ { p } } = \frac { 1 } { 1 ^ { p } } + \frac { 1 } { 2 ^ { p } } + . . . + \frac { 1 } { n ^ { p } } . . . = S \\
p \le 1 \to \sum _ { n = 1 } ^ { \infty } \frac { 1 } { n ^ { p } } = \frac { 1 } { 1 ^ { p } } + \frac { 1 } { 2 ^ { p } } + . . . + \frac { 1 } { n ^ { p } } . . . \ne S \\
p = \text { power }
\end{aligned}
$$

---
### comparison test
- if larger series converges then smaller series converges
- if smaller series diverges then larger series diverges

---
### comparison test formula
$$
\begin{aligned}
\forall n ( a _ { n } \le b _ { n } ) \sum _ { n = 1 } ^ { \infty } b _ { n } = S \to \sum _ { n = 1 } ^ { \infty } a _ { n } = S \\
\forall n ( a _ { n } \le b _ { n } ) \sum _ { n = 1 } ^ { \infty } a _ { n } \ne S \to \sum _ { n = 1 } ^ { \infty } b _ { n } \ne S \\
\end{aligned}
$$

---
### limit comparison test
- if limit of series ratio does exist then both series either converge or diverge

---
### limit comparison test formula
$$
\begin{aligned}
\lim _ { n \to \infty } \frac { a _ { n } } { b _ { n } } = 0 \le L \le \infty \to \sum _ { n = 1 } ^ { \infty } a _ { n } , b _ { n } = S \  \  \lor \sum _ { n = 1 } ^ { \infty } a _ { n } , b _ { n } \ne S \\
\lim _ { n \to \infty } \frac { a _ { n } } { b _ { n } } = 0 \  \  \land \sum _ { n = 1 } ^ { \infty } b _ { n } = S \to \sum _ { n = 1 } ^ { \infty } a _ { n } = S \\
\lim _ { n \to \infty } \frac { a _ { n } } { b _ { n } } = \infty \  \  \land \sum _ { n = 1 } ^ { \infty } b _ { n } \ne S \to \sum _ { n = 1 } ^ { \infty } a _ { n } \ne S
\end{aligned}
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
\begin{aligned}
\forall n ( a _ { n + 1 } \le a _ { n } ) \land \lim _ { n \to \infty } a _ { n } = 0 \to \sum _ { n = 1 } ^ { \infty } a _ { n } ( - 1 ) ^ { n + 1 } = S \\
\end{aligned}
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
- if $\sum _ { n = 1 } ^ { \infty } | a _ { n } |$ converges then $\sum _ { n = 1 } ^ { \infty } a _ { n }$ converges
- if $\sum _ { n = 1 } ^ { \infty } a _ { n }$ diverges then $\sum _ { n = 1 } ^ { \infty } | a _ { n } |$ diverges

---
### ratio test
- if absolute value of series ratio $< 1$ then series converges
- if absolute value of series ratio $> 1$ then series diverges

---
### ratio test formula
$$
\begin{aligned}
\lim _ { n \to \infty } | \frac { a _ { n + 1 } } { a _ { n } } | < 1 \to \sum _ { n = 1 } ^ { \infty } a _ { n } = S \\
\lim _ { n \to \infty } | \frac { a _ { n + 1 } } { a _ { n } } | > 1 \to \sum _ { n = 1 } ^ { \infty } a _ { n } \ne S \\
\lim _ { n \to \infty } | \frac { a _ { n + 1 } } { a _ { n } } | = 1 \to \sum _ { n = 1 } ^ { \infty } a _ { n } = \  ? \\
\end{aligned}
$$

---
### root test
- if absolute value of series nth root $< 1$ then series converges
- if absolute value of series nth root $> 1$ or equal $\infty$ then series diverges

---
### root test formula
$$
\begin{aligned}
\lim _ { n \to \infty } | \sqrt [ n ] { a _ { n } } | < 1 \to \sum _ { n = 1 } ^ { \infty } a _ { n } = S \\
\lim _ { n \to \infty } | \sqrt [ n ] { a _ { n } } | > 1 \  \  \lor \lim _ { n \to \infty } | \sqrt [ n ] { a _ { n } } | = \infty \to \sum _ { n = 1 } ^ { \infty } a _ { n } \ne S \\
\lim _ { n \to \infty } | \sqrt [ n ] { a _ { n } } | = < = 1 \to \sum _ { n = 1 } ^ { \infty } a _ { n } = ? \\
\end{aligned}
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
- polynomial approximation of $f ( x )$ about point *c* by finitely summing derivatives of $f ( x )$
- higher degree polynomials better approximate $f ( x )$ 
![[3 Calculus/Images/taylor polynomial.png]]

---
### taylor polynomial formula
$$
\begin{aligned}
P _ { n } ( x ) = f ( c ) + f ' ( c ) ( x - c ) + \frac { f ' ' ( c ) } { 2 ! } ( x - c ) ^ { 2 } + . . . + \frac { f ^ { n ' } ( c ) } { n ! } ( x - c ) ^ { n } \\
c = \text { center }
\end{aligned}
$$

---
### mclaurin polynomial
- polynomial approximation of $f ( x )$ about point 0 by finitely summing derivatives of $f ( x )$

---
### mclaurin polynomial formula
$$
\begin{aligned}
P _ { n } ( x ) = f ( 0 ) + f ' ( 0 ) x + \frac { f ' ' ( 0 ) } { 2 ! } x ^ { 2 } + . . . + \frac { f ^ { n ' } ( 0 ) } { n ! } x ^ { n } \\
c = 0
\end{aligned}
$$

---
### power series
- series of powers

---
### power series formula
$$
\begin{aligned}
f ( x ) = \sum _ { n = 1 } ^ { \infty } a _ { n } ( x - c ) ^ { n }
\end{aligned}
$$

---
### domain of power series
- set of all *x* where power series converges
![[3 Calculus/Images/domain of power series.png]]

---
### power series convergence theorem
- series converges for all *x* 
- series converges for $| x - c | < R$ 
- series converges for $x = c$ 

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
- substitute $x = c \pm R$ into power series
- simplify power series into the form $\sum _ { n = 1 } ^ { \infty } a _ { n }$
- apply series test
- if series converges at endpoint then close interval 

---
### power series differentiation property
$$
\begin{aligned}
f ' ( x ) = \sum _ { n = 1 } ^ { \infty } [ n a _ { n } ( x - c ) ^ { n - 1 } ] \\
\end{aligned}
$$

---
### power series integration property
$$
\begin{aligned}
\int f ( x ) d x = \sum _ { n = 1 } ^ { \infty } [ \frac { a _ { n } } { n + 1 } ( x - c ) ^ { n + 1 } ]
\end{aligned}
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
- polynomial approximation of $f ( x )$ about point *c* by infinitely summing derivatives of $f ( x )$

---
### taylor series formula
$$
\begin{aligned}
P _ { n } ( x ) = \sum _ { n = 1 } ^ { \infty } \frac { f ^ { n ' } ( c ) } { n ! } ( x - c ) ^ { n } \\
c = \text { center }
\end{aligned}
$$

---
