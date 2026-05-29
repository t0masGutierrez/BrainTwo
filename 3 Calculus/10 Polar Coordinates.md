### polar coordinate
- represent coordinate with distance and angle
![[3 Calculus/Images/polar coordinate system.png]]

---
### polar coordinate formula
$$
\begin{aligned}
(r, \theta) = (r, \theta + 2\pi n) \\
r = \text{distance} \\
\theta = \text{angle}
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
\begin{cases} x = r\cos(\theta) \\
y = r\sin(\theta) \\
\end{cases} \iff \begin{cases} 
r = \sqrt{x^2 + y^2} \\
\theta = \arctan(\frac{y}{x}) 
\end{cases} \\
x, y = \text{dependent variable} \\
r = \text{distance} \\
\theta = \text{angle}
\end{aligned}
$$

---
### polar curve
- limacons
- roses
- circles
- lemniscates
![[3 Calculus/Images/polar curve.png]]

---
### graph polar curve
- graph $r = f(\theta)$ as rectangular coordinate where $r = y$ and $\theta = x$ 
![[3 Calculus/Images/graph polar curve.png]]

---
### polar symmetry
- symmetric about x axis
- symmetric about origin
- symmetric about y axis
![[3 Calculus/Images/polar symmetry.png]]

---
### polar symmetry formula
$$
\begin{aligned}
(r, \theta), (r, -\theta) \in C \implies f(\theta) = f(-\theta) \\
(r, \theta), (-r, \theta) \in C \implies f(\theta) = f(\pi + \theta) \\
(r, \theta), (-r, -\theta) \in C \implies  f(\theta) = f(\pi - \theta) \\
\end{aligned}
$$

---

### derivative
- slope of secant segment as $\Delta x$ approaches zero
![[3 Calculus/Images/derivative.png]]

---
### polar derivative formula
$$
\begin{aligned}
\frac{dy}{dx} = \frac{f'(\theta)\sin(\theta) + f(\theta)\cos(\theta)}{f'(\theta)\cos(\theta) - f(\theta)\sin(\theta)}
\end{aligned}
$$

---
### definite integration
- operation of finding the area under curve between two limits of integration
![[3 Calculus/Images/definite integration.png]]

---
### polar definite integral formula
$$
\begin{aligned}
\frac{1}{2}\int_{\theta_{1}}^{\theta_{2}} [R^2 - r^2]d\theta
\end{aligned}
$$

---
### arc length
- distance between endpoints along arc

---
### polar arc length formula
$$
\begin{aligned}
\int_{\theta_{1}}^{\theta_{2}} \sqrt{r^2 + (\frac{dr}{d\theta})^2}d\theta
\end{aligned}
$$

---
### surface of revolution
- two dimensional surface from the rotation of function about axis of revolution

---
### polar surface area formula
$$
\begin{aligned}
y = 2\pi \int_{\theta_{1}}^{\theta_{2}} r\sin(\theta) \sqrt{r^2 + (\frac{dr}{d\theta})^2}d\theta \\
x = 2\pi \int_{\theta_{1}}^{\theta_{2}} r\cos(\theta) \sqrt{r^2 + (\frac{dr}{d\theta})^2}d\theta \\
\end{aligned}
$$

---
