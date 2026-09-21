### mean
- mean of random variable

---
### mean formula
$$
\begin{lgathered}
\mu=E[X]\\
X=\text{random variable}
\end{lgathered}
$$

---
### sample mean
- sample mean of random variable

---
### sample mean formula
$$
\begin{lgathered}
\overline X=\frac{1}{n}\sum_{i=1}^{n}X_{i}\\
n=\text{sample size}\\
X=\text{random variable}
\end{lgathered}
$$

---
### variance
- spread of random variable around mean

---
### variance formula
$$
\begin{lgathered}
\sigma^{2}=\text{Var}(X)\\
X=\text{random variable}
\end{lgathered}
$$

---
### sample variance
- sample spread of random variable around mean

---
### sample variance formula
$$
\begin{lgathered}
s^{2}=\text{Var}(\overline X)=\frac{\sigma^{2}}{n}\\
\sigma^{2}=\text{variance}\\
X=\text{random variable}\\
n=\text{sample size}\\
\end{lgathered}
$$

---
### markov inequality
- upper bound for probability of nonnegative lower boundary

---
### markov inequality formula
$$
\begin{lgathered}
P(X\ge c)\le\frac{E[X]}{c}\\
X\ge0\\
X=\text{random variable}\\
c=\text{real number}
\end{lgathered}
$$

---
### chebyshevs inequality
- upper bound for probability of $k$ standard deviations from the mean

---
### chebyshevs inequality formula
$$
\begin{lgathered}
P(|X-\mu|\ge k\sigma)\le\frac{1}{k^{2}}\\
P(|X-\mu|<c)\le1-\frac{\sigma^{2}}{c^{2}}\\
\mu,\sigma^{2}<\infty\\
X=\text{random variable}\\
\mu=\text{mean}\\
k=\text{number of standard deviations}\\
\sigma^{2}=\text{variance}\\
c=\text{real number}
\end{lgathered}
$$

---
### weak law of large numbers
- sample mean approaches population mean as sample size approaches infinity

---
### weak law of large numbers formula
$$
\begin{lgathered}
\forall\epsilon>0:\lim_{n\rightarrow\infty}P(|\overline X_{n}-\mu|>\epsilon)=0\\
n=\text{sample size}\\
\overline X=\text{sample mean}\\
\mu=\text{mean}
\end{lgathered}
$$

---
### strong law of large numbers
- sample mean converges on population mean with probability 1

---
### strong law of large numbers formula
$$
\begin{lgathered}
P(\lim_{n\rightarrow\infty}\overline X_{n}=\mu)=1\\
n=\text{sample size}\\
\overline X=\text{sample mean}\\
\mu=\text{mean}
\end{lgathered}
$$

---
### central limit theorem
- sampling distribution of mean approaches normal distribution as sample size approaches infinity regardless of population distribution

---
### central limit theorem formula
$$
\begin{lgathered}
\lim_{n\rightarrow\infty}\overline X_{n}\approx N(\mu,\frac{\sigma^2}{n})\\
n=\text{sample size}\\
\bar X=\text{sample mean}\\
\mu=\text{mean}\\
\sigma=\text{standard deviation}
\end{lgathered}
$$

---
