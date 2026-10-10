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
\langle R_i\rangle\implies c\langle R_i\rangle\\
R=\text{row}\\
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
\langle R_i\rangle\implies\langle R_i\rangle-c\langle R_j\rangle\\
R=\text{row}\\
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
\langle R_i\rangle\iff\langle R_j\rangle\\
R=\text{row}\\
i,j=\text{row index}
\end{lgathered}
$$

---
### row echelon form
- staircase pattern of pivot entries where all entries below pivot entry equal zero

---
### row echelon form formula
$$
\begin{lgathered}
\begin{bmatrix}
a_{11}&a_{12}&a_{13}&\cdots&a_{1n}\\
0&a_{22}&a_{23}&\cdots&a_{2n}\\
0&0&a_{33}&\cdots&a_{3n}\\
\vdots&\vdots&\vdots&\ddots&\vdots\\
0&0&0&\cdots&a_{\text{mn}}
\end{bmatrix}
\end{lgathered}
$$

---
### naive gaussian elimination
- form the augmented matrix of the system
- perform type I row operation on the 1st entry of 1st row such that its 1
- perform type II row operation on all entries below the pivot entry such that its 0
- if zero pivot entry then naive gaussian elimination fail
- final form of the system equal row echelon form
- back substitute for the particular solution of system of linear equations

---
### naive gaussian elimination formula
$$
\begin{lgathered}
A\vec x=\vec b\implies U\vec x=\vec c\\
A=\text{coefficient matrix}\\
\vec x=\text{real vector}\\
U=\text{upper triangular matrix}\\
\vec b,\vec c=\text{constant vector}
\end{lgathered}
$$

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
- put multiplier into lower triangular matrix
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
\langle R_i\rangle\implies\langle R_i\rangle-m_{\text{ij}}\langle R_j\rangle\\
L=I_n\implies L=\begin{bmatrix}
1&0&0&\cdots&0\\
m_{21}&1&0&\cdots&0\\
m_{31}&m_{32}&1&\cdots&0\\
m_{41}&m_{42}&m_{43}&\ddots&\vdots\\
\vdots&\vdots&\vdots&\ddots&0\\
m_{n1}&m_{n2}&m_{n3}&\cdots&1
\end{bmatrix}\\
U=A\implies U=\begin{bmatrix}
u_{11}&u_{12}&u_{13}&\cdots&u_{1n}\\
0&u_{22}&u_{23}&\cdots&u_{2n}\\
0&0&u_{33}&\cdots&u_{3n}\\
0&0&0&\ddots&\vdots\\
\vdots&\vdots&\vdots&\ddots&u_{n-1,n}\\
0&0&0&\cdots&u_{\text{nn}}
\end{bmatrix}\\
A=LU\\
L\vec y=\vec b\implies y_i=\frac{b_i-\sum_{j=1}^{i-1}m_{\text{ij}}y_j}{m_{\text{jj}}}\\
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
### norm
- measure of the magnitude of object

---
### norm formula
$$
\begin{lgathered}
\|v\|\ge0\\
\|v\|=0\iff v=0\\
c\in\mathbb R\implies\|cv\|=(|c|)(\|v\|)\\
\|v_{1}+v_{2}\|\le\|v_{1}\|+\|v_{2}\|
\end{lgathered}
$$

---
### vector norm
- measure of the magnitude of vector

---
### vector norm formula
$$
\begin{lgathered}
\|\vec x\|_p=\left(\sum_{i=1}^n|x_i|^p\right)^{1/p}\\
\|\vec x\|_\infty=\max_{1\le i\le n}|x_i|\\
\vec x=\text{real vector}
\end{lgathered}
$$

---
### matrix norm
- measure of the magnitude of matrix

---
### matrix norm formula
$$
\begin{lgathered}
\|A\|_1=\max_{1\le j\le n}\sum_{i=1}^n|a_{\text{ij}}|\\
\|A\|_\infty=\max_{1\le i\le n}\sum_{j=1}^n|a_{\text{ij}}|\\
A=\text{coefficient matrix}\\
i=\text{row index}\\
j=\text{column index}\\
a=\text{entry}
\end{lgathered}
$$

---
### operator norm
- maximum scaling factor of linear transformation

---
### operator norm formula
$$
\begin{lgathered}
\|A\|=\max_{x\ne0}\frac{\|A\vec x\|}{\|\vec x\|}\implies\|A\vec x\|\le(\|A\|)(\|\vec x\|)\\
A=\text{coefficient matrix}\\
\vec x=\text{real vector}
\end{lgathered}
$$

---
### forward error
- absolute distance between real vector and computed vector

---
### forward error formula
$$
\begin{lgathered}
e_f=\|\vec x-\vec x_c\|_\infty\\
\vec x=\text{real vector}\\
\vec x_c=\text{computed vector}\\
\end{lgathered}
$$

---
### backward error
- absolute distance between real solution and computed solution

---
### backward error formula
$$
\begin{lgathered}
e_b=\|\vec b-A\vec x_c\|_\infty\\
\vec b=\text{constant vector}\\
A=\text{coefficient matrix}\\
\vec x_c=\text{computed vector}
\end{lgathered}
$$

---
### relative error
- relative distance between real vector and computed vector
- relative distance between real solution and computed solution

---
### relative error formula
$$
\begin{lgathered}
e_f'=\frac{\|\vec x-\vec x_c\|_\infty}{\|\vec x\|_\infty}\\
e_b'=\frac{\|\vec b-A\vec x_c\|_\infty}{\|\vec b\|_\infty}\\
\vec x_c=\text{computed vector}\\
\vec x=\text{real vector}\\
\vec b=\text{constant vector}\\
A=\text{coefficient matrix}
\end{lgathered}
$$

---
### error magnification factor
- ratio between relative solution error and relative input error

---
### error magnification factor formula
$$
\begin{lgathered}
M=\frac{e_f'}{e_b'}=\frac{(\|\vec b-A\vec x_c\|_\infty)(\|\vec x\|_\infty)}{(\|\vec x-\vec x_c\|_\infty)(\|\vec b\|_\infty)}\\
e_f'=\text{relative forward error}\\
e_b'=\text{relative backward error}\\
\vec b=\text{constant vector}\\
A=\text{coefficient matrix}\\
\vec x_c=\text{computed vector}\\
\vec x=\text{real vector}
\end{lgathered}
$$

---
### condition number
- maximum possible error magnification factor

---
### condition number formula
$$
\begin{lgathered}
M=\frac{e_f'}{e_b'}\le\text{cond}(A)=(\|A\|)(\|A^{-1}\|)\\
M=\text{error magnification factor}\\
e_f'=\text{relative forward error}\\
e_b'=\text{relative backward error}\\
A=\text{coefficient matrix}
\end{lgathered}
$$

---
### well-conditioned
- small input error produce comparably small solution error

---
### well-conditioned formula
$$
\begin{lgathered}
\text{cond}(A)\approx1\\
A=\text{coefficient matrix}
\end{lgathered}
$$

---
### ill-conditioned
- small input error can produce large solution error

---
### ill-conditioned formula
$$
\begin{lgathered}
\text{cond}(A)\gg1\\
A=\text{coefficient matrix}
\end{lgathered}
$$

---
### swamping
- if exponentially large multiplier then small number subtraction with exponentially large number lose the numerical information of small number

---
### swamping formula
$$
\begin{lgathered}
\exists i,k>j:|a_{\text{ik}}|\lesssim\frac{1}{2}\epsilon_{\text{mach}}|m_{\text{ij}}a_{\text{jk}}|\implies a_{\text{ik}}-m_{\text{ij}}a_{\text{jk}}\approx-m_{\text{ij}}a_{\text{jk}}\\
i=\text{row index}\\
k=\text{pivot index}\\
j=\text{column index}\\
a=\text{entry}\\
\epsilon_{\text{mach}}=\text{machine epsilon}\\
m=\text{multiplier}
\end{lgathered}
$$

---
### partial pivoting
- type III row operation with maximum entry along column

---
### partial pivoting formula
$$
\begin{lgathered}
p=\arg\max_{i\ge k}|a_{\text{ik}}|\\
\langle R_k\rangle\iff\langle R_p\rangle\\
\forall i>k:|m_{\text{ik}}|\le1\\
p=\text{max index}\\
i=\text{row index}\\
k=\text{pivot index}\\
R=\text{row}
\end{lgathered}
$$

---
### permutation matrix
- type III row operation(s) with identity matrix

---
### permutation matrix formula
$$
\begin{lgathered}
P=\begin{bmatrix}p_{\text{ij}}\end{bmatrix}\in\mathbb R^{n\times n}\\
\forall i,j:p_{\text{ij}}\in\set{0,1}\\
\forall i:\sum_{j=1}^np_{\text{ij}}=1\\
\forall j:\sum_{i=1}^np_{\text{ij}}=1\\
\end{lgathered}
$$

---
### permutation matrix property
- permutation matrix multiplication with coefficient matrix equal type III row operation(s)

---
### permutation matrix property formula
$$
\begin{lgathered}
P^T=P^{-1}\\
PP^T=P^TP=I\\
P=P_rP_{r-1}\dots P_2P_1\\
\det(PA)=(-1)^r\det(A)
\end{lgathered}
$$

---
### PA=LU factorization
- perform gaussian elimination with partial pivoting
- put multiplier into lower triangular matrix
- put swap into permutation matrix
- swap both permutation matrix and multiplier of lower triangular matrix
- put eliminated matrix into upper triangular matrix
- setup matrix equation
- solve first system of equations with forward substitution
- solve second system of equations with back substitution

---
### PA=LU factorization formula
$$
\begin{lgathered}
A\vec x=\vec b\\
m_{\text{ij}}=\frac{a_{\text{ij}}}{a_{\text{jj}}}\\
\langle R_i\rangle\implies\langle R_i\rangle-m_{\text{ij}}\langle R_j\rangle\\
p=\arg\max_{i\ge k}|a_{\text{ik}}|\\
\langle R_k\rangle\iff\langle R_p\rangle\\
L=I_n\implies L=\begin{bmatrix}
1&0&0&\cdots&0\\
m_{21}&1&0&\cdots&0\\
m_{31}&m_{32}&1&\cdots&0\\
m_{41}&m_{42}&m_{43}&\ddots&\vdots\\
\vdots&\vdots&\vdots&\ddots&0\\
m_{n1}&m_{n2}&m_{n3}&\cdots&1
\end{bmatrix}\\
U=A\implies U=\begin{bmatrix}
u_{11}&u_{12}&u_{13}&\cdots&u_{1n}\\
0&u_{22}&u_{23}&\cdots&u_{2n}\\
0&0&u_{33}&\cdots&u_{3n}\\
0&0&0&\ddots&\vdots\\
\vdots&\vdots&\vdots&\ddots&u_{n-1,n}\\
0&0&0&\cdots&u_{\text{nn}}
\end{bmatrix}\\
PA=LU\\
L\vec y=P\vec b\implies y_i=\frac{\sum_{j=1}^{n}p_{\text{ij}}b_i-\sum_{j=1}^{i-1}m_{\text{ij}}y_j}{m_{\text{jj}}}\\
U\vec x=\vec y\impliedby x_i=\frac{y_i-\sum_{j=i+1}^nu_{\text{ij}}x_j}{u_{\text{jj}}}\\
\end{lgathered}
$$

---
