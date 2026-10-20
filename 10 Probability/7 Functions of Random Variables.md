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
### normal property
- linear combination of independent normal random variable equal normal random variable

---
### normal property formula
$$
\begin{lgathered}
\forall i:X_i\overset{\text{i.i.d.}}{\sim}N(\mu_i,\sigma_i^2)\implies\\
\sum_{i=1}^nc_iX_i\sim N(\sum_{i=1}^nc_i\mu_i,\sum_{i=1}^nc_i^2\sigma_i^2)\\
X=\text{random variable}\\
c=\text{real number}\\
\mu=\text{mean}\\
\sigma=\text{standard deviation}
\end{lgathered}
$$

---
### chi-squared property
- sum of squared independent standard normal random variable equal chi-squared random variable

---
### chi-squared property formula
$$
\begin{lgathered}
\forall i:Z_i\overset{\text{i.i.d.}}{\sim}N(0,1)\implies\\
\sum_{i=1}^nZ_i^2\sim\chi^2(n)\\
Z=\text{random variable}\\
\mu=\text{mean}\\
\sigma=\text{standard deviation}\\
n=\text{degrees of freedom}
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
x_1<x_2\implies g(x_1)<g(x_2)\\
U=g(X_1,\dots,X_n)\\
V_2=X_2\\
V_3=X_3\\
\vdots\\
V_n=X_n\\
x_1=g^{-1}(u,v_2,\dots,v_n)\\
f_{U,V_2,\dots,V_n}(u,v_2,\dots,v_n)=f_{X_1,\dots,X_n}(x_1,v_2,\dots,v_n)\left|\frac{\partial g^{-1}}{\partial u}\right|\\
f_U(u)=\int_{-\infty}^\infty\dots\int_{-\infty}^\infty f_{U,V_2,\dots,V_n}(u,v_2\dots,v_n)dv_2\dots dv_n\\
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
