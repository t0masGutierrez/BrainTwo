### rectangular equation
- $y$ dependent *x*

---
### rectangular equation formula
$$
\begin{aligned}
y=f(x)\\
x=\text{independent variable}\\
y=\text{dependent variable}
\end{aligned}
$$

---
### parametric equation
- $(x,y)$ dependent *t*

---
### parametric equation
$$
\begin{aligned}
\vec r(t)=(x,y)\\
x=f(t)\\
y=g(t)\\
\vec r=\text{position}\\
x,y=\text{dependent variable}\\
f,g=\text{function}\\
t=\text{parameter}
\end{aligned}
$$

---
### parametric curve
- set of points with defining parametric equations
![300](3%20Calculus/Images/parametric%20curve.png)

---
### parametric curve formula
$$
\begin{aligned}
R=\set{(x,y)\mid x=f(t),y=g(t),t\in I}=\vec r(I)\\
x,y=\text{dependent variable}\\
f,g=\text{function}\\
t=\text{parameter}\\
I=\text{interval}\\
\vec r=\text{position}
\end{aligned}
$$

---
### parameterization
- choose variable as parameter
- substitute parameter into rectangular equation
- parametric conversion rectangular
- choose the domain

---
### parameterization formula
$$
\begin{aligned}
y=f(x)\implies\vec r(t)=(t,f(t)),\ t\in I\\
y=\text{dependent variable}\\
f=\text{function}\\
x=\text{independent variable}\\
\vec r=\text{position}\\
t=\text{parameter}\\
I=\text{interval}
\end{aligned}
$$

---
### deparameterization
- solve parametric equation for parameter in terms of dependent variable
- substitute parameter into other parametric equation
- parametric conversion rectangular
- adjust the domain

---
### deparameterization formula
$$
\begin{aligned}
\vec r(t)=(t,f(t))\implies y=f(x),\ x\in f(I)\\
\vec r=\text{position}\\
t=\text{parameter}\\
f=\text{function}\\
y=\text{dependent variable}\\
x=\text{independent variable}\\
I=\text{interval}
\end{aligned}
$$

---
### derivative
- slope of tangent segment
![300](3%20Calculus/Images/parametric%20derivative.png)

---
### derivative formula
$$
\begin{aligned}
\frac{dy}{dx}=\frac{dy/dt}{dx/dt}=\frac{g'(t)}{f'(t)}\\
\frac{d^{2}y}{dx^{2}}=\frac{\frac{d}{dt}(dy/dx)}{dx/dt}
\end{aligned}
$$

---
### integral
- area under parametric curve
![250](3%20Calculus/Images/parametric%20integral.png)

---
### integral formula
$$
\begin{aligned}
\int_{\alpha}^{\beta}ydx=\int_{a}^{b}g(t)f'(t)dt\\
\int_{\alpha}^{\beta}xdy=\int_{a}^{b}f(t)g'(t)dt\\
\end{aligned}
$$

---
### arc length
- distance between endpoints along parametric arc
![300](3%20Calculus/Images/parametric%20arc%20length.png)

---
### arc length formula
$$
\begin{aligned}
L=\int_{a}^{b}\sqrt{(\frac{dx}{dt})^{2}+(\frac{dy}{dt})^{2}}dt
\end{aligned}
$$

---
### surface area
- two dimensional parametric surface via the rotation of function about axis of revolution
![300](3%20Calculus/Images/parametric%20surface%20area.png)

---
### surface area formula
$$
\begin{aligned}
A_x=2\pi\int_{a}^{b}g(t)\sqrt{(\frac{dx}{dt})^{2}+(\frac{dy}{dt})^{2}}dt\\
A_y=2\pi\int_{a}^{b}f(t)\sqrt{(\frac{dx}{dt})^{2}+(\frac{dy}{dt})^{2}}dt
\end{aligned}
$$

---
### linear parameterization
- parameterization of line

---
### linear parameterization formula
$$
\begin{aligned}
\vec r(t)=P_{0}(1-t)+P_{1}t\\
0\le t\le1\\
P=\text{point}\\
t=\text{parameter}
\end{aligned}
$$

---
### circular parameterization
- parameterization of circle

---
### circular parameterization formula
$$
\begin{aligned}
\frac{(x-h)^{2}}{a^{2}}+\frac{(y-k)^{2}}{b^{2}}=r^{2}\implies\vec r(t)=(h+r\cos t,k+r\sin t)\\
0\le t\le2\pi\\
x,y=\text{dependent variable}\\
a=\text{horizontal radius}\\
b=\text{vertical radius}\\
\vec r=\text{position}\\
t=\text{parameter}
\end{aligned}
$$

---
### elliptical parameterization
- parameterization of ellipse

---
### elliptical parameterization formula
$$
\begin{aligned}
\frac{(x-h)^{2}}{a^{2}}+\frac{(y-k)^{2}}{b^{2}}=1\implies\vec r(t)=(h+a\cos t,k+b\sin t)\\
0\le t\le2\pi\\
x,y=\text{dependent variable}\\
a=\text{horizontal radius}\\
b=\text{vertical radius}\\
\vec r=\text{position}\\
t=\text{parameter}
\end{aligned}
$$

---
### parabolic parameterization
- parameterization of parabola

---
### parabolic parameterization formula
$$
\begin{aligned}
(y-k)^2=4a(x-h)\implies\vec r(t)=(h+at^2,k+2at)\\
(x-h)^2=4a(y-k)\implies\vec r(t)=(h+2at,k+at^2)\\
-\infty<t<\infty\\
x,y=\text{dependent variable}\\
a=\text{focal length}\\
\vec r=\text{position}\\
t=\text{parameter}
\end{aligned}
$$

---
### hyperbolic parameterization
- parameterization of hyperbola

---
### hyperbolic parameterization formula
$$
\begin{aligned}
\frac{(x-h)^{2}}{a^{2}}-\frac{(y-k)^{2}}{b^{2}}=1\implies\vec r(t)=(h+a\sec t,k+b\tan t)\\
0\le t\le2\pi\\
x,y=\text{dependent variable}\\
a=\text{horizontal radius}\\
b=\text{vertical radius}\\
\vec r=\text{position}\\
t=\text{parameter}
\end{aligned}
$$

---
