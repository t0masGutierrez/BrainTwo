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
H _ { 0 } : \mu _ { 1 } - \mu _ { 2 } = 0 \\
H _ { 0 } : p _ { 1 } - p _ { 2 } = 0 \\
\end{aligned}
$$

---
### two sample alternative hypothesis
- difference of population parameter not equal zero

---
### two sample alternative hypothesis formula
$$
\begin{aligned}
H _ { a } : \quad > , \quad \ne , \quad < \\
\end{aligned}
$$

---
### unpooled variance
- unequal variance between group 1 and group 2

---
### unpooled variance formula
$$
\begin{aligned}
s _ { 1 } ^ { 2 } = \frac { \sum _ { i = 1 } ^ { n } ( x _ { 1 i } - \overline x _ { 1 } ) ^ { 2 } } { n _ { 1 } - 1 } \\
s _ { 2 } ^ { 2 } = \frac { \sum _ { i = 1 } ^ { n } ( x _ { 2 i } - \overline x _ { 2 } ) ^ { 2 } } { n _ { 2 } - 1 } \\
x = \text { data } \\
\overline x = \text { sample mean } \\
n = \text { sample size }
\end{aligned}
$$

---
### pooled variance
- equal variance between group 1 and group 2

---
### pooled variance formula
$$
\begin{aligned}
s ^ { 2 } = \frac { ( n _ { 1 } - 1 ) s _ { 1 } ^ { 2 } + ( n _ { 2 } - 1 ) s _ { 2 } ^ { 2 } } { n _ { 1 } + n _ { 2 } - 2 } \\
s = \text { sample standard deviation } \\
n = \text { sample size }
\end{aligned}
$$

---
### mean standard error
- standard deviation of mean sampling distribution

---
### mean unpooled standard error formula
$$
\begin{aligned}
S E ( \overline x _ { 1 } - \overline x _ { 2 } ) = \sqrt { \frac { s _ { 1 } ^ { 2 } } { n _ { 1 } } + \frac { s _ { 2 } ^ { 2 } } { n _ { 2 } } } \\
s = \text { sample standard deviation } \\
n = \text { sample size }
\end{aligned}
$$

---
### mean pooled standard error formula
$$
\begin{aligned}
S E ( \overline x _ { 1 } - \overline x _ { 2 } ) = s \sqrt { \frac { 1 } { n _ { 1 } } + \frac { 1 } { n _ { 2 } } } \\
s = \text { sample standard deviation } \\
n = \text { sample size }
\end{aligned}
$$

---
### unpooled proportion
- unequal proportion between group 1 and group 2

---
### unpooled proportion formula
$$
\begin{aligned}
\hat p _ { 1 } = \frac { x _ { 1 } } { n _ { 1 } } \\
\hat p _ { 2 } = \frac { x _ { 2 } } { n _ { 2 } } \\
x = \text { data } \\
n = \text { sample size }
\end{aligned}
$$

---
### pooled proportion
- equal proportion between group 1 and group 2

---
### pooled proportion formula
$$
\begin{aligned}
\hat p = \frac { x _ { 1 } + x _ { 2 } } { n _ { 1 } + n _ { 2 } } \\
x = \text { data } \\
n = \text { sample size }
\end{aligned}
$$

---
### proportion standard error
- standard deviation of proportion sampling distribution

---
### proportion unpooled standard error formula
$$
\begin{aligned}
S E ( \hat p _ { 1 } - \hat p _ { 2 } ) = \sqrt { \frac { \hat p _ { 1 } ( 1 - \hat p _ { 1 } ) } { n _ { 1 } } + \frac { \hat p _ { 2 } ( 1 - \hat p _ { 2 } ) } { n _ { 2 } } } \\
\hat p = \text { sample proportion } \\
n = \text { sample size }
\end{aligned}
$$

---
### proportion pooled standard error formula
$$
\begin{aligned}
S E ( \hat p _ { 1 } - \hat p _ { 2 } ) = \sqrt { \hat p ( 1 - \hat p ) ( \frac { 1 } { n _ { 1 } } + \frac { 1 } { n _ { 2 } ) } } \\
\hat p = \text { sample proportion } \\
n = \text { sample size }
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
t = \frac { \overline d - 0 } { S E ( \overline d ) } \\
\overline d = \overline x _ { 1 } - \overline x _ { 2 } \\
d f = n _ { 1 } + n _ { 2 } - 2 \\
\overline x = \text { sample mean } \\
S E = \text { standard error } \\
n = \text { sample size }
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
t = \frac { \overline d - 0 } { S E ( \overline d ) } \\
\overline d = \frac { \sum _ { i } \overline d _ { i } } { n } \\
d _ { i } = \overline x _ { 1 i } - \overline x _ { 2 i } \\
d f = n - 1 \\
\overline x = \text { sample mean } \\
S E = \text { standard error } \\
n = \text { sample size }
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
z = \frac { \hat d - 0 } { S E ( \hat d ) } \\
\hat d = \hat p _ { 1 } - \hat p _ { 2 } \\
\hat p = \text { sample proportion } \\
S E = \text { standard error }
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
F = \frac { s _ { 1 } ^ { 2 } } { s _ { 2 } ^ { 2 } } \\
s = \text { sample standard deviation }
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
| X | > c ^ { * } \implies \not H _ { 0 } \\
| X | \le c ^ { * } \implies H _ { 0 } \\
p \le \alpha \implies \not H _ { 0 } \\
p > \alpha \implies H _ { 0 } \\
0 \not \in C I \implies \not H _ { 0 } \\
0 \in C I \implies H _ { 0 }
\end{aligned}
$$

---
