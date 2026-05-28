### rectangular equation
- $f(x)$ in terms of *x* 

---
### rectangular equation formula
$$
\begin{aligned}
y = f(x) \\
x = \text{independent variable} \\
y = \text{dependent variable}
\end{aligned}
$$

---
### parametric equation
- $(x, y)$ in terms of *t* 

---
### parametric equation
$$
\begin{aligned}
x = f(t) \\
y = g(t) \\
x = \text{dependent variable} \\
y = \text{dependent variable} \\
t = \text{parameter}
\end{aligned}
$$

---
### deparameterization
- parametric conversion rectangular

---
### calculate deparameterization
- solve $x = f(t)$ for *t* in terms of *x* 
- substitute *t* into $y = g(t)$ 

---
### parameterization
- rectangular conversion parametric

---
### calculate parameterization
- solve $t = f(x)$ for *x*
- substitute *t* into $y = g(t)$ 

---
### derivative
- slope of secant segment as $\Delta x$ approaches zero

---
### parametric derivative formula
$$
\begin{aligned}
\frac{dy}{dx} = \frac{g'(t)}{f'(t)}
\end{aligned}
$$

---
### definite integration
- operation of finding the area under curve between two limits of integration

---
### parametric definite integral formula
$$
\begin{aligned}
\int_{t_{1}}^{t_{2}} ydt = \int_{t_{1}}^{t_{2}} g(t)f'(t) dt
\end{aligned}
$$

---
### arc length
- distance between endpoints along arc

---
### parametric arc length formula
$$
\begin{aligned}
\int_{t_{1}}^{t_{2}} \sqrt{(\frac{dx}{dt})^2 + (\frac{dy}{dt})^2}dt
\end{aligned}
$$

---
### surface area
- two dimensional surface from the rotation of function about axis of revolution

---
### parametric surface area formula
$$
\begin{aligned}
y = 2\pi \int_{t_{1}}^{t_{2}} g(t) \sqrt{(\frac{dx}{dt})^2 + (\frac{dy}{dt})^2}dt \\
x = 2\pi \int_{t_{1}}^{t_{2}} f(t) \sqrt{(\frac{dx}{dt})^2 + (\frac{dy}{dt})^2}dt
\end{aligned}
$$

---
### polar coordinate system
- represent coordinate $(x, y)$ with distance and angle
![[3 Calculus/Images/polar coordinate system.png]]

---
### polar coordinate formula
$$
\begin{aligned}
(r, \theta) = (r, \theta + 2\pi n) \\
r = \text{distance} \\
\theta = \text{angle between vectors}
\end{aligned}
$$

---
### coordinate system conversion
- distance equal *x* axis and angle between vectors equal *y* axis
![[3 Calculus/Images/polar conversion rectangular.png]]

---
### polar conversion rectangular formula
$$
\begin{aligned}
x = r\cos(\theta) \\
y = r\sin(\theta) \\

\end{aligned}
$$

---
### rectangular conversion polar formula
$$
\begin{aligned}
\theta = \arctan(\frac{y}{x}) \\
r = \sqrt{x^2 + y^2}
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
- if both $(r, \theta)$ and $(r, -\theta)$ on polar curve then polar curve symmetric about x axis
- if both $(r, \theta)$ and $(r, \pi + \theta) = (-r, \theta)$ on polar curve then polar curve symmetric about origin
- if both $(r, \theta)$ and $(r, \pi - \theta) = (-r, -\theta)$ on polar curve then polar curve symmetric about y axis
![[3 Calculus/Images/polar symmetry.png]]

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
