### multiplicative inverse
- square matrix multiplication with inverse matrix equal identity matrix

---
### multiplicative inverse formula
$$
\begin{aligned}
A A ^ { - 1 } = A ^ { - 1 } A = I \\
A = \text { square matrix } \\
A ^ { - 1 } = \text { inverse matrix } \\
I = \text { identity matrix }
\end{aligned}
$$

---
### nonsingular matrix
- invertible square matrix

---
### singular matrix
- noninvertible square matrix

---
### 2x2 matrix inversion
- square matrix of size two multiplication with inverse matrix equal identity matrix

---
### 2x2 matrix inversion formula
$$
\begin{aligned}
A ^ { - 1 } = \begin { b m a t r i x } a & b \\ c & d \end { b m a t r i x } ^ { - 1 } = \frac { 1 } { \delta } \begin { b m a t r i x } d & - b \\ - c & a \end { b m a t r i x } \\
\delta = a d - b c \ne 0
\end{aligned}
$$

---
### nxn matrix inversion
- generate augmented matrix whose left matrix equal coefficient matrix and whose right matrix equal identity matrix
- form the reduced row echelon of the system
- if RREF of left matrix equal identity matrix then nonsingular matrix and right matrix equal inverse matrix
- if RREF of left matrix not equal identity matrix then singular matrix

---
### nxn matrix inversion formula
$$
\begin{aligned}
\text { RREF } ( A \mid I ) = I \mid A ^ { - 1 } \\
A = \text { square matrix } \\
I = \text { identity matrix } \\
A ^ { - 1 } = \text { inverse matrix }
\end{aligned}
$$

---
### nonsingular uniqueness property
- for every nonsingular matrix there exists unique inverse matrix

---
### nonsingular uniqueness property formula
$$
\begin{aligned}
( A B = I ) \land ( A C = I ) \implies B = C \\
A = \text { square matrix } \\
B , C = \text { inverse matrix } \\
I = \text { identity matrix }
\end{aligned}
$$

---
### nonsingular exponentiation property
- inverse
- inverse power
- multiplication
- transposition
- power
- multiplicative power
- additive power
- identity
- zero

---
### nonsingular exponentiation property formula
$$
\begin{aligned}
( A ^ { - 1 } ) ^ { - 1 } = A \\
( A ^ { k } ) ^ { - 1 } = ( A ^ { - 1 } ) ^ { k } = A ^ { - k } \\
( A B ) ^ { - 1 } = B ^ { - 1 } A ^ { - 1 } \\
( A ^ { T } ) ^ { - 1 } = ( A ^ { - 1 } ) ^ { T } \\
A ^ { k } = ( A ^ { k - 1 } ) ( A ) \\
( A ^ { s } ) ^ { t } = A ^ { s t } = ( A ^ { t } ) ^ { s } \\
 A ^ { s } A ^ { t } = A ^ { s + t } \\
A ^ { 1 } = A \\
A ^ { 0 } = I
\end{aligned}
$$

---
### nonsingular rank property
- rank of nonsingular matrix equal dimension of nonsingular matrix

---
### nonsingular rank property formula
$$
\begin{aligned}
\exists A ^ { - 1 } \iff \text { rank } ( A ) = n \\
| A | = n \times n \\
A ^ { - 1 } = \text { inverse matrix } \\
A = \text { nonsingular matrix } \\
n = \text { dimension }
\end{aligned}
$$

---
### nonsingular coefficient property
- if nonsingular coefficient matrix then single solution equal $A ^ { - 1 } B$ 
- if singular coefficient matrix then either zero solutions or infinite solutions
- unique solution if and only if coefficient matrix equal nonsingular matrix

---
### nonsingular coefficient property
$$
\begin{aligned}
( A X = B ) \land ( \exists A ^ { - 1 } ) \implies Y = \set { A ^ { - 1 } B } \\
( A X = B ) \land ( \not \exists A ^ { - 1 } ) \implies Y = \emptyset \lor | Y | = \infty \\
A = \text { coefficient matrix } \\
X = \text { variable matrix } \\
B = \text { constant matrix } \\
A ^ { - 1 } = \text { inverse matrix } \\
Y = \text { complete solution set }
\end{aligned}
$$

---
