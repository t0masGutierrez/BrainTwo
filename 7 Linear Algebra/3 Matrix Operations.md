### matrix
- two dimensional array of entries created by arranging vectors into rows and columns

---
### matrix formula
$$
\begin{aligned}
A = \begin{bmatrix}
a _ { 11 } & \dots & a _ { 1 n } \\
\vdots & \ddots & \vdots \\
a _ { m 1 } & \dots & a _ { mn }
\end{bmatrix} \\
| A | = m \times n \\
a = \text { entry } \\
m = \text { number of rows } \\
n = \text { number of columns }
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
a _ { 11 } & a _ { 12 } & a _ { 13 } \\
a _ { 21 } & a _ { 22 } & a _ { 23 } \\
a _ { 31 } & a _ { 32 } & a _ { 33 }
\end{bmatrix} \\
| A | = 3 \times 3 \\
a = \text { entry }
\end{aligned}
$$

---
### main diagonal
- entries where the row index equal column index

---
### main diagonal formula
$$
\begin{aligned}
\text { diag } ( A ) = ( a _ { ii } ) _ { i = 1 } ^ { n } \\
a = \text { entry } \\
i = \text { row index } \\
i = \text { column index } \\
n = \text { dimension }
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
d _ { 11 } & 0 & 0 \\
0 & d _ { 22 } & 0 \\
0 & 0 & d _ { 33 }
\end{bmatrix} \iff \forall ( i \ne j ) : d _ { ij } = 0 \\
| D | = 3 \times 3 \\
d = \text { entry } \\
i = \text { row index } \\
j = \text { column index }
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
\end{bmatrix} \iff \forall ( i \ne j ) : ( a _ { ij } = 0 ) \land \forall ( i = j ) : ( a _ { ij } = 1 ) \\
| I | = 3 \times 3 \\
i = \text { row index } \\
j = \text { column index }
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
u _ { 11 } & u _ { 12 } & u _ { 13 } \\
0 & u _ { 22 } & u _ { 23 } \\
0 & 0 & u _ { 33 }
\end{bmatrix} \iff \forall ( i > j ) : u _ { ij } = 0 \\
| U | = 3 \times 3 \\
u = \text { entry } \\
i = \text { row index } \\
j = \text { column index }
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
l _ { 11 } & 0 & 0 \\
l _ { 21 } & l _ { 22 } & 0 \\
l _ { 31 } & l _ { 32 } & l _ { 33 } \\
\end{bmatrix} \iff \forall ( i < j ) : l _ { ij } = 0 \\
| L | = 3 \times 3 \\
l = \text { entry } \\
i = \text { row index } \\
j = \text { column index }
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
| A | = 3 \times 3
\end{aligned}
$$

---
### trace
- sum of entries along the main diagonal

---
### trace formula
$$
\begin{aligned}
\text { tr } ( A ) = \sum _ { i = 1 } ^ { n } a _ { ii } \\
a = \text { entry } \\
i = \text { row index } \\
i = \text { column index } \\
n = \text { dimension }
\end{aligned}
$$

---
### scalar multiplication
- scalar quantity multiplication with matrix

---
### scalar multiplication formula
$$
\begin{aligned}
c A = \begin{bmatrix}
c a _ { 11 } & c a _ { 12 } & c a _ { 13 } \\
c a _ { 21 } & c a _ { 22 } & c a _ { 23 } \\
c a _ { 31 } & c a _ { 32 } & c a _ { 33 }
\end{bmatrix} \\
| c A | = 3 \times 3 \\
c = \text { scalar } \\
a = \text { entry }
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
a _ { 11 } + b _ { 11 } & a _ { 12 } + b _ { 12 } & a _ { 13 } + b _ { 13 } \\
a _ { 21 } + b _ { 21 } & a _ { 22 } + b _ { 22 } & a _ { 23 } + b _ { 23 } \\
a _ { 31 } + b _ { 31 } & a _ { 32 } + b _ { 32 } & a _ { 33 } + b _ { 33 }
\end{bmatrix} \\
| A + B | = 3 \times 3 \\
a , b = \text { entry }
\end{aligned}
$$

---
### linear combination
- sum of scalar multiplication with matrix

---
### linear combination formula
$$
\begin{aligned}
B = \sum _ { i = 1 } ^ { k } c _ { i } A _ { i } \\
c = \text { scalar } \\
A = \text { matrix } \\
k = \text { number of matrices }
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
a _ { 11 } & a _ { 12 } & a _ { 13 } \\
a _ { 21 } & a _ { 22 } & a _ { 23 } \\
a _ { 31 } & a _ { 32 } & a _ { 33 } \\
\end{bmatrix} \implies A ^ { T } = \begin{bmatrix}
a _ { 11 } & a _ { 21 } & a _ { 31 } \\
a _ { 12 } & a _ { 22 } & a _ { 32 } \\
a _ { 13 } & a _ { 23 } & a _ { 33 }
\end{bmatrix} \\
m \times n \implies n \times m \\
a _ { ij } \implies a _ { ji } \\
a = \text { entry } \\
T = \text { transposition }
\end{aligned}
$$

---
### symmetric 
- matrix equal transposed matrix

---
### symmetric formula
$$
\begin{aligned}
A = A ^ { T } \\
A = \text { square matrix } \\
T = \text { transposition }
\end{aligned}
$$

---
### skew symmetric 
- matrix with zero main diagonal equal negative transposed matrix

---
### skew symmetric formula
$$
\begin{aligned}
A = - A ^ { T } \\
A = \text { square matrix } \\
T = \text { transposition }
\end{aligned}
$$

---
### matrix equality property
- two matrices equal if and only if all corresponding entries equal and size equal

---
### matrix equality property formula
$$
\begin{aligned}
A = B \iff \forall i , j \le m , n : ( a _ { ij } = b _ { ij } ) \land ( | A | = | B | ) \\
A , B = \text { matrix } \\
a , b = \text { entry } \\
i = \text { row index } \\
j = \text { column index } \\
m = \text { number of rows } \\
n = \text { number of columns }
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
( A + B ) + C = A + ( B + C ) \\
( c d ) A = c ( d A ) \\
A + 0 = A \\
1 ( A ) = A \\
A + ( - A ) = 0 \\
c ( A + B ) = c A + c B \\
( c + d ) A = c A + d A
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
( A ^ { T } ) ^ { T } = A \\
( A \pm B ) ^ { T } = A ^ { T } \pm B ^ { T } \\
( c A ) ^ { T } = c ( A ^ { T } )
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
S = ( \frac { 1 } { 2 } ) ( A + A ^ { T } ) = ( \frac { 1 } { 2 } ) ( A + A ^ { T } ) ^ { T } \\
V = ( \frac { 1 } { 2 } ) ( A - A ^ { T } ) = ( \frac { 1 } { 2 } ) ( A ^ { T } - A ) ^ { T } \\
A = \text { square matrix } \\
S = \text { symmetric matrix } \\
V = \text { skew symmetric matrix } \\
T = \text { transposition }
\end{aligned}
$$

---
