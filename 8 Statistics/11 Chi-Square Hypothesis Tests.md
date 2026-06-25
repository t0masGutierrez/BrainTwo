### chi-square goodness of fit hypothesis test
- compare observations with expectations

---
### chi-square goodness of fit hypothesis test assumptions
- categorical response variable with 3 or more categories
- no explanatory variable
- all expected counts greater or equal 5

---
### goodness of fit chi-square-score formula
$$
\begin{aligned}
\chi^{2}=\sum_{i=1}^{k}\frac{(O_{i}-E_{i})^{2}}{E_{i}}\\
\chi^{2}=\sum_{i=1}^{k}\frac{(O_{i}-E_{i})^{2}}{E_{i}}\\
df=k-1\\
E=np_{i}\\
k=\text{number of categories}\\
O=\text{observed counts}\\
E=\text{expected counts}\\
n=\text{sample size}\\
p=\text{proportion}
\end{aligned}
$$

---
### chi-square goodness of fit null hypothesis
- observed proportions equal expected proportions

---
### chi-square goodness of fit null hypothesis formula
$$
\begin{aligned}
H_{0}:(p_{1},\dots,p_{k})=(p_{1},\dots,p_{k})_{0}
\end{aligned}
$$

---
### chi-square goodness of fit alternative hypothesis
- observed proportions not equal expected proportions

---
### chi-square goodness of fit alternative hypothesis formula
$$
\begin{aligned}
H_{a}:(p_{1},\dots,p_{k})\ne(p_{1},\dots,p_{k})_{0}
\end{aligned}
$$

---
### chi-square hypothesis test of independence
- compare conditionals with marginals

---
### chi-square hypothesis test of independence assumptions
- categorical response variable
- categorical explanatory variable
- all expected counts greater or equal 5

---
### independence chi-square-score formula
$$
\begin{aligned}
\chi^{2}=\sum_{i=1}^{r}\sum_{j=1}^{c}\frac{(O_{ij}-E_{ij})^{2}}{E_{ij}}\\
df=(r-1)(c-1)\\
E=\frac{rc}{r+c}\\
k=\text{number of categories}\\
O=\text{observed counts}\\
E=\text{expected counts}\\
r=\text{number of rows}\\
c=\text{number of columns}
\end{aligned}
$$

---
### chi-square independence null hypothesis
- there exists no association between response variable and explanatory variable

---
### chi-square independence null hypothesis formula
$$
\begin{aligned}
H_{0}:\forall i,j\ P(A_{i}\cap B_{j})=P(A_{i})P(B_{j})
\end{aligned}
$$

---
### chi-square independence alternative hypothesis
- there exists association between response variable and explanatory variable

---
### chi-square independence alternative hypothesis formula
$$
\begin{aligned}
H_{a}:\exists i,j\ P(A_{i}\cap B_{j})\ne P(A_{i})P(B_{j})
\end{aligned}
$$

---
