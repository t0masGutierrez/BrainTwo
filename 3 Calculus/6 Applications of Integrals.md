### integral rules
$$
\begin{aligned}
\int d u = u + c \\
\int c f ( u ) d u = c \int f ( u ) d u + c \\
\int [ f ( u ) \pm g ( u ) ] d u = \int f ( u ) d u \pm \int g ( u ) d u + c \\
\int u ^ { n } d u = \frac { u ^ { n + 1 } } { n + 1 } + c \\
\int \frac { d u } { u } = \ln | u | + c \\
\int e ^ { u } d u = e ^ { u } + c \\
\int a ^ { u } d u = \frac { a ^ { u } } { \ln ( a ) } + c \\
\int \log _ { a } ( u ) d u = \frac { u \ln ( u ) - u } { \ln ( a ) } + c \\
\int \sin ( u ) d u = - \cos ( u ) + c \\
\int \cos ( u ) d u = \sin ( u ) + c \\
\int \tan ( u ) d u = - \ln ( \cos u ) + c \\
\int \cot ( u ) d u = \ln ( \sin u ) + c \\
\int \sec ( u ) d u = \ln ( \sec u + \tan u ) + c \\
\int \csc ( u ) d u = \ln ( \csc u - \cot u ) + c \\
\int \sec ^ { 2 } ( u ) d u = \tan ( u ) + c \\
\int \csc ^ { 2 } ( u ) d u = - \cot ( u ) + c \\
\int \sec ( u ) \tan ( u ) d u = \sec ( u ) + c \\
\int \csc ( u ) \cot ( u ) d u = - \csc ( u ) + c \\
\int \frac { d u } { \sqrt { a ^ { 2 } - u ^ { 2 } } } = \arcsin ( \frac { u } { a } ) + c \\
\int \frac { d u } { a ^ { 2 } + u ^ { 2 } } = \frac { 1 } { a } \arctan ( \frac { u } { a } ) + c \\
\int \frac { d u } { u \sqrt { u ^ { 2 } - a ^ { 2 } } } = \frac { 1 } { a } \text { arcsec } ( \frac { u } { a } ) + c \\
\end{aligned}
$$

---
### fitting integral rules
- binomial expansion
- trigonometric identity
- pythagorean conjugate
- square completion
- long division

---
### binomial expansion
- $( a + b ) ^ { 0 } = 1$ 
- $( a + b ) ^ { 1 } = a + b$ 
- $( a + b ) ^ { 2 } = a ^ { 2 } + 2 a b + b ^ { 2 }$ 
- $( a + b ) ^ { 3 } = a ^ { 3 } + 3 a ^ { 2 } b + 3 a b ^ { 2 } + b ^ { 3 }$ 
- $( a + b ) ^ { 4 } = a ^ { 4 } + 4 a ^ { 3 } b + 6 a ^ { 2 } b ^ { 2 } + 4 a b ^ { 3 } + b ^ { 4 }$ 
- $( a + b ) ^ { 5 } = a ^ { 5 } + 5 a ^ { 4 } b + 10 a ^ { 3 } b ^ { 2 } + 10 a ^ { 2 } b ^ { 3 } + 5 a b ^ { 4 } + b ^ { 5 }$ 

---
### trigonometric identify
- $\sin ( a \pm b ) = \sin ( a ) \cos ( b ) \pm \cos ( a ) \sin ( b )$ 
- $\cos ( a \pm b ) = \cos ( a ) \cos ( b ) \mp \sin ( a ) \sin ( b )$ 
- $\tan ( a \pm b ) = \frac { \tan ( a ) \pm \tan ( b ) } { 1 \mp \tan ( a ) \tan ( b ) }$ 
- $\sin ( 2 a ) = 2 \sin ( a ) \cos ( a )$ 
- $\cos ( 2 a ) = 1 - 2 \sin ^ { 2 } ( a ) = 2 \cos ^ { 2 } ( a ) - 1 = \cos ^ { 2 } ( a ) - \sin ^ { 2 } ( a )$ 
- $\tan ( 2 a ) = \frac { 2 \tan ( a ) } { 1 - \tan ^ { 2 } ( a ) }$ 
- $\sin ( \frac { \theta } { 2 } ) = \pm \sqrt { \frac { 1 - \cos ( \theta ) } { 2 } }$ 
- $\cos ( \frac { \theta } { 2 } ) = \pm \sqrt { \frac { 1 + \cos ( \theta ) } { 2 } }$ 
- $\tan ( \frac { \theta } { 2 } ) = \pm \sqrt { \frac { 1 - \cos ( \theta ) } { 1 + \cos ( \theta ) } } = \frac { 1 - \cos ( \theta ) } { \sin ( \theta ) } = \frac { \sin ( \theta ) } { 1 + \cos ( \theta ) }$ 
- $\sin ( a ) \pm \sin ( b ) = 2 \sin ( \frac { a \pm b } { 2 } ) \cos ( \frac { a \mp b } { 2 } )$ 
- $\cos ( a ) + \cos ( b ) = 2 \cos ( \frac { a + b } { 2 } ) \cos ( \frac { a - b } { 2 } )$ 
- $\cos ( a ) - \cos ( b ) = - 2 \sin ( \frac { a + b } { 2 } ) \sin ( \frac { a - b } { 2 } )$ 
- $\sin ( a ) \cos ( b ) = \frac { 1 } { 2 } \sin ( a - b ) \pm \frac { 1 } { 2 } \sin ( a + b )$ 
- $\cos ( a ) \cos ( b ) = \frac { 1 } { 2 } \cos ( a - b ) + \frac { 1 } { 2 } \cos ( a + b )$ 
- $\sin ( a ) \sin ( b ) = \frac { 1 } { 2 } \cos ( a - b ) - \frac { 1 } { 2 } \cos ( a + b )$ 
- $\sin ^ { 2 } ( a ) = \frac { 1 - \cos ( 2 x ) } { 2 }$ 
- $\cos ^ { 2 } ( a ) = \frac { 1 + \cos ( 2 x ) } { 2 }$ 
- $\tan ^ { 2 } ( a ) = \frac { 1 - \cos ( 2 x ) } { 1 + \cos ( 2 x ) }$ 

---
### pythagorean conjugate
- addition or subtraction with trigonometric function
- $\cos ^ { 2 } ( \theta ) + \sin ^ { 2 } ( \theta ) = 1$ 

---
### square completion
- incomplete quadratic function
- $x ^ { 2 } + b x + ( \frac { b } { 2 } ) ^ { 2 } - ( \frac { b } { 2 } ) ^ { 2 } + c$ 

---
### long division
- numerator degree $\ge$ denominator degree
- $n ^ { t h }$ dividend division with $n ^ { t h }$ divisor term equal $n ^ { t h }$ quotient term
- $n ^ { t h }$ quotient term multiplication with divisor
- dividend subtraction with divisor

---
### area of region between two curves
- if $f ( x )$ and $g ( x )$ continuous on $[ a , b ]$ and $g ( x ) ≤ f ( x )$ then area of region between two curves equal difference of area between $f ( x )$ and $g ( x )$
![[3 Calculus/Images/area of region between two curves.png]]

---
### area of region between two curves formula
$$
\begin{aligned}
A = \int _ { a } ^ { b } [ f ( x ) - g ( x ) ] d x \\
\end{aligned}
$$

---
### calculate area of region between two curves
- find points of intersection by equating both functions and factoring
- if >2 points of intersection then sum multiple integrals
- identify order of subtrahends by graphing both functions
- top right function subtraction with bottom left function
- simplify difference before integration
![[3 Calculus/Images/calculate area of region between two curves.png]]

---
### solid of revolution
- three dimensional solid from the rotation of function about axis of revolution

---
### disk volume
- perpendicular rectangle revolve about axis of revolution
![[3 Calculus/Images/disk volume.png]]

---
### disk method
- approximate solid of revolution as infinite disks
![[3 Calculus/Images/disk method.png]]

---
### disk method formula
$$
\begin{aligned}
V = \pi \int _ { a } ^ { b } R ( x ) ^ { 2 } d x \\
R ( x ) = \text { distance from axis of revolution }
\end{aligned}
$$

---
### disk method axis of revolution
- if horizontal axis of revolution then $d x$ equal variable of integration
- if vertical axis of revolution then $d y$ equal variable of integration
- if non coordinate axis of revolution then area of region between two curves  
![[3 Calculus/Images/disk method formula.png]]

---
### washer volume
- perpendicular rectangle revolve about hollow axis of revolution
![[3 Calculus/Images/washer volume.png]]

---
### washer method
- approximate solid of revolution as infinite washers
![[3 Calculus/Images/washer method.png]]

---
### washer method formula
$$
\begin{aligned}
V = \pi \int _ { a } ^ { b } [ R ( x ) ^ { 2 } - r ( x ) ^ { 2 } ] d x \\
R ( x ) = \text { big radius } \\
r ( x ) = \text { small radius } \\
\end{aligned}
$$

---
### shell volume
- parallel rectangle revolve about hollow axis of revolution
![[3 Calculus/Images/shell volume.png]]

---
### shell method
- approximate solid of revolution as infinite cylindrical shells
![[3 Calculus/Images/shell method.png]]

---
### shell formula
$$
\begin{aligned}
V = 2 \pi \int _ { a } ^ { b } R ( x ) f ( x ) d x \\
R ( x ) = \text { distance from the axis of revolution } \\
\end{aligned}
$$

---
### shell method axis of revolution
- if horizontal axis of revolution then $d y$ equal variable of integration
- if vertical axis of revolution then $d x$ equal variable of integration
- if non coordinate axis of revolution then area of region between two curves but right top function subtraction with left bottom function
![[3 Calculus/Images/shell formula.png]]

---
### disk method versus shell method
- if horizontal axis of revolution then disk method
- if vertical axis of revolution then shell method
![[3 Calculus/Images/disk method versus shell method.png]]

---
### arc length
- distance between two points along arc
![[3 Calculus/Images/arc length.png]]

---
### arc length formula
$$
\begin{aligned}
s = \int _ { a } ^ { b } \sqrt { 1 + ( \frac { d y } { d x } ) ^ { 2 } } d x
\end{aligned}
$$

---
### calculate arc length
- differentiate function
- square derivative
- simplify radicand

---
### surface of revolution
- two dimensional surface from the rotation of function about axis of revolution
![[3 Calculus/Images/frustum area.png]]

---
### surface area formula
$$
\begin{aligned}
S ( x ) = 2 \pi \int _ { a } ^ { b } R ( x ) \sqrt { 1 + ( \frac { d y } { d x } ) ^ { 2 } } d x \\
S ( y ) = 2 \pi \int _ { a } ^ { b } R ( y ) \sqrt { 1 + ( \frac { d x } { d y } ) ^ { 2 } } d y
\end{aligned}
$$

---
### calculate surface area
- if horizontal axis of revolution then $y = R ( x )$ 
- if vertical axis of revolution then $x = R ( y )$ 

---
