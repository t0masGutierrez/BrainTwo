### dynamical system
- rule that describes the change of state over time

---
### dynamical system formula
$$
\begin{lgathered}
\frac{dx}{dt}=f(x,y,c_{1},\dots,c_{n})\\
\frac{dy}{dt}=g(x,y,c_{1},\dots,c_{n})\\
x(t=0)=x_{0}\\
y(t=0)=y_{0}\\
t\ge0\\
x,y=\text{solution}\\
t=\text{time}\\
x_{0},y_{0}=\text{initial condition}\\
c=\text{parameter}
\end{lgathered}
$$

---
### time view
- view solution as curve in the $(t,x)$-plane or $(t,y)$-plane
![[9 Mathematical Modeling/Images/2d time view.png]]

---
### time view formula
$$
\begin{lgathered}
\frac{dx}{dt}=f(x,y)\\
\frac{dy}{dt}=g(x,y)\\
f,g=\text{slope}
\end{lgathered}
$$

---
### phase view
- view solution as moving point in the $(x,y)$-plane
![[9 Mathematical Modeling/Images/2d phase view.png]]

---
### phase view formula
$$
\begin{lgathered}
v=[f,g]\\
f,g=\text{velocity}
\end{lgathered}
$$

---
### solvability property
- for every initial condition there exists unique solution of dynamical system
![[9 Mathematical Modeling/Images/solvability property.png]]

---
### solvability property formula
$$
\begin{lgathered}
\forall(x_{0},y_{0})\in\mathbb R,\exists t\in(T_{0},T_{1}):(x,y)(t)\in D=\{(x,y)\in\mathbb R|\exists!(\frac{dx}{dt},\frac{dy}{dt})\}\\
(t\le T_{0})\lor(t\ge T_{1})\implies(x,y)(t)\not\in D=\{(x,y)\in\mathbb R|\exists!(\frac{dx}{dt},\frac{dy}{dt})\}\\
(x_{0},y_{0})\ne(\hat x_{0},\hat y_{0})\implies\forall t\in(T_{0},T_{1}):(x,y)(t)\ne(\hat x,\hat y)(t)
\end{lgathered}
$$

---
### vector field
- collection of vectors for all points
![[9 Mathematical Modeling/Images/vector field.png]]

---
### vector field formula
$$
\begin{lgathered}
v(t)=\{(\frac{dx}{dt},\frac{dy}{dt})|x,y\in D\}\\
\frac{dx}{dt},\frac{dy}{dt}=\text{velocity}\\
D=\text{domain}
\end{lgathered}
$$

---
### direction field
- collection of signs for all points
![[9 Mathematical Modeling/Images/direction field.png]]

---
### direction field formula
$$
\begin{lgathered}
(f,g)(x,y)=\{(\hat x,\hat y)|x,y\in D\}\\
\hat x,\hat y=\text{unit vector}\\
D=\text{domain}
\end{lgathered}
$$

---
### nullcline curve
- set of points whose derivative equal zero
- equilibrium point equal intersection of nullcline curve

---
### nullcline curve formula
$$
\begin{lgathered}
F(x,y)=\{(x,y)|\frac{dx}{dt}=0\}\\
G(x,y)=\{(x,y)|\frac{dy}{dt}=0\}\\
x,y=\text{solution}\\
t=\text{time}\\
\frac{dx}{dt},\frac{dy}{dt}=\text{velocity}
\end{lgathered}
$$

---
### path equation
- system of ODEs that determine the path of moving point in the $(x,y)$-plane

---
### path equation formula
$$
\begin{lgathered}
\frac{dy}{dx}=\frac{g(x,y)}{f(x,y)}\\
x,y=\text{solution}\\
f,g=\text{velocity}
\end{lgathered}
$$

---
### first integral
- general solution of path equation constant along every trajectory

---
### first integral formula
$$
\begin{lgathered}
\forall(x,y)\in D:\frac{dE}{dt}(x,y)(t)=0\implies E(x,y)(t)=C\\
\frac{\partial}{\partial x}(\phi f)=\frac{\partial}{\partial y}(-\phi g)\implies(\frac{\partial E}{\partial x}=-\phi g)\land(\frac{\partial E}{\partial y}=\phi f)\\
x,y=\text{solution}\\
t=\text{time}\\
D=\text{domain}\\
E=\text{first integral}\\
C=\text{constant}\\
\phi=\text{integrating factor}
\end{lgathered}
$$

---
### equilibrium solution
- steady state solution of dynamical system equal zero

---
### equilibrium solution formula
$$
\begin{lgathered}
\forall t\ge0:(x,y)(t)=(x_{*},y_{*})\iff f(x_{*},y_{*})=g(x_{*},y_{*})=0\\
x,y=\text{solution}\\
t=\text{time}\\
x_{*},y_{*}=\text{equilibrium point}
\end{lgathered}
$$

---
### equilibrium stability
- behavior of solution near equilibrium point

---
### equilibrium stability formula
$$
\begin{lgathered}
N_{\rho}(x_{*},y_{*})=(x_{*}-\rho,x_{*}+\rho)\times(y_{*}-\rho,y_{*}+\rho)\\
x_{*},y_{*}=\text{equilibrium point}\\
\rho=\text{radius}
\end{lgathered}
$$

---
### asymptotic equilibrium stability
- sufficiently nearby solution remain arbitrarily nearby equilibrium point for all time
- sufficiently nearby solution eventually converge on equilibrium point
![[9 Mathematical Modeling/Images/asymptotic equilibrium stability.png]]

---
### asymptotic equilibrium stability formula
$$
\begin{lgathered}
\forall\epsilon>0,\exists\delta>0,\forall t\ge0:(x_{0},y_{0})\in N_{\delta}(x_{*},y_{*})\implies(x,y)(t)\in N_{\epsilon}(x_{*},y_{*})\land\\
\forall x_{0},y_{0}\in\mathbb R:\lim_{t\rightarrow\infty}(x,y)(t)=(x_{*},y_{*})\\
x_{0},y_{0}=\text{initial condition}\\
N=\text{neighborhood}\\
x_{*},y_{*}=\text{equilibrium point}\\
x,y=\text{solution}\\
t=\text{time}
\end{lgathered}
$$

---
### neutral equilibrium stability
- sufficiently nearby solution remain arbitrarily nearby equilibrium point for all time
- sufficiently nearby solution sometimes converge on equilibrium point
![[9 Mathematical Modeling/Images/neutral equilibrium stability.png]]

---
### neutral equilibrium stability formula
$$
\begin{lgathered}
\forall\epsilon>0,\exists\delta>0,\forall t\ge0:(x_{0},y_{0})\in N_{\delta}(x_{*},y_{*})\implies(x,y)(t)\in N_{\epsilon}(x_{*},y_{*})\land\\
\exists x_{0},y_{0}\in\mathbb R:\lim_{t\rightarrow\infty}(x,y)(t)\ne(x_{*},y_{*})\\
x_{0},y_{0}=\text{initial condition}\\
N=\text{neighborhood}\\
x_{*},y_{*}=\text{equilibrium point}\\
x,y=\text{solution}\\
t=\text{time}
\end{lgathered}
$$

---
### equilibrium instability
- every solution infinitely diverge off equilibrium point
![[9 Mathematical Modeling/Images/equilibrium instability.png]]

---
### equilibrium instability formula
$$
\begin{lgathered}
\exists\epsilon>0,\forall\delta>0,\forall t\ge0:(x_{0},y_{0})\in N_{\delta}(x_{*},y_{*})\land(x,y)(t)\not\in N_{\epsilon}(x_{*},y_{*})\land\\
\forall x_{0},y_{0}\in\mathbb R:\lim_{t\rightarrow\infty}(x,y)(t)\ne(x_{*},y_{*})\\
x_{0},y_{0}=\text{initial condition}\\
N=\text{neighborhood}\\
x_{*},y_{*}=\text{equilibrium point}\\
x,y=\text{solution}\\
t=\text{time}
\end{lgathered}
$$

---
### periodic solution
- repeating solution with closed orbit
![[9 Mathematical Modeling/Images/periodic solution.png]]

---
### periodic solution formula
$$
\begin{lgathered}
\forall t\ge0:(x,y)(t+P)=(x,y)(t)\\
x,y=\text{solution}\\
t=\text{time}\\
P=\text{period}
\end{lgathered}
$$

---
### asymptotic periodic stability
- sufficiently nearby solution remain arbitrarily nearby equilibrium point for all time
- sufficiently nearby solution eventually converge on periodic solution
![[9 Mathematical Modeling/Images/asymptotic periodic stability.png]]

---
### asymptotic periodic stability formula
$$
\begin{lgathered}
\forall\epsilon>0,\exists\delta>0,\forall t\ge0:(x_{0},y_{0})\in N_{\delta}(x_{*},y_{*})\implies(x,y)(t)\in N_{\epsilon}(x_{*},y_{*})\land\\
\forall x_{0},y_{0}\in\mathbb R:\lim_{t\rightarrow\infty}(x,y)(t)=(x_{*},y_{*})\\
x_{0},y_{0}=\text{initial condition}\\
N=\text{neighborhood}\\
x_{*},y_{*}=\text{equilibrium point}\\
x,y=\text{solution}\\
t=\text{time}
\end{lgathered}
$$

---
### neutral periodic stability
- sufficiently nearby solution remain arbitrarily nearby equilibrium point for all time
- sufficiently nearby solution sometimes converge on periodic solution
![[9 Mathematical Modeling/Images/neutral periodic stability.png]]

---
### neutral periodic stability formula
$$
\begin{lgathered}
\forall\epsilon>0,\exists\delta>0,\forall t\ge0:(x_{0},y_{0})\in N_{\delta}(x_{*},y_{*})\implies(x,y)(t)\in N_{\epsilon}(x_{*},y_{*})\land\\
\exists x_{0},y_{0}\in\mathbb R:\lim_{t\rightarrow\infty}(x,y)(t)\ne(x_{*},y_{*})\\
x_{0},y_{0}=\text{initial condition}\\
N=\text{neighborhood}\\
x_{*},y_{*}=\text{equilibrium point}\\
x,y=\text{solution}\\
t=\text{time}
\end{lgathered}
$$

---
### periodic instability
- every solution infinitely diverge off periodic solution
![[9 Mathematical Modeling/Images/periodic instability.png]]

---
### periodic instability formula
$$
\begin{lgathered}
\exists\epsilon>0,\forall\delta>0,\exists t\ge0:(x_{0},y_{0})\in N_{\delta}(x_{*},y_{*})\land(x,y)(t)\not\in N_{\epsilon}(x_{*},y_{*})\land\\
\forall x_{0},y_{0}\in\mathbb R:\lim_{t\rightarrow\infty}(x,y)(t)\ne(x_{*},y_{*})\\
x_{0},y_{0}=\text{initial condition}\\
N=\text{neighborhood}\\
x_{*},y_{*}=\text{equilibrium point}\\
x,y=\text{solution}\\
t=\text{time}
\end{lgathered}
$$

---
### linearity
- superposition
- matrix
- zero

---
### linearity formula
$$
\begin{lgathered}
f(ax+by)=af(x)+bf(y)\\
\exists A\in\mathcal M:\frac{dv}{dt}=Av\\
f(0)=0
\end{lgathered}
$$

---
### linear system
- dynamical system with linearity

---
### linear system formula
$$
\begin{lgathered}
(\frac{dx}{dt}=ax+by)\land(\frac{dy}{dt}=cx+dy)\implies\frac{dv}{dt}=Av\\
A=\begin{bmatrix}
a&b\\
c&d\\
\end{bmatrix}\\
v=[x,y]\\
x,y,v=\text{solution}\\
t=\text{time}\\
a,b,c,d=\text{coefficient}
\end{lgathered}
$$

---
### nondegenerate system
- nonzero determinant of coefficient matrix generate single equilibrium point

---
### nondegenerate system formula
$$
\begin{lgathered}
\det(A)\ne0\implies\#v_{*}=1\\
A=\text{coefficient matrix}\\
v_{*}=\text{equilibrium point}
\end{lgathered}
$$

---
### degenerate system
- zero determinant of coefficient matrix generate infinite equilibrium point

---
### degenerate system formula
$$
\begin{lgathered}
\det(A)=0\implies\#v_{*}=\infty\\
A=\text{coefficient matrix}\\
v_{*}=\text{equilibrium point}
\end{lgathered}
$$

---
### distinct real eigenvalues
- general solution of linear system equal eigenvectors of coefficient matrix with distinct real eigenvalues

---
### distinct real eigenvalues formula
$$
\begin{lgathered}
v(t)=C_{1}e^{\lambda_{1}t}\hat u_{1}+C_{2}e^{\lambda_{2}t}\hat u_{2}\\
v=[x,y]\\
A=\begin{bmatrix}
a&b\\
c&d\\
\end{bmatrix}\\
v=\text{solution}\\
t=\text{time}\\
a,b,c,d=\text{coefficient}\\
\lambda=\text{eigenvalue}\\
\hat u=\text{eigenvector}
\end{lgathered}
$$

---
### distinct real eigenvalues property
- two negative eigenvalues equal asymptotically stable node
- two opposite eigenvalues equal unstable saddle
- two positive eigenvalues equal unstable node
![[9 Mathematical Modeling/Images/distinct real eigenvalues property.png]]

---
### distinct real eigenvalues property formula
$$
\begin{lgathered}
\lambda_{1},\lambda_{2}<0\implies\forall v_{0}\in\mathbb R^{2}:\lim_{t\rightarrow\infty}v(t)=v_{*}\\
(\lambda_{1}>0)\land(\lambda_{2}<0)\implies\forall v_{0}\in\mathbb R^{2}:\lim_{t\rightarrow\infty}v(t)\ne v_{*}\\
\lambda_{1},\lambda_{2}>0\implies\forall v_{0}\in\mathbb R^{2}:\lim_{t\rightarrow\infty}v(t)\ne v_{*}
\end{lgathered}
$$

---
### repeated real eigenvalues
- general solution of linear system equal eigenvectors of coefficient matrix with repeated real eigenvalues
![[9 Mathematical Modeling/Images/repeated real eigenvalues.png]]

---
### repeated real eigenvalues formula
$$
\begin{lgathered}
\hat u_{1}\ne\hat u_{2}\implies v(t)=e^{\lambda t}(C_{1}\hat u_{1}+C_{2}\hat u_{2})\\
\hat u_{1}=\hat u_{2}\implies v(t)=C_{1}e^{\lambda t}\hat u+C_{2}e^{\lambda t}(\hat ut+\hat w)\land(A-\lambda I)\hat w=\hat u\\
v=[x,y]\\
A=\begin{bmatrix}
a&b\\
c&d\\
\end{bmatrix}\\
v=\text{solution}\\
t=\text{time}\\
a,b,c,d=\text{coefficient}\\
\lambda=\text{eigenvalue}\\
\hat u=\text{eigenvector}\\
\hat w=\text{generalized eigenvector}
\end{lgathered}
$$

---
### repeated real eigenvalues property
- single negative eigenvalue equal asymptotically stable node
- single positive eigenvalue equal unstable node
- single eigenvector equal improper node

---
### repeated real eigenvalues property formula
$$
\begin{lgathered}
\lambda<0\implies\forall v_{0}\in\mathbb R^{2}:\lim_{t\rightarrow\infty}v(t)=v_{*}\\
\lambda>0\implies\forall v_{0}\in\mathbb R^{2}:\lim_{t\rightarrow\infty}v(t)\ne v_{*}\\
\end{lgathered}
$$

---
### complex eigenvalues
- general solution of linear system equal eigenvectors of coefficient matrix with complex eigenvalues
![[9 Mathematical Modeling/Images/complex eigenvalues.png]]

---
### complex eigenvalues formula
$$
\begin{lgathered}
v(t)=C_{1}e^{\alpha t}(\gamma\cos\beta t-\lambda\sin\beta t)+C_{2}e^{\alpha t}(\gamma\cos\beta t+\lambda\sin\beta t)\\
\alpha=0\implies v(t)=v_{0}(\cos\beta t+\frac{A\sin\beta t}{\beta})\\
v=\text{solution}\\
t=\text{time}\\
\alpha=\text{real eigenvalue part}\\
\beta=\text{imaginary eigenvalue part}\\
\gamma=\text{real eigenvector part}\\
\lambda=\text{imaginary eigenvector part}\\
A=\text{coefficient matrix}\\
v_{0}=\text{initial condition}
\end{lgathered}
$$

---
### complex eigenvalues property
- negative real eigenvalue part equal asymptotically stable spiral
- zero real eigenvalue part equal neutrally stable center
- positive real eigenvalue part equal unstable spiral

---
### complex eigenvalues property formula
$$
\begin{lgathered}
\alpha<0\implies\forall v_{0}\in\mathbb R^{2}:\lim_{t\rightarrow\infty}v(t)=v_{*}\\
\alpha=0\implies\exists v_{0}\in\mathbb R^{2}:\lim_{t\rightarrow\infty}v(t)\ne v_{*}\\
\alpha>0\implies\forall v_{0}\in\mathbb R^{2}:\lim_{t\rightarrow\infty}v(t)\ne v_{*}
\end{lgathered}
$$

---
