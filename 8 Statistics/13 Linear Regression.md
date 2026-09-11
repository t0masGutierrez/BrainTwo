### slope
- change of dependent variable per unit of independent variable

---
### slope formula
$$
\begin{aligned}
b_1=\frac{y_{2}-y_{1}}{x_{2}-x_{1}}\\
x=\text{independent variable}\\
y=\text{dependent variable}
\end{aligned}
$$

---
### y-intercept
- initial dependent variable

---
### y-intercept formula
$$
\begin{aligned}
x=0\implies y=b_0\\
x=\text{independent variable}\\
y=\text{dependent variable}\\
b_0=\text{y-intercept}
\end{aligned}
$$

---
### slope intercept equation
- steepness of line

---
### slope intercept equation formula
$$
\begin{aligned}
y=b_0+b_1x\\
b_0=\text{y-intercept}\\
b_1=\text{slope}\\
x=\text{independent variable}\\
y=\text{dependent variable}
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
\set{(x_i,y_i)}_{i=1}^n\\
x=\text{independent variable}\\
y=\text{dependent variable}
\end{aligned}
$$

---
### line of best fit
- coefficient(s) of slope intercept equation with minimum unexplained variation
- aka ordinary least squares

---
### line of best fit formula
$$
\begin{aligned}
\min\sum_{i=1}^{n}e_{i}^{2}\\
n=\text{sample size}\\
e=\text{residual}
\end{aligned}
$$

---
### simple linear regression
- model bivariate relationship with line of best fit

---
### simple linear regression assumptions
- numerical response variable
- numerical explanatory variable
- linear relationship
- random sample
- independent observations
- normal error distribution
- homoscedasticity

---
### simple linear regression formula
$$
\begin{aligned}
Y=\beta_0+\beta_1X+\varepsilon\\
\hat y=b_0+b_1x\\
Y=\text{dependent variable}\\
\beta_0,b_0=\text{y-intercept}\\
k=\text{number of independent variables}\\
\beta_1,b_1=\text{slope}\\
X,x=\text{independent variable}\\
\varepsilon=\text{error}\\
\hat y=\text{prediction}
\end{aligned}
$$

---
### multiple linear regression
- model multivariate relationship with line of best fit

---
### multiple linear regression assumptions
- numerical response variable
- numerical explanatory variable
- linear relationship
- random sample
- independent observations
- no perfect multicollinearity
- normal error distribution
- homoscedasticity

---
### multiple linear regression formula
$$
\begin{aligned}
Y=\beta_0+\sum_{j=1}^k\beta_jX_j+\varepsilon\\
\hat y=b_0+\sum_{j=1}^{k}b_{j}x_{j}\\
Y=\text{dependent variable}\\
\beta_0,b_0=\text{y-intercept}\\
k=\text{number of independent variables}\\
\beta_j,b_j=\text{coefficient}\\
X,x=\text{independent variable}\\
\varepsilon=\text{error}\\
\hat y=\text{prediction}
\end{aligned}
$$

---
### slope
- change of prediction per unit of independent variable

---
### slope formula
$$
\begin{aligned}
b_1=r\frac{s_{y}}{s_{x}}\\
r=\text{correlation}\\
s_{x},s_{y}=\text{sample standard deviation}
\end{aligned}
$$

---
### y-intercept
- initial prediction

---
### y-intercept formula
$$
\begin{aligned}
b_0=\overline y-b_1\overline x\\
\overline x,\overline y=\text{sample mean}\\
b_1=\text{slope}
\end{aligned}
$$

---
### residual
- difference between dependent variable and prediction

---
### residual formula
$$
\begin{aligned}
e=y-\hat y\\
y=\text{dependent variable}\\
\hat y=\text{prediction}
\end{aligned}
$$

---
### unexplained variation
- sum of squared difference between dependent variable and prediction

---
### unexplained variation formula
$$
\begin{aligned}
SSE=\sum_{i}^{n}(y_{i}-\hat y_i)^{2}=\sum_{i}^{n}e_{i}^{2}\\
n=\text{sample size}\\
y=\text{dependent variable}\\
\hat y=\text{prediction}\\
e=\text{residual}
\end{aligned}
$$

---
### explained variation
- sum of squared difference between average dependent variable and prediction

---
### explained variation formula
$$
\begin{aligned}
SSR=\sum_{i}^{n}(\hat y_{i}-\overline y)^{2}\\
n=\text{sample size}\\
\overline y=\text{sample mean}\\
\hat y=\text{prediction}
\end{aligned}
$$

---
### total variation
- sum of squared total between unexplained variation and explained variation

---
### total variation formula
$$
\begin{aligned}
SST=\sum_{i}^{n}(y_{i}-\overline y)^{2}=SSE+SSR\\
n=\text{sample size}\\
\hat y=\text{prediction}\\
\overline y=\text{sample mean}
\end{aligned}
$$

---
### coefficient of determination
- variation of dependent variable explained by the linear relationship with independent variable

---
### coefficient of determination formula
$$
\begin{aligned}
R^{2}=\frac{SSR}{SST}=1-\frac{SSE}{SST}\\
0\le R^{2}\le1\\
SSR=\text{explained variation}\\
SST=\text{total variation}\\
SSE=\text{unexplained variation}\\
\end{aligned}
$$

---
### correlation
- measure of the strength and direction of linear relationship

---
### correlation formula
$$
\begin{aligned}
r=\frac{1}{n-1}\sum z_{x}z_{y}\\
-1\le r\le1\\
n=\text{sample size}\\
z=\text{z-score}\\
x=\text{independent variable}\\
y=\text{dependent variable}
\end{aligned}
$$

---
### simple standard error
- standard deviation of correlation sampling distribution

---
### simple standard error formula
$$
\begin{aligned}
SE(r)=\sqrt{\frac{1-r^{2}}{n-2}}\\
r=\text{sample correlation}\\
n=\text{sample size}
\end{aligned}
$$

---
### simple t-score
- number of standard errors between correlation and zero

---
### simple t-score formula
$$
\begin{aligned}
t=\frac{r-0}{SE(r)}\\
\text{df}=n-2\\
r=\text{sample correlation}\\
SE=\text{standard error}\\
\text{df}=\text{degrees of freedom}\\
n=\text{sample size}
\end{aligned}
$$

---
### simple linear regression null hypothesis
- population correlation equal zero

---
### simple linear regression null hypothesis formula
$$
\begin{aligned}
H_{0}:\rho=0\\
\rho=\text{correlation}
\end{aligned}
$$

---
### simple linear regression alternative hypothesis
- population correlation not equal zero

---
### simple linear regression alternative hypothesis formula
$$
\begin{aligned}
H_{1}:\rho\ne0\\
\rho=\text{correlation}
\end{aligned}
$$

---
### multiple standard error
- standard deviation of coefficient sampling distribution

---
### multiple standard error formula
$$
\begin{aligned}
SE(b_j)=\sqrt{\frac{SSE}{(n-2)\sum_{i=1}^n(x_i-\overline x)^2}}\\
SSE=\text{unexplained variation}\\
n=\text{sample size}\\
x=\text{independent variable}\\
\overline x=\text{sample mean}
\end{aligned}
$$

---
### multiple t-score
- number of standard errors between coefficient and zero

---
### multiple t-score formula
$$
\begin{aligned}
t=\frac{b_j-0}{SE(b_j)}\\
\text{df}=n-k-1\\
b_j=\text{coefficient}\\
SE=\text{standard error}\\
\text{df}=\text{degrees of freedom}\\
n=\text{sample size}\\
k=\text{number of independent variables}
\end{aligned}
$$

---
### multiple linear regression null hypothesis
- population coefficient equal zero

---
### multiple linear regression null hypothesis formula
$$
\begin{aligned}
H_{0}:\beta_j=0\\
\beta_j=\text{coefficient}
\end{aligned}
$$

---
### multiple linear regression alternative hypothesis
- population coefficient not equal zero

---
### multiple linear regression alternative hypothesis formula
$$
\begin{aligned}
H_{1}:\beta_j\ne0\\
\beta_j=\text{coefficient}
\end{aligned}
$$

---
