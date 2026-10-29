### transformed random variable
- function of sample space outcome equal real number

---
### transformed random variable formula
$$
\begin{lgathered}
U=g(X_1,\dots,X_n)\\
X=\text{random variable}\\
g=\text{function}
\end{lgathered}
$$

---
### method of cumulative distribution functions
- if known probability distribution of transformed random variable equal probability density function then method of cumulative distribution functions
- obtain cumulative distribution function
- obtain derivative of cumulative distribution function

---
### method of cumulative distribution functions formula
$$
\begin{lgathered}
F_U(u)=P(g(X_1,\dots,X_n)\le u)\\
\max_i(a_i)\le x_k\le\min_j(b_j)\\
\max_i(a_i)\le\min_j(b_j)\\
F_U(u)=\int_{D_n}\dots\int_{D_1}f_X(x_1,\dots,x_n)dx_1\dots dx_n\\
f_U(u)=\frac{d}{du}F_U(u)\\
U=\text{transformed random variable}\\
g=\text{function}\\
X=\text{random variable}\\
\end{lgathered}
$$

---
### method of transformations
- if monotone random variable function then method of transformations
- obtain joint probability density function
- obtain marginal probability density function

---
### method of transformations formula
$$
\begin{lgathered}
y_1<y_2\implies h(x,y_1)<h(x,y_2)\\
U=h(X,Y)\\
y=h^{-1}(u)\\
f_{X,U}(x,u)=f_{X,Y}(x,h^{-1}(u))|\frac{d}{du}h^{-1}(u)|\\
f_U(u)=\int_{-\infty}^\infty f_{X,U}(x,u)dx\\
U=\text{transformed random variable}\\
g=\text{function}\\
X=\text{random variable}\\
V=\text{auxilary variable}\\
f=\text{probability density function}
\end{lgathered}
$$

---
### method of moment generating functions
- if transformed random variable equal sum of independent random variables then method of moment generating functions
- obtain product of moment generating functions
- obtain equality with known moment generating functions

---
### method of moment generating functions formula
$$
\begin{lgathered}
M_U(t)=\int_{-\infty}^\infty\dots\int_{-\infty}^\infty e^{tg(X_1,\dots,X_n)}f_{X_1,\dots,X_n}(x_1,\dots,x_n)dx_1\dots dx_n\\
U=\text{transformed random variable}\\
t=\text{independent variable}\\
f=\text{probability density function}\\
X=\text{random variable}
\end{lgathered}
$$

---
