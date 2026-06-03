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
\chi ^ 2 = \sum _ { i = 1 } ^ k \frac { ( O _ i - E _ i ) ^ 2 } { E _ i } \\
\chi ^ 2 = \sum _ { i = 1 } ^ k \frac { ( O _ { i } - E _ { i } ) ^ 2 } { E _ { i } } \\
d f = k - 1 \\
E = n p _ i \\
k = \text { number of categories } \\
O = \text { observed counts } \\
E = \text { expected counts } \\
n = \text { sample size } \\
p = \text { proportion }
\end{aligned}
$$

---
### chi-square goodness of fit null hypothesis
- observed proportions equal expected proportions

---
### chi-square goodness of fit null hypothesis formula
$$
\begin{aligned}
H _ { 0 } : ( p _ 1 , \dots , p _ k ) = ( p _ 1 , \dots , p _ k ) _ 0
\end{aligned}
$$

---
### chi-square goodness of fit alternative hypothesis
- observed proportions not equal expected proportions

---
### chi-square goodness of fit alternative hypothesis formula
$$
\begin{aligned}
H _ { a } : ( p _ 1 , \dots , p _ k ) \ne ( p _ 1 , \dots , p _ k ) _ 0
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
\chi ^ 2 = \sum _ { i = 1 } ^ r \sum _ { j = 1 } ^ c \frac { ( O _ { i j } - E _ { i j } ) ^ 2 } { E _ { i j } } \\
d f = ( r - 1 ) ( c - 1 ) \\
E = \frac { r c } { r + c } \\
k = \text { number of categories } \\
O = \text { observed counts } \\
E = \text { expected counts } \\
r = \text { number of rows } \\
c = \text { number of columns }
\end{aligned}
$$

---
### chi-square independence null hypothesis
- there exists no association between response variable and explanatory variable

---
### chi-square independence null hypothesis formula
$$
\begin{aligned}
H _ { 0 } : \forall i , j \  P ( A _ i \cap B _ j ) = P ( A _ i ) P ( B _ j )
\end{aligned}
$$

---
### chi-square independence alternative hypothesis
- there exists association between response variable and explanatory variable

---
### chi-square independence alternative hypothesis formula
$$
\begin{aligned}
H _ { a } : \exists i , j \  P ( A _ i \cap B _ j ) \ne P ( A _ i ) P ( B _ j )
\end{aligned}
$$

---
