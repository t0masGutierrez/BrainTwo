### scalar
- quantity with magnitude

---
### vector
- quantity with both magnitude and direction

---
### unit vector
- vector with magnitude of 1 that specify direction without scaling
![[9 Calculus/Images/unit vector.png|300]]

---
### unit vector formula
$$
\begin{aligned}
\hat{i} = \frac{\vec{A_{x}}}{A_{x}} \\ 
\hat{j} = \frac{\vec{A_{y}}}{A_{y}}
\end{aligned}
$$

---
### component
- horizontal change equal *x* component
- vertical change equal *y* component
![[8 Physics/Images/component.png|500]]

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
\vec{A} = A_{x}\hat{i} + A_{y}\hat{j} \\
A_{x} = \text{x scalar component} \\
\hat{i} = \text{x direction} \\
A_{y} = \text{y scalar component} \\
\hat{j} = \text{y direction}
\end{aligned}
$$

---
### magnitude
- distance from origin

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
\theta = \arctan (\frac{A_{y}}{A_{x}}) \\
A_{x} = \text{x scalar component} \\
A_{y} = \text{y scalar component}
\end{aligned}
$$

---
### inverse tangent range
- $[\frac{-\pi}{2} \le \theta \le \frac{\pi}{2}] = [-90 \le \theta \le 90] = Q_{1} \lor Q_{4}$  
- if $A_{x} < 0$ then 180 addition with direction
![[8 Physics/Images/inverse tangent range.png]]

---
### vector equality
- if $A \ne B$ then unequal magnitude or unequal direction

---
### vector equality formula
$$
\begin{aligned}
\vec{A} = \vec{B} \iff
\begin{cases}
A_{x} = B_{x} \\
A_{y} = B_{y}
\end{cases}
\end{aligned}
$$

---
### vector property
- commutative
- associative
- additive identity
- additive inverse
- distributive
- multiplicative identity
- multiplicative zero

---
### vector property formula
$$
\begin{aligned}
\vec A + \vec B = \vec B + \vec A \\
(\vec A + \vec B) + \vec C = \vec A + (\vec B + \vec C) \\
\vec A + 0 = \vec A \\
\vec A + (-\vec A) = 0 \\
c(\vec A + \vec B) = c\vec A + c\vec B \\
1(\vec A) = \vec A \\
0(\vec A) = 0
\end{aligned}
$$

---
### scalar multiplication
- scalar quantity multiplication with vector component
- if negative scalar quantity then 180 addition with direction or negate vector component

---
### scalar multiplication formula
$$
\begin{aligned}
a\vec{A} = aA_{x}\hat{i} + aA_{y}\hat{j} \\
a = \text{scalar quantity} \\
A_{x} \hat i = \text{x vector component} \\
A_{y} \hat j = \text{y vector component}
\end{aligned}
$$

---
### vector addition
- vector *A* components addition with corresponding vector *B* components equal resultant vector *R* 

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
![[8 Physics/Images/graphical vector addition.png]]

---
### parallelogram vector addition
- both vectors start at the same origin
- construct two parallel vectors
- vector sum *C* equal diagonal from origin to where parallel vectors intersect
![[8 Physics/Images/parallelogram vector addition.png]]

---
### graphical vector subtraction
- antiparallel vector *B* starts where vector *A* ends
- vector sum equal diagonal from where vector *A* starts to where antiparallel vector *B* ends
![[8 Physics/Images/graphical vector subtraction.png|300]]

---
### dot product
- scalar quantity of similarity between two vectors
- aka scalar product
![[9 Calculus/Images/dot product.png]]

---
### dot product formula
$$
\begin{aligned}
\vec{A} \cdot \vec{B} = AB \cos (\theta) \\
A = \text{magnitude} \\
\theta = \text{angle between vectors}
\end{aligned}
$$

---
### dot product formula
$$
\begin{aligned}
\vec{A} \cdot \vec{B} = A_xB_{x} + A_yB_{y} + A_zB_{z} \\
A_{x} = \text{x scalar component} \\
A_{y} = \text{y scalar component} \\
A_{z} = \text{z scalar component}
\end{aligned}
$$

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
- aka vector product
![[8 Physics/Images/cross product.png]]

---
### cross product formula
$$
\begin{aligned}
|\vec{A} \times \vec{B}| = AB \sin (\theta) \\
A = \text{magnitude} \\
\theta = \text{angle between vectors}
\end{aligned}
$$

---
### cross product formula
$$
\begin{aligned}
\vec{A} \times \vec{B} = (A_yB_{z} - A_zB_{y})\hat{i} - (A_xB_{z} - A_zB_{x})\hat{j} + (A_xB_{y} - A_yB_{x})\hat{k} \\
A_{x} = \text{x scalar component} \\
\hat i = \text{x direction} \\
A_{y} = \text{y scalar component} \\
\hat j = \text{y direction} \\
A_{z} = \text{z scalar component} \\
\hat k = \text{z direction}
\end{aligned}
$$

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
### triple scalar product
- scalar quantity of parallelogram volume between three vectors
![[8 Physics/Images/triple scalar product.png]]

---
### scalar triple product formula
$$
\begin{aligned}
V = \vec{C} \cdot (\vec{A} \times \vec{B}) = \vec C\begin{vmatrix}
\hat i & \hat j & \hat k \\
A_{x} & A_{y} & A_{z} \\
B_{x} & B_{y} & B_{z}
\end{vmatrix} \\
A_{x} = \text{x scalar component} \\
B_{y} = \text{y scalar component} \\
C_{z} =  \text{z scalar component}
\end{aligned}
$$

---
### parallel projection vector
- parallel projection of $\vec A$ onto $\vec B$ equal vector component of $\vec A$ parallel $\vec B$ 

---
### parallel projection vector formula
$$
\begin{aligned}
\text{proj}_{\vec B}(\vec A\parallel) = (\frac{\vec A \cdot \vec B}{B^2}) \cdot \vec B
\end{aligned}
$$

---
### perpendicular projection vector
- perpendicular projection of $\vec A$ onto $\vec B$ equal vector component of $\vec A$ perpendicular $\vec B$ 

---
### perpendicular projection vector formula
$$
\begin{aligned}
\text{proj}_{\vec B}(\vec A\perp) = \vec A - (\frac{\vec A \cdot \vec B}{B^2}) \cdot \vec B
\end{aligned}
$$

---
### 3d coordinate system
- x dimension
- y dimension
- z dimension
![[9 Calculus/Images/3 dimension coordinate system.png|300]]

---
### linear direction angle
- angle between lines

---
### linear direction angle formula
$$
\begin{aligned}
\cos(\alpha) = \frac{v_{x}}{v} \\
\cos(\beta) = \frac{v_{y}}{v} \\
\cos(\gamma) = \frac{v_{z}}{v} 
\end{aligned}
$$

---
### linear direction vector
- vector parallel line
![[9 Calculus/Images/linear direction vector.png]]

---
### linear direction vector formula
$$
\begin{aligned}
\vec v = \vec{P_0P} = \langle x - x_{0}, y - y_{0}, z - z_{0} \rangle = \langle a, b, c \rangle \\
a = \text{x scalar component} \\
b = \text{y scalar component} \\
c = \text{z scalar component}
\end{aligned}
$$

---
### vector equation of 3d line
- for all parameters there exists distinct position vector that corresponds with point on line
![[9 Calculus/Images/vector equation of 3d line.png]]

---
### vector formula of 3d line
$$
\begin{aligned}
\langle x, y, z \rangle = \langle x_{0}, y_{0}, z_{0} \rangle + t \langle a, b, c \rangle \\
\vec r = \langle x, y, z \rangle \\
\vec r_{0} = \langle x_{0}, y_{0}, z_{0} \rangle \\
t = \text{parameter} \\
\vec v = \langle a, b, c \rangle
\end{aligned}
$$

---
### parametric equation of 3d line
- for all parameters there exists distinct position vector that corresponds with point on line
![[9 Calculus/Images/parametric equation of 3d line.png]]

---
### parametric equation of 3d line
$$
\begin{aligned}
x = x_{0} + at \\
y = y_{0} + bt \\
z = z_{0} + ct \\
x = \text{x scalar component} \\
y = \text{y scalar component} \\
z = \text{z scalar component}
\end{aligned}
$$

---
### planar direction angle
- angle between planes

---
### planar direction angle formula
$$
\begin{aligned}
\cos(\theta) = \frac{\vec v_{1} \cdot \vec v_{2}}{v_1v_{2}} \\
\end{aligned}
$$

---
### planar direction vector
- vector perpendicular plane
![[9 Calculus/Images/planar direction vector.png]]

---
### planar direction vector formula
$$
\begin{aligned}
\vec v = \vec{P_0P} \perp = \vec{P_0P_{1}} \times \vec{P_0P_{2}} = \langle a, b, c \rangle \\
a = \text{x scalar component} \\
b = \text{y scalar component} \\
c = \text{z scalar component}
\end{aligned}
$$

---
### vector equation of 3d plane
- for all directions there exists distinct position vector that corresponds with point on plane
![[9 Calculus/Images/vector equation of 3d plane.png]]

---
### vector formula of 3d plane
$$
\begin{aligned}
\vec v \cdot (\vec r - \vec r_{0}) = 0
\end{aligned}
$$

---
### scalar equation of 3d plane
- for all directions there exists distinct position vector that corresponds with point on plane

---
### scalar formula of 3d plane
$$
\begin{aligned}
a(x - x_{0}) + b(y - y_{0}) + c(z - z_{0}) = 0
\end{aligned}
$$

---
### parallel plane
- scalar multiple of direction vector
![[9 Calculus/Images/parallel plane.png]]

---
### perpendicular plane
- dot product of direction vector equal zero
![[9 Calculus/Images/perpendicular plane.png]]

---
### intersecting plane
- intersection equal 3d line
![[9 Calculus/Images/intersecting plane.png]]

---
### linear distance
- length between point and line

---
### linear distance formula
$$
\begin{aligned}
d = \frac{|\vec v \times \vec {P_0P}|}{v}
\end{aligned}
$$

---
### planar distance
- length between point and plane

---
### planar distance formula
$$
\begin{aligned}
d = \frac{|c_{2} - c_{1}|}{v}
\end{aligned}
$$

---
