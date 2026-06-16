### rectangular equation
- $y$ dependent *x* 

---
### rectangular equation formula
$$
\begin{aligned}
y = f ( x ) \\
x = \text {independent variable} \\
y = \text {dependent variable}
\end{aligned}
$$

---
### parametric equation
- $( x , y )$ dependent *t* 

---
### parametric equation
$$
\begin{aligned}
\vec r ( t ) = ( x , y ) \\
x = f ( t ) \\
y = g ( t ) \\
\vec r = \text {position} \\
x , y = \text {dependent variable} \\
f , g = \text {function} \\
t = \text {parameter}
\end{aligned}
$$

---
### parametric curve
- set of points together with defining parametric equations
![300](3%20Calculus/Images/parametric%20curve.png)

---
### parametric curve formula
$$
\begin{aligned}
C = \set { ( x , y ) \mid x = f ( t ) , y = g ( t ) , t \in I } = \vec r ( I ) \\
x , y = \text {dependent variable} \\
f , g = \text {function} \\
t = \text {parameter} \\
I = \text {interval} \\
\vec r = \text {position}
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
y = f ( x ) \implies \vec r ( t ) = ( t , f ( t ) ) , \  t \in I \\
y = \text {dependent variable} \\
f = \text {function} \\
x = \text {independent variable} \\
\vec r = \text {position} \\
t = \text {parameter} \\
I = \text {interval}
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
\vec r ( t ) = ( t , f ( t ) ) \implies y = f ( x ) , \  x \in f ( I ) \\
\vec r = \text {position} \\
t = \text {parameter} \\
f = \text {function} \\
y = \text {dependent variable} \\
x = \text {independent variable} \\
I = \text {interval}
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
\frac { dy } { dx } = \frac { d y / d t } { d x / d t } = \frac { g ' ( t ) } { f ' ( t ) } \\
\frac { d ^ { 2 } y } { d x ^ { 2 } } = \frac { \frac { d } { dt } ( d y / d x ) } { d x / d t }
\end{aligned}
$$

---
### integral
- operation of finding the area under plane curve between two limits of integration
![250](3%20Calculus/Images/integral.png)

---
### integral formula
$$
\begin{aligned}
\int _ { \alpha } ^ { \beta } y d x = \int _ { a } ^ { b } g ( t ) f ' ( t ) d t \\
\int _ { \alpha } ^ { \beta } x d y = \int _ { a } ^ { b } f ( t ) g ' ( t ) d t \\
\end{aligned}
$$

---
### arc length
- distance between endpoints along arc
![300](3%20Calculus/Images/parametric%20arc%20length.png)

---
### arc length formula
$$
\begin{aligned}
L = \int _ { a } ^ { b } \sqrt { ( \frac { dx } { dt } ) ^ { 2 } + ( \frac { dy } { dt } ) ^ { 2 } } d t
\end{aligned}
$$

---
### surface area
- two dimensional surface via the rotation of function about axis of revolution
![300](3%20Calculus/Images/surface%20area.png)

---
### surface area formula
$$
\begin{aligned}
y = 2 \pi \int _ { a } ^ { b } g ( t ) \sqrt { ( \frac { dx } { dt } ) ^ { 2 } + ( \frac { dy } { dt } ) ^ { 2 } } d t \\
x = 2 \pi \int _ { a } ^ { b } f ( t ) \sqrt { ( \frac { dx } { dt } ) ^ { 2 } + ( \frac { dy } { dt } ) ^ { 2 } } d t
\end{aligned}
$$

---
### linear parameterization
- parameterization of line

---
### linear parameterization formula
$$
\begin{aligned}
\vec r ( t ) = P _ { 0 } ( 1 - t ) + P _ { 1 } t \\
0 \le t \le 1 \\
P = \text {point} \\
t = \text {parameter}
\end{aligned}
$$

---
### circular parameterization
- parameterization of circle

---
### circular parameterization formula
$$
\begin{aligned}
\frac { ( x - h ) ^ { 2 } } { a ^ { 2 } } + \frac { ( y - k ) ^ { 2 } } { b ^ { 2 } } = r ^ { 2 } \implies \vec r ( t ) = ( h + r \cos t , k + r \sin t ) \\
0 \le t \le 2 \pi \\
x , y = \text {dependent variable} \\
a = \text {horizontal radius} \\
b = \text {vertical radius} \\
\vec r = \text {position} \\
t = \text {parameter}
\end{aligned}
$$

---
### elliptical parameterization
- parameterization of ellipse

---
### elliptical parameterization formula
$$
\begin{aligned}
\frac { ( x - h ) ^ { 2 } } { a ^ { 2 } } + \frac { ( y - k ) ^ { 2 } } { b ^ { 2 } } = 1 \implies \vec r ( t ) = ( h + a \cos t , k + b \sin t ) \\
0 \le t \le 2 \pi \\
x , y = \text {dependent variable} \\
a = \text {horizontal radius} \\
b = \text {vertical radius} \\
\vec r = \text {position} \\
t = \text {parameter}
\end{aligned}
$$

---
### hyperbolic parameterization
- parameterization of hyperbola

---
### hyperbolic parameterization formula
$$
\begin{aligned}
\frac { ( x - h ) ^ { 2 } } { a ^ { 2 } } - \frac { ( y - k ) ^ { 2 } } { b ^ { 2 } } = 1 \implies \vec r ( t ) = ( h + a \sec t , k + b \tan t ) \\
0 \le t \le 2 \pi \\
x , y = \text {dependent variable} \\
a = \text {horizontal radius} \\
b = \text {vertical radius} \\
\vec r = \text {position} \\
t = \text {parameter}
\end{aligned}
$$

---