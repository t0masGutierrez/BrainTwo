### efficiency
- computational cost of achieving specified error
- time complexity equal speed of program
- space complexity equal size of program

---
### efficiency formula
$$
\begin{aligned}
T(n)=O(f(n))\\
S(n)=O(g(n))
\end{aligned}
$$

---
### polynomial evaluation
- compute value of polynomial at particular input

---
### polynomial evaluation formula
$$
\begin{aligned}
p(x)=\sum_{k=0}^nc_kx^k\\
c=\text{coefficient}\\
x=\text{variable}
\end{aligned}
$$

---
### direct polynomial evaluation
- evaluate each power independently

---
### direct polynomial evaluation formula
$$
\begin{aligned}
x,x^2=x\cdot x,x^3=x\cdot x\cdot x,\dots,x^n=\prod_{k=1}^nx\\
T(n)=\frac{n(n+1)}{2}\\
S(n)=1\\
O(n^2)\\
T=\text{time complexity}\\
S=\text{space complexity}\\
O=\text{computational complexity}
\end{aligned}
$$

---
### improved polynomial evaluation
- evaluate each power recursively

---
### improved polynomial evaluation formula
$$
\begin{aligned}
x,x^2=x\cdot x,x^3=x^2\cdot x,\dots,x^n=x^{n-1}\cdot x\\
T(n)=2n-1\\
S(n)=1\\
O(n^2)\\
T=\text{time complexity}\\
S=\text{space complexity}\\
O=\text{computational complexity}
\end{aligned}
$$

---
### horners polynomial evaluation
- evaluate factorized polynomial

---
### horners polynomial evaluation formula
$$
\begin{aligned}
p(x)=c_0+x(c_1+x(c_2+\dots+x(c_{n-1}+xc_n)))\iff\begin{cases}
b_n=c_n\\
b_k=c_k+xc_{k+1}\\
k=n-1,n-2,\dots,0\\
p(x)=b_0
\end{cases}\\
T(n)=n\\
S(n)=1\\
O(n^2)\\
T=\text{time complexity}\\
S=\text{space complexity}\\
O=\text{computational complexity}
\end{aligned}
$$

---
### binary
- base-2 number system

---
### binary formula
$$
\begin{aligned}
N=\sum_{k=0}^nb_k2^{k}\in\set{0,1,2,3,4,5,6,7,8,9}\iff b_k=\left\lfloor\frac{N}{2^{k}}\right\rfloor\mod2\in\set{0,1}\\
N<(\cdot)\implies k>0\\
N>(\cdot)\implies k<0\\
N=\text{digit}\\
b=\text{bit}
\end{aligned}
$$

---
### floating point
- binary scientific notation

---
### floating point formula
$$
\begin{aligned}
x=(-1)^s(1+\sum_{i=1}^{n_f}f_i2^{-i})2^{P-B}=\pm1.b_1b_2\dots b_n\times2^p\\
s=\text{sign}\\
n=\text{number of bits}\\
f=\text{fraction}\\
P=\text{stored exponent}\\
B=\text{bias}\\
b=\text{bit}\\
p=\text{true exponent}
\end{aligned}
$$

---
### bias
- convert signed exponent into unsigned exponent

---
### bias formula
$$
\begin{aligned}
B=P-p=2^{n_p-1}-1\\
P=\text{stored exponent}\\
p=\text{true exponent}\\
n=\text{number of bits}
\end{aligned}
$$

---
### single precision
- represent floating point with 32 bits

---
### single precision formula
$$
\begin{aligned}
n_s=1\\
n_p=8\implies B=127\\
n_f=23\\
n=\text{number of bits}\\
B=\text{bias}
\end{aligned}
$$

---
### double precision
- represent floating point with 64 bits

---
### double precision formula
$$
\begin{aligned}
n_s=1\\
n_p=11\implies B=1023\\
n_f=52\\
n=\text{number of bits}\\
B=\text{bias}
\end{aligned}
$$

---
### long double precision
- represent floating point with 80 bits

---
### long double precision formula
$$
\begin{aligned}
n_s=1\\
n_p=15\implies B=16383\\
n_f=64\\
n=\text{number of bits}\\
B=\text{bias}
\end{aligned}
$$

---
### subnormal floating point
- represent floating point smaller than the smallest normal floating point

---
### subnormal floating point formula
$$
\begin{aligned}
x=(-1)^s(\sum_{i=1}^{n_f}f_i2^{-i})2^{1-B}=\pm0.b_1b_2\dots b_n\times2^p\\
s=\text{sign}\\
n=\text{number of bits}\\
f=\text{fraction}\\
B=\text{bias}\\
b=\text{bit}\\
p=\text{true exponent}
\end{aligned}
$$

---
### special floating point
- zero
- minimum positive subnormal
- maximum positive subnormal
- minimum positive normal
- maximum positive finite
- infinity

---
### special floating point formula
$$
\begin{aligned}
\pm0.00\dots00\times2^{-1022}\\
2^{-1024}=4.94\times10^{-324}\\
(1-2^{-52})2^{-1022}=2.23\times10^{-308}\\
2^{-1022}=2.23\times10^{-308}\\
(2-2^{-52})2^{1023}=1.80\times10^{308}\\
\pm1.00\dots00\times2^{1024}
\end{aligned}
$$

---
### machine epsilon
- distance between 1 and the next largest floating point

---
### machine epsilon formula
$$
\begin{aligned}
\epsilon_{\text{mach}}=2^{-52}=2.22\times10^{-16}
\end{aligned}
$$

---
### rounding
- round down
- round up
- tie

---
### rounding formula
$$
\begin{aligned}
b_{k+1}<\frac12\implies b_k'=b_k\\
b_{k+1}>\frac12\implies b_k'=b_k+\epsilon_{\text{mach}}\\
(b_{k+1}=\frac12)\land(b_k=0)\implies b_k'=b_k\\
(b_{k+1}=\frac12)\land(b_k=1)\implies b_k'=b_k+\epsilon_{\text{mach}}\\
\end{aligned}
$$

---
### absolute error
- absolute distance between true number and computed number

---
### absolute error formula
$$
\begin{aligned}
|x-x_c|\\
x=\text{true number}\\
x_c=\text{computed number}
\end{aligned}
$$

---
### relative error
- relative distance between true number and computed number

---
### relative error formula
$$
\begin{aligned}
\frac{|x-x_c|}{|x|}\\
x=\text{true number}\\
x_c=\text{computed number}
\end{aligned}
$$

---
### relative rounding error
- relative distance between true number and computed number less or equal half machine epsilon

---
### relative rounding error formula
$$
\begin{aligned}
\frac{|x-x_c|}{|x|}\le\frac12\epsilon\\
x=\text{true number}\\
x_c=\text{computed number}\\
\epsilon_{\text{mach}}=\text{machine epsilon}
\end{aligned}
$$

---
### floating point representation
- numerical approximation of true number

---
### floating point representation formula
$$
\begin{aligned}
\text{fl}(x)=(1+\epsilon_{\text{mach}})x
\end{aligned}
$$

---
### machine representation
- binary encoding of floating point

---
### machine representation formula
$$
\begin{aligned}
s_1\mid P_1P_2\dots P_{11}\mid f_1f_2\dots f_{52}\\
s=\text{sign}\\
P=\text{exponent}\\
f=\text{fraction}
\end{aligned}
$$

---
### underflow
- true number below the range of representable normal floating point

---
### underflow formula
$$
\begin{aligned}
0<|x|<2^{-2022}\\
x=\text{true number}
\end{aligned}
$$

---
### overflow
- true number above the range of representable finite floating point

---
### overflow formula
$$
\begin{aligned}
|x|>1.80\times10^{308}\\
x=\text{true number}
\end{aligned}
$$

---
### loss of significance
- subtraction of two nearly equal floating points cancel many significant digits
- large relative error

---
### loss of significance formula
$$
\begin{aligned}
x\approx y\implies\frac{|x-x_c|}{|x|}\gg1\\
x=\text{true number}\\
x_c=\text{computed number}
\end{aligned}
$$

---
### reformulation
- rational
- quadratic

---
### reformulation formula
$$
\begin{aligned}
(\sqrt{1+x}-1)(\frac{\sqrt{1+x}+1}{\sqrt{1+x}+1})=\frac{x}{\sqrt{1+x}+1}\\
b\approx\sqrt{b^2-4ac}\implies x_1x_2=\frac{c}{a}
\end{aligned}
$$

---
### term
- definition

---
### term
- definition

---
### term
- definition

---
### term
- definition

---
### term
- definition

---
