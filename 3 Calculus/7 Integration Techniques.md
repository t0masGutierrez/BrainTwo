### integration by parts
- antiderivatives involving products of functions

---
### integration by parts formula
$$
\begin{aligned}
\int u ( x ) d v = u v - \int v ( x ) d u \\
d v = v ' ( x ) d x \\
d u = u ' ( x ) d x
\end{aligned}
$$

---
### calculate integration by parts
- choose *u* such that derivative equal simpler function
- choose *dv* such that integral fit integral rule
- find *du* by differentiating *u* 
- find *v* by integrating *dv* 

---
### integration by parts strategy
- choose *u* in terms of LIATE
- logarithm, inverse trigonometric, algebraic, trigonometric, exponential
![[3 Calculus/Images/integration by parts strategy.png]]

---
### integration by parts strategy formula
$$
\begin{aligned}
\int x ^ { n } e ^ { x } d x , \  \int x ^ { n } \sin ( x ) d x , \  \int x ^ { n } \cos ( x ) d x \
\begin{cases}
u = x ^ { n } \\
d v = e ^ { x } d x , \  \sin ( x ) d x , \  \cos ( x ) d x
\end{cases} \\
\int x ^ { n } \ln ( x ) d x , \  \int x ^ { n } \arcsin ( x ) d x , \  \int x ^ { n } \arccos ( x ) d x \
\begin{cases}
u = \ln ( x ) , \  \arcsin ( x ) , \  \arccos ( x ) \\
d v = x ^ { n } d x
\end{cases} \\
\int e ^ { x } \sin ( x ) d x , \  \int e ^ { x } \cos ( x ) d x \
\begin{cases}
u = \sin ( x ) , \  \cos ( x ) \\
d v = e ^ { x } d x
\end{cases}
\end{aligned}
$$

---
### tabular integration
- repeat integration by parts
![[3 Calculus/Images/tabular integration.png|300]]

---
### calculate tabular integration
- if $n \ge 2$ then tabular integration
- alternate sign
- differentiate *u* 
- integrate *dv* 
- repeat until derivative of *u* equal 0

---
### trigonometric integral
- antiderivatives involving powers of trigonometric functions

---
### trigonometric integral formula
$$
\begin{aligned}
\int \sin ^ { m } ( x ) \cos ^ { n } ( x ) d x \\
\int \sec ^ { m } ( x ) \tan ^ { n } ( x ) d x
\end{aligned}
$$

---
### trigonometric integral sine cosine formula
$$
\begin{aligned}
\int \textcolor{yellow} { \sin ^ { 2 k + 1 } ( x ) } \cos ^ { n } ( x ) d x = \int \textcolor{yellow} { ( \sin ^ { 2 } x ) ^ { k } } \cos ^ { n } ( x ) \textcolor{cyan} { \sin ( x ) d x } = \int \textcolor{yellow} { ( 1 - \cos ^ { 2 } x ) ^ { k } } \cos ^ { n } ( x ) \textcolor{cyan} { \sin ( x ) d x } \\
\int \sin ^ { m } ( x ) \textcolor{yellow} { \cos ^ { 2 k + 1 } ( x ) } d x = \int \sin ^ { m } ( x ) \textcolor{yellow} { ( \cos ^ { 2 } x ) ^ { k } } \textcolor{cyan} { \cos ( x ) d x } = \int \sin ^ { m } ( x ) \textcolor{yellow} { ( 1 - \sin ^ { 2 } x ) ^ { k } } \textcolor{cyan} { \cos ( x ) d x } \\
\int \sin ^ { 2 k } ( x ) \cos ^ { 2 k } ( x ) d x = \int ( \frac { 1 - \cos 2 x } { 2 } ) ^ { k } ( \frac { 1 + \cos 2 x } { 2 } ) ^ { k } d x
\end{aligned}
$$

---
### trigonometric integral secant tangent formula
$$
\begin{aligned}
\int \textcolor{yellow} { \sec ^ { 2 k } ( x ) } \tan ^ { n } ( x ) d x = \int \textcolor{yellow} { ( \sec ^ { 2 } x ) ^ { k - 1 } } \tan ^ { n } ( x ) \textcolor{cyan} { \sec ^ { 2 } ( x ) d x } = \int \textcolor{yellow} { ( 1 + \tan ^ { 2 } x ) ^ { k - 1 } } \tan ^ { n } ( x ) \textcolor{cyan} { \sec ^ { 2 } ( x ) d x } \\
\small { \int \sec ^ { m } ( x ) \textcolor{yellow} { \tan ^ { 2 k + 1 } ( x ) } d x = \int \sec ^ { m - 1 } ( x ) \textcolor{yellow} { ( \tan ^ { 2 } x ) ^ { k } } \textcolor{cyan} { \sec ( x ) \tan ( x ) d x } = \int \sec ^ { m } ( x ) \textcolor{yellow} { ( \sec ^ { 2 } x - 1 ) ^ { k } } \textcolor{cyan} { \sec ( x ) \tan ( x ) d x } } \\
\int \tan ^ { n } ( x ) = \int \textcolor{yellow} { ( \tan ^ { 2 } x ) } \tan ^ { n - 2 } ( x ) d x = \int \textcolor{yellow} { ( \sec ^ { 2 } x - 1 ) } \tan ^ { n - 2 } ( x ) d x \\
\int \sec ^ { m } ( x ) d x = \int u ( x ) d v = u v - \int v ( x ) d u \\
\end{aligned}
$$

---
### calculate trigonometric integral
- choose *du* 
- find *u* by integrating *du* 
- simplify integrand

---
### trigonometric substitution
- antiderivatives involving radical functions
![[3 Calculus/Images/trigonometric substitution.png]]

---
### trigonometric substitution formula
$$
\begin{aligned}
\sqrt { a ^ { 2 } - u ^ { 2 } } = a \cos ( \theta )
\begin{cases}
u = a \sin ( \theta ) \\
d u = a \cos ( \theta ) d \theta
\end{cases} \\
\sqrt { a ^ { 2 } + u ^ { 2 } } = a \sec ( \theta )
\begin{cases}
u = a \tan ( \theta ) \\
d u = a \sec ^ { 2 } ( \theta ) d \theta \\
\end{cases} \\
\sqrt { u ^ { 2 } - a ^ { 2 } } = a \tan ( \theta )
\begin{cases}
u = a \sec ( \theta ) \\
d u = a \sec ( \theta ) \tan ( \theta ) d \theta \\
\end{cases}
\end{aligned}
$$

---
### calculate trigonometric substitution
- identify trigonometric substitution formula
- isolate *x* 
- differentiate *x* 
- substitute trigonometric formula into integral

---
### partial fraction decomposition
- decompose big rational function into small rational function(s)

---
### partial fraction decomposition formula
$$
\begin{aligned}
\frac { N ( x ) } { ( p x + q ) ^ { m } } = \frac { A _ { 1 } } { ( p x + 1 ) ^ { 1 } } + \frac { A _ { 2 } } { ( p x + 1 ) ^ { 2 } } + . . . + \frac { A _ { m } } { ( p x + 1 ) ^ { m } } \\
\frac { N ( x ) } { ( a x ^ { 2 } + b x + c ) ^ { n } } = \frac { B _ { 1 } x + C _ { 1 } } { ( a x ^ { 2 } + b x + c ) ^ { 1 } } + \frac { B _ { 2 } x + C _ { 2 } } { ( a x ^ { 2 } + b x + c ) ^ { 2 } } + . . . + \frac { B _ { n } x + C _ { n } } { ( a x ^ { 2 } + b x + c ) ^ { n } } \\
\end{aligned}
$$

---
### calculate partial fraction decomposition
- perform long division before integrating improper fraction
- factor denominator into $( p x + q ) ^ { m }$ and $( a x ^ { 2 } + b x + c ) ^ { n }$ 
- for every $( p x + q ) ^ { m }$ the partial fraction decomposition must include the sum of the following *m* fractions $\frac { A _ { m } } { ( p x + q ) ^ { m } }$ 
- for every $( a x ^ { 2 } + b x + c ) ^ { n }$ the partial fraction decomposition must include the sum of the following *n* fractions $\frac { B _ { n } x + C _ { n } } { ( a x ^ { 2 } + b x + c ) ^ { n } }$ 
- eliminate left denominator by multiplying partial fractions with left denominator
- sum of partial fractions equal $N ( x )$ 
- solve distinct linear factors by substituting roots
- solve repeat linear factors or quadratic factors by equating coefficients

---
### methods of integration
- analytical
- symbolical
- numerical
![[3 Calculus/Images/methods of integration.png]]

---
### numerical integration
- approximate area under curve

---
### calculate numerical integration
- first term equal lower limit of integration
- last term equal upper limit of integration
- alternate coefficient of function
- increment argument of function by ∆x

---
### trapezoidal rule
- height as function of trapezoid equal approximate area under curve
![[3 Calculus/Images/trapezoidal rule.png]]

---
### trapezoidal formula
$$
\begin{aligned}
\int _ { a } ^ { b } f ( x ) d x = \frac { \Delta x } { 2 } [ f ( x _ { 0 } ) + 2 f ( x _ { 1 } ) + 2 f ( x _ { 2 } ) + 2 f ( x _ { 3 } ) + . . . + 2 f ( x _ { n - 1 } ) + f ( x _ { n } ) ] \\
k = 1 , 2 , 2 , 2 , . . . 2 , 1 \\
\Delta x = \frac { b - a } { n }
\end{aligned}
$$

---
### simpsons rule
- height as function of parabola equal approximate area under curve
![[3 Calculus/Images/simpsons rule.png]]

---
### simpsons formula
$$
\begin{aligned}
\int _ { a } ^ { b } f ( x ) d x = \frac { \Delta x } { 3 } [ f ( x _ { 0 } ) + 4 f ( x _ { 1 } ) + 2 f ( x _ { 2 } ) + 4 f ( x _ { 3 } ) + . . . + 4 f ( x _ { n - 1 } ) + f ( x _ { n } ) ] \\
k = 1 , 4 , 2 , 4 , . . . 4 , 1 \\
\Delta x = \frac { b - a } { n }
\end{aligned}
$$

---
### improper integral
- discontinuous integrand
- infinite limit of integration

---
### discontinuous integrand
- infinite discontinuity at or between limits of integration

---
### discontinuous integrand formula
$$
\begin{aligned}
( a , b ] \implies \int _ { a } ^ { b } f ( x ) d x = \lim _ { c \rightarrow b ^ { - } } \int _ { a } ^ { c } f ( x ) d x \\
{}[ a , b ) \implies \int _ { a } ^ { b } f ( x ) d x = \lim _ { c \rightarrow a ^ { + } } \int _ { c } ^ { b } f ( x ) d x \\
\exists c [ a , b ] \implies \int _ { a } ^ { b } f ( x ) d x = \lim _ { c \rightarrow b ^ { - } } \int _ { a } ^ { c } f ( x ) d x + \lim _ { c \rightarrow a ^ { + } } \int _ { c } ^ { b } f ( x ) d x
\end{aligned}
$$

---
### infinite lower limit of integration
- if limit does exist then improper integral converges
![[3 Calculus/Images/infinite lower limit of integration.png]]

---
### infinite lower limit of integration formula
$$
\begin{aligned}
\int _ { - \infty } ^ { b } f ( x ) d x = \lim _ { a \rightarrow - \infty } \int _ { a } ^ { b } f ( x ) d x
\end{aligned}
$$

---
### infinite upper limit of integration
- if limit does not exist then improper integral diverges
![[3 Calculus/Images/infinite upper limit of integration.png]]

---
### infinite lower limit of integration formula
$$
\begin{aligned}
\int _ { a } ^ { \infty } f ( x ) d x = \lim _ { b \rightarrow \infty } \int _ { a } ^ { b } f ( x ) d x
\end{aligned}
$$

---
### infinite limit of integration
- if either limits do not exist then improper integral diverges
![[3 Calculus/Images/infinite limit of integration.png]]

---
### infinite limit of integration formula
$$
\begin{aligned}
\int _ { - \infty } ^ { \infty } f ( x ) d x = \int _ { - \infty } ^ { c } f ( x ) d x + \int _ { c } ^ { \infty } f ( x ) d x
\end{aligned}
$$

---
