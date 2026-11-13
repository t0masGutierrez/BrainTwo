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
n_1,n_2\ge30
\end{cases}
&\implies(\overline X_1-\overline X_2)\pm z_{1-\alpha/2}\sqrt{\frac{S_1^2}{n_1}+\frac{S_2^2}{n_2}}\\
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
\sigma_\Delta=\text{unknown}\\
\Delta\sim N(\mu_\Delta,\sigma_\Delta^2)\\
\nu=n-1
\end{cases}
&\implies\overline\Delta\pm t_{1-\alpha/2}\frac{S_\Delta}{\sqrt n}\\
\begin{cases}
\sigma_\Delta=\text{unknown}\\
n\ge30
\end{cases}
&\implies\overline\Delta\pm z_{1-\alpha/2}\frac{S_\Delta}{\sqrt n}
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
