### action
- if known action of linear transformation on domain basis then known action of linear transformation on domain because every vector equal linear combination of basis vector

---
### action formula
$$
\begin{aligned}
(L: \mathcal V \rightarrow \mathcal W) \land (B = \set{\vec b_{1}, \dots, \vec b_{n}}) \implies \\
\forall \vec v \in \mathcal V: L(\vec v) = L(\sum_{i=1}^n c_{i}\vec b_{i}) = \sum_{i=1}^n c_iL(\vec b_{i}) \\
L = \text{linear transformation} \\
\mathcal V = \text{domain vector space} \\
\mathcal W = \text{codomain vector space} \\
B =\text{basis} \\
c =\text{scalar} \\
\vec b = \text{basis vector} \\
\vec v = \text{preimage} \\
\vec L(\vec v) = \text{image} 
\end{aligned}
$$

---
### matrix transformation
- image as C-coordinates equal matrix multiplication with preimage as B-coordinates
- jth column of matrix transformation equal jth basis image expressed as C-coordinates

---
### matrix transformation formula
$$
\begin{aligned}
(L : \mathcal V \rightarrow \mathcal W) \land (B = \set{\vec b_{1}, \dots, \vec b_{n}}) \land (C = \set{\vec c_{1}, \dots \vec c_{m}}) \implies \\
\forall \vec v \in \mathcal V: [L(\vec v)]_{C} = A_{BC} [\vec v]_{B} \\
\dim (\mathcal V) = n \\
\dim (\mathcal W) = m \\
|A_{BC}| = m \times n \\
L = \text{linear transformation} \\
\mathcal V  = \text{domain vector space} \\
\mathcal W  = \text{codomain vector space} \\
B = \text{domain basis} \\
\vec b = \text{domain basis vector} \\
C = \text{codomain basis} \\
\vec c = \text{codomain basis vector} \\
{}[L(\vec v)]_{C} = \text{image coordinate vector} \\
{}[\vec v]_{B} = \text{preimage coordinate vector} \\
A = \text{matrix transformation} 
\end{aligned}
$$

---
### terminology
- matrix $A_{BC}$ equal matrix $A$ of the linear transformation $L$ with respect to the domain basis $B$ and codomain basis $C$ 

---
### matrix transformation transition property
- matrix transformation with change of coordinates

---
### matrix transformation transition property formula
$$
\begin{aligned}
(L : \mathcal V \rightarrow \mathcal W) \land ([\vec v]_{D} = P_{BD}[\vec v]_{B}) \land ([L(\vec v)]_{E} = Q_{CE}[L(\vec v)]_{C}) \implies A_{DE} = Q_{CE}A_{BC}P_{BD}^{-1} \\
L = \text{linear transformation} \\
\mathcal V  = \text{domain vector space} \\
\mathcal W  = \text{codomain vector space} \\
B, D = \text{domain basis} \\
C, E = \text{codomain basis} \\
{}[\vec v]_{B}, [\vec v]_{D} = \text{preimage coordinate vector} \\
{}[L(\vec v)]_{C}, [L(\vec v)]_{E} = \text{image coordinate vector} \\
P = \text{domain transition matrix} \\
Q = \text{codomain transition matrix} \\
A = \text{matrix transformation} 
\end{aligned}
$$

---
### matrix transformation similarity property
- matrices representing the same linear operator with respect to different bases equal similar matrices

---
### matrix transformation similarity property formula
$$
\begin{aligned}
(L : \mathcal V \rightarrow \mathcal V) \land ([L(\vec v)]_{B} = A_{BB}[\vec v]_{B}) \land ([L(\vec v)]_{D} = A_{DD}[\vec v]_{D}) \land ([\vec v]_{D} = P_{BD}[\vec v]_{B}) \implies A_{BB} \sim A_{DD} \\
A_{BB} =  P_{BD}^{-1}A_{DD}P_{BD} \\
A_{DD} =  P_{BD}A_{BB} P_{BD}^{-1} \\
L = \text{linear transformation} \\
\mathcal V = \text{vector space} \\
{}[\vec v]_{B}, [\vec v]_{D} = \text{coordinate vector} \\
\vec v = \text{coordinatized vector} \\
B, D = \text{basis} \\
P = \text{transition matrix} \\
P^{-1} = \text{inverse transition matrix} 
\end{aligned}
$$

---
### matrix transformation composite property
- composition of matrix transformation equal matrix transformation

---
### matrix transformation composite property formula
$$
\begin{aligned}
(L_{1} : \mathcal V_{1} \rightarrow \mathcal V_{2}) \land (L_{2} : \mathcal V_{2} \rightarrow \mathcal V_{3}) \implies L_{2} \circ L_{1} : \mathcal V_{1} \rightarrow \mathcal V_{3} \\
([L(\vec v_{1})]_{C} = A_{BC}[\vec v_{1}]_{B}) \land ([L(\vec v_{2})]_{D} = A_{CD}[\vec v_{2}]_{C}) \implies A_{BD} = A_{CD}A_{BC} \\
L = \text{linear transformation} \\
\mathcal V = \text{vector space} \\
B = \text{1st basis} \\
C = \text{2nd basis} \\
D = \text{3rd basis} \\
{}[\vec v_{1}]_{B}, [\vec v_{2}]_{C} = \text{preimage coordinate vector} \\
{}[L(\vec v_{1})]_{C}, [L(\vec v_{2})]_{D} = \text{image coordinate vector} \\
A = \text{matrix transformation}
\end{aligned}
$$

---
