### 1x1 determinant
- linear transformation of the length of line

---
### 1x1 determinant formula
$$
\begin{array}{l}
A=\begin{bmatrix}
a_{11}
\end{bmatrix}\implies
\det(A)=a_{11}\\
A=\text{square matrix}\\
a=\text{entry}
\end{array}
$$

---
### 2x2 determinant
- linear transformation of the area of parallelogram

---
### 2x2 determinant formula
$$
\begin{array}{l}
A=\begin{bmatrix}
a_{11}&a_{12}\\
a_{21}&a_{22}
\end{bmatrix}\implies
\det(A)=a_{11}a_{22}-a_{12}a_{21}\\
A=\text{square matrix}\\
a=\text{entry}
\end{array}
$$

---
### 3x3 determinant
- linear transformation of the volume of parallelepiped

---
### 3x3 determinant formula
$$
\begin{array}{l}
A=\begin{bmatrix}
a_{11}&a_{12}&a_{13}\\
a_{21}&a_{22}&a_{23}\\
a_{31}&a_{32}&a_{33}
\end{bmatrix}\implies
\det(A)=a_{11}a_{22}a_{33}+a_{12}a_{23}a_{31}+a_{13}a_{21}a_{32}\\-a_{13}a_{22}a_{31}-a_{11}a_{23}a_{32}-a_{12}a_{21}a_{33}\\
A=\text{square matrix}\\
a=\text{entry}
\end{array}
$$

---
### nxn determinant
- linear transformation of the size of shape

---
### nxn determinant formula
$$
\begin{array}{l}
|A|=n\times n\implies\text{det}(A)\in\mathbb R\\
A=\text{square matrix}\\
\end{array}
$$

---
### submatrix
- matrix formed by deleting all entries of the ith row and jth column

---
### submatrix formula
$$
\begin{array}{l}
A_{\text{ij}}=A-(a_{i*}+a_{*j})\\
A=\text{matrix}\\
a_{i*}=\text{ith row}\\
a_{*j}=\text{jth column}\\
\end{array}
$$

---
### minor
- determinant of square submatrix

---
### minor formula
$$
\begin{array}{l}
\forall n\ge2:|A_{\text{ij}}|=(n-1)\times(n-1)\implies\det(A_{\text{ij}})\\
A_{\text{ij}}=\text{square submatrix}
\end{array}
$$

---
### cofactor
- minor multiplication with parity of exponent

---
### cofactor formula
$$
\begin{array}{l}
\mathcal A_{\text{ij}}=(-1)^{i+j}\det(A_{\text{ij}})\\
i=\text{row index}\\
j=\text{column index}\\
\det(A_{\text{ij}})=\text{minor}
\end{array}
$$

---
### nxn determinant
- cofactor expansion along row of square matrix
- cofactor expansion along column of square matrix

---
### nxn determinant formula
$$
\begin{array}{l}
\det(A)=\sum_{j=1}^{n}a_{\text{ij}}\mathcal A_{\text{ij}}\\
\det(A)=\sum_{i=1}^{n}a_{\text{ij}}\mathcal A_{\text{ij}}\\
A=\text{square matrix}\\
i=\text{row index}\\
j=\text{column index}\\
n=\text{dimension}\\
a=\text{entry}\\
\mathcal A=\text{cofactor}
\end{array}
$$

---
###  type I determinant row operation
- determinant scaling

---
### type I determinant row operation formula
$$
\begin{array}{l}
\det R_{1}(A)=c\det(A)\\
R_{1}=\text{type I row operation}\\
A=\text{square matrix}\\
c=\text{scalar}
\end{array}
$$

---
### type II determinant row operation
- determinant equality

---
### type II determinant row operation formula
$$
\begin{array}{l}
\det R_{2}(A)=\det(A)\\
R_{2}=\text{type II row operation}\\
A=\text{square matrix}
\end{array}
$$

---
### type III determinant row operation
- determinant negation

---
### type III determinant row operation formula
$$
\begin{array}{l}
\det R_{3}(A)=-\det(A)\\
R_{3}=\text{type III row operation}\\
A=\text{square matrix}
\end{array}
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
\begin{array}{l}
B=R_{k}(\dots R_{1}(A)\dots)\in\mathcal U\implies\det(A)=\frac{1}{c}\det(B)\\
R=\text{row operation}\\
A=\text{square matrix}\\
c=\text{scalar}
\end{array}
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
\begin{array}{l}
A\in\mathcal U_{n}\implies\det(A)=\prod_{i=1}^{n}a_{\text{ii}}\\
a=\text{entry}\\
i=\text{diagonal index}
\end{array}
$$

---
### identity matrix determinant
- product of 1's along the main diagonal

---
### identity matrix determinant formula
$$
\begin{array}{l}
\det(I)=1\\
I=\text{identity matrix}
\end{array}
$$

---
### scalar multiplication determinant
- exponential scalar multiplication with determinant

---
### scalar multiplication determinant formula
$$
\begin{array}{l}
\det(cA)=c^{n}\det(A)\\
A=\text{square matrix}\\
c=\text{scalar}\\
n=\text{dimension}
\end{array}
$$

---
### matrix multiplication determinant
- determinant multiplication with determinant

---
### matrix multiplication determinant formula
$$
\begin{array}{l}
\det(AB)=\det(A)\det(B)\\
A,B=\text{square matrix}
\end{array}
$$

---
### matrix inversion determinant
- reciprocal of determinant

---
### matrix inversion determinant formula
$$
\begin{array}{l}
\det(A^{-1})=\frac{1}{\det(A)}\\
\det(A)\ne0\\
A=\text{square matrix}
\end{array}
$$

---
### matrix transposition determinant
- identity
- multiple identity
- transposition

---
### matrix transposition determinant formula
$$
\begin{array}{l}
\det R(I)=|(R(I))^{T}|\\
\det R_{k}(\dots R_{1}(I)\dots)=|(R_{k}(\dots R_{1}(I)\dots))^{T}|\\
\det R(B)=|(R(B))^{T}|\\
\end{array}
$$

---
### symmetric determinant
- determinant of transposed square matrix

---
### symmetric determinant formula
$$
\begin{array}{l}
\det(A)=\det(A^{T})\\
A=\text{symmetric matrix}\\
T=\text{transposition}
\end{array}
$$

---
### determinant zero property
- zero row or zero column
- identical row or identical column

---
### determinant zero property formula
$$
\begin{array}{l}
(\vec a_{i*}=0)\lor(\vec a_{*j}=0)\implies\det(A)=0\\
(\vec a_{i_{1}*}=\vec a_{i_{2}*})\lor(\vec a_{*j_{1}}=\vec a_{*j_{2}})\implies\det(A)=0
\end{array}
$$

---
### determinant singularity property
- nonsingular matrix equal nonzero determinant

---
### determinant singularity property formula
$$
\begin{array}{l}
\text{det}(A)\ne0\iff\exists A^{-1}\\
A=\text{nonsingular matrix}\\
\end{array}
$$

---
### determinant rank property
- rank of square matrix with nonzero determinant equal dimension of square matrix

---
### determinant rank property formula
$$
\begin{array}{l}
\det(A)\ne0\iff\text{rank}(A)=n\\
A=\text{square matrix}\\
n=\text{dimension}
\end{array}
$$

---
