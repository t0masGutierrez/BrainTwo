### scalar
- quantity with magnitude

---
### vector
- quantity with both magnitude and direction
![[9 Calculus/Images/vector.png|256]]

---
### unit vector
- vector with magnitude of 1 that specify direction without scaling
![300](8%20Physics/Images/unit%20vector.png)

---
### unit vector formula
$$
\begin{aligned}
\hat{i} = \frac{\vec{A_{x}}}{A_{x}} \\ 
\hat{j} = \frac{\vec{A_{y}}}{A_{y}} \\
\vec A_{x}, \vec A_{y} = \text{vector component} \\
A_{x}, A_{y} = \text{scalar component}
\end{aligned}
$$

---
### component
- horizontal change equal *x* component
- vertical change equal *y* component
![[8 Physics/Images/component.png|256]]

---
### scalar component formula
$$
\begin{aligned}
A_{x} = A \cos (\theta) \\
A_{y} = A \sin (\theta) \\
A = \text{magnitude} \\
\theta = \text{direction}
\end{aligned}
$$

---
### vector component formula
$$
\begin{aligned}
\vec{A} = \vec A_{x} + \vec A_{y} = A_{x}\hat{i} + A_{y}\hat{j} \\
\vec A_{x} = \text{x vector component} \\
\vec A_{y} = \text{y vector component} \\
A_{x} = \text{x scalar component} \\
A_{y} = \text{y scalar component} \\
\hat{i} = \text{x direction} \\
\hat{j} = \text{y direction}
\end{aligned}
$$

---
### magnitude
- distance from the origin

---
### magnitude formula
$$
\begin{aligned}
A = \sqrt{A_{x}^2 + A_{y}^2} \\
A_{x} = \text{x scalar component} \\
A_{y} = \text{y scalar component}
\end{aligned}
$$

---
### direction
- counterclockwise angle between axis and vector
- left right up down

---
### direction formula
$$
\begin{aligned}
\theta = \begin{cases}
\arctan (\frac{A_{y}}{A_{x}}), \ A_{x} > 0 \\
\arctan (\frac{A_{y}}{A_{x}}) + 180^\circ, \ A_{x} < 0  
\end{cases} \\
A_{y} = \text{y scalar component} \\
A_{x} = \text{x scalar component} 
\end{aligned}
$$

---
### inverse tangent range
- 1st quadrant or 4th quadrant
![[8 Physics/Images/inverse tangent range.png|256]]

---
### inverse tangent range formula
$$
\begin{aligned}
{}[\frac{-\pi}{2} \le \theta \le \frac{\pi}{2}] = [-90 \le \theta \le 90] \\
\theta = \text{direction}
\end{aligned}
$$

---
### scalar multiplication
- scalar quantity multiplication with vector
- if negative scalar then direction addition with 180 or negate vector component

---
### scalar multiplication formula
$$
\begin{aligned}
c\vec{A} = cA_{x}\hat{i} + cA_{y}\hat{j} \\
c = \text{scalar} \\
A_{x} = \text{x scalar component} \\
\hat{i} = \text{x direction} \\
A_{y} = \text{y scalar component} \\
\hat{j} = \text{y direction}
\end{aligned}
$$

---
### vector addition
- vector *A* component(s) addition with corresponding vector *B* component(s)

---
### vector addition formula
$$
\begin{aligned}
\vec{R} = (A_{x} + B_{x})\hat{i} + (A_{y} + B_{y})\hat{j} \\
A_{x} = \text{x scalar component} \\
\hat i = \text{x direction} \\
A_{y} = \text{y scalar component} \\
\hat j = \text{y direction} \\
\end{aligned}
$$

---
### graphical vector addition
- vector *B* starts where vector *A* ends
- vector sum *C* equal diagonal from where vector *A* starts to where vector *B* ends
![256](8%20Physics/Images/graphical%20vector%20addition.png)

---
### parallelogram vector addition
- both vectors start from the origin
- construct two parallel vectors
- vector sum *C* equal diagonal from the origin to where the parallel vectors intersect
![256](8%20Physics/Images/parallelogram%20vector%20addition.png)

---
### dot product
- scalar quantity of similarity between two vectors
![[9 Calculus/Images/dot product.png]]

---
### dot product formula
$$
\begin{aligned}
\vec{A} \cdot \vec{B} = (|A|)(|B|) \cos (\theta) = A_xB_{x} + A_yB_{y} + A_zB_{z} \\
|A|, |B| = \text{magnitude} \\
\theta = \text{angle between vectors} \\
A_{x}, B_{x} = \text{x scalar component} \\
A_{y}, B_{y} = \text{y scalar component} \\
A_{z}, B_{z} = \text{z scalar component} 
\end{aligned}
$$

---
### unit vector dot product
- scalar quantity of similarity between two perpendicular unit vectors equal zero

---
### unit vector dot product formula
$$
\begin{aligned}
\hat{i} \cdot \hat{j} = \hat{j} \cdot \hat{k} = \hat{k} \cdot \hat{i} = 0 \\
\hat i = \text{x direction} \\
\hat j = \text{y direction} \\
\hat k = \text{z direction}
\end{aligned}
$$

---
### cross product
- vector quantity of dissimilarity between two vectors
![256](8%20Physics/Images/cross%20product.png)

---
### scalar cross product formula
$$
\begin{aligned}
|\vec{A} \times \vec{B}| = (|A|)(|B|) \sin (\theta) \\
|A|, |B| = \text{magnitude} \\
\theta = \text{angle between vectors}
\end{aligned}
$$

---
### vector cross product formula
$$
\begin{aligned}
\vec{A} \times \vec{B} = (A_yB_{z} - A_zB_{y})\hat{i} + (A_zB_{x} - A_xB_{z})\hat{j} + (A_xB_{y} - A_yB_{x})\hat{k} \\
A_{x}, B_{x} = \text{x scalar component} \\
\hat i = \text{x direction} \\
A_{y}, B_{y} = \text{y scalar component} \\
\hat j = \text{y direction} \\
A_{z}, B_{z} = \text{z scalar component} \\
\hat k = \text{z direction}
\end{aligned}
$$

---
### unit vector cross product
- horizontal cross vertical equal longitudinal
- vertical cross longitudinal equal horizontal
- longitudinal cross horizontal equal vertical

---
### unit vector cross product formula
$$
\begin{aligned}
\hat{i} \times \hat{j} = \hat{k} \\
\hat{j} \times \hat{k} = \hat{i} \\
\hat{k} \times \hat{i} = \hat{j} \\
\hat i = \text{x direction} \\
\hat j = \text{y direction} \\
\hat k = \text{z direction}
\end{aligned}
$$

---
### right hand rule
- point hand to vector *A*
- curl palm to vector *B*
- point thumb to vector $A \times B$
![256](8%20Physics/Images/right%20hand%20rule.png)

---
### right hand rule formula
$$
\begin{aligned}
C \perp A \hookrightarrow B \\
-C \perp A \hookleftarrow B
\end{aligned}
$$

---
### vector equality property
- equal magnitude and equal direction

---
### vector equality property formula
$$
\begin{aligned}
\vec{A} = \vec{B} \iff
\begin{cases}
A_{x} = B_{x} \\
A_{y} = B_{y}
\end{cases} \\
\vec A, \vec B = \text{vector} \\
A_{x}, B_{x} = \text{x scalar component} \\
A_{y}, B_{y} = \text{y scalar component}
\end{aligned}
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
\begin{aligned}
\vec A + \vec B = \vec B + \vec A \\
(\vec A + \vec B) + \vec C = \vec A + (\vec B + \vec C) \\
\vec A + 0 = \vec A \\
1 \cdot \vec A = \vec A \\
\vec A + (-\vec A) = 0 \\
0 \cdot \vec A = 0 \\
c(\vec A + \vec B) = c\vec A + c\vec B
\end{aligned}
$$

---
### dot product direction property
- acute angle equal positive dot product
- obtuse angle equal negative dot product
- perpendicular vectors equal zero
- parallel vectors equal product of magnitude
- anti parallel vectors equal negative product of magnitude
- same vectors equal squared magnitude

---
### dot product direction property formula
$$
\begin{aligned}
0^\circ \le \theta < 90^\circ \iff \vec A \cdot \vec B > 0 \\
90^\circ \le \theta < 180^\circ \iff \vec A \cdot \vec B < 0 \\
\theta = 90^\circ \iff \vec A \cdot \vec B = 0 \\
\theta = 0^\circ \iff \vec A \cdot \vec B = AB \\
\theta = 180^\circ \iff \vec A \cdot \vec B = -AB \\
\vec A = \vec B \implies (\theta = 0^\circ) \land (\vec A \cdot \vec B = A^2)
\end{aligned}
$$

---
### cross product direction property
- perpendicular vectors equal product of magnitude
- parallel vectors equal zero
- anti parallel vectors equal zero
- same vectors equal zero

---
### cross product direction property formula
$$
\begin{aligned}
\theta = 90^\circ &\iff \| \vec A \times \vec B \| = (|A|)(|B|) \\  
\theta = 0^\circ &\iff \| \vec A \times \vec B \| = 0 \\  
\theta = 180^\circ &\iff \| \vec A \times \vec B \| = 0 \\
\vec A = \vec B &\implies (\theta = 0^\circ) \land (\| \vec A \times \vec B \| = 0)
\end{aligned}
$$

---
