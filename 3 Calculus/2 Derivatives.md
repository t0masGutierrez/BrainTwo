### secant segment
- segment intersects curve at 2 or more points
![[3 Calculus/Images/secant segment.png]]

---
### tangent segment
- segment intersects curve at exactly 1 point
![[3 Calculus/Images/tangent segment.png]]

---
### normal segment
- segment intersects curve at perpendicular angle
![[3 Calculus/Images/normal segment.png|500]]

---
### point slope
- given slope and point

---
### point slope formula
$$
\begin{aligned}
y - y_{1} = m(x - x_{1}) \\
x_{1} = \text{x coordinate} \\
y_{1} = \text{y coordinate} \\
m = \text{slope}
\end{aligned}
$$

---
### average rate of change
- slope of secant segment

---
### average rate of change formula
$$
\begin{aligned}
m = \frac{f(b) - f(a)}{b - a}
\end{aligned}
$$

---
### instantaneous rate of change
- slope of tangent segment

---
### instantaneous rate of change formula
$$
\begin{aligned}
f'(n) = \lim_{x \to n} \frac{f(x) - f(n)}{x - n}
\end{aligned}
$$

---
### derivative
- slope of secant segment as $\Delta x$ approaches zero

---
### derivative formula
$$
\begin{aligned}
f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}
\end{aligned}
$$

---
### calculate derivative
- derivative formula
- substitute *h* into $f(x)$
- factorization
- remove common factors

---
### approximate derivative from table
- select nearest point
- construct secant segment
- average rate of change formula

---
### approximate derivative from graph
- select slope where segment intersects curve at exactly 1 point

---
### continuity
$$
\begin{aligned}
\lim_{x \to n} f(x) = f(n) \\
\lim_{x \to n^-} f(x) = \lim_{x \to n^+} f(x) \\
\lim_{x \to n} f(x) \ne \pm \infty
\end{aligned}
$$

---
### discontinuity
$$
\begin{aligned}
\lim_{x \to n} f(x) \ne f(n) \\
\lim_{x \to n^-} f(x) \ne \lim_{x \to n^+} f(x) \\
\lim_{x \to n} f(x) = \pm \infty
\end{aligned}
$$

---
### differentiable
- function continuous and derivative exists

---
### non differentiable
- discontinuity
- vertical tangent segment
- sharpness

---
### constant derivative rule
$$
\begin{aligned}
\frac{d}{dx}c = 0
\end{aligned}
$$

---
### calculate constant rule
- slope of horizontal segment equal zero

---
### constant multiple rule
$$
\begin{aligned}
\frac{d}{dx}cf(x) = cf'(x)
\end{aligned}
$$

---
### calculate constant multiple rule
- constant multiplication with function derivative

---
### power rule
$$
\begin{aligned}
\frac{d}{dx}x^n = nx^{n - 1}
\end{aligned}
$$

---
### calculate power rule
- $\frac{1}{x^n} = x^{-n}$
- convert function into exponent
- $^b√x^a = x^{\frac{a}{b}}$

---
### sum difference rule
$$
\begin{aligned}
\frac{d}{dx}f(x) \pm g(x) = f'(x) \pm g'(x)
\end{aligned}
$$

---
### calculate sum difference rule
- $nth$ function derivative addition or subtraction with $(n + 1)th$ function derivative

---
### product rule
$$
\begin{aligned}
\frac{d}{dx} f(x) \times g(x) = f'(x)g(x) + f(x)g'(x)
\end{aligned}
$$

---
### calculate product rule
- identify factors
- differentiate functions
- combine like terms

---
### quotient rule
$$
\begin{aligned}
\frac{d}{dx} f(x) \div g(x) = \frac{f'(x)g(x) - f(x)g'(x)}{g^2(x)}
\end{aligned}
$$

---
### calculate quotient rule
- identify divisors
- product rule except subtraction
- difference division with 2nd power of divisor

---
### composite function
- output of inner function equal input of outer function

---
### chain rule
$$
\begin{aligned}
\frac{d}{dx} {(f \circ g)(x)} = f'(g(x)g'(x) \\
\frac{dy}{dx} = \frac{dy}{du} \times \frac{du}{dx}
\end{aligned}
$$

---
### calculate chain rule
- outer function derivative of inner function multiplication with inner function derivative
- derive from outside to inside

---
### general power rule
$$
\begin{aligned}
\frac{d}{dx}f^n(x) = nf^{n-1}(x)
\end{aligned}
$$

---
### calculate general power rule
- for all *x* substitute *u*
- power rule
- for all *u* substitute *x*
- combine like terms

---
### double chain rule
$$
\begin{aligned}
\frac{d}{dx} {(f \circ g \circ h)(x)} = f'(g(h(x)g'(h(x)h'(x) \\
\frac{dy}{dx} = \frac{dy}{du} \times \frac{du}{dw} \times \frac{dw}{du}
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
\frac{dy}{dx} = \frac{dy}{du} \times \frac{du}{dx}
$$

---
### calculate implicit differentiation
- differentiate both sides of the equation with respect to *x*
- collect terms with $\frac{dy}{dx}$ on the left side of the equation and shift terms without $\frac{dy}{dx}$ to the right side of the equation
- factorization
- isolate $\frac{dy}{dx}$

---
