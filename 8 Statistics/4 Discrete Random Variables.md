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
### discrete random variable
- random variable whose values are max countable

---
### discrete random variable formula
$$
\begin{aligned}
(\{0, 1, 2, 3, \dots, n\} \sim X) \lor (\mathbb N \sim X) \\
X = \text{random variable} 
\end{aligned}
$$

---
### discrete probability mass function
- probability as function of discrete random variable

---
### discrete PMF probability formula
$$
\begin{aligned}
P(X)=\sum_{i} P(X = x_{i}) = 1 \\
P(a \le X \le b) = \sum_{i=a}^b P(X = x_{i})
\end{aligned}
$$

---
### discrete PMF mean formula
$$
\begin{aligned}
\mu = \sum_{i} x_iP(X=x_{i}) \\
x = \text{real number} \\
X = \text{random variable}
\end{aligned}
$$

---
### discrete PMF standard deviation formula
$$
\begin{aligned}
\sigma = \sqrt{\sum_{i}(x_{i} - \mu)^2P(X=x_{i})} \\
x = \text{real number} \\
\mu = \text{mean} \\
X = \text{random variable}
\end{aligned}
$$

---
### bernoulli probability mass function
- probability as function of single success

---
### bernoulli PMF assumptions
- single trial
- two outcomes

---
### bernoulli PMF probability formula
$$
\begin{aligned}
P(X = k) = pq^{1-k} \\
X = \text{random variable} \\
k = \text{number of successes} \\
p = \text{probability of success} \\
q = \text{probability of failure} 
\end{aligned}
$$

---
### bernoulli PMF mean formula
$$
\begin{aligned}
\mu = p \\
p = \text{probability of success}
\end{aligned}
$$

---
### bernoulli PMF standard deviation formula
$$
\begin{aligned}
\sigma = \sqrt {pq} \\
p = \text{probability of success} \\
q = \text{probability of failure}
\end{aligned}
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
\begin{aligned}
P(X = k) = \begin{pmatrix} n \\ k \end{pmatrix} p^kq^{n-k} \\
X = \text{random variable} \\
n = \text{number of trials} \\
k = \text{number of successes} \\
p = \text{probability of success} \\
q = \text{probability of failure} 
\end{aligned}
$$

---
### binomial PMF mean formula
$$
\begin{aligned}
\mu = np \\
n = \text{number of trials} \\
p = \text{probability of success}
\end{aligned}
$$

---
### binomial PMF standard deviation formula
$$
\begin{aligned}
\sigma = \sqrt {npq} \\
n = \text{number of successes} \\
p = \text{probability of success} \\
q = \text{probability of failure}
\end{aligned}
$$

---
### negative binomial probability mass function
- probability as function of the number of trials until $r$ successes
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
\begin{aligned}
P(X_{1} = k_{1}) = \begin{pmatrix} k-1 \\ r - 1 \end{pmatrix} p^rq^{k-r} \\
P(X_{2} = k_{2}) = \begin{pmatrix} k+r-1 \\ r - 1 \end{pmatrix} p^rq^k \\
X = \text{random variable} \\
k_{1} = \text{number of trials until r successes} \\
k_{2} = \text{number of failures before rth success} \\
r = \text{success number} \\
p = \text{probability of success} \\
q = \text{probability of failure} 
\end{aligned}
$$

---
### negative binomial PMF mean formula
$$
\begin{aligned}
\mu_{1} = \frac{r}{p} \\ 
\mu_{2} = \frac{rq}{p} \\
r = \text{success number} \\
p = \text{probability of success} \\
q = \text{probability of failure} 
\end{aligned}
$$

---
### negative binomial PMF standard deviation formula
$$
\begin{aligned}
\sigma = \sqrt \frac{rq}{p^2} \\
r = \text{success number} \\
q = \text{probability of failure} \\
p = \text{probability of success} 
\end{aligned}
$$

---
### geometric probability mass function
- probability as function of the number of trials until 1st success
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
\begin{aligned}
P(X_{1} = k_{1}) = pq^{k-1} \\
P(X_{2} = k_{2}) = pq^{k} \\
X = \text{random variable} \\
p = \text{probability of success} \\
q = \text{probability of failure} \\
k_{1} = \text{number of trials until 1st success} \\
k_{2} = \text{number of failures before 1st success}
\end{aligned}
$$

---
### geometric PMF mean formula 
$$
\begin{aligned}
\mu_{1} = \frac{1}{p} \\
\mu_{2} = \frac{q}{p} \\
p = \text{probability of success} \\
q = \text{probability of failure}
\end{aligned}
$$

---
### geometric PMF standard deviation formula
$$
\begin{aligned}
\sigma = \sqrt \frac{q}{p^2} \\
q = \text{probability of failure} \\
p = \text{probability of success}
\end{aligned}
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
\begin{aligned}
P(X = k) = \frac{\begin{pmatrix} K \\ k \end{pmatrix}\begin{pmatrix} N-K \\ n-k \end{pmatrix}}{\begin{pmatrix} N \\ n \end{pmatrix}} \\
X = \text{random variable} \\
K = \text{interest group size} \\
k = \text{number of interest items drawn} \\
N = \text{population size} \\
n = \text{number of items drawn}
\end{aligned}
$$

---
### hypergeometric PMF mean formula 
$$
\begin{aligned}
\mu = \frac{nK}{N} \\
n = \text{number of items drawn} \\
K = \text{interest group size} \\
N = \text{population size} 
\end{aligned}
$$

---
### hypergeometric PMF standard deviation formula
$$
\begin{aligned}
\sigma = \sqrt{(\frac{nK}{N})(1 - \frac{K}{N})(\frac{N-n}{N-1})} \\
n = \text{number of items drawn} \\
K = \text{interest group size} \\
N = \text{population size}
\end{aligned}
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
\begin{aligned}
P(X = k) = \frac{e^{-\lambda}\lambda^k}{k!} \\
X = \text{random variable} \\
k = \text{number of events within interval} \\
\lambda = \text{average number of events per interval} 
\end{aligned}
$$

---
### poisson PMF mean formula
$$
\begin{aligned}
\mu = \lambda \\
\lambda = \text{average number of events per interval}
\end{aligned}
$$

---
### poisson PMF standard deviation formula
$$
\begin{aligned}
\sigma = \sqrt \lambda \\
\lambda = \text{average number of events per interval}
\end{aligned}
$$

---
