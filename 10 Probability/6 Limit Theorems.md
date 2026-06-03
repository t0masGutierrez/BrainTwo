### mean
- mean of random variable

---
### mean formula
$$
\begin{aligned}
\mu = E [ X ] \\
X = \text { random variable }
\end{aligned}
$$

---
### sample mean
- sample mean of random variable

---
### sample mean formula
$$
\begin{aligned}
\overline X _ n = \frac { 1 } { n } \sum _ { i = 1 } ^ n X _ i \\
X = \text { random variable }
\end{aligned}
$$

---
### variance
- spread of random variable around mean

---
### variance formula
$$
\begin{aligned}
\sigma ^ 2 = \text { Var } ( X ) \\
X = \text { random variable }
\end{aligned}
$$

---
### sample variance
- sample spread of random variable around mean

---
### sample variance formula
$$
\begin{aligned}
s ^ 2 = \text { Var } ( \overline X _ n ) = \frac { \sigma ^ 2 } { n } \\
\sigma ^ 2 = \text { variance } \\
X = \text { random variable }
\end{aligned}
$$

---
### markov inequality
- upper boundary for the probability of nonnegative lower boundary

---
### markov inequality formula
$$
\begin{aligned}
P ( X \ge c ) \le \frac { E [ X ] } { c } \\
X \ge 0 \\
X = \text { random variable } \\
c = \text { real number }
\end{aligned}
$$

---
### chebyshevs inequality
- upper boundary for the probability of $k$ standard deviations from the mean

---
### chebyshevs inequality formula
$$
\begin{aligned}
P ( | X - \mu | \ge k \sigma ) \le \frac { 1 } { k ^ 2 } \\
P ( | X - \mu | < c ) \le 1 - \frac { \sigma ^ 2 } { c ^ 2 } \\
\mu , \sigma ^ 2 < \infty \\
X = \text { random variable } \\
\mu = \text { mean } \\
k = \text { number of standard deviations } \\
\sigma ^ 2 = \text { variance } \\
c = \text { real number }
\end{aligned}
$$

---
### weak law of large numbers
- sample mean approaches population mean as sample size approaches infinity

---
### weak law of large numbers formula
$$
\begin{aligned}
\forall \epsilon > 0 : P ( | \lim _ { n \rightarrow \infty } \overline X _ n - \mu | > \epsilon ) = 0 \\
\overline X = \text { sample mean } \\
\mu = \text { mean }
\end{aligned}
$$

---
### strong law of large numbers
- sample mean converges on population mean with probability 1

---
### strong law of large numbers formula
$$
\begin{aligned}
P ( \lim _ { n \rightarrow \infty } \overline X _ n = \mu ) = 1 \\
\overline X = \text { sample mean } \\
\mu = \text { mean }
\end{aligned}
$$

---
### central limit theorem
- iid random variable approaches standard normal distribution as sample size approaches infinity regardless of the population distribution

---
### central limit theorem formula
$$
\begin{aligned}
P ( \overline X _ n \le x ) \approx P ( Z \le \frac { x - \mu } { \sigma / \sqrt n } ) \\
P ( \sum _ { i = 1 } ^ n X _ i \le x ) \approx P ( Z \le \frac { x - n \mu } { \sigma \sqrt n } )
\end{aligned}
$$

---
