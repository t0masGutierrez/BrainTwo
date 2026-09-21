### limit
- function output as input approaches point

---
### limit formula
$$
\begin{lgathered}
\lim_{x\to n}f(x)=L\\
\lim_{x\to n}g(x)=K
\end{lgathered}
$$

---
### limit constant formula
$$
\begin{lgathered}
\lim_{x\to n}c=c
\end{lgathered}
$$

---
### limit constant multiple formula
$$
\begin{lgathered}
\lim_{x\to n}cf(x)=c\times L
\end{lgathered}
$$

---
### limit sum formula
$$
\begin{lgathered}
\lim_{x\to n}f(x)\pm g(x)=L\pm K
\end{lgathered}
$$

---
### limit product formula
$$
\lim_{x\to n}f(x)\times g(x)=L\times K
$$

---
### limit quotient formula
$$
\begin{lgathered}
\lim_{x\to n}f(x)\div g(x)=L\div K\\
K\ne0
\end{lgathered}
$$

---
### composite limit
- limit must be existent at internal function
- external function must be continuous at limit

---
### limit composition formula
$$
\begin{lgathered}
\lim_{x\to n}(f\circ g)(x)=f[\lim_{x\to n}g(x)]\\
g(x)=L\\
L\in f
\end{lgathered}
$$

---
### multiple composite limit
- find the limit of 1st function 1 sided limit and the nth function 1 sided limit
- if all functions do not approach the same value from 1 sided limit then limit does not exist

---
### existent composite limit
- internal function limit equal the external function argument

---
### nonexistent composite limit
- internal function limit equal the external limit argument
- if internal function approaches *n* from above then external function approaches *n* from right

---
### two sided limit
- if function does not approach the same value from both sides then limit does not exist
- existence not dependent upon defined or undefined

---
### increasing towards
- as *x* approaches from the left

---
### decreasing towards
- as *x* approaches from the right

---
### one sided limit
- limits that differ depending on whether function approaches from right or left
- existence not dependent upon approaching the same value from both sides

---
### right handed limit formula
- $x\implies n^{+}$  = as *x* approaches from values above *n*

---
### left handed limit formula
- $x\implies n^{-}$ = as *x* approaches from values below *n*

---
### unbounded limit
- $f(x)$ behavior as *x* approaches value equal infinity

---
### approximate limit
- continually increment *x* from both sides
- do not conclude limit from function value
- approximate limit from infinitely close function value

---
### limit by direct substitution
- if function continuous at value then substitute value directly into function

---
### piecewise limit
- evaluate limit by direct substitution within domain interval
- if value on the boundary between domain interval then evaluate left handed limit and right handed limit

---
### limit by factor
- factorization
- remove common factors between numerator and denominator
- formulate undefined domain interval
- evaluate limit by direct substitution

---
### difference of squares
$$
\begin{lgathered}
a^{2}-b^{2}=(a+b)(a-b)
\end{lgathered}
$$

---
### limit by rationalization
- conjugate root theorem
- rational function multiplication with conjugate root
- limit by factor

---
### conjugate root theorem
$$
\begin{lgathered}
(a+\sqrt{b})(a-\sqrt{b})=a^{2}-b
\end{lgathered}
$$

---
### limit by trigonometric identity
- pythagorean identity
- special trigonometric identity

---
### special sine identity
$$
\begin{lgathered}
\lim_{x\to n}\frac{\sin(x)}{x}=1
\end{lgathered}
$$

---
### special cosine identity
$$
\begin{lgathered}
\lim_{x\to n}\frac{1-\cos(x)}{x}=0
\end{lgathered}
$$

---
### pythagorean identity
$$
\begin{lgathered}
\sin^{2}(x)+\cos^{2}(x)=1
\end{lgathered}
$$

---
### strategy
- if nonzero ÷ 0 then unbounded limit
- if zero ÷ 0 then indeterminate
- limit by direct substitution
- limit by factor
- limit by rationalization
- limit by trigonometric identity
- approximate limit

---
### squeeze theorem
- approximate limit by squeezing $f(x)$ between two functions
- $g(x)≤f(x)≤h(x)$ for all *x* near *n*
- $\lim_{x\to n}g(x)=\lim_{x\to n}h(x)=L$
- if both conditions met then $\lim_{x\to n}f(x)=L$
![[3 Calculus/Images/squeeze theorem.png]]

---
### continuity
$$
\begin{lgathered}
\lim_{x\to n}f(x)=f(n)\\
\lim_{x\to n^{-}}f(x)=\lim_{x\to n^{+}}f(x)\\
\lim_{x\to n}f(x)\ne\pm\infty
\end{lgathered}
$$

---
### discontinuity
- hole
- jump
- infinite

---
### hole discontinuity
- missing $f(x)$ value
- $\lim_{x\to n}f(x)\ne f(n)$

---
### jump discontinuity
- different $f(x)$ values at single *x* value
- $\lim_{x\to n}f(x)\ne f(n)$

---
### infinite discontinuity
- vertical asymptote
- $\lim_{x\to n}f(x)=\pm\infty$

---
### open interval continuity
- function continuous for all *x* inner interval excluding endpoints
- $(a,b)$

---
### closed interval continuity
- function continuous for all *x* inner interval including one sided limit at endpoints
- $[a,b]$

---
### test continuity
- if f$(x)$ undefined then function discontinuous
- if one sided limits not equal then function discontinuous

---
### discontinuity removal
- find defined value by substituting undefined value into function and reconstructing domain interval of piecewise function

---
### infinite limit
- $f(x)$ behavior as *x* approaches value equal vertical asymptote

---
### negative infinite limit
- division with infinitely small negative number equal negative infinity
- $\lim_{x\to n^{-}}\frac{1}{x-n}=-\infty$

---
### positive infinite limit
- division with infinitely small positive number equal positive infinity
- $\lim_{x\to n^{+}}\frac{1}{x-n}=+\infty$

---
### vertical asymptote
- function approaches but never intersects vertical segment as *x* approaches value

---
### calculate vertical asymptote
- solve denominator

---
### horizontal asymptote
- function approaches and possibly intersects horizontal segment as *x* approaches infinity

---
### calculate horizontal asymptote
- numerator degree division with denominator degree

---
### limit at infinity
- $f(x)$ behavior as *x* approaches $\pm\infty$

---
### calculate limit at infinity
- numerator degree division with denominator degree
- direct substitution of infinity into quotient

---
### equal degree quotient
- if equal degree between numerator and denominator then limit at infinity equal number

---
### numerator degree quotient
- if numerator degree greater than denominator degree then limit at infinity equal $\pm\infty$

---
### denominator degree quotient
- if denominator degree greater than numerator degree then limit at infinity equal zero

---
### radical limit at infinity
- perfect root conversion absolute value
- calculate limit at infinity
- if even exponent then negative factor equal positive product
- if odd exponent then negative factor equal negative product

---
### trigonometric limit at infinity
- trigonometric functions range between ±1
- formulate inequality
- direct substitution of infinity into quotient
- if inequality not equal then limit does not exist

---
### intermediate value theorem
- if function continuous over closed interval then function encompasses every value between endpoints

---
### intermediate value formula
$$
\begin{lgathered}
\exists x\in[a,b]\to f(a)\le f(x)\le f(b)\\
\forall x\in[a,b]\lim_{x\to n}f(x)=f(n)
\end{lgathered}
$$

---
### delta
- difference between domain

---
### epsilon
- difference between range

---
epsilon delta limit formula
$$\forall(\epsilon>0)\exists(\delta>0)(0<|x-n|<\delta\to|f(x)-L|<\epsilon)$$

---
### indeterminate
- null guarantee of limit existence

---
### indeterminate formula
$$
\begin{lgathered}
\frac{0}{0}\\
\frac{\infty}{\infty}
\end{lgathered}
$$

---
### unknown indeterminate formula
$$
\begin{lgathered}
\infty-\infty\\
0\times\infty\\
1^{\infty}\\
\infty^{0}\\
0^{0}
\end{lgathered}
$$

---
### known indeterminate formula
$$
\begin{lgathered}
-\infty-\infty=-\infty\\
\infty+\infty=\infty\\
0^{-}\infty=\infty\\
\frac{1}{0}=\infty\\
0^{\infty}=0
\end{lgathered}
$$

---
### l'hopital rule
- behavior of function ratio near indeterminate approximates behavior of its derivative ratio

---
### l'hopital formula
$$
\begin{lgathered}
\lim_{x\to n}\frac{f(x)}{g(x)}=\lim_{x\to n}\frac{f'(x)}{g'(x)}
\end{lgathered}
$$

---
### calculate l'hopital rule
- apply l'hopital rule if and only if limit equal indeterminate formula
- differentiate numerator function
- differentiate denominator function
- do not apply the quotient rule of differentiation
- compute limit of derivative ratio
- repeat until determinate

---
### fit l'hopital rule
$$
\begin{lgathered}
f(x)g(x)\to\frac{f(x)}{\frac{1}{g(x)}}\\
y=f(x)^{g(x)}\to\ln(y)=g(x)\ln[f(x)]\\
\frac{1}{f(x)}\pm\frac{1}{g(x)}\to\frac{f(x)\pm g(x)}{f(x)g(x)}
\end{lgathered}
$$

---
