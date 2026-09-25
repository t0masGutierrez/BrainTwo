### p decimal place correctness
- approximation correct to p decimal places after rounding

---
### p decimal place correctness formula
$$
\begin{lgathered}
|r-r_c|<\frac{1}{2}\times10^{-p}\\
r=\text{real root}\\
r_c=\text{computed root}\\
p=\text{real exponent}
\end{lgathered}
$$

---
### intermediate value
- if function continuous over closed interval then function encompasses every value between endpoints

---
### intermediate value formula
$$
\begin{lgathered}
f(a)\le c\le f(b)\implies\exists x\in[a,b]:f(x)=c\\
f=\text{function}
\end{lgathered}
$$

---
### bisection method
- repeatedly halve bracketing interval and choose endpoint with opposite sign
![](13%20Numerical%20Analysis/Images/bisection%20method.png)

---
### bisection method formula
$$
\begin{lgathered}
f\in C\left[a_0,b_0\right]\\
f(a_0)f(b_0)<0\\
c_n=\frac{a_n+b_n}{2}\\
{}[a_{n+1},b_{n+1}]=\begin{cases}
{}[a_n,c_n],\quad f(a_n)f(c_n)<0\\
{}[c_n,b_n],\quad f(c_n)f(b_n)<0
\end{cases}\\
\frac{b_n-a_n}{2}<\epsilon\implies r_c=c_n\\
f(r_c)=0
\end{lgathered}
$$

---
### bisection convergence
- error decrease by half every iteration

---
### bisection convergence formula
$$
\begin{lgathered}
\lim_{n\rightarrow\infty}\frac{e_{n+1}}{e_n}=\frac{1}{2}\\
|r-r_c|\le\frac{b_0-a_0}{2^{n+1}}=\frac{b_n-a_n}{2}\\
n>\frac{\log(b-a)+p}{\log(2)}\implies|r-r_c|<\frac{1}{2}\times10^{-p}\\
r=\text{real root}\\
r_c=\text{computed root}\\
e=\text{absolute error}\\
a,b=\text{endpoint}\\
n=\text{number of iterations}\\
p=\text{real exponent}
\end{lgathered}
$$

---
### fixed point
- value thats invariant under function

---
### fixed point formula
$$
\begin{lgathered}
x=f(x)\\
x=\text{fixed point}\\
f=\text{function}
\end{lgathered}
$$

---
### fixed point method
- repeatedly evaluate function at previous output until input equal output
![300](13%20Numerical%20Analysis/Images/fixed%20point%20method.png)

---
### fixed point method formula
$$
\begin{lgathered}
x_0\\
x_{n+1}=g(x_n)\\
|x_{n+1}-x_n|<\epsilon\implies r_c=x_{n+1}\\
g(r_c)=r_c
\end{lgathered}
$$

---
### fixed point convergence
- error decrease by linear factor every iteration

---
### fixed point convergence formula
$$
\begin{lgathered}
0<|g'(r)|<1\implies\lim_{n\rightarrow\infty}\frac{e_{n+1}}{e_n}=|g'(r)|\\
g(r)=g'(r)=g''(r)=\dots=g^{(p-1)}(r)=0\ne g^{(p)}(r)\implies\lim_{n\rightarrow\infty}\frac{e_{n+1}}{e_n^p}=\frac{|g^{(p)}(r)|}{p!}\\
g=\text{function}\\
e=\text{absolute error}\\
r=\text{real root}
\end{lgathered}
$$

---
### forward error
- absolute distance between real root and forward root

---
### forward error formula
$$
\begin{lgathered}
|r-r_c|\\
r=\text{real root}\\
r_c=\text{computed root}
\end{lgathered}
$$

---
### backward error
- absolute distance between zero and computed number

---
### backward error formula
$$
\begin{lgathered}
|f(r_c)|\\
r_c=\text{computed root}
\end{lgathered}
$$

---
### simple root
- multiplicity of root equal 1

---
### simple root formula
$$
\begin{lgathered}
f(r)=0\ne f'(r)\\
f=\text{function}\\
r=\text{real root}
\end{lgathered}
$$

---
### multiple root
- first nonzero derivative at root equal multiplicity of root

---
### multiple root formula
$$
\begin{lgathered}
f(r)=f'(r)=f''(r)=\dots=f^{(m-1)}(r)=0\ne f^{(m)}(r)\\
f=\text{function}\\
r=\text{real root}\\
m=\text{multiplicity}
\end{lgathered}
$$

---
### perturbed equation
- equation containing small nonnegative parameter

---
### perturbed equation formula
$$
\begin{lgathered}
f(x)+\epsilon g(x)=0\\
f,g=\text{function}\\
\epsilon=\text{parameter}
\end{lgathered}
$$

---
### root sensitivity
- if small change of function equal small change of root then well-conditioned
- if small change of function equal large change of root then ill-conditioned

---
### root sensitivity formula
$$
\begin{lgathered}
|r-r_c|\approx\frac{-g(r)}{f'(r)}\epsilon\\
m>1\implies|r-r_c|\approx(\frac{|g(r)|m!}{|f^{(m)}(r)|}|\epsilon|)^{1/m}\\
r=\text{real root}\\
r_c=\text{computed root}\\
f,g=\text{function}\\
\epsilon=\text{parameter}\\
m=\text{multiplicity}
\end{lgathered}
$$

---
### newton method
- repeatedly evaluate function where tangent line intersect x-axis
![400](13%20Numerical%20Analysis/Images/newton%20method.png)

---
### newton method formula
$$
\begin{lgathered}
x_0\\
x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}\\
|x_{n+1}-x_n|<\epsilon\implies r_c=x_{n+1}\\
f(r_c)=0
\end{lgathered}
$$

---
### newton convergence
- error decrease by quadratic factor every iteration

---
### newton convergence formula
$$
\begin{lgathered}
\lim_{n\rightarrow\infty}\frac{e_{n+1}}{e_n^2}=|\frac{f''(r)}{2f'(r)}|\\
m>1\implies\lim_{n\rightarrow\infty}\frac{e_{n+1}}{e_n}=|\frac{m-1}{m}|\\
e=\text{absolute error}\\
f,g=\text{function}\\
r=\text{real root}\\
m=\text{multiplicity}
\end{lgathered}
$$

---
### modified newton method
- repeatedly evaluate multiple function where tangent line intersect x-axis

---
### modified newton method formula
$$
\begin{lgathered}
x_0\\
x_{n+1}=x_n-m\frac{f(x_n)}{f'(x_n)}\\
|x_{n+1}-x_n|<\epsilon\implies r_c=x_{n+1}\\
f(r_c)=0
\end{lgathered}
$$

---
### modified newton convergence
- multiple error decrease by quadratic factor every iteration

---
### modified newton convergence formula
$$
\begin{lgathered}
f(x)=(x-r)^mg(x)\implies\lim_{n\rightarrow\infty}\frac{e_{n+1}}{e_n^2}=|\frac{g'(r)}{mg(r)}|\\
f,g=\text{function}\\
r=\text{real root}\\
m=\text{multiplicity}\\
e=\text{absolute error}
\end{lgathered}
$$

---
### secant method
- repeatedly evaluate function where secant line intersect x-axis
![300](13%20Numerical%20Analysis/Images/secant%20method.png)

---
### secant method formula
$$
\begin{lgathered}
x_0,x_1\\
x_{n+1}=x_n-f(x_n)\frac{x_n-x_{n-1}}{f(x_n)-f(x_{n-1})}\\
|x_{n+1}-x_n|<\epsilon\implies r_c=x_{n+1}\\
f(r_c)=0
\end{lgathered}
$$

---
### secant convergence
- error decrease by golden factor every iteration

---
### secant convergence formula
$$
\begin{lgathered}
\lim_{n\rightarrow\infty}\frac{e_{n+1}}{e_n^{\varphi}}=|\frac{f''(r)}{2f'(r)}|^{\varphi-1}\\
\varphi=\frac{1+\sqrt5}{2}\approx1.618\\
e=\text{absolute error}\\
f=\text{function}\\
r=\text{real root}
\end{lgathered}
$$

---
### false position method
- repeatedly halve bracketing interval where secant line intersect x-axis and choose endpoint with opposite sign
![300](13%20Numerical%20Analysis/Images/false%20position%20method.png)

---
### false position method formula
$$
\begin{lgathered}
f\in C\left[a_0,b_0\right]\\
f(a_0)f(b_0)<0\\
c_n=a_n-f(a_n)\frac{a_n-b_n}{f(a_n)-f(b_n)}\\
{}[a_{n+1},b_{n+1}]=\begin{cases}
{}[a_n,c_n],\quad f(a_n)f(c_n)<0\\
{}[c_n,b_n],\quad f(c_n)f(b_n)<0
\end{cases}\\
|c_{n+1}-c_n|<\epsilon\implies r_c=c_{n+1}\\
f(r_c)=0
\end{lgathered}
$$

---
### false position convergence
- error decrease by linear factor every iteration

---
### false position convergence formula
$$
\begin{lgathered}
\lim_{n\rightarrow\infty}\frac{e_{n+1}}{e_n}=C\\
e=\text{absolute error}\\
C=\text{constant}
\end{lgathered}
$$

---
### muller method
- repeatedly evaluate function where fitted quadratic intersect x-axis

---
### muller method formula
$$
\begin{lgathered}
x_0,x_1,x_2\\
h_1=x_{n-1}-x_{n-2}\\
h_2=x_n-x_{n-1}\\
\delta_1=\frac{f(x_{n-1})-f(x_{n-2})}{h_1}\\
\delta_2=\frac{f(x_{n})-f(x_{n-1})}{h_2}\\
\Delta=\frac{\delta_2-\delta_1}{h_2-h_1}\\
b=\delta_2+\Delta h_2\\
D=\sqrt{b^2-4\Delta f(x_n)}\\
M=\begin{cases}
b+D,\quad|b+D|>|b-D|\\
b-D,\quad\text{otherwise}
\end{cases}\\
x_{n+1}=x_n-f(x_n)\frac{2}{M}\\
|x_{n+1}-x_n|<\epsilon\implies r_c=x_{n+1}\\
f(r_c)=0
\end{lgathered}
$$

---
### muller convergence
- error decrease by superlinear factor every iteration

---
### muller convergence formula
$$
\begin{lgathered}
\lim_{n\rightarrow\infty}\frac{e_{n+1}}{e_n^{1.8393}}=C\\
(1.8392)^3-(1.8392)^2-1.8392-1=0\\
e=\text{absolute error}\\
C=\text{constant}
\end{lgathered}
$$

---
### inverse quadratic interpolation method
- repeatedly evaluate function where fitted inverse quadratic intersect x-axis

---
### inverse quadratic interpolation method formula
$$
\begin{lgathered}
x_0,x_1,x_2\\
A=f(x_n)\\
B=f(x_{n+1})\\
C=f(x_{n+2})\\
P(y)=x_n\frac{(y-B)(y-C)}{(A-B)(A-C)}+x_{n+1}\frac{(y-A)(y-C)}{(B-A)(B-C)}+x_{n+2}\frac{(y-A)(y-B)}{(C-A)(C-B)}\\
q_0=\frac{f(x_n)}{f(x_{n+1})}\\
q_1=\frac{f(x_{n+2})}{f(x_{n+1})}\\
q_2=\frac{f(x_{n+2})}{f(x_n)}\\
x_{n+3}=x_{n+2}-\frac{q_1(q_1-q_0)(x_{n+2}-x_{n+1})+q_2(1-q_1)(x_{n+2}-x_n)}{(q_0-1)(q_1-1)(q_2-1)}\\
|x_{n+3}-x_{n+2}|<\epsilon\implies r_c=x_{n+3}\\
f(r_c)=0
\end{lgathered}
$$

---
### inverse quadratic interpolation convergence
- error decrease by superlinear factor every iteration

---
### inverse quadratic interpolation convergence formula
$$
\begin{lgathered}
\lim_{n\rightarrow\infty}\frac{e_{n+1}}{e_n^{1.8393}}=C\\
(1.8392)^3-(1.8392)^2-1.8392-1=0\\
e=\text{absolute error}\\
C=\text{constant}
\end{lgathered}
$$

---
### brent method
- try IQI method, try secant method, fallback bisection method
- tradeoff between fast whenever possible and safe whenever necessary
- fast because smarter guess and safe because guaranteed progress
![300](13%20Numerical%20Analysis/Images/brent%20method.png)

---
### brent method formula
$$
\begin{lgathered}
x_0,x_1,x_2\\
x_{n+3}=x_{n+2}-\frac{q_1(q_1-q_0)(x_{n+2}-x_{n+1})+q_2(1-q_1)(x_{n+2}-x_n)}{(q_0-1)(q_1-1)(q_2-1)}\\
x_0,x_1\\
x_{n+1}=x_n-f(x_n)\frac{x_n-x_{n-1}}{f(x_n)-f(x_{n-1})}\\
f\in C\left[a_0,b_0\right]\\
f(a_0)f(b_0)<0\\

{}[a_{n+1},b_{n+1}]=\begin{cases}
{}[a_n,c_n],\quad f(a_n)f(c_n)<0\\
{}[c_n,b_n],\quad f(c_n)f(b_n)<0
\end{cases}\\
\end{lgathered}
$$

---
### brent convergence
- error decrease by superlinear factor every iteration
- error decrease by golden factor every iteration
- error decrease by half every iteration

---
### brent convergence formula
$$
\begin{lgathered}
\lim_{n\rightarrow\infty}\frac{e_{n+1}}{e_n^{1.8393}}=C\\
\lim_{n\rightarrow\infty}\frac{e_{n+1}}{e_n^{\varphi}}=|\frac{f''(r)}{2f'(r)}|^{\varphi-1}\\
\lim_{n\rightarrow\infty}\frac{e_{n+1}}{e_n}=\frac{1}{2}\\
\end{lgathered}
$$

---
