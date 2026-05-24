### dynamical system
- rule that describes the change of state over time

---
### dynamical system formula
$$
\begin{aligned}
\frac{dx}{dt} = f(x, y, c_{1}, \dots, c_{n}) \\
\frac{dy}{dt} = g(x, y, c_{1}, \dots, c_{n}) \\
x(t=0) = x_{0} \\
y(t=0) = y_{0} \\
t \ge 0 \\
x, y = \text{solution} \\
t = \text{time} \\
x_{0}, y_{0} = \text{initial condition} \\
c = \text{parameter}
\end{aligned}
$$

---
### time view
- view solution as curve in the $(t, x)$-plane or $(t, y)$-plane
![[3 Mathematical Modeling/Images/2d time view.png]]

---
### time view formula
$$
\begin{aligned}
\frac{dx}{dt} = f(x, y) \\
\frac{dy}{dt} = g(x, y) \\
f, g = \text{slope} 
\end{aligned}
$$

---
### phase view
- view solution as moving point in the $(x, y)$-plane
![[3 Mathematical Modeling/Images/2d phase view.png]]

---
### phase view formula
$$
\begin{aligned}
v = [f, g] \\
f, g = \text{velocity}
\end{aligned}
$$

---
### solvability property
- for every initial condition there exists unique solution of dynamical system
![[3 Mathematical Modeling/Images/solvability property.png]]

---
### solvability property formula
$$
\begin{aligned}
\forall (x_{0}, y_{0}) \in \mathbb R, \exists t \in (T_{0}, T_{1}): (x, y)(t) \in D = \{(x, y) \in \mathbb R| \exists! (\frac{dx}{dt}, \frac{dy}{dt})\} \\
(t \le T_{0}) \lor (t \ge T_{1}) \implies (x, y)(t) \not\in D = \{(x, y) \in \mathbb R| \exists! (\frac{dx}{dt}, \frac{dy}{dt})\} \\
(x_{0}, y_{0}) \ne (\hat x_{0}, \hat y_{0}) \implies \forall t \in (T_{0}, T_{1}): (x, y)(t) \ne (\hat x, \hat y)(t)
\end{aligned}
$$

---
### vector field
- collection of vectors for all points
![[3 Mathematical Modeling/Images/vector field.png]]

---
### vector field formula
$$
\begin{aligned}
v(t) = \{(\frac{dx}{dt}, \frac{dy}{dt})| x, y \in D\} \\
\frac{dx}{dt}, \frac{dy}{dt} = \text{velocity} \\
D = \text{domain}
\end{aligned}
$$

---
### direction field
- collection of signs for all points
![[3 Mathematical Modeling/Images/direction field.png]]

---
### direction field formula
$$
\begin{aligned}
(f, g)(x, y) = \{(\hat x, \hat y)| x, y \in D\} \\
\hat x, \hat y = \text{unit vector} \\
D = \text{domain}
\end{aligned}
$$

---
### nullcline curve
- set of points such that derivative equal zero
- equilibrium point equal intersection of nullcline curve

---
### nullcline curve formula
$$
\begin{aligned}
F(x, y) = \{(x, y)| \frac{dx}{dt} = 0\} \\
G(x, y) = \{(x, y) | \frac{dy}{dt} = 0\} \\
x, y = \text{solution} \\
t = \text{time} \\
\frac{dx}{dt}, \frac{dy}{dt} = \text{velocity} 
\end{aligned}
$$

---
### path equation
- system of ODEs that determine the path of moving point in the $(x, y)$-plane

---
### path equation formula
$$
\begin{aligned}
\frac{dy}{dx} = \frac{g(x, y)}{f(x, y)} \\
x, y = \text{solution} \\
f, g = \text{velocity}
\end{aligned}
$$

---
### first integral
- general solution of path equation constant along every trajectory

---
### first integral formula
$$
\begin{aligned}
\forall (x, y) \in D: \frac{dE}{dt}(x, y)(t) = 0 \implies E(x, y)(t) = C \\
\frac{\partial}{\partial x}(\phi f) = \frac{\partial}{\partial y}(-\phi g) \implies (\frac{\partial E}{\partial x} = -\phi g) \land (\frac{\partial E}{\partial y} = \phi f) \\
x, y = \text{solution} \\
t = \text{time} \\
D = \text{domain} \\
E = \text{first integral} \\
C = \text{constant} \\
\phi = \text{integrating factor}
\end{aligned}
$$

---
### equilibrium solution
- steady state solution of dynamical system equal zero

---
### equilibrium solution formula
$$
\begin{aligned}
\forall t \ge 0: (x, y)(t) = (x_*, y_*) \iff f(x_*, y_*) = g(x_*, y_*) = 0 \\
x, y = \text{solution} \\
t = \text{time} \\
x_*, y_* = \text{equilibrium point} 
\end{aligned}
$$

---
### equilibrium stability
- behavior of solution near equilibrium point

---
### equilibrium stability formula
$$
\begin{aligned}
N_{\rho}(x_*, y_*) = (x_* - \rho, x_* + \rho) \times (y_* - \rho, y_* + \rho) \\
x_*, y_* = \text{equilibrium point} \\
\rho = \text{radius} 
\end{aligned}
$$

---
### asymptotic equilibrium stability
- sufficiently nearby solution remain arbitrarily nearby equilibrium point for all time
- sufficiently nearby solution eventually converge on equilibrium point
![[3 Mathematical Modeling/Images/asymptotic equilibrium stability.png]]

---
### asymptotic equilibrium stability formula
$$
\begin{aligned}
\forall \epsilon > 0, \exists \delta > 0, \forall t \ge 0: (x_{0}, y_{0}) \in N_{\delta}(x_*, y_*) \implies (x, y)(t) \in N_{\epsilon}(x_*, y_*) \land \\
\forall x_{0}, y_{0} \in \mathbb R: \lim_{t \rightarrow \infty} (x, y)(t) = (x_*, y_*) \\
x_{0}, y_{0} = \text{initial condition} \\
N = \text{neighborhood} \\
x_*, y_* = \text{equilibrium point} \\
x, y = \text{solution} \\
t = \text{time} 
\end{aligned}
$$

---
### neutral equilibrium stability
- sufficiently nearby solution remain arbitrarily nearby equilibrium point for all time
- sufficiently nearby solution sometimes converge on equilibrium point
![[3 Mathematical Modeling/Images/neutral equilibrium stability.png]]

---
### neutral equilibrium stability formula
$$
\begin{aligned}
\forall \epsilon > 0, \exists \delta > 0, \forall t \ge 0: (x_{0}, y_{0}) \in N_{\delta}(x_*, y_*) \implies (x, y)(t) \in N_{\epsilon}(x_*, y_*) \land \\
\exists x_{0}, y_{0} \in \mathbb R: \lim_{t \rightarrow \infty} (x, y)(t) \ne (x_*, y_*) \\
x_{0}, y_{0} = \text{initial condition} \\
N = \text{neighborhood} \\
x_*, y_* = \text{equilibrium point} \\
x, y = \text{solution} \\
t = \text{time} 
\end{aligned}
$$

---
### equilibrium instability
- every solution infinitely diverge off equilibrium point
![[3 Mathematical Modeling/Images/equilibrium instability.png]]

---
### equilibrium instability formula
$$
\begin{aligned}
\exists \epsilon > 0, \forall \delta > 0, \forall t \ge 0: (x_{0}, y_{0}) \in N_{\delta}(x_*, y_*) \land (x, y)(t) \not\in N_{\epsilon}(x_*, y_*) \land \\
\forall x_{0}, y_{0} \in \mathbb R: \lim_{t \rightarrow \infty} (x, y)(t) \ne (x_*, y_*) \\
x_{0}, y_{0} = \text{initial condition} \\
N = \text{neighborhood} \\
x_*, y_* = \text{equilibrium point} \\
x, y = \text{solution} \\
t = \text{time} 
\end{aligned}
$$

---
### periodic solution
- repeating solution with closed orbit
![[3 Mathematical Modeling/Images/periodic solution.png]]

---
### periodic solution formula
$$
\begin{aligned}
\forall t \ge 0: (x, y)(t + P) = (x, y)(t) \\
x, y = \text{solution} \\
t = \text{time} \\
P = \text{period}
\end{aligned}
$$

---
### asymptotic periodic stability
- sufficiently nearby solution remain arbitrarily nearby equilibrium point for all time
- sufficiently nearby solution eventually converge on periodic solution
![[3 Mathematical Modeling/Images/asymptotic periodic stability.png]]

---
### asymptotic periodic stability formula
$$
\begin{aligned}
\forall \epsilon > 0, \exists \delta > 0, \forall t \ge 0: (x_{0}, y_{0}) \in N_{\delta}(x_*, y_*) \implies (x, y)(t) \in N_{\epsilon}(x_*, y_*) \land \\
\forall x_{0}, y_{0} \in \mathbb R: \lim_{t \rightarrow \infty} (x, y)(t) = (x_*, y_*) \\
x_{0}, y_{0} = \text{initial condition} \\
N = \text{neighborhood} \\
x_*, y_* = \text{equilibrium point} \\
x, y = \text{solution} \\
t = \text{time} 
\end{aligned}
$$

---
### neutral periodic stability
- sufficiently nearby solution remain arbitrarily nearby equilibrium point for all time
- sufficiently nearby solution sometimes converge on periodic solution
![[3 Mathematical Modeling/Images/neutral periodic stability.png]]

---
### neutral periodic stability formula
$$
\begin{aligned}
\forall \epsilon > 0, \exists \delta > 0, \forall t \ge 0: (x_{0}, y_{0}) \in N_{\delta}(x_*, y_*) \implies (x, y)(t) \in N_{\epsilon}(x_*, y_*) \land \\
\exists x_{0}, y_{0} \in \mathbb R: \lim_{t \rightarrow \infty} (x, y)(t) \ne (x_*, y_*) \\
x_{0}, y_{0} = \text{initial condition} \\
N = \text{neighborhood} \\
x_*, y_* = \text{equilibrium point} \\
x, y = \text{solution} \\
t = \text{time} 
\end{aligned}
$$

---
### periodic instability
- every solution infinitely diverge off periodic solution
![[3 Mathematical Modeling/Images/periodic instability.png]]

---
### periodic instability formula
$$
\begin{aligned}
\exists \epsilon > 0, \forall \delta > 0, \exists t \ge 0: (x_{0}, y_{0}) \in N_{\delta}(x_*, y_*) \land (x, y)(t) \not\in N_{\epsilon}(x_*, y_*) \land \\
\forall x_{0}, y_{0} \in \mathbb R: \lim_{t \rightarrow \infty} (x, y)(t) \ne (x_*, y_*) \\
x_{0}, y_{0} = \text{initial condition} \\
N = \text{neighborhood} \\
x_*, y_* = \text{equilibrium point} \\
x, y = \text{solution} \\
t = \text{time} 
\end{aligned}
$$

---
### linearity
- superposition
- matrix
- zero

---
### linearity formula
$$
\begin{aligned}
f(ax + by) = af(x) + bf(y) \\
\exists A \in \mathcal M: \frac{dv}{dt} = Av \\
f(0) = 0
\end{aligned}
$$

---
### linear system
- dynamical system with linearity

---
### linear system formula
$$
\begin{aligned}
(\frac{dx}{dt} = ax + by) \land (\frac{dy}{dt} = cx + dy) \implies \frac{dv}{dt} = Av \\
A = \begin{bmatrix} 
a & b \\
c & d \\
\end{bmatrix} \\
v = [x, y] \\
x, y, v = \text{solution} \\
t = \text{time} \\
a, b, c, d = \text{coefficient} 
\end{aligned}
$$

---
### nondegenerate system
- nonzero determinant of coefficient matrix generate single equilibrium point 

---
### nondegenerate system formula
$$
\begin{aligned}
\det(A) \ne 0 \implies \#v_* = 1 \\
A = \text{coefficient matrix} \\
v_* = \text{equilibrium point}
\end{aligned}
$$

---
### degenerate system
- zero determinant of coefficient matrix generate infinite equilibrium point

---
### degenerate system formula
$$
\begin{aligned}
\det(A) = 0 \implies \#v_* = \infty \\
A = \text{coefficient matrix} \\
v_* = \text{equilibrium point}
\end{aligned}
$$

---
### distinct real eigenvalues
- general solution of linear system equal eigenvectors of coefficient matrix with distinct real eigenvalues

---
### distinct real eigenvalues formula
$$
\begin{aligned}
v(t) = C_1e^{\lambda_{1} t}\hat u_{1} + C_2e^{\lambda_{2} t}\hat u_{2} \\
v = [x, y] \\
A = \begin{bmatrix} 
a & b \\
c & d \\
\end{bmatrix} \\
v = \text{solution} \\
t = \text{time} \\
a, b, c, d = \text{coefficient} \\
\lambda = \text{eigenvalue} \\
\hat u = \text{eigenvector}
\end{aligned}
$$

---
### distinct real eigenvalues property
- two negative eigenvalues equal asymptotically stable node
- two opposite eigenvalues equal unstable saddle
- two positive eigenvalues equal unstable node
![[3 Mathematical Modeling/Images/distinct real eigenvalues property.png]]

---
### distinct real eigenvalues property formula
$$
\begin{aligned}
\lambda_{1}, \lambda_{2} < 0 \implies \forall v_{0} \in \mathbb R^2: \lim_{t \rightarrow \infty} v(t) = v_* \\
(\lambda_{1} > 0) \land (\lambda_{2} < 0) \implies \forall v_{0} \in \mathbb R^2: \lim_{t \rightarrow \infty} v(t) \ne v_* \\
\lambda_{1}, \lambda_{2} > 0 \implies \forall v_{0} \in \mathbb R^2: \lim_{t \rightarrow \infty} v(t) \ne v_* 
\end{aligned}
$$

---
### repeated real eigenvalues
- general solution of linear system equal eigenvectors of coefficient matrix with repeated real eigenvalues
![[3 Mathematical Modeling/Images/repeated real eigenvalues.png]]

---
### repeated real eigenvalues formula
$$
\begin{aligned}
\hat u_{1} \ne \hat u_{2} \implies v(t) = e^{\lambda t}(C_{1}\hat u_{1} + C_{2}\hat u_{2}) \\
\hat u_{1} = \hat u_{2} \implies v(t) = C_{1} e^{\lambda t}\hat u + C_2e^{\lambda t}(\hat ut + \hat w) \land (A - \lambda I)\hat w = \hat u \\
v = [x, y] \\
A = \begin{bmatrix} 
a & b \\
c & d \\
\end{bmatrix} \\
v = \text{solution} \\
t = \text{time} \\
a, b, c, d = \text{coefficient} \\
\lambda = \text{eigenvalue} \\
\hat u = \text{eigenvector} \\
\hat w = \text{generalized eigenvector}
\end{aligned}
$$

---
### repeated real eigenvalues property
- single negative eigenvalue equal asymptotically stable node
- single positive eigenvalue equal unstable node 
- single eigenvector equal improper node

---
### repeated real eigenvalues property formula
$$
\begin{aligned}
\lambda < 0 \implies \forall v_{0} \in \mathbb R^2: \lim_{t \rightarrow \infty} v(t) = v_* \\
\lambda > 0 \implies \forall v_{0} \in \mathbb R^2: \lim_{t \rightarrow \infty} v(t) \ne v_* \\
\end{aligned}
$$

---
### complex eigenvalues
- general solution of linear system equal eigenvectors of coefficient matrix with complex eigenvalues
![[3 Mathematical Modeling/Images/complex eigenvalues.png]]

---
### complex eigenvalues formula
$$
\begin{aligned}
v(t) = C_1e^{\alpha t}(\gamma \cos\beta t - \lambda \sin\beta t) + C_2e^{\alpha t}(\gamma \cos\beta t + \lambda \sin\beta t) \\
\alpha = 0 \implies v(t) = v_{0} (\cos\beta t + \frac{A \sin \beta t}{\beta}) \\
v = \text{solution} \\
t = \text{time} \\
\alpha = \text{real eigenvalue part} \\
\beta = \text{imaginary eigenvalue part} \\
\gamma = \text{real eigenvector part} \\
\lambda = \text{imaginary eigenvector part} \\
A = \text{coefficient matrix} \\
v_{0} = \text{initial condition} 
\end{aligned}
$$

---
### complex eigenvalues property
- negative real eigenvalue part equal asymptotically stable spiral
- zero real eigenvalue part equal neutrally stable center
- positive real eigenvalue part equal unstable spiral

---
### complex eigenvalues property formula
$$
\begin{aligned}
\alpha < 0 \implies \forall v_{0} \in \mathbb R^2: \lim_{t \rightarrow \infty} v(t) = v_* \\
\alpha = 0 \implies \exists v_{0} \in \mathbb R^2: \lim_{t \rightarrow \infty} v(t) \ne v_* \\
\alpha > 0 \implies \forall v_{0} \in \mathbb R^2: \lim_{t \rightarrow \infty} v(t) \ne v_* 
\end{aligned}
$$

---
