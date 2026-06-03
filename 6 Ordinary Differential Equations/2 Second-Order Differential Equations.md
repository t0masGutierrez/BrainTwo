### 2nd-order ode
- ordinary differential equation where the highest derivative equal 2

---
### 2nd-order ode formula
$$
\begin{aligned}
\frac { d ^ { 2 } y } { d t ^ { 2 } } = f ( t , y , \frac { dy } { dt } ) \\
t = \text { independent variable } \\
y = \text { solution }
\end{aligned}
$$

---
### 2nd-order linear ode formula
$$
\begin{aligned}
a _ { 2 } ( t ) y ' ' ( t ) + a _ { 1 } ( t ) y ' ( t ) + a _ { 0 } ( t ) y ( t ) = b ( t ) \\
y = \text { solution } \\
t = \text { independent variable } \\
a = \text { coefficient }
\end{aligned}
$$

---
### general solution of 2nd-order homogeneous linear ode formula
$$
\begin{aligned}
y ( t ) = C _ { 1 } y _ { 1 } ( t ) + C _ { 2 } y _ { 2 } ( t ) \\
C = \text { constant } \\
t = \text { independent variable } \\
y = \text { solution }
\end{aligned}
$$

---
### general solution of 2nd-order nonhomogeneous linear ode formula
$$
\begin{aligned}
y ( t ) = y _ { h } ( t ) + y _ { p } ( t ) \\
t = \text { independent variable } \\
y _ { h } = \text { homogeneous solution } \\
y _ { p } = \text { particular solution } \\
\end{aligned}
$$

---
### linear transformation
- function of vector space thats closed under vector addition and scalar multiplication

---
### linear transformation formula
$$
\begin{aligned}
L [ y _ { 1 } + y _ { 2 } ] = L [ y _ { 1 } ] + L [ y _ { 2 } ] \\
L [ c y ] = c L [ y ]
\end{aligned}
$$

---
### linear transformation property
- linear combination of homogeneous linear ode solution equal solution

---
### linear transformation property formula
$$
\begin{aligned}
L [ y _ { 1 } ] = L [ y _ { 2 } ] = 0 \implies L [ C _ { 1 } y _ { 1 } + C _ { 2 } y _ { 2 } ] = 0 \\
L = \text { linear transformation } \\
y = \text { solution } \\
C = \text { constant }
\end{aligned}
$$

---
### linear independence
- zero not expressible as nontrivial linear combination of the solutions of ode

---
### linear independence formula
$$
\begin{aligned}
C _ { 1 } y _ { 1 } ( t ) + C _ { 2 } y _ { 2 } ( t ) = 0 \implies C _ { 1 } = C _ { 2 } = 0 \\
C = \text { constant } \\
y = \text { solution } \\
t = \text { independent variable }
\end{aligned}
$$

---
### wronskian
- nonzero wronskian equal linear independence

---
### wronskian formula
$$
\begin{aligned}
W [ y _ { 1 } , y _ { 2 } ] ( t ) = \begin{vmatrix} y _ { 1 } & y _ { 2 } \\ y _ { 1 } ' & y _ { 2 } ' \end{vmatrix} = y _ { 1 } y _ { 2 } ' - y _ { 2 } y _ { 1 } ' \\
y = \text { solution } \\
t = \text { independent variable }
\end{aligned}
$$

---
### fundamental set
- pair of linearly independent solutions of ode

---
### fundamental set formula
$$
\begin{aligned}
L [ y _ { 1 } ] = L [ y _ { 2 } ] = 0 \ne W [ y _ { 1 } , y _ { 2 } ] ( t ) \implies \mathcal F = \set { y _ { 1 } , y _ { 2 } } \\
L = \text { linear transformation } \\
y = \text { solution } \\
W = \text { wronskian } \\
t = \text { independent variable } \\
\mathcal F = \text { fundamental set }
\end{aligned}
$$

---
### constant coefficient ode
- coefficient of 2nd-order homogeneous linear ode equal real number

---
### constant coefficient ode formula
$$
\begin{aligned}
a _ { 2 } y ' ' ( t ) + a _ { 1 } y ' ( t ) + a _ { 0 } y ( t ) = 0 \\
a = \text { coefficient } \\
y = \text { solution } \\
t = \text { independent variable }
\end{aligned}
$$

---
### characteristic equation
- substitute guess into ode

---
### characteristic equation formula
$$
\begin{aligned}
\begin{cases}
y ' ' = r ^ { 2 } \exp ( r t ) \\
y ' = r \exp ( r t ) \\
y = \exp ( r t ) \\
\end{cases} \implies a _ { 2 } r ^ { 2 } + a _ { 1 } r + a _ { 0 } = 0 \\
r = \text { root } \\
\exp ( r t ) = \text { guess } \\
t = \text { independent variable } \\
a = \text { coefficient }
\end{aligned}
$$

---
### general solution of characteristic polynomial
- quadratic formula equal root of characteristic polynomial

---
### general solution of characteristic polynomial formula
$$
\begin{aligned}
r = \frac { - a _ { 1 } \pm \sqrt { a _ { 1 } ^ { 2 } - 4 a _ { 2 } a _ { 0 } } } { 2 a _ { 2 } } \\
a = \text { coefficient }
\end{aligned}
$$

---
### distinct real roots
- positive discriminant 

---
### distinct real roots formula
$$
\begin{aligned}
r _ { 1 } \ne r _ { 2 } \implies y = C _ { 1 } \exp ( r _ { 1 } t ) + C _ { 2 } \exp ( r _ { 2 } t ) \\
y = \text { solution } \\
C = \text { constant } \\
r = \text { root } \\
t = \text { independent variable }
\end{aligned}
$$

---
### repeated real roots
- zero discriminant

---
### repeated real roots formula
$$
\begin{aligned}
r _ { 1 } = r _ { 2 } \implies y = \exp ( r t ) ( C _ { 1 } + C _ { 2 } t ) \\
y = \text { solution } \\
C = \text { constant } \\
r = \text { root } \\
t = \text { independent variable }
\end{aligned}
$$

---
### complex roots
- negative discriminant 

---
### complex roots formula
$$
\begin{aligned}
r = \alpha \pm \beta i \implies y = \exp ( \alpha t ) ( C _ { 1 } \cos \beta t + C _ { 2 } \sin \beta t ) \\
y = \text { solution } \\
C = \text { constant } \\
\alpha = \text { real part } \\
\beta = \text { imaginary part } \\
t = \text { independent variable }
\end{aligned}
$$

---
### undetermined coefficients
- method of solving nonhomogeneous linear constant coefficient ode
- guess the form of particular solution based on RHS
- if guess equal term of homogeneous solution then guess multiplication with independent variable until guess not equal term of homogeneous solution
- substitute guess and its derivatives into the ode
- solve undetermined coefficients

---
### undetermined coefficients formula
$$
\begin{aligned}
b ( t ) = \exp ( c t ) \implies y _ { p } = C \exp ( c t ) \\
b ( t ) = \sin c t \lor \cos c t \implies y _ { p } = C _ { 1 } \cos ( c t ) + C _ { 2 } \sin ( c t ) \\
b ( t ) = P _ { n } ( t ) \implies y _ { p } = C _ { 0 } + C _ { 1 } t + \dots + C _ { n } t ^ { n } \\
\end{aligned}
$$

---
### variation of parameters
- method of solving the particular solution of nonhomogeneous linear constant coefficient ode
- replace constant coefficients with variable coefficients
- solve the variable coefficients
- substitute variable coefficients into the particular solution

---
### variation of parameters formula
$$
\begin{aligned}
y _ { p } = u _ { 1 } y _ { 1 } + u _ { 2 } y _ { 2 } \\
u _ { 1 } = - \int \frac { b ( t ) y _ { 2 } ( t ) } { W [ y _ { 1 } , y _ { 2 } ] ( t ) } d t \\
u _ { 2 } = \int \frac { b ( t ) y _ { 1 } ( t ) } { W [ y _ { 1 } , y _ { 2 } ] ( t ) } d t \\
u = \text { coefficient } \\
y = \text { solution } \\
W = \text { wronskian }
\end{aligned}
$$

---
### series solution
- method of solving the general solution of nonhomogeneous linear variable coefficient ode
- guess the form of general solution equal power series
- compute derivatives of solution
- substitute derivatives of solution into ode
- reindex such that all powers of $x$ equal
- equate sum of coefficients with zero
- solve the recurrence relation

---
### series solution formula
$$
\begin{aligned}
y = \sum _ { n = 0 } ^ { \infty } a _ { n } ( x − x _ { 0 } ) ^ { n } \\
y ' = \sum _ { n = 1 } ^ { \infty } a _ { n } n ( x − x _ { 0 } ) ^ { n - 1 } \\
y ' ' = \sum _ { n = 1 } ^ { \infty } a _ { n } n ( n - 1 ) ( x − x _ { 0 } ) ^ { n - 2 }
\end{aligned}
$$

---
### reduction of order
- method of solving the general solution of homogeneous linear ode given 1 solution

---
### reduction of order formula
$$
\begin{aligned}
y _ { 2 } ( t ) = y _ { 1 } ( t ) \int \frac { \exp ( - \int a _ { 1 } ( t ) d t ) } { y _ { 1 } ^ { 2 } ( t ) } d t \\
y = \text { solution } \\
t = \text { independent variable } \\
a = \text { coefficient }
\end{aligned}
$$

---
### missing dependent variable
- method of reducing 2nd-order ode without dependent variable

---
### missing dependent variable formula
$$
\begin{aligned}
y ' ' ( t ) = f ( t , y ' ) \\
v ( t ) = y ' ( t ) \\
v ' ( t ) = f ( t , v )
\end{aligned}
$$

---
### missing independent variable
- method of reducing 2nd-order ode without independent variable

---
### missing independent variable formula
$$
\begin{aligned}
y ' ' ( t ) = f ( y , y ' ) \\
v ( t ) = y ' ( t ) \\
y ' ' ( t ) = \frac { dv } { dt } = ( \frac { dv } { dy } ) ( \frac { dy } { dt } ) = v \frac { dv } { dy } \\
v \frac { dv } { dy } = f ( y , y ' )
\end{aligned}
$$

---
### cauchy-euler ode
- linear ode where the power of $x$ equal the order of derivative

---
### cauchy-euler ode formula
$$
\begin{aligned}
y = x ^ { r } \\
a _ { 2 } x ^ { 2 } y ' ' ( t ) + a _ { 1 } x y ' ( t ) + a _ { 0 } y ( t ) = b ( t ) \implies a _ { 2 } r ( r - 1 ) + a _ { 1 } r + a _ { 0 } = b ( t ) \\
r _ { 1 } \ne r _ { 2 } \implies y _ { h } = C _ { 1 } x ^ { r _ { 1 } } + C _ { 2 } x ^ { r _ { 2 } } \\
r _ { 1 } = r _ { 2 } \implies y _ { h } = x ^ { r } ( C _ { 1 } + C _ { 2 } \ln | x | ) \\
r = \alpha \pm \beta i \implies y _ { h } = x ^ { \alpha } C _ { 1 } \cos \beta \ln | x | + x ^ { \alpha } C _ { 2 } \sin ( \beta \ln | x |
\end{aligned}
$$

---
### energy ode
- linear ode with the form of product rule

---
### energy ode formula
$$
\begin{aligned}
y ' ' ( t ) = f ( y ) \\
y ' ( t ) y ' ' ( t ) = f ( y ) y ' \\
\frac { 1 } { 2 } ( \frac { dy } { dt } ) ^ { 2 } = \int f ( y ) d y + C
\end{aligned}
$$

---
