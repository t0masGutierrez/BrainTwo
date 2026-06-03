### slope
- change of dependent variable per unit of independent variable

---
### slope formula
$$
\begin{aligned}
b = \frac { y _ { 2 } - y _ { 1 } } { x _ { 2 } - x _ { 1 } } \\
x = \text { independent variable } \\
y = \text { dependent variable }
\end{aligned}
$$

---
### y-intercept 
- initial dependent variable

---
### y-intercept formula
$$
\begin{aligned}
x = 0 \implies a = y \\
x = \text { independent variable } \\
y = \text { dependent variable } \\
a = \text { y-intercept }
\end{aligned}
$$

---
### slope intercept equation
- describe the steepness of line

---
### slope intercept equation formula
$$
\begin{aligned}
y = a + b x \\
a = \text { y-intercept } \\
b = \text { slope } \\
x = \text { independent variable } \\
y = \text { dependent variable }
\end{aligned}
$$

---
### scatterplot
- compare bivariate numerical data
![[8 Statistics/Images/scatterplot.png|296]]

---
### scatterplot formula
$$
\begin{aligned}
X \times Y = \set { ( x , y ) \mid x \in X , y \in Y } \\
x = \text { independent variable } \\
y = \text { dependent variable }
\end{aligned}
$$

---
### simple linear regression
- model the bivariate relationship with line of best fit

---
### simple linear regression assumptions
- numerical response variable
- numerical explanatory variable
- linear relationship
- random sample
- independent observations
- normal distribution
- equal variance

---
### simple linear regression formula
$$
\begin{aligned}
\hat y = a + b x \\
a = \text { y-intercept } \\
b = \text { slope } \\
x = \text { independent variable } \\
\hat y = \text { prediction }
\end{aligned}
$$

---
### regression slope
- change of prediction per unit of independent variable

---
### regression slope formula
$$
\begin{aligned}
b = r \frac { s _ { y } } { s _ { x } } \\
r = \text { correlation } \\
s _ { x } , s _ { y } = \text { sample standard deviation }
\end{aligned}
$$

---
### regression y-intercept 
- initial prediction

---
### regression y-intercept formula
$$
\begin{aligned}
a = \overline y - b \overline x \\
\overline x , \overline y = \text { sample mean } \\
b = \text { slope }
\end{aligned}
$$

---
### residual
- difference between dependent variable and prediction equal random scatter around zero

---
### residual formula
$$
\begin{aligned}
e = y - \hat y \\
y = \text { dependent variable } \\
\hat y = \text { prediction }
\end{aligned}
$$

---
### unexplained variation
- sum of squared difference between dependent variable and prediction

---
### unexplained variation formula
$$
\begin{aligned}
S S E = \sum _ { i } ^ { n } e _ { i } ^ { 2 } \\
n = \text { sample size } \\
e = \text { residual }
\end{aligned}
$$

---
### explained variation
- sum of squared difference between average dependent variable and prediction

---
### explained variation formula
$$
\begin{aligned}
S S R = \sum _ { i } ^ { n } ( \overline y _ { i } - \hat y _ { i } ) ^ { 2 } \\
n = \text { sample size } \\
\overline y = \text { sample mean } \\
\hat y = \text { prediction }
\end{aligned}
$$

---
### total variation
- sum of squared total between unexplained variation and explained variation

---
### total variation formula
$$
\begin{aligned}
S S T = \sum _ { i } ^ { n } ( y _ { i } - \overline y _ { i } ) ^ { 2 } = S S E + S S R \\
n = \text { sample size } \\
\hat y = \text { prediction } \\
\overline y = \text { sample mean }
\end{aligned}
$$

---
### coefficient of determination
- variation of dependent variable explained by the linear relationship with independent variable

---
### coefficient of determination
$$
\begin{aligned}
R ^ { 2 } = \frac { SSR } { SST } \\
0 \le R ^ { 2 } \le 1 \\
S S R = \text { explained variation } \\
S S T = \text { total variation }
\end{aligned}
$$

---
### correlation
- measure of the strength and direction of linear relationship

---
### correlation formula
$$
\begin{aligned}
# # # r = \frac { \sum z _ { x } z _ { y } } { n - 1 } \\
- 1 \le r \le 1 \\
z = \text { z-score } \\
n = \text { sample size } \\
x = \text { independent variable } \\
y = \text { dependent variable }
\end{aligned}
$$

---
### multiple linear regression
- model the multivariate relationship with line of best fit

---
### multiple linear regression assumptions
- numerical response variable
- numerical explanatory variable
- linear relationship
- random sample
- independent observations
- normal distribution
- equal variance

---
### multiple linear regression formula
$$
\begin{aligned}
\hat y = a + \sum _ { j = 1 } ^ { k } b _ { j } x _ { j } \\
a = \text { y-intercept } \\
k = \text { number of independent variables } \\
b = \text { slope } \\
x = \text { independent variable } \\
\hat y = \text { prediction }
\end{aligned}
$$

---
### correlation standard error
- standard deviation of correlation sampling distribution

---
### correlation standard error formula
$$
\begin{aligned}
S E ( r ) = \sqrt { \frac { 1 - r ^ { 2 } } { n - 2 } } \\
r = \text { correlation } \\
n = \text { sample size }
\end{aligned}
$$

---
### correlation t-score
- number of standard errors between correlation and zero

---
### correlation t-score formula
$$
\begin{aligned}
t = \frac { r - 0 } { S E ( r ) } \\
d f = n - 2 \\
r = \text { correlation } \\
S E = \text { standard error }
\end{aligned}
$$

---
### simple linear regression null hypothesis
- population correlation equal zero  

---
### simple linear regression null hypothesis formula
$$
\begin{aligned}
H _ { 0 } : \rho = 0
\end{aligned}
$$

---
### simple linear regression alternative hypothesis
- population correlation not equal zero

---
### simple linear regression alternative hypothesis formula
$$
\begin{aligned}
H _ { a } : \rho \ne 0
\end{aligned}
$$

---
### regression slope standard error
- standard deviation of regression slope sampling distribution

---
### regression slope standard error formula
$$
\begin{aligned}
S E ( b ) = \sqrt { \frac { SSE } { ( n - k - 1 ) ( 1 - R _ { i } ^ { 2 } ) \sum _ { i = 1 } ^ { n } ( x _ { ij } - \overline x _ { j } ) ^ { 2 } } } \\
S S E = \text { unexplained variation } \\
n = \text { sample size } \\
k = \text { number of independent variables } \\
R ^ { 2 } = \text { coefficient of determination } \\
x = \text { independent variable } \\
\overline x = \text { sample mean }
\end{aligned}
$$

---
### regression slope t-score
- number of standard errors between regression slope and zero

---
### regression slope t-score formula
$$
\begin{aligned}
t = \frac { b _ { j } - 0 } { S E ( b _ { j } ) } \\
d f = n - k - 1 \\
b = \text { slope } \\
S E = \text { standard error }
\end{aligned}
$$

---
### multiple linear regression null hypothesis
- population regression slope equal zero 

---
### multiple linear regression null hypothesis formula
$$
\begin{aligned}
H _ { 0 } : \beta = 0
\end{aligned}
$$

---
### multiple linear regression alternative hypothesis
- population regression slope not equal zero

---
### multiple linear regression alternative hypothesis formula
$$
\begin{aligned}
H _ { a } : \beta \ne 0
\end{aligned}
$$

---
### line of best fit
- coefficient of slope-intercept equation with minimum unexplained variation aka ordinary least squares

---
### line of best fit formula
$$
\begin{aligned}
\min \sum _ { i } ^ { n } e _ { i } ^ { 2 } \\
n = \text { sample size } \\
e = \text { residual }
\end{aligned}
$$

---
