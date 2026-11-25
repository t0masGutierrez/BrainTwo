### sample statistic
- function of random variable before observing sample
- numerical value after observing sample

---
### sample statistic formula
$$
\begin{lgathered}
g:\mathbb R^n\rightarrow\mathbb R\\
\hat\theta=g(X_1,\dots,X_n)\\
g=\text{function}\\
X=\text{random variable}
\end{lgathered}
$$

---
### sampling distribution
- probability distribution of sample statistic under repeated random sampling of fixed size from the same population

---
### sampling distribution formula
$$
\begin{lgathered}
g:\mathbb R^n\rightarrow\mathbb R\\
\hat\theta=g(X_1,\dots,X_n)\\
\forall i\in\set{1,\dots,n}:X_i\overset{\text{i.i.d.}}{\sim}P(X\le x)\\
P(\hat\theta\le t)\\
g=\text{function}\\
n=\text{sample size}\\
X=\text{random variable}\\
x,t=\text{real number}\\
\hat\theta=\text{sample statistic}
\end{lgathered}
$$

---
### sample proportion
- relative frequency of independent bernoulli random variable

---
### sample proportion formula
$$
\begin{lgathered}
\forall i\in\set{1,\dots,n}:X_i\overset{\text{i.i.d.}}{\sim}\text{Ber}(p)\\
\hat p=\frac{Y}{n}=\frac{1}{n}\sum_{i=1}^nX_i\\
n=\text{sample size}\\
X,Y=\text{random variable}\\
p=\text{probability of success}
\end{lgathered}
$$

---
### sample mean
- sample expectation of random variable

---
### sample mean formula
$$
\begin{lgathered}
\overline X=\frac{1}{n}\sum_{i=1}^{n}X_{i}\\
E[\overline X]=\mu\\
\text{Var}(\overline X)=\frac{\sigma^2}{n}\\
E[\overline X_1-\overline X_2]=\mu_1-\mu_2\\
\text{Var}(\overline X_1-\overline X_2)=\frac{\sigma_1^2}{n_1}+\frac{\sigma_2^2}{n_2}\\
n=\text{sample size}\\
X=\text{random variable}\\
\mu=\text{mean}\\
\sigma=\text{standard deviation}
\end{lgathered}
$$

---
### sample variance
- sample spread of random variable around mean

---
### sample variance formula
$$
\begin{lgathered}
S^{2}=\frac{1}{n-1}\sum_{i=1}^n(X_i-\overline X)^2\\
E[S^2]=\sigma^2\\
\text{Var}(S^2)=\frac{2\sigma^4}{n-1}\\
n=\text{sample size}\\
X=\text{random variable}\\
\sigma=\text{standard deviation}
\end{lgathered}
$$

---
### normal property
- linear combination of independent normal random variable equal normal random variable

---
### normal property formula
$$
\begin{lgathered}
\forall i,j\in\set{1,\dots,n}:P(X_i=a,X_j=b)=P(X_i=a)P(X_j=b)\\
\forall i\in\set{1,\dots,n}:X_i\sim N(\mu_i,\sigma_i^2)\\
\implies\sum_{i=1}^nc_iX_i\sim N(\sum_{i=1}^nc_i\mu_i,\sum_{i=1}^nc_i^2\sigma_i^2)\\
X=\text{random variable}\\
c=\text{real number}\\
\mu=\text{mean}\\
\sigma=\text{standard deviation}
\end{lgathered}
$$

---
### sample proportion binomial property
- sum of independent bernoulli random variable equal binomial random variable

---
### sample proportion binomial property
$$
\begin{lgathered}
n\hat p\sim\text{Bin}(n,p)\\
E[\hat p]=p\\
\text{Var}(\hat p)=\frac{pq}{n}\\
E[\hat p_1-\hat p_2]=p_1-p_2\\
\text{Var}(\hat p_1-\hat p_2)=\frac{p_1q_1}{n_1}+\frac{p_2q_2}{n_2}\\
n=\text{sample size}\\
\hat p=\text{sample proportion}\\
p=\text{probability of success}\\
q=\text{probability of failure}
\end{lgathered}
$$

---
### sample proportion normal property
- if at least 10 successes and failures then binomial random variable equal normal random variable

---
### sample proportion normal property formula
$$
\begin{lgathered}
np,nq\ge10\implies n\hat p\approx N(np,npq)\\
n=\text{sample size}\\
p=\text{probability of success}\\
q=\text{probability of failure}\\
\hat p=\text{sample proportion}
\end{lgathered}
$$

---
### continuity correction
- correct binomial random variable approximation of normal random variable

---
### continuity correction formula
$$
\begin{lgathered}
P(X<k)\approx P(Y<k-0.5)\\
P(X\leq k)\approx P(Y\leq k+0.5)\\
P(X>k)\approx P(Y>k+0.5)\\
P(X\geq k)\approx P(Y\geq k-0.5)\\
P(X=k)\approx P(k-0.5<Y<k+0.5)\\
P(a\leq X\leq b)\approx P(a-0.5\leq Y\leq b+0.5)\\
X=\text{binomial random variable}\\
Y=\text{normal random variable}\\
k,a,b\in\mathbb{Z}
\end{lgathered}
$$

---
### sample mean standard normal property
- scaled sample mean of normal random variable equal standard normal random variable

---
### sample mean standard normal property formula
$$
\begin{lgathered}
\forall i\in\set{1,\dots,n}:X_i\overset{\text{i.i.d.}}{\sim}N(\mu,\sigma^2)\implies\frac{\overline X-\mu}{\sigma/\sqrt n}\sim N(0,1)\\
n=\text{sample size}\\
X=\text{random variable}\\
\mu=\text{mean}\\
\sigma=\text{standard deviation}
\end{lgathered}
$$

---
### sample mean normal property
- if at least 30 observations then sample mean of random variable equal normal random variable regardless of population distribution

---
### sample mean normal property formula
$$
\begin{lgathered}
\forall i\in\set{1,\dots,n}:X_i\overset{\text{i.i.d.}}{\sim}P(X\le x)\\
n\ge30\\
\implies\overline X\approx N(\mu,\frac{\sigma^2}{n})
\end{lgathered}
$$

---
### chi-squared standard normal property
- sum of squared independent standard normal random variable equal chi-squared random variable

---
### chi-squared standard normal property formula
$$
\begin{lgathered}
\forall i\in\set{1,\dots,n}:X_i\overset{\text{i.i.d.}}{\sim}N(0,1)\implies\sum_{i=1}^nX_i^2\sim\chi^2(n)\\
n=\text{sample size}\\
X=\text{random variable}
\end{lgathered}
$$

---
### chi-squared normal property
- scaled sample variance of independent normal random variable equal chi-squared random variable

---
### chi-squared normal property formula
$$
\begin{lgathered}
\forall i\in\set{1,\dots,n}:X_i\overset{\text{i.i.d.}}{\sim}N(\mu,\sigma^2)\implies\frac{(n-1)S^2}{\sigma^2}\sim\chi^2(n-1)\\
X=\text{random variable}\\
\mu=\text{mean}\\
\sigma=\text{standard deviation}\\
n=\text{sample size}\\
S=\text{sample standard deviation}
\end{lgathered}
$$

---
### t standard normal property
- scaled standard standard normal random variable equal t random variable

---
### t standard normal property formula
$$
\begin{lgathered}
X\sim N(0,1)\\
Y\sim\chi^2(\nu)\\
P(X=x,Y=y)=P(X=x)P(Y=y)\\
\implies\frac{X}{\sqrt{Y/\nu}}\sim t(\nu)\\
X,Y=\text{random variable}\\
\nu=\text{degrees of freedom}
\end{lgathered}
$$

---
### t normal property
- scaled normal random variable equal t random variable

---
### t normal property formula
$$
\begin{lgathered}
X\sim N(\mu,\sigma^2)\implies\frac{\overline X-\mu}{S/\sqrt n}\sim t(n-1)\\
X=\text{random variable}\\
\mu=\text{mean}\\
\sigma=\text{standard deviation}\\
\overline X=\text{sample mean}\\
S=\text{sample standard deviation}\\
n=\text{sample size}
\end{lgathered}
$$

---
### F chi-squared property
- ratio of variance equal F random variable

---
### F chi-squared property formula
$$
\begin{lgathered}
X\sim\chi^2(\nu_1)\\
Y\sim\chi^2(\nu_2)\\
P(X=x,Y=y)=P(X=x)P(Y=y)\\
\frac{X/\nu_1}{Y/\nu_2}\sim F(\nu_1,\nu_2)\\
X,Y=\text{random variable}\\
\nu=\text{degrees of freedom}
\end{lgathered}
$$

---
### F normal property
- normal ratio of variance equal F random variable

---
### F normal property formula
$$
\begin{lgathered}
X\sim N(\mu_1,\sigma_1^2)\\
Y\sim N(\mu_2,\sigma_2^2)\\
P(X=x,Y=y)=P(X=x)P(Y=y)\\
\frac{S_1^2/\sigma_1^2}{S_2^2/\sigma_2^2}\sim F(n_1-1,n_2-1)\\
X,Y=\text{random variable}\\
\mu=\text{mean}\\
\sigma=\text{standard deviation}\\
S=\text{sample standard deviation}\\
n=\text{sample size}
\end{lgathered}
$$

---
### order statistic
- random variable representing the kth smallest observation of random sample

---
### order statistic formula
$$
\begin{lgathered}
X_{(1)},X_{(2)},\dots,X_{(n)}\\
\begin{lgathered}
F_{X_{(k)}}(x)=\sum_{i=k}^n\pmatrix{n\\i}[F_X(x)]^i[1-F_X(x)]^{n-i}\\
f_{X_{(k)}}=\frac{n!}{(k-1)!(n-1)!}[F_X(x)]^{k-1}[1-F_X(x)]^{n-k}f_X(x)\\
X=\text{random variable}
\end{lgathered}
\end{lgathered}
$$

---
### minimum order statistic
- random variable representing the smallest observation of random sample

---
### minimum order statistic formula
$$
\begin{lgathered}
X_{(1)}=\min(X_1,\dots,X_n)\\
F_{X_{(1)}}(x)=1-[1-F_X(x)]^n\\
f_{X_{(1)}}=n[1-F_X(x)]^{n-1}f_X(x)\\
X=\text{random variable}
\end{lgathered}
$$

---
### maximum order statistic
- random variable representing the largest observation of random sample

---
### maximum order statistic
$$
\begin{lgathered}
X_{(n)}=\max(X_1,\dots,X_n)\\
F_{X_{(n)}}(x)=[F_X(x)]^n\\
f_{X_{(n)}}=n[F_X(x)]^{n-1}f_X(x)\\
X=\text{random variable}
\end{lgathered}
$$

---
