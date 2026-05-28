### matrix
- two dimensional array of entries created by arranging vectors into rows and columns

---
### matrix formula
$$
\begin{aligned}
A = \begin{bmatrix}
a_{11} & \dots  & a_{1n} \\
\vdots & \ddots & \vdots \\
a_{m1} & \dots  & a_{mn}
\end{bmatrix} \\
|A| = m \times n \\
a = \text{entry} \\
m = \text{number of rows} \\
n = \text{number of columns} 
\end{aligned}
$$

---
### square matrix 
- number of rows equal number of columns

---
### square matrix formula
$$
\begin{aligned}
A = \begin{bmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23}\\
a_{31} & a_{32} & a_{33} 
\end{bmatrix} \\
|A| = 3 \times 3 \\
a = \text{entry} 
\end{aligned}
$$

---
### main diagonal
- entries where the row index equal column index

---
### main diagonal formula
$$
\begin{aligned}
\text{diag}(A) = (a_{ii})_{i=1}^n \\
a = \text{entry} \\
i = \text{row index} \\
i = \text{column index} \\
n = \text{dimension}
\end{aligned}
$$

---
### diagonal matrix
- square matrix where all entries not along main diagonal equal zero

---
### diagonal matrix formula
$$
\begin{aligned}
D = \begin{bmatrix}
d_{11} & 0 & 0 \\
0 & d_{22} & 0 \\
0 & 0 & d_{33} 
\end{bmatrix} \iff \forall (i \ne j): d_{ij} = 0 \\
|D| = 3 \times 3 \\
d = \text{entry} \\
i = \text{row index} \\
j = \text{column index}
\end{aligned}
$$

---
### identity matrix
- diagonal matrix where all entries along main diagonal equal 1

---
### identity matrix formula
$$
\begin{aligned}
I = \begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 
\end{bmatrix} \iff \forall (i \ne j): (a_{ij} = 0) \land \forall (i = j): (a_{ij} = 1) \\
|I| = 3 \times 3 \\
i = \text{row index} \\
j = \text{column index}
\end{aligned}
$$

---
### upper triangular matrix
- diagonal matrix where all entries below main diagonal equal 0

---
### upper triangular matrix formula
$$
\begin{aligned}
U = \begin{bmatrix}
u_{11} & u_{12} & u_{13} \\
0 & u_{22} & u_{23} \\
0 & 0 & u_{33} 
\end{bmatrix} \iff \forall (i > j): u_{ij} = 0 \\
|U| = 3 \times 3 \\
u = \text{entry} \\
i = \text{row index} \\
j = \text{column index}
\end{aligned}
$$

---
### lower triangular matrix
- diagonal matrix where all entries above main diagonal equal 0

---
### lower triangular matrix formula
$$
\begin{aligned}
L = \begin{bmatrix}
l_{11} & 0 & 0 \\
l_{21} & l_{22} & 0 \\
l_{31} & l_{32} & l_{33} \\
\end{bmatrix} \iff \forall (i < j): l_{ij} = 0 \\
|L| = 3 \times 3 \\
l = \text{entry} \\
i = \text{row index} \\
j = \text{column index}
\end{aligned}
$$

---
### zero matrix
- all entries equal 0

---
### zero matrix formula
$$
\begin{aligned}
A = \begin{bmatrix}
0 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 0 
\end{bmatrix} \\
|A| = 3 \times 3 
\end{aligned}
$$

---
### trace
- sum of entries along the main diagonal

---
### trace formula
$$
\begin{aligned}
\text{tr}(A) = \sum_{i=1}^n a_{ii} \\
a = \text{entry} \\
i = \text{row index} \\
i = \text{column index} \\
n = \text{dimension}
\end{aligned}
$$

---
### scalar multiplication
- scalar quantity multiplication with matrix

---
### scalar multiplication formula
$$
\begin{aligned}
cA = \begin{bmatrix}
ca_{11} & ca_{12} & ca_{13} \\
ca_{21} & ca_{22} & ca_{23}\\
ca_{31} & ca_{32} & ca_{33} 
\end{bmatrix} \\
|cA| = 3 \times 3 \\
c = \text{scalar} \\
a = \text{entry} 
\end{aligned}
$$

---
### matrix addition
- matrix entry addition with corresponding matrix entry

---
### matrix addition formula
$$
\begin{aligned}
A + B = \begin{bmatrix}
a_{11}+b_{11} & a_{12}+b_{12} & a_{13}+b_{13} \\
a_{21}+b_{21} & a_{22}+b_{22} & a_{23}+b_{23} \\
a_{31}+b_{31} & a_{32}+b_{32} & a_{33}+b_{33} 
\end{bmatrix} \\
|A + B| = 3 \times 3 \\
a, b = \text{entry}
\end{aligned}
$$

---
### linear combination
- sum of scalar multiplication with matrix

---
### linear combination formula
$$
\begin{aligned}
B = \sum_{i = 1}^k c_iA_{i} \\
c = \text{scalar} \\
A = \text{matrix} \\
k = \text{number of matrices}
\end{aligned}
$$

---
### matrix transposition
- switch row index with column index

---
### matrix transposition formula
$$
\begin{aligned}
A = \begin{bmatrix} 
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23}\\
a_{31} & a_{32} & a_{33} \\
\end{bmatrix} \implies A^T = \begin{bmatrix}
a_{11} & a_{21} & a_{31} \\
a_{12} & a_{22} & a_{32} \\
a_{13} & a_{23} & a_{33}
\end{bmatrix} \\
m \times n \implies n \times m \\
a_{ij} \implies a_{ji} \\
a = \text{entry} \\
T = \text{transposition}
\end{aligned}
$$

---
### symmetric 
- matrix equal transposed matrix

---
### symmetric formula
$$
\begin{aligned}
A = A^T \\
A = \text{square matrix} \\
T = \text{transposition}
\end{aligned}
$$

---
### skew symmetric 
- matrix with zero main diagonal equal negative transposed matrix

---
### skew symmetric formula
$$
\begin{aligned}
A = -A^T \\
A = \text{square matrix} \\
T = \text{transposition}
\end{aligned}
$$

---
### matrix equality property
- two matrices equal if and only if all corresponding entries equal and size equal

---
### matrix equality property formula
$$
\begin{aligned}
A = B \iff \forall i, j \le m, n: (a_{ij} = b_{ij}) \land (|A| = |B|) \\
A, B = \text{matrix} \\
a, b = \text{entry} \\
i = \text{row index} \\
j = \text{column index} \\
m = \text{number of rows} \\
n = \text{number of columns}
\end{aligned}
$$

---
### matrix arithmetic property
- commutative
- associative
- identity
- inverse
- distributive

---
### matrix arithmetic property formula
$$
\begin{aligned}
A + B = B + A \\
(A + B) + C = A + (B + C) \\
(cd)A = c(dA) \\
A + 0 = A \\
1(A) = A \\
A + (-A) = 0 \\
c(A + B) = cA + cB \\
(c + d)A = cA + dA 
\end{aligned}
$$

---
### matrix transposition property
- inverse
- addition
- associative

---
### matrix transposition property formula
$$
\begin{aligned}
(A^T)^T = A \\
(A \pm B)^T = A^T \pm B^T \\
(cA)^T = c(A^T)
\end{aligned}
$$

---
### symmetry decomposition property
- every square matrix decomposable into symmetric and skew symmetric 

---
### symmetry decomposition property formula
$$
\begin{aligned}
A = S + V \\
S = (\frac{1}{2})(A + A^T) = (\frac{1}{2})(A + A^T)^T \\
V = (\frac{1}{2})(A - A^T) = (\frac{1}{2})(A^T - A)^T \\
A = \text{square matrix} \\
S = \text{symmetric matrix} \\
V = \text{skew symmetric matrix} \\
T = \text{transposition} 
\end{aligned}
$$

---
