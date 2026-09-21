### existence and uniqueness
- for every matrix there exists unique reduced row echelon form
- order of row operations do not change the reduced row echelon form

---
### system equivalent
- two systems of linear equations system equivalent if and only if they have the exact same solution set

---
### row equivalent
- two augmented matrices row equivalent if and only if they equal via finite number of row operations

---
### inverse type I row operation
- row scaling

---
### inverse type I row operation formula
$$
\begin{array}{l}
\langle i\rangle\implies(\frac{1}{c})\langle i\rangle\\
i=\text{row index}\\
c=\text{scalar}
\end{array}
$$

---
### inverse type II row operation
- row replacement

---
### inverse type II row operation formula
$$
\begin{array}{l}
\langle i\rangle\implies\langle i\rangle-c\langle j\rangle\\
i,j=\text{row index}\\
c=\text{scalar}
\end{array}
$$

---
### inverse type III row operation
- row swapping

---
### inverse type III row operation formula
$$
\begin{array}{l}
\langle j\rangle\iff\langle i\rangle\\
i,j=\text{row index}\\
\end{array}
$$

---
### rank
- number of nonzero rows of RREF
- number of pivot columns of RREF

---
### rank formula
$$
\begin{array}{l}
\text{rank}(A)=k\\
k=\text{number of RREF nonzero rows}\\
k=\text{number of RREF pivot columns}
\end{array}
$$

---
### row space
- set of all possible linear combinations of the rows of matrix

---
### row space formula
$$
\begin{array}{l}
\text{Row}(A)=\{\sum_{i=1}^{m}c_{i}\vec a_{i}\mid c\in\mathbb R,\vec a\in\mathbb R^{n}\}\\
m=\text{number of rows}\\
n=\text{number of columns}\\
c=\text{scalar}\\
\vec a=\text{row vector}
\end{array}
$$

---
### row space test
- generate augmented matrix whose left rows equal the vectors of set and whose right matrix equal the possible element of row space
- form the reduced row echelon of the system
- if consistent system then element of row space
- if inconsistent system then not element of row space

---
### system equivalence property
- row equivalent system equal system equivalent system

---
### system equivalence property formula
$$
\begin{array}{l}
A\mid B\sim C\mid D\implies AX=B\sim CX=D\\
A,C=\text{coefficient matrix}\\
D,B=\text{constant matrix}\\
X=\text{variable matrix}
\end{array}
$$

---
### row equivalence direction property
- bidirectional
- transitive

---
### row equivalence direction property formula
$$
\begin{array}{l}
A\sim B\implies B\sim A\\
(A\sim B)\land(B\sim C)\implies A\sim C
\end{array}
$$

---
### row equivalence RREF property
- row equivalent matrices equal RREF

---
### row equivalence RREF property formula
$$
\begin{array}{l}
A\sim B\iff\text{RREF}(A)=\text{RREF}(B)\\
A,B=\text{matrix}\\
\text{RREF}=\text{reduced row echelon form}
\end{array}
$$

---
### rank size property
- if rank of coefficient matrix equal dimension of square matrix then every homogeneous solution equal trivial homogeneous solution
- if rank of coefficient matrix less dimension of square matrix then there exists nontrivial homogeneous solution

---
### rank size property formula
$$
\begin{array}{l}
\text{rank}(A)=n\iff Y=\set{0}\\
\text{rank}(A)<n\iff Y\ne\set{0}\\
AX=0\\
A=\text{square matrix}\\
n=\text{dimension}\\
Y=\text{complete solution set}
\end{array}
$$

---
### row space transitivity property
- row space element of subset equal row space element of superset

---
### row space transitivity property formula
$$
\begin{array}{l}
(a\in\text{Row}\ A)\land(\text{Row}\ A\subset\text{Row}\ B)\implies a\in\text{Row}(B)\\
A,B=\text{matrix}
\end{array}
$$

---
### row space equivalence property
- row equivalent matrices equal row space

---
### row space equivalence property formula
$$
\begin{array}{l}
A\sim B\iff\text{Row}(A)=\text{Row}(B)
\end{array}
$$

---
### row space zero property
- zero vector equal element of every row space

---
### row space zero property formula
$$
\begin{array}{l}
\vec0=0a_{1}+\dots+0a_{m}\\
a=\text{row}\\
m=\text{number of rows}
\end{array}
$$

---
### row space row property
- every row of matrix equal element of its row space

---
### row space row property formula
$$
\begin{array}{l}
\vec a_{i}=0a_{1}+\dots+1a_{i}+\dots+0a_{m}\\
a=\text{row}\\
i=\text{row index}\\
m=\text{number of rows}\\
\end{array}
$$

---
### row space dimension property
- matrix rank equal matrix transposition rank
- row space dimension equal column space dimension

---
### row space dimension property formula
$$
\begin{array}{l}
\text{Rank}(A)=\text{Rank}(A^{T})\\
\dim(\text{Row}\ A)=\dim(\text{Col}\ A)
\end{array}
$$

---
