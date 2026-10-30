### estimator
- sample statistic capable of estimating unknown population parameter

---
### estimator formula
$$
\begin{lgathered}
g:\mathbb R^n\rightarrow\mathbb R\\
\hat\theta=g(X_1,\dots,X_n)\\
g=\text{function}\\
X=\text{random variable}
\end{lgathered}
$$

---
### bias
- systematic overestimation/underestimation of the population parameter

---
### bias formula
$$
\begin{lgathered}
B=E[\hat\theta]-\theta\\
\hat\theta=\text{sample statistic}\\
\theta=\text{population parameter}
\end{lgathered}
$$

---
### unbiased estimator
- mean of sample statistic equal population parameter

---
### unbiased estimator formula
$$
\begin{lgathered}
E[\hat\theta]=\theta\\
\text{Var}(\hat\theta)=E[\hat\theta^2]-(E[\hat\theta])^2\\
\hat\theta=\text{sample statistic}\\
\theta=\text{population parameter}
\end{lgathered}
$$

---
### biased estimator
- mean of sample statistic not equal population parameter

---
### biased estimator formula
$$
\begin{lgathered}
E[\hat\theta]\ne\theta\\
\hat\theta=\text{sample statistic}\\
\theta=\text{population parameter}
\end{lgathered}
$$

---
### debiasing
- convert from biased estimator to unbiased estimator

---
### debiasing formula
$$
\begin{lgathered}
E[\hat\theta]=a\theta+b\\
\widetilde\theta=\frac{\hat\theta-b}{a}\\
E[\widetilde\theta]=\theta\\
\text{Var}(\widetilde\theta)=\frac{1}{a^2}\text{Var}(\hat\theta)
\end{lgathered}
$$

---
### term
- definition

---
### term
- definition

---
