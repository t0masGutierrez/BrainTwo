### estimator
- sample statistic capable of estimating unknown population parameter

---
### estimator formula
$$
\begin{lgathered}
g:\mathbb R^n\rightarrow\mathbb R\\
\hat\theta=g(X_1,\dots,X_n)\\
g=\text{function}\\
X=\text{random variable}
\end{lgathered}
$$

---
### bias
- systematic overestimation/underestimation of the population parameter

---
### bias formula
$$
\begin{lgathered}
B(\hat\theta)=E[\hat\theta]-\theta\\
\hat\theta=\text{sample statistic}\\
\theta=\text{population parameter}
\end{lgathered}
$$

---
### unbiased estimator
- mean of sample statistic equal population parameter

---
### unbiased estimator formula
$$
\begin{lgathered}
E[\hat\theta]=\theta\\
\text{Var}(\hat\theta)=E[\hat\theta^2]-(E[\hat\theta])^2\\
\hat\theta=\text{sample statistic}\\
\theta=\text{population parameter}
\end{lgathered}
$$

---
### biased estimator
- mean of sample statistic not equal population parameter

---
### biased estimator formula
$$
\begin{lgathered}
E[\hat\theta]\ne\theta\\
\hat\theta=\text{sample statistic}\\
\theta=\text{population parameter}
\end{lgathered}
$$

---
### debiasing
- convert from biased estimator to unbiased estimator

---
### debiasing formula
$$
\begin{lgathered}
E[\hat\theta]=a\theta+b\\
\widetilde\theta=\frac{\hat\theta-b}{a}\\
E[\widetilde\theta]=\theta\\
\text{Var}(\widetilde\theta)=\frac{1}{a^2}\text{Var}(\hat\theta)\\
\theta=\text{population parameter}\\
\hat\theta=\text{sample statistic}\\
a,b=\text{constant}
\end{lgathered}
$$

---
### mean-squared error
- measure total estimation error with bias-variance tradeoff
- low bias equal high accuracy
- low variance equal high precision

---
### mean-squared error formula
$$
\begin{lgathered}
\text{MSE}(\hat\theta)=E[(\hat\theta-\theta)^2]=\text{Var}(\hat\theta)+[B(\hat\theta)]^2\\
\hat\theta=\text{sample statistic}\\
\theta=\text{population parameter}
\end{lgathered}
$$

---
### point estimate
- single best guess for the population parameter

---
### point estimate formula
$$
\begin{lgathered}
\hat\theta\approx\theta\\
\hat\theta=\text{sample statistic}\\
\theta=\text{population parameter}\\
\end{lgathered}
$$

---
### interval estimate
- construct range of possible values for the population parameter
- aka confidence interval

---
### interval estimate formula
$$
\begin{lgathered}
\text{CI}=\hat\theta\pm(c)(SE)\\
\hat\theta=\text{sample statistic}\\
c=\text{critical value}\\
SE=\text{standard error}
\end{lgathered}
$$

---
### pivotal quantity
- function whose probability distribution independent unknown population parameter

---
### pivotal quantity formula
$$
\begin{lgathered}
P(a\le Q\le b)=1-\alpha\\
P(L\le\theta\le U)=1-\alpha\\
CI=[L,U]\\
Q=Q(X_1,\dots,X_n,\theta)\\
L=L(X_1,\dots,X_n)\\
U=U(X_1,\dots,X_n)
\end{lgathered}
$$

---
### sample size
- number of samples satisfying margin of error

---
### sample size formula
$$
\begin{lgathered}
P(|\hat\theta-\theta|<\epsilon)=1-\alpha\\
P(-c\le\hat\theta\le c)=1-\alpha\\
SE=\sqrt\frac{k}{n}\\
\epsilon=(c)(SE)\\
n=\lceil\frac{ck}{\epsilon^2}\rceil
\end{lgathered}
$$

---
### one-sample mean confidence interval
- construct range of possible values for the one-sample population mean

---
### one-sample mean confidence interval formula
$$
\begin{lgathered}
\begin{cases}
\sigma=\text{known}\\
X\sim N(\mu,\sigma^2)
\end{cases}
&\implies\overline X\pm z_{1-\alpha/2}\frac{\sigma}{\sqrt n}\\
\begin{cases}
\sigma=\text{known}\\
n\ge30
\end{cases}
&\implies\overline X\pm z_{1-\alpha/2}\frac{\sigma}{\sqrt n}\\
\begin{cases}
\sigma=\text{unknown}\\
X\sim N(\mu,\sigma^2)\\
\nu=n-1
\end{cases}
&\implies\overline X\pm t_{1-\alpha/2}\frac{S}{\sqrt n}\\
\begin{cases}
\sigma=\text{unknown}\\
n\ge30
\end{cases}
&\implies\overline X\pm z_{1-\alpha/2}\frac{S}{\sqrt n}
\end{lgathered}
$$

---
### two-sample mean confidence interval
- construct range of possible values for the two-sample population mean

---
### two-sample mean confidence interval formula
$$
\begin{lgathered}
\begin{cases}
\sigma_1,\sigma_2=\text{known}\\
X_i\sim N(\mu_i,\sigma_i^2)
\end{cases}
&\implies(\overline X_1-\overline X_2)\pm z_{1-\alpha/2}\sqrt{\frac{\sigma_1^2}{n_1}+\frac{\sigma_2^2}{n_2}}\\
\begin{cases}
\sigma_1,\sigma_2=\text{known}\\
n_1,n_2\ge30
\end{cases}
&\implies(\overline X_1-\overline X_2)\pm z_{1-\alpha/2}\sqrt{\frac{\sigma_1^2}{n_1}+\frac{\sigma_2^2}{n_2}}\\
\begin{cases}
\sigma_1,\sigma_2=\text{unknown}\\
\sigma_1^2=\sigma_2^2\\
X_i\sim N(\mu_i,\sigma_i^2)\\
\nu=n_1+n_2-2\\
S_p^2=\frac{(n_1-1)S_1^2+(n_2-1)S_2^2}{n_1+n_2-2}
\end{cases}
&\implies(\overline X_1-\overline X_2)\pm t_{1-\alpha/2}S_p\sqrt{\frac1{n_1}+\frac1{n_2}}\\
\begin{cases}
\sigma_1,\sigma_2=\text{unknown}\\
\sigma_1^2\ne\sigma_2^2\\
X_i\sim N(\mu_i,\sigma_i^2)\\
\nu\approx\frac{(S_1^2/n_1+S_2^2/n_2)^2}{\frac{(S_1^2/n_1)^2}{n_1-1}+\frac{(S_2^2/n_2)^2}{n_2-1}}
\end{cases}
&\implies(\overline X_1-\overline X_2)\pm t_{1-\alpha/2}\sqrt{\frac{S_1^2}{n_1}+\frac{S_2^2}{n_2}}\\
\begin{cases}
\sigma_1,\sigma_2=\text{unknown}\\
n_1,n_2\ge30
\end{cases}
&\implies(\overline X_1-\overline X_2)\pm z_{1-\alpha/2}\sqrt{\frac{S_1^2}{n_1}+\frac{S_2^2}{n_2}}\\
\begin{cases}
\sigma_\Delta=\text{unknown}\\
\Delta\sim N(\mu_\Delta,\sigma_\Delta^2)\\
\nu=n-1
\end{cases}
&\implies\overline\Delta\pm t_{1-\alpha/2,\nu}\frac{S_\Delta}{\sqrt n}\\
\begin{cases}
\sigma_\Delta=\text{unknown}\\
n\ge30
\end{cases}
&\implies\overline\Delta\pm z_{1-\alpha/2}\frac{S_\Delta}{\sqrt n}
\end{lgathered}
$$

---
### one-sample proportion confidence interval
- construct range of possible values for the one-sample population proportion

---
### one-sample proportion confidence interval formula
$$
\begin{lgathered}
\begin{cases}
X\sim\text{Ber}(p)\\
\hat p=\frac{1}{n}\sum_{i=1}^nX_i\\
n\hat p\sim\text{Bin}(n,p)\\
n\hat p,n\hat q\ge10
\end{cases}
&\implies\hat p\pm z_{1-\alpha/2}\sqrt{\frac{\hat p\hat q}{n}}
\end{lgathered}
$$

---
### two-sample proportion confidence interval
- construct range of possible values for the two-sample population proportion

---
### two-sample proportion confidence interval formula
$$
\begin{lgathered}
\begin{cases}
X_j\sim\text{Ber}(p_j)\\
\hat p_j=\frac{1}{n}\sum_{i=1}^nX_i\\
n_j\hat p_j\sim\text{Bin}(n_j,p_j)\\
n_j\hat p_j,n_j\hat q_j\ge10
\end{cases}
&\implies(\hat p_1-\hat p_2)\pm z_{1-\alpha/2}\sqrt{\frac{\hat p_1\hat q_1}{n_1}+\frac{\hat p_2\hat q_2}{n_2}}\\
\end{lgathered}
$$

---
### sample variance confidence interval
- construct range of possible values for the population variance

---
### sample variance confidence interval formula
$$
\begin{lgathered}
\left[\frac{(n-1)S^2}{\chi^2_{\alpha/2}},\frac{(n-1)S^2}{\chi^2_{1-\alpha/2}}\right]\\
\nu=n-1
\end{lgathered}
$$

---
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
### method of maximum likelihood
- estimate population parameter by maximizing the likelihood of the observed sample

---
### method of maximum likelihood formula
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
