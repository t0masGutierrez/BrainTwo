### magnetic flux
- amount of magnetic field flowing through normal surface
![[4 Physics/Images/magnetic flux.png|300]]

---
### magnetic flux formula
$$
\begin{aligned}
\Phi = \vec B \cdot \vec A = B A \cos ( \theta ) \\
B = \text {magnetic field} \\
A = \text {area} \\
\theta = \text {angular position}
\end{aligned}
$$

---
### generating emf
- change magnetic field
- relative movement between magnetic field and conductor
- change area

---
### faradays law
- induced emf directly proportional negative rate of change of magnetic flux
![[4 Physics/Images/faradays law.png|400]]

---
### faradays formula
$$
\begin{aligned}
\epsilon = N \frac { - d \Phi } { dt } = N \frac { - d } { dt } \int _ { A _ { 1 } } ^ { A _ { 2 } } \vec B \cdot d \vec A \\
N = \text {number of loops} \\
\Phi = \text {magnetic flux} \\
t = \text {time} \\
B = \text {magnetic field} \\
A = \text {area}
\end{aligned}
$$

---
### calculate faradays law
- change magnetic flux
- induced emf create electric field
- electric field exert force on electric charge
- acceleration of electric charge generate electric current

---
### lenz law
- direction of induced emf equal opposite change of magnetic flux
![[4 Physics/Images/lenz law.png|500]]

---
### calculate lenz law
- increasing magnetic flux equal negative emf
- decreasing magnetic flux equal positive emf
- emf direction equal magnetic field direction

---
### uniform motional emf
- generate emf by moving uniform conductor through magnetic field
![[4 Physics/Images/uniform motional emf.png]]

---
### uniform motional emf formula
$$
\begin{aligned}
\epsilon = B L \frac { dx } { dt } = B L v \\
B = \text {magnetic field} \\
L = \text {length} \\
x = \text {position} \\
t = \text {time} \\
v = \text {velocity}
\end{aligned}
$$

---
### non uniform motional emf
- generate emf by moving non uniform conductor through magnetic field
![[4 Physics/Images/non uniform motional emf.png|250]]

---
### non uniform motional emf formula
$$
\begin{aligned}
\epsilon = \oint _ { L _ { 1 } } ^ { L _ { 2 } } ( \vec v \times \vec B ) \cdot d \vec L \\
v = \text {velocity} \\
B = \text {magnetic field} \\
L = \text {length}
\end{aligned}
$$

---
### static electric field
- work done by conservative force on electric charge  
![[4 Physics/Images/static electric field.png]]

---
### static electric field formula
$$
\begin{aligned}
\oint _ { L _ { 1 } } ^ { L _ { 2 } } \vec E \cdot d \vec L = 0 \\
E = \text {electric field} \\
L = \text {length}
\end{aligned}
$$

---
### induced electric field
- work done by non conservative force on electric charge
![[4 Physics/Images/induced electric field.png]]

---
### induced electric field formula
$$
\begin{aligned}
\oint _ { L _ { 1 } } ^ { L _ { 2 } } \vec E \cdot d \vec L = \frac { - d \Phi } { dt } \\
E = \text {electric field} \\
L = \text {length} \\
\Phi = \text {magnetic flux}
\end{aligned}
$$

---
### eddy current
- circulating loop of induced electric current
![[4 Physics/Images/eddy current.png|500]]

---
### eddy current formula
$$
\begin{aligned}
I = \frac { \epsilon } { R } \\
\epsilon = \text {emf} \\
R = \text {resistance}
\end{aligned}
$$

---
### conduction current
- rate of electric charge flow due to electric field

---
### conduction current formula
$$
\begin{aligned}
I _ { c } = \int _ { A _ { 1 } } ^ { A _ { 2 } } \vec J \cdot d \vec A \\
J = \text {electric current density} \\
A = \text {area}
\end{aligned}
$$

---
### displacement current
- rate of fictitious electric charge flow due to changing electric field

---
### displacement current formula
$$
\begin{aligned}
I _ { d } = \epsilon _ { 0 } \frac { d \Phi } { dt } \\
\epsilon _ { 0 } = 8.85 \times 10 ^ { - 12 } \\
\Phi = \text {electric flux}
\end{aligned}
$$

---
### amperes law
- magnetic field around amperian loop directly proportional net electric current inside amperian loop
![[4 Physics/Images/amperes law1.png|300]]

---
### amperes formula
$$
\begin{aligned}
\oint _ { L _ { 1 } } ^ { L _ { 2 } } \vec B \cdot d \vec L = \mu _ { 0 } ( I _ { c } + I
_ { d } ) _ { enc } \\
B = \text {magnetic field} \\
L = \text {length} \\
\mu _ { 0 } = 4 \pi \times 10 ^ { - 7 } \\
I _ { c } = \text {conduction current} \\
I _ { d } = \text {displacement current}
\end{aligned}
$$

---
### electromagnetism
- electric flux directly proportional net electric charge inside gaussian surface 
- magnetic flux inside gaussian surface equal zero
- changing magnetic flux generate electric field
- changing electric flux generate magnetic field
![[4 Physics/Images/electromagnetism.png|300]]

---
### electromagnetism formula
$$
\begin{aligned}
\oint _ { A _ { 1 } } ^ { A _ { 2 } } \vec E \cdot d \vec A = \frac { Q _ { enc } } { \epsilon _ { 0 } } \\
\oint _ { A _ { 1 } } ^ { A _ { 2 } } \vec B \cdot d \vec A = 0 \\
\oint _ { L _ { 1 } } ^ { L _ { 2 } } \vec E \cdot d \vec L = \frac { - d \Phi _ { B } } { dt } \\
\oint _ { L _ { 1 } } ^ { L _ { 2 } } \vec B \cdot d \vec L = \mu _ { 0 } ( I _ { c } + \epsilon _ { 0 } \frac { d \Phi _ { E } } { dt } ) _ { enc } \\
\end{aligned}
$$

---
### lorentz force
- net electromagnetic force 

---
### lorentz force formula
$$
\begin{aligned}
\vec F _ { net } = q ( \vec E + \vec v \times \vec B ) \\
q = \text {electric charge} \\
E = \text {electric field} \\
v = \text {velocity} \\
B = \text {magnetic field}
\end{aligned}
$$

---
### electric generator
- conversion of mechanical energy into electrical energy by inducing emf with rotating coil inside magnetic field
![[4 Physics/Images/electric generator.png|400]]

---
### electric generator formula
$$
\begin{aligned}
\epsilon = \epsilon _ { 0 } \sin ( \omega t ) = N B A \omega \sin ( \omega t ) \\
\epsilon _ { 0 } = \text {amplitude} \\
\omega = \text {angular frequency} \\
t = \text {time} \\
N = \text {number of loops} \\
B = \text {magnetic field} \\
A = \text {area}
\end{aligned}
$$

---
### electric motor
- conversion of electrical energy into mechanical energy
![[4 Physics/Images/electric motor.png]]

---
### electric motor formula
$$
\begin{aligned}
\epsilon = \epsilon _ { 0 } - \epsilon _ { induced } \\
\epsilon = \text {emf}
\end{aligned}
$$

---
