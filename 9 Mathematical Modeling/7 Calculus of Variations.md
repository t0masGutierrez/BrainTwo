### vector space
- nonempty set thats closed under vector addition and scalar multiplication

---
### vector space formula
$$
\begin{array}{l}
x,y\in\mathcal V\implies x+y\in\mathcal V\\
(c\in\mathbb R)\land(x\in\mathcal V)\implies cx\in\mathcal V
\end{array}
$$

---
### continuous differentiable
- vector space of functions with continuous derivatives

---
### continuous differentiable formula
$$
\begin{array}{l}
C^{n}[a,b]=\set{f:[a,b]\rightarrow\mathbb R|\lim_{x\rightarrow t}f^{(n)}(x)=f^{(n)}(t)}\\
f=\text{continuous function}\\
f^{(n)}=\text{nth derivative}\\
x=\text{independent variable}
\end{array}
$$

---
### functional
- mapping from function to real number

---
### functional formula
$$
\begin{array}{l}
F:\mathcal V\rightarrow\mathbb R\\
\mathcal V=\set{f:[a,b]\rightarrow\mathbb R|f(a)=\alpha,f(b)=\beta}\\
F=\text{functional}\\
\mathcal V=\text{domain}\\
\alpha,\beta=\text{constant}
\end{array}
$$

---
### extremum
- minimum of functional or maximum of functional

---
### extremum formula
$$
\begin{array}{l}
\min(F)\lor\max(F)\\
F=\text{functional}
\end{array}
$$

---
### extremizer
- function associated with the extremum of functional

---
### extremizer formula
$$
\begin{array}{l}
\min(F[f])\lor\max(F[f])\\

F=\text{functional}\\
f=\text{extremizer}
\end{array}
$$

---
### global minimizer
- function associated with the absolute minimum of functional

---
### global minimizer formula
$$
\begin{array}{l}
\forall f\in\mathcal V:F[f_{*}]\le F[f]\\
F:\mathcal V\subset C^{n}[a,b]\rightarrow\mathbb R\\
f=\text{continuous function}\\
\mathcal V=\text{domain}\\
F=\text{functional}\\
f_{*}=\text{global minimizer}
\end{array}
$$

---
### global maximizer
- function associated with absolute maximum of functional

---
### global maximizer formula
$$
\begin{array}{l}
\forall f\in\mathcal V:F[f_{*}]\ge F[f]\\
F:\mathcal V\subset C^{n}[a,b]\rightarrow\mathbb R\\
f=\text{continuous function}\\
\mathcal V=\text{domain}\\
F=\text{functional}\\
f_{*}=\text{global maximizer}\\
C^{n}=\text{continuous differentiable}
\end{array}
$$

---
### norm
- magnitude of vector

---
### norm formula
$$
\begin{array}{l}
\|v\|\ge0\\
\|v\|=0\iff v=0\\
c\in\mathbb R\implies\|cv\|=c\|v\|\\
\|v_{1}+v_{2}\|\le\|v_{1}\|+\|v_{2}\|
\end{array}
$$

---
### continuous differentiable norm
- norm of continuously differentiable function

---
### continuous differentiable norm formula
$$
\begin{array}{l}
\|f\|_{C^{m}}=\sum_{k=0}^{m}|\max_{a\le x\le b}f^{(k)}(x)|\\
f\in\mathcal V\subset C^{n}[a,b]\\
m\le n\\
f=\text{continuous differentiable function}\\
C^{m}=\text{continuous differentiable}\\
f^{(k)}=\text{kth derivative}\\
x=\text{independent variable}\\
\mathcal V=\text{domain}
\end{array}
$$

---
### continuous differentiable neighborhood
- region where there exists open ball around center
![[9 Mathematical Modeling/Images/continuous differentiable neighborhood.png]]

---
### continuous differentiable neighborhood formula
$$
\begin{array}{l}
N_{\delta}(f_{*})=\set{f\in\mathcal V|\|f-f_{*}\|_{C^{m}}<\delta}\\
f=\text{continuous function}\\
\mathcal V=\text{domain}\\
f_{*}=\text{center}
\end{array}
$$

---
### local minimizer
- function associated with the relative minimum of functional

---
### local minimizer formula
$$
\begin{array}{l}
\exists\delta>0,\forall f\in N_{\delta}(f_{*}):F[f_{*}]\le F[f]\\
F:\mathcal V\subset C^{n}[a,b]\rightarrow\mathbb R\\
f=\text{continuous differentiable function}\\
N=\text{neighborhood}\\
f_{*}=\text{local minimizer}\\
F=\text{functional}\\
C^{n}=\text{continuous differentiable}
\end{array}
$$

---
### local maximizer
- function associated with the relative maximum of functional

---
### local maximizer formula
$$
\begin{array}{l}
\exists\delta>0,\forall f\in N_{\delta}(f_{*}):F[f_{*}]\ge F[f]\\
F:\mathcal V\subset C^{n}[a,b]\rightarrow\mathbb R\\
f=\text{continuous differentiable function}\\
N=\text{neighborhood}\\
f_{*}=\text{local maximizer}\\
F=\text{functional}\\
C^{n}=\text{continuous differentiable}
\end{array}
$$

---
### admissibility
- vector space of admissible functions
- vector space of admissible variations

---
### admissibility formula
$$
\begin{array}{l}
\mathcal V=\set{f\in C^{n}[a,b]\mid G_{j}[f]=c_{j}}\\
\mathcal V_{0}=\set{h\in C^{n}[a,b]\mid G_{j}[h]=0}\\
G:C^{n}[a,b]\rightarrow\mathbb R\\
\mathcal V,\mathcal V_{0}=\text{admissible space}\\
f,h=\text{continuous differentiable function}\\
C^{n}=\text{continuous differentiable}\\
G=\text{functional}\\
c=\text{constant}
\end{array}
$$

---
### variation
- one-parameter family of admissible functions

---
### variation formula
$$
\begin{array}{l}
\forall f\in N_{\delta}(f_{*}),\exists!h\in\mathcal V_{0}:f=f_{*}+h\in\mathcal V\\
\|h\|\le\delta\\
f,f_{*}=\text{admissible function}\\
N=\text{neighborhood}\\
h=\text{admissible variation}\\
\mathcal V,\mathcal V_{0}=\text{admissible space}
\end{array}
$$

---
### first variation
- first derivative of functional equal slope of functional

---
### first variation formula
$$
\begin{array}{l}
\delta F[f,h]=\frac{d}{d\epsilon}F[f+\epsilon h]_{\epsilon=0}\\
F=\text{functional}\\
f=\text{admissible function}\\
\epsilon=\text{parameter}\\
h=\text{admissible variation}
\end{array}
$$

---
### first variation property
- first variation of local extrema equal zero

---
### first variation property formula
$$
\begin{array}{l}
\forall h\in\mathcal V_{0}:\delta F[f_{*},h]=0\\
h=\text{admissible variation}\\
\mathcal V_{0}=\text{admissible variation space}\\
\delta F=\text{first variation}\\
f_{*}=\text{local extremizer}
\end{array}
$$

---
### second variation
- second derivative of functional equal curvature of functional

---
### second variation formula
$$
\begin{array}{l}
\delta^{2}F[f,h]=\frac{d^{2}}{d\epsilon^{2}}F[f+\epsilon h]_{\epsilon=0}\\
F=\text{functional}\\
f=\text{admissible function}\\
h=\text{admissible variation}\\
\epsilon=\text{parameter}
\end{array}
$$

---
### second variation property
- second variation of local minimizer greater or equal zero
- second variation of local maximizer lesser or equal zero

---
### second variation property formula
$$
\begin{array}{l}
\forall h\in\mathcal V_{0}:\delta^{2}F[f_{*},h]\ge0\implies\exists\delta>0,\forall f\in N_{\delta}(f_{*}):F[f_{*}]\le F[f]\\
\forall h\in\mathcal V_{0}:\delta^{2}F[f_{*},h]\le0\implies\exists\delta>0,\forall f\in N_{\delta}(f_{*}):F[f_{*}]\ge F[f]\\
h=\text{admissible variation}\\
\mathcal V_{0}=\text{admissible variation space}\\
\delta^{2}F=\text{second variation}\\
f_{*}=\text{local extremizer}\\
f=\text{admissible function}
\end{array}
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
\begin{array}{l}
F[f]-F[f_{*}]\ge0\implies f_{*}=\min(F)\\
F[f]-F[f_{*}]\le0\implies f_{*}=\max(F)\\
h=f-f_{*}\\
F=\text{functional}\\
f=\text{admissible function}\\
f_{*}=\text{local extremizer}\\
h=\text{admissible variation}
\end{array}
$$

---
### first-order
- highest derivative equal first derivative

---
### first-order formula
$$
\begin{array}{l}
L(x,f,f')\\
L=\text{lagrangian}\\
x=\text{independent variable}\\
f=\text{admissible function}
\end{array}
$$

---
### fixed-fixed
- vector space satisfy both boundary condition

---
### fixed-fixed formula
$$
\begin{array}{l}
\mathcal V=\set{f\in C^{2}[a,b]\mid f(a)=\alpha,f(b)=\beta}\\
\mathcal V_{0}=\set{h\in C^{2}[a,b]\mid h(a)=0,h(b)=0}\\
\mathcal V,\mathcal V_{0}=\text{admissible space}\\
f=\text{admissible function}\\
C^{2}=\text{continuous differentiable}\\
h=\text{admissible variation}\\
\alpha,\beta=\text{constant}
\end{array}
$$

---
### first-order fixed-fixed variational
- problem of finding the extremal of first-order fixed-fixed functional

---
### first-order fixed-fixed variational formula
$$
\begin{array}{l}
F[f]=\int_{a}^{b}L(x,f,f')dx\\
F=\text{functional}\\
f=\text{admissible function}\\
L=\text{lagrangian}\\
x=\text{independent variable}
\end{array}
$$

---
### first-order fixed-fixed euler-lagrange equation
- local extremal of first-order fixed-fixed functional must satisfy equation

---
### first-order fixed-fixed euler-lagrange equation formula
$$
\begin{array}{l}
\frac{\partial L}{\partial f}-\frac{d}{dx}(\frac{\partial L}{\partial f'})=0\\
L=\text{lagrangian}\\
f=\text{admissible function}\\
x=\text{independent variable}
\end{array}
$$

---
### first integral
- general solution of euler-lagrange equation constant along every trajectory

---
### first integral formula
$$
\begin{array}{l}
L=L(x,f')\implies\forall f\in C^{2}[a,b]:\frac{\partial L}{\partial f'}=A\\
L=L(f,f')\implies\forall f\in C^{2}[a,b]:L-f'\frac{\partial L}{\partial f'}=A\\
L=\text{lagrangian}\\
x=\text{independent variable}\\
f=\text{admissible function}\\
C^{2}=\text{continuous differentiable}
\end{array}
$$

---
### fundamental lemma property
- global zero equal leading coefficient zero

---
### fundamental lemma property formula
$$
\begin{array}{l}
\forall h\in C^{n}[a,b]:\int_{a}^{b}\phi(x)h(x)dx=0\implies\forall x\in[a,b]:\phi(x)=0\\
h^{(k)}(a)=h^{(k)}(b)=0\\
k=0,\dots,\mu\le n\\
h=\text{admissible variation}\\
C^{n}=\text{continuous differentiable}\\
\phi=\text{continuous function}\\
x=\text{independent variable}
\end{array}
$$

---
### sign lemma property
- global sign equal leading coefficient sign

---
### sign lemma property formula
$$
\begin{array}{l}
I(h)\ge0\implies\forall x\in[a,b]:\phi_{\nu\nu}(x)\ge0\\
I(h)=\int_{a}^{b}\sum_{i=0}^{\nu}\sum_{j=0}^{\nu}\phi_{\text{ij}}(x)h^{(i)}(x)h^{(j)}(x)dx\\
h^{(k)}(a)=h^{(k)}(b)=0\\
k=0,\dots,\mu\\
h=\text{admissible variation}\\
\phi=\text{continuous function}\\
x=\text{independent variable}
\end{array}
$$

---
### first-order
- highest derivative equal first derivative

---
### first-order formula
$$
\begin{array}{l}
L(x,f,f')\\
L=\text{lagrangian}\\
x=\text{independent variable}\\
f=\text{admissible function}
\end{array}
$$

---
### fixed-free
- vector space satisfy single boundary condition

---
### fixed-free formula
$$
\begin{array}{l}
\mathcal V=\set{f\in C^{2}[a,b]\mid f(a)=\alpha}\\
\mathcal V_{0}=\set{h\in C^{2}[a,b]\mid h(a)=0}\\
\mathcal V,\mathcal V_{0}=\text{admissible space}\\
f=\text{admissible function}\\
C^{2}=\text{continuous differentiable}\\
h=\text{admissible variation}\\
\alpha=\text{constant}
\end{array}
$$

---
### fixed-free variational
- problem of finding the extremal of fixed-free functional

---
### fixed-free variational formula
$$
\begin{array}{l}
F[f]=\int_{a}^{b}L(x,f,f')dx+[G(f)]_{x=b}\\
F=\text{functional}\\
f=\text{admissible function}\\
L=\text{lagrangian}\\
x=\text{independent variable}\\
G=\text{free-end}
\end{array}
$$

---
### fixed-free euler-lagrange equation
- local extremal of fixed-free functional must satisfy equation

---
### fixed-free euler-lagrange equation formula
$$
\begin{array}{l}
\frac{\partial L}{\partial f}-\frac{d}{dx}(\frac{\partial L}{\partial f'})=0\\
L=\text{lagrangian}\\
f=\text{admissible function}\\
x=\text{independent variable}
\end{array}
$$

---
### fixed-free essential boundary condition
- boundary condition associated with the fixed-free fixed-end

---
### fixed-free essential boundary condition formula
$$
\begin{array}{l}
f(a)=\alpha\\
f=\text{admissible function}\\
\alpha=\text{constant}
\end{array}
$$

---
### fixed-free natural boundary condition
- boundary condition associated with the fixed-free free-end

---
### fixed-free natural boundary condition formula
$$
\begin{array}{l}
{}[\frac{\partial G}{\partial f}-\frac{\partial L}{\partial f'}]_{x=a}=0\\
{}[\frac{\partial G}{\partial f}+\frac{\partial L}{\partial f'}]_{x=b}=0\\
G=\text{free-end}\\
f=\text{admissible function}\\
L=\text{lagrangian}
\end{array}
$$

---
### second-order
- highest derivative equal second derivative

---
### second-order formula
$$
\begin{array}{l}
L(x,f,f',f'')\\

L=\text{lagrangian}\\
x=\text{independent variable}\\
f=\text{admissible function}
\end{array}
$$

---
### fixed-fixed
- vector space satisfy both boundary condition

---
### fixed-fixed formula
$$
\begin{array}{l}
\mathcal V=\set{f\in C^{4}[a,b]\mid f(a)=\alpha,f'(a)=\gamma,f(b)=\beta,f'(b)=\eta}\\
\mathcal V_{0}=\set{h\in C^{4}[a,b]\mid h(a)=0,h'(a)=0,h(b)=0,h'(b)=0}\\
\mathcal V,\mathcal V_{0}=\text{vector space}\\
f=\text{admissible function}\\
h=\text{admissible variation}\\
\alpha,\beta,\gamma,\eta=\text{constant}
\end{array}
$$

---
### second-order variational
- problem of finding the extremal of second-order functional

---
### second-order variational formula
$$
\begin{array}{l}
F[f]=\int_{a}^{b}L(x,f,f',f'')dx\\
F=\text{functional}\\
f=\text{admissible function}\\
L=\text{lagrangian}\\
x=\text{independent variable}
\end{array}
$$

---
### second-order euler-lagrange equation
- local extremal of second-order functional must satisfy equation

---
### second-order euler-lagrange equation formula
$$
\begin{array}{l}
\frac{\partial L}{\partial f}-\frac{d}{dx}(\frac{\partial L}{\partial f'})+\frac{d^{2}}{dx^{2}}(\frac{\partial L}{\partial f''})=0\\
L=\text{lagrangian}\\
f,f'=\text{admissible function}\\
x=\text{independent variable}
\end{array}
$$

---
### second-order essential boundary condition
- boundary condition associated with the second-order fixed-end

---
### second-order essential boundary condition formula
$$
\begin{array}{l}
f(a)=\alpha\\
f'(a)=\gamma\\
f=\text{admissible function}\\
\alpha,\gamma=\text{constant}
\end{array}
$$

---
### second-order natural boundary condition
- boundary condition associated with the second-order free-end

---
### second-order natural boundary condition formula
$$
\begin{array}{l}
f(a)=\text{free}\implies[\frac{\partial L}{\partial f'}-\frac{d}{dx}(\frac{\partial L}{\partial f''})]_{x=a}=0\\
f'(a)=\text{free}\implies[\frac{\partial L}{\partial f''}]_{x=a}=0\\
f(b)=\text{free}\implies[\frac{\partial L}{\partial f'}-\frac{d}{dx}(\frac{\partial L}{\partial f''})]_{x=b}=0\\
f'(b)=\text{free}\implies[\frac{\partial L}{\partial f''}]_{x=b}=0
\end{array}
$$

---
### lagrange-multiplier
- allowable movement along constraint

---
### lagrange-multiplier formula
$$
\begin{array}{l}
\begin{bmatrix}
\dfrac{\partial\widetilde F}{\partial\varepsilon_{1}}(0,0)
+
\lambda
\dfrac{\partial\widetilde G}{\partial\varepsilon_{1}}(0,0)\\
\dfrac{\partial\widetilde F}{\partial\varepsilon_{2}}(0,0)
+
\lambda
\dfrac{\partial\widetilde G}{\partial\varepsilon_{2}}(0,0)\\
\end{bmatrix}=\begin{bmatrix}0\\0\end{bmatrix}\\
\tilde F=F[f_{*}+\epsilon_{1}h_{1}+\epsilon_{2}h_{2}]\\
\tilde G=G[g_{*}+\epsilon_{1}h_{1}+\epsilon_{2}h_{2}]\\
F=\text{objective functional}\\
\lambda=\text{lagrange-multiplier}\\
G=\text{constraint functional}\\
f_{*},g_{*}=\text{local extremizer}\\
\epsilon=\text{parameter}\\
h=\text{admissible variation}
\end{array}
$$

---
### constraint variational
- problem of finding the extremal of constraint functional

---
### constraint variational formula
$$
\begin{array}{l}
F[f]=\int_{a}^{b}L(x,f,f')dx\\
G[f]=\int_{a}^{b}M(x,f,f')dx=k\\
N=L+\lambda M\\
x=\text{independent variable}\\
f=\text{admissible function}\\
F=\text{objective functional}\\
G=\text{constraint functional}\\
k=\text{constraint}\\
L,M,N=\text{lagrangian}\\
\lambda=\text{lagrange multiplier}
\end{array}
$$

---
### constraint euler-lagrange equation
- local extremal of constraint functional must satisfy equation

---
### constraint euler-lagrange equation formula
$$
\begin{array}{l}
\frac{\partial N}{\partial f}-\frac{d}{dx}(\frac{\partial N}{\partial f'})=0\\
N=\text{lagrangian}\\
f=\text{admissible function}\\
x=\text{independent variable}
\end{array}
$$

---
### constraint essential boundary condition
- boundary condition associated with the constraint fixed-end

---
### constraint essential boundary condition formula
$$
\begin{array}{l}
f(a)=\alpha\\
G[f]=k\\
\lambda\in\mathbb R
\end{array}
$$

---
### constraint natural boundary condition
- boundary condition associated with the constraint free-end

---
### constraint natural boundary condition formula
$$
\begin{array}{l}
f(a),f(b)=\text{free}\implies[\frac{\partial L}{\partial f'}+\lambda\frac{\partial M}{\partial f'}]_{x=a}=[\frac{\partial L}{\partial f'}+\lambda\frac{\partial M}{\partial f'}]_{x=b}=0\\
f=\text{admissible function}\\
L,M=\text{lagrangian}\\
\lambda=\text{lagrange multiplier}
\end{array}
$$

---
