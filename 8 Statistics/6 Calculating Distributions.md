### standardization
- convert from random variable to standardized random variable

---
### standardization formula
$$
\begin{aligned}
(X = x) \sim (\mu, \sigma) \implies (Y = y) \sim (\mu', \sigma ') \\
X = \text{random variable} \\
x = \text{real number} \\
Y = \text{standardized random variable} \\
y = \text{y-score}
\end{aligned}
$$

---
### normal
- probability as function of mean and standard deviation

---
### normal formula
$$
\begin{aligned}
X \sim N(x_{1}, x_{2}, \mu, \sigma) = P(x_{1} \le X \le x_{2}) \\
x = \text{data} \\
\mu = \text{mean} \\
\sigma = \text{standard deviation} 
\end{aligned}
$$

---
### inverse normal
- value of random variable as function of cumulative distribution function

---
### inverse normal formula
$$
\begin{aligned}
x= N^{-1}(c, \mu, \sigma, \text{tail}) \\
c = \text{cumulative probability of success} \\
\mu = \text{mean} \\
\sigma = \text{standard deviation} \\
\text{tail} = \text{direction of accumulation}
\end{aligned}
$$

---
### z-score
- number of standard deviations from the mean

---
### z-score formula
$$
\begin{aligned}
z = \frac{x - \mu}{\sigma} \\
x = \text{data} \\
\mu = \text{mean} \\
\sigma = \text{standard deviation}
\end{aligned}
$$

---
### standard normal
- probability as function of z-score

---
### standard normal formula
$$
\begin{aligned}
Z \sim N(z_{1}, z_{2}, 0, 1) = P(z_{1} \le Z \le z_{2}) \\
z = \text{z-score} 
\end{aligned}
$$

---
### inverse standard normal
- z-score as function of cumulative distribution function

---
### inverse standard normal formula
$$
\begin{aligned}
z = N^{-1}(c, 0, 1, \text{tail}) \\
c = \text{cumulative probability of success} \\
\text{tail} = \text{direction of accumulation}
\end{aligned}
$$

---
### t-score
- number of standard errors from the mean

---
### t-score formula
$$
\begin{aligned}
t = \frac{\overline x - \mu}{s/\sqrt n} \\
df = n - 1 \\
\overline x = \text{sample mean} \\
\mu = \text{mean} \\
s = \text{sample standard deviation} \\
n = \text{sample size} \\
df = \text{degrees of freedom} 
\end{aligned}
$$

---
### student
- probability as function of t-score

---
### student formula
$$
\begin{aligned}
T \sim S(t_{1}, t_{2}, df) = P(t_{1} \le T \le t_{2}) \\
t = \text{t-score} \\
df = \text{degrees of freedom}
\end{aligned}
$$

---
### inverse student
- t-score as function of cumulative distribution function

---
### inverse student formula
$$
\begin{aligned}
t = S^{-1}(c, df) \\
c = \text{cumulative probability of success} \\
df = \text{degrees of freedom}
\end{aligned}
$$

---
### chi-square-score
- ratio between sample variance and population variance

---
### chi-square-score formula
$$
\begin{aligned}
\chi^2 = \frac{(n-1)s^2}{\sigma^2} \\
df = n - 1 \\
n = \text{sample size} \\
s = \text{sample standard deviation} \\
\sigma = \text{standard deviation} \\
df = \text{degrees of freedom} 
\end{aligned}
$$

---
### chi-square
- probability as function of $\chi^2$-score

---
### chi-square formula
$$
\begin{aligned}
X \sim \chi^2(x,df) = P(X \ge x) \\
x = \text{$\chi^2$-score} \\
df = \text{degrees of freedom} 
\end{aligned}
$$

---
### F-score
- ratio of sample variance between group 1 and group 2

---
### F-score formula
$$
\begin{aligned}
F = \frac{s_{1}^2}{s_{2}^2} \\
df = n - 1 \\
s = \text{sample standard deviation} 
\end{aligned}
$$

---
### F
- probability as function of F-score

---
### F formula
$$
\begin{aligned}
U \sim \chi^2(u, df_{1}, df_{2}) = P(U \le u) \\
V \sim \chi^2(v, df_{1}, df_{2}) = P(V \le v) \\
u, v = \text{F-score} \\
df = \text{degrees of freedom} 
\end{aligned}
$$

---
