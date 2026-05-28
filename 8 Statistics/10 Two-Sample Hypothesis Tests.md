### one sample hypothesis test
- compare sample statistic with population parameter

---
### two sample hypothesis test
- compare population parameter between group 1 and group 2

---
### conduct two sample hypothesis test
- state hypotheses
- verify assumptions
- choose significance level  
- calculate test statistic 
- choose method
- reject or fail to reject null hypothesis  
- state conclusion

---
### independent sample
- there exists no meaningful relationship between group 1 and group 2

---
### dependent sample
- there exists meaningful relationship between group 1 and group 2

---
### two sample null hypothesis
- difference of population parameter equal zero  

---
### two sample null hypothesis formula
$$
\begin{aligned}
H_{0}: \mu_{1}-\mu_{2} = 0 \\
H_{0}: p_{1}-p_{2} = 0 \\
\end{aligned}
$$

---
### two sample alternative hypothesis
- difference of population parameter not equal zero

---
### two sample alternative hypothesis formula
$$
\begin{aligned}
H_{a}: \quad >, \quad \ne, \quad < \\
\end{aligned}
$$

---
### unpooled variance
- unequal variance between group 1 and group 2

---
### unpooled variance formula
$$
\begin{aligned}
s_{1}^2 = \frac{\sum_{i=1}^n (x_{1i}- \overline x_{1})^2}{n_{1}-1} \\
s_{2}^2 = \frac{\sum_{i=1}^n (x_{2i}- \overline x_{2})^2}{n_{2}-1} \\
x = \text{data} \\
\overline x = \text{sample mean} \\
n = \text{sample size}
\end{aligned}
$$

---
### pooled variance
- equal variance between group 1 and group 2

---
### pooled variance formula
$$
\begin{aligned}
s^2 = \frac{(n_{1}-1)s_{1}^2 + (n_{2}-1)s_{2}^2}{n_{1}+n_{2}-2} \\
s = \text{sample standard deviation} \\
n = \text{sample size}
\end{aligned}
$$

---
### mean standard error
- standard deviation of mean sampling distribution

---
### mean unpooled standard error formula
$$
\begin{aligned}
SE(\overline x_{1} - \overline x_{2}) = \sqrt{\frac{s_{1}^2}{n_{1}} + \frac{s_{2}^2}{n_{2}}} \\
s = \text{sample standard deviation} \\
n = \text{sample size}
\end{aligned}
$$

---
### mean pooled standard error formula
$$
\begin{aligned}
SE(\overline x_{1} - \overline x_{2}) = s\sqrt{\frac{1}{n_{1}} + \frac{1}{n_{2}}} \\
s = \text{sample standard deviation} \\
n = \text{sample size}
\end{aligned}
$$

---
### unpooled proportion
- unequal proportion between group 1 and group 2

---
### unpooled proportion formula
$$
\begin{aligned}
\hat p_{1} = \frac{x_{1}}{n_{1}} \\
\hat p_{2} = \frac{x_{2}}{n_{2}} \\
x = \text{data} \\
n = \text{sample size}
\end{aligned}
$$

---
### pooled proportion
- equal proportion between group 1 and group 2

---
### pooled proportion formula
$$
\begin{aligned}
\hat p = \frac{x_{1} + x_{2}}{n_{1} + n_{2}} \\
x = \text{data} \\
n = \text{sample size}
\end{aligned}
$$

---
### proportion standard error
- standard deviation of proportion sampling distribution

---
### proportion unpooled standard error formula
$$
\begin{aligned}
SE(\hat p_{1} - \hat p_{2}) = \sqrt{\frac{\hat p_{1}(1-\hat p_{1})}{n_{1}} + \frac{\hat p_{2}(1-\hat p_{2})}{n_{2}}} \\
\hat p = \text{sample proportion} \\
n = \text{sample size}
\end{aligned}
$$

---
### proportion pooled standard error formula
$$
\begin{aligned}
SE(\hat p_{1} - \hat p_{2}) = \sqrt{\hat p(1-\hat p)(\frac{1}{n_{1}} + \frac{1}{n_{2})}} \\
\hat p = \text{sample proportion} \\
n = \text{sample size}
\end{aligned}
$$

---
### sample mean
- point estimate of population mean

---
### two mean independent hypothesis test assumptions
- numerical response variable
- categorical explanatory variable with two categories
- random sample
- independent observations
- normal distribution or large sample size
- unknown standard deviation
- independent groups
- equal variance

---
### two mean independent t-score formula
$$
\begin{aligned}
t = \frac{\overline d - 0}{SE(\overline d)} \\
\overline d = \overline x_{1} - \overline x_{2} \\
df = n_{1} + n_{2} - 2 \\
\overline x = \text{sample mean} \\
SE = \text{standard error} \\
n = \text{sample size} 
\end{aligned}
$$

---
### two mean dependent hypothesis test assumptions
- numerical response variable
- no explanatory variable
- random sample
- independent observations
- normal distribution or large sample size
- unknown standard deviation
- paired/matched groups
- unequal variance

---
### two mean dependent t-score formula
$$
\begin{aligned}
t = \frac{\overline d - 0}{SE(\overline d)} \\
\overline d = \frac{\sum_{i} \overline d_{i}}{n} \\
d_{i} = \overline x_{1i} - \overline x_{2i} \\
df = n - 1 \\
\overline x = \text{sample mean} \\
SE = \text{standard error} \\
n = \text{sample size}
\end{aligned}
$$

---
### sample proportion
- point estimate of population proportion

---
### two proportion independent hypothesis test assumptions
- categorical response variable with two categories
- categorical explanatory variable with two categories
- random sample
- independent observations
- expected number of success greater or equal 10
- expected number of failures greater or equal 10
- independent groups
- equal proportion

---
### two proportion independent z-score formula
$$
\begin{aligned}
z = \frac{\hat d - 0}{SE(\hat d)} \\
\hat d = \hat p_{1} - \hat p_{2} \\
\hat p = \text{sample proportion} \\
SE = \text{standard error} 
\end{aligned}
$$

---
### sample variance
- point estimate of population variance

---
### two variance independent hypothesis test assumptions
- numerical response variable
- categorical explanatory variable with two categories
- random samples
- independent observations
- normal distribution
- independent groups

---
### two variance independent F-score formula
$$
\begin{aligned}
F = \frac{s_{1}^2}{s_{2}^2} \\
s = \text{sample standard deviation}
\end{aligned}
$$

---
### two sample hypothesis test method
- critical value 
- p value
- confidence interval

---
### two sample hypothesis test method formula
$$
\begin{aligned}
|X| > c^* \implies \not H_{0} \\
|X| \le c^* \implies H_{0} \\
p \le \alpha \implies \not H_{0} \\
p > \alpha \implies H_{0} \\
0 \not\in CI \implies \not H_{0} \\
0 \in CI \implies H_{0}
\end{aligned}
$$

---
