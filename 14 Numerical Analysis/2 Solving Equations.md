### bisection method
- if continuous function and bracketing interval then there exists root such that the function at root equal zero
- find root by repeatedly halving interval and choosing endpoint with opposite sign

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
f(c_n)=0\implies x_n=c_n
\end{aligned}
$$

---
### bisection error
- absolute distance between root and computed number

---
### bisection error formula
$$
\begin{aligned}
|r-x_c|\le\frac{b_0-a_0}{2^{n+1}}\\
|r-x_c|<\frac{1}{2}\times10^{-p}\implies n>\frac{\log(b-a)+p}{\log(2)}\\
r=\text{root}\\
x_c=\text{computed number}\\
a,b=\text{real number}\\
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
### term
- definition

---
### term
- definition

---
