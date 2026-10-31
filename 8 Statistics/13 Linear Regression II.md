### categorical variable
- explanatory variable whose values represent categories

---
### categorical variable formula
$$
\begin{lgathered}
C=\set{c_1,\dots,c_k}\\
c=\text{category}\\
k=\text{number of categorical variables}
\end{lgathered}
$$

---
### indicator variable
- explanatory variable whose binary values indicate membership of category

---
### indicator variable formula
$$
\begin{lgathered}
I_i=\begin{cases}
1,&C=c_i\\
0,&C\ne c_i
\end{cases}\\
i=1,\dots,k-1\\
C=\text{categorical variable}\\
c=\text{category}\\
k=\text{number of categorical variables}
\end{lgathered}
$$

---
### reference category
- coefficient of category equal intercept where all indicator variables equal zero
- change of reference category equal different coefficients but same predictions

---
### reference category formula
$$
\begin{lgathered}
\beta_0=E[Y\mid C=c_r]\\
\overline y_r=b_0\\
E=\text{expectation}\\
Y=\text{response variable}\\
C=\text{categorical variable}\\
c=\text{category}\\
b=\text{coefficient}
\end{lgathered}
$$

---
### nonreference category
- coefficient of category equal difference from the reference category

---
### nonreference category formula
$$
\begin{lgathered}
\beta_j=E[Y\mid C=c_j]-E[Y\mid C=c_r]\\
\overline y_j=b_0+b_j\\
E=\text{expectation}\\
Y=\text{response variable}\\
C=\text{categorical variable}\\
c=\text{category}
\end{lgathered}
$$

---
### categorical linear regression
- model categorical relationship with line of best fit

---
### categorical linear regression assumptions
- numerical response variable
- categorical explanatory variable
- linear relationship
- random sample
- independent observations
- normal error distribution
- constant error variance
- imperfect multicollinearity

---
### categorical linear regression formula
$$
\begin{lgathered}
Y=\beta_0+\sum_{j=1}^{k-1}\beta_jI_j+\varepsilon\\
\hat y=b_0+\sum_{j=1}^{k-1}b_{j}\set{0,1}_{j}\\
Y=\text{dependent variable}\\
\beta_0,b_0=\text{y-intercept}\\
k=\text{number of categorical variables}\\
\beta_j,b_j=\text{coefficient}\\
I=\text{indicator variable}\\
\varepsilon=\text{error}\\
\hat y=\text{prediction}
\end{lgathered}
$$

---
### main effect
- effect of explanatory variable on response variable

---
### main effect formula
$$
\begin{lgathered}
Y=\beta_0+\sum_{i=1}^{k}\beta_{i}X_{i}+\varepsilon\\
\hat y=b_0+\sum_{i=1}^{k}b_{i}x_{i}\\
\frac{\partial\hat y}{\partial x_j}=b_j\\
\#x_j=k\\
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
### interaction effect
- effect of explanatory variable on response variable depend on another explanatory variable

---
### interaction effect formula
$$
\begin{lgathered}
Y=\beta_0+\sum_{i=1}^{k}\beta_{i}X_{i}+\sum_{i=1}^{k-1}\sum_{j=i+1}^{k}\beta_{\text{ij}}X_{i}X_j+\varepsilon\\
\hat y=b_0+\sum_{i=1}^{k}b_{i}x_{i}+\sum_{i=1}^{k-1}\sum_{j=i+1}^{k}b_{\text{ij}}x_{i}x_j\\
\frac{\partial^2\hat y}{\partial x_ix_j}=b_{\text{ij}}\\
\#x_ix_j=\frac{k(k-1)}{2}\\
Y=\text{dependent variable}\\
\beta_0,b_0=\text{y-intercept}\\
k=\text{number of independent variables}\\
\beta_j,b_j=\text{coefficient}\\
X,x=\text{independent variable}\\
\hat y=\text{prediction}
\end{lgathered}
$$

---
### mixed interaction effect
- effect of numerical explanatory variable on response variable depend on another categorical explanatory variable

---
### mixed interaction effect
$$
\begin{lgathered}
Y=\beta_0+\sum_{i=1}^{p}\beta_{i}X_{i}+\sum_{j=1}^{q-1}\gamma_{j}I_{j}+\sum_{i=1}^{p}\sum_{j=1}^{q-1}\delta_{\text{ij}}X_{i}I_j+\varepsilon\\
\hat y=b_0+\sum_{i=1}^{p}b_{i}x_{i}+\sum_{j=1}^{q-1}c_{j}\set{0,1}_{j}+\sum_{i=1}^{p}\sum_{j=1}^{q-1}d_{\text{ij}}x_{i}\set{0,1}_j\\
\frac{\partial\hat y}{\partial x_i}\bigg|_{I_j=1}-\frac{\partial\hat y}{\partial x_i}\bigg|_{I_j=0}=d_{\text{ij}}\\
\#x_i\set{0,1}_j=p(q-1)\\\\
Y=\text{dependent variable}\\
\beta,\gamma,\delta,b,c,d=\text{coefficient}\\
X,x=\text{independent variable}\\
p=\text{number of numerical variables}\\
I=\text{indicator variable}\\
q=\text{number of categorical variables}\\
\hat y=\text{prediction}
\end{lgathered}
$$

---
### categorical interaction effect
- effect of categorical explanatory variable on response variable depend on another categorical explanatory variable

---
### categorical interaction effect
$$
\begin{lgathered}
Y=\beta_0+\sum_{i=1}^{p-1}\beta_iI_i+\sum_{j=1}^{q-1}\gamma_jI_j+\sum_{i=1}^{p-1}\sum_{j=1}^{q-1}\delta_{\text{ij}}I_iI_j+\varepsilon\\
\hat y=b_0+\sum_{i=1}^{p-1}b_iI_i+\sum_{j=1}^{q-1}c_jI_j+\sum_{i=1}^{p-1}\sum_{j=1}^{q-1}d_{\text{ij}}I_iI_j\\
\hat y(1,1)-\hat y(0,1)-\hat y(0,1)+\hat y(0,0)=d_{\text{ij}}\\
\#I_iI_j=(p-1)(q-1)\\
Y=\text{dependent variable}\\
\beta_0,b_0=\text{y-intercept}\\
p,q=\text{number of categorical variables}\\
\beta,\gamma,\delta,b,c,d=\text{coefficient}\\
I=\text{indicator variable}\\
\varepsilon=\text{error}\\
\hat y=\text{prediction}
\end{lgathered}
$$

---
### overall linear regression ANOVA hypothesis test
- test whether at least one explanatory variable significantly predict response variable

---
### overall linear regression ANOVA hypothesis test assumptions
- numerical response variable
- linear relationship
- random sample
- independent observations
- normal error distribution
- constant error variance
- imperfect multicollinearity

---
### overall linear regression ANOVA F-score formula
$$
\begin{lgathered}
F=\frac{MS_{\text{reg}}}{MS_{\text{error}}}\\
SS_{\text{total}}=SS_{\text{reg}}+SS_{\text{error}}\\
\nu_{\text{reg}}=k\\
\nu_{\text{error}}=n-k-1\\
\nu_{\text{total}}=n-1\\
MS_{\text{reg}}=\frac{SS_{\text{reg}}}{\nu_{\text{reg}}}\\
MS_{\text{error}}=\frac{SS_{\text{error}}}{\nu_{\text{error}}}
\end{lgathered}
$$

---
### overall linear regression ANOVA null hypothesis
- all coefficients equal zero

---
### overall linear regression ANOVA null hypothesis formula
$$
\begin{lgathered}
H_{0}:\forall j\in\set{1,\dots,k_F}:\beta_{j}=0\\
\beta=\text{coefficient}\\
k=\text{number of independent variables}
\end{lgathered}
$$

---
### overall linear regression ANOVA alternative hypothesis
- there exists nonzero coefficient

---
### overall linear regression ANOVA alternative hypothesis formula
$$
\begin{lgathered}
H_{1}:\exists j\in\set{1,\dots,k}:\beta_{j}\ne0\\
\beta=\text{coeficient}
\end{lgathered}
$$

---
### partial linear regression ANOVA hypothesis test
- test whether at least one selected explanatory variable significantly improve prediction of the response variable after accounting for the remaining explanatory variables

---
### partial linear regression ANOVA hypothesis test assumptions
- numerical response variable
- linear relationship
- random sample
- independent observations
- normal error distribution
- constant error variance
- imperfect multicollinearity

---
### partial linear regression ANOVA F-score formula
$$
\begin{lgathered}
F=\frac{MS_{\text{part}}}{MS_{\text{error}}}\\
SS_{\text{part}}=SS_{\text{error},R}-SS_{\text{error},F}\\
\nu_{\text{part}}=k_F-k_R\\
\nu_{\text{error}}=n-k_F-1\\
\nu_{\text{total}}=n-1\\
MS_{\text{part}}=\frac{SS_{\text{part}}}{\nu_{\text{part}}}\\
MS_{\text{error}}=\frac{SS_{\text{error},F}}{\nu_{\text{error}}}
\end{lgathered}
$$

---
### partial linear regression ANOVA null hypothesis
- all full coefficients equal zero

---
### partial linear regression ANOVA null hypothesis formula
$$
\begin{lgathered}
J=J_F\setminus J_R\implies H_{0}:\forall j\in J:\beta_{j}=0\\
\beta=\text{coefficient}\\
\end{lgathered}
$$

---
### partial linear regression ANOVA alternative hypothesis
- there exists nonzero full coefficient

---
### partial linear regression ANOVA alternative hypothesis formula
$$
\begin{lgathered}
H_{1}:\exists j\in\set{1,\dots,k}:\beta_{j}\ne0\\
\beta=\text{coeficient}\\
k=\text{number of full independent variables}
\end{lgathered}
$$

---
