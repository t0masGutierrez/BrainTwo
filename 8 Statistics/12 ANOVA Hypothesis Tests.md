### one-way ANOVA hypothesis test
- compare population mean between 3 or more groups

---
### one-way ANOVA hypothesis test assumptions
- numerical response variable
- categorical explanatory variable with 3 or more categories
- random sample
- independent observations
- normal distribution
- independent groups
- equal variance

---
### one-way ANOVA F-score formula
$$
\begin{aligned}
F = \frac{MS_{\text{group}}}{MS_{\text{error}}} \\
SS_{total} = SS_{group} + SS_{error} \\
df_{group} = k - 1 \\
df_{error} = n - k \\
df_{total} = n - 1 \\
MS_{group} = \frac{SS_{group}}{df_{group}} \\
MS_{error} = \frac{SS_{error}}{df_{error}} 
\end{aligned}
$$

---
### one-way ANOVA null hypothesis
- all population means are equal

---
### one-way ANOVA null hypothesis formula
$$
\begin{aligned}
H_{0}: \mu_{1} = \dots = \mu_{k}
\end{aligned}
$$

---
### one-way ANOVA alternative hypothesis
- all population means are not equal

---
### one-way ANOVA alternative hypothesis formula
$$
\begin{aligned}
H_{a}: \mu_{i} \ne \mu_{j}
\end{aligned}
$$

---
