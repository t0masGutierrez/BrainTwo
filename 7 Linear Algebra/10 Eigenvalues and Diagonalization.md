### eigen
- characteristic of the transformation

---
### eigenvalue
- scalar that describes the magnitude of scalar multiplication with the corresponding eigenvector under the transformation

---
### eigenvalue formula
$$
\begin{aligned}
\lambda \iff A \vec x = \lambda \vec x \\
\lambda = \text { eigenvalue } \\
A = \text { square matrix } \\
\vec x = \text { eigenvector }
\end{aligned}
$$

---
### eigenvector
- nonzero vector whose direction remain unchanged under the transformation

---
### eigenvector formula
$$
\begin{aligned}
\vec x \iff A \vec x = \lambda \vec x \\
\vec x \ne 0 \\
\vec x = \text { eigenvector } \\
A = \text { square matrix } \\
\lambda = \text { eigenvalue }
\end{aligned}
$$

---
### eigenspace
- set of all eigenvectors associated with eigenvalue including zero vector

---
### eigenspace formula
$$
\begin{aligned}
E _ { \lambda } = \{ \vec x \in \mathbb R ^ { n } \mid ( A - \lambda I ) \vec x = 0 \} \\
\vec x = \text { eigenvector } \\
A = \text { square matrix } \\
\lambda = \text { eigenvalue } \\
I = \text { identity matrix }
\end{aligned}
$$

---
### number of eigenvectors
- infinite number of eigenvectors

---
### number of eigenvectors formula
$$
\begin{aligned}
( c \in \mathbb R ) \land ( \vec x \in E _ { \lambda } ) \implies c \vec x \in E _ { \lambda } \\
c = \text { scalar } \\
\vec x = \text { eigenvector } \\
E _ { \lambda } = \text { eigenspace }
\end{aligned}
$$

---
### homogeneous system of linear equations
- eigenvectors for corresponding eigenvalue equal nontrivial solutions of the homogeneous system of linear equations
- eigenspace for corresponding eigenvectors equal complete solution set of the homogeneous system of linear equations

---
### homogeneous system of linear equations formula
$$
\begin{aligned}
( A - \lambda I ) \vec x = 0 \\
\begin{bmatrix}
a _ { 11 } - \lambda & \dots & a _ { 1 n } \\
\vdots & a _ { i i } - \lambda & \vdots \\
a _ { n 1 } & \dots & a _ { n n } - \lambda
\end { b m a t r i x } \begin { b m a t r i x }
x _ { 1 } \\
\vdots \\
x _ { n }
\end { b m a t r i x } = 0 \\
A = \text { square matrix } \\
\lambda = \text { eigenvalue } \\
I = \text { identity matrix } \\
\vec x = \text { eigenvector }
\end{aligned}
$$

---
### characteristic polynomial
- polynomial whose roots equal the eigenvalues of matrix

---
### characteristic polynomial formula
$$
\begin{aligned}
p _ { A } ( \lambda ) = \det ( A - \lambda I ) = 0 \\
A = \text { square matrix } \\
\lambda = \text { eigenvalue } \\
I = \text { identity matrix }
\end{aligned}
$$

---
### similar
- similar matrices represent the same transformation but different coordinate system
- similar matrices are square matrices of the same size
- similar matrices are similar with themselves
- similar matrices are reflexive
- similar matrices are symmetric
- similar matrices are transitive
- similar matrices have the same determinant
- similar matrices have the same trace
- similar matrices have the same rank
- similar matrices have the same characteristic polynomial
- similar matrices have the same eigenvalues with the same algebraic multiplicity

---
### similar formula
$$
\begin{aligned}
A \sim D \iff \exists P : D = P ^ { - 1 } A P \\
\text { det } ( P ) \ne 0 \\
A = \text { square matrix } \\
D = \text { diagonal matrix } \\
P = \text { eigenmatrix } \\
P ^ { - 1 } = \text { inverse eigenmatrix }
\end{aligned}
$$

---
### algebraic multiplicity
- exponent corresponding with eigenvalue

---
### algebraic multiplicity formula
$$
\begin{aligned}
p _ { A } ( x ) = \prod _ { i = 1 } ^ { r } ( x - \lambda _ { i } ) ^ { k _ { i } } \\
r = \text { number of eigenvalues } \\
\lambda = \text { eigenvalue } \\
k = \text { algebraic multiplicity }
\end{aligned}
$$

---
### geometric multiplicity
- number of fundamental eigenvectors

---
### geometric multiplicity formula
$$
\begin{aligned}
k = \sum _ { i = 1 } ^ { r } \dim ( E _ { \lambda _ { i } } ) \\
r = \text { number of eigenvalues } \\
E _ { \lambda } = \text { eigenspace }
\end{aligned}
$$

---
### diagonalization
- compute characteristic polynomial
- substitute eigenvalues into coefficient matrix
- form the reduced row echelon of the system
- fundamental solutions of homogeneous linear system equal fundamental eigenvectors
- if geometric multiplicity equal dimension of coefficient matrix then diagonalizable
- form eigenmatrix whose column vectors equal fundamental eigenvectors
- compute inverse eigenmatrix
- matrix multiplication equal diagonal matrix
- all entries along main diagonal of diagonal matrix equal eigenvalue 

---
### diagonalization formula
$$
\begin{aligned}
D = P ^ { - 1 } A P \iff A = P D P ^ { - 1 } \\
\text { det } ( P ) \ne 0 \\
D = \text { diagonal matrix } \\
P ^ { - 1 } = \text { inverse eigenmatrix } \\
A = \text { square matrix } \\
P = \text { eigenmatrix }
\end{aligned}
$$

---
### similar exponentiation property
- exponentiation of similar matrices preserve similarity

---
### similar exponentiation property formula
$$
\begin{aligned}
A ^ { k } = P D ^ { k } P ^ { - 1 } \\
k \in \mathbb N \\
A = \text { square matrix } \\
P = \text { eigenmatrix } \\
D = \text { diagonal matrix } \\
P ^ { - 1 } = \text { inverse eigenmatrix }
\end{aligned}
$$

---
### multiplicity comparison property
- geometric multiplicity less or equal algebraic multiplicity

---
### multiplicity comparison property formula
$$
\begin{aligned}
1 \le \text { gm } ( \lambda ) \le \text { am } ( \lambda ) \\
\text { gm } = \text { geometric multiplicity } \\
\text { am } = \text { algebraic multiplicity }
\end{aligned}
$$

---
