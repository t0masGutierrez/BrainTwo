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
\text{Var}(\widetilde\theta)=\frac{1}{a^2}\text{Var}(\hat\theta)
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
\text{MSE}(\hat\theta)=E[(\hat\theta-\theta)^2]=\text{Var}(\hat\theta)+[B(\hat\theta)]^2
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
\text{CI}=\hat\theta\pm(c^{*})(SE)\\
\hat\theta=\text{sample statistic}\\
c^{*}=\text{critical value}\\
SE=\text{standard error}
\end{lgathered}
$$

---
### pivotal quantity
- function whose probability distribution independent unknown population parameter
- identify unknown population parameter
- choose related sample statistic with known sampling distribution
- isolate unknown population parameter

---
### pivotal quantity
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
### sample mean confidence interval
- random sample
- independent observations
- identical probability distribution
- normal population or large sample size
- known population variance

---
### sample mean confidence interval formula
$$
\begin{lgathered}
X\sim N(\mu,\sigma^2)\implies\overline X\pm z_{1-\alpha/2}\frac{\sigma}{\sqrt n}\\
n\ge30\implies\overline X\pm z_{1-\alpha/2}\frac{\sigma}{\sqrt n}\\
\end{lgathered}
$$

---
### sample mean confidence interval
- random sample
- independent observations
- identical probability distribution
- normal population or large sample size
- unknown population variance

---
### sample mean confidence interval formula
$$
\begin{lgathered}
X\sim N(\mu,\sigma^2)\implies\overline X\pm t_{1-\alpha/2}\frac{S}{\sqrt n}\\
n\ge30\implies\overline X\pm z_{1-\alpha/2}\frac{S}{\sqrt n}\\
\nu=n-1
\end{lgathered}
$$

---
### term
- definition

---
### term
- definition

---
