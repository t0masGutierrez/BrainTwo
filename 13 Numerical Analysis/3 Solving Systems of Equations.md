### linear equation
- equation involving 1 or more variables with degree 1

---
### linear equation formula
$$
\begin{lgathered}
\sum_{i=1}^{n}a_{i}x_{i}=b\\
a=\text{coefficient}\\
x=\text{variable}\\
b=\text{constant}
\end{lgathered}
$$

---
### system of linear equations
- collection of $m$ linear equations, each with linear combination of the same $n$ variables

---
### system of linear equations formula
$$
\begin{lgathered}
\begin{array}{l}
a_{11}x_{1}+a_{12}x_{2}+\cdots+a_{1n}x_{n}=b_{1}\\
a_{21}x_{1}+a_{22}x_{2}+\cdots+a_{2n}x_{n}=b_{2}\\
\quad\vdots\quad\qquad\vdots\quad\qquad\ddots\qquad\vdots\qquad\vdots\\
a_{m1}x_{1}+a_{m2}x_{2}+\cdots+a_{\text{mn}}x_{n}=b_{m}
\end{array}\\
a=\text{coefficient}\\
x=\text{variable}\\
b=\text{constant}
\end{lgathered}
$$

---
### system of linear equations
- collection of $m$ linear equations, each with linear combination of the same $n$ variables

---
### system of linear equations formula
$$
\begin{lgathered}
AX=B\\
\begin{bmatrix}
a_{11}&a_{12}&\cdots&a_{1n}\\
a_{21}&a_{22}&\cdots&a_{2n}\\
\vdots&\vdots&\ddots&\vdots\\
a_{m1}&a_{m2}&\cdots&a_{\text{mn}}\\
\end{bmatrix}\begin{bmatrix}
x_{1}\\
x_{2}\\
\vdots\\
x_{n}
\end{bmatrix}=\begin{bmatrix}
b_{1}\\
b_{2}\\
\vdots\\
b_{m}
\end{bmatrix}\\
A=\text{coefficient matrix}\\
X=\text{variable matrix}\\
B=\text{constant matrix}
\end{lgathered}
$$

---
### augmented matrix
- coefficient matrix with appended constant matrix

---
### augmented matrix formula
$$
\begin{lgathered}
A\mid B=\left[\begin{array}{cccc|c}
a_{11}&a_{12}&\cdots&a_{1n}&b_{1}\\
a_{21}&a_{22}&\cdots&a_{2n}&b_{2}\\
\vdots&\vdots&\ddots&\vdots&\vdots\\
a_{m1}&a_{m2}&\cdots&a_{\text{mn}}&b_{m}
\end{array}\right]
\end{lgathered}
$$

---
### type I row operation
- row scaling

---
### type I row operation formula
$$
\begin{lgathered}
\langle i\rangle\implies c\langle i\rangle\\
i=\text{row index}\\
c=\text{scalar}
\end{lgathered}
$$

---
### type II row operation
- row replacement

---
### type II row operation formula
$$
\begin{lgathered}
\langle i\rangle\implies\langle i\rangle-c\langle j\rangle\\
i,j=\text{row index}\\
c=\text{scalar}
\end{lgathered}
$$

---
### type III row operation
- row swapping

---
### type III row operation formula
$$
\begin{lgathered}
\langle i\rangle\iff\langle j\rangle\\
i,j=\text{row index}
\end{lgathered}
$$

---
### row echelon form
- staircase pattern of pivot entries where all entries below pivot entry equal zero

---
### naive gaussian elimination
- form the augmented matrix of the system
- perform type I row operation on the 1st entry of 1st row such that its 1
- perform type II row operation on all entries below the pivot entry such that its 0
- if zero pivot entry then naive gaussian elimination fail
- final form of the system equal row echelon form
- back substitute for the particular solution of system of linear equations

---
### naive gaussian elimination complexity
- number of naive gaussian elimination operations

---
### naive gaussian elimination complexity formula
$$
\begin{lgathered}
T_{\text{elim}}(n)=\frac{2}{3}n^3+\frac{1}{2}n^2-\frac{7}{6}n\approx\frac{2}{3}n^3\\
T_{\text{back}}(n)=n^2\\
T(n)=k(\frac{2}{3}n^3+n^2)\approx\frac{2}{3}kn^3\\
t=\frac{T(n)}{\lambda}
\end{lgathered}
$$

---
### LU factorization
- perform naive gaussian elimination
- put multipliers into lower triangular matrix
- put eliminated matrix into upper triangular matrix
- setup matrix equation
- solve first system of equations with forward substitution
- solve second system of equations with back substitution

---
### LU factorization formula
$$
\begin{lgathered}
A\vec x=\vec b\\
m_{\text{ij}}=\frac{a_{\text{ij}}}{a_{\text{jj}}}\\
R_i=R_i-m_{\text{ij}}R_j\\
L=\begin{bmatrix}
1&0&0&\cdots&0\\
m_{21}&1&0&\cdots&0\\
m_{31}&m_{32}&1&\cdots&0\\
m_{41}&m_{42}&m_{43}&\ddots&\vdots\\
\vdots&\vdots&\vdots&\ddots&0\\
m_{n1}&m_{n2}&m_{n3}&\cdots&1
\end{bmatrix}\\
U=\begin{bmatrix}
u_{11}&u_{12}&u_{13}&\cdots&u_{1n}\\
0&u_{22}&u_{23}&\cdots&u_{2n}\\
0&0&u_{33}&\cdots&u_{3n}\\
0&0&0&\ddots&\vdots\\
\vdots&\vdots&\vdots&\ddots&u_{n-1,n}\\
0&0&0&\cdots&u_{\text{nn}}
\end{bmatrix}\\
LU=A\\
L\vec y=\vec b\implies y_i=\frac{b_i-\sum_{j=1}^{i-1}l_{\text{ij}}y_j}{l_{\text{jj}}}\\
U\vec x=\vec y\impliedby x_i=\frac{y_i-\sum_{j=i+1}^nu_{\text{ij}}x_j}{u_{\text{jj}}}\\
\end{lgathered}
$$

---
### LU factorization complexity
- number of LU factorization operations

---
### LU factorization complexity formula
$$
\begin{lgathered}
T_{\text{elim}}(n)\approx\frac{2}{3}n^3\\
T_{\text{back}}(n)=n^2\\
T(n)=\frac{2}{3}n^3+kn^2\approx\frac{2}{3}n^3\\
t=\frac{T(n)}{\lambda}
\end{lgathered}
$$

---
