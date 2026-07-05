### scalar
- quantity with magnitude

---
### scalar formula
$$
\begin{aligned}
c\in\mathbb R\\
c=\text{scalar}
\end{aligned}
$$

---
### vector
- quantity with both magnitude and direction
![[3 Calculus/Images/vector.png|200]]

---
### vector formula
$$
\begin{aligned}
\vec v\in\mathbb R^2\\
\vec v=\text{vector}
\end{aligned}
$$

---
### unit vector
- vector with magnitude of 1 that specify direction without scaling
![[4 Physics/Images/unit vector.png|300]]

---
### unit vector formula
$$
\begin{aligned}
\hat{i}=\frac{\vec{v_{x}}}{v_{x}}\\
\hat{j}=\frac{\vec{v_{y}}}{v_{y}}\\
\vec v_{x},\vec v_{y}=\text{vector component}\\
v_{x},v_{y}=\text{scalar component}
\end{aligned}
$$

---
### component
- horizontal change equal *x* component
- vertical change equal *y* component
![[4 Physics/Images/component.png|300]]

---
### component formula
$$
\begin{aligned}
\vec{v}=\vec v_{x}+\vec v_{y}=v_{x}\hat{i}+v_{y}\hat{j}=\begin{bmatrix}v_x\\v_y\end{bmatrix}\\
v_{x}=v\cos(\theta)\\
v_{y}=v\sin(\theta)\\
\vec v_{x},\vec v_{y}=\text{vector component}\\
v_{x},v_{y}=\text{scalar component}\\
\hat{i}=\text{x direction}\\
\hat{j}=\text{y direction}\\
A=\text{magnitude}\\
\theta=\text{direction}
\end{aligned}
$$

---
### magnitude
- distance from the origin

---
### magnitude formula
$$
\begin{aligned}
v=\sqrt{\sum_{i=1}^nv_{i}^{2}}\\
v_{i}=\text{scalar component}
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
\arctan(\frac{v_{y}}{v_{x}}),\ v_{x}>0\\
\arctan(\frac{v_{y}}{v_{x}})+180^{\circ},\ v_{x}<0
\end{cases}\\
v_{x},v_{y}=\text{scalar component}
\end{aligned}
$$

---
### vector equality property
- equal magnitude and equal direction
![300](3%20Calculus/Images/vector%20equality%20property.png)

---
### vector equality property formula
$$
\begin{aligned}
\vec{v}=\vec{u}\iff
\begin{cases}
v_{x}=u_{x}\\
v_{y}=u_{y}
\end{cases}\\
\vec v,\vec u=\text{vector}\\
v_{x},u_{y}=\text{scalar component}\\
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
\vec v+\vec u=\vec u+\vec v\\
(\vec v+\vec u)+\vec w=\vec v+(\vec u+\vec w)\\
\vec v+0=\vec v\\
1\cdot\vec v=\vec v\\
\vec v+(-\vec v)=0\\
0\cdot\vec v=0\\
c(\vec v+\vec u)=c\vec v+c\vec u
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
c\vec{v}=cv_{x}\hat{i}+cv_{y}\hat{j}\\
c=\text{scalar}\\
v_{x},v_y=\text{scalar component}\\
\hat{i}=\text{x direction}\\
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
\vec{r}=(v_{x}+u_{x})\hat{i}+(v_{y}+u_{y})\hat{j}\\
v_{x},u_{y}=\text{scalar component}\\
\hat i=\text{x direction}\\
\hat j=\text{y direction}
\end{aligned}
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
\begin{aligned}
\vec{v}\cdot\vec{u}=uv\cos(\theta)=v_{x}u_{x}+v_{y}u_{y}\\
u,v=\text{magnitude}\\
\theta=\text{angle between vectors}\\
v_{x},u_{y}=\text{scalar component}
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
### dot product direction property
- acute angle equal positive dot product
- obtuse angle equal negative dot product
- perpendicular vectors equal zero
- parallel vectors equal product of magnitude
- antiparallel vectors equal negative product of magnitude

---
### dot product direction property formula
$$
\begin{aligned}
0^{\circ}\le\theta<90^{\circ}\iff\vec v\cdot\vec{u}>0\\
90^{\circ}\le\theta<180^{\circ}\iff\vec v\cdot\vec{u}<0\\
\theta=90^{\circ}\iff\vec v\cdot\vec{u}=0\\
\theta=0^{\circ}\iff\vec v\cdot\vec{u}=uv\\
\theta=180^{\circ}\iff\vec v\cdot\vec{u}=-uv
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
\vec x\cdot\vec x=x^{2}\ge0\\
\vec x\cdot\vec x=0\iff\vec x=\vec0\\
c(\vec x\cdot\vec y)=(c\vec x)\cdot\vec y=\vec x\cdot(c\vec y)\\
\vec x\cdot(\vec y+\vec z)=(\vec x\cdot\vec y)+(\vec x\cdot\vec z)=(\vec x+\vec y)\cdot\vec z
\end{aligned}
$$

---
### cross product
- vector quantity of dissimilarity between two vectors
![[4 Physics/Images/cross product.png|300]]

---
### cross product formula
$$
\begin{aligned}
\vec{v}\times\vec{u}=(v_{y}u_{z}-v_{z}u_{y})\hat{i}+(v_{z}u_{x}-v_{x}u_{z})\hat{j}+(v_{x}u_{y}-v_{y}u_{x})\hat{k}\\
\|\vec{v}\times\vec{u}\|=uv\sin(\theta)\\
v_{x},u_{x}=\text{x scalar component}\\
\hat i=\text{x direction}\\
v_{y},u_{y}=\text{y scalar component}\\
\hat j=\text{y direction}\\
v_{z},u_{z}=\text{z scalar component}\\
\hat k=\text{z direction}\\
u,v=\text{magnitude}\\
\theta=\text{angle between vectors}
\end{aligned}
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
### cross product direction property
- perpendicular vectors equal product of magnitude
- parallel vectors equal zero
- antiparallel vectors equal zero
- same vectors equal zero

---
### cross product direction property formula
$$
\begin{aligned}
\theta=90^{\circ}&\iff\|\vec v\times\vec{u}\|=uv\\
\theta=0^{\circ}&\iff\|\vec v\times\vec{u}\|=0\\
\theta=180^{\circ}&\iff\|\vec v\times\vec{u}\|=0\\
\vec v=\vec{u}&\implies(\theta=0^{\circ})\land(\|\vec v\times\vec{u}\|=0)
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
### box product
- volume of parallelepiped
![[4 Physics/Images/box product.png|400]]

---
### box product formula
$$
\begin{aligned}
\vec{v}\cdot(\vec{u}\times\vec{w})=\begin{vmatrix}
v_{x}&v_{y}&v_{z}\\
u_{x}&u_{y}&u_{z}\\
w_{z}&w_{y}&w_{z}\\
\end{vmatrix}\\
v_{x},u_{x},w_{z}=\text{x scalar component}\\
v_{y},u_{y},w_{y}=\text{y scalar component}\\
v_{z},u_{z},w_{z}=\text{z scalar component}
\end{aligned}
$$

---
### parallel projection vector
- parallel projection of $\vec v$ onto $\vec{u}$ equal vector component of $\vec v$ parallel $\vec{u}$

---
### parallel projection vector formula
$$
\begin{aligned}
\text{proj}_{\vec{u}}(\vec v\parallel)=(\frac{\vec v\cdot\vec{u}}{u^{2}})\cdot\vec{u}\\
\vec v,\vec{u}=\text{vector}\\
u=\text{magnitude}
\end{aligned}
$$

---
### perpendicular projection vector
- perpendicular projection of $\vec v$ onto $\vec{u}$ equal vector component of $\vec v$ perpendicular $\vec{u}$

---
### perpendicular projection vector formula
$$
\begin{aligned}
\text{proj}_{\vec{u}}(\vec v\perp)=\vec v-(\frac{\vec v\cdot\vec{u}}{u^{2}})\cdot\vec{u}\\
\vec v,\vec{u}=\text{vector}\\
u=\text{magnitude}
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
(x,y)\iff z=0\\
(x,z)\iff y=0\\
(y,z)\iff x=0
\end{aligned}
$$

---
### direction vector
- vector parallel line
![300](3%20Calculus/Images/direction%20vector.png)

---
### direction vector formula
$$
\begin{aligned}
\vec v=\overrightarrow{PQ}=\langle x-x_{0},y-y_{0},z-z_{0}\rangle=\langle a,b,c\rangle\\
P,Q=\text{point}\\
x,y,z=\text{coordinate}\\
a,b,c=\text{direction number}
\end{aligned}
$$

---
### direction angle
- angle between vector and unit vector

---
### direction angle formula
$$
\begin{aligned}
\alpha=\arccos(\frac{a}{\sqrt{a^2+b^2+c^2}})\\
\beta=\arccos(\frac{b}{\sqrt{a^2+b^2+c^2}})\\
\gamma=\arccos(\frac{c}{\sqrt{a^2+b^2+c^2}})\\
a,b,c=\text{direction angle}
\end{aligned}
$$

---
### vector equation of line
- for all parameters there exists distinct position vector that corresponds with point on line
![300](3%20Calculus/Images/vector%20equation%20of%20line.png)

---
### vector equation of line formula
$$
\begin{aligned}
\langle x,y,z\rangle=\langle x_{0},y_{0},z_{0}\rangle+t\langle a,b,c\rangle=\vec r_0+t\vec v\\
x,y,z=\text{coordinate}\\
t=\text{parameter}\\
a,b,c=\text{direction number}\\
\vec r=\text{position vector}\\
\vec v=\text{direction vector}
\end{aligned}
$$

---
### parametric equation of line
- for all parameters there exists distinct position vector that corresponds with point on line
![300](3%20Calculus/Images/parametric%20equation%20of%20line.png)

---
### parametric equation of line formula
$$
\begin{aligned}
x=x_{0}+at\\
y=y_{0}+bt\\
z=z_{0}+ct\\
a,b,c\ne0\implies\frac{x-x_0}{a}=\frac{y-y_0}{b}=\frac{z-z_0}{c}\\
x,y,z=\text{coordinate}\\
u,v,c=\text{direction number}\\
t=\text{parameter}
\end{aligned}
$$

---
### normal vector
- vector perpendicular plane
![200](3%20Calculus/Images/normal%20vector.png)

---
### normal vector formula
$$
\begin{aligned}
\vec n=\overrightarrow{PQ}\times\overrightarrow{PR}=\langle a,b,c\rangle\\
\vec P,\vec Q,\vec R=\text{noncollinear point}\\
a,b,c=\text{normal number}
\end{aligned}
$$

---
### normal angle
- angle between plane equal angle between normal vector
![[3 Calculus/Images/normal angle.png]]

---
### normal angle formula
$$
\begin{aligned}
\theta=\arccos(\frac{\vec n_1\cdot\vec n_2}{n_1n_2})\\
\vec n=\text{normal vector}
\end{aligned}
$$

---
### vector equation of plane
- for all directions there exists distinct position vector that corresponds with point on plane
![300](3%20Calculus/Images/vector%20equation%20of%20plane.png)

---
### vector equation of plane formula
$$
\begin{aligned}
\vec n\cdot\overrightarrow{PQ}=0\\
\vec n=\text{normal vector}\\
\vec P=\text{initial point}\\
\vec Q=\text{terminal point}
\end{aligned}
$$

---
### scalar equation of plane
- for all directions there exists distinct position vector that corresponds with point on plane

---
### scalar equation of plane formula
$$
\begin{aligned}
a(x-x_{0})+b(y-y_{0})+c(z-z_{0})=0\\
a,b,c=\text{normal number}\\
x,y,z=\text{coordinate}
\end{aligned}
$$

---
### parallel plane
- parallel plane equal parallel normal vector
![200](3%20Calculus/Images/parallel%20plane.png)

---
### parallel plane formula
$$
\begin{aligned}
\vec n_1\parallel\vec n_2\\
\vec n=\text{normal vector}
\end{aligned}
$$

---
### perpendicular plane
- parallel plane equal perpendicular normal vector
![200](3%20Calculus/Images/perpendicular%20plane.png)

---
### perpendicular plane formula
$$
\begin{aligned}
\vec n_1\perp\vec n_2\\
\vec n=\text{normal vector}
\end{aligned}
$$

---
### linear distance
- length between point and line
![300](3%20Calculus/Images/linear%20distance.png)

---
### linear distance formula
$$
\begin{aligned}
d=\frac{\|\overrightarrow{PQ}\times\vec v\|}{\sqrt{a^2+b^2+c^2}}\\
\vec P=\text{initial point}\\
\vec Q=\text{terminal point}\\
\vec v=\text{direction vector}\\
a,b,c=\text{direction number}
\end{aligned}
$$

---
### planar distance
- length between point and plane
![300](3%20Calculus/Images/planar%20distance.png)

---
### planar distance formula
$$
\begin{aligned}
d=\frac{|\overrightarrow{PQ}\cdot\vec n|}{\sqrt{a^2+b^2+c^2}}\\
\vec P=\text{initial point}\\
\vec Q=\text{terminal point}\\
\vec n=\text{normal vector}\\
a,b,c=\text{normal number}
\end{aligned}
$$

---
