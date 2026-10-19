### polynomial evaluation
- compute output of polynomial at particular input

---
### polynomial evaluation formula
$$
\begin{lgathered}
p(x)=\sum_{k=0}^nc_kx^k\\
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
\forall i\le n:p(x_i)=y_i\\
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
\forall i>n:p(x_i)=y_i\\
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
L_i(x_j)=\begin{cases}
1,&i=j\\
0,&i\ne j
\end{cases}\\
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
x_0&\boxed{f[x_0]=c_0}&\boxed{f[x_0,x_1]=c_1}&\boxed{f[x_0,x_1,x_2]=c_2}&\cdots&\boxed{f[x_0,\ldots,x_{n-1}]=c_{n-1}}\\
x_1&f[x_1]&f[x_1,x_2]&f[x_1,x_2,x_3]&\ &\\
x_2&f[x_2]&f[x_2,x_3]&f[x_2,x_3,x_4]&&\\
\vdots&\vdots&\vdots&\vdots&&\\
x_{n-2}&f[x_{n-2}]&f[x_{n-2},x_{n-1}]&&&\\
x_{n-1}&f[x_{n-1}]&&&&
\end{array}\\
c_k=f[x_0,\dots,x_k]\\
p_{n-1}(x)=c_0+\sum_{k=1}^{n-1}c_k\prod_{j=0}^{k-1}(x-x_j)\\
c_{i-1}=f[x_1,\dots,x_i]\implies p_{n-1}(x)=c_0+(x-x_0)[c_1+(x-x_1)[c_2+\dots+(x-x_{n-2})c_{n-1}]]\\
p_n(x)=p_{n-1}(x)+c_{n}\prod_{j=0}^{n-1}(x-x_j)
\end{lgathered}
$$

---
### number of interpolated polynomials
- number of same degree polynomials interpolating the same points equal 1
- number of unrestricted degree polynomials interpolating the same points equal infinity

---
### number of interpolated polynomials formula
$$
\begin{lgathered}
\deg(p_*)=m\le n-1\\
\#p_d=\begin{cases}
0,&d<m\\
1,&d=m\\
0,&m<d<n\\
\infty,&d\ge n
\end{cases}\\
p(x)=p_*(x)+q(x)\prod_{i=1}^n(x-x_i)
\end{lgathered}
$$

---
### sinusoidal interpolation
- approximate sinusoidal function with polynomial interpolation

---
### sinusoidal interpolation formula
$$
\begin{lgathered}
\set{(x_i,y_i)}_{i=0}^{n-1}\\
\theta\in[0,\frac{\pi}{2}]\\
\forall i\in\set{1,\dots,n-1}:\theta_i=\frac{i\pi}{2(n-1)}\\
\sin\theta_i=y_i\\
c_k=f[\theta_0,\dots,\theta_k]\\
p_{n-1}(\theta)=c_0+\sum_{k=1}^{n-1}c_k\prod_{j=0}^{k-1}(\theta-\theta_j)\\
r=\theta\text{ mod }2\pi\\
\sin r=\begin{cases}
\sin r,&0\le r\le\pi/2\\
\sin(\pi-r),&\pi/2\le r\le\pi\\
-\sin(r-\pi),&\pi\le r\le3\pi/2\\
-\sin(2\pi-r),&3\pi/2\le r\le2\pi\\
\end{cases}
\end{lgathered}
$$

---
