### raw moment
- numerical summary of random variable probability distribution about origin

---
### raw moment formula
$$
\begin{lgathered}
\mu_k'=E[X^k]\\
X=\text{random variable}
\end{lgathered}
$$

---
### central moment
- numerical summary of random variable probability distribution about mean

---
### central moment formula
$$
\begin{lgathered}
\mu_k=E[(X-\mu)^k]\\
X=\text{random variable}\\
\mu=\text{mean}
\end{lgathered}
$$

---
### moment generating function
- function capable of generating moment

---
### moment generating function formula
$$
\begin{lgathered}
M_X(t)=E[e^{tX}]\\
t=\text{independent variabe}\\
X=\text{random variable}
\end{lgathered}
$$

---
### linearity property
- if transformed random variable equal linear combination of independent random variables then transformed moment generating function equal linear combination of moment generating functions

---
### linearity property formula
$$
\begin{lgathered}
\forall i,j:P(X_i\in A,X_j\in B)=P(X_i\in A)P(X_j\in B)\\
U=\sum_{i=1}^na_iX_i+b\\
\implies M_U(t)=e^{bt}\prod_{i=1}^nM_{X_i}(a_it)
\end{lgathered}
$$

---
### equality property
- if equal moment generating function then equal probability distribution

---
### equality property formula
$$
\begin{lgathered}
\forall t\in N_\epsilon(0):M_X(t)=M_Y(t)\implies\forall x\in\mathbb R:F_X(x)=F_Y(x)\\
t=\text{independent variable}\\
N=\text{neighborhood}\\
X,Y=\text{random variable}
\end{lgathered}
$$

---
### expectation
- mean of random variable

---
### expectation formula
$$
\begin{lgathered}
E[X^k]=M_X^{(k)}(0)\\
X=\text{random variable}
\end{lgathered}
$$

---
### variance
- spread of random variable around mean

---
### variance formula
$$
\begin{lgathered}
\text{Var}(X)=\mu_2'-(\mu_1')^2\\
\mu'=\text{raw moment}
\end{lgathered}
$$

---
### uniform moment generating function
- function capable of generating uniform moment

---
### uniform MGF formula
$$
\begin{lgathered}
M_X(a,b,t)=\frac{e^{at}(1-e^{(b-a+1)t})}{(b-a+1)(1-e^t)}\\
M_X(a,b,t)=\frac{e^{bt}-e^{at}}{(b-a)t}\\
a=\text{lower endpoint}\\
b=\text{upper endpoint}\\
t=\text{independent variable}
\end{lgathered}
$$

---
### bernoulli moment generating function
- function capable of generating bernoulli moment

---
### bernoulli MGF formula
$$
\begin{lgathered}
M_X(p,t)=q+pe^t\\
p=\text{probability of success}\\
q=\text{probability of failure}\\
t=\text{independent variable}
\end{lgathered}
$$

---
### binomial moment generating function
- function capable of generating binomial moment

---
### binomial MGF formula
$$
\begin{lgathered}
M_X(n,p,t)=(q+pe^t)^n\\
n=\text{number of trials}\\
p=\text{probability of success}\\
q=\text{probability of failure}\\
t=\text{independent variable}
\end{lgathered}
$$

---
### geometric moment generating function
- function capable of generating geometric moment

---
### geometric MGF formula
$$
\begin{lgathered}
M_X(p,t)=\frac{p}{1-qe^t}\\
p=\text{probability of success}\\
q=\text{probability of failure}\\
t=\text{independent variable}
\end{lgathered}
$$

---
### negative binomial moment generating function
- function capable of generating negative binomial moment

---
### negative binomial MGF formula
$$
\begin{lgathered}
M_X(r,p,t)=(\frac{p}{1-qe^t})^r\\
r=\text{success number}\\
p=\text{probability of success}\\
q=\text{probability of failure}\\
t=\text{independent variable}
\end{lgathered}
$$

---
### hypergeometric moment generating function
- function capable of generating hypergeometric moment

---
### hypergeometric MGF formula
$$
\begin{lgathered}
M_X(N,K,n,t)=\sum_{i}e^{tx_i}\frac{\begin{pmatrix}K\\x_i\end{pmatrix}\begin{pmatrix}N-K\\n-x_i\end{pmatrix}}{\begin{pmatrix}N\\n\end{pmatrix}}\\
N=\text{population size}\\
K=\text{interest size}\\
n=\text{number of items drawn}\\
t=\text{independent variable}\\
x=\text{number of interest items drawn}
\end{lgathered}
$$

---
### poisson moment generating function
- function capable of generating poisson moment

---
### poisson MGF formula
$$
\begin{lgathered}
M_X(\lambda,t)=e^{\lambda(e^t-1)}\\
\lambda=\text{average number of events per interval}\\
t=\text{independent variable}
\end{lgathered}
$$

---
### normal moment generating function
- function capable of generating normal moment

---
### normal MGF formula
$$
\begin{lgathered}
M_X(\mu,\sigma^2,t)=e^{\mu t+\sigma^2t^2/2}\\
\mu=\text{mean}\\
\sigma=\text{standard deviation}\\
t=\text{independent variable}
\end{lgathered}
$$

---
### standard normal moment generating function
- function capable of generating standard normal moment

---
### standard normal MGF formula
$$
\begin{lgathered}
M_X(0,1,t)=e^{t^2/2}\\
t=\text{independent variable}
\end{lgathered}
$$

---
### exponential moment generating function
- function capable of generating exponential moment

---
### exponential MGF formula
$$
\begin{lgathered}
M_X(\lambda,t)=\frac{\lambda}{\lambda-1}\\
\lambda=\text{average number of events per interval}\\
t=\text{independent variable}
\end{lgathered}
$$

---
### gamma moment generating function
- function capable of generating gamma moment

---
### gamma MGF formula
$$
\begin{lgathered}
M_X(\alpha,\beta,t)=(1-\beta t)^{-\alpha}\\
\alpha=\text{shape}\\
\beta=\text{scale}\\
t=\text{independent variable}
\end{lgathered}
$$

---
### linearity property
- if transformed random variable equal linear combination of independent random variables then transformed moment generating function equal linear combination of moment generating functions

---
### linearity property formula
$$
\begin{lgathered}
\forall i,j:P(X_i\in A,X_j\in B)=P(X_i\in A)P(X_j\in B)\land\\
U=\sum_{i=1}^na_iX_i+b\implies\\
M_U(t)=e^{bt}\prod_{i=1}^nM_{X_i}(a_it)
\end{lgathered}
$$

---
### equality property
- if equal moment generating function then equal probability distribution

---
### equality property formula
$$
\begin{lgathered}
\forall t\in N_\epsilon(0):M_X(t)=M_Y(t)\implies\forall x\in\mathbb R:F_X(x)=F_Y(x)\\
t=\text{independent variable}\\
N=\text{neighborhood}\\
X,Y=\text{random variable}
\end{lgathered}
$$

---
### expectation
- mean of random variable

---
### expectation formula
$$
\begin{lgathered}
E[X^k]=M_X^{(k)}(0)\\
X=\text{random variable}
\end{lgathered}
$$

---
### variance
- spread of random variable around mean

---
### variance formula
$$
\begin{lgathered}
\text{Var}(X)=\mu_2'-(\mu_1')^2\\
\mu'=\text{raw moment}
\end{lgathered}
$$

---
### uniform moment generating function
- function capable of generating uniform moment

---
### uniform MGF formula
$$
\begin{lgathered}
M_X(a,b,t)=\frac{e^{at}(1-e^{(b-a+1)t})}{(b-a+1)(1-e^t)}\\
M_X(a,b,t)=\frac{e^{bt}-e^{at}}{(b-a)t}\\
a=\text{lower endpoint}\\
b=\text{upper endpoint}\\
t=\text{independent variable}
\end{lgathered}
$$

---
### bernoulli moment generating function
- function capable of generating bernoulli moment

---
### bernoulli MGF formula
$$
\begin{lgathered}
M_X(p,t)=q+pe^t\\
p=\text{probability of success}\\
q=\text{probability of failure}\\
t=\text{independent variable}
\end{lgathered}
$$

---
### binomial moment generating function
- function capable of generating binomial moment

---
### binomial MGF formula
$$
\begin{lgathered}
M_X(n,p,t)=(q+pe^t)^n\\
n=\text{number of trials}\\
p=\text{probability of success}\\
q=\text{probability of failure}\\
t=\text{independent variable}
\end{lgathered}
$$

---
### geometric moment generating function
- function capable of generating geometric moment

---
### geometric MGF formula
$$
\begin{lgathered}
M_X(p,t)=\frac{p}{1-qe^t}\\
p=\text{probability of success}\\
q=\text{probability of failure}\\
t=\text{independent variable}
\end{lgathered}
$$

---
### negative binomial moment generating function
- function capable of generating negative binomial moment

---
### negative binomial MGF formula
$$
\begin{lgathered}
M_X(r,p,t)=(\frac{p}{1-qe^t})^r\\
r=\text{success number}\\
p=\text{probability of success}\\
q=\text{probability of failure}\\
t=\text{independent variable}
\end{lgathered}
$$

---
### hypergeometric moment generating function
- function capable of generating hypergeometric moment

---
### hypergeometric MGF formula
$$
\begin{lgathered}
M_X(N,K,n,t)=\sum_{i}e^{tx_i}\frac{\begin{pmatrix}K\\x_i\end{pmatrix}\begin{pmatrix}N-K\\n-x_i\end{pmatrix}}{\begin{pmatrix}N\\n\end{pmatrix}}\\
N=\text{population size}\\
K=\text{interest size}\\
n=\text{number of items drawn}\\
t=\text{independent variable}\\
x=\text{number of interest items drawn}
\end{lgathered}
$$

---
### poisson moment generating function
- function capable of generating poisson moment

---
### poisson MGF formula
$$
\begin{lgathered}
M_X(\lambda,t)=e^{\lambda(e^t-1)}\\
\lambda=\text{average number of events per interval}\\
t=\text{independent variable}
\end{lgathered}
$$

---
### normal moment generating function
- function capable of generating normal moment

---
### normal MGF formula
$$
\begin{lgathered}
M_X(\mu,\sigma^2,t)=e^{\mu t+\sigma^2t^2/2}\\
\mu=\text{mean}\\
\sigma=\text{standard deviation}\\
t=\text{independent variable}
\end{lgathered}
$$

---
### standard normal moment generating function
- function capable of generating standard normal moment

---
### standard normal MGF formula
$$
\begin{lgathered}
M_X(0,1,t)=e^{t^2/2}\\
t=\text{independent variable}
\end{lgathered}
$$

---
### exponential moment generating function
- function capable of generating exponential moment

---
### exponential MGF formula
$$
\begin{lgathered}
M_X(\lambda,t)=\frac{\lambda}{\lambda-1}\\
\lambda=\text{average number of events per interval}\\
t=\text{independent variable}
\end{lgathered}
$$

---
### gamma moment generating function
- function capable of generating gamma moment

---
### gamma MGF formula
$$
\begin{lgathered}
M_X(\alpha,\beta,t)=(1-\beta t)^{-\alpha}\\
\alpha=\text{shape}\\
\beta=\text{scale}\\
t=\text{independent variable}
\end{lgathered}
$$

---
### beta moment generating function
- function capable of generating beta moment

---
### beta MGF formula
$$
\begin{lgathered}
M_X(\alpha,\beta,t)=1+\sum_{n=1}^{\infty}\left(\prod_{m=0}^{n-1}\frac{\alpha+m}{\alpha+\beta+m}\right)\frac{t^n}{n!}\\
\alpha,\beta=\text{shape}\\
t=\text{independent variable}
\end{lgathered}
$$

---
### beta moment generating function
- function capable of generating beta moment

---
### beta MGF formula
$$
\begin{lgathered}
M_X(\alpha,\beta,t)=1+\sum_{n=1}^{\infty}\left(\prod_{m=0}^{n-1}\frac{\alpha+m}{\alpha+\beta+m}\right)\frac{t^n}{n!}\\
\alpha,\beta=\text{shape}\\
t=\text{independent variable}
\end{lgathered}
$$

---
### chi-squared moment generating function
- function capable of generating chi-squared moment

---
### chi-squared MGF formula
$$
\begin{lgathered}
M_X(\nu,t)=(1-\nu t)^{-\nu/2}\\
\nu=\text{degrees of freedom}
\end{lgathered}
$$

---
### t moment generating function
- function capable of generating t moment

---
### t moment generating function formula
$$
\begin{lgathered}

\end{lgathered}
$$

---
### F moment generating function
- function capable of generating F moment

---
### F moment generating function formula
$$
\begin{lgathered}

\end{lgathered}
$$

---
