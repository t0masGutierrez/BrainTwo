### hypothesis test
- test whether or not there exists sufficient evidence supporting proposed claim about population parameter

---
### hypothesis test formula
$$
\begin{lgathered}
H_0=\text{null hypothesis}\\
H_a=\text{alternative hypothesis}
\end{lgathered}
$$

---
### null hypothesis
- proposed claim

---
### null hypothesis formula
$$
\begin{lgathered}
H_{0}:\begin{cases}\theta=0\\
\theta\ge0\\
\theta\le0
\end{cases}
\end{lgathered}
$$

---
### alternative hypothesis
- competing claim

---
### alternative hypothesis formula
$$
\begin{lgathered}
H_{a}:\begin{cases}\theta\ne0\\
\theta>0\\
\theta<0
\end{cases}
\end{lgathered}
$$

---
### critical value
- threshold of the test statistic sampling distribution under the null hypothesis separating the rejection region from the nonrejection region at specified significance level

---
### critical value formula
$$
\begin{lgathered}
H_a:\theta>\theta_0\implies w_{1-\alpha}=F_W^{-1}(1-\alpha)\\
H_a:\theta<\theta_0\implies w_{\alpha}=F_W^{-1}(\alpha)\\
H_a:\theta>\theta_0\implies w_{1-\alpha/2}=F_W^{-1}(1-\alpha/2)\\
H_a:\theta>\theta_0\implies w_{\alpha/2}=F_W^{-1}(\alpha/2)
\end{lgathered}
$$

---
### p value
- probability of observing test statistic at least as extreme as observed test statistic given the null hypothesis

---
### p value formula
$$
\begin{lgathered}
H_1:\theta>\theta_0\implies P(W\ge w_{\text{obs}}\mid H_0)\\
H_1:\theta<\theta_0\implies P(W\le w_{\text{obs}}\mid H_0)\\
H_a:\theta\ne\theta_0\implies P(|W|\ge|w_{\text{obs}}|\mid H_0)\\
W=\text{test statistic}\\
w_{\text{obs}}=\text{observed test statistic}\\
\theta=\text{sample statistic}\\
\theta_0=\text{null hypothesis}
\end{lgathered}
$$

---
### test statistic
- summarize the evidence against the null hypothesis

---
### test statistic formula
$$
\begin{lgathered}
W=\frac{\hat\theta-\theta_0}{SE(\hat\theta)}\\
\hat\theta=\text{sample statistic}\\
\theta=\text{population parameter}\\
SE=\text{standard error}
\end{lgathered}
$$

---
### right-sided hypothesis test
- definition

---
### right-sided hypothesis test formula
$$
\begin{lgathered}
H_0:\theta=\theta_0\\
H_a:\theta>\theta_0\\
w_{\text{obs}}\ge w_{1-\alpha}\implies\text{reject $H_0$}\\
P(W\ge w_{\text{obs}}\mid H_0)\le\alpha\implies\text{reject $H_0$}
\end{lgathered}
$$

---
### left-sided hypothesis test
- definition

---
### left-sided hypothesis test formula
$$
\begin{lgathered}
H_0:\theta=\theta_0\\
H_a:\theta<\theta_0\\
w_{\text{obs}}\le w_{\alpha}\implies\text{reject $H_0$}\\
P(W\le w_{\text{obs}}\mid H_0)\le\alpha\implies\text{reject $H_0$}
\end{lgathered}
$$

---
### two-sided hypothesis test
- definition

---
### two-sided hypothesis test formula
$$
\begin{lgathered}
H_0:\theta=\theta_0\\
H_a:\theta>\theta_0\\
w_{\text{obs}}\ge w_{1-\alpha/2}\implies\text{reject $H_0$}\\
w_{\text{obs}}\le w_{\alpha/2}\implies\text{reject $H_0$}\\
P(|W|\ge|w_{\text{obs}}|\mid H_0)\le\alpha\implies\text{reject $H_0$}
\end{lgathered}
$$

---
### type I error
- probability of rejecting null hypothesis given its true
- false positive

---
### type I error formula
$$
\begin{lgathered}
\alpha=P(\text{reject }H_{0}\mid H_{0}\text{ true})
\end{lgathered}
$$

---
### type II error
- probability of failing to reject null hypothesis given its false
- false negative

---
### type II error
$$
\begin{lgathered}
\beta=P(\text{fail to reject }H_{0}\mid H_{a}\text{ True})
\end{lgathered}
$$

---
### power
- measure of hypothesis test effectiveness

---
### power formula
$$
\begin{lgathered}
1-\beta=P(\text{reject }H_{0}\mid H_{a}\text{ true})
\end{lgathered}
$$

---
