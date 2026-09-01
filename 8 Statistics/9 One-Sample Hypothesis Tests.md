### hypothesis
- claim about population parameter

---
### hypothesis test
- evaluate hypothesis by analyzing the significance of sample data

---
### conduct hypothesis test
- state hypotheses
- verify assumptions
- choose significance level
- choose method
- reject or fail to reject null hypothesis
- state conclusion

---
### null hypothesis
- population parameter equal claim
- statement of equality

---
### null hypothesis formula
$$
\begin{aligned}
H_{0}:\quad\ge,\quad=,\quad\le
\end{aligned}
$$

---
### alternative hypothesis
- population parameter not equal claim
- statement of inequality

---
### alternative hypothesis formula
$$
\begin{aligned}
H_{1}:\quad>,\quad\ne,\quad<
\end{aligned}
$$

---
### reject null hypothesis
- there's sufficient evidence for the alternative hypothesis

---
### fail to reject null hypothesis
- there's not sufficient evidence for the alternative hypothesis

---
### type I error
- rejecting null hypothesis given its true
- false positive

---
### type I error formula
$$
\begin{aligned}
\alpha=\text{reject }H_{0}\mid H_{0}\text{ true}
\end{aligned}
$$

---
### type II error
- failing to reject null hypothesis given its false
- false negative

---
### type II error formula
$$
\begin{aligned}
\beta=\text{fail to reject }H_{0}\mid H_{0}\text{ false}
\end{aligned}
$$

---
### power of hypothesis test
- measure of hypothesis test effectiveness

---
### power of hypothesis test formula
$$
\begin{aligned}
1-\beta=P(\text{reject }H_{0}\mid H_{0}\text{ false})
\end{aligned}
$$

---
### test statistic
- number of standard deviations between sample statistic and null hypothesis

---
### test statistic formula
$$
\begin{aligned}
\mathcal T=\frac{\theta-\theta_{0}}{SE(\theta)}\\
\theta=\text{sample statistic}\\
\theta_{0}=\text{null hypothesis}\\
SE=\text{standard error}
\end{aligned}
$$

---
### critical region
- area under the probability distribution where we reject null hypothesis

---
### critical region formula
$$
\begin{aligned}
\set{\mathcal T\mid\text{reject }H_0}\\
\mathcal T=\text{test statistic}\\
H_0=\text{null hypothesis}
\end{aligned}
$$

---
### two-tail test
- critical region under both tails

---
### two-tail test formula
$$
\begin{aligned}
H_1:\theta\ne\theta_0\\
|\mathcal T|>c^*
\end{aligned}
$$

---
### left-tail test
- critical region under left tail

---
### left-tail test formula
$$
\begin{aligned}
H_1:\theta<\theta_0\\
\mathcal T<c^*
\end{aligned}
$$

---
### right-tail test
- critical region under right tail

---
### right-tail test formula
$$
\begin{aligned}
H_1:\theta>\theta_0\\
\mathcal T>c^*
\end{aligned}
$$

---
### mean z-test assumptions
- numerical response variable
- no explanatory variable
- random sample
- independent observations
- normal population distribution or large sample size
- known standard deviation

---
### mean z-test formula
$$
\begin{aligned}
\text{avgZ-test}(\mu_{0},\sigma,\overline X,n,\mu_{1})\\
\mu_{0}=\text{null hypothesis}\\
\sigma=\text{standard deviation}\\
\overline X=\text{sample mean}\\
n=\text{sample size}\\
\mu_{1}=\text{alternative hypothesis}
\end{aligned}
$$

---
### critical value hypothesis test
- compare test statistic and critical value

---
### conduct critical value hypothesis test
- calculate test statistic
- find critical value
- if test statistic inside critical region then reject null hypothesis
- if test statistic outside critical region then fail to reject null hypothesis

---
### p value
- probability of test statistic at least as extreme as observed test statistic given the null hypothesis

---
### p value formula
$$
\begin{aligned}
p=\begin{cases}
P(|\mathcal T|\ge\tau\mid H_0),\quad H_1:\theta\ne\theta_0\\
P(\mathcal T\le\tau\mid H_0),\quad H_1:\theta<\theta_0\\
P(\mathcal T\ge\tau\mid H_0),\quad H_1:\theta>\theta_0
\end{cases}\\
\mathcal T=\text{test statistic}\\
\tau=\text{observed test statistic}\\
\theta=\text{sample statistic}\\
\theta_0=\text{null hypothesis}
\end{aligned}
$$

---
### p value hypothesis test
- compare significance level and p value

---
### conduct p value hypothesis test
- calculate test statistic
- calculate p value
- if p value less or equal significance level then reject null hypothesis
- if p value greater significance level then fail to reject null hypothesis

---
### confidence interval hypothesis test
- compare critical value and confidence interval

---
### conduct confidence interval hypothesis test
- find critical value
- construct confidence interval
- if null hypothesis outside confidence interval then reject null hypothesis
- if null hypothesis inside confidence interval then fail to reject null hypothesis

---
### mean t-test assumptions
- numerical response variable
- no explanatory variable
- random sample
- independent observations
- normal population distribution or large sample size
- unknown standard deviation

---
### mean t-test formula
$$
\begin{aligned}
\text{avgT-test}(\mu_{0},s,\overline X,n,\mu_{1})\\
\mu_{0}=\text{null hypothesis}\\
\overline X=\text{sample mean}\\
s=\text{sample standard deviation}\\
n=\text{sample size}\\
\mu_{1}=\text{alternative hypothesis}
\end{aligned}
$$

---
### proportion z-test assumptions
- categorical response variable with two categories
- no explanatory variable
- random sample
- independent observations
- binomial random variable
- at least 10 successes
- at least 10 failures

---
### proportion z-test formula
$$
\begin{aligned}
\text{propZ-test}(\mu_{0},\sigma,\overline X,n,\mu_{1})\\
\mu_{0}=\text{null hypothesis}\\
\sigma=\text{standard deviation}\\
\overline X=\text{sample mean}\\
n=\text{sample size}\\
\mu_{1}=\text{alternative hypothesis}
\end{aligned}
$$

---
