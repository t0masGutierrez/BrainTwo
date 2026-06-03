### 1x1 determinant
- linear transformation of the length of line

---
### 1x1 determinant formula
$$
\begin{aligned}
A = \begin { b m a t r i x }
a _ { 11 }
\end { b m a t r i x } \implies
\det ( A ) = a _ { 11 } \\
A = \text { square matrix } \\
a = \text { entry }
\end{aligned}
$$

---
### 2x2 determinant
- linear transformation of the area of parallelogram

---
### 2x2 determinant formula
$$
\begin{aligned}
A = \begin { b m a t r i x }
a _ { 11 } & a _ { 12 } \\
a _ { 21 } & a _ { 22 }
\end { b m a t r i x } \implies
\det ( A ) = a _ { 11 } a _ { 22 } - a _ { 12 } a _ { 21 } \\
A = \text { square matrix } \\
a = \text { entry }
\end{aligned}
$$

---
### 3x3 determinant
- linear transformation of the volume of parallelepiped

---
### 3x3 determinant formula
$$
\begin{aligned}
A = \begin { b m a t r i x }
a _ { 11 } & a _ { 12 } & a _ { 13 } \\
a _ { 21 } & a _ { 22 } & a _ { 23 } \\
a _ { 31 } & a _ { 32 } & a _ { 33 }
\end { b m a t r i x } \implies
\det ( A ) = a _ { 11 } a _ { 22 } a _ { 33 } + a _ { 12 } a _ { 23 } a _ { 31 } + a _ { 13 } a _ { 21 } a _ { 32 } \\ - a _ { 13 } a _ { 22 } a _ { 31 } - a _ { 11 } a _ { 23 } a _ { 32 } - a _ { 12 } a _ { 21 } a _ { 33 } \\
A = \text { square matrix } \\
a = \text { entry }
\end{aligned}
$$

---
### nxn determinant
- linear transformation of the size of shape

---
### nxn determinant formula
$$
\begin{aligned}
| A | = n \times n \implies \text { det } ( A ) \in \mathbb R \\
A = \text { square matrix } \\
\end{aligned}
$$

---
### submatrix
- matrix formed by deleting all entries of the ith row and jth column 

---
### submatrix formula
$$
\begin{aligned}
A _ { i j } = A - ( a _ { i * } + a _ { * j } ) \\
A = \text { matrix } \\
a _ { i * } = \text { ith row } \\
a _ { * j } = \text { jth column } \\
\end{aligned}
$$

---
### minor
- determinant of square submatrix

---
### minor formula
$$
\begin{aligned}
\forall n \ge 2 : | A _ { i j } | = ( n - 1 ) \times ( n - 1 ) \implies \det ( A _ { i j } ) \\
A _ { i j } = \text { square submatrix }
\end{aligned}
$$

---
### cofactor
- minor multiplication with parity of exponent

---
### cofactor formula
$$
\begin{aligned}
\mathcal A _ { i j } = ( - 1 ) ^ { i + j } \det ( A _ { i j } ) \\
i = \text { row index } \\
j = \text { column index } \\
\det ( A _ { i j } ) = \text { minor }
\end{aligned}
$$

---
### nxn determinant
- cofactor expansion along row of square matrix
- cofactor expansion along column of square matrix

---
### nxn determinant formula
$$
\begin{aligned}
\det ( A ) = \sum _ { j = 1 } ^ { n } a _ { i j } \mathcal A _ { i j } \\
\det ( A ) = \sum _ { i = 1 } ^ { n } a _ { i j } \mathcal A _ { i j } \\
A = \text { square matrix } \\
i = \text { row index } \\
j = \text { column index } \\
n = \text { dimension } \\
a = \text { entry } \\
\mathcal A = \text { cofactor }
\end{aligned}
$$

---
###  type I determinant row operation
- determinant scaling

---
### type I determinant row operation formula
$$
\begin{aligned}
\det R _ { 1 } ( A ) = c \det ( A ) \\
R _ { 1 } = \text { type I row operation } \\
A = \text { square matrix } \\
c = \text { scalar }
\end{aligned}
$$

---
### type II determinant row operation
- determinant equality

---
### type II determinant row operation formula
$$
\begin{aligned}
\det R _ { 2 } ( A ) = \det ( A ) \\
R _ { 2 } = \text { type II row operation } \\
A = \text { square matrix }
\end{aligned}
$$

---
### type III determinant row operation
- determinant negation

---
### type III determinant row operation formula
$$
\begin{aligned}
\det R _ { 3 } ( A ) = - \det ( A ) \\
R _ { 3 } = \text { type III row operation } \\
A = \text { square matrix }
\end{aligned}
$$

---
### determinant via gaussian elimination
- perform gaussian elimination until square matrix equal upper triangular matrix
- track determinant row operation
- determinant of upper triangular matrix equal product of entries along the main diagonal
- determinant division with scalar

---
### determinant via gaussian elimination formula
$$
\begin{aligned}
B = R _ { k } ( \dots R _ { 1 } ( A ) \dots ) \in \mathcal U \implies \det ( A ) = \frac { 1 } { c } \det ( B ) \\
R = \text { row operation } \\
A = \text { square matrix } \\
c = \text { scalar }
\end{aligned}
$$

---
### singularity summary
- for every nonsingular matrix there exists inverse matrix
- rank of nonsingular matrix equal dimension of nonsingular matrix
- nonsingular matrix equal nonzero determinant
- nonsingular matrix row equivalent with identity matrix
- every solution of homogeneous linear system with nonsingular coefficient matrix equal trivial solution
- there exists nontrivial solution of nonhomogeneous linear system with nonsingular coefficient matrix
![[7 Linear Algebra/Images/singularity summary.png]]

---
### upper triangular matrix determinant
- product of entries along the main diagonal

---
### upper triangular matrix determinant formula
$$
\begin{aligned}
A \in \mathcal U _ { n } \implies \det ( A ) = \prod _ { i = 1 } ^ { n } a _ { i i } \\
a = \text { entry } \\
i = \text { diagonal index }
\end{aligned}
$$

---
### identity matrix determinant
- product of 1's along the main diagonal

---
### identity matrix determinant formula
$$
\begin{aligned}
\det ( I ) = 1 \\
I = \text { identity matrix }
\end{aligned}
$$

---
### scalar multiplication determinant
- exponential scalar multiplication with determinant

---
### scalar multiplication determinant formula
$$
\begin{align}
\det ( c A ) = c ^ { n } \det ( A ) \\
A = \text { square matrix } \\
c = \text { scalar } \\
n = \text { dimension }
\end{align}
$$

---
### matrix multiplication determinant
- determinant multiplication with determinant

---
### matrix multiplication determinant formula
$$
\begin{aligned}
\det ( A B ) = \det ( A ) \det ( B ) \\
A , B = \text { square matrix }
\end{aligned}
$$

---
### matrix inversion determinant
- reciprocal of determinant

---
### matrix inversion determinant formula
$$
\begin{aligned}
\det ( A ^ { - 1 } ) = \frac { 1 } { \det ( A ) } \\
\det ( A ) \ne 0 \\
A = \text { square matrix }
\end{aligned}
$$

---
### matrix transposition determinant
- identity
- multiple identity
- transposition

---
### matrix transposition determinant formula
$$
\begin{aligned}
\det R ( I ) = | ( R ( I ) ) ^ { T } | \\
\det R _ { k } ( \dots R _ { 1 } ( I ) \dots ) = | ( R _ { k } ( \dots R _ { 1 } ( I ) \dots ) ) ^ { T } | \\
\det R ( B ) = | ( R ( B ) ) ^ { T } | \\
\end{aligned}
$$

---
### symmetric determinant
- determinant of transposed square matrix

---
### symmetric determinant formula
$$
\begin{aligned}
\det ( A ) = \det ( A ^ { T } ) \\
A = \text { symmetric matrix } \\
T = \text { transposition }
\end{aligned}
$$

---
### determinant zero property
- zero row or zero column
- identical row or identical column

---
### determinant zero property formula
$$
\begin{aligned}
( \vec a _ { i * } = 0 ) \lor ( \vec a _ { * j } = 0 ) \implies \det ( A ) = 0 \\
( \vec a _ { i _ { 1 } * } = \vec a _ { i _ { 2 } * } ) \lor ( \vec a _ { * j _ { 1 } } = \vec a _ { * j _ { 2 } } ) \implies \det ( A ) = 0
\end{aligned}
$$

---
### determinant singularity property
- nonsingular matrix equal nonzero determinant

---
### determinant singularity property formula
$$
\begin{aligned}
\text { det } ( A ) \ne 0 \iff \exists A ^ { - 1 } \\
A = \text { nonsingular matrix } \\
\end{aligned}
$$

---
### determinant rank property
- rank of square matrix with nonzero determinant equal dimension of square matrix

---
### determinant rank property formula
$$
\begin{aligned}
\det ( A ) \ne 0 \iff \text { rank } ( A ) = n \\
A = \text { square matrix } \\
n = \text { dimension }
\end{aligned}
$$

---
