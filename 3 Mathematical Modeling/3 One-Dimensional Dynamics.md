### dynamical system
- rule that describes the change of state over time

---
### dynamical system formula
$$
\begin{aligned}
\frac{du}{dt} = f(u, c_{1}, \dots, c_{n}), u(t=0) = u_{0}, t \ge 0 \\
u = \text{solution} \\
t = \text{time} \\
u_{0} = \text{initial condition} \\
c = \text{parameter}
\end{aligned}
$$

---
### time view
- view solution as graph in the $(t, u)$-plane
![[3 Mathematical Modeling/Images/time view.png]]

---
### time view formula
$$
\begin{aligned}
\frac{du}{dt} = f(u) \\
f = \text{slope} 
\end{aligned}
$$

---
### phase view
- view solution as moving point along $u$-axis
![[3 Mathematical Modeling/Images/phase view.png]]

---
### phase view formula
$$
\begin{aligned}
\frac{du}{dt} = f(u) \\
f = \text{velocity}
\end{aligned}
$$

---
### solvability property
- for every initial condition there exists unique solution of dynamical system

---
### solvability property formula
$$
\begin{aligned}
\forall u_{0} \in \mathbb R, \exists t \in (T_{0}, T_{1}): u(t) \in D = \{u \in \mathbb R| \exists \frac{du}{dt}\} \\
(t \le T_{0}) \lor (t \ge T_{1}) \implies u(t) \not\in D = \{u \in \mathbb R|\exists \frac{du}{dt}\} \\
u_{0} \ne \hat u_{0} \implies \forall t \in (T_{0}, T_{1}): u(t) \ne \hat u(t)
\end{aligned}
$$

---
### equilibrium solution
- steady state solution of dynamical system equal zero

---
### equilibrium solution formula
$$
\begin{aligned}
\forall t \ge 0: u(t) = u_* \iff f(u_*) = 0 \\
u = \text{solution} \\
t = \text{time} \\
u_* = \text{equilibrium point}
\end{aligned}
$$

---
### monotonicity property
- sign of initial slope equal monotonicity of solution

---
### monotonicity property formula
$$
\begin{aligned}
f(u_{0}) > 0 \implies \forall t: f(u) > 0 \\
f(u_{0}) = 0 \implies \forall t: f(u) = 0 \\
f(u_{0}) < 0 \implies \forall t: f(u) < 0 \\
\end{aligned}
$$

---
### equilibrium stability
- behavior of solution near equilibrium point

---
### equilibrium stability formula
$$
\begin{aligned}
N_{\rho}(u_*) = (u_* - \rho, u_* + \rho) \\
u_* = \text{equilibrium point} \\
\rho = \text{radius} 
\end{aligned}
$$

---
### asymptotic equilibrium stability
- sufficiently nearby solution remain arbitrarily nearby equilibrium point for all time
- sufficiently nearby solution eventually converge on equilibrium point
![[3 Mathematical Modeling/Images/asymptotic equilibrium stability1.png]]

---
### asymptotic equilibrium stability formula
$$
\begin{aligned}
\forall \epsilon > 0, \exists \delta > 0, \forall t \ge 0: u_{0} \in N_{\delta}(u_*) \implies u(t) \in N_{\epsilon}(u_*) 
\land \forall u_{0} \in \mathbb R: \lim_{t \rightarrow \infty} u(t) = u_* \\
u_{0} = \text{initial condition} \\
N = \text{neighborhood} \\
u_* = \text{equilibrium point} \\
u = \text{solution} \\
t = \text{time} 
\end{aligned}
$$

---
### neutral equilibrium stability
- sufficiently nearby solution remain arbitrarily nearby equilibrium point for all time
- sufficiently nearby solution sometimes converge on equilibrium point
![[3 Mathematical Modeling/Images/neutral equilibrium stability1.png]]

---
### neutral equilibrium stability formula
$$
\begin{aligned}
\forall \epsilon > 0, \exists \delta > 0, \forall t \ge 0: u_{0} \in N_{\delta}(u_*) \implies u(t) \in N_{\epsilon}(u_*) 
\land \exists u_{0} \in \mathbb R: \lim_{t \rightarrow \infty} u(t) \ne u_* \\
u_{0} = \text{initial condition} \\
N = \text{neighborhood} \\
u_* = \text{equilibrium point} \\
u = \text{solution} \\
t = \text{time} 
\end{aligned}
$$

---
### equilibrium instability
- every solution infinitely diverge off equilibrium point
![[3 Mathematical Modeling/Images/equilibrium instability1.png]]

---
### equilibrium instability formula
$$
\begin{aligned}
\exists \epsilon > 0, \forall \delta > 0, \exists t \ge 0: u_{0} \in N_{\delta}(u_*) \land u(t) \not\in N_{\epsilon}(u_*) 
\land \forall u_{0} \in \mathbb R: \lim_{t \rightarrow \infty} u(t) \ne u_* \\
u_{0} = \text{initial condition} \\
N = \text{neighborhood} \\
u_* = \text{equilibrium point} \\
u = \text{solution} \\
t = \text{time} 
\end{aligned}
$$

---
### stability derivative test
- sign of derivative at equilibrium point equal stability of equilibrium point

---
### stability derivative test formula
$$
\begin{aligned}
f'(u_*) < 0 \implies \lim_{t \rightarrow \infty} u(t) = u_* \\
f'(u_*) > 0 \implies \lim_{t \rightarrow \infty} u(t) \ne u_* \\
\end{aligned}
$$

---
### bifurcation
- quantitative change of parameter cause qualitative change of phase

---
### bifurcation formula
$$
\begin{aligned}
\Delta h \implies \Delta (h \times u_*)
\end{aligned}
$$

---
### bifurcation example
- $f(u) = u^3 - uh$ 
- $u_* = 0, \pm \sqrt h$ 

---
### bifurcation example formula
$$
\begin{aligned}
h \le 0 \implies f'(0) > 0 \\
h > 0 \implies f'(0) < 0 \\
h > 0 \implies f'(\sqrt h) > 0 \\
h > 0 \implies f'(-\sqrt h) > 0 \\
\end{aligned}
$$

---
### bifurcation diagram
- find equilibrium point
- determine stability of equilibrium point
- find parameter where the stability of equilibria change
- graph the equilibrium point versus the parameter
![[3 Mathematical Modeling/Images/bifurcation diagram.png]]

---
### bifurcation diagram formula
$$
\begin{aligned}
h \times u_* = \{(h, u_*)| f(h, u_*) = 0\} \\
h = \text{parameter} \\
u_* = \text{equilibrium point} 
\end{aligned}
$$

---
### saddle-node bifurcation
- creation or destruction of two equilibria

---
### saddle-node bifurcation formula
$$
\begin{aligned}
\frac{du}{dt} = h - u^2
\end{aligned}
$$

---
### transcritical bifurcation
- two equilibria intersect and exchange stability

---
### transcritical bifurcation formula
$$
\begin{aligned}
\frac{du}{dt} = hu - u^2
\end{aligned}
$$

---
### pitchfork bifurcation
- single equilibrium split into three equilibria

---
### pitchfork bifurcation formula
$$
\begin{aligned}
\frac{du}{dt} = hu - u^3
\end{aligned}
$$

---
