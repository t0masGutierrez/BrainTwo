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
### continuous probability density function
- probability as function of continuous random variable

---
### continuous PDF probability formula
$$
\begin{aligned}
P(X=x) = 0 \\
P(X) = \int_{-\infty}^{\infty}f(x)dx = 1 \\
P(a \le X \le b) = \int_{a}^b f(x)dx
\end{aligned}
$$

---
### continuous PDF mean formula
$$
\begin{aligned}
\mu = \int_{-\infty}^{\infty} xf(x)dx
\end{aligned}
$$

---
### continuous PDF standard deviation formula
$$
\begin{aligned}
\sigma = \sqrt{\int_{-\infty}^{\infty} (x - \mu)^2f(x)dx}
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
### uniform PDF mean formula
$$
\begin{aligned}
\mu = \frac{a+b}{2} \\
a = \text{lower endpoint} \\
b = \text{upper endpoint} 
\end{aligned}
$$

---
### uniform PDF standard deviation formula
$$
\begin{aligned}
\sigma = \sqrt{\frac{(b-a)^2}{12}} \\
a = \text{lower endpoint} \\
b = \text{upper endpoint} 
\end{aligned}
$$

---
### normal probability density function
- probability as function of mean and standard deviation

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
### normal PDF mean formula
$$
\begin{aligned}
\mu = \mu \\
\mu = \text{mean} 
\end{aligned}
$$

---
### normal PDF standard deviation formula
$$
\begin{aligned}
\sigma = \sigma \\
\sigma = \text{standard deviation} 
\end{aligned}
$$

---
### standard normal probability density function
- probability as function of z-score

---
### standard normal PDF probability formula
$$
\begin{aligned}
f(x) = \frac{e^{-x^2/2}}{\sqrt {2\pi}} \\
x = \text{z-score}
\end{aligned}
$$

---
### standard normal PDF mean formula
$$
\begin{aligned}
\mu = 0 
\end{aligned}
$$

---
### standard  normal PDF standard deviation formula
$$
\begin{aligned}
\sigma = 1
\end{aligned}
$$

---
### exponential probability density function
- probability as function of the amount of time between events

---
### exponential PDF probability formula
$$
\begin{aligned}
f(x) = \lambda e^{-\lambda x} \\
x = \text{amount of time between events} \\
\lambda = \text{average number of events per time}
\end{aligned}
$$

---
### exponential PDF mean formula
$$
\begin{aligned}
\mu = \frac{1}{\lambda} \\
\lambda = \text{average number of events per time}
\end{aligned}
$$

---
### exponential PDF standard deviation formula
$$
\begin{aligned}
\sigma = \frac{1}{\lambda} \\
\lambda = \text{average number of events per time}
\end{aligned}
$$

---
### gamma probability density function
- probability as function of waiting time until the $\alpha$th event

---
### gamma PDF probability formula
$$
\begin{aligned}
f(x) = \frac{\lambda e^{-\lambda x}(\lambda x)^{\alpha-1}}{\Gamma(\alpha)} \\
\Gamma(\alpha) = \int_{0}^{\infty}e^{-x}x^{\alpha-1}dx \\
\lambda = \text{average number of events per time} \\
x = \text{amount of time between events} \\
\Gamma = \text{gamma} \\
\alpha = \text{event number}
\end{aligned}
$$

---
### gamma PDF mean formula
$$
\begin{aligned}
\mu = \frac{\alpha}{\lambda} \\
\alpha = \text{event number} \\
\lambda = \text{average number of events per time} 
\end{aligned}
$$

---
### gamma PDF standard deviation formula
$$
\begin{aligned}
\sigma = \sqrt \frac{\alpha}{\lambda^2} \\
\alpha = \text{event number} \\
\lambda = \text{average number of events per time} 
\end{aligned}
$$

---
### t probability density function
- probability as function of t-statistic

---
### t PDF probability formula
$$
\begin{aligned}
f(x) = \frac{\Gamma(\frac{d+1}{2})}{ \Gamma(\frac{d}{2})\sqrt{d\pi}}(1+\frac{x^2}{d})^{-(d+1)/2} \\

\Gamma = \text{gamma} \\
d = \text{degrees of freedom} \\
n = \text{sample size} \\
x = \text{t-statistic}
\end{aligned}
$$

---
### t PDF mean formula
$$
\begin{aligned}
\mu = 0
\end{aligned}
$$

---
### t PDF standard deviation formula
$$
\begin{aligned}
\sigma = \sqrt \frac{d}{d-2} \\
d = \text{degrees of freedom} \\
n = \text{sample size} \\
\end{aligned}
$$

---
### chi-square probability density function
- probability as function of $\chi^2$-statistic

---
### chi-square PDF probability formula
$$
\begin{aligned}
f(x) = \frac{x^{d/2 - 1}e^{-x/2}}{2^{d/2}\Gamma(\frac{d}{2})} \\
x = \text{$\chi^2$-statistic} \\
\Gamma = \text{gamma} \\
d = \text{degrees of freedom} \\
n = \text{sample size} 
\end{aligned}
$$

---
### chi-square PDF mean formula
$$
\begin{aligned}
\mu = d \\
d = \text{degrees of freedom} \\
n = \text{sample size} 
\end{aligned}
$$

---
### chi-square PDF standard deviation formula
$$
\begin{aligned}
\sigma = \sqrt {2d} \\
d = \text{degrees of freedom} \\
n = \text{sample size} 
\end{aligned}
$$

---
### F probability density function
- probability as function of F-statistic

---
### F PDF probability formula
$$
\begin{aligned}
f(x) = \frac{x^{0.5d_{1} - 1}\Gamma(\frac{d_{1}+d_{2}}{2})(\frac{d_{1}}{d_{2}})^{0.5d_{1}}  
}
{\Gamma(\frac{d_{1}}{2})\Gamma(\frac{d_{2}}{2})(1 + \frac{d_{1}}{d_{2}}x)^{\frac{-d_{1}-d_{2}}{2}}} \\
x = \text{F-statistic} \\
\Gamma = \text{gamma} \\
d = \text{degrees of freedom} \\
n = \text{sample size} 
\end{aligned}
$$

---
### F PDF mean formula
$$
\begin{aligned}
\mu = \frac{d_{2}}{d_{2} - 2} \\
d = \text{degrees of freedom} \\
n = \text{sample size} 
\end{aligned}
$$

---
### F PDF standard deviation formula
$$
\begin{aligned}
\sigma = \sqrt {\frac{2d_{2}^2(d_{1}+d_{2} - 2)}{d_{1}(d_{2} - 2)^2(d_{2} - 4)}} \\
d = \text{degrees of freedom} \\
n = \text{sample size} 
\end{aligned}
$$

---
