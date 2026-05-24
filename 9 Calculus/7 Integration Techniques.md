### integration by parts
- antiderivatives involving products of functions

---
### integration by parts formula
$$
\begin{aligned}
\int u(x)dv = uv - \int v(x)du \\
dv = v'(x)dx \\
du = u'(x)dx
\end{aligned}
$$

---
### calculate integration by parts
- choose *u* such that derivative equal simpler function
- choose *dv* such that integral fit integral rule
- find *du* by differentiating *u* 
- find *v* by integrating *dv* 

---
### integration by parts strategy
- choose *u* in terms of LIATE
- logarithm, inverse trigonometric, algebraic, trigonometric, exponential
![[9 Calculus/Images/integration by parts strategy.png]]

---
### integration by parts strategy formula
$$
\begin{aligned}
\int x^n e^x dx, \ \int x^n \sin(x)dx, \ \int x^n \cos(x)dx \
\begin{cases}
u = x^n \\
dv = e^x dx, \ \sin(x)dx, \ \cos(x)dx
\end{cases} \\
\int x^n \ln(x) dx, \ \int x^n \arcsin(x)dx, \ \int x^n \arccos(x)dx \
\begin{cases}
u = \ln(x), \ \arcsin(x), \ \arccos(x) \\
dv = x^n dx
\end{cases} \\
\int e^x \sin(x) dx, \ \int e^x \cos(x)dx \
\begin{cases}
u = \sin(x), \ \cos(x) \\
dv = e^x dx
\end{cases}
\end{aligned}
$$

---
### tabular integration
- repeat integration by parts
![[9 Calculus/Images/tabular integration.png|300]]

---
### calculate tabular integration
- if $n \ge 2$ then tabular integration
- alternate sign
- differentiate *u* 
- integrate *dv* 
- repeat until derivative of *u* equal 0

---
### trigonometric integral
- antiderivatives involving powers of trigonometric functions

---
### trigonometric integral formula
$$
\begin{aligned}
\int \sin^m(x)\cos^n(x)dx \\
\int \sec^m(x)\tan^n(x)dx
\end{aligned}
$$

---
### trigonometric integral sine cosine formula
$$
\begin{aligned}
\int \textcolor{yellow}{\sin^{2k + 1}(x)} \cos^n(x)dx = \int \textcolor{yellow}{(\sin^2 x)^k} \cos^n(x) \textcolor{cyan}{\sin(x)dx} = \int \textcolor{yellow}{(1 - \cos^2x)^k} \cos^n(x) \textcolor{cyan}{\sin(x)dx} \\
\int \sin^m(x) \textcolor{yellow}{\cos^{2k + 1}(x)} dx = \int \sin^m(x) \textcolor{yellow}{(\cos^2 x)^k} \textcolor{cyan}{\cos(x)dx} = \int \sin^m(x) \textcolor{yellow}{(1 - \sin^2x)^k} \textcolor{cyan}{\cos(x)dx} \\
\int \sin^{2k}(x)\cos^{2k}(x)dx = \int (\frac{1 - \cos 2x}{2})^k (\frac{1 + \cos 2x}{2})^k dx
\end{aligned}
$$

---
### trigonometric integral secant tangent formula
$$
\begin{aligned}
\int \textcolor{yellow}{\sec^{2k}(x)} \tan^n(x)dx = \int \textcolor{yellow}{(\sec^2 x)^{k - 1}} \tan^n(x) \textcolor{cyan}{\sec^2(x)dx} = \int \textcolor{yellow}{(1 + \tan^2x)^{k - 1}} \tan^n(x) \textcolor{cyan}{\sec^2(x)dx} \\
\small{\int \sec^m(x) \textcolor{yellow}{\tan^{2k + 1}(x)} dx = \int \sec^{m - 1}(x) \textcolor{yellow}{(\tan^2 x)^k} \textcolor{cyan}{\sec(x)\tan(x) dx} = \int \sec^m(x) \textcolor{yellow}{(\sec^2x - 1)^k} \textcolor{cyan}{\sec(x)\tan(x) dx}} \\
\int \tan^n(x) = \int \textcolor{yellow}{(\tan^2 x)}\tan^{n - 2}(x)dx = \int \textcolor{yellow}{(\sec^2 x - 1)} \tan^{n - 2}(x) dx \\
\int \sec^m(x)dx = \int u(x)dv = uv - \int v(x)du \\ 
\end{aligned}
$$

---
### calculate trigonometric integral
- choose *du* 
- find *u* by integrating *du* 
- simplify integrand

---
### trigonometric substitution
- antiderivatives involving radical functions
![[9 Calculus/Images/trigonometric substitution.png]]

---
### trigonometric substitution formula
$$
\begin{aligned}
\sqrt{a^2 - u^2} = a \cos(\theta)  
\begin{cases}
u = a \sin(\theta) \\
du = a \cos(\theta)  d\theta
\end{cases} \\
\sqrt{a^2 + u^2} = a \sec(\theta)
\begin{cases}
u = a \tan(\theta) \\
du = a \sec^2(\theta) d\theta \\
\end{cases} \\
\sqrt{u^2 - a^2} = a \tan(\theta)
\begin{cases}
u = a \sec(\theta) \\
du = a \sec(\theta)\tan(\theta) d\theta \\
\end{cases}
\end{aligned}
$$

---
### calculate trigonometric substitution
- identify trigonometric substitution formula
- isolate *x* 
- differentiate *x* 
- substitute trigonometric formula into integral

---
### partial fraction decomposition
- decompose big rational function into small rational function(s)

---
### partial fraction decomposition formula
$$
\begin{aligned}
\frac{N(x)}{(px + q)^m} = \frac{A_{1}}{(px+1)^1} + \frac{A_{2}}{(px+1)^2} + ... + \frac{A_{m}}{(px+1)^m} \\
\frac{N(x)}{(ax^2 + bx + c)^n} = \frac{B_1x +C_{1}}{(ax^2 + bx + c)^1} + \frac{B_2x +C_{2}}{(ax^2 + bx + c)^2} + ... + \frac{B_nx +C_{n}}{(ax^2 + bx + c)^n} \\
\end{aligned}
$$

---
### calculate partial fraction decomposition
- perform long division before integrating improper fraction
- factor denominator into $(px + q)^m$ and $(ax^2 + bx + c)^n$ 
- for every $(px + q)^m$ the partial fraction decomposition must include the sum of the following *m* fractions $\frac{A_{m}}{(px + q)^m}$ 
- for every $(ax^2 + bx + c)^n$ the partial fraction decomposition must include the sum of the following *n* fractions $\frac{B_nx + C_{n}}{(ax^2 + bx + c)^n}$ 
- eliminate left denominator by multiplying partial fractions with left denominator
- sum of partial fractions equal $N(x)$ 
- solve distinct linear factors by substituting roots
- solve repeat linear factors or quadratic factors by equating coefficients

---
### methods of integration
- analytical
- symbolical
- numerical
![[9 Calculus/Images/methods of integration.png]]

---
### numerical integration
- approximate area under curve

---
### calculate numerical integration
- first term equal lower limit of integration
- last term equal upper limit of integration
- alternate coefficient of function
- increment argument of function by ∆x

---
### trapezoidal rule
- height as function of trapezoid equal approximate area under curve
![[9 Calculus/Images/trapezoidal rule.png]]

---
### trapezoidal formula
$$
\begin{aligned}
\int_{a}^b f(x)dx = \frac{\Delta x}{2}[f(x_{0}) + 2f(x_{1}) + 2f(x_{2}) + 2f(x_{3}) + ... + 2f(x_{n - 1}) + f(x_{n})] \\
k = 1, 2, 2, 2, ... 2, 1 \\
\Delta x = \frac{b - a}{n}
\end{aligned}
$$

---
### simpsons rule
- height as function of parabola equal approximate area under curve
![[9 Calculus/Images/simpsons rule.png]]

---
### simpsons formula
$$
\begin{aligned}
\int_{a}^b f(x)dx = \frac{\Delta x}{3}[f(x_{0}) + 4f(x_{1}) + 2f(x_{2}) + 4f(x_{3}) + ... + 4f(x_{n - 1}) + f(x_{n})] \\
k = 1, 4, 2, 4, ... 4, 1 \\
\Delta x = \frac{b - a}{n}
\end{aligned}
$$

---
### improper integral
- discontinuous integrand
- infinite limit of integration

---
### discontinuous integrand
- infinite discontinuity at or between limits of integration

---
### discontinuous integrand formula
$$
\begin{aligned}
(a, b] \implies \int_{a}^b f(x)dx = \lim_{c \rightarrow b^-} \int_{a}^c f(x)dx \\
{}[a, b) \implies \int_{a}^b f(x)dx = \lim_{c \rightarrow a^+} \int_{c}^b f(x)dx \\
\exists c[a, b] \implies \int_{a}^b f(x)dx = \lim_{c \rightarrow b^-} \int_{a}^c f(x)dx + \lim_{c \rightarrow a^+} \int_{c}^b f(x)dx
\end{aligned}
$$

---
### infinite lower limit of integration
- if limit does exist then improper integral converges
![[9 Calculus/Images/infinite lower limit of integration.png]]

---
### infinite lower limit of integration formula
$$
\begin{aligned}
\int_{-\infty}^b f(x)dx = \lim_{a \rightarrow -\infty} \int_{a}^b f(x)dx
\end{aligned}
$$

---
### infinite upper limit of integration
- if limit does not exist then improper integral diverges
![[9 Calculus/Images/infinite upper limit of integration.png]]

---
### infinite lower limit of integration formula
$$
\begin{aligned}
\int_{a}^{\infty} f(x)dx = \lim_{b \rightarrow \infty} \int_{a}^b f(x)dx
\end{aligned}
$$

---
### infinite limit of integration
- if either limits do not exist then improper integral diverges
![[9 Calculus/Images/infinite limit of integration.png]]

---
### infinite limit of integration formula
$$
\begin{aligned}
\int_{-\infty}^{\infty} f(x)dx = \int_{-\infty}^c f(x)dx + \int_{c}^{\infty} f(x)dx
\end{aligned}
$$

---
