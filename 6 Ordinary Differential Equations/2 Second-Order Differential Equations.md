### 2nd-order ode
- ordinary differential equation where the highest derivative equal 2

---
### 2nd-order ode formula
$$
\begin{aligned}
\frac{d^{2}y}{dt^{2}}=f(t,y,\frac{dy}{dt})\\
t=\text{independent variable}\\
y=\text{solution}
\end{aligned}
$$

---
### 2nd-order linear ode formula
$$
\begin{aligned}
a_{2}(t)y''(t)+a_{1}(t)y'(t)+a_{0}(t)y(t)=b(t)\\
y=\text{solution}\\
t=\text{independent variable}\\
a=\text{coefficient}
\end{aligned}
$$

---
### general solution of 2nd-order homogeneous linear ode formula
$$
\begin{aligned}
y(t)=C_{1}y_{1}(t)+C_{2}y_{2}(t)\\
C=\text{constant}\\
t=\text{independent variable}\\
y=\text{solution}
\end{aligned}
$$

---
### general solution of 2nd-order nonhomogeneous linear ode formula
$$
\begin{aligned}
y(t)=y_{h}(t)+y_{p}(t)\\
t=\text{independent variable}\\
y_{h}=\text{homogeneous solution}\\
y_{p}=\text{particular solution}\\
\end{aligned}
$$

---
### linear transformation
- function of vector space thats closed under vector addition and scalar multiplication

---
### linear transformation formula
$$
\begin{aligned}
L[y_{1}+y_{2}]=L[y_{1}]+L[y_{2}]\\
L[cy]=cL[y]
\end{aligned}
$$

---
### linear transformation property
- linear combination of homogeneous linear ode solution equal solution

---
### linear transformation property formula
$$
\begin{aligned}
L[y_{1}]=L[y_{2}]=0\implies L[C_{1}y_{1}+C_{2}y_{2}]=0\\
L=\text{linear transformation}\\
y=\text{solution}\\
C=\text{constant}
\end{aligned}
$$

---
### linear independence
- zero not expressible as nontrivial linear combination of the solutions of ode

---
### linear independence formula
$$
\begin{aligned}
C_{1}y_{1}(t)+C_{2}y_{2}(t)=0\implies C_{1}=C_{2}=0\\
C=\text{constant}\\
y=\text{solution}\\
t=\text{independent variable}
\end{aligned}
$$

---
### wronskian
- nonzero wronskian equal linear independence

---
### wronskian formula
$$
\begin{aligned}
W[y_{1},y_{2}](t)=\begin{vmatrix}y_{1}&y_{2}\\y_{1}'&y_{2}'\end{vmatrix}=y_{1}y_{2}'-y_{2}y_{1}'\\
y=\text{solution}\\
t=\text{independent variable}
\end{aligned}
$$

---
### fundamental set
- pair of linearly independent solutions of ode

---
### fundamental set formula
$$
\begin{aligned}
L[y_{1}]=L[y_{2}]=0\ne W[y_{1},y_{2}](t)\implies\mathcal F=\set{y_{1},y_{2}}\\
L=\text{linear transformation}\\
y=\text{solution}\\
W=\text{wronskian}\\
t=\text{independent variable}\\
\mathcal F=\text{fundamental set}
\end{aligned}
$$

---
### constant coefficient ode
- coefficient of 2nd-order homogeneous linear ode equal real number

---
### constant coefficient ode formula
$$
\begin{aligned}
a_{2}y''(t)+a_{1}y'(t)+a_{0}y(t)=0\\
a=\text{coefficient}\\
y=\text{solution}\\
t=\text{independent variable}
\end{aligned}
$$

---
### characteristic equation
- substitute guess into ode

---
### characteristic equation formula
$$
\begin{aligned}
\begin{cases}
y''=r^{2}\exp(rt)\\
y'=r\exp(rt)\\
y=\exp(rt)\\
\end{cases}\implies a_{2}r^{2}+a_{1}r+a_{0}=0\\
r=\text{root}\\
\exp(rt)=\text{guess}\\
t=\text{independent variable}\\
a=\text{coefficient}
\end{aligned}
$$

---
### general solution of characteristic polynomial
- quadratic formula equal root of characteristic polynomial

---
### general solution of characteristic polynomial formula
$$
\begin{aligned}
r=\frac{-a_{1}\pm\sqrt{a_{1}^{2}-4a_{2}a_{0}}}{2a_{2}}\\
a=\text{coefficient}
\end{aligned}
$$

---
### distinct real roots
- positive discriminant

---
### distinct real roots formula
$$
\begin{aligned}
r_{1}\ne r_{2}\implies y=C_{1}\exp(r_{1}t)+C_{2}\exp(r_{2}t)\\
y=\text{solution}\\
C=\text{constant}\\
r=\text{root}\\
t=\text{independent variable}
\end{aligned}
$$

---
### repeated real roots
- zero discriminant

---
### repeated real roots formula
$$
\begin{aligned}
r_{1}=r_{2}\implies y=\exp(rt)(C_{1}+C_{2}t)\\
y=\text{solution}\\
C=\text{constant}\\
r=\text{root}\\
t=\text{independent variable}
\end{aligned}
$$

---
### complex roots
- negative discriminant

---
### complex roots formula
$$
\begin{aligned}
r=\alpha\pm\beta i\implies y=\exp(\alpha t)(C_{1}\cos\beta t+C_{2}\sin\beta t)\\
y=\text{solution}\\
C=\text{constant}\\
\alpha=\text{real part}\\
\beta=\text{imaginary part}\\
t=\text{independent variable}
\end{aligned}
$$

---
### undetermined coefficients
- method of solving nonhomogeneous linear constant coefficient ode
- guess the form of particular solution based on RHS
- if guess equal term of homogeneous solution then guess multiplication with independent variable until guess not equal term of homogeneous solution
- substitute guess and its derivatives into the ode
- solve undetermined coefficients

---
### undetermined coefficients formula
$$
\begin{aligned}
b(t)=\exp(ct)\implies y_{p}=C\exp(ct)\\
b(t)=\sin ct\lor\cos ct\implies y_{p}=C_{1}\cos(ct)+C_{2}\sin(ct)\\
b(t)=P_{n}(t)\implies y_{p}=C_{0}+C_{1}t+\dots+C_{n}t^{n}\\
\end{aligned}
$$

---
### variation of parameters
- method of solving the particular solution of nonhomogeneous linear constant coefficient ode
- replace constant coefficients with variable coefficients
- solve the variable coefficients
- substitute variable coefficients into the particular solution

---
### variation of parameters formula
$$
\begin{aligned}
y_{p}=u_{1}y_{1}+u_{2}y_{2}\\
u_{1}=-\int\frac{b(t)y_{2}(t)}{W[y_{1},y_{2}](t)}dt\\
u_{2}=\int\frac{b(t)y_{1}(t)}{W[y_{1},y_{2}](t)}dt\\
u=\text{coefficient}\\
y=\text{solution}\\
W=\text{wronskian}
\end{aligned}
$$

---
### series solution
- method of solving the general solution of nonhomogeneous linear variable coefficient ode
- guess the form of general solution equal power series
- compute derivatives of solution
- substitute derivatives of solution into ode
- reindex such that all powers of $x$ equal
- equate sum of coefficients with zero
- solve the recurrence relation

---
### series solution formula
$$
\begin{aligned}
y=\sum_{n=0}^{\infty}a_{n}(x−x_{0})^{n}\\
y'=\sum_{n=1}^{\infty}a_{n}n(x−x_{0})^{n-1}\\
y''=\sum_{n=1}^{\infty}a_{n}n(n-1)(x−x_{0})^{n-2}
\end{aligned}
$$

---
### reduction of order
- method of solving the general solution of homogeneous linear ode given 1 solution

---
### reduction of order formula
$$
\begin{aligned}
y_{2}(t)=y_{1}(t)\int\frac{\exp(-\int a_{1}(t)dt)}{y_{1}(t)^{2}}dt\\
y=\text{solution}\\
t=\text{independent variable}\\
a=\text{coefficient}
\end{aligned}
$$

---
### missing dependent variable
- method of reducing 2nd-order ode without dependent variable

---
### missing dependent variable formula
$$
\begin{aligned}
y''(t)=f(t,y')\\
v(t)=y'(t)\\
v'(t)=f(t,v)
\end{aligned}
$$

---
### missing independent variable
- method of reducing 2nd-order ode without independent variable

---
### missing independent variable formula
$$
\begin{aligned}
y''(t)=f(y,y')\\
v(t)=y'(t)\\
y''(t)=\frac{dv}{dt}=(\frac{dv}{dy})(\frac{dy}{dt})=v\frac{dv}{dy}\\
v\frac{dv}{dy}=f(y,y')
\end{aligned}
$$

---
### cauchy-euler ode
- linear ode where the power of $x$ equal the order of derivative

---
### cauchy-euler ode formula
$$
\begin{aligned}
y=x^{r}\\
a_{2}x^{2}y''(t)+a_{1}xy'(t)+a_{0}y(t)=b(t)\implies a_{2}r(r-1)+a_{1}r+a_{0}=b(t)\\
r_{1}\ne r_{2}\implies y_{h}=C_{1}x^{r_{1}}+C_{2}x^{r_{2}}\\
r_{1}=r_{2}\implies y_{h}=x^{r}(C_{1}+C_{2}\ln|x|)\\
r=\alpha\pm\beta i\implies y_{h}=x^{\alpha}C_{1}\cos\beta\ln|x|+x^{\alpha}C_{2}\sin(\beta\ln|x|
\end{aligned}
$$

---
### energy ode
- linear ode with the form of product rule

---
### energy ode formula
$$
\begin{aligned}
y''(t)=f(y)\\
y'(t)y''(t)=f(y)y'\\
\frac{1}{2}(\frac{dy}{dt})^{2}=\int f(y)dy+C
\end{aligned}
$$

---
