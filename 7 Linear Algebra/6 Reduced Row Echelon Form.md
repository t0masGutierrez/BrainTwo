### reduced row echelon form
- first nonzero entry of each row equal 1
- first nonzero entry of each successive row equal larger column index
- all entries below first nonzero entry of each row equal 0
- all entries above first nonzero entry of each row equal 0
- rows with all zeros are the final rows of matrix

---
### gauss-jordan row reduction
- generate augmented matrix
- perform type I row operation on the 1st entry of 1st row such that its 1
- perform type II row operation on all entries below the pivot entry such that its 0
- perform type II row operation on all entries above the pivot entry such that its 0
- if zero pivot entry then perform type III row operation with lower row, if all zeros below zero pivot entry then skip column
- final form of the system equal reduced row echelon form
- back substitute for the particular solution of system of linear equations

---
### homogeneous system of linear equations
- constant matrix equal zero matrix

---
### homogeneous system of linear equations formula
$$
\begin{aligned}
AX = 0 \\
A = \text{cofficient matrix} \\
X = \text{variable matrix} 
\end{aligned}
$$

---
### nonhomogeneous system of linear equations
- constant matrix equal nonzero matrix

---
### nonhomogeneous system of linear equations formula
$$
\begin{aligned}
AX \ne 0 \\
A = \text{cofficient matrix} \\
X = \text{variable matrix} 
\end{aligned}
$$

---
### homogeneous solution
- if every column equal pivot column then every solution equal trivial solution
- if there exists nonpivot column then there exists nontrivial solution

---
### nonhomogeneous solution
- if there exists pivot entry for every column then single solution
- if there exists row with all zeros except final entry then zero solutions
- if there exists nonpivot column then infinite solutions

---
### trivial solution
- every solution equal zero

---
### nontrivial solution
- there exists nonzero solution

---
### fundamental solution of system of linear equations
- set of linearly independent solutions such that every solution of homogeneous system of linear equations expressible as linear combination of them
- number of linearly independent solutions equal number of independent variables
- single independent variable equal 1 and remaining variables equal 0

---
### fundamental solution of system of linear equations formula
$$
\begin{aligned}
\text{ker}(A) = \{\sum_{i=1}^k a_{i}\vec x_{i} \mid a \in \mathbb R, \vec x \in \mathbb R^n\} \\
k = \text{number of independent variables} \\
a = \text{coefficient} \\
\vec x = \text{vector}
\end{aligned}
$$

---
