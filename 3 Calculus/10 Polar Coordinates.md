### polar coordinate
- represent coordinate with distance and angle
![[3 Calculus/Images/polar coordinate system.png]]

---
### polar coordinate formula
$$
\begin{aligned}
(r,\theta)=(r,\theta+2\pi n)=(-r,\theta+\pi)\\
r=\text{distance}\\
\theta=\text{angle}
\end{aligned}
$$

---
### coordinate conversion
- distance equal *x* axis and angle between vectors equal *y* axis
![[3 Calculus/Images/coordinate conversion.png]]

---
### coordinate conversion formula
$$
\begin{aligned}
\begin{cases}x=r\cos(\theta)\\
y=r\sin(\theta)\\
\end{cases}\iff\begin{cases}
r=\sqrt{x^{2}+y^{2}}\\
\theta=\arctan(\frac{y}{x})
\end{cases}\\
x,y=\text{dependent variable}\\
r=\text{distance}\\
\theta=\text{angle}
\end{aligned}
$$

---
### circle polar curve
- set of points with constant distance from the center
![](3%20Calculus/Images/circle%20polar%20curve.png)

---
### circle polar curve formula
$$
\begin{aligned}
x^2+y^2=a^2\implies r=a\\
(x-a)^2+y^2=a^2\implies r=2a\cos(\theta)\\
x^2+(y-a)^2=a^2\implies r=2a\sin(\theta)\\
\end{aligned}
$$

---
### line polar curve
- set of points extending infinitely along single direction with zero curvature
![300](3%20Calculus/Images/line%20polar%20curve.png)

---
### line polar curve formula
$$
\begin{aligned}
\theta=k\\
R=r\cos(\theta-\Theta)\\
k=\text{constant}\\

r=\text{distance}\\
\theta=\text{angle}\\
R=\text{normal distance}\\
\Theta=\text{normal angle}
\end{aligned}
$$

---
### spiral polar curve
- continuous winding around the pole
![300](3%20Calculus/Images/spiral%20polar%20curve.png)

---
### spiral polar curve formula
$$
\begin{aligned}
r=a+b\theta\\
r=\frac{a}{\theta}\\
r^2=a^2\theta\\
r=a\exp(b\theta)\\
r=a\sqrt{\frac{1}{\theta}}
\end{aligned}
$$

---
### rose polar curve
- flower-shaped loop whose radius repeatedly changes creating uniformly spaced petals around the pole
![300](3%20Calculus/Images/rose%20polar%20curve.png)

---
### rose polar curve formula
$$
\begin{aligned}
r=a\cos(n\theta)\\
a=\text{radius}\\
\theta=\text{angle}
\end{aligned}
$$

---
### cardioid polar curve
- heart-shaped loop via circle pinched into cusp at the pole
![](3%20Calculus/Images/cardioid%20polar%20curve.png)

---
### cardioid polar curve formula
$$
\begin{aligned}
r=a\pm b\cos(\theta)\\
r=a\pm b\sin(\theta)
\end{aligned}
$$

---
### limacon polar curve
- circular loop extending outward
![450](3%20Calculus/Images/limacon%20polar%20curve.png)

---
### limacon polar curve formula
$$
\begin{aligned}
r=a\cos(\theta)\pm b\\
r=a\sin(\theta)\pm b\\
\end{aligned}
$$

---
### lemniscate polar curve
- figure-eight shaped loop
![](3%20Calculus/Images/lemniscate%20polar%20curve.png)

---
### lemniscate polar curve formula
$$
\begin{aligned}
r^2=\pm a^2\cos(2\theta)\\
r^2=\pm a^2\sin(2\theta)\\
a=\text{radius}\\
\theta=\text{angle}
\end{aligned}
$$

---
### conic polar curve
- set of points with constant ratio between distance from focus and distance from directrix
![300](3%20Calculus/Images/conic%20polar%20curve.png)

---
### conic polar curve formula
$$
\begin{aligned}
r=\frac{\ell}{1\pm e\cos(\theta)}\\
e=0\implies\text{circle}\\
0<e<1\implies\text{ellipse}\\
e=1\implies\text{parabola}\\
e>1\implies\text{hyperbola}\\
\ell=\text{semi-latus rectum}\\
e=\text{eccentricity}\\
\theta=\text{angle}
\end{aligned}
$$

---
### graph polar curve
- graph $r=f(\theta)$ as rectangular coordinate where $r=y$ and $\theta=x$
![[3 Calculus/Images/graph polar curve.png]]

---
### graph polar curve formula
$$
\begin{aligned}
r=f(\theta)=\set{(x,y)\mid x=\theta,y=r}\\
r=\text{distance}\\
\theta=\text{angle}\\
x,y=\text{dependent variable}
\end{aligned}
$$

---
### polar symmetry
- symmetric about the x-axis
- symmetric about the y-axis
- symmetric about the origin
![](3%20Calculus/Images/polar%20symmetry.png)

---
### polar symmetry formula
$$
\begin{aligned}
f(\theta)=f(-\theta)=-f(\pi-\theta)\\
f(\theta)=-f(-\theta)=f(\pi-\theta)\\
f(\theta)=-f(\theta)=f(\pi+\theta)\\
\end{aligned}
$$

---
### horizontal tangent
- slope of horizontal segment

---
### horizontal tangent formula
$$
\begin{aligned}
\frac{dx}{d\theta}=\frac{dr}{d\theta}\cos(\theta)-r\sin(\theta)\\
r=\text{distance}\\
\theta=\text{angle}
\end{aligned}
$$

---
### vertical tangent
- slope of vertical segment

---
### vertical tangent formula
$$
\begin{aligned}
\frac{dy}{d\theta}=\frac{dr}{d\theta}\sin(\theta)+r\cos(\theta)\\
r=\text{distance}\\
\theta=\text{angle}
\end{aligned}
$$

---
### derivative
- slope of tangent segment
![[3 Calculus/Images/polar derivative.png]]

---
### derivative formula
$$
\begin{aligned}
\frac{dy}{dx}=\frac{f'(\theta)\sin(\theta)+f(\theta)\cos(\theta)}{f'(\theta)\cos(\theta)-f(\theta)\sin(\theta)}
\end{aligned}
$$

---
### integral
- area under polar curve
![[3 Calculus/Images/polar integral.png]]

---
### integral formula
$$
\begin{aligned}
A=\frac{1}{2}\int_\alpha^\beta(r_2^{2}-r_1^{2})d\theta\\
r_1\le r\le r_2\\
r=\text{distance}\\
\theta=\text{angle}
\end{aligned}
$$

---
### arc length
- distance between endpoints along polar arc

---
### arc length formula
$$
\begin{aligned}
L=\int_\alpha^\beta\sqrt{r^{2}+(\frac{dr}{d\theta})^{2}}d\theta\\
r=\text{distance}\\
\theta=\text{angle}
\end{aligned}
$$

---
### surface area
- two dimensional polar surface via the rotation of function about axis of revolution

---
### surface area formula
$$
\begin{aligned}
A_x=2\pi\int_\alpha^\beta r\sin(\theta)\sqrt{r^{2}+(\frac{dr}{d\theta})^{2}}d\theta\\
A_y=2\pi\int_\alpha^\beta r\cos(\theta)\sqrt{r^{2}+(\frac{dr}{d\theta})^{2}}d\theta\\
\end{aligned}
$$

---
