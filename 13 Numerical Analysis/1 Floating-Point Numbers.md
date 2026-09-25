### efficiency
- computational cost of achieving specified error
- time complexity equal speed of program
- space complexity equal size of program

---
### efficiency formula
$$
\begin{lgathered}
T(n)=O(f(n))\\
S(n)=O(g(n))
\end{lgathered}
$$

---
### polynomial evaluation
- compute value of polynomial at particular input

---
### polynomial evaluation formula
$$
\begin{lgathered}
p(x)=\sum_{k=0}^nc_kx^k\\
c=\text{coefficient}\\
x=\text{variable}
\end{lgathered}
$$

---
### direct polynomial evaluation
- evaluate each power independently

---
### direct polynomial evaluation formula
$$
\begin{lgathered}
x,x^2=x\cdot x,x^3=x\cdot x\cdot x,\dots,x^n=\prod_{k=1}^nx\\
T(n)=\frac{n(n+1)}{2}\\
S(n)=1\\
x=\text{variable}\\
T=\text{time complexity}\\
S=\text{space complexity}
\end{lgathered}
$$

---
### recursive polynomial evaluation
- evaluate each power recursively

---
### recursive polynomial evaluation formula
$$
\begin{lgathered}
x,x^2=x\cdot x,x^3=x^2\cdot x,\dots,x^n=x^{n-1}\cdot x\\
T(n)=2n-1\\
S(n)=1\\
x=\text{variable}\\
T=\text{time complexity}\\
S=\text{space complexity}
\end{lgathered}
$$

---
### horners polynomial evaluation
- evaluate factorized polynomial

---
### horners polynomial evaluation formula
$$
\begin{lgathered}
p(x)=c_0+x(c_1+x(c_2+\dots+x(c_{n-1}+xc_n)))\iff\begin{cases}
b_n=c_n\\
b_k=c_k+xc_{k+1}\\
k=n-1,n-2,\dots,0\\
p(x)=b_0
\end{cases}\\
T(n)=n\\
S(n)=1\\
x=\text{variable}\\
T=\text{time complexity}\\
S=\text{space complexity}
\end{lgathered}
$$

---
### binary number
- base-2 number system

---
### binary number formula
$$
\begin{lgathered}
N=\sum_{k=0}^nb_k2^{k}\in\set{0,1,2,3,4,5,6,7,8,9}\iff b_k=\left\lfloor\frac{N}{2^{k}}\right\rfloor\mod2\in\set{0,1}\\
k=0,\dots,\lfloor\frac{\log N}{\log2}\rfloor\\
N<(\cdot)\implies k>0\\
N>(\cdot)\implies k<0\\
N=\text{digit}\\
b=\text{bit}
\end{lgathered}
$$

---
### floating-point number
- binary scientific notation

---
### floating-point number formula
$$
\begin{lgathered}
x=(-1)^s(1+\sum_{i=1}^{n_f}f_i2^{-i})2^{P-B}=\pm1.b_1b_2\dots b_n\times2^p\\
s=\text{sign}\\
n=\text{number of bits}\\
f=\text{fraction}\\
P=\text{stored exponent}\\
B=\text{bias}\\
b=\text{bit}\\
p=\text{real exponent}
\end{lgathered}
$$

---
### bias
- convert signed exponent into unsigned exponent

---
### bias formula
$$
\begin{lgathered}
B=P-p=2^{n_p-1}-1\\
P=\text{stored exponent}\\
p=\text{real exponent}\\
n=\text{number of bits}
\end{lgathered}
$$

---
### single precision
- represent floating-point number with 32 bits

---
### single precision formula
$$
\begin{lgathered}
n_s=1\\
n_p=8\implies B=127\\
n_f=23\\
n=\text{number of bits}\\
B=\text{bias}
\end{lgathered}
$$

---
### double precision
- represent floating-point number with 64 bits

---
### double precision formula
$$
\begin{lgathered}
n_s=1\\
n_p=11\implies B=1023\\
n_f=52\\
n=\text{number of bits}\\
B=\text{bias}
\end{lgathered}
$$

---
### long double precision
- represent floating-point number with 80 bits

---
### long double precision formula
$$
\begin{lgathered}
n_s=1\\
n_p=15\implies B=16383\\
n_f=64\\
n=\text{number of bits}\\
B=\text{bias}
\end{lgathered}
$$

---
### subnormal floating-point number
- represent floating-point number smaller than the smallest normal floating-point number

---
### subnormal floating-point number formula
$$
\begin{lgathered}
x=(-1)^s(\sum_{i=1}^{n_f}f_i2^{-i})2^{1-B}=\pm0.b_1b_2\dots b_n\times2^p\\
s=\text{sign}\\
n=\text{number of bits}\\
f=\text{fraction}\\
B=\text{bias}\\
b=\text{bit}\\
p=\text{real exponent}
\end{lgathered}
$$

---
### special floating-point number
- zero
- minimum positive subnormal
- maximum positive subnormal
- minimum positive normal
- maximum positive finite
- infinity

---
### special floating-point number formula
$$
\begin{lgathered}
\pm0.00\dots00\times2^{-1022}\\
2^{-1024}=4.94\times10^{-324}\\
(1-2^{-52})2^{-1022}=2.23\times10^{-308}\\
2^{-1022}=2.23\times10^{-308}\\
(2-2^{-52})2^{1023}=1.80\times10^{308}\\
\pm1.00\dots00\times2^{1024}
\end{lgathered}
$$

---
### machine epsilon
- distance between 1 and the next largest floating-point number

---
### machine epsilon formula
$$
\begin{lgathered}
\epsilon_{\text{mach}}=2^{-52}=2.22\times10^{-16}
\end{lgathered}
$$

---
### rounding
- round down
- round up
- tie

---
### rounding formula
$$
\begin{lgathered}
b_{k+1}<\frac12\implies b_k'=b_k\\
b_{k+1}>\frac12\implies b_k'=b_k+\epsilon_{\text{mach}}\\
(b_{k+1}=\frac12)\land(b_k=0)\implies b_k'=b_k\\
(b_{k+1}=\frac12)\land(b_k=1)\implies b_k'=b_k+\epsilon_{\text{mach}}\\
\end{lgathered}
$$

---
### absolute error
- absolute distance between real number and computed number

---
### absolute error formula
$$
\begin{lgathered}
e=|x-x_c|\\
x=\text{real number}\\
x_c=\text{computed number}
\end{lgathered}
$$

---
### relative error
- relative distance between real number and computed number

---
### relative error formula
$$
\begin{lgathered}
e'=\frac{|x-x_c|}{|x|}\\
x=\text{real number}\\
x_c=\text{computed number}
\end{lgathered}
$$

---
### relative rounding error
- relative distance between real number and computed number less or equal half machine epsilon

---
### relative rounding error formula
$$
\begin{lgathered}
\frac{|x-x_c|}{|x|}\le\frac12\epsilon\\
x=\text{real number}\\
x_c=\text{computed number}\\
\epsilon_{\text{mach}}=\text{machine epsilon}
\end{lgathered}
$$

---
### floating-point representation
- numerical approximation of real number

---
### floating-point representation formula
$$
\begin{lgathered}
\text{fl}(x)=(1+\epsilon_{\text{mach}})x
\end{lgathered}
$$

---
### machine representation
- binary encoding of floating-point representation

---
### machine representation formula
$$
\begin{lgathered}
s_1\mid P_1P_2\dots P_{11}\mid f_1f_2\dots f_{52}\\
s=\text{sign}\\
P=\text{stored exponent}\\
f=\text{fraction}
\end{lgathered}
$$

---
### underflow
- real number below the range of representable normal floating-point number

---
### underflow formula
$$
\begin{lgathered}
0<|x|<2^{-2022}\\
x=\text{real number}
\end{lgathered}
$$

---
### overflow
- real number above the range of representable finite floating-point number

---
### overflow formula
$$
\begin{lgathered}
|x|>1.80\times10^{308}\\
x=\text{real number}
\end{lgathered}
$$

---
### loss of significance
- subtraction of two nearly equal floating-point numbers cancel many significant digits

---
### loss of significance formula
$$
\begin{lgathered}
x\approx y\implies\frac{|x|+|y|}{|x-y|}\gg1\\
x=\text{real number}
\end{lgathered}
$$

---
### reformulation
- rational
- quadratic

---
### reformulation formula
$$
\begin{lgathered}
(\sqrt{C+x}-C)(\frac{\sqrt{C+x}+C}{\sqrt{C+x}+C})=\frac{x}{\sqrt{C+x}+C}\\
b^2\gg4|ac|\implies x=\begin{cases}\frac{-b-\sqrt{b^2-4ac}}{2a}\\
\frac{-2c}{b+\sqrt{b^2-4ac}}
\end{cases}\\
b^2\ll4|ac|\implies x=\begin{cases}\frac{-b-\sqrt{b^2-4ac}}{2a}\\
\frac{2c}{-b+\sqrt{b^2-4ac}}
\end{cases}
\end{lgathered}
$$

---
