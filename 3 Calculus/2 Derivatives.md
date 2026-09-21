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
\begin{aligned}
m=\frac{f(b)-f(a)}{b-a}\\
f=\text{function}\\
a=\text{initial point}\\
b=\text{terminal point}
\end{aligned}
$$

---
### instantaneous rate of change
- slope of tangent segment

---
### instantaneous rate of change formula
$$
\begin{aligned}
f'(c)=\lim_{x\to c}\frac{f(x)-f(c)}{x-c}\\
x=\text{independent variable}\\
c=\text{constant}\\
f=\text{function}
\end{aligned}
$$

---
### derivative
- slope of secant segment as change of independent variable approaches zero

---
### derivative formula
$$
\begin{aligned}
f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}\\
x=\text{independent variable}\\
h=\text{change}\\
f=\text{function}
\end{aligned}
$$

---
### continuous
- small change of independent variable cause small change of dependent variable

---
### continuous formula
$$
\begin{aligned}
\lim_{x\to c}f(x)=f(c)\\
\lim_{x\to c^{-}}f(x)=\lim_{x\to c^{+}}f(x)\\
\lim_{x\to c}f(x)\ne\pm\infty
\end{aligned}
$$

---
### differentiable
- there exists derivative of function

---
### differentiable formula
$$
\begin{aligned}
\exists\frac{d}{dx}f(x)<\infty\\
f=\text{function}\\
x=\text{independent variable}
\end{aligned}
$$

---
### constant derivative rule
- derivative of constant

---
### constant derivative rule formula
$$
\begin{aligned}
\frac{d}{dx}c=0
\end{aligned}
$$

---
### constant multiple rule
- derivative of constant multiple

---
### constant multiple rule formula
$$
\begin{aligned}
\frac{d}{dx}cf(x)=cf'(x)
\end{aligned}
$$

---
### power rule
- derivative of power

---
### power rule formula
$$
\begin{aligned}
\frac{d}{dx}x^{n}=nx^{n-1}
\end{aligned}
$$

---
sum rule
 - derivative of sum

---
### sum rule formula
$$
\begin{aligned}
\frac{d}{dx}f(x)\pm g(x)=f'(x)\pm g'(x)
\end{aligned}
$$

---
### product rule
- derivative of product

---
### product rule formula
$$
\begin{aligned}
\frac{d}{dx}f(x)\cdot g(x)=f'(x)g(x)+f(x)g'(x)
\end{aligned}
$$

---
### quotient rule
- derivative of quotient

---
### quotient rule formula
$$
\begin{aligned}
\frac{d}{dx}f(x)\div g(x)=\frac{f'(x)g(x)-f(x)g'(x)}{g^{2}(x)}
\end{aligned}
$$

---
### chain rule
- derivative of composite function

---
### chain rule formula
$$
\begin{aligned}
\frac{d}{dx}{(f\circ g)(x)}=f'(g(x))\cdot g'(x)\\
\frac{dy}{dx}=\frac{dy}{du}\cdot\frac{du}{dx}
\end{aligned}
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
