### bracketing interval
- interval whose endpoints have function values with opposite signs

---
### bracketing interval formula
$$
\begin{aligned}
{}[a,b],\quad f(a)f(b)<0\\
a,b=\text{endpoint}\\
f=\text{function}
\end{aligned}
$$

---
### bisection method
- repeatedly halve bracketing interval and choose endpoint with opposite sign
![](14%20Numerical%20Analysis/Images/bisection%20method.png)

---
### bisection method formula
$$
\begin{aligned}
{}[a_0,b_0]\\
c_n=\frac{a_n+b_n}{2}\\
n=0,1,2,\dots\\
{}[a_{n+1},b_{n+1}]=\begin{cases}
{}[a_n,c_n],\quad f(a_n)f(c_n)<0\\
{}[c_n,b_n],\quad f(c_n)f(b_n)<0
\end{cases}\\
f(c_n)=0\implies r_c=c_n
\end{aligned}
$$

---
### bisection error
- absolute distance between true root and bisected root

---
### bisection error formula
$$
\begin{aligned}
|r-r_c|\le\frac{b-a}{2^{n+1}}\\
|r-r_c|<\frac{1}{2}\times10^{-p}\implies n>\frac{\log(b-a)+p}{\log(2)}\\
r=\text{true root}\\
r_c=\text{computed root}\\
a,b=\text{endpoint}\\
n=\text{number of iterations}\\
p=\text{exponent}
\end{aligned}
$$

---
### bisection complexity
- number of function evaluations

---
### bisection complexity formula
$$
\begin{aligned}
T(n)=n+2
\end{aligned}
$$

---
### fixed point
- value thats invariant under function

---
### fixed point formula
$$
\begin{aligned}
x=f(x)\\
x=\text{fixed point}\\
f=\text{continuous function}
\end{aligned}
$$

---
### fixed point method
- repeatedly evaluate function at previous output until input equal output
![300](14%20Numerical%20Analysis/Images/fixed%20point%20method.png)

---
### fixed point method formula
$$
\begin{aligned}
x_0\\
x_{n+1}=g(x_n)\\
n=0,1,2,\dots\\
\forall\epsilon>0,\exists N\in\mathbb N,\forall n\ge N:|x_{n+1}-x_n|<\epsilon\implies\\
r_c=\lim_{n\rightarrow\infty}x_{n+1}=\lim_{n\rightarrow\infty}g(r_c)=g(r_c)
\end{aligned}
$$

---
### fixed point convergence
- linear convergence
- general convergence

---
### fixed point convergence formula
$$
\begin{aligned}
0<|g'(r)|<1\implies\lim_{n\rightarrow\infty}\frac{|x_{n+1}-r|}{|x_n-r|}=|g'(r)|<\infty\\
g(r)=g'(r)=g''(r)=\dots=g^{(p-1)}(r)=0\ne g^{(p)}(r)\implies\lim_{n\rightarrow\infty}\frac{|x_{n+1}-r|}{|x_n-r|^p}=\frac{|g^{(p)}(r)|}{p!}<\infty\\
\end{aligned}
$$

---
### forward error
- absolute distance between true root and forward root

---
### forward error formula
$$
\begin{aligned}
|r-r_c|\\
r=\text{true root}\\
r_c=\text{computed root}
\end{aligned}
$$

---
### backward error
- absolute distance between zero and computed number

---
### backward error formula
$$
\begin{aligned}
|f(r_c)|\\
r_c=\text{computed root}
\end{aligned}
$$

---
### simple root
- multiplicity of root equal 1

---
### simple root formula
$$
\begin{aligned}
f(r)=0\ne f'(r)\\
r=\text{true root}
\end{aligned}
$$

---
### multiple root
- first nonzero derivative at root equal multiplicity of root

---
### multiple root formula
$$
\begin{aligned}
f(r)=f'(r)=f''(r)=\dots=f^{(m-1)}(r)=0\ne f^{(m)}(r)\\
r=\text{true root}\\
m=\text{multiplicity}
\end{aligned}
$$

---
### perturbed equation
- equation containing small nonnegative parameter

---
### perturbed equation formula
$$
\begin{aligned}
f(x)+\epsilon g(x)=0\\
\epsilon=\text{parameter}
\end{aligned}
$$

---
### root sensitivity
- if small change of function equal small change of root then well-conditioned
- if small change of function equal large change of root then ill-conditioned

---
### root sensitivity formula
$$
\begin{aligned}
\Delta r\approx\frac{g(r)}{f'(r)}\epsilon\\
m>1\implies\Delta r=
r=\text{root}\\
f=\text{function}\\
\epsilon=\text{parameter}
\end{aligned}
$$

---
### error magnification
- ratio between relative forward error and relative backward error

---
### error magnification formula
$$
\begin{aligned}
\kappa=\frac{g(r)}{|rf'(r)|}\\
r=\text{true root}
\end{aligned}
$$

---
