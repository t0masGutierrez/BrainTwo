### inductance
- effectiveness of inducing emf due to changing electric current

---
### mutual inductance
- effectiveness of inducing emf between two conductors due to changing electric current
---
### mutual inductance formula
$$
\begin{aligned}
M = \frac{N_{1}\Phi_{12}}{i_{2}} = \frac{N_{2}\Phi_{21}}{i_{1}} \\
N = \text{number of loops} \\
\Phi = \text{magnetic flux} \\
i = \text{electric current}
\end{aligned}
$$

---
### mutual inductance emf
- mutually induced emf between two conductors due to changing electric current

---
### mutual inductance emf formula
$$
\begin{aligned}
\epsilon_{2} = -M\frac{di_{1}}{dt} \\
M = \text{mutual inductance} \\
i = \text{electric current} \\
t =\text{time} 
\end{aligned}
$$

---
### self inductance
- effectiveness of inducing emf on self due to changing electric current
---
### self inductance formula
$$
\begin{aligned}
L = \frac{N\Phi}{i} \\
N = \text{number of loops} \\
\Phi = \text{magnetic flux} \\
i = \text{electric current}
\end{aligned}
$$

---
### solenoid self inductance formula
$$
\begin{aligned}
L = \frac{\mu_{0} N^2A}{L'} \\
\mu_{0} = 4\pi \times 10^{-7} \\
N = \text{number of loops} \\
A = \text{area} \\
L' = \text{length}
\end{aligned}
$$

---
### toroid self inductance formula
$$
\begin{aligned}
L = \frac{\mu_0N^2A}{2\pi R} \\
\mu_{0} = 4\pi \times 10^{-7} \\
N = \text{number of loops} \\
A = \text{area} \\
R = \text{radius}
\end{aligned}
$$

---
### self inductance emf
- self induced emf due to changing electric current
---
### self inductance emf formula
$$
\begin{aligned}
\epsilon = -L\frac{di}{dt} \\
L = \text{self inductance} \\
i = \text{electric current} \\
t = \text{time}
\end{aligned}
$$

---
### inductor
- electric component designed to oppose changing electric current
---
### inductor formula
$$
\begin{aligned}
v_{L} = L\frac{di}{dt} \\
L = \text{self inductance} \\
i = \text{electric current} \\
t = \text{time}
\end{aligned}
$$

---
### kirchhoffs loop rule
- sum of voltage around loop must equal zero
- conservation of energy
---
### kirchhoffs loop formula
$$
\begin{aligned}
\sum V = 0 \\
V = \text{voltage}
\end{aligned}
$$

---
### calculate kirchhoffs loop rule
- identify loop
- choose direction of travel
- for every loop apply kirchhoffs loop rule
- solve system of equations 

---
### magnetic potential energy
- energy of position inside inductor
---
### magnetic potential energy formula
$$
\begin{aligned}
U = \frac{LI^2}{2} \\
L = \text{self inductance} \\
I = \text{electric current}
\end{aligned}
$$

---
### energy density
- measure of magnetic potential energy compactness

---
### energy density formula
$$
\begin{aligned}
u = \frac{B^2}{2\mu_{0}} \\
B = \text{magnetic field} \\
\mu_{0} = 4 \pi \times 10^{-7}
\end{aligned}
$$

---
### RL electric circuit
- electric circuit with resistance and self inductance
---
### calculate RL electric circuit
- increasing equal connect emf
- decreasing equal disconnect emf

---
### increasing inductor
- positive terminal of inductor input electric current
---
### calculate increasing inductor
- initial inductor equal open switch therefore zero electric current
- final inductor equal closed switch therefore maximum electric current

---
### decreasing inductor
- positive terminal of inductor output electric current
---
### calculate decreasing inductor
- initial inductor equal closed switch therefore maximum electric current
- final inductor equal open switch therefore zero electric current

---
### time constant
- measure of increasing time

---
### time constant formula
$$
\begin{aligned}
\tau = \frac{L}{R} \\
L = \text{self inductance} \\
R = \text{resistance}
\end{aligned}
$$

---
### calculate time constant
- small time constant equal faster increasing
- large time constant equal slower increasing

---
### increasing electric current
- electric current through increasing inductor as function of time
---
### increasing electric current formula
$$
\begin{aligned}
i(t) = \frac{V}{R}(1 - e^{-Rt/L}) = I(1 - e^{-t/\tau}) \\
V = \text{voltage} \\
R = \text{resistance} \\
t = \text{time} \\
L = \text{self inductance} \\
I = \text{electric current} \\
\tau = \text{time constant}
\end{aligned}
$$

---
### decreasing electric current
- electric current through decreasing inductor as function of time
---
### decreasing electric current formula
$$
\begin{aligned}
i(t) = I(e^{-t/\tau}) \\
I = \text{electric current} \\
t = \text{time} \\
\tau = \text{time constant}
\end{aligned}
$$

---
### LC electric circuit
- electric circuit with self inductance and capacitance
---
### calculate LC electric circuit
- oscillating energy between capacitor electric field and inductor magnetic field

---
### LC potential energy
- energy of position inside LC electric circuit
---
### LC potential energy formula
$$
\begin{aligned}
U = \frac{q^2}{2C} + \frac{Li^2}{2} = \frac{Q^2}{2C} = \frac{LI^2}{2} \\
q = \text{electric charge} \\
C = \text{capacitance} \\
L = \text{self inductance} \\
i = \text{electric current}
\end{aligned}
$$

---
### calculate LC potential energy
- increasing electric energy equal decreasing magnetic energy
- maximum magnetic energy equal zero electric energy

---
### simple harmonic motion
- periodic motion where object oscillate about equilibrium with restoring force directly proportional displacement
---
### simple harmonic motion formula
$$
\begin{aligned}
x(t) = A \cos(\omega t + \phi) \\
v(t) = -A\omega \sin(\omega t + \phi) \\
a(t) = -A \omega ^2\cos(\omega t + \phi) \\
\omega = \sqrt{\frac{k}{m}} \\
A = \text{amplitude} \\
\omega = \text{angular frequency} \\
t = \text{time} \\
\phi = \text{phase angle} \\
k = \text{spring constant} \\
m = \text{mass}
\end{aligned}
$$

---
### calculate simple harmonic motion
- potential energy equal electric energy
- kinetic energy equal magnetic energy
- position equal electric charge
- velocity equal electric current
- spring equal capacitor
- mass equal inductor

---
### LC harmonic motion
- periodic motion where energy oscillate about equilibrium with restoring force directly proportional displacement
---
### LC harmonic motion formula
$$
\begin{aligned}
q(t) = Q\cos(\omega t + \phi) \\
\frac{dq}{dt} = -Q\omega \sin(\omega t + \phi) \\
\frac{di}{dt} = -Q\omega^2 \cos(\omega t + \phi) \\
\omega = \sqrt{\frac{1}{LC}} \\
Q = \text{electric charge} \\
\omega = \text{angular frequency} \\
t = \text{time} \\
\phi = \text{phase angle} \\
L = \text{self inductance} \\
C = \text{capacitance}
\end{aligned}
$$

---
### calculate LC harmonic motion
- maximum initial electric charge and zero initial electric current equal zero phase angle 
- zero initial electric charge and minimum initial electric current equal $\pi/2$ phase angle

---
### RLC electric circuit
- electric circuit with resistance, self inductance, and capacitance
---
### calculate RLC electric circuit
- damped oscillating energy between capacitor electric field and inductor magnetic field

---
### damped oscillation
- decreasing harmonic motion by subtracting energy via damping force
---
### damped oscillation formula
$$
\begin{aligned}
x(t) = A(e^{-bt/2m})\cos(\omega t + \phi) \\
\omega = \sqrt{(\frac{k}{m}) - (\frac{b^2}{4m^2})} \\
A = \text{amplitude} \\
b = \text{damping coefficient} \\
t = \text{time} \\
m = \text{mass} \\
\omega = \text{angular frequency} \\
k = \text{spring constant} \\
\phi = \text{phase angle}
\end{aligned}
$$

---
### damped RLC oscillation
- decreasing LC harmonic motion by subtracting energy via resistance
---
### damped RLC oscillation formula
$$
\begin{aligned}
q(t) = Q(e^{-Rt/2L})\cos(\omega t + \phi) \\
\omega = \sqrt{(\frac{1}{LC}) - (\frac{R^2}{4L^2})} \\
Q = \text{electric charge} \\
R = \text{resistance} \\
t = \text{time} \\
L = \text{self inductance} \\
\omega = \text{angular frequency} \\
\phi = \text{phase angle}
\end{aligned}
$$

---
