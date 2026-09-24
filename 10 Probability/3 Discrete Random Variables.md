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
### discrete random variable
- random variable whose values are max countable

---
### discrete random variable formula
$$
\begin{lgathered}
(\{0,1,2,3,\dots,n\}\sim X)\lor(\mathbb N\sim X)\\
X=\text{random variable}
\end{lgathered}
$$

---
### probability mass function
- probability as function of discrete random variable

---
### probability mass function formula
$$
\begin{lgathered}
P(X)=\sum_{i}P(X=x_{i})=1\\
P(X=x)=P(X\le x)-P(X\le x-1)\\
P(a\le X\le b)=\sum_{i=a}^{b}P(X=x_{i})\\
P(X\le x)=\sum_{x_{i}\le x}P(X=x_{i})
\end{lgathered}
$$

---
### cumulative distribution function
- cumulative probability as function of random variable

---
### cumulative distribution function formula
$$
\begin{lgathered}
F(\infty)=1\\
F(-\infty)=0\\
P(X\le x)=F(x)\\
a<b\implies F(a)<F(b)\\
P(a<X\le b)=F(b)-F(a)\\
P(a\le X\le b)=F(b)-F(a)+P(X=a)\\
P(a<X<b)=F(b)-F(a)+P(X=b)
\end{lgathered}
$$

---
### expectation
- mean of random variable

---
### expectation formula
$$
\begin{lgathered}
E[X]=\sum_{i}x_{i}P(X=x_{i})\\
x=\text{real number}\\
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
\text{Var}(X)=E[X^{2}]-(E[X])^{2}=E[(X-E[X])^{2}]\\
E=\text{expectation}\\
X=\text{random variable}
\end{lgathered}
$$

---
### expectation property
- multiplication
- addition
- sum
- function

---
### expectation property formula
$$
\begin{lgathered}
E[c]=c\\
E[aX]=aE[X]\\
E[X+b]=E[X]+b\\
E[\sum_iX_i]=\sum_iE[X_i]\\
E[g(X)]=\sum_{i}g(x_{i})P(X=x_{i})\\
\end{lgathered}
$$

---
### variance property
- multiplication
- addition

---
### variance property formula
$$
\begin{lgathered}
\text{Var}(aX)=a^2\text{Var}(X)\\
\text{Var}(X+b)=\text{Var}(X)
\end{lgathered}
$$

---
### uniform probability mass function
- probability as function of equally likely events

---
### uniform PMF assumptions
- all outcomes equal probability

---
### uniform PMF probability
$$
\begin{lgathered}
X\sim\text{Uni}(a,b)\implies P(X=x)=\begin{cases}
\frac{1}{b-a+1},\quad a\le x\le b\\
0,\quad\text{otherwise}
\end{cases}\\
a=\text{lower endpoint}\\
b=\text{upper endpoint}
\end{lgathered}
$$

---
### uniform PMF expectation
$$
\begin{lgathered}
E[X]=\frac{a+b}{2}\\
a=\text{lower endpoint}\\
b=\text{upper endpoint}
\end{lgathered}
$$

---
### uniform PMF variance
$$
\begin{lgathered}
\text{Var}(X)=\frac{(b-a)(b-a+2)}{12}\\
a=\text{lower endpoint}\\
b=\text{upper endpoint}
\end{lgathered}
$$

---
### bernoulli probability mass function
- probability as function of single trial with two outcomes

---
### bernoulli PMF assumptions
- single trial
- two outcomes

---
### bernoulli PMF probability formula
$$
\begin{lgathered}
X\sim\text{Ber}(p)\implies P(X=x)=p^{x}q^{1-x}\\
X=\text{random variable}\\
x=\text{number of successes}\\
p=\text{probability of success}\\
q=\text{probability of failure}
\end{lgathered}
$$

---
### bernoulli PMF expectation formula
$$
\begin{lgathered}
E[X]=p\\
X=\text{random variable}\\
p=\text{probability of success}
\end{lgathered}
$$

---
### bernoulli PMF variance formula
$$
\begin{lgathered}
\text{Var}(X)=pq\\
X=\text{random variable}\\
p=\text{probability of success}\\
q=\text{probability of failure}
\end{lgathered}
$$

---
### binomial probability mass function
- probability as function of the number of successes

---
### binomial PMF assumptions
- two outcomes
- fixed number of trials
- constant probability of success
- independent trials

---
### binomial PMF probability formula
$$
\begin{lgathered}
X\sim\text{Bin}(p,n)\implies P(X=x)=\begin{pmatrix}n\\x\end{pmatrix}p^{x}q^{n-x}\\
X=\text{random variable}\\
n=\text{number of trials}\\
x=\text{number of successes}\\
p=\text{probability of success}\\
q=\text{probability of failure}
\end{lgathered}
$$

---
### binomial PMF expectation formula
$$
\begin{lgathered}
E[X]=np\\
X=\text{random variable}\\
n=\text{number of trials}\\
p=\text{probability of success}
\end{lgathered}
$$

---
### binomial PMF variance formula
$$
\begin{lgathered}
\text{Var}(X)=npq\\
X=\text{random variable}\\
n=\text{number of trials}\\
p=\text{probability of success}\\
q=\text{probability of failure}
\end{lgathered}
$$

---
### geometric probability mass function
- probability as function of the number of failures before 1st success

---
### geometric PMF assumptions
- two outcomes
- random number of trials
- constant probability of success
- independent trials

---
### geometric PMF probability formula
$$
\begin{lgathered}
X\sim\text{Geo}(p)\implies P(X=x)=pq^{x}\\
X=\text{random variable}\\
p=\text{probability of success}\\
q=\text{probability of failure}\\
x=\text{number of failures before 1st success}
\end{lgathered}
$$

---
### geometric PMF expectation formula
$$
\begin{lgathered}
E[X]=\frac{q}{p}\\
X=\text{random variable}\\
p=\text{probability of success}\\
q=\text{probability of failure}
\end{lgathered}
$$

---
### geometric PMF variance formula
$$
\begin{lgathered}
\text{Var}(X)=\frac{q}{p^{2}}\\
X=\text{random variable}\\
q=\text{probability of failure}\\
p=\text{probability of success}
\end{lgathered}
$$

---
### negative binomial probability mass function
- probability as function of the number of failures before $r$th success

---
### negative binomial PMF assumptions
- two outcomes
- random number of trials
- constant probability of success
- independent trials

---
### negative binomial PMF probability formula
$$
\begin{lgathered}
X\sim\text{NegBin}(p,r)\implies P(X=x)=\begin{pmatrix}x+r-1\\r-1\end{pmatrix}p^{r}q^{x}\\
X=\text{random variable}\\
x=\text{number of failures before rth success}\\
r=\text{success number}\\
p=\text{probability of success}\\
q=\text{probability of failure}
\end{lgathered}
$$

---
### negative binomial PMF expectation formula
$$
\begin{lgathered}
E[X]=\frac{rq}{p}\\
r=\text{success number}\\
p=\text{probability of success}\\
q=\text{probability of failure}
\end{lgathered}
$$

---
### negative binomial PMF variance formula
$$
\begin{lgathered}
\text{Var}(X)=\frac{rq}{p^{2}}\\
r=\text{success number}\\
q=\text{probability of failure}\\
p=\text{probability of success}
\end{lgathered}
$$

---
### hypergeometric probability mass function
- probability as function of the number of items drawn from the group of interest

---
### hypergeometric PMF assumptions
- finite population
- variable probability of success
- dependent trials

---
### hypergeometric PMF probability formula
$$
\begin{lgathered}
X\sim\text{HypGeo}(N,K,n)\implies P(X=x)=\frac{\begin{pmatrix}K\\x\end{pmatrix}\begin{pmatrix}N-K\\n-x\end{pmatrix}}{\begin{pmatrix}N\\n\end{pmatrix}}\\
X=\text{random variable}\\
K=\text{interest size}\\
x=\text{number of interest items drawn}\\
N=\text{population size}\\
n=\text{number of items drawn}
\end{lgathered}
$$

---
### hypergeometric PMF expectation formula
$$
\begin{lgathered}
E[X]=\frac{nK}{N}\\
X=\text{random variable}\\
n=\text{number of items drawn}\\
K=\text{interest size}\\
N=\text{population size}
\end{lgathered}
$$

---
### hypergeometric PMF variance formula
$$
\begin{lgathered}
\text{Var}(X)=(\frac{nK}{N})(1-\frac{K}{N})(\frac{N-n}{N-1})\\
X=\text{random variable}\\
n=\text{number of items drawn}\\
K=\text{interest size}\\
N=\text{population size}
\end{lgathered}
$$

---
### poisson probability mass function
- probability as function of the number of events within interval
- approximate binomial PMF with small probability of success and large number of trials

---
### poisson PMF assumptions
- fixed interval
- constant average number of events per interval
- independent events
- disjoint events

---
### poisson PMF probability formula
$$
\begin{lgathered}
X\sim\text{Pois}(\lambda)\implies P(X=x)=\frac{\lambda^{x}}{x!}e^{-\lambda}\\
X=\text{random variable}\\
x=\text{number of events within interval}\\
\lambda=\text{average number of events per interval}\\
n=\text{number of trials}\\
p=\text{probability of success}
\end{lgathered}
$$

---
### poisson PMF expectation formula
$$
\begin{lgathered}
E[X]=\lambda\\
X=\text{random variable}\\
\lambda=\text{average number of events per interval}
\end{lgathered}
$$

---
### poisson PMF variance formula
$$
\begin{lgathered}
\text{Var}(X)=\lambda\\
X=\text{random variable}\\
\lambda=\text{average number of events per interval}
\end{lgathered}
$$

---
