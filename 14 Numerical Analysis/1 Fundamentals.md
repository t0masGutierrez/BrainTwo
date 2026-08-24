### accuracy
- distance between mathematical solution and numerical approximation

---
### accuracy formula
$$
\begin{aligned}
e=\|y-\hat y\|\\
y=\text{solution}\\
\hat y=\text{approximation}
\end{aligned}
$$

---
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
### stability
- sensitivity of output to intermediate error

---
### stability formula
$$
\begin{aligned}
\|G^n\|\le M\implies\|e_n\|\le M\|e_0\|\\
G=\text{operator}\\
M=\text{constant}\\
e=\text{error}
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
N=\sum_{k=0}^nb_k2^k\in\set{0,1,2,3,4,5,6,7,8,9}\iff b_k=\left\lfloor\frac{N}{2^k}\right\rfloor\mod2\in\set{0,1}\\
N=\text{digit}\\
b=\text{bit}
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
