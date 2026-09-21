### random variable
- function of sample space outcome equal real number

---
### random variable formula
$$
\begin{lgathered}
X:\Omega\rightarrow\mathbb R\\
X(\omega)=x\\
X=\text{random variable}\\
\Omega=\text{sample space}\\
x=\text{real number}\\
\omega=\text{outcome}
\end{lgathered}
$$

---
### continuous random variable
- random variable whose values are uncountable

---
### continuous random variable formula
$$
\begin{lgathered}
(\{0,1,2,3,\dots,n\}\not\sim X)\land(\mathbb N\not\sim X)\\
X=\text{random variable}
\end{lgathered}
$$

---
### probability density function
- probability as function of continuous random variable

---
### probability density function formula
$$
\begin{lgathered}
P(X=a)=0\\
P(X)=\int_{-\infty}^{\infty}f(x)dx=1\\
P(X\le a)=\int_{-\infty}^{a}f(x)dx=F(a)\\
P(a\le X\le b)=\int_{a}^{b}f(x)dx=F(b)-F(a)
\end{lgathered}
$$

---
### uniform probability density function
- probability as function of equally likely events

---
### uniform PDF probability formula
$$
\begin{lgathered}
X\sim\text{Uni}(a,b)\implies P(X=x)=\begin{cases}
\frac{1}{b-a},\quad a\le x\le b\\
0,\quad\text{otherwise}
\end{cases}\\
a=\text{lower endpoint}\\
b=\text{upper endpoint}
\end{lgathered}
$$

---
### uniform PDF expectation formula
$$
\begin{lgathered}
E[X]=\frac{a+b}{2}\\
a=\text{lower endpoint}\\
b=\text{upper endpoint}
\end{lgathered}
$$

---
### uniform PDF variance formula
$$
\begin{lgathered}
\text{Var}(X)={\frac{(b-a)^{2}}{12}}\\
a=\text{lower endpoint}\\
b=\text{upper endpoint}
\end{lgathered}
$$

---
### normal probability density function
- probability as function of normal random variable

---
### normal PDF probability formula
$$
\begin{lgathered}
X\sim N(\mu,\sigma)\implies f(x)=(2\pi\sigma^2)^{-1/2}\exp(\frac{-(x-\mu)^{2}}{2\sigma^{2}})\\
\mu=\text{mean}\\
\sigma=\text{standard deviation}
\end{lgathered}
$$

---
### normal PDF expectation formula
$$
\begin{lgathered}
E[X]=\mu\\
\mu=\text{mean}
\end{lgathered}
$$

---
### normal PDF variance formula
$$
\begin{lgathered}
\text{Var}(X)=\sigma^{2}\\
\sigma=\text{standard deviation}
\end{lgathered}
$$

---
### standard normal probability density function
- probability as function of normal z-score

---
### standard normal PDF probability formula
$$
\begin{lgathered}
X\sim N(0,1)\implies f(x)=(2\pi)^{-1/2}\exp(\frac{-x^2}{2})\\
x=\text{z-score}
\end{lgathered}
$$

---
### standard normal PDF expectation formula
$$
\begin{lgathered}
E[X]=0
\end{lgathered}
$$

---
### standard normal PDF variance formula
$$
\begin{lgathered}
\text{Var}(X)=1
\end{lgathered}
$$

---
### exponential probability density function
- probability as function of the amount of time until next event

---
### exponential PDF probability formula
$$
\begin{lgathered}
X\sim\text{Exp}(\gamma)\implies f(x)=\lambda e^{-\lambda x}\\
x=\text{time}\\
\lambda=\text{average number of events per time}
\end{lgathered}
$$

---
### exponential PDF expectation formula
$$
\begin{lgathered}
E[X]=\frac{1}{\lambda}\\
\lambda=\text{average number of events per time}
\end{lgathered}
$$

---
### exponential PDF variance formula
$$
\begin{lgathered}
\text{Var}(X)=\frac{1}{\lambda^{2}}\\
\lambda=\text{average number of events per time}
\end{lgathered}
$$

---
