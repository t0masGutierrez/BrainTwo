### plane curve
- set of ordered doubles with defining parametric equations
![300](3%20Calculus/Images/plane%20curve.png)

---
### plane curve formula
$$
\begin{lgathered}
\vec{r}(t)=x(t)\hat{i}+y(t)\hat{j}=[x(t),y(t)]\\
x,y=\text{position}\\
t=\text{parameter}\\
\hat i,\hat j=\text{unit vector}
\end{lgathered}
$$

---
### space curve
- set of ordered triples with defining parametric equations
![300](3%20Calculus/Images/space%20curve.png)

---
### space curve formula
$$
\begin{lgathered}
\vec{r}(t)=x(t)\hat{i}+y(t)\hat{j}+z(t)\hat{k}=[x(t),y(t),z(t)]\\
x,y,z=\text{position}\\
t=\text{parameter}\\
\hat i,\hat j,\hat k=\text{unit vector}
\end{lgathered}
$$

---
### vector-valued function
- function whose components are real-valued functions of the parameter

---
### vector-valued function formula
$$
\begin{lgathered}
\vec r:\mathbb R\rightarrow\mathbb R^n\\
\vec r=\text{vector-valued function}
\end{lgathered}
$$

---
### limit
- vector-valued function output as parameter approaches point

---
### limit formula
$$
\begin{lgathered}
\lim_{t\to a}\vec r(t)=\lim_{t\to a}x(t)\hat i+\lim_{t\to a}y(t)\hat j+\lim_{t\to a}z(t)\hat k\\
t=\text{parameter}\\
x,y,z=\text{position}\\
\hat i,\hat j,\hat k=\text{unit vector}
\end{lgathered}
$$

---
### continuous
- limit of vector-valued function at parameter equal vector-valued function at parameter

---
### continuous formula
$$
\begin{lgathered}
\lim_{t\to a}\vec r(t)=\vec r(a)\iff\begin{cases}
\lim_{t\to a}x(t)=x(a)\\
\lim_{t\to a}y(t)=y(a)\\
\lim_{t\to a}z(t)=z(a)
\end{cases}\\
t=\text{parameter}\\
\vec r=\text{vector-valued function}\\
x,y,z=\text{position}
\end{lgathered}
$$

---
### derivative
- slope of secant segment as change of independent variable approaches zero
![300](3%20Calculus/Images/derivative.png)

---
### derivative formula
$$
\begin{lgathered}
\frac{d}{dt}\vec r(t)=\lim_{\Delta t\to0}\frac{\vec r(t+\Delta t)-\vec r(t)}{\Delta t}=[x'(t),y'(t),z'(t)]\\
t=\text{parameter}\\
\vec r=\text{vector-valued function}\\
x,y,z=\text{position}
\end{lgathered}
$$

---
### differentiable
- there exists derivative of vector-valued function

---
### differentiable formula
$$
\begin{lgathered}
\exists\frac{d}{dt}\vec r(t)\in\mathbb R\implies\forall x\in[a,b]:\lim_{t\to x}\vec r(t)=\vec r(x)\\
t=\text{parameter}\\
\vec r=\text{vector-valued function}
\end{lgathered}
$$

---
### integral
- operation of finding the area under spatial curve between two limits of integration

---
### integral formula
$$
\begin{lgathered}
\int_{a}^{b}\vec r(t)dt=\hat i\int_{a}^{b}x(t)dt+\hat j\int_{a}^{b}y(t)dt+\hat k\int_{a}^{b}z(t)dt\\
\vec r=\text{vector-valued function}\\
t=\text{parameter}\\
\hat i,\hat j,\hat k=\text{unit vector}\\
x,y,z=\text{position}
\end{lgathered}
$$

---
### integrable
- there exists integral of vector-valued function

---
### integrable formula
$$
\begin{lgathered}
\forall x\in[a,b]:\lim_{t\to x}\vec r(t)=\vec r(x)\implies\exists\int_{a}^{b}\vec r(t)dt\in\mathbb R\\
t=\text{parameter}\\
\vec r=\text{vector-valued function}
\end{lgathered}
$$

---
### unit tangent vector
- vector with magnitude of 1 and direction of moving

---
### unit tangent vector
$$
\begin{lgathered}
\vec T=\frac{\vec r\ '(t)}{\|\vec r'(t)\|}\\
\vec r=\text{vector-valued function}\\
t=\text{parameter}
\end{lgathered}
$$

---
### unit normal vector
- vector with magnitude of 1 and direction of turning

---
### unit normal vector
$$
\begin{lgathered}
\vec N=\frac{\vec T\ '(t)}{\|\vec T'(t)\|}\\
\vec T=\text{unit tangent vector}\\
t=\text{parameter}
\end{lgathered}
$$

---
### tangential acceleration
- tangential component of acceleration

---
### tangential acceleration formula
$$
\begin{lgathered}
a_{T}=\vec r''(t)\cdot\vec T=\frac{\vec r\ '(t)\cdot\vec r\ ''(t)}{\|\vec r'(t)\|}\\
\vec r=\text{vector-valued function}\\
t=\text{parameter}\\
\vec T=\text{unit tangent vector}
\end{lgathered}
$$

---
### normal acceleration
- normal component of acceleration

---
### normal acceleration formula
$$
\begin{lgathered}
a_{N}=\vec r''(t)\cdot\vec N=\frac{\|\vec r'(t)\times\vec r''(t)\|}{\|\vec r'(t)\|}\\
\vec r=\text{vector-valued function}\\
t=\text{parameter}\\
\vec N=\text{unit normal vector}
\end{lgathered}
$$

---
### arc length
- distance between two points along arc

---
### arc length formula
$$
\begin{lgathered}
s=\int_{a}^{b}\sqrt{(\frac{dx}{dt})^{2}+(\frac{dy}{dt})^{2}+(\frac{dz}{dt})^{2}}dt=\int_{a}^{b}\|\vec r\ '(t)\|dt\\
s(t)=\int_{a}^{t}\sqrt{(\frac{dx}{du})^{2}+(\frac{dy}{du})^{2}+(\frac{dz}{du})^{2}}du=\int_{a}^{t}\|\vec r\ '(u)\|du\\
x,y,z=\text{position}\\
t=\text{parameter}\\
\vec r=\text{vector-valued function}
\end{lgathered}
$$

---
### curvature
- sharpness of curve
![300](3%20Calculus/Images/curvature.png)

---
### curvature formula
$$
\begin{lgathered}
\kappa(t)=\|\frac{d\vec T}{ds}\|=\frac{\|\vec T'(t)\|}{\|\vec r'(t)\|}=\frac{\|\vec r'(t)\times\vec r''(t)\|}{\|\vec r'(t)\|^3}=\frac{\vec r''(t)\cdot\vec N}{\|\vec r'(t)\|^2}\\
\vec T=\text{unit tangent vector}\\
\vec r=\text{vector-valued function}\\
t=\text{parameter}\
\end{lgathered}
$$

---
###  acceleration
- tangential acceleration and normal acceleration
- arc length and curvature
![200](3%20Calculus/Images/acceleration.png)

---
### acceleration formula
$$
\begin{lgathered}
\vec a(t)=a_{T}\vec T+a_{N}\vec N=\frac{d^2s}{dt^2}\vec T+\kappa(\frac{ds}{dt})^2\vec N\\
a=\text{acceleration}\\
t=\text{parameter}\\
\vec T=\text{unit tangent vector}\\
\vec N=\text{unit normal vector}\\
s=\text{arc length}\\
\kappa=\text{curvature}
\end{lgathered}
$$

---
