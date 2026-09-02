### inductance
- effectiveness of inducing emf due to changing electric current

---
### mutual inductance
- effectiveness of inducing emf between two conductors due to changing electric current
![200](4%20Physics/Images/mutual%20inductance.png)

---
### mutual inductance formula
$$
\begin{aligned}
M=\frac{N_{1}\Phi_{12}}{i_{2}}=\frac{N_{2}\Phi_{21}}{i_{1}}\\
N=\text{number of loops}\\
\Phi=\text{magnetic flux}\\
i=\text{electric current}
\end{aligned}
$$

---
### mutual inductance emf
- mutually induced emf between two conductors due to changing electric current

---
### mutual inductance emf formula
$$
\begin{aligned}
\varepsilon_{2}=-M\frac{di_{1}}{dt}\\
M=\text{mutual inductance}\\
i=\text{electric current}\\
t=\text{time}
\end{aligned}
$$

---
### self inductance
- effectiveness of inducing emf on self due to changing electric current
![300](4%20Physics/Images/self%20inductance.png)

---
### self inductance formula
$$
\begin{aligned}
L=\frac{N\Phi}{i}\\
N=\text{number of loops}\\
\Phi=\text{magnetic flux}\\
i=\text{electric current}
\end{aligned}
$$

---
### solenoid self inductance formula
$$
\begin{aligned}
L=\frac{\mu_{0}N^{2}A}{\ell}\\
\mu_{0}=4\pi\times10^{-7}\\
N=\text{number of loops}\\
A=\text{area}\\
\ell=\text{length}
\end{aligned}
$$

---
### toroid self inductance formula
$$
\begin{aligned}
L=\frac{\mu_{0}N^{2}A}{2\pi R}\\
\mu_{0}=4\pi\times10^{-7}\\
N=\text{number of loops}\\
A=\text{area}\\
R=\text{radius}
\end{aligned}
$$

---
### self inductance emf
- self induced emf due to changing electric current
![[4 Physics/Images/self inductance emf.png|350]]

---
### self inductance emf formula
$$
\begin{aligned}
\varepsilon=-L\frac{di}{dt}\\
L=\text{self inductance}\\
i=\text{electric current}\\
t=\text{time}
\end{aligned}
$$

---
### inductor
- electric component designed to oppose changing electric current
![500](4%20Physics/Images/inductor.png)

---
### inductor formula
$$
\begin{aligned}
v_{L}=L\frac{di}{dt}\\
L=\text{self inductance}\\
i=\text{electric current}\\
t=\text{time}
\end{aligned}
$$

---
### kirchhoffs direction rule
- direction of voltage across inductor equal direction of changing electric current
![300](4%20Physics/Images/kirchhoffs%20direction%20rule.png)

---
### kirchhoffs direction rule formula
$$
\begin{aligned}
\frac{di}{dt}=0\implies v_L=0\\
\frac{di}{dt}>0\implies v_L>0\\
\frac{di}{dt}<0\implies v_L<0\\
\end{aligned}
$$

---
### magnetic potential energy
- energy of position inside inductor
![300](4%20Physics/Images/magnetic%20potential%20energy.png)

---
### magnetic potential energy formula
$$
\begin{aligned}
U=\frac{1}{2}LI^{2}\\
L=\text{self inductance}\\
I=\text{electric current}
\end{aligned}
$$

---
### energy density
- measure of magnetic potential energy compactness

---
### energy density formula
$$
\begin{aligned}
u=\frac{B^{2}}{2\mu_{0}}\\
B=\text{magnetic field}\\
\mu_{0}=4\pi\times10^{-7}
\end{aligned}
$$

---
### RL electric circuit
- electric circuit with resistance and self inductance
- connected emf increase electric current
- disconnected emf decrease electric current
![250](4%20Physics/Images/RL%20electric%20circuit.png)

---
### increasing inductor
- positive terminal of inductor input electric current
- initial inductor equal open switch
- final inductor equal closed switch
![250](4%20Physics/Images/increasing%20inductor.png)

---
### increasing inductor formula
$$
\begin{aligned}
i(t_0)=0\\
\lim_{t\rightarrow\infty}i(t)=I
\end{aligned}
$$

---
### decreasing inductor
- positive terminal of inductor output electric current
- initial inductor equal closed switch
- final inductor equal open switch
![250](4%20Physics/Images/decreasing%20inductor.png)

---
### decreasing inductor formula
$$
\begin{aligned}
i(t_0)=I\\
\lim_{t\rightarrow\infty}i(t)=0
\end{aligned}
$$

---
### time constant
- measure of increasing time
- small time constant increase faster
- large time constant increase slower

---
### time constant formula
$$
\begin{aligned}
\tau=\frac{L}{R}\\
L=\text{self inductance}\\
R=\text{resistance}
\end{aligned}
$$

---
### increasing electric current
- electric current through increasing inductor as function of time
![300](4%20Physics/Images/increasing%20electric%20current.png)

---
### increasing electric current formula
$$
\begin{aligned}
i(t)=\frac{V}{R}(1-e^{-Rt/L})=I(1-e^{-t/\tau})\\
V=\text{voltage}\\
R=\text{resistance}\\
t=\text{time}\\
L=\text{self inductance}\\
I=\text{electric current}\\
\tau=\text{time constant}
\end{aligned}
$$

---
### decreasing electric current
- electric current through decreasing inductor as function of time
![[4 Physics/Images/decreasing electric current.png|300]]

---
### decreasing electric current formula
$$
\begin{aligned}
i(t)=I(e^{-t/\tau})\\
I=\text{electric current}\\
t=\text{time}\\
\tau=\text{time constant}
\end{aligned}
$$

---
### LC electric circuit
- electric circuit with self inductance and capacitance
- oscillating energy between inductor magnetic field and capacitor electric field
![[4 Physics/Images/LC electric circuit.png|500]]

---
### LC potential energy
- energy of position inside LC electric circuit
![[4 Physics/Images/LC potential energy.png]]

---
### LC potential energy formula
$$
\begin{aligned}
U=\frac{q^{2}}{2C}+\frac{Li^{2}}{2}=\frac{Q^{2}}{2C}=\frac{LI^{2}}{2}\\
q=\text{electric charge}\\
C=\text{capacitance}\\
L=\text{self inductance}\\
i=\text{electric current}
\end{aligned}
$$

---
### calculate LC potential energy
- increasing electric energy equal decreasing magnetic energy
- maximum magnetic energy equal zero electric energy

---
### simple harmonic motion
- periodic motion where object oscillate about equilibrium with restoring force directly proportional displacement
![[4 Physics/Images/simple harmonic motion.png|400]]

---
### simple harmonic motion formula
$$
\begin{aligned}
x(t)=A\cos(\omega t+\phi)\\
v(t)=-A\omega\sin(\omega t+\phi)\\
a(t)=-A\omega^{2}\cos(\omega t+\phi)\\
\omega=\sqrt{\frac{k}{m}}\\
A=\text{amplitude}\\
\omega=\text{angular frequency}\\
t=\text{time}\\
\phi=\text{phase angle}\\
k=\text{spring constant}\\
m=\text{mass}
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
![[4 Physics/Images/LC harmonic motion.png|500]]

---
### LC harmonic motion formula
$$
\begin{aligned}
q(t)=Q\cos(\omega t+\phi)\\
\frac{dq}{dt}=-Q\omega\sin(\omega t+\phi)\\
\frac{di}{dt}=-Q\omega^{2}\cos(\omega t+\phi)\\
\omega=\sqrt{\frac{1}{LC}}\\
Q=\text{electric charge}\\
\omega=\text{angular frequency}\\
t=\text{time}\\
\phi=\text{phase angle}\\
L=\text{self inductance}\\
C=\text{capacitance}
\end{aligned}
$$

---
### calculate LC harmonic motion
- maximum initial electric charge and zero initial electric current equal zero phase angle
- zero initial electric charge and minimum initial electric current equal $\pi/2$ phase angle

---
### RLC electric circuit
- electric circuit with resistance, self inductance, and capacitance
![[4 Physics/Images/RLC electric circuit.png|300]]

---
### calculate RLC electric circuit
- damped oscillating energy between capacitor electric field and inductor magnetic field

---
### damped oscillation
- decreasing harmonic motion by subtracting energy via damping force
![[4 Physics/Images/damped oscillation1.png|400]]

---
### damped oscillation formula
$$
\begin{aligned}
x(t)=A(e^{-bt/2m})\cos(\omega t+\phi)\\
\omega=\sqrt{(\frac{k}{m})-(\frac{b^{2}}{4m^{2}})}\\
A=\text{amplitude}\\
b=\text{damping coefficient}\\
t=\text{time}\\
m=\text{mass}\\
\omega=\text{angular frequency}\\
k=\text{spring constant}\\
\phi=\text{phase angle}
\end{aligned}
$$

---
### damped RLC oscillation
- decreasing LC harmonic motion by subtracting energy via resistance
![[4 Physics/Images/damped RLC oscillation.png|300]]

---
### damped RLC oscillation formula
$$
\begin{aligned}
q(t)=Q(e^{-Rt/2L})\cos(\omega t+\phi)\\
\omega=\sqrt{(\frac{1}{LC})-(\frac{R^{2}}{4L^{2}})}\\
Q=\text{electric charge}\\
R=\text{resistance}\\
t=\text{time}\\
L=\text{self inductance}\\
\omega=\text{angular frequency}\\
\phi=\text{phase angle}
\end{aligned}
$$

---
