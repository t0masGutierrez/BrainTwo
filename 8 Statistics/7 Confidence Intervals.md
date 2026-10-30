### estimator
- sample statistic capable of estimating population parameter

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
B=E[\hat\theta]-\theta\\
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
### unbiased estimator
- mean of sample statistic equal population parameter

---
### unbiased estimator formula
$$
\begin{lgathered}
E[\hat\theta]\ne\theta\\
\hat\theta=\text{sample statistic}\\
\theta=\text{population parameter}
\end{lgathered}
$$

---
### confidence level
- probability of the population parameter lying inside the confidence interval

---
### confidence level formula
$$
\begin{lgathered}
P(\theta\le\hat\theta+E)=1-\alpha\\
P(\theta\ge\hat\theta-E)=1-\alpha\\
P(\hat\theta-E\le\theta\le\hat\theta+E)=1-\alpha\implies P(\theta<\hat\theta-E)=\frac{\alpha}{2}\\
P(\hat\theta-E\le\theta\le\hat\theta+E)=1-\alpha\implies P(\theta>\hat\theta+E)=\frac{\alpha}{2}\\
\alpha=\text{significance level}
\end{lgathered}
$$

---
### degrees of freedom
- number of sample data that can vary while satisfying the constraint(s) associated with estimate

---
### degrees of freedom formula
$$
\begin{lgathered}
\nu=n-k\\
n=\text{sample size}\\
k=\text{number of constraints}
\end{lgathered}
$$

---
### critical value
- quantile of probability distribution between rejection region and nonrejection region

---
### critical value formula
$$
\begin{lgathered}
P(\hat\theta<c^{*})=\alpha\implies c^{*}=\hat\theta^{-1}(\alpha,\text{df})\\
P(\hat\theta>c^{*})=\alpha\implies c^{*}=\hat\theta^{-1}(1-\alpha,\text{df})\\
P(-c^*\le\hat\theta\le c^{*})=1-\alpha\implies c^{*}=\hat\theta^{-1}(1-\alpha/2,\text{df})\\
\hat\theta=\text{sample statistic}\\
c^{*}=\text{critical value}\\
\alpha=\text{significance level}\\
\text{df}=\text{degrees of freedom}
\end{lgathered}
$$

---
### margin of error
- maximum likely amount of error between statistic and parameter

---
### margin of error formula
$$
\begin{lgathered}
E=(c^{*})(SE)\\
c^{*}=\text{critical value}\\
SE=\text{standard error}
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
### confidence interval
- verify assumptions
- calculate sample statistic
- calculate standard error
- find critical value
- calculate margin of error
- construct range of possible values for population parameter

---
### confidence interval formula
$$
\begin{lgathered}
\text{CI}=\hat\theta\pm(c^{*})(SE)\\
\hat\theta=\text{sample statistic}\\
c^{*}=\text{critical value}\\
SE=\text{standard error}
\end{lgathered}
$$

---
### correct confidence interval
- 95% probability that the population parameter lie inside the confidence interval

---
### incorrect confidence interval
- 95% of the population lie inside the confidence interval
- 95% of sample statistic lie between lower boundary and upper boundary

---
### mean confidence interval assumptions
- random sample
- independent observations
- normal population distribution or large sample size

---
### mean confidence interval formula
$$
\begin{lgathered}
\text{CI}=\overline X\pm z^{*}(\frac{\sigma}{\sqrt n})\\
\text{CI}=\overline X\pm t^{*}(\frac{s}{\sqrt n})\\
\overline X=\text{sample mean}\\
z^{*},t^{*}=\text{critical value}\\
\sigma=\text{standard deviation}\\
n=\text{sample size}\\
s=\text{sample standard deviation}
\end{lgathered}
$$

---
### proportion confidence interval assumptions
- random sample
- independent observations
- binomial random variable
- at least 10 successes
- at least 10 failures

---
### proportion confidence interval formula
$$
\begin{lgathered}
\text{CI}=\hat p\pm z^{*}\sqrt{\frac{\hat p(1-\hat p)}{n}}\\
\hat p=\text{sample proportion}\\
z^{*}=\text{critical value}\\
n=\text{sample size}\\
\end{lgathered}
$$

---
### standard deviation confidence interval assumptions
- random sample
- independent observations
- normal population distribution

---
### standard deviation confidence interval formula
$$
\begin{lgathered}
\text{CI}=\left(\sqrt{\frac{(n-1)s^{2}}{\chi^{2}_{\alpha/2}}},\sqrt{\frac{(n-1)s^{2}}{\chi^{2}_{1-\alpha/2}}}\right)\\
n=\text{sample size}\\
s=\text{sample standard deviation}\\
\chi^{2}_{*}=\text{critical value}
\end{lgathered}
$$

---
