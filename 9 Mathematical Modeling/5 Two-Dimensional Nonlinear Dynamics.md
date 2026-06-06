### dynamical system
- rule that describes the change of state over time

---
### dynamical system formula
$$
\begin{aligned}
\frac { dx } { dt } = f ( x , y , c _ { 1 } , \dots , c _ { n } ) \\
\frac { dy } { dt } = g ( x , y , c _ { 1 } , \dots , c _ { n } ) \\
x ( t = 0 ) = x _ { 0 } \\
y ( t = 0 ) = y _ { 0 } \\
t \ge 0 \\
f , g = \text {velocity} \\
x , y = \text {solution} \\
t = \text {time} \\
x _ { 0 } , y _ { 0 } = \text {initial condition} \\
c = \text {parameter}
\end{aligned}
$$

---
### nonlinear system
- products of variables
- powers of variables
- transcendental functions of variables
- functions of variables

---
### nonlinear system formula
$$
\begin{aligned}
u _ { 1 } u _ { 2 } \\
u ^ { 2 } \\
\sin ( u ) \\
\exp ( u ) \\
u _ { 1 } \circ u _ { 2 }
\end{aligned}
$$

---
### taylor series
- approximate function near point as infinite polynomial

---
### taylor series formula
$$
\begin{aligned}
f ( u ) = \sum _ { n = 0 } ^ { \infty } \frac { f ^ { ( n ) } ( a ) } { n ! } ( u - a ) ^ { n } \\
f ^ { ( n ) } = \text {nth derivative} \\
a = \text {center}
\end{aligned}
$$

---
### linearization
- convert from nonlinear system to linear system

---
### linearization formula
$$
\begin{aligned}
\frac { dv } { dt } = A _ { * } v + R \\
A _ { * } = \begin{bmatrix}
\frac { \partial f } { \partial x } ( v _ { * } ) & \frac { \partial f } { \partial y } ( v _ { * } ) \\
\frac { \partial g } { \partial x } ( v _ { * } ) & \frac { \partial g } { \partial y } ( v _ { * } )
\end{bmatrix} \\
v = \begin{bmatrix}
x - x _ { * } \\
y - y _ { * }
\end{bmatrix} \\
R = \begin{bmatrix}
R _ { 1 } \\
R _ { 2 }
\end{bmatrix} \\
f , g = \text {velocity} \\
v = \text {solution} \\
t = \text {time} \\
v _ { * } = \text {equilibrium point} \\
A = \text {jacobian} \\
R = \text {remainder}
\end{aligned}
$$

---
### continuous differentiable
- derivative exists and derivative continuous

---
### continuous differentiable formula
$$
\begin{aligned}
f , g : D \subset \mathbb R ^ { 2 } \rightarrow \mathbb R ^ { 2 } \land f , g \in C ^ { 1 } ( D ) \\
f , g = \text {velocity} \\
C ^ { 1 } = \text {continuous differentiable} \\
D = \text {domain}
\end{aligned}
$$

---
### hyperbolicity
- for every eigenvalue there exists nonzero real part

---
### hyperbolicity formula
$$
\begin{aligned}
\forall i \le n : \text {Re} ( \lambda _ { i } ) \ne 0 \\
\lambda = \text {eigenvalue}
\end{aligned}
$$

---
### hartman-grobman property
- local behavior of continuously differentiable, hyperbolic, nonlinear system qualitatively equal linearized system

---
### hartman-grobman property formula
$$
\begin{aligned}
\lambda _ { 1 } , \lambda _ { 2 } < 0 \implies \forall v _ { 0 } \in N _ { \epsilon } ( v _ { * } ) : \lim _ { t \rightarrow \infty } v ( t ) = v _ { * } \\
( \lambda _ { 1 } > 0 ) \land ( \lambda _ { 2 } < 0 ) \implies \forall v _ { 0 } \in N _ { \epsilon } ( v _ { * } ) : \lim _ { t \rightarrow \infty } v ( t ) \ne v _ { * } \\
\lambda _ { 1 } , \lambda _ { 2 } > 0 \implies \forall v _ { 0 } \in N _ { \epsilon } ( v _ { * } ) : \lim _ { t \rightarrow \infty } v ( t ) \ne v _ { * } \\
\end{aligned}
$$

---
### periodic solution
- repeating solution with closed orbit
![[9 Mathematical Modeling/Images/periodic solution.png]]

---
### periodic solution formula
$$
\begin{aligned}
\forall t \ge 0 : v ( t + P ) = v ( t ) \\
v = \text {solution} \\
t = \text {time} \\
P = \text {period}
\end{aligned}
$$

---
### periodic equilibrium property
- for every periodic solution there exists equilibrium point(s) inside the closed orbit
![[9 Mathematical Modeling/Images/periodic equilibrium property.png]]

---
### periodic equilibrium property formula
$$
\begin{aligned}
U = \{ v | \forall t \ge 0 : v ( t + P ) = v ( t ) \} \implies \exists v _ { * } \in U \\
U = \text {range} \\
v = \text {solution} \\
t = \text {time} \\
P = \text {period} \\
v _ { * } = \text {equilibrium point}
\end{aligned}
$$

---
### poincare-bendixson property
- compact region without equilibrium point contain periodic solution
![[9 Mathematical Modeling/Images/poincare–bendixson property.png]]

---
### poincare-bendixson property formula
$$
\begin{aligned}
( R ' \subset R \subset \mathbb R ^ { 2 } ) \land \\
( R \subset \mathbb R ^ { 2 } , \exists v _ { 0 } \in \mathbb R ^ { 2 } , \exists ( r > 0 ) \in \mathbb R : B _ { r } ( v _ { 0 } ) \supset R ) \land \\
( \forall x \in R : f ( x ) \ne 0 ) \land \\
( \partial R \le 0 ) \implies \\
\exists v \in R , \forall t \ge 0 : v ( t + P ) = v ( t ) \\
R = \text {compact set} \\
R ' = \text {derived set} \\
f = \text {velocity} \\
v = \text {solution} \\
t = \text {time} \\
P = \text {period}
\end{aligned}
$$

---
### nonlinear center property
- there exists neighborhood around equilibrium point such that every nearby solution surround equilibrium point with constant spiral

---
### nonlinear center property formula
$$
\begin{aligned}
\frac { dE } { dt } ( v _ { * } ) = 0 \implies \exists \epsilon > 0 , \forall v \in N _ { \epsilon } ( v _ { * } ) , \forall t \ge 0 : v ( t + P ) = v ( t ) \\
E = \text {first integral} \\
v = \text {solution} \\
t = \text {time} \\
v _ { * } = \text {equilibrium point} \\
N = \text {neighborhood} \\
P = \text {period}
\end{aligned}
$$

---
### bifurcation
- quantitative change of parameter cause qualitative change of phase

---
### bifurcation formula
$$
\begin{aligned}
\Delta h \implies \Delta ( h \times u _ { * } )
\end{aligned}
$$

---
### bifurcation example
- $f ( u ) = u ^ { 3 } - u h$ 
- $u _ { * } = 0 , \pm \sqrt h$ 

---
### bifurcation example formula
$$
\begin{aligned}
h \le 0 \implies f ' ( 0 ) > 0 \\
h > 0 \implies f ' ( 0 ) < 0 \\
h > 0 \implies f ' ( \sqrt h ) < 0 \\
h > 0 \implies f ' ( - \sqrt h ) > 0 \\
\end{aligned}
$$

---
### bifurcation diagram
- find equilibrium point
- determine stability of equilibrium point
- find parameter where the stability of equilibria change
- graph the equilibrium point versus the parameter
![[9 Mathematical Modeling/Images/bifurcation diagram.png]]

---
### bifurcation diagram formula
$$
\begin{aligned}
h \times u _ { * } = \{ ( h , u _ { * } ) | f ( h , u _ { * } ) = 0 \} \\
h = \text {parameter} \\
u _ { * } = \text {equilibrium point}
\end{aligned}
$$

---
