### secant line
- line intersects curve at 2 or more points
![[3 Calculus/Images/secant segment.png|300]]

---
### tangent line
- line intersects curve at exactly 1 point
![[3 Calculus/Images/tangent segment.png|300]]

---
### average rate of change
- slope of secant segment

---
### average rate of change formula
$$
\begin{array}{l}
m=\frac{f(b)-f(a)}{b-a}\\
f=\text{function}\\
a=\text{initial point}\\
b=\text{terminal point}
\end{array}
$$

---
### instantaneous rate of change
- slope of tangent segment

---
### instantaneous rate of change formula
$$
\begin{array}{l}
f'(c)=\lim_{x\to c}\frac{f(x)-f(c)}{x-c}\\
x=\text{independent variable}\\
c=\text{constant}\\
f=\text{function}
\end{array}
$$

---
### derivative
- slope of secant segment as change of independent variable approaches zero

---
### derivative formula
$$
\begin{array}{l}
f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}\\
x=\text{independent variable}\\
h=\text{change}\\
f=\text{function}
\end{array}
$$

---
### continuous
- small change of independent variable cause small change of dependent variable

---
### continuous formula
$$
\begin{array}{l}
\lim_{x\to c}f(x)=f(c)\\
\lim_{x\to c^{-}}f(x)=\lim_{x\to c^{+}}f(x)\\
\lim_{x\to c}f(x)\ne\pm\infty
\end{array}
$$

---
### differentiable
- there exists derivative of function

---
### differentiable formula
$$
\begin{array}{l}
\exists\frac{d}{dx}f(x)<\infty\\
f=\text{function}\\
x=\text{independent variable}
\end{array}
$$

---
### constant derivative rule
- derivative of constant

---
### constant derivative rule formula
$$
\begin{array}{l}
\frac{d}{dx}c=0
\end{array}
$$

---
### constant multiple rule
- derivative of constant multiple

---
### constant multiple rule formula
$$
\begin{array}{l}
\frac{d}{dx}cf(x)=cf'(x)
\end{array}
$$

---
### power rule
- derivative of power

---
### power rule formula
$$
\begin{array}{l}
\frac{d}{dx}x^{n}=nx^{n-1}
\end{array}
$$

---
sum rule
 - derivative of sum

---
### sum rule formula
$$
\begin{array}{l}
\frac{d}{dx}f(x)\pm g(x)=f'(x)\pm g'(x)
\end{array}
$$

---
### product rule
- derivative of product

---
### product rule formula
$$
\begin{array}{l}
\frac{d}{dx}f(x)\cdot g(x)=f'(x)g(x)+f(x)g'(x)
\end{array}
$$

---
### quotient rule
- derivative of quotient

---
### quotient rule formula
$$
\begin{array}{l}
\frac{d}{dx}f(x)\div g(x)=\frac{f'(x)g(x)-f(x)g'(x)}{g^{2}(x)}
\end{array}
$$

---
### chain rule
- derivative of composite function

---
### chain rule formula
$$
\begin{array}{l}
\frac{d}{dx}{(f\circ g)(x)}=f'(g(x))\cdot g'(x)\\
\frac{dy}{dx}=\frac{dy}{du}\cdot\frac{du}{dx}
\end{array}
$$

---
### implicit function
- dependent variable not explicitly expressed as function of independent variable

---
### implicit differentiation
- treat dependent variable as composite function with respect to independent variable

---
### implicit differentiation formula
$$
\frac{dy}{dx}=\frac{dy}{du}\times\frac{du}{dx}
$$

---
### calculate implicit differentiation
- differentiate both sides of the equation with respect to *x*
- collect terms with $\frac{dy}{dx}$ on the left side of the equation and shift terms without $\frac{dy}{dx}$ to the right side of the equation
- factorization
- isolate $\frac{dy}{dx}$

---
