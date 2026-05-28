### ordered basis
- ordered n-tuple of vectors such that the set of vectors equal basis of vector space

---
### ordered basis formula
$$
\begin{aligned}
B = (\vec v_{1}, \dots \vec v_{n}) \\
\vec v = \text{basis vector} \\
n = \text{dimension}
\end{aligned}
$$

---
### coordinatization
- represent vector in terms of coefficients with respect to ordered basis of vector space
- aka vector expressed as B-coordinates

---
### coordinatization formula
$$
\begin{aligned}
{}[\vec w ]_{B} = [c_{1}, \dots, c_{n}] \iff \vec w = \sum_{i=1}^n c_{i}\vec v_{i} \\
{}[\vec w ]_{B} = \text{coordinate vector} \\
B = \text{ordered basis} \\
c = \text{coordinate} \\
n = \text{dimension} \\
\vec w = \text{coordinatized vector} \\
\vec v = \text{basis vector} 
\end{aligned}
$$

---
### coordinatization via RREF
- generate augmented matrix whose left columns equal vectors of ordered basis and right matrix equal possible coordinate vector
- form the reduced row echelon of the system
- if consistent system then coordinates equal solutions
- if inconsistent system then impossible coordinatization 

---
### coordinatization via RREF formula
$$
\begin{aligned}
\text{RREF}(B \mid \vec w) = I \mid [\vec w]_{B} \\
B = \text{ordered basis} \\
\vec w = \text{coordinatized vector} \\
I = \text{identity matrix} \\
{}[\vec w]_{B} = \text{coordinate vector} 
\end{aligned}
$$

---
### change of coordinates
- convert coordinate vector from 1st ordered basis to 2nd ordered basis

---
### change of coordinates formula
$$
\begin{aligned}
{}[\vec w]_{B} \rightarrow [\vec w]_{C}
\end{aligned}
$$

---
### transition matrix
- generate augmented matrix whose left columns equal vectors of 2nd ordered basis and right columns equal vectors of 1st ordered basis
- form the reduced row echelon of the system
- right matrix excluding zero rows equal transition matrix 
- jth column of transition matrix equal jth vector of B expressed as C-coordinates

---
### transition matrix formula
$$
\begin{aligned}
\text{RREF}(C \mid B) = I \mid P_{BC} \\
C = \text{2nd ordered basis} \\
B = \text{1st ordered basis} \\
I = \text{identity matrix} \\
P = \text{transition matrix}
\end{aligned}
$$

---
### coordinatization standard property
- coordinatization with respect to standard basis equal coordinatized vector

---
### coordinatization standard property formula
$$
\begin{aligned}
{}[\vec v]_{S} = \vec v \\
\vec v = \text{coordinatized vector} \\
S = \text{standard basis}
\end{aligned}
$$

---
### coordinatization arithmetic property
- vector addition
- scalar multiplication
- linearity

---
### coordinatization arithmetic property formula
$$
\begin{aligned}
{}[\vec v_{1} + \vec v_{2}]_{B} = [\vec v_{1}]_{B} + [\vec v_{2}]_{B} \\
{}[c\vec v]_{B} = c[\vec v]_{B} \\
{}[\sum_{i=1}^k c_{i}\vec v_{i}]_{B} = \sum_{i=1}^k c_{i}[\vec v_{i}]_{B}
\end{aligned}
$$

---
### transition matrix multiplication property
- transition matrix multiplication with vector of 1st basis equal vector of 2nd basis

---
### transition matrix multiplication property formula
$$
\begin{aligned}
P_{BC} \iff \forall \vec v \in \mathcal V: [\vec v]_{C} = P_{BC}[\vec v]_{B} \\
P = \text{transition matrix} \\
B, C = \text{ordered basis} \\
\vec v = \text{coordinatized vector} \\
\mathcal V = \text{vector space} \\
{}[\vec v]_{B}, [\vec v]_{C} = \text{coordinate vector} 
\end{aligned}
$$

---
### transition matrix transition property
- $n$th transition matrix multiplication with ($n-1$)th transition matrix equal vector of nth basis

---
### transition matrix transition property formula
$$
\begin{aligned}
([\vec v]_{C} = P_{BC}[\vec v]_{B}) \land ([\vec v]_{D} = Q_{CD}[\vec v]_{C}) \implies ([\vec v]_{D} = Q_{CD}P_{BC}[\vec v]_{B}) \\
\vec v = \text{coordinatized vector} \\
{}[\vec v]_{B}, [\vec v]_{C}, [\vec v]_{D} = \text{coordinate vector} \\
B, C, D = \text{ordered basis} \\
P, Q = \text{transition matrix}
\end{aligned}
$$

---
### transition matrix inversion property
- inverse transition matrix multiplication with vector of 2nd basis equal vector of 1st basis

---
### transition matrix inversion property formula
$$
\begin{aligned}
{}[\vec v]_{C} = P_{BC}[\vec v]_{B} \implies (|P| \ne 0) \land ([\vec v]_{B} = P_{BC}^{-1}[\vec v]_{C}) \\
\vec v = \text{coordinatized vector} \\
{}[\vec v]_{B}, [\vec v]_{C} = \text{coordinate vector} \\
B, C = \text{ordered basis} \\
P = \text{transition matrix} \\
P^{-1} = \text{inverse transition matrix} 
\end{aligned}
$$

---
### transition matrix diagonalization property
- fundamental eigenvectors of diagonalizable matrix equal basis of $n$-dimensional real numbers
- eigenmatrix equal transition matrix from B-coordinates to S-coordinates

---
### transition matrix diagonalization property formula
$$
\begin{aligned}
{}[\vec v]_{S} = P[\vec v]_{B} \\
D[\vec v]_{B} = [A\vec v]_{B} \\
\vec v = \text{coordinatized vector} \\
{}[\vec v]_{S}, [\vec v]_{B}, [A\vec v]_{B} = \text{coordinate vector} \\
S = \text{standard ordered basis} \\
B = \text{ordered basis} \\
P = \text{eigenmatrix} \\
D = \text{diagonal matrix} \\
A = \text{square matrix}
\end{aligned}
$$

---
