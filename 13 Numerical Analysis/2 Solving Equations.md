### p decimal place correctness
- approximation correct to p decimal places after rounding

---
### p decimal place correctness formula
$$
\begin{aligned}
|r-r_c|<\frac{1}{2}\times10^{-p}\\
r=\text{real root}\\
r_c=\text{computed root}
\end{aligned}
$$

---
### intermediate value
- if function continuous over closed interval then function encompasses every value between endpoints

---
### intermediate value formula
$$
\begin{aligned}
&f(a)\le N\le f(b)\implies\exists x\in[a,b]:f(x)=N\\
&f=\text{continuous function}\\
&a,b=\text{endpoint}
\end{aligned}
$$

---
### bisection method
- repeatedly halve bracketing interval and choose endpoint with opposite sign
![](13%20Numerical%20Analysis/Images/bisection%20method.png)

---
### bisection method formula
$$
\begin{aligned}
&[a_0,b_0]\\
&c_n=\frac{a_n+b_n}{2}\\
&n=0,1,2,\dots\\
&[a_{n+1},b_{n+1}]=\begin{cases}
&[a_n,c_n],\quad f(a_n)f(c_n)<0\\
&[c_n,b_n],\quad f(c_n)f(b_n)<0
&\end{cases}\\
&f(c_n)=0\implies r_c=c_n
\end{aligned}
$$

---
### bisection convergence
- error decrease by half every iteration

---
### bisection convergence formula
$$
\begin{aligned}
&|r-r_c|\le\frac{b-a}{2^{n+1}}\implies\lim_{n\rightarrow\infty}\frac{e_{n+1}}{e_n}=\frac{1}{2}\\
&n>\frac{\log(b-a)+p}{\log(2)}\implies|r-r_c|<\frac{1}{2}\times10^{-p}\\
&r=\text{real root}\\
&r_c=\text{computed root}\\
&e=\text{absolute error}\\
&a,b=\text{endpoint}\\
&n=\text{number of iterations}\\
&p=\text{exponent}
\end{aligned}
$$

---
### fixed point
- value thats invariant under function

---
### fixed point formula
$$
\begin{aligned}
&x=f(x)\\
&x=\text{fixed point}\\
&f=\text{function}
\end{aligned}
$$

---
### fixed point method
- repeatedly evaluate function at previous output until input equal output
![300](13%20Numerical%20Analysis/Images/fixed%20point%20method.png)

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
- error decrease by linear factor every iteration

---
### fixed point convergence formula
$$
\begin{aligned}
&0<|g'(r)|<1\implies\lim_{n\rightarrow\infty}\frac{e_{n+1}}{e_n}=|g'(r)|\\
&g(r)=g'(r)=g''(r)=\dots=g^{(p-1)}(r)=0\ne g^{(p)}(r)\implies\lim_{n\rightarrow\infty}\frac{e_{n+1}}{e_n^p}=\frac{|g^{(p)}(r)|}{p!}\\
&g=\text{function}\\
&e=\text{absolute error}\\
&r=\text{real root}
\end{aligned}
$$

---
### forward error
- absolute distance between real root and forward root

---
### forward error formula
$$
\begin{aligned}
|r-r_c|\\
r=\text{real root}\\
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
&f(r)=0\ne f'(r)\\
&f=\text{function}\\
&r=\text{real root}
\end{aligned}
$$

---
### multiple root
- first nonzero derivative at root equal multiplicity of root

---
### multiple root formula
$$
\begin{aligned}
&f(r)=f'(r)=f''(r)=\dots=f^{(m-1)}(r)=0\ne f^{(m)}(r)\\
&f=\text{function}\\
&r=\text{real root}\\
&m=\text{multiplicity}
\end{aligned}
$$

---
### perturbed equation
- equation containing small nonnegative parameter

---
### perturbed equation formula
$$
\begin{aligned}
&f(x)+\epsilon g(x)=0\\
&f,g=\text{function}\\
&\epsilon=\text{parameter}
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
&|r-r_c|\approx\frac{-g(r)}{f'(r)}\epsilon\\
&m>1\implies|r-r_c|\approx(\frac{|g(r)|m!}{|f^{(m)}(r)|}|\epsilon|)^{1/m}\\
&r=\text{real root}\\
&r_c=\text{computed root}\\
&f,g=\text{function}\\
&\epsilon=\text{parameter}\\
&m=\text{multiplicity}
\end{aligned}
$$

---
### newton method
- repeatedly evaluate function where tangent line intersect x-axis
![400](13%20Numerical%20Analysis/Images/newton%20method.png)

---
### newton method formula
$$
\begin{aligned}
&x_0\\
&x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}\\
&n=0,1,2,\dots
\end{aligned}
$$

---
### newton convergence
- error decrease by quadratic factor every iteration

---
### newton convergence formula
$$
\begin{aligned}
&\lim_{n\rightarrow\infty}\frac{e_{n+1}}{e_n^2}=|\frac{f''(r)}{2f'(r)}|\\
&m>1\implies\lim_{n\rightarrow\infty}\frac{e_{n+1}}{e_n}=|\frac{m-1}{m}|\\
&e=\text{absolute error}\\
&f,g=\text{function}\\
&r=\text{real root}\\
&m=\text{multiplicity}
\end{aligned}
$$

---
### modified newton method
- repeatedly evaluate multiple function where tangent line intersect x-axis

---
### modified newton method
$$
\begin{aligned}
&x_0\\
&x_{n+1}=x_n-m\frac{f(x_n)}{f'(x_n)}\\
&n=0,1,2,\dots
\end{aligned}
$$

---
### modified newton convergence
- multiple error decrease by quadratic factor every iteration

---
### modified newton convergence
$$
\begin{aligned}
&f(x)=(x-r)^mg(x)\implies\lim_{n\rightarrow\infty}\frac{e_{n+1}}{e_n^2}=|\frac{g'(r)}{mg(r)}|\\
&f,g=\text{function}\\
&r=\text{real root}\\
&m=\text{multiplicity}\\
&e=\text{absolute error}
\end{aligned}
$$

---
