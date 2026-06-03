### derivative rules
$$
\begin{aligned}
\frac { d } { d x } c = 0 \\
\frac { d } { d x } u = 1 \\
\frac { d } { d x } c u = c u ' \\
\frac { d } { d x } u \pm v = u ' \pm v ' \\
\frac { d } { d x } u v = u ' v + u v ' \\
\frac { d } { d x } \frac { u } { v } = \frac { u ' v - u v ' } { v ^ 2 } \\
\frac { d } { d x } u ^ n = n u ^ { n - 1 } u ' \\
\frac { d } { d x } | u | = \frac { u } { | u | } u ' \\
\frac { d } { d x } \ln ( u ) = \frac { u ' } { u } \\
\frac { d } { d x } e ^ u = e ^ u u ' \\
\frac { d } { d x } \log _ { a } ( u ) = \frac { u ' } { \ln ( a ) u } \\
\frac { d } { d x } a ^ u = \ln ( a ) a ^ u u ' \\
\frac { d } { d x } \sin ( u ) = \cos ( u ) u ' \\
\frac { d } { d x } \cos ( u ) = - \sin ( u ) u ' \\
\frac { d } { d x } \tan ( u ) = \sec ^ 2 ( u ) u ' \\
\frac { d } { d x } \cot ( u ) = - \csc ^ 2 ( u ) u ' \\
\frac { d } { d x } \sec ( u ) = \sec ( u ) \tan ( u ) u ' \\
\frac { d } { d x } \csc ( u ) = - \csc ( u ) \cot ( u ) u ' \\
\frac { d } { d x } \arcsin ( u ) = \frac { u ' } { \sqrt { 1 - u ^ 2 } } \\
\frac { d } { d x } \arccos ( u ) = \frac { - u ' } { \sqrt { 1 - u ^ 2 } } \\
\frac { d } { d x } \arctan ( u ) = \frac { u ' } { 1 + u ^ 2 } \\
\frac { d } { d x } \text { arccot } ( u ) = \frac { - u ' } { 1 + u ^ 2 } \\
\frac { d } { d x } \text { arcsec } ( u ) = \frac { u ' } { | u | \sqrt { u ^ 2 - 1 } } \\
\frac { d } { d x } \text { arccsc } ( u ) = \frac { - u ' } { | u | \sqrt { u ^ 2 - 1 } }
\end{aligned}
$$

---
### related rate
- treat variables as composite functions with respect to time

---
### related rate formula
$$
\begin{aligned}
\frac { d y } { d t } = \frac { d y } { d u } \times \frac { d u } { d t }
\end{aligned}
$$

---
### calculate related rate
- identify rate
- identify variables and constants
- relate quantitys with equation
- implicitly differentiate both sides of equation with respect to time
- solve unknown quantitys with equation
- substitute known quantitys into derivative
- isolate rate

---
### inverse sine range
$$
\begin{aligned}
{}[ \frac { - \pi } { 2 } , \frac { \pi } { 2 } ]
\end{aligned}
$$

---
### inverse cosine range
$$
\begin{aligned}
{}[ 0 , \pi ]
\end{aligned}
$$

---
### inverse tangent range
$$
\begin{aligned}
{}[ \frac { - \pi } { 2 } , \frac { \pi } { 2 } ]
\end{aligned}
$$

---
### formulate right triangle
- substitute trigonometric ratio from inverse trigonometric argument into right triangle
- pythagorean theorem equal third segment
![[3 Calculus/Images/formulate right triangle.png]]

---
### inverse trigonometric function
- input trigonometric ratio
- output angle

---
### inverse trigonometric formula
$$
\begin{aligned}
y = \sin ^ { - 1 } ( x ) \\
\sin ( y ) = x
\end{aligned}
$$

---
### inverse trigonometric derivative rules
$$
\begin{aligned}
\frac { d } { d x } \arcsin ( u ) = \frac { u ' } { \sqrt { 1 - u ^ 2 } } \\
\frac { d } { d x } \arccos ( u ) = \frac { - u ' } { \sqrt { 1 - u ^ 2 } } \\
\frac { d } { d x } \arctan ( u ) = \frac { u ' } { 1 + u ^ 2 } \\
\frac { d } { d x } \text { arccot } ( u ) = \frac { - u ' } { 1 + u ^ 2 } \\
\frac { d } { d x } \text { arcsec } ( u ) = \frac { u ' } { | u | \sqrt { u ^ 2 - 1 } } \\
\frac { d } { d x } \text { arccsc } ( u ) = \frac { - u ' } { | u | \sqrt { u ^ 2 - 1 } }
\end{aligned}
$$

---
### extrema
- maxima or minima

---
### maxima formula
- $f ( n ) ≥ f ( x )$
![[3 Calculus/Images/maxima formula.png]]

---
### minima formula
- $f ( n ) ≤ f ( x )$
![[3 Calculus/Images/minima formula.png]]

---
### local extrema
- horizontal tangent segment
- relative extrema

---
### global extrema
- largest function value
- absolute extrema

---
### critical number
- point where derivative equal zero
- point where derivative does not exist
![[3 Calculus/Images/critical number.png]]

---
### critical number property
- if local extrema of function then critical number
- critical number of function not always local extrema

---
### closed interval global extrema
- if closed interval then global extrema possibly exists at interval endpoints
![[3 Calculus/Images/closed interval global extrema.png|300]]

---
### open interval global extrema
- if open interval then global extrema impossibly exists at interval endpoints
![[3 Calculus/Images/open interval global extrema.png]]

---
### extreme value theorem
- if $f ( x )$ continuous on $[ a , b ]$ then $f ( x )$ contains both global minimum and global maximum on the interval

---
### calculate global extrema
- evaluate function at critical numbers within interval
- evaluate function at interval endpoints
- find the largest function value

---
### rolles theorem
- if $f ( x )$ continuous on $[ a , b ]$ and differentiable on $( a , b )$ and $f ( a )$ equal $f ( b )$ then there exists local extrema on $( a , b )$
![[3 Calculus/Images/rolles theorem.png]]

---
### calculate rolles theorem
- evaluate function at interval endpoints
- differentiate function
- find where $f ' ( x )$ equal zero within interval

---
### mean value theorem
- if $f ( x )$ continuous on $[ a , b ]$ and differentiable on $( a , b )$ then there exists tangent segment parallel secant segment
![[3 Calculus/Images/mean value theorem.png]]

---
### mean value formula
$$
\begin{aligned}
f ' ( x ) = \frac { f ( b ) - f ( a ) } { b - a }
\end{aligned}
$$

---
### calculate mean value theorem
- compute average rate of change over interval endpoints
- differentiate function
- find where $f ' ( x )$ equal average rate of change within interval

---
### increasing function
- $f ( x )$ increases as *x* increases

---
### decreasing function
- $f ( x )$ decreases as *x* increases

---
### constant function
- $f ( x )$ constant as *x* increases

---
### increasing decreasing test
- if $f ' ( x ) > 0$ where $a < x < b$ then function increasing
- if $f ' ( x ) < 0$ where $a < x < b$ then function decreasing
- if $f ' ( x ) = 0$ where $a < x < b$ then function constant
![[3 Calculus/Images/increasing decreasing test.png]]

---
### calculate increasing decreasing
- calculate critical numbers of $f ( x )$ on $( a , b )$
- evaluate first derivative between domain and critical numbers
- increasing decreasing test

---
### first derivative test
- if $f ' ( x )$ changes from negative to positive at *n* then $f ( n )$ local minima
- if $f ' ( x )$ changes from positive to negative at *n* then $f ( n )$ local maxima
- if $f ' ( x )$ remains equal at *n* then $f ( n )$ not extrema
![[3 Calculus/Images/first derivative test.png]]

---
### calculate local extrema
- calculate increasing decreasing
- first derivative test

---
### concavity
- curvature of graph
![[3 Calculus/Images/concavity.png]]

---
### upward concavity
- $f ' ( x )$ increases as *x* increases
- tangent segment below curve

---
### downward concavity
- $f ' ( x )$ decreases as *x* increases
- tangent segment above curve

---
### second derivative concavity test
- if $f ' ' ( x ) > 0$ then upward concavity
- if $f ' ' ( x ) < 0$ then downward concavity

---
### calculate concavity
- calculate critical numbers of $f ' ( x )$ on $( a , b )$
- evaluate second derivative between domain and critical numbers
- second derivative concavity test

---
### inflection point
- differentiable point on graph where concavity changes
![[3 Calculus/Images/inflection point.png]]

---
### calculate inflection point
- calculate concavity
- find where concavity changes

---
### second derivative extrema test
- if $f ' ' ( x ) > 0$ at *n* then $f ( n )$ local minima
- if $f ' ' ( x ) < 0$ at n then $f ( n )$ local maxima
- $f ' ( n )$ must equal 0
![[3 Calculus/Images/second derivative extrema test.png]]

---
### calculate local extrema
- calculate critical numbers of $f ( x )$ on $( a , b )$
- evaluate second derivative at critical numbers
- second derivative extrema test

---
### graphically analyze polarity
- if first derivative positive then function increasing else if first derivative negative then function decreasing
- if second derivative positive then function concave upward else if second derivative negative then function concave downward

---
### graphically analyze point
- if first derivative zero then local extrema
- if second derivative zero then inflection point

---
### sketch curve
- symmetry
- x intercepts and y intercepts
- vertical asymptotes
- horizontal asymptotes
- end behavior
- first derivative
- local extrema
- second derivative
- inflection points
- domain
- test intervals

---
### primary equation
- optimal quantity formula

---
### secondary equation
- relate independent variable formula

---
### calculate optimization
- formulate primary equation
- reduce primary equation to single independent variable with secondary equation
- determine feasible domain of primary equation
- calculate local extrema

---
### linear approximation
- approximate function value near point but approximation less accurate as *x* becomes further from point

---
### linear approximation formula
$$
\begin{aligned}
y = f ' ( n ) ( x - n ) + f ( n )
\end{aligned}
$$

---
### differential versus delta
- $d y$ approximates change
- $\Delta y$ exacts change

---
### differential formula
$$
\begin{aligned}
d y = f ' ( x ) d x
\end{aligned}
$$

---
### delta formula
$$
\begin{aligned}
\Delta y = f ( x + \Delta x ) - f ( x )
\end{aligned}
$$

---
### error
- difference between exact and approximate

---
### error formula
$$
\begin{aligned}
\Delta y = f ' ( x ) \Delta x \\
\Delta x = \text { error }
\end{aligned}
$$

---
### relative error
- ratio of approximate to exact

---
### relative error formula
$$
\begin{aligned}
\Delta y = \frac { d y } { y }
\end{aligned}
$$

---
