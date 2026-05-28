### estimator
- sample statistic capable of estimating population parameter

---
### biased estimator
- mean of sample statistic not equal population parameter

---
### biased estimator formula
$$
\begin{aligned}
\mu_{X} \ne \mathcal X \\
X = \text{sample statistic} \\
\mathcal X = \text{population parameter}
\end{aligned}
$$

---
### unbiased estimator
- mean of sample statistic equal population parameter

---
### unbiased estimator formula
$$
\begin{aligned}
\mu_{X} = \mathcal X \\
X = \text{sample statistic} \\
\mathcal X = \text{population parameter}
\end{aligned}
$$

---
### critical value
- boundary point on probability distribution between rejection region and non-rejection region

---
### critical value formula
$$
\begin{aligned}
P(X \le c^*) = \alpha \implies c^* = X^{-1}(\alpha) \\
X = \text{sample statistic} \\
c^* = \text{critical value} \\
\alpha = \text{significance level}
\end{aligned}
$$

---
### critical z-value
- boundary point on normal distribution between rejection region and non-rejection region

---
### critical z-value formula
$$
\begin{aligned}
P(Z \le z^*) = \alpha \implies z^* = N^{-1}(\alpha, 0, 1, \text{tail}) \\
P(Z > z^*) = \alpha \implies z^* = N^{-1}(1-\alpha, 0, 1, \text{tail}) \\
P(-z^* \le Z \le z^*) = 1-\alpha \implies z^* = N^{-1}(1-\alpha/2, 0, 1, \text{tail}) \\
\end{aligned}
$$

---
### critical t-value
- boundary point on student distribution between rejection region and non-rejection region

---
### critical t-value formula
$$
\begin{aligned}
P(T \le t^*) = \alpha \implies t^* = S^{-1}(\alpha, d) \\
P(T > t^*) = \alpha \implies t^* = S^{-1}(1-\alpha, d) \\
P(-t^* \le T \le t^*) = 1-\alpha \implies t^* = S^{-1}(1-\alpha/2, d) \\
\end{aligned}
$$

---
### critical chi-square-value
- boundary point on chi-square distribution between rejection region and non-rejection region

---
### critical chi-square-value formula
$$
\begin{aligned}
P(X \le \chi^2_*) = \alpha \implies \chi^2_* = \chi^{-2}(\alpha, d) \\
P(X > \chi^2_*) = 1-\alpha \implies \chi^2_* = \chi^{-2}(1-\alpha, d) \\
P(\chi^2_{L} \le X \le \chi^2_{U}) = 1-\alpha \implies \chi^2_* = \chi^{-2}(1-\alpha/2, d) 
\end{aligned}
$$

---
### confidence interval
- range of guesses for the population parameter

---
### confidence interval formula
$$
\begin{aligned}
CI = X \pm (c^*)(SE) \\
X = \text{sample statistic} \\
c^* = \text{critical value} \\
SE = \text{standard error}
\end{aligned}
$$

---
### mean confidence interval formula
$$
\begin{aligned}
CI=\overline x \pm z^*(\frac{\sigma}{\sqrt n}) \\
CI=\overline x \pm t^*(\frac{s}{\sqrt n}) \\
\overline x = \text{sample mean} \\
z^*, t^* = \text{critical value} \\
\sigma = \text{standard deviation} \\
s = \text{sample standard deviation} \\
n = \text{sample size}
\end{aligned}
$$

---
### proportion confidence interval formula
$$
\begin{aligned}
CI=\hat p \pm z^* \sqrt {\frac{\hat p(1-\hat p)}{n}} \\
\hat p = \text{sample proportion} \\
z^* = \text{critical value} \\
n = \text{sample size}
\end{aligned}
$$

---
### standard deviation confidence interval formula
$$
\begin{aligned}
CI=\sqrt{\frac{(n-1)s^2}{\chi^2_{\alpha/2}}} \leq \sigma \leq \sqrt{\frac{(n-1)s^2}{\chi^2_{1-\alpha/2}}} \\
n = \text{sample size} \\
s = \text{sample standard deviation} \\
\chi^2_* = \text{critical value}
\end{aligned}
$$

---
### correct confidence interval
- 95% confidence that the population parameter lie inside the confidence interval

---
### incorrect confidence interval
- 95% chance that the population parameter lie outside the critical region
- 95% of sample statistic lie between lower boundary and upper boundary

---
### confidence level
- probability of the population parameter lying inside the confidence interval

---
### confidence level formula
$$
\begin{aligned}
\text{1-tail CI} = 1-2\alpha \\
\text{2-tail CI} = 1-\alpha \\
\alpha = \text{significance level}
\end{aligned}
$$

---
### margin of error
- maximum likely amount of error between statistic and parameter

---
### margin of error formula
$$
\begin{aligned}
E = (c^*)(SE) \\
c^* = \text{critical value} \\
SE = \text{standard error}
\end{aligned}
$$

---
### degrees of freedom
- number of sample data that can vary without changing estimate

---
### degrees of freedom formula
$$
\begin{aligned}
df = n-1 \\
n = \text{sample size}
\end{aligned}
$$

---
### point estimate
- single best guess for the population parameter

---
### point estimate formula
$$
\begin{aligned}
X \approx \mathcal X \\
X = \text{sample statistic} \\
\mathcal X = \text{population parameter} \\
\end{aligned}
$$

---
### sample mean
- point estimate of population mean

---
### mean confidence interval assumptions
- random sample
- independent observations
- normal distribution or large sample size

---
### construct mean confidence interval
- calculate sample proportion
- calculate standard error
- find critical value
- calculate margin of error
- $\overline x - E \le \mu \le \overline x + E$ 

---
### mean z-interval formula
$$
\begin{aligned}
\text{avgZ-int}(\sigma, \overline x, n, 1-\alpha) \\
\sigma = \text{standard deviation} \\
\overline x = \text{sample mean} \\
n = \text{sample size} \\
\alpha = \text{significance level}
\end{aligned}
$$

---
### mean t-interval formula
$$
\begin{aligned}
\text{avgT-int}(\overline x, s, n, 1-\alpha) \\
\sigma = \text{standard deviation} \\
\overline x = \text{sample mean} \\
n = \text{sample size} \\
\alpha = \text{significance level}
\end{aligned}
$$

---
### sample proportion
- point estimate of population proportion

---
### proportion confidence interval assumptions
- random sample
- independent observations
- binomial random variable
- expected number of success greater or equal 10
- expected number of failures greater or equal 10

---
### construct proportion confidence interval
- calculate sample proportion
- calculate standard error
- find critical value
- calculate margin of error
- $\hat p - E \le p \le \hat p + E$ 

---
### proportion z-interval formula
$$
\begin{aligned}
\text{propZ-int}(x, n, 1-\alpha) \\
x = \text{number of successes} \\
n = \text{sample size} \\
\alpha = \text{significance level}
\end{aligned}
$$

---
### sample standard deviation
- point estimate of population standard deviation

---
### standard deviation confidence interval requirements
- random samples
- independent observations
- normal distribution

---
### construct standard deviation confidence interval
- calculate sample standard deviation
- calculate standard error
- find critical value(s)
- calculate margin of error
- $\sqrt{\frac{(n-1)s^2}{\chi^2_{\alpha/2}}} \leq \sigma \leq \sqrt{\frac{(n-1)s^2}{\chi^2_{1-\alpha/2}}}$ 

---
