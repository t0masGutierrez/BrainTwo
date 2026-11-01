---


---
### polynomial evaluation
- compute output of polynomial at particular input

---
### polynomial evaluation formula
$$
\begin{lgathered}
p(x)=\sum_{k=0}^{n-1}c_kx^k\\
c=\text{coefficient}\\
x=\text{variable}
\end{lgathered}
$$

---
### polynomial interpolation
- construct polynomial at known set of points
- aka reverse polynomial evaluation

---
### polynomial interpolation formula
$$
\begin{lgathered}
\forall x\le x_n:p(x_i)=y_i\\
n=\text{number of nodes}
\end{lgathered}
$$

---
### polynomial extrapolation
- construct polynomial at unknown set of points

---
### polynomial extrapolation formula
$$
\begin{lgathered}
\forall x>x_n:p(x_i)=y_i\\
n=\text{number of nodes}
\end{lgathered}
$$

---
### existence and uniqueness
- for every known set of distinct points there exists unique polynomial that interpolates all points

---
### existence and uniqueness formula
$$
\begin{lgathered}
\deg(p)\le n-1\\
\forall i\ne j:x_i\ne x_j\\
n=\text{number of nodes}
\end{lgathered}
$$

---
### lagrange interpolation
- construct polynomial without solving system of equations

---
### lagrange interpolation formula
$$
\begin{lgathered}
\set{(x_i,y_i)}_{i=0}^{n-1}\\
L_i(x)=\prod_{j=0\\j\ne i}^{n-1}\frac{x-x_j}{x_i-x_j}\\
p(x)=\sum_{i=0}^{n-1}y_iL_i(x)
\end{lgathered}
$$

---
### newtons divided differences
- recursively calculate the coefficients of newtons polynomial

---
### newtons divided differences formula
$$
\begin{lgathered}
\set{(x_i,y_i)}_{i=0}^{n-1}\\
f[x_i]=y_i\\
f[x_i,x_{i+1}]=\frac{f[x_{i+1}]-f[x_i]}{x_{i+1}-x_i}\\
f[x_i,x_{i+1},x_{i+2}]=\frac{f[x_{i+1},x_{i+2}]-f[x_i,x_{i+1}]}{x_{i+2}-x_i}\\
f[x_i,\dots,x_{i+k}]=\frac{f[x_{i+1},\dots,x_{i+k}]-f[x_i,\dots,x_{i+k-1}]}{x_{i+k}-x_i}\\
\#f[x_i,\dots,x_{i+k}]=n-k\\
\begin{array}{c|ccccc}
x_i&\text{Order }0&\text{Order }1&\text{Order }2&\cdots&\text{Order }n-1\\\hline
x_0&{f[x_0]=c_0}&{f[x_0,x_1]=c_1}&{f[x_0,x_1,x_2]=c_2}&\cdots&{f[x_0,\ldots,x_{n-1}]=c_{n-1}}\\
x_1&f[x_1]&f[x_1,x_2]&f[x_1,x_2,x_3]&\ &\\
x_2&f[x_2]&f[x_2,x_3]&f[x_2,x_3,x_4]&&\\
\vdots&\vdots&\vdots&\vdots&&\\
x_{n-2}&f[x_{n-2}]&f[x_{n-2},x_{n-1}]&&&\\
x_{n-1}&f[x_{n-1}]&&&&
\end{array}\\
c_k=f[x_0,\dots,x_k]\\
p_{n-1}(x)=c_0+\sum_{k=1}^{n-1}c_k\prod_{j=0}^{k-1}(x-x_j)\\
p_{n-1}(x)=c_0+(x-x_0)[c_1+(x-x_1)[c_2+\dots+(x-x_{n-2})c_{n-1}]]\\
p_n(x)=p_{n-1}(x)+c_{n}\prod_{j=0}^{n-1}(x-x_j)
\end{lgathered}
$$

---
### number of interpolating polynomials
- number of same degree polynomials interpolating the same points equal 1
- number of unrestricted degree polynomials interpolating the same points equal infinity

---
### number of interpolating polynomials formula
$$
\begin{lgathered}
\deg(p_*)=m\le n-1\\
\#p_d=\begin{cases}
0,&d<m\\
1,&d=m\\
0,&m<d<n\\
\infty,&d\ge n
\end{cases}\\
p(x)=p_*(x)+q(x)\prod_{i=0}^{n-1}(x-x_i)\\
\end{lgathered}
$$

---
### interpolation error
- distance between function and interpolating polynomial equal zero at node

---
### interpolation error formula
$$
\begin{lgathered}
e(x)=f(x)-p_{n-1}(x)\implies e(x_i)=0
\end{lgathered}
$$

---
### interpolation error boundary
- upper boundary of interpolation error

---
### interpolation error boundary formula
$$
\begin{lgathered}
|e(x)|\le\frac{M}{n!}|\prod_{i=0}^{n-1}(x-x_i)|\\
M=\max\limits_{t\in[a,b]}|f^{(n)}(t)|
\end{lgathered}
$$

---
### runge phenomenon
- phenomenon where increasing the degree of interpolating polynomial with equally spaced nodes generate increasingly large oscillations near the interval endpoints

---
### runge phenomenon formula
$$
\begin{lgathered}
\lim_{n\rightarrow\infty}\max\limits_{x\in[a,b]}|e(x)|\ne0\\
\forall i\in\set{0,\dots,n-1}:x_i=a+\frac{b-a}{n-1}i
\end{lgathered}
$$

---
### chebyshev node
- optimally distributed points that minimize the maximum absolute value of the polynomial whose roots are the nodes

---
### chebyshev node formula
$$
\begin{lgathered}
\forall t\in[-1,1]:x=\frac{a+b}{2}+\frac{b-a}{2}t\\
\forall x\in[a,b]:t=\frac{2x-(a+b)}{b-a}\\
\forall x\in[-1,1],\forall i\in\set{0,\dots,n-1}:x_i=\cos\frac{(2i-1)\pi}{2n}\\
\forall x\in[a,b],\forall i\in\set{0,\dots,n-1}:x_i=\frac{a+b}{2}+\frac{b-a}{2}\cos\frac{(2i+1)\pi}{2n}
\end{lgathered}
$$

---
### chebyshev interpolation error boundary
- upper boundary of chebyshev interpolation error

---
### chebyshev interpolation error boundary formula
$$
\begin{lgathered}
|e(x)|\le\frac{(b-a)^nM}{2^{2n-1}n!}\\
M=\max\limits_{t\in[a,b]}|f^{(n)}(t)|
\end{lgathered}
$$

---
### chebyshev interpolation polynomial
- interpolating polynomial with chebyshev nodes

---
### chebyshev interpolation polynomial formula
$$
\begin{lgathered}
\forall x\in[-1,1]:T_n(x)=\cos(n\arccos x)\\
T_0(x)=1\\
T_1(x)=x\\
T_{n+1}(x)=2xT_n(x)-T_{n-1}(x)\\
\end{lgathered}
$$

---
### cubic spline
- piecewise polynomial function of maximum degree three whose first two derivatives are continuous

---
### cubic spline formula
$$
\begin{lgathered}
\forall x\in[x_i,x_{i+1}]:S_i(x)=a_i+b_i(x-x_i)+c_i(x-x_i)^2+d_i(x-x_i)^3\\
S_i'(x)=b_i+2c_i(x-x_i)+3d_i(x-x_i)^2\\
S_i''(x)=2c_i+6d_i(x-x_i)
\end{lgathered}
$$

---
### cubic spline continuity
- the function and its first two derivatives are continuous

---
### cubic spline continuity formula
$$
\begin{lgathered}
S_{i-1}(x_i)=S_i(x_i)\\
S_{i-1}'(x_i)=S_i'(x_i)\\
S_{i-1}''(x_i)=S_i''(x_i)\\
\end{lgathered}
$$

---
### cubic spline slope
- change of dependent variable per unit of independent variable

---
### cubic spline slope formula
$$
\begin{lgathered}
h_i=x_{i+1}-x_i\\
m_i=\frac{y_{i+1}-y_i}{h_i}
\end{lgathered}
$$

---
### cubic spline coefficient
- polynomial coefficient along interval

---
### cubic spline coefficient formula
$$
\begin{lgathered}
a_i=y_i\\
b_i=m_i-\frac{h_i}{3}(2c_i+c_{i+1})\\
d_i=\frac{c_{i+1}-c_i}{3h_i}
\end{lgathered}
$$

---
### tridiagonal system
- each equation involves three consecutive unknowns

---
### tridiagonal system formula
$$
\begin{lgathered}
\forall i\in\set{2,\dots,n-1}:h_{i-1}c_{i-1}+2(h_{i-1}+h_i)c_i+h_ic_{i+1}=3(m_i-m_{i-1})\\
\#\set{2,\dots,n-1}=n-2\\
\#c=n
\end{lgathered}
$$

---
### endpoint condition
- find the remaining two quadratic coefficients

---
### endpoint condition formula
$$
\begin{lgathered}
c_1=?\\
c_n=?
\end{lgathered}
$$

---
### natural endpoint condition
- if endpoint slopes and curvatures are unknown and zero endpoint second derivatives are acceptable then natural endpoint condition

---
### natural endpoint condition formula
$$
\begin{lgathered}
c_1=0\\
c_n=0
\end{lgathered}
$$

---
### curvature-adjusted endpoint condition
- if endpoint second derivatives are known then curvature-adjusted endpoint condition

---
### curvature-adjusted endpoint condition formula
$$
\begin{lgathered}
2c_1=S_1''(x_1)\\
2c_n=S_n''(x_n)
\end{lgathered}
$$

---
### clamped endpoint condition
- if endpoint slopes are known then clamped endpoint condition

---
### clamped endpoint condition formula
$$
\begin{lgathered}
2h_1c_1+h_1c_2=3[m_1-S_1'(x_1)]\\
h_{n-1}c_{n-1}+2h_{n-1}c_n=3[S_n'(x_n)-m_{n-1}]
\end{lgathered}
$$

---
### parabolically terminated endpoint condition
- if quadratic behavior desired near both endpoints then parabolically terminated endpoint condition

---
### parabolically terminated endpoint condition formula
$$
\begin{lgathered}
c_1=c_2\\
c_n=c_{n-1}
\end{lgathered}
$$

---
### not-a-knot endpoint condition
- if no endpoint derivatives are specified and smooth interpolant desired then not-a-knot endpoint condition

---
### not-a-knot endpoint condition formula
$$
\begin{lgathered}
d_2=d_1\iff h_2c_1-(h_1+h_2)c_2+h_1c_3=0\\
d_{n-1}=d_{n-2}\iff h_{n-1}c_{n-2}-(h_{n-2}+h_{n-1})c_{n-1}+h_{n-2}c_n=0
\end{lgathered}
$$

---
### cubic spline existence and uniqueness
- if minimum number of data points with distinct input coordinates then exactly one cubic spline interpolates the data
- the endpoint conditions uniquely determine the coefficients

---
### cubic spline existence and uniqueness formula
$$
\begin{lgathered}
\begin{cases}
c_1=0\\
c_n=0
\end{cases}&\iff n\ge2\\
\begin{cases}
2c_1=S_1''(x_1)\\
2c_n=S_n''(x_n)
\end{cases}&\iff n\ge2\\
\begin{cases}
2h_1c_1+h_1c_2=3[m_1-S_1'(x_1)]\\
h_{n-1}c_{n-1}+2h_{n-1}c_n=3[S_n'(x_n)-m_{n-1}]
\end{cases}&\iff n\ge2\\
\begin{cases}
c_1=c_2\\
c_n=c_{n-1}
\end{cases}&\iff n\ge3\\
\begin{cases}
d_2=d_1\\
d_{n-1}=d_{n-2}
\end{cases}&\iff n\ge4\\
\end{lgathered}
$$

---
### cubic spline diagonal dominance
- if tridiagonal system diagonally dominant then there exists unique solution of tridiagonal system

---
### cubic spline diagonal dominance formula
$$
\begin{lgathered}
\forall i:|A_{\text{ii}}|>\sum_{j\ne i}|A_{\text{ij}}|\implies\det(A)\ne0\implies\exists!c:Ac=b
\end{lgathered}
$$

---
