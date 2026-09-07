### one sample hypothesis test
- compare sample statistic with population parameter

---
### two sample hypothesis test
- compare population parameter between group 1 and group 2

---
### independent grouping
- there exists no meaningful relationship between group 1 and group 2
- sample size can differ

---
### dependent grouping
- there exists paired/matched relationship between group 1 and group 2
- sample size cannot differ

---
### two sample null hypothesis
- difference of population parameter equal zero

---
### two sample null hypothesis formula
$$
\begin{aligned}
H_{0}:\theta_1-\theta_{2}=0
\end{aligned}
$$

---
### two sample alternative hypothesis
- difference of population parameter not equal zero

---
### two sample alternative hypothesis formula
$$
\begin{aligned}
H_1:\quad>,\quad\ne,\quad<\\
\end{aligned}
$$

---
### unpooled variance
- unequal variance between group 1 and group 2

---
### unpooled variance formula
$$
\begin{aligned}
s^{2}=\frac{\sum_{i=1}^{n}(x_{i}-\overline X)^{2}}{n-1}\\
SE(\overline X_{1}-\overline X_{2})=\sqrt{\frac{s_{1}^{2}}{n_{1}}+\frac{s_{2}^{2}}{n_{2}}}\\
SE(\hat p_{1}-\hat p_{2})=\sqrt{\frac{\hat p_{1}(1-\hat p_{1})}{n_{1}}+\frac{\hat p_{2}(1-\hat p_{2})}{n_{2}}}\\
\text{df}=\frac{(\frac{s_1^2}{n_1}+\frac{s_2^2}{n_2})^2}{\frac{(s_1^2/n_1)^2}{n_1-1}+\frac{(s_2^2/n_2)^2}{n_2-1}}\\
x=\text{data}\\
\overline X=\text{sample mean}\\
n=\text{sample size}\\
\hat p=\text{sample proportion}
\end{aligned}
$$

---
### pooled variance
- equal variance between group 1 and group 2

---
### pooled variance formula
$$
\begin{aligned}
s_p^{2}=\frac{(n_{1}-1)s_{1}^{2}+(n_{2}-1)s_{2}^{2}}{n_{1}+n_{2}-2}\\
SE(\overline X_{1}-\overline X_{2})=s_p\sqrt{\frac{1}{n_{1}}+\frac{1}{n_{2}}}\\
SE(\hat p_{1}-\hat p_{2})=\sqrt{\hat p(1-\hat p)(\frac{1}{n_{1}}+\frac{1}{n_{2})}}\\
\text{df}=n_1+n_2-2\\
s=\text{sample standard deviation}\\
n=\text{sample size}\\
\hat p=\text{sample proportion}
\end{aligned}
$$

---
### two mean independent hypothesis test assumptions
- numerical response variable
- categorical explanatory variable with two categories
- random sample
- independent observations
- normal population distribution or large sample size
- unknown standard deviation
- independent grouping

---
### two mean independent hypothesis test formula
$$
\begin{aligned}
t=\frac{\overline X_{1}-\overline X_{2}-0}{SE(\overline X_{1}-\overline X_{2})}\\
\overline X=\text{sample mean}\\
SE=\text{standard error}\\
\end{aligned}
$$

---
### two mean dependent hypothesis test assumptions
- numerical response variable
- no explanatory variable
- random sample
- independent observations
- normal population distribution or large sample size
- unknown standard deviation
- dependent grouping

---
### two mean dependent hypothesis test formula
$$
\begin{aligned}
t=\frac{\overline{X_{1}-X_{2}}-0}{s/\sqrt{n}}\\
\text{df}=n-1\\
s=\text{sample standard deviation}\\
n=\text{sample size}
\end{aligned}
$$

---
### two proportion independent hypothesis test assumptions
- categorical response variable with two categories
- categorical explanatory variable with two categories
- random sample
- independent observations
- expected number of success greater or equal 10
- expected number of failures greater or equal 10
- independent grouping
- equal variance

---
### two proportion independent hypothesis test formula
$$
\begin{aligned}
z=\frac{\hat p_1-\hat p_2-0}{\sqrt{\hat p(1-\hat p)(\frac{1}{n_{1}}+\frac{1}{n_{2})}}}\\
\hat p=\frac{x_1+x_2}{n_1+n_2}\\
\hat p=\text{sample proportion}\\
n=\text{sample size}\\
x=\text{data}
\end{aligned}
$$

---
### two variance independent hypothesis test assumptions
- numerical response variable
- categorical explanatory variable with two categories
- random samples
- independent observations
- normal population distribution
- independent grouping

---
### two variance independent hypothesis test formula
$$
\begin{aligned}
F=\frac{s_{1}^{2}}{s_{2}^{2}}\\
\text{df}=n-1\\
s=\text{sample standard deviation}\\
n=\text{sample size}
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
|\mathcal T|>c^{*}\implies\not H_{0}\\
|\mathcal T|\le c^{*}\implies H_{0}\\
p\le\alpha\implies\not H_{0}\\
p>\alpha\implies H_{0}\\
0\not\in CI\implies\not H_{0}\\
0\in CI\implies H_{0}
\end{aligned}
$$

---
