### scalar
- quantity with magnitude

---
### vector
- quantity with both magnitude and direction

---
### unit vector
- vector with magnitude of 1 that specify direction without scaling
![[4 Physics/Images/unit vector.png|300]]

---
### unit vector formula
$$
\begin{aligned}
\hat{i}=\frac{\vec{A_{x}}}{A_{x}}\\
\hat{j}=\frac{\vec{A_{y}}}{A_{y}}\\
\vec A_{x},\vec A_{y}=\text{vector component}\\
A_{x},A_{y}=\text{scalar component}
\end{aligned}
$$

---
### component
- horizontal change equal *x* component
- vertical change equal *y* component
![[4 Physics/Images/component.png|300]]

---
### scalar component formula
$$
\begin{aligned}
A_{x}=A\cos(\theta)\\
A_{y}=A\sin(\theta)\\
A=\text{magnitude}\\
\theta=\text{direction}
\end{aligned}
$$

---
### vector component formula
$$
\begin{aligned}
\vec{A}=\vec A_{x}+\vec A_{y}=A_{x}\hat{i}+A_{y}\hat{j}=\begin{bmatrix}A_x\\A_y\end{bmatrix}\\
\vec A_{x}=\text{x vector component}\\
\vec A_{y}=\text{y vector component}\\
A_{x}=\text{x scalar component}\\
A_{y}=\text{y scalar component}\\
\hat{i}=\text{x direction}\\
\hat{j}=\text{y direction}
\end{aligned}
$$

---
### magnitude
- distance from the origin

---
### magnitude formula
$$
\begin{aligned}
A=\sqrt{A_{x}^{2}+A_{y}^{2}}\\
A_{x}=\text{x scalar component}\\
A_{y}=\text{y scalar component}
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
\theta=\begin{cases}
\arctan(\frac{A_{y}}{A_{x}}),\ A_{x}>0\\
\arctan(\frac{A_{y}}{A_{x}})+180^{\circ},\ A_{x}<0
\end{cases}\\
A_{y}=\text{y scalar component}\\
A_{x}=\text{x scalar component}
\end{aligned}
$$

---
### inverse tangent range
- 1st quadrant or 4th quadrant
![[4 Physics/Images/inverse tangent range.png|300]]

---
### inverse tangent range formula
$$
\begin{aligned}
{}[\frac{-\pi}{2}\le\theta\le\frac{\pi}{2}]=[-90\le\theta\le90]\\
\theta=\text{direction}
\end{aligned}
$$

---
### scalar multiplication
- scalar quantity multiplication with vector
- if negative scalar then direction addition with 180 or negate vector component
![200](3%20Calculus/Images/scalar%20multiplication.png)

---
### scalar multiplication formula
$$
\begin{aligned}
c\vec{A}=cA_{x}\hat{i}+cA_{y}\hat{j}\\
c=\text{scalar}\\
A_{x}=\text{x scalar component}\\
\hat{i}=\text{x direction}\\
A_{y}=\text{y scalar component}\\
\hat{j}=\text{y direction}
\end{aligned}
$$

---
### vector addition
- vector *A* component(s) addition with corresponding vector *B* component(s)

---
### vector addition formula
$$
\begin{aligned}
\vec{R}=(A_{x}+B_{x})\hat{i}+(A_{y}+B_{y})\hat{j}\\
A_{x}=\text{x scalar component}\\
\hat i=\text{x direction}\\
A_{y}=\text{y scalar component}\\
\hat j=\text{y direction}\\
\end{aligned}
$$

---
### triangle vector addition
- vector *B* starts where vector *A* ends
- vector sum *C* equal diagonal from where vector *A* starts to where vector *B* ends
![[4 Physics/Images/triangle vector addition.png|300]]

---
### parallelogram vector addition
- both vectors start from the origin
- construct two parallel vectors
- vector sum *C* equal diagonal from the origin to where the parallel vectors intersect
![[4 Physics/Images/parallelogram vector addition.png|300]]

---
### dot product
- scalar quantity of similarity between two vectors
![[3 Calculus/Images/dot product.png]]

---
### dot product formula
$$
\begin{aligned}
\vec{A}\cdot\vec{B}=AB\cos(\theta)=A_{x}B_{x}+A_{y}B_{y}+A_{z}B_{z}\\
A,B=\text{magnitude}\\
\theta=\text{angle between vectors}\\
A_{x},B_{x}=\text{x scalar component}\\
A_{y},B_{y}=\text{y scalar component}\\
A_{z},B_{z}=\text{z scalar component}
\end{aligned}
$$

---
### unit vector dot product
- scalar quantity of similarity between two perpendicular unit vectors equal zero

---
### unit vector dot product formula
$$
\begin{aligned}
\hat{i}\cdot\hat{j}=\hat{j}\cdot\hat{k}=\hat{k}\cdot\hat{i}=0\\
\hat i=\text{x direction}\\
\hat j=\text{y direction}\\
\hat k=\text{z direction}
\end{aligned}
$$

---
### cross product
- vector quantity of dissimilarity between two vectors
![[4 Physics/Images/cross product.png|300]]

---
### scalar cross product formula
$$
\begin{aligned}
|\vec{A}\times\vec{B}|=AB\sin(\theta)\\
A,B=\text{magnitude}\\
\theta=\text{angle between vectors}
\end{aligned}
$$

---
### vector cross product formula
$$
\begin{aligned}
\vec{A}\times\vec{B}=(A_{y}B_{z}-A_{z}B_{y})\hat{i}+(A_{z}B_{x}-A_{x}B_{z})\hat{j}+(A_{x}B_{y}-A_{y}B_{x})\hat{k}\\
A_{x},B_{x}=\text{x scalar component}\\
\hat i=\text{x direction}\\
A_{y},B_{y}=\text{y scalar component}\\
\hat j=\text{y direction}\\
A_{z},B_{z}=\text{z scalar component}\\
\hat k=\text{z direction}
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
\hat{i}\times\hat{j}=\hat{k}\\
\hat{j}\times\hat{k}=\hat{i}\\
\hat{k}\times\hat{i}=\hat{j}\\
\hat i=\text{x direction}\\
\hat j=\text{y direction}\\
\hat k=\text{z direction}
\end{aligned}
$$

---
### triple scalar product
- volume of parallelepiped
![[4 Physics/Images/triple scalar product.png|400]]

---
### triple scalar product formula
$$
\begin{aligned}
V=\vec{A}\cdot(\vec{B}\times\vec{C})=\begin{vmatrix}
A_{x}&A_{y}&A_{z}\\
B_{x}&B_{y}&B_{z}\\
C_{x}&C_{y}&C_{z}\\
\end{vmatrix}\\
A_{x},B_{x},C_{x}=\text{x scalar component}\\
A_{y},B_{y},C_{y}=\text{y scalar component}\\
A_{z},B_{z},C_{z}=\text{z scalar component}
\end{aligned}
$$

---
### parallel projection vector
- parallel projection of $\vec A$ onto $\vec B$ equal vector component of $\vec A$ parallel $\vec B$

---
### parallel projection vector formula
$$
\begin{aligned}
\text{proj}_{\vec B}(\vec A\parallel)=(\frac{\vec A\cdot\vec B}{B^{2}})\cdot\vec B\\
\vec A,\vec B=\text{vector}\\
B=\text{magnitude}
\end{aligned}
$$

---
### perpendicular projection vector
- perpendicular projection of $\vec A$ onto $\vec B$ equal vector component of $\vec A$ perpendicular $\vec B$

---
### perpendicular projection vector formula
$$
\begin{aligned}
\text{proj}_{\vec B}(\vec A\perp)=\vec A-(\frac{\vec A\cdot\vec B}{B^{2}})\cdot\vec B\\
\vec A,\vec B=\text{vector}\\
B=\text{magnitude}
\end{aligned}
$$

---
### vector equality property
- equal magnitude and equal direction

---
### vector equality property formula
$$
\begin{aligned}
\vec{A}=\vec{B}\iff
\begin{cases}
A_{x}=B_{x}\\
A_{y}=B_{y}
\end{cases}\\
\vec A,\vec B=\text{vector}\\
A_{x},B_{x}=\text{x scalar component}\\
A_{y},B_{y}=\text{y scalar component}
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
\vec A+\vec B=\vec B+\vec A\\
(\vec A+\vec B)+\vec C=\vec A+(\vec B+\vec C)\\
\vec A+0=\vec A\\
1\cdot\vec A=\vec A\\
\vec A+(-\vec A)=0\\
0\cdot\vec A=0\\
c(\vec A+\vec B)=c\vec A+c\vec B
\end{aligned}
$$

---
### dot product direction property
- acute angle equal positive dot product
- obtuse angle equal negative dot product
- perpendicular vectors equal zero
- parallel vectors equal product of magnitude
- antiparallel vectors equal negative product of magnitude
- same vectors equal squared magnitude

---
### dot product direction property formula
$$
\begin{aligned}
0^{\circ}\le\theta<90^{\circ}\iff\vec A\cdot\vec B>0\\
90^{\circ}\le\theta<180^{\circ}\iff\vec A\cdot\vec B<0\\
\theta=90^{\circ}\iff\vec A\cdot\vec B=0\\
\theta=0^{\circ}\iff\vec A\cdot\vec B=AB\\
\theta=180^{\circ}\iff\vec A\cdot\vec B=-AB\\
\vec A=\vec B\implies(\theta=0^{\circ})\land(\vec A\cdot\vec B=A^{2})
\end{aligned}
$$

---
### dot product arithmetic property
- commutative
- identity
- zero
- associative
- distributive

---
### dot product arithmetic property formula
$$
\begin{aligned}
\vec x\cdot\vec y=\vec y\cdot\vec x\\
\vec x\cdot\vec x=\|\vec x\|^{2}\ge0\\
\vec x\cdot\vec x=0\iff\vec x=\vec0\\
c(\vec x\cdot\vec y)=(c\vec x)\cdot\vec y=\vec x\cdot(c\vec y)\\
\vec x\cdot(\vec y+\vec z)=(\vec x\cdot\vec y)+(\vec x\cdot\vec z)=(\vec x+\vec y)\cdot\vec z
\end{aligned}
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
\begin{aligned}
\theta=90^{\circ}&\iff\|\vec A\times\vec B\|=AB\\
\theta=0^{\circ}&\iff\|\vec A\times\vec B\|=0\\
\theta=180^{\circ}&\iff\|\vec A\times\vec B\|=0\\
\vec A=\vec B&\implies(\theta=0^{\circ})\land(\|\vec A\times\vec B\|=0)
\end{aligned}
$$

---
### cross product arithmetic property
- anticommutative
- identity
- zero
- associative
- distributive

---
### cross product arithmetic property formula
$$
\begin{aligned}
\vec x\times\vec y=-(\vec y\times\vec x)\\
\vec x\times\vec x=\vec0\\
\vec x\times\vec y=\vec0\iff\vec x\parallel\vec y\\
c(\vec x\times\vec y)=(c\vec x)\times\vec y=\vec x\times(c\vec y)\\
\vec x\cdot(\vec y\times\vec z)=(\vec x\times\vec y)\cdot\vec z)\\
\vec x\times(\vec y+\vec z)=(\vec x\times\vec y)+(\vec x\times\vec z)=(\vec x+\vec y)\times\vec z
\end{aligned}
$$

---
### three dimensional coordinate system
- x dimension
- y dimension
- z dimension
![500](3%20Calculus/Images/three%20dimensional%20coordinate%20system.png)

---
### three dimensional coordinate system formula
$$
\begin{aligned}
(x,y)\implies z=0\\
(x,z)\implies y=0\\
(y,z)\implies x=0
\end{aligned}
$$

---
### directed line segment
- line segment with starting point and ending point
![[3 Calculus/Images/vector.png|200]]

---
### directed line segment formula
$$
\begin{aligned}
P=(x_1,y_1,z_1)\rightarrow Q=(x_2,y_2,z_2)\implies\overrightarrow{PQ}=\langle x_2-x_1,y_2-y_1,z_2-z_1\rangle\\
\vec A=\text{initial point}\\
\vec B=\text{terminal point}\\
x,y,z=\text{coordinate}
\end{aligned}
$$

---
### linear direction angle
- angle between vector and unit vector

---
### linear direction angle formula
$$
\begin{aligned}
\theta=\begin{cases}
\arctan(\frac{v_{y}}{v_{x}}),\ v_{x}>0\\
\arctan(\frac{v_{y}}{v_{x}})+180^{\circ},\ v_{x}<0
\end{cases}\\
v_{y}=\text{y scalar component}\\
v_{x}=\text{x scalar component}
\end{aligned}
$$

---
### linear direction vector
- vector parallel line
![[3 Calculus/Images/linear direction vector.png]]

---
### linear direction vector formula
$$
\begin{aligned}
\vec v=\overrightarrow{P_{0}P}=\langle x-x_{0},y-y_{0},z-z_{0}\rangle=\langle a,b,c\rangle\\
a=\text{x scalar component}\\
b=\text{y scalar component}\\
c=\text{z scalar component}
\end{aligned}
$$

---
### vector equation of 3d line
- for all parameters there exists distinct position vector that corresponds with point on line
![[3 Calculus/Images/vector equation of 3d line.png]]

---
### vector formula of 3d line
$$
\begin{aligned}
\langle x,y,z\rangle=\langle x_{0},y_{0},z_{0}\rangle+t\langle v_1,v_2,v_3\rangle\iff\vec r=\vec r_0+t\vec v\\
\vec v=\text{direction vector}\\
v_1,v_2,v_3=\text{direction number}\\
t=\text{parameter}
\end{aligned}
$$

---
### parametric equation of 3d line
- for all parameters there exists distinct position vector that corresponds with point on line
![[3 Calculus/Images/parametric equation of 3d line.png]]

---
### parametric equation of 3d line
$$
\begin{aligned}
x=x_{0}+at\\
y=y_{0}+bt\\
z=z_{0}+ct\\
x=\text{x scalar component}\\
y=\text{y scalar component}\\
z=\text{z scalar component}
\end{aligned}
$$

---
### planar direction angle
- angle between planes

---
### planar direction angle formula
$$
\begin{aligned}
\cos(\theta)=\frac{\vec v_{1}\cdot\vec v_{2}}{v_{1}v_{2}}\\
\end{aligned}
$$

---
### planar direction vector
- vector perpendicular plane
![[3 Calculus/Images/planar direction vector.png]]

---
### planar direction vector formula
$$
\begin{aligned}
\vec v=\vec{P_{0}P}\perp=\vec{P_{0}P_{1}}\times\vec{P_{0}P_{2}}=\langle a,b,c\rangle\\
a=\text{x scalar component}\\
b=\text{y scalar component}\\
c=\text{z scalar component}
\end{aligned}
$$

---
### vector equation of 3d plane
- for all directions there exists distinct position vector that corresponds with point on plane
![[3 Calculus/Images/vector equation of 3d plane.png]]

---
### vector formula of 3d plane
$$
\begin{aligned}
\vec v\cdot(\vec r-\vec r_{0})=0
\end{aligned}
$$

---
### scalar equation of 3d plane
- for all directions there exists distinct position vector that corresponds with point on plane

---
### scalar formula of 3d plane
$$
\begin{aligned}
a(x-x_{0})+b(y-y_{0})+c(z-z_{0})=0
\end{aligned}
$$

---
### parallel plane
- scalar multiple of direction vector
![[3 Calculus/Images/parallel plane.png]]

---
### perpendicular plane
- dot product of direction vector equal zero
![[3 Calculus/Images/perpendicular plane.png]]

---
### intersecting plane
- intersection equal 3d line
![[3 Calculus/Images/intersecting plane.png]]

---
### linear distance
- length between point and line

---
### linear distance formula
$$
\begin{aligned}
d=\frac{|\vec v\times\vec{P_{0}P}|}{v}
\end{aligned}
$$

---
### planar distance
- length between point and plane

---
### planar distance formula
$$
\begin{aligned}
d=\frac{|c_{2}-c_{1}|}{v}
\end{aligned}
$$

---
