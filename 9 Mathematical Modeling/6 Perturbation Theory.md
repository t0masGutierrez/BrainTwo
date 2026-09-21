### perturbed equation
- equation containing small nonnegative parameter

---
### perturbed equation formula
$$
\begin{aligned}
f(t,x,\epsilon)\\
0\le\epsilon\ll1\\
f=\text{perturbed equation}\\
t=\text{time}\\
x=\text{solution}\\
\epsilon=\text{parameter}
\end{aligned}
$$

---
### algebraic equation
- equation involving functions of unknown solution

---
### algebraic equation formula
$$
\begin{aligned}
y=f(t,x,\epsilon)\\
f=\text{perturbed equation}\\
t=\text{time}\\
x=\text{solution}\\
\epsilon=\text{parameter}
\end{aligned}
$$

---
### differential equation
- equation involving derivatives of unknown solution

---
### differential equation formula
$$
\begin{aligned}
\frac{dx}{dt}=f(t,x,\epsilon)\\
x(t_{0},\epsilon)=x_{0}(\epsilon)\\
t\ge0\\
f=\text{perturbed equation}\\
t=\text{time}\\
x=\text{solution}\\
\epsilon=\text{parameter}
\end{aligned}
$$

---
### regular
- every solution of perturbed equation with positive parameter equal solution of perturbed equation with zero parameter

---
### regular formula
$$
\begin{aligned}
(\epsilon>0)\land(\#f(t,x,\epsilon)=k)\implies(\epsilon=0)\land(\#f(t,x,\epsilon)=k)\\
f=\text{perturbed equation}\\
t=\text{time}\\
x=\text{solution}\\
\epsilon=\text{parameter}\\
k=\text{number of solutions}
\end{aligned}
$$

---
### singular
- there exists solution of perturbed equation with positive parameter that's not solution of perturbed equation with zero parameter

---
### singular formula
$$
\begin{aligned}
(\epsilon>0)\land(\#f(t,x,\epsilon)=k)\implies(\epsilon=0)\land(\#f(t,x,\epsilon)\ne k)\\
f=\text{perturbed equation}\\
t=\text{time}\\
x=\text{solution}\\
\epsilon=\text{parameter}\\
k=\text{number of solutions}
\end{aligned}
$$

---
### analytic
- there exists limit of power series near point

---
### analytic formula
$$
\begin{aligned}
f(t,x,\epsilon)=\sum_{i,j,k=0}^{\infty}c_{\text{ijk}}(t-t_{0})^{i}(x-x_{0})^{j}(\epsilon-\epsilon_{0})^{k}\\
|t-t_{0}|<\sigma,|x-x_{0}|<\eta,|\epsilon-\epsilon_{0}|<\rho\\
f=\text{perturbed equation}\\
t=\text{time}\\
x=\text{solution}\\
\epsilon=\text{parameter}\\
c=\text{coefficient}\\
\sigma,\eta,\rho=\text{radius of convergence}
\end{aligned}
$$

---
### function notation
- asymptotic behavior of function as parameter approaches limit

---
### function notation formula
$$
\begin{aligned}
f(\epsilon)=\sum_{n=0}^{\infty}c_{n}\epsilon^{n}\\
\frac{f(\epsilon)}{\epsilon^{r}}=\sum_{n=0}^{\infty}c_{n}\epsilon^{n-r}\\
f=\text{perturbed equation}\\
c=\text{coefficient}\\
\epsilon=\text{parameter}
\end{aligned}
$$

---
### big-O notation
- size of function lesser or equal big-O

---
### big-O notation formula
$$
\begin{aligned}
\lim_{\epsilon\rightarrow0}|\frac{f(\epsilon)}{\epsilon^{r}}|\le C\implies f(\epsilon)\le O(\epsilon^{r})\\
f=\text{perturbed equation}\\
\epsilon=\text{parameter}\\
C=\text{constant}\\
r=\text{order}
\end{aligned}
$$

---
### little-o notation
- size of function much lesser little-o

---
### little-o notation formula
$$
\begin{aligned}
\lim_{\epsilon\rightarrow0}\frac{f(\epsilon)}{\epsilon^{r}}=0\implies f(\epsilon)\ll o(\epsilon^{r})\\
f=\text{perturbed equation}\\
\epsilon=\text{parameter}\\
o=\text{order}
\end{aligned}
$$

---
### mclaurin series
- approximate function of parameter near zero as infinite polynomial

---
### mclaurin series formula
$$
\begin{aligned}
f(\epsilon)=\sum_{n=0}^{\infty}\frac{f^{(n)}(0)}{n!}\epsilon^{n}\\
f=\text{perturbed equation}\\
f^{n}=\text{nth derivative}\\
\epsilon=\text{parameter}
\end{aligned}
$$

---
### regular algebraic equation
- solve perturbed algebraic equation for 0th order variable
- substitute series solution into variable
- collect coefficient of ith order epsilon
- solve perturbed algebraic equation for 1st order variable
- ith order variable equal coefficient of ith order epsilon
![[9 Mathematical Modeling/Images/regular algebraic equation.png]]

---
### regular algebraic equation formula
$$
\begin{aligned}
F(x,\epsilon)=0\\
x(\epsilon_{0})=x_{0}\\
0\le\epsilon\ll1\\
F=\text{regular algebraic equation}\\
x=\text{solution}\\
\epsilon=\text{parameter}
\end{aligned}
$$

---
### regular algebraic property
- perturbed algebraic equation equal regular algebraic equation

---
### regular algebraic property formula
$$
\begin{aligned}
\frac{\partial F}{\partial x}(x_{0},\epsilon_{0})\ne0\\
F=\text{algebraic equation}\\
x=\text{solution}\\
\epsilon=\text{parameter}
\end{aligned}
$$

---
### simple root
- solution of algebraic equation equal integer power series

---
### simple root formula
$$
\begin{aligned}
\frac{\partial F}{\partial x}(x_{0},\epsilon_{0})\ne0\implies x(\epsilon)=\sum_{n=0}^{\infty}x_{n}\epsilon^{n}\\
F=\text{algebraic equation}\\
x=\text{solution}\\
\epsilon=\text{parameter}
\end{aligned}
$$

---
### multiple root
- solution of algebraic equation equal rational power series

---
### multiple root formula
$$
\begin{aligned}
\frac{\partial F}{\partial x}(x_{0},\epsilon_{0})=0\implies x(\delta)=\sum_{n=0}^{\infty}x_{n}\delta^{n}\\
\delta=\epsilon^{1/m}\\
F=\text{algebraic equation}\\
x=\text{solution}\\
\epsilon=\text{parameter}\\
m=\text{multiplicity}
\end{aligned}
$$

---
### regular differential equation
- solve perturbed differential equation for 0th order variable
- substitute series solution into variable
- collect coefficient of ith order epsilon
- solve perturbed differential equation for 1st order variable
- ith order variable equal coefficient of ith order epsilon
![[9 Mathematical Modeling/Images/regular differential equation.png]]

---
### regular differential equation formula
$$
\begin{aligned}
\frac{du}{dt}=F(t,u,\epsilon)\\
u(t_{0},\epsilon)=u_{0}(\epsilon)\\
0\le\epsilon\ll1\\
t\ge0\\
F=\text{regular differential equation}\\
u=\text{solution}\\
\epsilon=\text{parameter}
\end{aligned}
$$

---
### regular differential property
- perturbed differential equation equal regular differential equation

---
### regular differential property formula
$$
\begin{aligned}
\frac{\partial F}{\partial u'}(t_{0},u_{0},u_{0}',\epsilon_{0})\ne0\\
F=\text{algebraic equation}\\
u=\text{solution}\\
\epsilon=\text{parameter}
\end{aligned}
$$

---
### secularity
- forcing term equal frequency of homogeneous solution therefore unbounded growth over time destroy the periodicity of solution

---
### secularity formula
$$
\begin{aligned}
x_{1}''+x_{1}=f_{1}(t)\in\text{span}\set{\cos t,\sin t}\implies t\cos\omega t,t\sin\omega t\subset x_{1}(t)\\
x=\text{solution}\\
f=\text{force}\\
t=\text{time}\\
\omega=\text{frequency}
\end{aligned}
$$

---
### poincare-lindstedt
- rescale time
- solve perturbed equation for 0th order variable
- expand frequency in powers of epsilon
- expand solution in powers of epsilon
- substitute series solution into variable
- collect coefficient of ith order epsilon
- solve perturbed equation for 1st order variable
- eliminate secularity with 1st order frequency such that coefficient of resonant term equal zero
- ith order variable equal coefficient of ith order epsilon
- approximate periodic solution of nonlinear differential equation

---
### poincare-lindstedt formula
$$
\begin{aligned}
x''(t)+x(t)=\epsilon f(t,x,x'')\\
0\le\epsilon\ll1\\
\tau=\omega(\epsilon)t\\
\omega(\epsilon)=\sum_{n=1}^{\infty}\omega_{n}\epsilon^{n}\\
x(t)=\sum_{n=1}^{\infty}x_{n}(\tau)\epsilon^{n}
\end{aligned}
$$

---
### singular algebraic equation
- solve regular algebraic equation
- change of variable
- substitute change of variable
- solve scaling factor such that two dominant term equal exponent
- substitute scaling factor
- divide leading coefficient and remaining epsilon order equal epsilon order of series solution
- solve regular algebraic equation
- inverse change of variable

---
### singular algebraic equation formula
$$
\begin{aligned}
F(x,\epsilon)=0\\
x(\epsilon_{0})=x_{0}\\
x=\epsilon^{-n}y\\
0\le\epsilon\ll1\\
F=\text{singular algebraic equation}\\
x=\text{solution}\\
y=\text{change of variable}\\
\epsilon=\text{parameter}
\end{aligned}
$$

---
### outer problem
- reduced equation governing the slow varying behavior outside the boundary layer

---
### outer problem formula
$$
\begin{aligned}
\epsilon y''+\phi(x)y'=f(x)\\
a\le x\le b\\
\epsilon=0\implies\phi(x)y'=f(x)\\
\phi(x)>0\implies q_{\text{in}}=a\\
\phi(x)<0\implies q_{\text{in}}=b\\
y(q_{\text{out}})=Ce^{rq_{\text{out}}}\\
y_{\text{out}}(x)
\end{aligned}
$$

---
### inner problem
- rescaled equation governing the fast varying behavior inside the boundary layer

---
### inner problem formula
$$
\begin{aligned}
\epsilon y''+\phi(x)y'=f(x)\\
\tau=\frac{x-q_{\text{in}}}{\epsilon^{n}}\\
\frac{1}{\epsilon^{2n}}(\frac{d^{2}y}{d\tau^{2}})+\frac{\phi(x)}{\epsilon^{n}}(\frac{dy}{d\tau})=f(x)\\
y(q_{\text{in}})=Ae^{r_{1}q_{\text{in}}}+Be^{r_{2}q_{\text{in}}}\\
y_{\text{in}}(\tau)
\end{aligned}
$$

---
### matching problem
- enforce agreement between inner solution and outer solution within overlapping region

---
### matching problem formula
$$
\begin{aligned}
\lim_{x\rightarrow0^{+}}y_{\text{out}}(x)=\lim_{\tau\rightarrow\infty}y_{\text{in}}(\tau)\\
y_{\text{out}}=\text{outer solution}\\
y_{\text{in}}=\text{inner solution}
\end{aligned}
$$

---
### singular differential equation
- solve the outer problem
- locate the boundary layer
- solve the constant of integration
- change of variable
- solve the scaling factor
- substitute the scaling factor
- solve the inner problem
- solve the matching problem
- inverse change of variable
- composite solution equal single equation with multiple scale
![[9 Mathematical Modeling/Images/singular differential equation.png]]

---
### singular differential equation formula
$$
\begin{aligned}
y(x)=y_{\text{out}}(x)+y_{\text{in}}(x)-y_{\text{match}}(x)\\
y_{\text{out}}=\text{outer solution}\\
y_{\text{in}}=\text{inner solution}\\
y_{\text{match}}=\text{matching solution}
\end{aligned}
$$

---
