### dynamical system
- rule that describes the change of state over time

---
### dynamical system formula
$$
\begin{array}{l}
\frac{dx}{dt}=f(x,y,c_{1},\dots,c_{n})\\
\frac{dy}{dt}=g(x,y,c_{1},\dots,c_{n})\\
x(t=0)=x_{0}\\
y(t=0)=y_{0}\\
t\ge0\\
f,g=\text{velocity}\\
x,y=\text{solution}\\
t=\text{time}\\
x_{0},y_{0}=\text{initial condition}\\
c=\text{parameter}
\end{array}
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
\begin{array}{l}
u_{1}u_{2}\\
u^{2}\\
\sin(u)\\
\exp(u)\\
u_{1}\circ u_{2}
\end{array}
$$

---
### taylor series
- approximate function near point as infinite polynomial

---
### taylor series formula
$$
\begin{array}{l}
f(u)=\sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(u-a)^{n}\\
f^{(n)}=\text{nth derivative}\\
a=\text{center}
\end{array}
$$

---
### linearization
- convert from nonlinear system to linear system

---
### linearization formula
$$
\begin{array}{l}
\frac{dv}{dt}=A_{*}v+R\\
A_{*}=\begin{bmatrix}
\frac{\partial f}{\partial x}(v_{*})&\frac{\partial f}{\partial y}(v_{*})\\
\frac{\partial g}{\partial x}(v_{*})&\frac{\partial g}{\partial y}(v_{*})
\end{bmatrix}\\
v=\begin{bmatrix}
x-x_{*}\\
y-y_{*}
\end{bmatrix}\\
R=\begin{bmatrix}
R_{1}\\
R_{2}
\end{bmatrix}\\
f,g=\text{velocity}\\
v=\text{solution}\\
t=\text{time}\\
v_{*}=\text{equilibrium point}\\
A=\text{jacobian}\\
R=\text{remainder}
\end{array}
$$

---
### continuous differentiable
- derivative exists and derivative continuous

---
### continuous differentiable formula
$$
\begin{array}{l}
f,g:D\subset\mathbb R^{2}\rightarrow\mathbb R^{2}\land f,g\in C^{1}(D)\\
f,g=\text{velocity}\\
C^{1}=\text{continuous differentiable}\\
D=\text{domain}
\end{array}
$$

---
### hyperbolicity
- for every eigenvalue there exists nonzero real part

---
### hyperbolicity formula
$$
\begin{array}{l}
\forall i\le n:\text{Re}(\lambda_{i})\ne0\\
\lambda=\text{eigenvalue}
\end{array}
$$

---
### hartman-grobman property
- local behavior of continuously differentiable, hyperbolic, nonlinear system qualitatively equal linearized system

---
### hartman-grobman property formula
$$
\begin{array}{l}
\lambda_{1},\lambda_{2}<0\implies\forall v_{0}\in N_{\epsilon}(v_{*}):\lim_{t\rightarrow\infty}v(t)=v_{*}\\
(\lambda_{1}>0)\land(\lambda_{2}<0)\implies\forall v_{0}\in N_{\epsilon}(v_{*}):\lim_{t\rightarrow\infty}v(t)\ne v_{*}\\
\lambda_{1},\lambda_{2}>0\implies\forall v_{0}\in N_{\epsilon}(v_{*}):\lim_{t\rightarrow\infty}v(t)\ne v_{*}\\
\end{array}
$$

---
### periodic solution
- repeating solution with closed orbit
![[9 Mathematical Modeling/Images/periodic solution.png]]

---
### periodic solution formula
$$
\begin{array}{l}
\forall t\ge0:v(t+P)=v(t)\\
v=\text{solution}\\
t=\text{time}\\
P=\text{period}
\end{array}
$$

---
### periodic equilibrium property
- for every periodic solution there exists equilibrium point(s) inside the closed orbit
![[9 Mathematical Modeling/Images/periodic equilibrium property.png]]

---
### periodic equilibrium property formula
$$
\begin{array}{l}
U=\{v|\forall t\ge0:v(t+P)=v(t)\}\implies\exists v_{*}\in U\\
U=\text{range}\\
v=\text{solution}\\
t=\text{time}\\
P=\text{period}\\
v_{*}=\text{equilibrium point}
\end{array}
$$

---
### poincare-bendixson property
- compact region without equilibrium point contain periodic solution
![[9 Mathematical Modeling/Images/poincare–bendixson property.png]]

---
### poincare-bendixson property formula
$$
\begin{array}{l}
(R'\subset R\subset\mathbb R^{2})\land\\
(R\subset\mathbb R^{2},\exists v_{0}\in\mathbb R^{2},\exists(r>0)\in\mathbb R:B_{r}(v_{0})\supset R)\land\\
(\forall x\in R:f(x)\ne0)\land\\
(\partial R\le0)\implies\\
\exists v\in R,\forall t\ge0:v(t+P)=v(t)\\
R=\text{compact set}\\
R'=\text{derived set}\\
f=\text{velocity}\\
v=\text{solution}\\
t=\text{time}\\
P=\text{period}
\end{array}
$$

---
### nonlinear center property
- there exists neighborhood around equilibrium point such that every nearby solution surround equilibrium point with constant spiral

---
### nonlinear center property formula
$$
\begin{array}{l}
\frac{dE}{dt}(v_{*})=0\implies\exists\epsilon>0,\forall v\in N_{\epsilon}(v_{*}),\forall t\ge0:v(t+P)=v(t)\\
E=\text{first integral}\\
v=\text{solution}\\
t=\text{time}\\
v_{*}=\text{equilibrium point}\\
N=\text{neighborhood}\\
P=\text{period}
\end{array}
$$

---
### bifurcation
- quantitative change of parameter cause qualitative change of phase

---
### bifurcation formula
$$
\begin{array}{l}
\Delta h\implies\Delta(h\times u_{*})
\end{array}
$$

---
### bifurcation example
- $f(u)=u^{3}-uh$
- $u_{*}=0,\pm\sqrt h$

---
### bifurcation example formula
$$
\begin{array}{l}
h\le0\implies f'(0)>0\\
h>0\implies f'(0)<0\\
h>0\implies f'(\sqrt h)<0\\
h>0\implies f'(-\sqrt h)>0\\
\end{array}
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
\begin{array}{l}
h\times u_{*}=\{(h,u_{*})|f(h,u_{*})=0\}\\
h=\text{parameter}\\
u_{*}=\text{equilibrium point}
\end{array}
$$

---
