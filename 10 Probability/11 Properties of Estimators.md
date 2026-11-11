### relative efficiency
- compare the variance of two unbiased estimators of the same population parameter
- if above 1 then estimator 1 more efficient
- if below 1 then estimator 2 more efficient

---
### relative efficiency formula
$$
\begin{lgathered}
\text{eff}(\hat\theta_1,\hat\theta_2)=\frac{\text{Var}(\hat\theta_2)}{\text{Var}(\hat\theta_1)}\\
\hat\theta=\text{sample statistic}
\end{lgathered}
$$

---
### consistency
- convergence of estimator in probability to the population parameter

---
### consistency formula
$$
\begin{lgathered}
\lim_{n\rightarrow\infty}E[\hat\theta_n]=\theta\\
\lim_{n\rightarrow\infty}\text{Var}(\hat\theta_n)=0
\implies\\
\forall\epsilon>0:\lim_{n\rightarrow\infty}P(|\hat\theta_n-\theta|\le\epsilon)=1\\
\hat\theta=\text{sample statistic}\\
\theta=\text{population parameter}
\end{lgathered}
$$

---
### probability convergence property
- if convergence of sequence of random variables in probability then convergence of sequence of random variables in distribution

---
### probability convergence property formula
$$
\begin{lgathered}
\forall\epsilon>0:\lim_{n\rightarrow\infty}P(|X_n-X|\le\epsilon)=1\implies\lim_{n\rightarrow\infty}P(X_n\le x)=P(X\le x)\\
X=\text{random variable}
\end{lgathered}
$$

---
### slutskys property
- convergence of sequence of random variables in probability to constant
- convergence of sequence of random variables in distribution to random variable
- convergence of function of random variables in distribution to random variable

---
### slutskys property formula
$$
\begin{lgathered}
\forall\epsilon>0:\lim_{n\rightarrow\infty}P(|X_n-c|\le\epsilon)=1\\
\lim_{n\rightarrow\infty}P(Y_n\le y)=P(Y\le y)\implies\\
\lim_{n\rightarrow\infty}P(X_n\pm Y_n\le z)=P(c\pm Y\le z)\\
\lim_{n\rightarrow\infty}P(X_nY_n\le z)=P(cY\le z)\\
\lim_{n\rightarrow\infty}P(\frac{X_n}{Y_n}\le z)=P(\frac{c}{Y}\le z)\\
\forall g\in C(\mathbb R^2,\mathbb R):\lim_{n\rightarrow\infty}P(g(X_n,Y_n)\le z)=P(g(c,Y)\le z)\\
X,Y,Z=\text{random variable}\\
c=\text{constant}\\
g=\text{function}
\end{lgathered}
$$

---
### likelihood
- compatibility of population parameter with observed data

---
### likelihood formula
$$
\begin{lgathered}
L=L(x_1,\dots,x_n\mid\theta)\\
X=\text{random variable}\\
\theta=\text{population parameter}
\end{lgathered}
$$

---
### sufficiency
- sample statistic retain all information about population parameter from the raw sample

---
### sufficiency formula
$$
\begin{lgathered}
U=\mathcal q(X_1,\dots,X_n)\\
L(x_1,\dots,x_n\mid\theta)=g(u,\theta)h(X_1,\dots,X_n)\\
U=\text{sample statistic}\\
g,h,q=\text{function}\\
L=\text{likelihood}\\
X=\text{random variable}\\
\theta=\text{population parameter}
\end{lgathered}
$$

---
### UMVUE
- uniformly minimum variance unbiased estimator

---
### UMVUE formula
$$
\begin{lgathered}
\forall\theta\in\Theta:E[\hat\theta]=\theta\\
\forall\theta\in\Theta:\text{Var}(\hat\theta)\le\text{Var}(\tilde\theta)\\
\hat\theta=\text{sample statistic}\\
\theta=\text{population parameter}\\
\tilde\theta=\text{unbiased estimator}
\end{lgathered}
$$

---
### rao-blackwell property
- construct unbiased estimator with equal or smaller variance

---
### rao-blackwell property formula
$$
\begin{lgathered}
E[\hat\theta]=\theta\\
L(x_1,\dots,x_n\mid\theta)=g(u,\theta)h(X_1,\dots,X_n)\implies\\
\hat\theta_{\text{RB}}=E[\hat\theta\mid U]\\
E[\hat\theta_{\text{RB}}]=\theta_{\text{RB}}\\
\text{Var}(\hat\theta_{\text{RB}})\le\text{Var}(\hat\theta)\\
\hat\theta,U=\text{sample statistic}\\
\theta=\text{population parameter}\\
L=\text{likelihood}\\
X=\text{random variable}\\
g,h=\text{function}
\end{lgathered}
$$

---
### completeness
- there exists no nontrivial function of sample statistic with expectation zero for every population parameter

---
### completeness formula
$$
\begin{lgathered}
\forall g\in\mathcal G,\forall\theta\in\Theta:E[g(U)]=0\implies\forall\theta\in\Theta:P(g(U)=0)=1\\
g=\text{function}\\
\theta=\text{population parameter}\\
U=\text{sample statistic}\\
\end{lgathered}
$$

---
### lehmann-scheffe property
- if unbiased estimator equal function of complete sufficient sample statistic then its the UMVUE of the population parameter

---
### lehmann-scheffe property formula
$$
\begin{lgathered}
U=q(X_1,\dots,X_n)\\
\forall g\in\mathcal G,\forall\theta\in\Theta:E[g(U)]=0\implies\forall\theta\in\Theta:P(g(U)=0)=1\\
L(x_1,\dots,x_n\mid\theta)=g(u,\theta)h(X_1,\dots,X_n)\implies\\
\forall\theta\in\Theta:E[\hat\theta]=\theta\\
\forall\theta\in\Theta:\text{Var}(\hat\theta)\le\text{Var}(\tilde\theta)\\
U,\hat\theta=\text{sample statistic}\\
q,g,h=\text{function}\\
X=\text{random variable}\\
\theta=\text{population parameter}\\
L=\text{likelihood}\\
\tilde\theta=\text{unbiased estimator}
\end{lgathered}
$$

---
### method of moments
- estimate population parameter by equating population moments with sample moments

---
### method of moments formula
$$
\begin{lgathered}
\mu_k'=E[X^k]\\
m_k'=\frac{1}{n}\sum_{i=1}^nX_i^k\\
\theta=[\theta_1,\dots,\theta_r]\\
\forall k\in(1,\dots,r):\mu_k'=m_k'
\end{lgathered}
$$

---
### maximum likelihood estimation
- estimate population parameter by maximizing the likelihood of the observed sample

---
### maximum likelihood estimation formula
$$
\begin{lgathered}
\theta=[\theta_1,\dots,\theta_r]\\
L=L(x_1,\dots,x_n\mid\theta)=\prod_{i=1}^nf(x_i,\theta)\\
\ell=\ln L=\sum_{i=1}^n\ln f(x_i,\theta)\\
\forall j\in(1,\dots,r):0=\frac{\partial\ell}{\partial\theta_j}\\
\hat\theta_{\text{MLE}}=\arg\max\limits_{\theta\in\Theta}L
\end{lgathered}
$$

---
### MLE invariance property
- maximum likelihood estimator of function equal function of maximum likelihood estimator

---
### MLE invariance property formula
$$
\begin{lgathered}
\hat\theta_{\text{MLE}}=\arg\max\limits_{\theta\in\Theta}L\implies\widehat{g(\theta)_{\text{MLE}}}=g(\hat\theta_{\text{MLE}})
\end{lgathered}
$$

---
