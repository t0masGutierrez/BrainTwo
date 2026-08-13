### slope
- change of dependent variable per unit of independent variable

---
### slope formula
$$
\begin{aligned}
b=\frac{y_{2}-y_{1}}{x_{2}-x_{1}}\\
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
x=0\implies a=y\\
x=\text{independent variable}\\
y=\text{dependent variable}\\
a=\text{y-intercept}
\end{aligned}
$$

---
### slope intercept equation
- describe the steepness of line

---
### slope intercept equation formula
$$
\begin{aligned}
y=a+bx\\
a=\text{y-intercept}\\
b=\text{slope}\\
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
X\times Y=\set{(x,y)\mid x\in X,y\in Y}\\
x=\text{independent variable}\\
y=\text{dependent variable}
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
\hat y=a+bx\\
a=\text{y-intercept}\\
b=\text{slope}\\
x=\text{independent variable}\\
\hat y=\text{prediction}
\end{aligned}
$$

---
### regression slope
- change of prediction per unit of independent variable

---
### regression slope formula
$$
\begin{aligned}
b=r\frac{s_{y}}{s_{x}}\\
r=\text{correlation}\\
s_{x},s_{y}=\text{sample standard deviation}
\end{aligned}
$$

---
### regression y-intercept
- initial prediction

---
### regression y-intercept formula
$$
\begin{aligned}
a=\overline y-b\overline x\\
\overline x,\overline y=\text{sample mean}\\
b=\text{slope}
\end{aligned}
$$

---
### residual
- difference between dependent variable and prediction equal random scatter around zero

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
SSE=\sum_{i}^{n}e_{i}^{2}\\
n=\text{sample size}\\
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
SSR=\sum_{i}^{n}(\overline y_{i}-\hat y_{i})^{2}\\
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
SST=\sum_{i}^{n}(y_{i}-\overline y_{i})^{2}=SSE+SSR\\
n=\text{sample size}\\
\hat y=\text{prediction}\\
\overline y=\text{sample mean}
\end{aligned}
$$

---
### coefficient of determination
- variation of dependent variable explained by the linear relationship with independent variable

---
### coefficient of determination
$$
\begin{aligned}
R^{2}=\frac{SSR}{SST}\\
0\le R^{2}\le1\\
SSR=\text{explained variation}\\
SST=\text{total variation}
\end{aligned}
$$

---
### correlation
- measure of the strength and direction of linear relationship

---
### correlation formula
$$
\begin{aligned}
r=\frac{\sum z_{x}z_{y}}{n-1}\\
-1\le r\le1\\
z=\text{z-score}\\
n=\text{sample size}\\
x=\text{independent variable}\\
y=\text{dependent variable}
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
\hat y=a+\sum_{j=1}^{k}b_{j}x_{j}\\
a=\text{y-intercept}\\
k=\text{number of independent variables}\\
b=\text{slope}\\
x=\text{independent variable}\\
\hat y=\text{prediction}
\end{aligned}
$$

---
### correlation standard error
- standard deviation of correlation sampling distribution

---
### correlation standard error formula
$$
\begin{aligned}
SE(r)=\sqrt{\frac{1-r^{2}}{n-2}}\\
r=\text{correlation}\\
n=\text{sample size}
\end{aligned}
$$

---
### correlation t-score
- number of standard errors between correlation and zero

---
### correlation t-score formula
$$
\begin{aligned}
t=\frac{r-0}{SE(r)}\\
df=n-2\\
r=\text{correlation}\\
SE=\text{standard error}
\end{aligned}
$$

---
### simple linear regression null hypothesis
- population correlation equal zero

---
### simple linear regression null hypothesis formula
$$
\begin{aligned}
H_{0}:\rho=0
\end{aligned}
$$

---
### simple linear regression alternative hypothesis
- population correlation not equal zero

---
### simple linear regression alternative hypothesis formula
$$
\begin{aligned}
H_{a}:\rho\ne0
\end{aligned}
$$

---
### regression slope standard error
- standard deviation of regression slope sampling distribution

---
### regression slope standard error formula
$$
\begin{aligned}
SE(b)=\sqrt{\frac{SSE}{(n-k-1)(1-R_{i}^{2})\sum_{i=1}^{n}(x_{\text{ij}}-\overline x_{j})^{2}}}\\
SSE=\text{unexplained variation}\\
n=\text{sample size}\\
k=\text{number of independent variables}\\
R^{2}=\text{coefficient of determination}\\
x=\text{independent variable}\\
\overline x=\text{sample mean}
\end{aligned}
$$

---
### regression slope t-score
- number of standard errors between regression slope and zero

---
### regression slope t-score formula
$$
\begin{aligned}
t=\frac{b_{j}-0}{SE(b_{j})}\\
df=n-k-1\\
b=\text{slope}\\
SE=\text{standard error}
\end{aligned}
$$

---
### multiple linear regression null hypothesis
- population regression slope equal zero

---
### multiple linear regression null hypothesis formula
$$
\begin{aligned}
H_{0}:\beta=0
\end{aligned}
$$

---
### multiple linear regression alternative hypothesis
- population regression slope not equal zero

---
### multiple linear regression alternative hypothesis formula
$$
\begin{aligned}
H_{a}:\beta\ne0
\end{aligned}
$$

---
### line of best fit
- coefficient of slope-intercept equation with minimum unexplained variation aka ordinary least squares

---
### line of best fit formula
$$
\begin{aligned}
\min\sum_{i}^{n}e_{i}^{2}\\
n=\text{sample size}\\
e=\text{residual}
\end{aligned}
$$

---
