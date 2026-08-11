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
P=\text{initial point}\\
Q=\text{terminal point}\\
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
a,b,c=\text{direction number}
\end{aligned}
$$

---
### vector equation of line
- for all parameters there exists position vector that corresponds with point on line
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
- for all parameters there exists position vector that corresponds with point on line
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
P,Q,R=\text{noncollinear point}\\
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
- for all directions there exists position vector that corresponds with point on plane
![300](3%20Calculus/Images/vector%20equation%20of%20plane.png)

---
### vector equation of plane formula
$$
\begin{aligned}
\vec n\cdot\overrightarrow{PQ}=0\\
\vec n=\text{normal vector}\\
P=\text{initial point}\\
Q=\text{terminal point}
\end{aligned}
$$

---
### scalar equation of plane
- for all directions there exists position vector that corresponds with point on plane

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
P=\text{initial point}\\
Q=\text{terminal point}\\
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
P=\text{initial point}\\
Q=\text{terminal point}\\
\vec n=\text{normal vector}\\
a,b,c=\text{normal number}
\end{aligned}
$$

---
### cylindrical surface
- surface formed by extending two-dimensional curve infinitely along direction parallel coordinate axis
![300](3%20Calculus/Images/cylindrical%20surface.png)

---
### cylindrical surface formula
$$
\begin{aligned}
f(x,y)=0\\
f(x,z)=0\\
f(y,z)=0\\
\end{aligned}
$$

---
### elliptic cylinder
- elliptic cylinder

---
### elliptic cylinder formula
$$
\begin{aligned}
\frac{(x-h)^2}{a^2}+\frac{(y-k)^2}{b^2}=1
\end{aligned}
$$

---
### hyperbolic cylinder
- hyperbolic cylinder

---
### hyperbolic cylinder formula
$$
\begin{aligned}
\frac{(x-h)^2}{a^2}-\frac{(y-k)^2}{b^2}=1
\end{aligned}
$$

---
### parabolic cylinder
- parabolic cylinder

---
### parabolic cylinder formula
$$
\begin{aligned}
a(x-h)^2=y-k
\end{aligned}
$$

---
### quadric surface
- three-dimensional analogue of conic section

---
### quadric surface formula
$$
\begin{aligned}
Ax^2+By^2+Cz^2+Dxy+Exz+Fyz+Gx+Hy+Iz+J=0
\end{aligned}
$$

---
### ellipsoid
- ellipsoid
![](3%20Calculus/Images/ellipsoid.png)

---
### ellipsoid formula
$$
\begin{aligned}
\frac{(x-h)^2}{a^2}+\frac{(y-k)^2}{b^2}+\frac{(z-\ell)^2}{c^2}=1
\end{aligned}
$$

---
### one hyperboloid
- one hyperboloid
![](3%20Calculus/Images/one%20hyperboloid.png)

---
### one hyperboloid formula
$$
\begin{aligned}
\frac{(x-h)^2}{a^2}+\frac{(y-k)^2}{b^2}-\frac{(z-\ell)^2}{c^2}=1
\end{aligned}
$$

---
### two hyperboloid
- two hyperboloid
![](3%20Calculus/Images/two%20hyperboloid.png)

---
### two hyperboloid formula
$$
\begin{aligned}
-\frac{(x-h)^2}{a^2}-\frac{(y-k)^2}{b^2}+\frac{(z-\ell)^2}{c^2}=1
\end{aligned}
$$

---
### elliptic cone
- elliptic cone
![](3%20Calculus/Images/elliptic%20cone.png)

---
### elliptic cone formula
$$
\begin{aligned}
\frac{(x-h)^2}{a^2}+\frac{(y-k)^2}{b^2}-\frac{(z-\ell)^2}{c^2}=0
\end{aligned}
$$

---
### elliptic paraboloid
- elliptic paraboloid
![](3%20Calculus/Images/elliptic%20paraboloid.png)

---
### elliptic paraboloid formula
$$
\begin{aligned}
\frac{(x-h)^2}{a^2}+\frac{(y-k)^2}{b^2}=z-\ell
\end{aligned}
$$

---
### hyperbolic paraboloid
- hyperbolic paraboloid
![](3%20Calculus/Images/hyperbolic%20paraboloid.png)

---
### hyperbolic paraboloid formula
$$
\begin{aligned}
\frac{(x-h)^2}{a^2}-\frac{(y-k)^2}{b^2}=z-\ell
\end{aligned}
$$

---
### cylindrical coordinate
- represent coordinate with distance, angle, and planar distance
![300](3%20Calculus/Images/cylindrical%20coordinate.png)

---
### cylindrical coordinate formula
$$
\begin{aligned}
\begin{cases}x=r\cos(\theta)\\
y=r\sin(\theta)\\
z=z
\end{cases}\iff\begin{cases}
r=\sqrt{x^{2}+y^{2}}\\
\theta=\arctan(\frac{y}{x})\\
z=z
\end{cases}\\
x,y,z=\text{dependent variable}\\
r=\text{distance}\\
\theta=\text{angle}
\end{aligned}
$$

---
### spherical coordinate
- represent coordinate with planar distance, angle, and direction angle
![300](3%20Calculus/Images/spherical%20coordinate.png)

---
### spherical coordinate formula
$$
\begin{aligned}
\begin{cases}x=\rho\sin(\phi)\cos(\theta)\\
y=\rho\sin(\phi)\sin(\theta)\\
z=\rho\cos(\theta)
\end{cases}\iff\begin{cases}
\rho=\sqrt{x^{2}+y^{2}+z^2}\\
\theta=\arctan(\frac{y}{x})\\
\phi=\arccos(\frac{z}{\sqrt{x^2+y^2+z^2}})\\
\end{cases}\\
\begin{cases}r=\rho\sin(\phi)\\
\theta=\theta\\
z=\rho\cos(\phi)\\
\end{cases}\iff\begin{cases}
\rho=\sqrt{r^2+z^2}\\
\theta=\theta\\
\phi=\arccos(\frac{z}{\sqrt{r^2+z^2}})\\
\end{cases}\\
x,y,z=\text{dependent variable}\\
\rho=\text{planar distance}\\
\phi=\text{direction angle}\\
\theta=\text{angle}\\
r=\text{distance}
\end{aligned}
$$

---
