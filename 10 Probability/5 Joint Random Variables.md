### joint random variable
- function of sample space outcome equal real vector

---
### joint random variable formula
$$
\begin{lgathered}
(X,Y):\Omega\rightarrow\mathbb R^{2}\\
X(\omega),Y(\omega)=(x,y)\\
X,Y=\text{random variable}\\
\Omega=\text{sample space}\\
x,y=\text{real number}\\
\omega=\text{outcome}
\end{lgathered}
$$

---
### joint cumulative distribution function
- cumulative probability as function of joint random variable

---
### joint cumulative distribution function formula
$$
\begin{lgathered}
F_{X,Y}(x,y)=P(X\le x,Y\le y)\\
1-F_{X}(x)-F_{Y}(y)+F_{X,Y}(x,y)=P(X>x,Y>y)\\
F_{X}(x)-F_{X,Y}=P(X\le x,Y>y)\\
F_{Y}(x)-F_{X,Y}=P(X>x,Y\le y)\\
\end{lgathered}
$$

---
### joint probability mass function
- probability as function of joint discrete random variable

---
### joint probability mass function formula
$$
\begin{lgathered}
P(a\le X\le b,c\le Y\le d)=\sum_{c\le y_{j}\le d}\sum_{a\le x_{i}\le b}P(X=x_{i},Y=y_{j})\\
P(X\le x,Y\le y)=\sum_{y_{j}\le y}\sum_{x_{i}\le x}P(X=x_{i},Y=y_{j})\\
P(X,Y)=\sum_{j}\sum_{i}P(X=x_{i},Y=y_{j})=1\\
P(X=x,Y=y)=P(X\le x,Y\le y)-\\
P(X\le x-1,Y\le y)-\\
P(X\le x,Y\le y-1)+\\
P(X\le x-1,Y\le y-1)
\end{lgathered}
$$

---
### joint probability density function
- probability as function of joint continuous random variable

---
### joint probability density function formula
$$
\begin{lgathered}
P(X=x,Y=y)=0\\
P(X,Y)=\int_{-\infty}^\infty\int_{-\infty}^\infty f_{X,Y}(x,y)dxdy=1\\
P(X\le a,Y\le b)=\int_{-\infty}^{b}\int_{-\infty}^{a}f_{X,Y}(x,y)dxdy=F_{X,Y}(a,b)\\
P(a\le X\le b,c\le Y\le d)=\int_c^d\int_a^bf_{X,Y}(x,y)dxdy
=F_{X,Y}(b,d)-\\
F_{X,Y}(a,d)-\\
F_{X,Y}(b,c)+\\
F_{X,Y}(a,c)
\end{lgathered}
$$

---
### marginal probability mass function
- probability as function of single discrete random variable

---
### marginal probability mass function formula
$$
\begin{lgathered}
P(X=x)=\sum_{y}P(X=x,Y=y)\\
P(Y=y)=\sum_{x}P(X=x,Y=y)\\
X,Y=\text{random variable}\\
x,y=\text{real number}
\end{lgathered}
$$

---
### marginal probability density function
- probability as function of single continuous random variable

---
### marginal probability density function formula
$$
\begin{lgathered}
f_{X}(x)=\int_{-\infty}^{\infty}f_{X,Y}(x,y)dy\\
f_{Y}(y)=\int_{-\infty}^{\infty}f_{X,Y}(x,y)dx\\
X,Y=\text{random variable}\\
x,y=\text{real number}
\end{lgathered}
$$

---
### independent random variable
- 1st random variable cannot influence the outcome 2nd random variable

---
### independent random variable formula
$$
\begin{lgathered}
P(X=x\mid Y=y)=P(X=x)\\
P(Y=y\mid X=x)=P(Y=y)\\
X,Y=\text{random variable}\\
x,y=\text{real number}
\end{lgathered}
$$

---
### dependent random variable
- 1st random variable can influence the outcome 2nd random variable

---
### dependent random variable formula
$$
\begin{lgathered}
P(X=x,Y=y)\ne P(X=x)P(Y=y)\\
f_{X,Y}(x,y)\ne f_{X}(x)f_{Y}(y)\\
X,Y=\text{random variable}\\
x,y=\text{real number}
\end{lgathered}
$$

---
### conditional probability
- likelihood random variable X will occur given random variable Y already occur

---
### conditional probability formula
$$
\begin{lgathered}
P(X=x\mid Y=y)=\frac{P(X=x,Y=y)}{P(Y=y)}\\
f_{X\mid Y}(x\mid y)=\frac{f_{X,Y}(x,y)}{f_{Y}(y)}
\end{lgathered}
$$

---
### joint expectation
- mean of joint random variable

---
### joint expectation formula
$$
\begin{lgathered}
E[g(X,Y)]=\sum_{x}\sum_{y}g(x,y)P(X=x,Y=y)\\
E[g(X,Y)]=\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}g(x,y)f(x,y)dydx\\
X,Y=\text{random variable}\\
x,y=\text{real number}
\end{lgathered}
$$

---
### expectation multiplication property
- expectation of independent product equal product of expectation

---
### expectation addition property formula
$$
\begin{lgathered}
P(X\in A,Y\in B)=P(X\in A)P(Y\in B)\implies E[XY]=E[X]E[Y]\\
X,Y=\text{random variable}\\
\end{lgathered}
$$

---
### joint variance
- spread of joint random variable around mean

---
### joint variance formula
$$
\begin{lgathered}
\text{Var}(X,Y)=\begin{bmatrix}\text{Var}(X)&\text{Cov}(X,Y)\\
\text{Cov}(Y,X)&\text{Var}(Y)\end{bmatrix}\\
X,Y=\text{random variable}
\end{lgathered}
$$

---
### variance addition property
- spread of random variable equal sum of joint variance and covariance

---
### variance addition property formula
$$
\begin{lgathered}
\text{Var}(X+Y)=\text{Var}(X)+\text{Var}(Y)+2\text{Cov}(X,Y)\\
X,Y=\text{random variable}
\end{lgathered}
$$

---
### conditional expectation
- mean of joint conditional random variable

---
### conditional expectation formula
$$
\begin{lgathered}
E[X|Y=y]=\sum_{x}xP(X=x|Y=y)\\
E[X|Y=y]=\int_{-\infty}^{\infty}xf_{X|Y}(x,y)dx\\
X,Y=\text{random variable}
\end{lgathered}
$$

---
### conditional expectation property
- expectation equal expectation of conditional expectation

---
### conditional expectation property formula
$$
\begin{lgathered}
E[X]=E(E[X\mid Y])\\
X,Y=\text{random variable}
\end{lgathered}
$$

---
### covariance
- joint spread of two random variable around mean

---
### covariance formula
$$
\begin{lgathered}
\text{Cov}(X,Y)=E[(X-E[X])(Y-E[Y])]=E[XY]-E[X]E[Y]\\

\end{lgathered}
$$

---
### covariance property
- symmetry
- identity
- linearity
- independence

---
### covariance property formula
$$
\begin{lgathered}
\text{Cov}(X,Y)=\text{Cov}(Y,X)\\
\text{Cov}(X,X)=\text{Cov}(X)\\
\text{Cov}(aX+bY,Z+c)=a\text{Cov}(X,Z)+b\text{Cov}(Y,Z)\\
P(X\in A,Y\in B)=P(X\in A)P(Y\in B)\implies\text{Cov}(X,Y)=0
\end{lgathered}
$$

---
### iid
- independent and identically distributed

---
### iid formula
$$
\begin{lgathered}
\forall i,j\in(1,\dots,m):P(X_{i}\in A,X_{j}\in B)=P(X_{i}\in A)P(X_{j}\in B)\\
\forall i\in(1,\dots,m):X_{i}\sim N(\mu,\sigma^{2})\\
X,Y=\text{random variable}\\
m=\text{number of random variables}\\
N=\text{probability distribution}
\end{lgathered}
$$

---
### iid expectation
- mean of iid random variable

---
### iid expectation formula
$$
\begin{lgathered}
E[\sum_{i=1}^{n}X_{i}]=n\mu\\
X=\text{iid random variable}\\
n=\text{sample size}\\
\mu=\text{mean}\\
\end{lgathered}
$$

---
### iid variance
- spread of iid random variable around mean

---
### iid variance formula
$$
\begin{lgathered}
\text{Var}(\sum_{i=1}^{n}X_{i})=n\sigma^{2}\\
X=\text{iid random variable}\\
n=\text{sample size}\\
\sigma^{2}=\text{variance}\\
\end{lgathered}
$$

---
### indicator random variable
- function of sample space outcome equal binary number

---
### indicator random variable formula
$$
\begin{lgathered}
I=\begin{cases}1,\quad A\\0,\quad A^{c}\end{cases}\\
A=\text{event}
\end{lgathered}
$$

---
### indicator expectation
- mean of indicator random variable

---
### indicator expectation formula
$$
\begin{lgathered}
E[X]=E[\sum_{i=1}^{n}I_{i}]=\sum_{i=1}^{n}P(A_{i})\\
X,I=\text{random variable}\\
A=\text{event}
\end{lgathered}
$$

---
### indicator variance
- spread of indicator random variable around mean

---
### indicator variance formula
$$
\begin{lgathered}
\text{Var}(X)=\text{Var}(\sum_{i=1}^{n}I_{i})=\sum_{i=1}^{n}P(A_{i})Q(A_{i})\\
Q(A)=1-P(A)\\
X,I=\text{random variable}\\
A=\text{event}
\end{lgathered}
$$

---
### convolution
- probability as function of sum of independent random variable

---
### convolution formula
$$
\begin{lgathered}
P(X+Y=z)=\sum_{x}P(Y=z-x)P(X=x)\\
P(X+Y=z)=\sum_{y}P(X=z-y)P(Y=y)\\
f_{X+Y}(z)=\int_{-\infty}^{\infty}f_{Y}(z-x)f_{X}(x)dx\\
f_{X+Y}(z)=\int_{-\infty}^{\infty}f_{X}(z-y)f_{Y}(y)dy
\end{lgathered}
$$

---
