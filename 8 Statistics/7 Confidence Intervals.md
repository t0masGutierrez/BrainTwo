### estimator
- sample statistic capable of estimating population parameter

---
### estimator formula
$$
\begin{lgathered}
\theta
\end{lgathered}
$$

---
### bias
- systematic overestimation/underestimation of the population parameter

---
### bias formula
$$
\begin{lgathered}
B=E[\theta]-\Theta\\
\theta=\text{sample statistic}\\
\Theta=\text{population parameter}
\end{lgathered}
$$

---
### biased estimator
- mean of sample statistic not equal population parameter

---
### biased estimator formula
$$
\begin{lgathered}
\mu_{\theta}\ne\Theta\\
\theta=\text{sample statistic}\\
\Theta=\text{population parameter}
\end{lgathered}
$$

---
### unbiased estimator
- mean of sample statistic equal population parameter

---
### unbiased estimator formula
$$
\begin{lgathered}
\mu_{\theta}=\Theta\\
\theta=\text{sample statistic}\\
\Theta=\text{population parameter}
\end{lgathered}
$$

---
### confidence level
- probability of the population parameter lying inside the confidence interval

---
### confidence level formula
$$
\begin{lgathered}
\text{1-tail CI}=1-2\alpha\\
\text{2-tail CI}=1-\alpha\\
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
\text{df}=n-k\\
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
P(\theta<c^{*})=\alpha\implies c^{*}=\theta^{-1}(\alpha,\text{df})\\
P(\theta>c^{*})=\alpha\implies c^{*}=\theta^{-1}(1-\alpha,\text{df})\\
P(-c^*\le\theta\le c^{*})=1-\alpha\implies c^{*}=\theta^{-1}(1-\alpha/2,\text{df})\\
\theta=\text{sample statistic}\\
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
\theta\approx\Theta\\
\theta=\text{sample statistic}\\
\Theta=\text{population parameter}\\
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
\text{CI}=\theta\pm(c^{*})(SE)\\
\theta=\text{sample statistic}\\
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
