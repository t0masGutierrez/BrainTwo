### vector space
- nonempty set thats closed under vector addition and scalar multiplication

---
### vector space formula
$$
\begin{aligned}
x , y \in \mathcal V \implies x + y \in \mathcal V \\
( c \in \mathbb R ) \land ( x \in \mathcal V ) \implies c x \in \mathcal V
\end{aligned}
$$

---
### continuous differentiable
- vector space of functions with continuous derivatives

---
### continuous differentiable formula
$$
\begin{aligned}
C ^ { n } [ a , b ] = \set { f : [ a , b ] \rightarrow \mathbb R | \lim _ { x \rightarrow t } f ^ { ( n ) } ( x ) = f ^ { ( n ) } ( t ) } \\
f = \text { continuous function } \\
f ^ { ( n ) } = \text { nth derivative } \\
x = \text { independent variable }
\end{aligned}
$$

---
### functional
- mapping from function to real number

---
### functional formula
$$
\begin{aligned}
F : \mathcal V \rightarrow \mathbb R \\
\mathcal V = \set { f : [ a , b ] \rightarrow \mathbb R | f ( a ) = \alpha , f ( b ) = \beta } \\
F = \text { functional } \\
\mathcal V = \text { domain } \\
\alpha , \beta = \text { constant }
\end{aligned}
$$

---
### extremum
- minimum of functional or maximum of functional

---
### extremum formula
$$
\begin{aligned}
\min ( F ) \lor \max ( F ) \\
F = \text { functional }
\end{aligned}
$$

---
### extremizer
- function associated with the extremum of functional

---
### extremizer formula
$$
\begin{aligned}
\min ( F [ f ] ) \lor \max ( F [ f ] ) \\

F = \text { functional } \\
f = \text { extremizer }
\end{aligned}
$$

---
### global minimizer
- function associated with the absolute minimum of functional

---
### global minimizer formula
$$
\begin{aligned}
\forall f \in \mathcal V : F [ f _ { * } ] \le F [ f ] \\
F : \mathcal V \subset C ^ { n } [ a , b ] \rightarrow \mathbb R \\
f = \text { continuous function } \\
\mathcal V = \text { domain } \\
F = \text { functional } \\
f _ { * } = \text { global minimizer }
\end{aligned}
$$

---
### global maximizer
- function associated with absolute maximum of functional

---
### global maximizer formula
$$
\begin{aligned}
\forall f \in \mathcal V : F [ f _ { * } ] \ge F [ f ] \\
F : \mathcal V \subset C ^ { n } [ a , b ] \rightarrow \mathbb R \\
f = \text { continuous function } \\
\mathcal V = \text { domain } \\
F = \text { functional } \\
f _ { * } = \text { global maximizer } \\
C ^ { n } = \text { continuous differentiable }
\end{aligned}
$$

---
### norm
- magnitude of vector

---
### norm formula
$$
\begin{aligned}
\| v \| \ge 0 \\
\| v \| = 0 \iff v = 0 \\
c \in \mathbb R \implies \| c v \| = c \| v \| \\
\| v _ { 1 } + v _ { 2 } \| \le \| v _ { 1 } \| + \| v _ { 2 } \|
\end{aligned}
$$

---
### continuous differentiable norm
- norm of continuously differentiable function

---
### continuous differentiable norm formula
$$
\begin{aligned}
\| f \| _ { C ^ { m } } = \sum _ { k = 0 } ^ { m } | \max _ { a \le x \le b } f ^ { ( k ) } ( x ) | \\
f \in \mathcal V \subset C ^ { n } [ a , b ] \\
m \le n \\
f = \text { continuous differentiable function } \\
C ^ { m } = \text { continuous differentiable } \\
f ^ { ( k ) } = \text { kth derivative } \\
x = \text { independent variable } \\
\mathcal V = \text { domain }
\end{aligned}
$$

---
### continuous differentiable neighborhood
- region where there exists open ball around center
![[9 Mathematical Modeling/Images/continuous differentiable neighborhood.png]]

---
### continuous differentiable neighborhood formula
$$
\begin{aligned}
N _ { \delta } ( f _ { * } ) = \set { f \in \mathcal V | \| f - f _ { * } \| _ { C ^ { m } } < \delta } \\
f = \text { continuous function } \\
\mathcal V = \text { domain } \\
f _ { * } = \text { center }
\end{aligned}
$$

---
### local minimizer
- function associated with the relative minimum of functional

---
### local minimizer formula
$$
\begin{aligned}
\exists \delta > 0 , \forall f \in N _ { \delta } ( f _ { * } ) : F [ f _ { * } ] \le F [ f ] \\
F : \mathcal V \subset C ^ { n } [ a , b ] \rightarrow \mathbb R \\
f = \text { continuous differentiable function } \\
N = \text { neighborhood } \\
f _ { * } = \text { local minimizer } \\
F = \text { functional } \\
C ^ { n } = \text { continuous differentiable }
\end{aligned}
$$

---
### local maximizer
- function associated with the relative maximum of functional

---
### local maximizer formula
$$
\begin{aligned}
\exists \delta > 0 , \forall f \in N _ { \delta } ( f _ { * } ) : F [ f _ { * } ] \ge F [ f ] \\
F : \mathcal V \subset C ^ { n } [ a , b ] \rightarrow \mathbb R \\
f = \text { continuous differentiable function } \\
N = \text { neighborhood } \\
f _ { * } = \text { local maximizer } \\
F = \text { functional } \\
C ^ { n } = \text { continuous differentiable }
\end{aligned}
$$

---
### admissibility
- vector space of admissible functions
- vector space of admissible variations

---
### admissibility formula
$$
\begin{aligned}
\mathcal V = \set { f \in C ^ { n } [ a , b ] \mid G _ { j } [ f ] = c _ { j } } \\
\mathcal V _ { 0 } = \set { h \in C ^ { n } [ a , b ] \mid G _ { j } [ h ] = 0 } \\
G : C ^ { n } [ a , b ] \rightarrow \mathbb R \\
\mathcal V , \mathcal V _ { 0 } = \text { admissible space } \\
f , h = \text { continuous differentiable function } \\
C ^ { n } = \text { continuous differentiable } \\
G = \text { functional } \\
c = \text { constant }
\end{aligned}
$$

---
### variation
- one-parameter family of admissible functions

---
### variation formula
$$
\begin{aligned}
\forall f \in N _ { \delta } ( f _ { * } ) , \exists ! h \in \mathcal V _ { 0 } : f = f _ { * } + h \in \mathcal V \\
\| h \| \le \delta \\
f , f _ { * } = \text { admissible function } \\
N = \text { neighborhood } \\
h = \text { admissible variation } \\
\mathcal V , \mathcal V _ { 0 } = \text { admissible space }
\end{aligned}
$$

---
### first variation
- first derivative of functional equal slope of functional

---
### first variation formula
$$
\begin{aligned}
\delta F [ f , h ] = \frac { d } { d \epsilon } F [ f + \epsilon h ] _ { \epsilon = 0 } \\
F = \text { functional } \\
f = \text { admissible function } \\
\epsilon = \text { parameter } \\
h = \text { admissible variation }
\end{aligned}
$$

---
### first variation property
- first variation of local extrema equal zero

---
### first variation property formula
$$
\begin{aligned}
\forall h \in \mathcal V _ { 0 } : \delta F [ f _ { * } , h ] = 0 \\
h = \text { admissible variation } \\
\mathcal V _ { 0 } = \text { admissible variation space } \\
\delta F = \text { first variation } \\
f _ { * } = \text { local extremizer }
\end{aligned}
$$

---
### second variation
- second derivative of functional equal curvature of functional

---
### second variation formula
$$
\begin{aligned}
\delta ^ { 2 } F [ f , h ] = \frac { d ^ { 2 } } { d \epsilon ^ { 2 } } F [ f + \epsilon h ] _ { \epsilon = 0 } \\
F = \text { functional } \\
f = \text { admissible function } \\
h = \text { admissible variation } \\
\epsilon = \text { parameter }
\end{aligned}
$$

---
### second variation property
- second variation of local minimizer greater or equal zero
- second variation of local maximizer lesser or equal zero

---
### second variation property formula
$$
\begin{aligned}
\forall h \in \mathcal V _ { 0 } : \delta ^ { 2 } F [ f _ { * } , h ] \ge 0 \implies \exists \delta > 0 , \forall f \in N _ { \delta } ( f _ { * } ) : F [ f _ { * } ] \le F [ f ] \\
\forall h \in \mathcal V _ { 0 } : \delta ^ { 2 } F [ f _ { * } , h ] \le 0 \implies \exists \delta > 0 , \forall f \in N _ { \delta } ( f _ { * } ) : F [ f _ { * } ] \ge F [ f ] \\
h = \text { admissible variation } \\
\mathcal V _ { 0 } = \text { admissible variation space } \\
\delta ^ { 2 } F = \text { second variation } \\
f _ { * } = \text { local extremizer } \\
f = \text { admissible function }
\end{aligned}
$$

---
### variational calculus
- solve euler-lagrange equation for extremal
- apply boundary condition for constant of integration
- substitute unperturbed variation into functional
- integrate derivative of admissible variation by parts
- eliminate admissible variation with boundary condition
- sign of functional difference equal sign of extremal

---
### variational calculus formula
$$
\begin{aligned}
F [ f ] - F [ f _ { * } ] \ge 0 \implies f _ { * } = \min ( F ) \\
F [ f ] - F [ f _ { * } ] \le 0 \implies f _ { * } = \max ( F ) \\
h = f - f _ { * } \\
F = \text { functional } \\
f = \text { admissible function } \\
f _ { * } = \text { local extremizer } \\
h = \text { admissible variation }
\end{aligned}
$$

---
### first-order
- highest derivative equal first derivative

---
### first-order formula
$$
\begin{aligned}
L ( x , f , f ' ) \\
L = \text { lagrangian } \\
x = \text { independent variable } \\
f = \text { admissible function }
\end{aligned}
$$

---
### fixed-fixed
- vector space satisfy both boundary condition

---
### fixed-fixed formula
$$
\begin{aligned}
\mathcal V = \set { f \in C ^ { 2 } [ a , b ] \mid f ( a ) = \alpha , f ( b ) = \beta } \\
\mathcal V _ { 0 } = \set { h \in C ^ { 2 } [ a , b ] \mid h ( a ) = 0 , h ( b ) = 0 } \\
\mathcal V , \mathcal V _ { 0 } = \text { admissible space } \\
f = \text { admissible function } \\
C ^ { 2 } = \text { continuous differentiable } \\
h = \text { admissible variation } \\
\alpha , \beta = \text { constant }
\end{aligned}
$$

---
### first-order fixed-fixed variational
- problem of finding the extremal of first-order fixed-fixed functional

---
### first-order fixed-fixed variational formula
$$
\begin{aligned}
F [ f ] = \int _ { a } ^ { b } L ( x , f , f ' ) d x \\
F = \text { functional } \\
f = \text { admissible function } \\
L = \text { lagrangian } \\
x = \text { independent variable }
\end{aligned}
$$

---
### first-order fixed-fixed euler-lagrange equation
- local extremal of first-order fixed-fixed functional must satisfy equation

---
### first-order fixed-fixed euler-lagrange equation formula
$$
\begin{aligned}
\frac { \partial L } { \partial f } - \frac { d } { d x } ( \frac { \partial L } { \partial f ' } ) = 0 \\
L = \text { lagrangian } \\
f = \text { admissible function } \\
x = \text { independent variable }
\end{aligned}
$$

---
### first integral
- general solution of euler-lagrange equation constant along every trajectory

---
### first integral formula
$$
\begin{aligned}
L = L ( x , f ' ) \implies \forall f \in C ^ { 2 } [ a , b ] : \frac { \partial L } { \partial f ' } = A \\
L = L ( f , f ' ) \implies \forall f \in C ^ { 2 } [ a , b ] : L - f ' \frac { \partial L } { \partial f ' } = A \\
L = \text { lagrangian } \\
x = \text { independent variable } \\
f = \text { admissible function } \\
C ^ { 2 } = \text { continuous differentiable }
\end{aligned}
$$

---
### fundamental lemma property
- global zero equal leading coefficient zero

---
### fundamental lemma property formula
$$
\begin{align}
\forall h \in C ^ { n } [ a , b ] : \int _ { a } ^ { b } \phi ( x ) h ( x ) d x = 0 \implies \forall x \in [ a , b ] : \phi ( x ) = 0 \\
h ^ { ( k ) } ( a ) = h ^ { ( k ) } ( b ) = 0 \\
k = 0 , \dots , \mu \le n \\
h = \text { admissible variation } \\
C ^ { n } = \text { continuous differentiable } \\
\phi = \text { continuous function } \\
x = \text { independent variable }
\end{align}
$$

---
### sign lemma property
- global sign equal leading coefficient sign

---
### sign lemma property formula
$$
\begin{aligned}
I ( h ) \ge 0 \implies \forall x \in [ a , b ] : \phi _ { \nu \nu } ( x ) \ge 0 \\
I ( h ) = \int _ { a } ^ { b } \sum _ { i = 0 } ^ { \nu } \sum _ { j = 0 } ^ { \nu } \phi _ { i j } ( x ) h ^ { ( i ) } ( x ) h ^ { ( j ) } ( x ) d x \\
h ^ { ( k ) } ( a ) = h ^ { ( k ) } ( b ) = 0 \\
k = 0 , \dots , \mu \\
h = \text { admissible variation } \\
\phi = \text { continuous function } \\
x = \text { independent variable }
\end{aligned}
$$

---
### first-order
- highest derivative equal first derivative

---
### first-order formula
$$
\begin{aligned}
L ( x , f , f ' ) \\
L = \text { lagrangian } \\
x = \text { independent variable } \\
f = \text { admissible function }
\end{aligned}
$$

---
### fixed-free
- vector space satisfy single boundary condition

---
### fixed-free formula
$$
\begin{aligned}
\mathcal V = \set { f \in C ^ { 2 } [ a , b ] \mid f ( a ) = \alpha } \\
\mathcal V _ { 0 } = \set { h \in C ^ { 2 } [ a , b ] \mid h ( a ) = 0 } \\
\mathcal V , \mathcal V _ { 0 } = \text { admissible space } \\
f = \text { admissible function } \\
C ^ { 2 } = \text { continuous differentiable } \\
h = \text { admissible variation } \\
\alpha = \text { constant }
\end{aligned}
$$

---
### fixed-free variational
- problem of finding the extremal of fixed-free functional

---
### fixed-free variational formula
$$
\begin{aligned}
F [ f ] = \int _ { a } ^ { b } L ( x , f , f ' ) d x + [ G ( f ) ] _ { x = b } \\
F = \text { functional } \\
f = \text { admissible function } \\
L = \text { lagrangian } \\
x = \text { independent variable } \\
G = \text { free-end }
\end{aligned}
$$

---
### fixed-free euler-lagrange equation
- local extremal of fixed-free functional must satisfy equation

---
### fixed-free euler-lagrange equation formula
$$
\begin{aligned}
\frac { \partial L } { \partial f } - \frac { d } { d x } ( \frac { \partial L } { \partial f ' } ) = 0 \\
L = \text { lagrangian } \\
f = \text { admissible function } \\
x = \text { independent variable }
\end{aligned}
$$

---
### fixed-free essential boundary condition
- boundary condition associated with the fixed-free fixed-end

---
### fixed-free essential boundary condition formula
$$
\begin{aligned}
f ( a ) = \alpha \\
f = \text { admissible function } \\
\alpha = \text { constant }
\end{aligned}
$$

---
### fixed-free natural boundary condition
- boundary condition associated with the fixed-free free-end

---
### fixed-free natural boundary condition formula
$$
\begin{aligned}
{}[ \frac { \partial G } { \partial f } - \frac { \partial L } { \partial f ' } ] _ { x = a } = 0 \\
{}[ \frac { \partial G } { \partial f } + \frac { \partial L } { \partial f ' } ] _ { x = b } = 0 \\
G = \text { free-end } \\
f = \text { admissible function } \\
L = \text { lagrangian }
\end{aligned}
$$

---
### second-order
- highest derivative equal second derivative

---
### second-order formula
$$
\begin{aligned}
L ( x , f , f ' , f ' ' ) \\

L = \text { lagrangian } \\
x = \text { independent variable } \\
f = \text { admissible function }
\end{aligned}
$$

---
### fixed-fixed
- vector space satisfy both boundary condition

---
### fixed-fixed formula
$$
\begin{aligned}
\mathcal V = \set { f \in C ^ { 4 } [ a , b ] \mid f ( a ) = \alpha , f ' ( a ) = \gamma , f ( b ) = \beta , f ' ( b ) = \eta } \\
\mathcal V _ { 0 } = \set { h \in C ^ { 4 } [ a , b ] \mid h ( a ) = 0 , h ' ( a ) = 0 , h ( b ) = 0 , h ' ( b ) = 0 } \\
\mathcal V , \mathcal V _ { 0 } = \text { vector space } \\
f = \text { admissible function } \\
h = \text { admissible variation } \\
\alpha , \beta , \gamma , \eta = \text { constant }
\end{aligned}
$$

---
### second-order variational
- problem of finding the extremal of second-order functional

---
### second-order variational formula
$$
\begin{aligned}
F [ f ] = \int _ { a } ^ { b } L ( x , f , f ' , f ' ' ) d x \\
F = \text { functional } \\
f = \text { admissible function } \\
L = \text { lagrangian } \\
x = \text { independent variable }
\end{aligned}
$$

---
### second-order euler-lagrange equation
- local extremal of second-order functional must satisfy equation

---
### second-order euler-lagrange equation formula
$$
\begin{aligned}
\frac { \partial L } { \partial f } - \frac { d } { d x } ( \frac { \partial L } { \partial f ' } ) + \frac { d ^ { 2 } } { d x ^ { 2 } } ( \frac { \partial L } { \partial f ' ' } ) = 0 \\
L = \text { lagrangian } \\
f , f ' = \text { admissible function } \\
x = \text { independent variable }
\end{aligned}
$$

---
### second-order essential boundary condition
- boundary condition associated with the second-order fixed-end

---
### second-order essential boundary condition formula
$$
\begin{aligned}
f ( a ) = \alpha \\
f ' ( a ) = \gamma \\
f = \text { admissible function } \\
\alpha , \gamma = \text { constant }
\end{aligned}
$$

---
### second-order natural boundary condition
- boundary condition associated with the second-order free-end

---
### second-order natural boundary condition formula
$$
\begin{aligned}
f ( a ) = \text { free } \implies [ \frac { \partial L } { \partial f ' } - \frac { d } { d x } ( \frac { \partial L } { \partial f ' ' } ) ] _ { x = a } = 0 \\
f ' ( a ) = \text { free } \implies [ \frac { \partial L } { \partial f ' ' } ] _ { x = a } = 0 \\
f ( b ) = \text { free } \implies [ \frac { \partial L } { \partial f ' } - \frac { d } { d x } ( \frac { \partial L } { \partial f ' ' } ) ] _ { x = b } = 0 \\
f ' ( b ) = \text { free } \implies [ \frac { \partial L } { \partial f ' ' } ] _ { x = b } = 0
\end{aligned}
$$

---
### lagrange-multiplier
- allowable movement along constraint

---
### lagrange-multiplier formula
$$
\begin{aligned}
\begin{bmatrix}  
\dfrac { \partial \widetilde F } { \partial \varepsilon _ { 1 } } ( 0 , 0 )
+
\lambda
\dfrac { \partial \widetilde G } { \partial \varepsilon _ { 1 } } ( 0 , 0 ) \\
\dfrac { \partial \widetilde F } { \partial \varepsilon _ { 2 } } ( 0 , 0 )
+
\lambda
\dfrac { \partial \widetilde G } { \partial \varepsilon _ { 2 } } ( 0 , 0 ) \\
\end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix} \\
\tilde F = F [ f _ { * } + \epsilon _ { 1 } h _ { 1 } + \epsilon _ { 2 } h _ { 2 } ] \\
\tilde G = G [ g _ { * } + \epsilon _ { 1 } h _ { 1 } + \epsilon _ { 2 } h _ { 2 } ] \\
F = \text { objective functional } \\
\lambda = \text { lagrange-multiplier } \\
G = \text { constraint functional } \\
f _ { * } , g _ { * } = \text { local extremizer } \\
\epsilon = \text { parameter } \\
h = \text { admissible variation }
\end{aligned}
$$

---
### constraint variational
- problem of finding the extremal of constraint functional

---
### constraint variational formula
$$
\begin{aligned}
F [ f ] = \int _ { a } ^ { b } L ( x , f , f ' ) d x \\
G [ f ] = \int _ { a } ^ { b } M ( x , f , f ' ) d x = k \\
N = L + \lambda M \\
x = \text { independent variable } \\
f = \text { admissible function } \\
F = \text { objective functional } \\
G = \text { constraint functional } \\
k = \text { constraint } \\
L , M , N = \text { lagrangian } \\
\lambda = \text { lagrange multiplier }
\end{aligned}
$$

---
### constraint euler-lagrange equation
- local extremal of constraint functional must satisfy equation

---
### constraint euler-lagrange equation formula
$$
\begin{aligned}
\frac { \partial N } { \partial f } - \frac { d } { d x } ( \frac { \partial N } { \partial f ' } ) = 0 \\
N = \text { lagrangian } \\
f = \text { admissible function } \\
x = \text { independent variable }
\end{aligned}
$$

---
### constraint essential boundary condition
- boundary condition associated with the constraint fixed-end

---
### constraint essential boundary condition formula
$$
\begin{aligned}
f ( a ) = \alpha \\
G [ f ] = k \\
\lambda \in \mathbb R
\end{aligned}
$$

---
### constraint natural boundary condition
- boundary condition associated with the constraint free-end

---
### constraint natural boundary condition formula
$$
\begin{aligned}
f ( a ) , f ( b ) = \text { free } \implies [ \frac { \partial L } { \partial f ' } + \lambda \frac { \partial M } { \partial f ' } ] _ { x = a } = [ \frac { \partial L } { \partial f ' } + \lambda \frac { \partial M } { \partial f ' } ] _ { x = b } = 0 \\
f = \text { admissible function } \\
L , M = \text { lagrangian } \\
\lambda = \text { lagrange multiplier }
\end{aligned}
$$

---
