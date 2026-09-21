### antidifferentiation
- function whose derivative equal integrand

---
### antiderivative formula
$$
\begin{array}{l}
y=F(x)+c\\
c=\text{constant of integration}
\end{array}
$$

---
### calculate antiderivative
- inverse operation of differentiation

---
### differential equation
- equation involving derivatives of unknown function

---
### general solution of differential equation
- family of functions containing arbitrary constants that satisfy the differential equation

---
### calculate general solution of differential equation
- antiderivative formula

---
### particular solution of differential equation
- single function with initial conditions that satisfy the differential equation

---
### calculate particular solution of differential equation
- substitute initial condition into general solution
- solve constant of integration
- rewrite differential equation as $y=F(x)+c$

---
### indefinite integration
- operation of finding the family of functions whose derivative equal the integrand

---
### indefinite integral formula
$$
\begin{array}{l}
y=\int f(x)dx\\
f(x)=\text{integrand}\\
dx=\text{variable of integration}
\end{array}
$$

---
### calculate indefinite integral
- fit integration rule by rewriting integral
- find all the general solutions of the differential equation $dy=f(x)dx$

---
### position function
- position as function of time
![[3 Calculus/Images/position function.png]]

---
### position formula
$$
\begin{array}{l}
s(t)=\frac{1}{2}gt^{2}+v_{0}t+s_{0}\\
g=\text{gravity}\\
v=\text{velocity}\\
s=\text{position}
\end{array}
$$

---
### velocity function
- instantaneous rate of change of position aka the first derivative of the position function

---
### acceleration function
- instantaneous rate of change of velocity aka the second derivative of the position function

---
### sigma notation
- sum of sequence
![[3 Calculus/Images/sigma notation.png]]

---
### sigma formula
$$
\begin{array}{l}
\sum_{k=1}^{n}f(x_{k})=f(x_{1})+f(x_{2})+...+f(x_{n})\\
k=\text{index}\\
n=\text{number of terms}\\
\sum=\text{summation}\\
f(x_{k})=\text{kth term}
\end{array}
$$

---
### area
- surface space of rectangle
- subintervals equal rectangle width
- function value at subinterval endpoints equal rectangle height
![[3 Calculus/Images/area.png]]

---
### area formula
$$
\begin{array}{l}
\text{area}=\text{width}\times\text{height}
\end{array}
$$

---
### rectangle width formula
$$
\begin{array}{l}
\Delta x=\frac{b-a}{n}\\
a=\text{lower endpoint}\\
b=\text{upper endpoint}\\
n=\text{number of subintervals}
\end{array}
$$

---
### rectangle height formula
$$
\begin{array}{l}
y=f(x_{k})
\end{array}
$$

---
### subinterval endpoint
- bound rectangle width
![[3 Calculus/Images/subinterval endpoint.png]]

---
### subinterval endpoint formula
$$
\begin{array}{l}
x_{k}=a+(k)\Delta x\\
x_{k-1}=a+(k-1)\Delta x\\
a=\text{lower endpoint}
\end{array}
$$

---
### inscribed rectangle
- rectangle falls inside curve
- minimum function value of kth subinterval

---
### inscribed rectangle area formula
$$
\begin{array}{l}
\text{area}=f(m_{k})\Delta x
\end{array}
$$

---
### circumscribed rectangle
- rectangle extends outside curve
- maximum function value of kth subinterval

---
### circumscribed rectangle area formula
$$
\begin{array}{l}
\text{area}=f(M_{k})\Delta x
\end{array}
$$

---
### lower sum
- sum of inscribed rectangle area
![[3 Calculus/Images/lower sum.png]]

---
### lower sum formula
$$
\begin{array}{l}
s(n)=\sum_{k=1}^{n}f(m_{k})\Delta x
\end{array}
$$

---
### upper sum
- sum of circumscribed rectangle area
![[3 Calculus/Images/upper sum.png]]

---
### upper sum formula
$$
\begin{array}{l}
S(n)=\sum_{k=1}^{n}f(M_{k})\Delta x
\end{array}
$$

---
### limit of sums
- limit as *n* approaches infinity of both lower sums and upper sums equal

---
### limit of sums formula
$$
\begin{array}{l}
\lim_{n\to\infty}s(n)=\lim_{n\to\infty}\sum_{k=1}^{n}f(m_{k})\Delta x\\
\lim_{n\to\infty}S(n)=\lim_{n\to\infty}\sum_{k=1}^{n}f(M_{k})\Delta x\\
\lim_{n\to\infty}s(n)=\lim_{n\to\infty}S(n)
\end{array}
$$

---
### area of planar region
- area of continuous non negative region bound by graph axis endpoints
- the choice of $cₖ$ no effect on area because limit of sums equal
![[3 Calculus/Images/area of planar region.png|300]]

---
### area of planar region formula
$$
\begin{array}{l}
\text{area}=\lim_{n\to\infty}\sum_{k=1}^{n}f(c_{k})\\
x_{k-1}\le c_{k}\le x_{k}
\end{array}
$$

---
### riemann sum
- approximate area under curve by dividing curve into rectangles and summing the areas
![[3 Calculus/Images/riemann sum.png]]

---
### riemann sum formula
$$
\begin{array}{l}
S=\sum_{k=1}^{n}f(x_{k})\Delta x\\
\Delta x=x_{k}-x_{k-1}
\end{array}
$$

---
### partition
- division of interval into subintervals

---
### partition formula
$$
\begin{array}{l}
\Delta[a,b]=\{x_{0},x_{1},x_{2}...x_{n}\}=[x_{k-1},x_{k}]\\
a=x_{0}<x_{1}<x_{2}...x_{n}=b
\end{array}
$$

---
### integrable
- function continuous

---
### non integrable
- discontinuity

---
### definite integration
- operation of finding the area under curve between two limits of integration

---
### definite integral formula
$$
\begin{array}{l}
\int_{a}^{b}f(x)dx=\lim_{n\to\infty}\sum_{k=1}^{n}f(x_{k})\Delta x
\end{array}
$$

---
### calculate definite integral
- find the limit of riemann sum as rectangle width approaches zero

---
### negative rule
$$
\begin{array}{l}
\int_{b}^{a}f(x)dx=-\int_{a}^{b}f(x)dx
\end{array}
$$

---
### zero rule
$$
\begin{array}{l}
\int_{a}^{a}f(x)dx=0
\end{array}
$$

---
### constant multiple rule
$$
\begin{array}{l}
\int_{a}^{b}cf(x)dx=c\times\int_{a}^{b}f(x)dx
\end{array}
$$

---
### sum difference rule
$$
\begin{array}{l}
\int_{a}^{b}[f(x)\pm g(x)]dx=\int_{a}^{b}f(x)dx\pm\int_{a}^{b}g(x)dx
\end{array}
$$

---
### additive rule
$$
\begin{array}{l}
\int_{a}^{c}f(x)dx=\int_{a}^{b}f(x)dx+\int_{b}^{c}f(x)dx
\end{array}
$$

---
### inequality rule
$$
\begin{array}{l}
f(x)\le g(x)\to0\le\int_{a}^{b}f(x)dx\le\int_{a}^{b}g(x)dx
\end{array}
$$

---
### fundamental theorem of calculus
- difference between antiderivatives equal net change of function on $[a,b]$
![[3 Calculus/Images/fundamental theorem of calculus.png]]

---
### fundamental formula of calculus
$$
\begin{array}{l}
\int_{a}^{b}f(x)dx=F(b)-F(a)
\end{array}
$$

---
### mean value theorem of integration
- if $f(x)$ continuous on $[a,b]$ then there exists point such that function value under curve equal average function value over interval
![[3 Calculus/Images/mean value theorem of integration.png|300]]

---
### mean value formula of integration
$$
\begin{array}{l}
\int_{a}^{b}f(x)dx=f(x)(b-a)
\end{array}
$$

---
### average function value
- rectangle whose height equal average function value over interval
![[3 Calculus/Images/average function value.png]]

---
### average function value formula
$$
\begin{array}{l}
f(c)=\frac{1}{b-a}\int_{a}^{b}f(x)dx
\end{array}
$$

---
### accumulation function
- cumulative height as function of variable endpoint

---
### accumulation formula
$$
\begin{array}{l}
\int_{a}^{x}f(t)dt=F(x)-F(a)\\
x=\text{variable endpoint}
\end{array}
$$

---
### calculate cumulative height
- antiderivative as function of variable endpoint subtraction with $F(a)$

---
### fundamental theorem of calculus
- derivative of integral on $[a,x]$ equal integrand as function of variable endpoint with respect
![[3 Calculus/Images/fundamental theorem of calculus1.png]]

---
### fundamental formula of calculus
$$
\begin{array}{l}
\frac{d}{dx}\int_{a}^{u}f(t)dt=f(u)\frac{du}{dx}\\
u=\text{variable function endpoint}
\end{array}
$$

---
### chain rule
$$
\begin{array}{l}
\frac{dF}{dx}=\frac{dF}{du}\times\frac{du}{dx}
\end{array}
$$

---
### net change theorem
- sum of function rate of change equal function net change on $[a,b]$

---
### net change formula
$$
\begin{array}{l}
\int_{a}^{b}f'(x)dx=f(b)-f(a)
\end{array}
$$

---
### displacement function
- cumulative vector change of position as function of time
![[3 Calculus/Images/displacement function.png]]

---
### displacement formula
$$
\begin{array}{l}
\int_{a}^{b}v(t)dt=s(b)-s(a)\\
v=\text{velocity}
\end{array}
$$

---
### calculate particle displacement
- difference between position endpoints

---
### distance function
- cumulative scalar change of position as function of time
![[3 Calculus/Images/distance function.png]]

---
### distance formula
$$
\begin{array}{l}
\int_{a}^{b}|v(t)|dt=\sum|s(b)-s(a)|\\
v=\text{velocity}
\end{array}
$$

---
### calculate particle distance
- endpoints equal zeros of derivative
- sum absolute value of difference between position endpoints

---
### antiderivative of composite function
- decompose antiderivative by substituting inner function derivative into outer function integral

---
### antiderivative of composite formula
$$
\begin{array}{l}
\int_{a}^{b}(f\circ g)(x)g'(x)dx=(F\circ g)(x)+c
\end{array}
$$

---
### calculate antiderivative of composite function
- identify $f(x)$
- find the integral of outer function
- identify $g(x)$
- find the derivative of inner function
- if coefficient of $g'(x)$ not correct then apply the constant multiple rule

---
### constant multiple rule
$$
\begin{array}{l}
\int_{a}^{b}(f\circ g)(x)cg'(x)dx=\frac{1}{c}(F\circ g)(x)+c
\end{array}
$$

---
### change of variable
- rewrite integral in terms of *u* and *du*

---
### change of variable formula
$$
\begin{array}{l}
\int(f\circ g)(x)g'(x)dx=\int f(u)du=F(u)+c\\
u=g(x)\\
du=g'(x)dx
\end{array}
$$

---
### calculate change of variable
- identify $f(x)$
- find the integral of outer function
- identify $g(x)$ and rewrite in terms of *u*
- find the derivative of inner function and rewrite in terms of *du*
- simplify coefficient of *dx*

---
### definite integral change of variable
- evaluate fundamental formula of calculus in terms of *u*

---
### definite integral change of variable formula
$$
\begin{array}{l}
\int_{a}^{b}(f\circ g)(x)g'(x)dx=\int_{g(a)}^{g(b)}f(u)du=F(u)+c\\
u=g(x)\\
du=g'(x)dx
\end{array}
$$

---
### definite integration of even function
- if symmetrical about axis then even function
- two area of same polarity double area
![[3 Calculus/Images/definite integration of even function.png]]

---
### definite integration of even function formula
$$
\begin{array}{l}
\int_{-a}^{a}f(x)dx=2\int_{0}^{a}f(x)dx
\end{array}
$$

---
### definite integration of odd function
- if symmetrical about origin then odd function
- two area of opposite polarity cancel area
![[3 Calculus/Images/definite integration of odd function.png]]

---
### definite integration of odd function formula
$$
\begin{array}{l}
\int_{-a}^{a}f(x)dx=0
\end{array}
$$

---
