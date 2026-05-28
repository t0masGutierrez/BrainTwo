### matrix multiplication
- matrix multiplication with matrix

---
### matrix multiplication formula
$$
\begin{aligned}
c_{ij} = \sum_{k}^n a_{ik}b_{kj} = \vec a_{i} \cdot \vec b_{j} \\
a, b = \text{entry} \\
i = \text{A row index} \\
k = \text{A column index} \\
j = \text{B column index} \\
k = \text{B row index} 
\end{aligned}
$$

---
### ith row
- $i^{th}$ row of $AB$ equal $i^{th}$ row of $A$ multiplication with $B$ 

---
### ith row formula
$$
\begin{aligned}
C_{i*} = \vec a_{i} \cdot B \\
\vec a = \text{row vector} \\
B = \text{matrix}
\end{aligned}
$$

---
### jth column
- $j^{th}$ column of $AB$ equal $j^{th}$ column of $B$ multiplication with $A$ 

---
### jth column formula
$$
\begin{aligned}
C_{*j} = \vec b_{j} \cdot A \\
\vec b = \text{column vector} \\
A = \text{matrix}
\end{aligned}
$$

---
### idempotent matrix
- square matrix multiplication with itself equal itself

---
### idempotent matrix formula
$$
\begin{aligned}
A^2 = A \\
A = \text{square matrix}
\end{aligned}
$$

---
### matrix size property
- number of columns of $A$ must equal number of rows of $B$ 

---
### matrix size property formula
$$
\begin{aligned}
(|A| = m \times n) \land (|B| = n \times p) \implies |AB| = m \times p \\
A, B = \text{matrix} \\
m = \text{number of A rows} \\
n = \text{number of A columns} \\
n = \text{number of B rows} \\
p = \text{number of B columns} 
\end{aligned}
$$

---
### matrix multiplication property
- associative
- distributive

---
### matrix multiplication property formula
$$
\begin{aligned}
A(BC) = (AB)C \\
c(AB) = (cA)B = A(cB) \\
A(B + C) = AB + AC \\
(A + B)C = AC + BC
\end{aligned}
$$

---
### matrix exponentiation property
- subtraction
- multiplication
- addition
- identity
- zero

---
### matrix exponentiation property formula
$$
\begin{aligned}
A^k = (A^{k-1})(A) \\
(A^s)^t =  A^{st} = (A^t)^s \\
A^sA^t = A^{s+t} \\
A^1 = A \\
A^0 = I
\end{aligned}
$$

---
### matrix transposition property
- transposition of matrix multiplication equal reverse transposed matrix multiplication

---
### matrix transposition property formula
$$
\begin{aligned}
(AB)^T = B^TA^T \\
|B^T| = p \times n \\
|A^T| = n \times m \\
A, B = \text{matrix} \\
T = \text{transposition}
\end{aligned}
$$

---
