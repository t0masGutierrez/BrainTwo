### scalar
- quantity with magnitude

---
### scalar formula
$$
\begin{array}{l}
c\in\mathbb R\\
c=\text{scalar}
\end{array}
$$

---
### vector
- quantity with both magnitude and direction
![[3 Calculus/Images/vector.png|200]]

---
### vector formula
$$
\begin{array}{l}
\vec A\in\mathbb R^2\\
\vec A=\text{vector}
\end{array}
$$

---
### unit vector
- vector with magnitude of 1 that specify direction without scaling
![[4 Physics/Images/unit vector.png|300]]

---
### unit vector formula
$$
\begin{array}{l}
\hat{i}=\frac{\vec{A_{x}}}{A_{x}}\\
\hat{j}=\frac{\vec{A_{y}}}{A_{y}}\\
\vec A_{x},\vec A_{y}=\text{vector component}\\
A_{x},A_{y}=\text{scalar component}
\end{array}
$$

---
### component
- horizontal change equal *x* component
- vertical change equal *y* component
![[4 Physics/Images/component.png|300]]

---
### component formula
$$
\begin{array}{l}
\vec{A}=\vec A_{x}+\vec A_{y}=A_{x}\hat{i}+A_{y}\hat{j}=\begin{bmatrix}
A_x\\A_y
\end{bmatrix}=\begin{bmatrix}
\|\vec A\|\cos(\theta)\\\|\vec A\|\sin(\theta)
\end{bmatrix}\\
\vec A_{x},\vec A_{y}=\text{vector component}\\
A_{x},A_{y}=\text{scalar component}\\
\hat{i},\hat j=\text{unit vector}\\
\|\vec A\|=\text{magnitude}\\
\theta=\text{direction}
\end{array}
$$

---
### magnitude
- distance from the origin

---
### magnitude formula
$$
\begin{array}{l}
\|\vec A\|=\sqrt{\sum_{i=1}^nA_{i}^{2}}\\
A_{i}=\text{scalar component}
\end{array}
$$

---
### direction
- counterclockwise angle between axis and vector
- left right up down

---
### direction formula
$$
\begin{array}{l}
\theta=\begin{cases}
\arctan(\frac{A_{y}}{A_{x}}),\ A_{x}>0\\
\arctan(\frac{A_{y}}{A_{x}})+180^{\circ},\ A_{x}<0
\end{cases}\\
A_{x},A_{y}=\text{scalar component}
\end{array}
$$

---
### vector equality property
- equal magnitude and equal direction

---
### vector equality property formula
$$
\begin{array}{l}
\vec{A}=\vec{B}\iff
\begin{cases}
A_{x}=B_{x}\\
A_{y}=B_{y}
\end{cases}\\
\vec A,\vec B=\text{vector}\\
A_{x},B_{y}=\text{scalar component}
\end{array}
$$

---
### vector arithmetic property
- commutative
- associative
- identity
- inverse
- distributive

---
### vector arithmetic property formula
$$
\begin{array}{l}
\vec A+\vec B=\vec B+\vec A\\
(\vec A+\vec B)+\vec C=\vec A+(\vec B+\vec C)\\
\vec A+0=\vec A\\
1\cdot\vec A=\vec A\\
\vec A+(-\vec A)=0\\
0\cdot\vec A=0\\
c(\vec A+\vec B)=c\vec A+c\vec B
\end{array}
$$

---
### scalar multiplication
- scalar quantity multiplication with vector
- if negative scalar then direction addition with 180 or negate vector component

---
### scalar multiplication formula
$$
\begin{array}{l}
c\vec{A}=cA_{x}\hat{i}+cA_{y}\hat{j}\\
c=\text{scalar}\\
A_{x},A_{y}=\text{scalar component}\\
\hat{i},\hat j=\text{unit vector}
\end{array}
$$

---
### vector addition
- vector component addition with corresponding vector component

---
### vector addition formula
$$
\begin{array}{l}
\vec{R}=(A_{x}+B_{x})\hat{i}+(A_{y}+B_{y})\hat{j}\\
A_{x},B_{y}=\text{scalar component}\\
\hat i,\hat j=\text{unit vector}
\end{array}
$$

---
### triangle vector addition
- vector *B* starts where vector *A* ends
- vector sum *C* equal diagonal from where vector *A* starts to where vector *B* ends
![200](3%20Calculus/Images/triangle%20vector%20addition.png)

---
### parallelogram vector addition
- both vectors start from the origin
- construct two parallel vectors
- vector sum *C* equal diagonal from the origin to where the parallel vectors intersect
![200](3%20Calculus/Images/parallelogram%20vector%20addition.png)

---
### dot product
- scalar quantity of similarity between two vectors
![[3 Calculus/Images/dot product.png]]

---
### dot product formula
$$
\begin{array}{l}
\vec{A}\cdot\vec{B}=(\|\vec A\|)(\|\vec B\|)\cos(\theta)=A_{x}B_{x}+A_{y}B_{y}\\
\|\vec A\|,\|\vec B\|=\text{magnitude}\\
\theta=\text{direction}\\
A_{x},B_{y}=\text{scalar component}
\end{array}
$$

---
### unit vector dot product
- scalar quantity of similarity between two perpendicular unit vectors equal zero

---
### unit vector dot product formula
$$
\begin{array}{l}
\hat{i}\cdot\hat{j}=\hat{j}\cdot\hat{k}=\hat{k}\cdot\hat{i}=0\\
\hat i,\hat j,\hat k=\text{unit vector}
\end{array}
$$

---
### dot product direction property
- acute angles equal positive dot product
- obtuse angles equal negative dot product
- perpendicular vectors equal zero
- parallel vectors equal product of magnitude
- antiparallel vectors equal negative product of magnitude

---
### dot product direction property formula
$$
\begin{array}{l}
0^{\circ}\le\theta<90^{\circ}\iff\vec A\cdot\vec B>0\\
90^{\circ}\le\theta<180^{\circ}\iff\vec A\cdot\vec B<0\\
\theta=90^{\circ}\iff\vec A\cdot\vec B=0\\
\theta=0^{\circ}\iff\vec A\cdot\vec B=(\|\vec A\|)(\|\vec B\|)\\
\theta=180^{\circ}\iff\vec A\cdot\vec B=-(\|\vec A\|)(\|\vec B\|)
\end{array}
$$

---
### cross product
- vector quantity of dissimilarity between two vectors
![[4 Physics/Images/cross product.png|300]]

---
### cross product formula
$$
\begin{array}{l}
\|\vec{A}\times\vec{B}\|=(\|\vec A\|)(\|\vec B\|)\sin(\theta)\\
\vec{A}\times\vec{B}=(A_{y}B_{z}-A_{z}B_{y})\hat{i}+(A_{z}B_{x}-A_{x}B_{z})\hat{j}+(A_{x}B_{y}-A_{y}B_{x})\hat{k}\\
\|\vec A\|,\|\vec B\|=\text{magnitude}\\
\theta=\text{direction}\\
A_{x},B_{x}=\text{x scalar component}\\
\hat i=\text{x unit vector}\\
A_{y},B_{y}=\text{y scalar component}\\
\hat j=\text{y unit vector}\\
A_{z},B_{z}=\text{z scalar component}\\
\hat k=\text{z unit vector}
\end{array}
$$

---
### unit vector cross product
- horizontal cross vertical equal longitudinal
- vertical cross longitudinal equal horizontal
- longitudinal cross horizontal equal vertical
![400](3%20Calculus/Images/unit%20vector%20cross%20product.png)

---
### unit vector cross product formula
$$
\begin{array}{l}
\hat{i}\times\hat{j}=\hat{k}\\
\hat{j}\times\hat{k}=\hat{i}\\
\hat{k}\times\hat{i}=\hat{j}\\
\hat i,\hat j,\hat k=\text{unit vector}
\end{array}
$$

---
### cross product direction property
- perpendicular vectors equal product of magnitude
- parallel vectors equal zero
- antiparallel vectors equal zero
- same vectors equal zero

---
### cross product direction property formula
$$
\begin{array}{l}
\theta=90^{\circ}\iff\|\vec A\times\vec B\|=(\|\vec A\|)(\|\vec B\|)\\
\theta=0^{\circ}\implies\|\vec A\times\vec B\|=0\\
\theta=180^{\circ}\implies\|\vec A\times\vec B\|=0\\
\vec A=\vec B\iff\|\vec A\times\vec B\|=0
\end{array}
$$

---
### right hand rule
- point hand to vector *A*
- curl palm to vector *B*
- point thumb to vector $A\times B$
![[4 Physics/Images/right hand rule.png|200]]

---
### right hand rule formula
$$
\begin{array}{l}
C\perp(A\hookrightarrow B)\\
-C\perp(A\hookleftarrow B)
\end{array}
$$

---
