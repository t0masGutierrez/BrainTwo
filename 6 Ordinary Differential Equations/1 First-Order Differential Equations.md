### ordinary differential equation
- equation involving unknown function and its derivatives

---
### ordinary differential equation formula
$$
\begin{aligned}
f(t,y,\frac{dy}{dt},\dots,\frac{d^{n}y}{dt^{n}})=0\\
t=\text{independent variable}\\
y=\text{solution}
\end{aligned}
$$

---
### 1st-order ode
- ordinary differential equation where the highest derivative equal 1

---
### 1st-order ode formula
$$
\begin{aligned}
\frac{dy}{dt}=f(t,y)\\
t=\text{independent variable}\\
y=\text{solution}
\end{aligned}
$$

---
### general solution of 1st-order ode
- family of functions with arbitrary constants that satisfy the differential equation

---
### general solution of 1st-order ode formula
$$
\begin{aligned}
y(t)=\phi(t,C)\\
t=\text{independent variable}\\
C=\text{constant}
\end{aligned}
$$

---
### particular solution of 1st-order ode
- single function with initial conditions that satisfy the differential equation

---
### particular solution of 1st-order ode formula
$$
\begin{aligned}
y(t)=\phi(t,t_{0},y_{0})\\
t=\text{independent variable}\\
t_{0},y_{0}=\text{initial condition}
\end{aligned}
$$

---
### separable ode
- its possible to separate the variables on different sides of the equation

---
### separable ode formula
$$
\begin{aligned}
\frac{dy}{dt}=\frac{g(t)}{f(y)}\\
y=\text{solution}\\
t=\text{independent variable}
\end{aligned}
$$

---
### general solution of separable ode formula
$$
\begin{aligned}
\int f(y)dy=\int g(t)dt\\
y=\text{solution}\\
t=\text{independent variable}
\end{aligned}
$$

---
### particular solution of separable ode formula
$$
\begin{aligned}
\int_{y_{0}}^{y}f(r)dr=\int_{t_{0}}^{t}g(s)ds\\
y=\text{solution}\\
r,s=\text{dummy variable}\\
t=\text{independent variable}
\end{aligned}
$$

---
### homogeneous ode
- RHS equal zero

---
### homogeneous ode formula
$$
\begin{aligned}
f(t,y,\frac{dy}{dt})=0\\
t=\text{independent variable}\\
y=\text{solution}
\end{aligned}
$$

---
### nonhomogeneous ode
- RHS equal nonzero

---
### nonhomogeneous ode formula
$$
\begin{aligned}
f(t,y,\frac{dy}{dt})\ne0\\
t=\text{independent variable}\\
y=\text{solution}
\end{aligned}
$$

---
### linear ode
- unknown function and its derivatives of degree 1
- unknown function and its derivatives are not products
- unknown function and its derivatives are not independent variables of nonlinear function
- unknown function is dependent variable of coefficients

---
### linear ode formula
$$
\begin{aligned}
\frac{dy}{dt}+a(t)y(t)=b(t)\\
y=\text{solution}\\
t=\text{independent variable}\\
a=\text{coefficient}\\
\end{aligned}
$$

---
### general solution of 1st-order homogeneous linear ode formula
$$
\begin{aligned}
y(t)=C\exp(-\int a(t)dt)\\
C=\text{constant}\\
a=\text{coefficient}\\
t=\text{independent variable}
\end{aligned}
$$

---
### particular solution of 1st-order homogeneous linear ode formula
$$
\begin{aligned}
y(t)=y(t_{0})\exp(-\int_{t_{0}}^{t}a(r)dr)\\
t_{0}=\text{initial condition}\\
t=\text{independent variable}\\
a=\text{coefficient}\\
r=\text{dummy variable}
\end{aligned}
$$

---
### integrating factor
- ode multiplication with integrating factor equal derivative of product

---
### integrating factor formula
$$
\begin{aligned}
\mu=\exp(\int a(t)dt)\implies\frac{d}{dt}[\mu y]=\mu(t)\frac{dy}{dt}+\mu(t)a(t)y(t)\\
\mu=\text{integrating factor}\\
t=\text{independent variable}\\
a=\text{coefficient}\\
y=\text{solution}
\end{aligned}
$$

---
### general solution of 1st-order nonhomogeneous linear ode formula
$$
\begin{aligned}
y(t)=\frac{1}{\mu(t)}(C+\int\mu(t)b(t)dt)\\
\mu=\text{integrating factor}\\
t=\text{independent variable}\\
C=\text{constant}
\end{aligned}
$$

---
### particular solution of 1st-order nonhomogeneous linear ode formula
$$
\begin{aligned}
y(t)=\frac{1}{\mu(t)}[y(t_{0})+\int_{t_{0}}^{t}\mu(r)b(r)dr]\\
\mu=\text{integrating factor}\\
t=\text{independent variable}\\
t_{0}=\text{initial condition}\\
r=\text{dummy variable}
\end{aligned}
$$

---
### exact ode
- ode with equal partial derivatives

---
### exact ode formula
$$
\begin{aligned}
\frac{\partial M}{\partial y}=\frac{\partial N}{\partial t}\implies d\Phi=M(t,y)dt+N(t,y)dy\\
M(t,y)dt+N(t,y)dy=0\\
t=\text{independent variable}\\
y=\text{solution}\\
\Phi=\text{potential function}
\end{aligned}
$$

---
### general solution of exact ode formula
$$
\begin{aligned}
\Phi(t,y)=\int M(t,y)dt+\int\left(N(t,y)-\frac{\partial}{\partial y}\int M(t,y)dt\right)dy\\
M=\frac{\partial\Phi}{\partial t}\\
N=\frac{\partial\Phi}{\partial y}\\
\Phi=\text{potential function}\\
t=\text{independent variable}\\
y=\text{solution}\\
C=\text{constant}
\end{aligned}
$$

---
### particular solution of exact ode formula
$$
\begin{aligned}
\Phi(t,y)=\Phi(t_{0},y_{0})=C\\
M=\frac{\partial\Phi}{\partial t}\\
N=\frac{\partial\Phi}{\partial y}\\
\Phi=\text{potential function}\\
t=\text{independent variable}\\
y=\text{solution}\\
t_{0},y_{0}=\text{initial condition}\\
C=\text{constant}
\end{aligned}
$$

---
