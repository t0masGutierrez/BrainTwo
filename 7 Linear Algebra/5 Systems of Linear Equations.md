### linear equation
- equation involving 1 or more variables with degree 1

---
### linear equation formula
$$
\begin{aligned}
\sum_{i=1}^n a_ix_{i} = b \\
a = \text{coefficient} \\
x = \text{variable} \\
b = \text{constant} 
\end{aligned}
$$

---
### system of linear equations
- collection of $m$ linear equations, each with linear combination of the same $n$ variables

---
### system of linear equations formula
$$
\begin{aligned}
\begin{array}{l}
a_{11}x_{1} + a_{12}x_{2} + \cdots + a_{1n}x_{n} = b_{1} \\
a_{21}x_{1} + a_{22}x_{2} + \cdots + a_{2n}x_{n} = b_{2} \\
\quad \vdots \quad \qquad \vdots \quad \qquad \ddots \qquad \vdots \qquad \vdots \\
a_{m1}x_{1} + a_{m2}x_{2} + \cdots + a_{mn}x_{n} = b_{m}
\end{array} \\
a = \text{coefficient} \\
x = \text{variable} \\
b = \text{constant} 
\end{aligned}
$$

---
### particular solution of system of linear equations
- $n$-tuple of solutions that satisfy every linear equation of the system

---
### particular solution of system of linear equations formula
$$
\begin{aligned}
y = (y_{1}, \dots, y_{n}) \iff \forall j \in \set{1, \dots, m}:\sum_{i=1}^n a_{ji}y_{i} = b_{j} \\
m = \text{number of linear equations} \\
n = \text{number of variables} \\
a = \text{coefficient} \\
y = \text{solution} \\
b = \text{constant}
\end{aligned}
$$

---
### complete solution of system of linear equations
- set of all $n$-tuple of solutions that satisfy every linear equation of the system

---
### complete solution of system of linear equations formula
$$
\begin{aligned}
Y = \{(y_{1}, \dots, y_{n}) \in \mathbb R^n \mid  \forall j \in \set{1, \dots, m}:\sum_{i=1}^n a_{ji}y_{i} = b_{j}\} \\
Y = \text{complete solution set} \\
m = \text{number of linear equations} \\
n = \text{number of variables} \\
a = \text{coefficient} \\
y = \text{solution} \\
b = \text{constant}
\end{aligned}
$$

---
### coefficient matrix
- two dimensional array of coefficients

---
### coefficient matrix formula
$$
\begin{aligned}
A = \begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn} \\
\end{bmatrix} \\
|A| = m \times n \\
a = \text{coefficient} \\
m = \text{number of rows} \\
n = \text{number of columns}
\end{aligned}
$$

---
### variable matrix 
- 1 dimensional array of variables

---
### variable matrix formula
$$
\begin{aligned}
X = \begin{bmatrix}
x_{1} \\
x_{2} \\
\vdots \\
x_{n}
\end{bmatrix} \\
|X| = n \times 1 \\
x = \text{variable}
\end{aligned}
$$

---
### constant matrix
- 1 dimensional array of constants

---
### constant matrix formula
$$
\begin{aligned}
B = \begin{bmatrix}
b_{1} \\
b_{2} \\
\vdots \\
b_{m}
\end{bmatrix} \\
|B| = m \times 1 \\
b = \text{constant}
\end{aligned}
$$

---
### system of linear equations
- collection of $m$ linear equations, each with linear combination of the same $n$ variables

---
### system of linear equations formula
$$
\begin{aligned}
AX = B \\
\begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn} \\
\end{bmatrix}  \begin{bmatrix}
x_{1} \\
x_{2} \\
\vdots \\
x_{n}
\end{bmatrix} = \begin{bmatrix}
b_{1} \\
b_{2} \\
\vdots \\
b_{m}
\end{bmatrix} \\
A = \text{coefficient matrix} \\
X = \text{variable matrix} \\
B = \text{constant matrix}
\end{aligned}
$$

---
### augmented matrix
- coefficient matrix with appended constant matrix

---
### augmented matrix formula
$$
\begin{aligned}
A \mid B = \left[\begin{array}{cccc|c}
a_{11} & a_{12} & \cdots & a_{1n} & b_{1} \\
a_{21} & a_{22} & \cdots & a_{2n} & b_{2} \\
\vdots & \vdots & \ddots & \vdots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn} & b_{m}
\end{array}\right]
\end{aligned}
$$

---
### simultaneous matrix
- combine augmented matrices with equal coefficient matrices but different constant matrices 

---
### simultaneous matrix formula
$$
\begin{aligned}
A \mid B \mid B' = \left[\begin{array}{cccc|c|c}
a_{11} & a_{12} & \cdots & a_{1n} & b_{1} & b_{1}' \\
a_{21} & a_{22} & \cdots & a_{2n} & b_{2} & b_{2}' \\
\vdots & \vdots & \ddots & \vdots & \vdots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn} & b_{m} & b_{m}'
\end{array}\right]
\end{aligned}
$$

---
### number of solutions
- single solution
- infinite solutions
- zero solutions

---
### single solution
- intersecting lines

---
### infinite solutions
- equal lines

---
### zero solutions
- parallel lines

---
### consistent system
- nonzero number of solutions

---
### inconsistent system
- zero number of solutions

---
### type I row operation
- row scaling

---
### type I row operation formula
$$
\begin{aligned}
\langle i\rangle \implies c\langle i\rangle  \\
i = \text{row index} \\
c = \text{scalar}
\end{aligned}
$$

---
### type II row operation
- row replacement

---
### type II row operation formula
$$
\begin{aligned}
\langle i\rangle \implies \langle i\rangle + c\langle j\rangle \\
i, j = \text{row index} \\
c = \text{scalar}
\end{aligned}
$$

---
### type III row operation
- row swapping

---
### type III row operation formula
$$
\begin{aligned}
\langle i \rangle \iff \langle j \rangle \\
i, j = \text{row index}
\end{aligned}
$$

---
### pivot entry
- special entry equal 1

---
### target entry
- special entry equal 0

---
### pivot column
- column with nonzero pivot entries

---
### nonpivot column
- column with zero pivot entries

---
### independent variable
- variable of nonpivot column equal arbitrary real number

---
### dependent variable
- variable of pivot column equal solution of system of linear equations

---
### row echelon form
- staircase pattern of pivot entries where all entries below pivot entry equal zero

---
### gaussian elimination
- form the augmented matrix of the system
- perform type I row operation on the 1st entry of 1st row such that its 1
- perform type II row operation on all entries below the pivot entry such that its 0
- if zero pivot entry then perform type III row operation with lower row, if all zeros below zero pivot entry then skip column
- final form of the system equal row echelon form
- back substitute for the particular solution of system of linear equations

---
### row operation property
- associative
- multiple associative

---
### row operation property formula
$$
\begin{aligned}
R(AB) = (R(A))B \\
R_{n}(\dots (R_{2}(R_{1}(AB))) \dots) = (R_{n}(\dots (R_{2}(R_{1}(A))) \dots))B \\
\end{aligned}
$$

---
