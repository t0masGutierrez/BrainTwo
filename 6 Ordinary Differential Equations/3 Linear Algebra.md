### simultaneity property
- solution of nth-order ode equal solution of system of $n$ 1st-order odes

---
### simultaneity property formula
$$
\begin{aligned}
a _ { n } ( t ) \frac { d ^ { n } y } { d t ^ { n } } + a _ { n - 1 } ( t ) \frac { d ^ { n - 1 } y } { d t ^ { n - 1 } } + \dots + a _ { 0 } y = 0 \implies \begin{cases} \frac { d x _ { 1 } } { dt } = x _ { 2 } \\
\frac { d x _ { 2 } } { dt } = x _ { 3 } \\
\  \  \  \vdots \\
\frac { d x _ { n - 1 } } { dt } = x _ { n } \\
\frac { d x _ { n } } { dt } = - ( \frac { a _ { n - 1 } ( t ) x _ { n } + a _ { n - 2 } ( t ) x _ { n - 1 } + \dots + a _ { 0 } x _ { 1 } } { a _ { n } ( t ) } )
\end{cases} \\
x _ { 1 } ( t ) = y \\
x _ { 2 } ( t ) = \frac { dy } { dt } \\
\vdots \\
x _ { n } ( t ) = \frac { d ^ { n - 1 } y } { d t ^ { n - 1 } }
\end{aligned}
$$

---
### linear system ode
- matrix equal system of $n$ 1st-order homogeneous linear constant coefficient odes

---
### linear system ode formula
$$
\begin{aligned}
\frac { d \vec x } { dt } = A \vec x ( t ) \\
\vec x = \text {solution} \\
t = \text {independent variable} \\
A = \text {coefficient matrix}
\end{aligned}
$$

---
### general solution of linear system ode
- eigensolution of matrix equal solution of linear system ode

---
### general solution of linear system ode formula
$$
\begin{aligned}
\frac { d \vec x } { dt } = A \vec x \implies \vec x ( t ) = \exp ( \lambda t ) \vec v \\
\vec x = \text {solution} \\
t = \text {independent variable} \\
A = \text {coefficient matrix} \\
\lambda = \text {eigenvalue} \\
\vec v = \text {eigenvector}
\end{aligned}
$$

---
### characteristic equation
- root of characteristic equation equal eigenvalue of matrix

---
### characteristic equation formula
$$
\begin{aligned}
\det ( A - \lambda I ) = 0 \\
A = \text {coefficient matrix} \\
\lambda = \text {eigenvalue} \\
I = \text {identity matrix}
\end{aligned}
$$

---
### distinct eigenvalues
- distinct roots of characteristic equation

---
### distinct eigenvalues formula
$$
\begin{aligned}
\vec x ( t ) = \sum _ { i = 1 } ^ { n } C _ { i } e ^ { \lambda _ { i } t } \vec v _ { i } \\
\lambda = \text {eigenvalue} \\
t = \text {independent variable} \\
\vec v = \text {eigenvector}
\end{aligned}
$$

---
### complex eigenvalues
- complex roots of characteristic equation

---
### complex eigenvalues formula
$$
\begin{aligned}
\vec x ( t ) = C _ { 1 } e ^ { \alpha t } ( \vec p \cos \beta t - \vec q \sin \beta t ) + C _ { 2 } e ^ { \alpha t } ( \vec p \sin \beta t + \vec q \cos \beta t ) \\
\lambda = \alpha + \beta i \\
\vec v = \vec p + \vec q i \\
C = \text {constant} \\
\lambda = \text {eigenvalue} \\
\alpha , \vec p = \text {real part} \\
\beta , \vec q = \text {imaginary part} \\
t = \text {independent variable} \\
\vec v = \text {eigenvector}
\end{aligned}
$$

---
### defective matrix
- number of linearly independent eigenvectors lesser algebraic multiplicity of eigenvalue

---
### defective matrix formula
$$
\begin{aligned}
\dim \ker ( A - \lambda I ) < m \\
A = \text {coefficient matrix} \\
\lambda = \text {eigenvalue} \\
I = \text {identity matrix} \\
m = \text {algebraic multiplicity}
\end{aligned}
$$

---
### generalized eigenvector
- additional linearly independent eigenvector for defective matrix

---
### generalized eigenvector formula
$$
\begin{aligned}
( A - \lambda I ) \vec v _ { k } = \vec v _ { k - 1 } \\
A = \text {coefficient matrix} \\
\lambda = \text {eigenvalue} \\
I = \text {identity matrix} \\
k = \text {generalized rank} \\
\vec w = \text {generalized eigenvector} \\
\vec v = \text {eigenvector}
\end{aligned}
$$

---
### repeated eigenvalues
- repeated roots of characteristic equation

---
### repeated eigenvalues formula
$$
\begin{aligned}
\vec x ( t ) = e ^ { \lambda t } \sum _ { m = 1 } ^ { k } C _ { m } \sum _ { j = 1 } ^ { m } \frac { t ^ { m - j } } { ( m - j ) ! } \vec v _ { j } \\
\lambda = \text {eigenvalue} \\
t = \text {independent variable} \\
k = \text {number of generalized eigenvectors} \\
m = \text {generalized rank} \\
C = \text {constant} \\
\vec v = \text {generalized eigenvector}
\end{aligned}
$$

---
### fundamental matrix
- matrix whose columns form the fundamental set

---
### fundamental matrix formula
$$
\begin{aligned}
\Phi ( t ) = \begin{bmatrix} \vert & \vert & & \vert \\
\vec { x } _ { 1 } ( t ) & \vec { x } _ { 2 } ( t ) & \cdots & \vec { x } _ { n } ( t ) \\
\vert & \vert & & \vert \end{bmatrix} \\
\vec x = \text {solution} \\
t = \text {independent variable}
\end{aligned}
$$

---
### matrix exponential
- general solution of linear system ode

---
### matrix exponential formula
$$
\begin{aligned}
e ^ { At } = \sum _ { i = 0 } ^ { \infty } \frac { A ^ { i } t ^ { i } } { i ! } = \Phi ( t ) \Phi ^ { - 1 } ( 0 ) \implies \vec x ( t ) = e ^ { At } \vec x ( 0 ) \\
A = \text {coefficient matrix} \\
t = \text {independent variable} \\
\Phi = \text {fundamental matrix} \\
\vec x = \text {solution}
\end{aligned}
$$

---
