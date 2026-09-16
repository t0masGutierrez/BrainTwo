### random variable
- function of sample space outcome equal real number

---
### random variable formula
$$
\begin{aligned}
&X:\Omega\rightarrow\mathbb R\\
&X(\omega)=x\\
&X=\text{random variable}\\
&\Omega=\text{sample space}\\
&x=\text{real number}\\
&\omega=\text{outcome}
\end{aligned}
$$

---
### continuous random variable
- random variable whose values are uncountable

---
### continuous random variable formula
$$
\begin{aligned}
&(\{0,1,2,3,\dots,n\}\not\sim X)\land(\mathbb N\not\sim X)\\
&X=\text{random variable}
\end{aligned}
$$

---
### probability density function
- probability as function of continuous random variable

---
### probability density function formula
$$
\begin{aligned}
&P(X=a)=0\\
&P(X)=\int_{-\infty}^{\infty}f(x)dx=1\\
&P(X\le a)=\int_{-\infty}^{a}f(x)dx=F(a)\\
&P(a\le X\le b)=\int_{a}^{b}f(x)dx=F(b)-F(a)
\end{aligned}
$$

---
### quantile function
- random variable as function of cumulative probability

---
### quantile function formula
$$
\begin{aligned}
&Q(p)=F^{-1}(x)\\
&p=\text{probability of success}\\
&x=\text{real number}
\end{aligned}
$$

---
### expectation
- mean of random variable

---
### expectation formula
$$
\begin{aligned}
&E[X]=\int_{-\infty}^{\infty}xf(x)dx\\
&x=\text{real number}\\
&X=\text{random variable}
\end{aligned}
$$

---
### variance
- spread of random variable around mean

---
### variance formula
$$
\begin{aligned}
&\text{Var}(X)=E[X^{2}]-(E[X])^{2}=E[(X-E[X])^{2}]\\
&E=\text{expectation}\\
&X=\text{random variable}
\end{aligned}
$$

---
### uniform probability density function
- probability as function of equally likely events

---
### uniform PDF probability formula
$$
\begin{aligned}
&X\sim\text{Uni}(a,b)\implies P(X=x)=\begin{cases}
&\frac{1}{b-a},\quad a\le x\le b\\
&0,\quad\text{otherwise}
&\end{cases}\\
&a=\text{lower endpoint}\\
&b=\text{upper endpoint}
\end{aligned}
$$

---
### uniform PDF expectation formula
$$
\begin{aligned}
&E[X]=\frac{a+b}{2}\\
&a=\text{lower endpoint}\\
&b=\text{upper endpoint}
\end{aligned}
$$

---
### uniform PDF variance formula
$$
\begin{aligned}
&\text{Var}(X)={\frac{(b-a)^{2}}{12}}\\
&a=\text{lower endpoint}\\
&b=\text{upper endpoint}
\end{aligned}
$$

---
### normal probability density function
- probability as function of normal random variable

---
### normal PDF probability formula
$$
\begin{aligned}
&X\sim N(\mu,\sigma)\implies f(x)=(2\pi\sigma^2)^{-1/2}\exp(\frac{-(x-\mu)^{2}}{2\sigma^{2}})\\
&\mu=\text{mean}\\
&\sigma=\text{standard deviation}
\end{aligned}
$$

---
### normal PDF expectation formula
$$
\begin{aligned}
&E[X]=\mu\\
&\mu=\text{mean}
\end{aligned}
$$

---
### normal PDF variance formula
$$
\begin{aligned}
&\text{Var}(X)=\sigma^{2}\\
&\sigma=\text{standard deviation}
\end{aligned}
$$

---
### standard normal probability density function
- probability as function of normal z-score

---
### standard normal PDF probability formula
$$
\begin{aligned}
&X\sim N(0,1)\implies f(x)=(2\pi)^{-1/2}\exp(\frac{-x^2}{2})\\
&x=\text{z-score}
\end{aligned}
$$

---
### standard normal PDF expectation formula
$$
\begin{aligned}
&E[X]=0
\end{aligned}
$$

---
### standard normal PDF variance formula
$$
\begin{aligned}
&\text{Var}(X)=1
\end{aligned}
$$

---
### exponential probability density function
- probability as function of the amount of time until next event

---
### exponential PDF probability formula
$$
\begin{aligned}
&X\sim\text{Exp}(\gamma)\implies f(x)=\lambda e^{-\lambda x}\\
&x=\text{time}\\
&\lambda=\text{average number of events per time}
\end{aligned}
$$

---
### exponential PDF expectation formula
$$
\begin{aligned}
&E[X]=\frac{1}{\lambda}\\
&\lambda=\text{average number of events per time}
\end{aligned}
$$

---
### exponential PDF variance formula
$$
\begin{aligned}
&\text{Var}(X)=\frac{1}{\lambda^{2}}\\
&\lambda=\text{average number of events per time}
\end{aligned}
$$

---
