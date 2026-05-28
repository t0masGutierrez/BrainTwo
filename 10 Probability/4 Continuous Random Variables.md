### random variable
- function of sample space outcome equal real number

---
### random variable formula
$$
\begin{aligned}
X: \Omega \rightarrow \mathbb R \\
X(\omega) = x \\
X = \text{random variable} \\
\Omega = \text{sample space} \\
x = \text{real number} \\
\omega = \text{outcome}
\end{aligned}
$$

---
### continuous random variable
- random variable whose values are uncountable

---
### continuous random variable formula
$$
\begin{aligned}
(\{0, 1, 2, 3, \dots, n\} \not\sim X) \land (\mathbb N \not\sim X) \\
X = \text{random variable}
\end{aligned}
$$

---
### probability density function
- probability as function of continuous random variable

---
### probability density function formula
$$
\begin{aligned}
P(X = a) = 0 \\
P(X) = \int_{-\infty}^{\infty}f(x)dx = 1 \\
P(X \le a) = \int_{-\infty}^a f(x)dx = F(a) \\
P(a \le X \le b) = \int_{a}^b f(x)dx = F(b) - F(a)
\end{aligned}
$$

---
### expectation
- mean of random variable

---
### expectation formula
$$
\begin{aligned}
E[X] =  \int_{-\infty}^{\infty} xf(x)dx \\
x = \text{real number} \\
X = \text{random variable}
\end{aligned}
$$

---
### variance
- spread of random variable around mean

---
### variance formula
$$
\begin{aligned}
\text{Var}(X) = E[X^2] - (E[X])^2 = E[(X - E[X])^2] \\
E = \text{expectation} \\
X = \text{random variable}
\end{aligned}
$$

---
### uniform probability density function
- probability as function of equally likely events

---
### uniform PDF probability formula
$$
\begin{aligned}
f(x) = \frac{1}{b-a} \\
a = \text{lower endpoint} \\
b = \text{upper endpoint} 
\end{aligned}
$$

---
### uniform PDF expectation formula
$$
\begin{aligned}
E[X] = \frac{a+b}{2} \\
a = \text{lower endpoint} \\
b = \text{upper endpoint} 
\end{aligned}
$$

---
### uniform PDF variance formula
$$
\begin{aligned}
\text{Var}(X) = {\frac{(b-a)^2}{12}} \\
a = \text{lower endpoint} \\
b = \text{upper endpoint} 
\end{aligned}
$$

---
### normal probability density function
- probability as function of normal random variable

---
### normal PDF probability formula
$$
\begin{aligned}
f(x) = \frac{\exp(\frac{-(x - \mu)^2}{2\sigma^2})}{\sigma\sqrt {2\pi}} \\
\mu = \text{mean} \\
\sigma = \text{standard deviation}
\end{aligned}
$$

---
### normal PDF expectation formula
$$
\begin{aligned}
E[X] = \mu \\
\mu = \text{mean} 
\end{aligned}
$$

---
### normal PDF variance formula
$$
\begin{aligned}
\text{Var}(X) = \sigma^2 \\
\sigma = \text{standard deviation} 
\end{aligned}
$$

---
### standard normal probability density function
- probability as function of normal z-score

---
### standard normal PDF probability formula
$$
\begin{aligned}
f(x) = \frac{\exp(\frac{-x^2}{2})}{\sqrt {2\pi}} \\
x = \text{z-score}
\end{aligned}
$$

---
### standard normal PDF expectation formula
$$
\begin{aligned}
E[X] = 0 
\end{aligned}
$$

---
### standard normal PDF variance formula
$$
\begin{aligned}
\text{Var}(X) = 1
\end{aligned}
$$

---
### exponential probability density function
- probability as function of the amount of time until next event

---
### exponential PDF probability formula
$$
\begin{aligned}
f(x) = \lambda e^{-\lambda x} \\
x = \text{time} \\
\lambda = \text{average number of events per time}
\end{aligned}
$$

---
### exponential PDF expectation formula
$$
\begin{aligned}
E[X] = \frac{1}{\lambda} \\
\lambda = \text{average number of events per time}
\end{aligned}
$$

---
### exponential PDF variance formula
$$
\begin{aligned}
\text{Var}(X) = \frac{1}{\lambda^2} \\
\lambda = \text{average number of events per time}
\end{aligned}
$$

---
### gamma probability density function
- probability as function of the amount of time until $r$th event

---
### gamma PDF probability formula
$$
\begin{aligned}
f(x) = \frac{\lambda^r e^{-\lambda x}x^{r-1}}{\Gamma(r)} \\
\Gamma(r) = \int_{0}^{\infty}e^{-x}x^{r-1}dx \\
\lambda = \text{average number of events per time} \\
r = \text{event number} \\
x = \text{time} \\
\Gamma = \text{gamma} 
\end{aligned}
$$

---
### gamma PDF expectation formula
$$
\begin{aligned}
E[X] = \frac{r}{\lambda} \\
r = \text{event number} \\
\lambda = \text{average number of events per time} 
\end{aligned}
$$

---
### gamma PDF variance formula
$$
\begin{aligned}
\text{Var}(X) = \frac{r}{\lambda^2} \\
r = \text{event number} \\
\lambda = \text{average number of events per time} 
\end{aligned}
$$

---
### beta probability density function
- probability as function of unit interval

---
### beta PDF probability formula
$$
\begin{aligned}
f(x) = \frac{x^{r-1}(1-x)^{k-1}}{\beta(r, k)} \\
\beta(r, k) = \int_{0}^1 x^{r-1}(1-x)^{k-1}dx \\
x = \text{unit number} \\
r, k = \text{parameter} \\
\beta = \text{beta} 
\end{aligned}
$$

---
### beta PDF expectation formula
$$
\begin{aligned}
E[X] = \frac{r}{r+k} \\
r, k = \text{parameter}
\end{aligned}
$$

---
### beta PDF variance formula
$$
\begin{aligned}
\text{Var}(X) = \frac{rk}{(r + k)^2(r + k + 1)} \\
r, k = \text{parameter}
\end{aligned}
$$

---
