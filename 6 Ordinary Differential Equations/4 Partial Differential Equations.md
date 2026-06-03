### heat equation
- mathematical model describing the spatiotemporal flow of heat

---
### heat equation formula
$$
\begin{aligned}
\frac { \partial u } { \partial t } = k \frac { \partial ^ { 2 } u } { \partial x ^ { 2 } } \\
u ( 0 , t ) = u ( L , t ) = 0 \\
u ( x , 0 ) = f ( x ) \\
u = \text { heat } \\
t = \text { time } \\
k = \text { thermal diffusivity } \\
x = \text { space }
\end{aligned}
$$

---
### heat equation guess
- separation of temporal variable and spatial variable

---
### heat equation guess formula
$$
\begin{aligned}
u ( x , t ) = X ( x ) T ( t ) \\
x = \text { space } \\
t = \text { time }
\end{aligned}
$$

---
### system of heat equations
- system of ordinary differential equations for the spatiotemporal flow of heat

---
### system of heat equations formula
$$
\begin{aligned}
\frac { X ' ' ( x ) } { X ( x ) } = \frac { T ' ( t ) } { k T ( t ) } = - \lambda \implies \begin { c a s e s } X ' ' ( x ) + \lambda X ( x ) = 0 \\
T ' ( t ) + \lambda k T ( t ) = 0 \\
\end { c a s e s } \\
x = \text { space } \\
t = \text { time } \\
k = \text { thermal diffusivity } \\
\lambda = \text { eigenvalue }
\end{aligned}
$$

---
### general solution of spatial heat equation
- mathematical model describing the spatial flow of heat

---
### general solution of spatial heat equation formula
$$
\begin{aligned}
X ( x ) = \sin ( \frac { n \pi } { L } x ) \\
n = \text { natural number } \\
x = \text { space } \\
L = \text { length }
\end{aligned}
$$

---
### general solution of temporal heat equation
- mathematical model describing the temporal flow of heat

---
### general solution of temporal heat equation formula
$$
\begin{aligned}
T ( t ) = \exp ( - k \frac { n ^ { 2 } \pi ^ { 2 } } { L ^ { 2 } } t ) \\
k = \text { thermal diffusivity } \\
n = \text { natural number } \\
L = \text { length } \\
t = \text { time } \\
\end{aligned}
$$

---
### general solution of heat equation
- superposition of spatial modes with temporal decay

---
### general solution of heat equation formula
$$
\begin{aligned}
u ( x , t ) = \sum _ { n = 1 } ^ { N } c _ { n } \exp ( - k \frac { n ^ { 2 } \pi ^ { 2 } } { L ^ { 2 } } t ) \sin ( \frac { n \pi } { L } x ) \\
c = \text { fourier sine series } \\
k = \text { thermal diffusivity } \\
n = \text { natural number } \\
L = \text { length } \\
t = \text { time } \\
x = \text { space } \\
L = \text { length }
\end{aligned}
$$

---
### fourier sine series
- represent function on the interval as infinite sum of sine functions

---
### fourier sine series formula
$$
\begin{aligned}
c _ { n } = \frac { 2 } { L } \int _ { 0 } ^ { L } f ( x ) \sin ( \frac { n \pi } { L } x ) d x \\
L = \text { length } \\
n = \text { natural number } \\
x = \text { space } \\
L = \text { length }
\end{aligned}
$$

---
