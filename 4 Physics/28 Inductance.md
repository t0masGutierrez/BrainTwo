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
![400](4%20Physics/Images/RL%20electric%20circuit.png)

---
### RL electric circuit formula
$$
\begin{aligned}
\sum V=v_R+v_L=iR+L\frac{di}{dt}=0\\
v=\text{voltage}\\
i=\text{electric current}\\
R=\text{resistance}\\
L=\text{self inductance}\\
t=\text{time}
\end{aligned}
$$

---
### increasing inductor
- positive terminal of inductor input electric current
- initial inductor equal open switch
- final inductor equal closed switch
![200](4%20Physics/Images/increasing%20inductor.png)

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
![200](4%20Physics/Images/decreasing%20inductor.png)

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
- if connected emf then increasing electric current
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
- if disconnected emf then decreasing electric current
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
![500](4%20Physics/Images/LC%20electric%20circuit.png)

---
### LC electric circuit formula
$$
\begin{aligned}
\sum V=v_L+v_C=L\frac{di}{dt}+\frac{q}{C}=0\\
v=\text{voltage}\\
L=\text{self inductance}\\
i=\text{electric current}\\
t=\text{time}\\
q=\text{electric charge}\\
C=\text{capacitance}
\end{aligned}
$$

---
### LC electromagnetic energy
- spatiotemporal energy inside LC electric circuit
- oscillating energy between inductor magnetic field and capacitor electric field
![500](4%20Physics/Images/LC%20potential%20energy.png)

---
### LC electromagnetic energy formula
$$
\begin{aligned}
E=\frac{Li^{2}}{2}+\frac{q^{2}}{2C}=\frac{LI^{2}}{2}=\frac{Q^{2}}{2C}\\
L=\text{self inductance}\\
i,I=\text{electric current}\\
q,Q=\text{electric charge}\\
C=\text{capacitance}
\end{aligned}
$$

---
### LC harmonic motion
- periodic motion where energy oscillate about equilibrium with restoring force directly proportional displacement
![300](4%20Physics/Images/LC%20harmonic%20motion.png)

---
### LC harmonic motion formula
$$
\begin{aligned}
q(t)=Q\cos(\omega t+\phi)\\
i(t)=-Q\omega\sin(\omega t+\phi)\\
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
### RLC electric circuit
- electric circuit with resistance, self inductance, and capacitance
![400](4%20Physics/Images/RLC%20electric%20circuit.png)

---
### RLC electric circuit formula
$$
\begin{aligned}
\sum V=v_R+v_L+v_C=iR+L\frac{di}{dt}+\frac{q}{C}=0\\
v=\text{voltage}\\
i=\text{electric current}\\
R=\text{resistance}\\
L=\text{self inductance}\\
t=\text{time}\\
q=\text{electric charge}\\
C=\text{capacitance}
\end{aligned}
$$

---
### damped RLC oscillation
- decreasing energy because of resistance
![350](4%20Physics/Images/damped%20oscillation.png)

---
### damped RLC oscillation formula
$$
\begin{aligned}
L\frac{d^{2}q}{dt^{2}}+R\frac{dq}{dt}+\frac{q}{C}=0\\
L=\text{self inductance}\\
q=\text{electric charge}\\
t=\text{time}\\
R=\text{resistance}\\
C=\text{capacitance}
\end{aligned}
$$

---
### underdamped RLC oscillation
- slow decrease of periodic motion
![300](4%20Physics/Images/underdamped%20RLC%20oscillation.png)

---
### underdamped RLC oscillation formula
$$
\begin{aligned}
R^{2}<\frac{4L}{C}\implies q(t)=Q\exp(-\gamma t)\cos(\omega_1t+\phi)\\
\gamma=\frac{R}{2L}\\
\omega_0=\sqrt{\frac{1}{LC}}\\
\omega_1=\sqrt{\omega_0^2-\gamma^2}\\
R=\text{resistance}\\
L=\text{self inductance}\\
C=\text{capacitance}\\
q,Q=\text{electric charge}\\
t=\text{time}\\
\gamma=\text{damping rate}\\
\omega=\text{angular frequency}\\
\phi=\text{phase angle}
\end{aligned}
$$

---
### underdamped RLC amplitude
- maximum displacement from underdamped RLC equilibrium

---
### underdamped RLC amplitude formula
$$
\begin{aligned}
A=\sqrt{q_0^2+(\frac{i_0+\gamma q_0}{\omega_1})^2}\\
\gamma=\frac{R}{2L}\\
\omega_0=\sqrt{\frac{1}{LC}}\\
\omega_1=\sqrt{\omega_0^2-\gamma^2}\\
q=\text{electric charge}\\
i=\text{electric current}\\
\gamma=\text{damping rate}\\
\omega=\text{angular frequency}\\
R=\text{resistance}\\
L=\text{self inductance}\\
C=\text{capacitance}
\end{aligned}
$$

---
### underdamped RLC phase angle
- initial state of underdamped RLC oscillation

---
### underdamped RLC phase angle formula
$$
\begin{aligned}
\phi=\arctan(\frac{i_0+\gamma q_0}{\omega_1q_0})\\
\gamma=\frac{R}{2L}\\
\omega_0=\sqrt{\frac{1}{LC}}\\
\omega_1=\sqrt{\omega_0^2-\gamma^2}\\
i=\text{electric current}\\
\gamma=\text{damping rate}\\
q=\text{electric charge}\\
\omega=\text{angular frequency}\\
R=\text{resistance}\\
L=\text{self inductance}\\
C=\text{capacitance}
\end{aligned}
$$

---
### driven damped RLC oscillation
- additional energy because of connected emf
![250](4%20Physics/Images/driven%20damped%20oscillation.png)

---
### driven damped RLC oscillation formula
$$
\begin{aligned}
L\frac{d^{2}q}{dt^{2}}+R\frac{dq}{dt}+\frac{q}{C}=\varepsilon_0\cos(\Omega t)\implies\\
q(t)=A\cos(\Omega t+\phi)\\
L=\text{self inductance}\\
q=\text{electric charge}\\
t=\text{time}\\
R=\text{resistance}\\
C=\text{capacitance}\\
\varepsilon=\text{emf}\\
\Omega=\text{angular frequency}\\
A=\text{amplitude}\\
\phi=\text{phase angle}
\end{aligned}
$$

---
### driven damped RLC amplitude
- maximum displacement from driven damped RLC equilibrium

---
### driven damped RLC amplitude formula
$$
\begin{aligned}
A=\varepsilon_0\sqrt{\frac{1}{(1/C-L\Omega^{2})^{2}+(R\Omega)^{2}}}=\frac{\varepsilon_0}{L}\sqrt{\frac{1}{(\omega_0^2-\Omega^2)^{2}+(2\gamma\Omega)^2}}\\
\gamma=\frac{R}{2L}\\
\omega_0=\sqrt{\frac{1}{LC}}\\
\varepsilon=\text{emf}\\
C=\text{capacitance}\\
L=\text{self inductance}\\
\Omega,\omega=\text{angular frequency}\\
b=\text{resistance}\\
\gamma=\text{damping rate}
\end{aligned}
$$

---
### driven damped RLC phase angle
- initial state of driven damped RLC oscillation

---
### driven damped RLC phase angle formula
$$
\begin{aligned}
\phi=\arctan(\frac{R\Omega}{1/C-L\Omega^2})=\arctan(\frac{2\gamma\Omega}{\omega_0^2-\Omega^2})\\
\gamma=\frac{R}{2L}\\
\omega_0=\sqrt{\frac{1}{LC}}\\
R=\text{resistance}\\
\Omega,\omega=\text{angular frequency}\\
C=\text{capacitance}\\
L=\text{self inductance}\\
\gamma=\text{damping rate}
\end{aligned}
$$

---
