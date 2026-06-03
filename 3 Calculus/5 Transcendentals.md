### logarithm function
- exponent as function of product
![[3 Calculus/Images/logarithm function.png]]

---
### logarithm property
$$
\begin{aligned}
\log ( 1 ) = 0 \\
\log ( 10 ) = 1 \\
\log ( a ^ { n } ) = n \times \log ( a ) \\
\log ( a b ) = \log ( a ) + \log ( b ) \\
\log ( \frac { a } { b } ) = \log ( a ) - \log ( b ) \\
\end{aligned}
$$

---
### natural logarithm property
$$
\begin{aligned}
\ln ( e ^ { x } ) = x \\
y = \ln ( x ) \to x = e ^ { y } \\
e ^ { \ln ( x ) } = x
\end{aligned}
$$

---
### natural logarithm derivative
$$
\begin{aligned}
\frac { d } { d x } \ln ( u ) = \frac { d u } { u } \\
u = g ( x ) \\
d u = g ' ( x ) d x
\end{aligned}
$$

---
### natural logarithm integral
$$
\begin{aligned}
\int \frac { d u } { u } = \ln ( u ) + c \\
u = g ( x ) \\
d u = g ' ( x ) d x
\end{aligned}
$$

---
### exponential function
- product as function of exponent
![[3 Calculus/Images/exponential function.png]]

---
### exponential property
$$
\begin{aligned}
n ^ { 0 } = 1 \\
n ^ { 1 } = n \\
n ^ { - 1 } = \frac { 1 } { n } \\
\sqrt [ b ] { x ^ { a } } = n ^ { \frac { a } { b } } \\
\frac { n ^ { a } } { n ^ { b } } = n ^ { a - b } \\
( n ^ { a } ) ^ { b } = n ^ { a b } \\
n ^ { a } \times n ^ { b } = n ^ { a + b } \\
\end{aligned}
$$

---
### natural exponential property
$$
\begin{aligned}
e ^ { \ln ( x ) } = x \\
y = e ^ { x } \to x = \ln ( y ) \\
\ln ( e ^ { x } ) = x
\end{aligned}
$$

---
### natural exponential derivative
$$
\begin{aligned}
\frac { d } { d x } e ^ { u } = e ^ { u } d u \\
u = g ( x ) \\
d u = g ' ( x ) d x
\end{aligned}
$$

---
### natural exponential integral
$$
\begin{aligned}
\int e ^ { u } d u = e ^ { u } + c \\
u = g ( x ) \\
d u = g ' ( x ) d x
\end{aligned}
$$

---
### logarithm equation
- rewrite expression in terms of exponential argument by performing inverse operation of logarithm function

---
### exponential equation
- rewrite expression in terms of logarithm argument by performing inverse operation of exponential function

---
### inverse property
$$
\begin{aligned}
a ^ { \log _ { x } ( x ) } = x \\
x = \log _ { a } ( y ) \to y = a ^ { x } \\
\log _ { a } ( a ^ { x } ) = x
\end{aligned}
$$

---
### function of different base
- if function of different base then solve equation by performing inverse operation of function

---
### base exponential formula
$$
\begin{aligned}
a ^ { x } = e ^ { x \ln ( a ) }
\end{aligned}
$$

---
### base logarithm formula
$$
\begin{aligned}
\log _ { a } ( x ) = \frac { \ln ( x ) } { \ln ( a ) }
\end{aligned}
$$

---
### different base derivative rules
$$
\begin{aligned}
\frac { d } { d x } a ^ { u } = \ln ( a ) a ^ { u } \frac { d u } { d x } \\
\frac { d } { d x } \log _ { a } ( u ) = \frac { 1 } { \ln ( a ) u } \frac { d u } { d x }
\end{aligned}
$$

---
### different base integral rules
$$
\begin{aligned}
\int a ^ { u } d u = \frac { a ^ { u } } { \ln ( a ) } + c \\
\int \log _ { a } ( u ) d u = \frac { \ln ( u ) } { \ln ( a ) } + c
\end{aligned}
$$

---
### logarithm differentiation
- natural logarithm both sides of equation
- differentiate both sides of equation
- isolate $f ' ( x )$ by multiplying derivative with $f ( x )$

---
### logarithm differentiation formula
$$
\begin{aligned}
y = u ^ { g ( x ) } \to \ln ( y ) = g ( x ) \ln ( u )
\end{aligned}
$$

---
### inverse trigonometric function
- input trigonometric ratio
- output angle
![[3 Calculus/Images/inverse trigonometric function.png]]

---
### inverse trigonometric formula
$$
\begin{aligned}
y = \arcsin ( x ) \\
\sin ( y ) = x
\end{aligned}
$$

---
### inverse trigonometric derivative rules
$$
\begin{aligned}
\frac { d } { d x } \arcsin ( u ) = \frac { u ' } { \sqrt { 1 - u ^ { 2 } } } \\
\frac { d } { d x } \arccos ( u ) = \frac { - u ' } { \sqrt { 1 - u ^ { 2 } } } \\
\frac { d } { d x } \arctan ( u ) = \frac { u ' } { 1 + u ^ { 2 } } \\
\frac { d } { d x } \text { arccot } ( u ) = \frac { - u ' } { 1 + u ^ { 2 } } \\
\frac { d } { d x } \text { arcsec } ( u ) = \frac { u ' } { | u | \sqrt { u ^ { 2 } - 1 } } \\
\frac { d } { d x } \text { arccsc } ( u ) = \frac { - u ' } { | u | \sqrt { u ^ { 2 } - 1 } }
\end{aligned}
$$

---
### inverse trigonometric integral rules
$$
\begin{aligned}
\int \frac { d u } { \sqrt { a ^ { 2 } - u ^ { 2 } } } = \arcsin ( \frac { u } { a } ) + c \\
\int \frac { d u } { a ^ { 2 } + u ^ { 2 } } = \frac { 1 } { a } \arctan ( \frac { u } { a } ) + c \\
\int \frac { d u } { u \sqrt { u ^ { 2 } - a ^ { 2 } } } = \frac { 1 } { a } \text { arcsec } ( \frac { | u | } { a } ) + c
\end{aligned}
$$

---
### hyperbolic function
- trigonometric functions except unit hyperbola instead of unit circle
![[3 Calculus/Images/hyperbolic function.png]]

---
### hyperbolic formula
$$
\begin{aligned}
\sinh ( u ) = \frac { e ^ { u } - e ^ { - u } } { 2 } \\
\cosh ( u ) = \frac { e ^ { u } + e ^ { - u } } { 2 } \\
\tanh ( u ) = \frac { \sinh ( u ) } { \cosh ( u ) } \\
\text { csch } ( u ) = \frac { 1 } { \sinh ( u ) } \\
\text { sech } ( u ) = \frac { 1 } { \cosh ( u ) } \\
\text { coth } ( u ) = \frac { 1 } { \tanh ( u ) } \\
\end{aligned}
$$

---
### hyperbolic graph
- sinh
- cosh
- tanh
- csch
- sech
- coth
![[3 Calculus/Images/hyperbolic graph.png]]

---
### hyperbolic derivative rules
$$
\begin{aligned}
\frac { d } { d x } \sinh ( u ) = \cosh ( u ) u ' \\
\frac { d } { d x } \cosh ( u ) = \sinh ( u ) u ' \\
\frac { d } { d x } \tanh ( u ) = \text { sech } ^ { 2 } ( u ) u ' \\
\frac { d } { d x } \coth ( u ) = - \text { csch } ^ { 2 } ( u ) u ' \\
\frac { d } { d x } \text { sech } ( u ) = - \text { sech } ( u ) \tanh ( u ) u ' \\
\frac { d } { d x } \text { csch } ( u ) = - \text { csch } ( u ) \coth ( u ) u '
\end{aligned}
$$

---
### hyperbolic integral rules
$$
\begin{aligned}
\int \cosh ( u ) d u = \sinh ( u ) + c \\
\int \sinh ( u ) d u = \cosh ( u ) + c \\
\int \text { sech } ^ { 2 } ( u ) d u = \tanh ( u ) + c \\
\int \text { csch } ^ { 2 } ( u ) d u = - \text { coth } ( u ) + c \\
\int \text { sech } ( u ) \tanh ( u ) d u = - \text { sech } ( u ) + c \\
\int \text { csch } ( u ) \text { coth } ( u ) d u = - \text { csch } ( u ) + c \\
\end{aligned}
$$

---
### hyperbolic identity
- pythagorean
- sum difference
- 2nd power
- double angle
![[3 Calculus/Images/hyperbolic identity.png]]

---
### inverse hyperbolic function
- inverse trigonometric functions except unit hyperbola instead of unit circle

---
### inverse hyperbolic formula
$$
\begin{aligned}
\text { arcsinh } ( u ) = \ln ( u + \sqrt { u ^ { 2 } + 1 } ) \\
\text { arccosh } ( u ) = \ln ( u + \sqrt { u ^ { 2 } - 1 } ) \\
\text { arctanh } ( u ) = \frac { 1 } { 2 } \ln ( \frac { 1 + u } { 1 - u } ) \\
\text { arccoth } ( u ) = \frac { 1 } { 2 } \ln ( \frac { u + 1 } { u - 1 } ) \\
\text { arccsch } ( u ) = \ln ( \frac { 1 } { u } + \frac { \sqrt { 1 + u ^ { 2 } } } { | u | } ) \\
\text { arcsech } ( u ) = \ln ( \frac { 1 + \sqrt { 1 - u ^ { 2 } } } { u } )
\end{aligned}
$$

---
### inverse hyperbolic graph
- inverse hyperbolic sine
- inverse hyperbolic cosine
- inverse hyperbolic tangent
- inverse hyperbolic cosecant
- inverse hyperbolic secant
- inverse hyperbolic cotangent
![[3 Calculus/Images/inverse hyperbolic graph.png]]

---
### inverse hyperbolic derivative rules
$$
\begin{aligned}
\frac { d } { d x } \text { arcsinh } ( u ) = \frac { u ' } { \sqrt { u ^ { 2 } + 1 } } \\
\frac { d } { d x } \text { arccosh } ( u ) = \frac { u ' } { \sqrt { u ^ { 2 } - 1 } } \\
\frac { d } { d x } \text { arctanh } ( u ) = \frac { u ' } { 1 - u ^ { 2 } } \\
\frac { d } { d x } \text { arccoth } ( u ) = \frac { u ' } { 1 - u ^ { 2 } } \\
\frac { d } { d x } \text { arcsech } ( u ) = \frac { - u ' } { u \sqrt { 1 - u ^ { 2 } } } \\
\frac { d } { d x } \text { arccsch } ( u ) = \frac { - u ' } { | u | \sqrt { 1 + u ^ { 2 } } }
\end{aligned}
$$

---
### inverse hyperbolic integral rules
$$
\begin{aligned}
\int \frac { d u } { \sqrt { a ^ { 2 } \pm u ^ { 2 } } } = \ln ( u + \sqrt { a ^ { 2 } \pm u ^ { 2 } } ) + c \\
\int \frac { d u } { a ^ { 2 } - u ^ { 2 } } = \frac { 1 } { 2 a } \ln | \frac { a + u } { a - u } | + c \\
\int \frac { d u } { u \sqrt { a ^ { 2 } \pm u ^ { 2 } } } = \frac { 1 } { a } \ln ( \frac { a + \sqrt { a ^ { 2 } \pm u ^ { 2 } } } { | u | } ) + c
\end{aligned}
$$

---
