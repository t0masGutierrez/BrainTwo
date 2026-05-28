### space curve
- set of parametric equation triples that define spatial curve
![[13 Calculus/Images/space curve.png]]

---
### space curve formula
$$
\begin{aligned}
\vec{r}(t) = x(t)\hat{i} + y(t)\hat{j} + z(t)\hat{k} \\
x = \text{x position} \\
y = \text{y position} \\
z = \text{z position} \\
t = \text{parameter}
\end{aligned}
$$

---
### vector function
- function whose domain equal set of real numbers and range equal set of vectors

---
### limit
- $\vec r(t)$ behavior as *t* approaches value

---
### limit formula
$$
\begin{aligned}
\lim_{t \to n} \vec r(t) = \lim_{t \to n} x(t) \hat i + \lim_{t \to n} y(t) \hat j + \lim_{t \to n} z(t) \hat k
\end{aligned}
$$

---
### discontinuity
- hole
- jump
- infinite

---
### continuity
$$
\begin{aligned}
\lim_{t \to n} \vec r(t) = \vec r(n) \\
\lim_{t \to n^-} \vec r(t) = \lim_{t \to n^+}  \vec r(t) \\
\lim_{t \to n} \vec r(t) \ne \pm \infty
\end{aligned}
$$

---
### instantaneous rate of change
- slope of tangent vector

---
### instantaneous rate of change formula
$$
\begin{aligned}
\vec r \ '(n) = \lim_{t \to n} \frac{\vec r(t) - \vec r(n)}{t - n}
\end{aligned}
$$

---
### derivative
- slope of secant vector as $\Delta t$ approaches zero
![[13 Calculus/Images/derivative1.png]]

---
### derivative formula
$$
\begin{aligned}
\frac{d}{dt}\vec r(t) = \lim_{\Delta t \to 0} \frac{\vec r(t + \Delta t) - \vec r(n)}{\Delta t}
\end{aligned}
$$

---
### differentiable
- function continuous and derivative exists

---
### non differentiable
- discontinuity
- vertical tangent vector
- sharpness

---
### definite integration
- operation of finding the area under spatial curve between two limits of integration

---
### definite integral formula
$$
\begin{aligned}
\int_{a}^b \vec r(t)dt = \vec R(b) - \vec R(a) \\
\int_{a}^b \vec r(t)dt = \hat i \int_{a}^b x(t)dt + \hat j \int_{a}^b y(t)dt + \hat k \int_{a}^b z(t)dt
\end{aligned}
$$

---
### integrable
- function continuous

---
### non integrable
- discontinuity

---
### arc length
- distance between two points along arc

---
### unit tangent vector
- vector with magnitude of 1 that specify tangent direction of vector quantity 

---
### unit tangent vector
$$
\begin{aligned}
\vec T(t) = \frac{\vec r \ '(t)}{r'(t)}
\end{aligned}
$$

---
### unit normal vector
- vector with magnitude of 1 that specify normal direction of vector quantity

---
### unit normal vector
$$
\begin{aligned}
\vec N(t) = \frac{\vec T \ '(t)}{T'(t)}
\end{aligned}
$$

---
### unit binormal vector
- vector with magnitude of 1 that specify binormal direction of vector quantity

---
### unit binormal vector
$$
\begin{aligned}
\vec B(t) = \vec T(t) \times \vec N(t) 
\end{aligned}
$$

---
### curvature
- rate of direction change along curve

---
### curvature formula
$$
\begin{aligned}
\kappa(t) = \frac{T'(t)}{r'(t)}
\end{aligned}
$$

---
### acceleration component
- tangential acceleration and normal acceleration

---
### acceleration component formula
$$
\begin{aligned}
\vec a(t) = a_{T} \vec T + a_{N} \vec N 
\end{aligned}
$$

---
### tangential acceleration formula
$$
\begin{aligned}
a_{T} = \frac{\vec r \ '(t) \cdot \vec r \ ''(t)}{r'(t)}
\end{aligned}
$$

---
### normal acceleration formula
$$
\begin{aligned}
a_{N} = \frac{r'(t) \times r''(t)}{r'(t)}
\end{aligned}
$$

---
### arc length
- distance between two points along arc

---
### arc length formula
$$
\begin{aligned}
r(t) = \int_{a}^t \sqrt{(\frac{dx}{dt})^2 + (\frac{dy}{dt})^2 + (\frac{dz}{dt})^2}dt = \int_{a}^t \vec r \ '(u)du
\end{aligned}
$$

---
