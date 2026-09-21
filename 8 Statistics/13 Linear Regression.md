### slope
- change of dependent variable per unit of independent variable

---
### slope formula
$$
\begin{lgathered}
b_1=\frac{y_{2}-y_{1}}{x_{2}-x_{1}}\\
x=\text{independent variable}\\
y=\text{dependent variable}
\end{lgathered}
$$

---
### y-intercept
- initial dependent variable

---
### y-intercept formula
$$
\begin{lgathered}
x=0\implies y=b_0\\
x=\text{independent variable}\\
y=\text{dependent variable}\\
b_0=\text{y-intercept}
\end{lgathered}
$$

---
### slope intercept equation
- steepness of line

---
### slope intercept equation formula
$$
\begin{lgathered}
y=b_0+b_1x\\
b_0=\text{y-intercept}\\
b_1=\text{slope}\\
x=\text{independent variable}\\
y=\text{dependent variable}
\end{lgathered}
$$

---
### scatterplot
- compare bivariate numerical data
![[8 Statistics/Images/scatterplot.png|296]]

---
### scatterplot formula
$$
\begin{lgathered}
\set{(x_i,y_i)}_{i=1}^n\\
x=\text{independent variable}\\
y=\text{dependent variable}
\end{lgathered}
$$

---
### line of best fit
- line minimizing the unexplained variation
- aka ordinary least squares

---
### line of best fit formula
$$
\begin{lgathered}
\min\sum_{i=1}^{n}e_{i}^{2}\\
n=\text{sample size}\\
e=\text{residual}
\end{lgathered}
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
\begin{lgathered}
Y=\beta_0+\beta_1X+\varepsilon\\
\hat y=b_0+b_1x\\
Y=\text{dependent variable}\\
\beta_0,b_0=\text{y-intercept}\\
k=\text{number of independent variables}\\
\beta_1,b_1=\text{slope}\\
X,x=\text{independent variable}\\
\varepsilon=\text{error}\\
\hat y=\text{prediction}
\end{lgathered}
$$

---
### multiple linear regression
- model multivariate relationship with line of best fit

---
### multiple linear regression assumptions
- numerical response variable
- linear relationship
- random sample
- independent observations
- normal error distribution
- homoscedasticity
- imperfect multicollinearity

---
### multiple linear regression formula
$$
\begin{lgathered}
Y=\beta_0+\sum_{j=1}^k\beta_jX_j+\varepsilon\\
\hat y=b_0+\sum_{j=1}^{k}b_{j}x_{j}\\
Y=\text{dependent variable}\\
\beta_0,b_0=\text{y-intercept}\\
k=\text{number of independent variables}\\
\beta_j,b_j=\text{coefficient}\\
X,x=\text{independent variable}\\
\varepsilon=\text{error}\\
\hat y=\text{prediction}
\end{lgathered}
$$

---
### regression slope
- increasing the independent variable by 1 unit changes the dependent variable by estimated coefficient, holding all other explanatory variables constant

---
### regression slope formula
$$
\begin{lgathered}
b_1=r\frac{s_{y}}{s_{x}}\\
r=\text{correlation}\\
s_{x},s_{y}=\text{sample standard deviation}
\end{lgathered}
$$

---
### regression y-intercept
- if all independent variables equal zero then dependent variable equal y-intercept

---
### regression y-intercept formula
$$
\begin{lgathered}
b_0=\overline y-b_1\overline x\\
\overline x,\overline y=\text{sample mean}\\
b_1=\text{slope}
\end{lgathered}
$$

---
### residual
- difference between dependent variable and prediction

---
### residual formula
$$
\begin{lgathered}
e=y-\hat y\\
y=\text{dependent variable}\\
\hat y=\text{prediction}
\end{lgathered}
$$

---
### unexplained variation
- sum of squared difference between dependent variable and prediction

---
### unexplained variation formula
$$
\begin{lgathered}
SSE=\sum_{i}^{n}(y_{i}-\hat y_i)^{2}=\sum_{i}^{n}e_{i}^{2}\\
n=\text{sample size}\\
y=\text{dependent variable}\\
\hat y=\text{prediction}\\
e=\text{residual}
\end{lgathered}
$$

---
### explained variation
- sum of squared difference between average dependent variable and prediction

---
### explained variation formula
$$
\begin{lgathered}
SSR=\sum_{i}^{n}(\overline y-\hat y_{i})^{2}\\
n=\text{sample size}\\
\overline y=\text{sample mean}\\
\hat y=\text{prediction}
\end{lgathered}
$$

---
### total variation
- sum of squared total between dependent variable and sample mean

---
### total variation formula
$$
\begin{lgathered}
SST=SS_y=\sum_{i}^{n}(y_{i}-\overline y)^{2}=SSE+SSR\\
n=\text{sample size}\\
\hat y=\text{prediction}\\
\overline y=\text{sample mean}
\end{lgathered}
$$

---
### coefficient of determination
- variation of dependent variable explained by the linear regression model

---
### coefficient of determination formula
$$
\begin{lgathered}
R^{2}=\frac{SSR}{SST}=1-\frac{SSE}{SST}\\
0\le R^{2}\le1\\
SSR=\text{explained variation}\\
SST=\text{total variation}\\
SSE=\text{unexplained variation}\\
\end{lgathered}
$$

---
### adjusted coefficient of determination
- variation of dependent variable explained by the linear regression model but penalize unnecessary independent variables

---
### adjusted coefficient of determination formula
$$
\begin{lgathered}
R^2_{\text{adj}}=1-\frac{SSE(n-1)}{SST(n-k-1)}\\
SSE=\text{unexplained variation}\\
n=\text{sample size}\\
SST=\text{total variation}\\
k=\text{number of independent variables}\\
\end{lgathered}
$$

---
### correlation
- measure of the strength and direction of linear relationship

---
### correlation formula
$$
\begin{lgathered}
r=\frac{1}{n-1}\sum z_{x}z_{y}\\
-1\le r\le1\\
n=\text{sample size}\\
z=\text{z-score}\\
x=\text{independent variable}\\
y=\text{dependent variable}
\end{lgathered}
$$

---
### residual standard error
- standard deviation of residual sampling distribution

---
### residual standard error formula
$$
\begin{lgathered}
SE(e)=\sqrt{\frac{SSE}{n-k-1}}\\
SSE=\text{explained variation}\\
n=\text{sample size}\\
k=\text{number of independent variables}
\end{lgathered}
$$

---
### linear regression standard error
- standard deviation of coefficient sampling distribution

---
### linear regression standard error formula
$$
\begin{lgathered}
SE(b_j)=\sqrt{\frac{SE(e)}{\sum_{i=1}^n(x_i-\overline x)^2}}\\
SE=\text{standard error}\\
e=\text{residual}\\
n=\text{sample size}\\
x=\text{independent variable}\\
\overline x=\text{sample mean}
\end{lgathered}
$$

---
### linear regression t-score
- number of standard errors between coefficient and zero

---
### linear regression t-score formula
$$
\begin{lgathered}
t=\frac{b_j-0}{SE(b_j)}\\
\text{df}=n-k-1\\
b_j=\text{coefficient}\\
SE=\text{standard error}\\
\text{df}=\text{degrees of freedom}\\
n=\text{sample size}\\
k=\text{number of independent variables}
\end{lgathered}
$$

---
### linear regression null hypothesis
- there's insufficient evidence of linear association between independent variable and dependent variable, holding all other explanatory variables constant

---
### linear regression null hypothesis formula
$$
\begin{lgathered}
H_{0}:\beta_j=0\\
\beta_j=\text{coefficient}
\end{lgathered}
$$

---
### linear regression alternative hypothesis
- there's sufficient evidence of linear association between independent variable and dependent variable, holding all other explanatory variables constant

---
### linear regression alternative hypothesis formula
$$
\begin{lgathered}
H_{1}:\beta_j\ne0\\
\beta_j=\text{coefficient}
\end{lgathered}
$$

---
