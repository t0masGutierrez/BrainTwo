### dynamical system
- rule that describes the change of state over time

---
### dynamical system formula
$$
\begin{aligned}
\frac { du } { dt } = f ( u , c _ { 1 } , \dots , c _ { n } ) , u ( t = 0 ) = u _ { 0 } , t \ge 0 \\
u = \text {solution} \\
t = \text {time} \\
u _ { 0 } = \text {initial condition} \\
c = \text {parameter}
\end{aligned}
$$

---
### time view
- view solution as graph in the $( t , u )$-plane
![[9 Mathematical Modeling/Images/time view.png]]

---
### time view formula
$$
\begin{aligned}
\frac { du } { dt } = f ( u ) \\
f = \text {slope}
\end{aligned}
$$

---
### phase view
- view solution as moving point along $u$-axis
![[9 Mathematical Modeling/Images/phase view.png]]

---
### phase view formula
$$
\begin{aligned}
\frac { du } { dt } = f ( u ) \\
f = \text {velocity}
\end{aligned}
$$

---
### solvability property
- for every initial condition there exists unique solution of dynamical system

---
### solvability property formula
$$
\begin{aligned}
\forall u _ { 0 } \in \mathbb R , \exists t \in ( T _ { 0 } , T _ { 1 } ) : u ( t ) \in D = \{ u \in \mathbb R | \exists \frac { du } { dt } \} \\
( t \le T _ { 0 } ) \lor ( t \ge T _ { 1 } ) \implies u ( t ) \not \in D = \{ u \in \mathbb R | \exists \frac { du } { dt } \} \\
u _ { 0 } \ne \hat u _ { 0 } \implies \forall t \in ( T _ { 0 } , T _ { 1 } ) : u ( t ) \ne \hat u ( t )
\end{aligned}
$$

---
### equilibrium solution
- steady state solution of dynamical system equal zero

---
### equilibrium solution formula
$$
\begin{aligned}
\forall t \ge 0 : u ( t ) = u _ { * } \iff f ( u _ { * } ) = 0 \\
u = \text {solution} \\
t = \text {time} \\
u _ { * } = \text {equilibrium point}
\end{aligned}
$$

---
### monotonicity property
- sign of initial slope equal monotonicity of solution

---
### monotonicity property formula
$$
\begin{aligned}
f ( u _ { 0 } ) > 0 \implies \forall t : f ( u ) > 0 \\
f ( u _ { 0 } ) = 0 \implies \forall t : f ( u ) = 0 \\
f ( u _ { 0 } ) < 0 \implies \forall t : f ( u ) < 0 \\
\end{aligned}
$$

---
### equilibrium stability
- behavior of solution near equilibrium point

---
### equilibrium stability formula
$$
\begin{aligned}
N _ { \rho } ( u _ { * } ) = ( u _ { * } - \rho , u _ { * } + \rho ) \\
u _ { * } = \text {equilibrium point} \\
\rho = \text {radius}
\end{aligned}
$$

---
### asymptotic equilibrium stability
- sufficiently nearby solution remain arbitrarily nearby equilibrium point for all time
- sufficiently nearby solution eventually converge on equilibrium point
![[9 Mathematical Modeling/Images/asymptotic equilibrium stability1.png]]

---
### asymptotic equilibrium stability formula
$$
\begin{aligned}
\forall \epsilon > 0 , \exists \delta > 0 , \forall t \ge 0 : u _ { 0 } \in N _ { \delta } ( u _ { * } ) \implies u ( t ) \in N _ { \epsilon } ( u _ { * } )
\land \forall u _ { 0 } \in \mathbb R : \lim _ { t \rightarrow \infty } u ( t ) = u _ { * } \\
u _ { 0 } = \text {initial condition} \\
N = \text {neighborhood} \\
u _ { * } = \text {equilibrium point} \\
u = \text {solution} \\
t = \text {time}
\end{aligned}
$$

---
### neutral equilibrium stability
- sufficiently nearby solution remain arbitrarily nearby equilibrium point for all time
- sufficiently nearby solution sometimes converge on equilibrium point
![[9 Mathematical Modeling/Images/neutral equilibrium stability1.png]]

---
### neutral equilibrium stability formula
$$
\begin{aligned}
\forall \epsilon > 0 , \exists \delta > 0 , \forall t \ge 0 : u _ { 0 } \in N _ { \delta } ( u _ { * } ) \implies u ( t ) \in N _ { \epsilon } ( u _ { * } )
\land \exists u _ { 0 } \in \mathbb R : \lim _ { t \rightarrow \infty } u ( t ) \ne u _ { * } \\
u _ { 0 } = \text {initial condition} \\
N = \text {neighborhood} \\
u _ { * } = \text {equilibrium point} \\
u = \text {solution} \\
t = \text {time}
\end{aligned}
$$

---
### equilibrium instability
- every solution infinitely diverge off equilibrium point
![[9 Mathematical Modeling/Images/equilibrium instability1.png]]

---
### equilibrium instability formula
$$
\begin{aligned}
\exists \epsilon > 0 , \forall \delta > 0 , \exists t \ge 0 : u _ { 0 } \in N _ { \delta } ( u _ { * } ) \land u ( t ) \not \in N _ { \epsilon } ( u _ { * } )
\land \forall u _ { 0 } \in \mathbb R : \lim _ { t \rightarrow \infty } u ( t ) \ne u _ { * } \\
u _ { 0 } = \text {initial condition} \\
N = \text {neighborhood} \\
u _ { * } = \text {equilibrium point} \\
u = \text {solution} \\
t = \text {time}
\end{aligned}
$$

---
### stability derivative test
- sign of derivative at equilibrium point equal stability of equilibrium point

---
### stability derivative test formula
$$
\begin{aligned}
f ' ( u _ { * } ) < 0 \implies \lim _ { t \rightarrow \infty } u ( t ) = u _ { * } \\
f ' ( u _ { * } ) > 0 \implies \lim _ { t \rightarrow \infty } u ( t ) \ne u _ { * } \\
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
h > 0 \implies f ' ( \sqrt h ) > 0 \\
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
### saddle-node bifurcation
- creation or destruction of two equilibria

---
### saddle-node bifurcation formula
$$
\begin{aligned}
\frac { du } { dt } = h - u ^ { 2 }
\end{aligned}
$$

---
### transcritical bifurcation
- two equilibria intersect and exchange stability

---
### transcritical bifurcation formula
$$
\begin{aligned}
\frac { du } { dt } = h u - u ^ { 2 }
\end{aligned}
$$

---
### pitchfork bifurcation
- single equilibrium split into three equilibria

---
### pitchfork bifurcation formula
$$
\begin{aligned}
\frac { du } { dt } = h u - u ^ { 3 }
\end{aligned}
$$

---
