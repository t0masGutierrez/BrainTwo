### wave
- disturbance propagating through medium

---
### wave formula
$$
\begin{aligned}
\psi(x,t)\\
\psi=\text{wave disturbance}\\
x=\text{position}\\
t=\text{time}
\end{aligned}
$$

---
### simple harmonic oscillator
- periodic motion where object oscillate about equilibrium with restoring force directly proportional displacement

---
### simple harmonic oscillator formula
$$
\begin{aligned}
F+kx=\frac{d^2x}{dt^2}+\frac{k}{m}x=0\\
x(t)=A\cos(\omega t+\phi)\\
A=\sqrt{x_{0}^{2}+\frac{v_{0}^{2}}{\omega^{2}}}\\
\phi=\arctan(\frac{-v_{0}}{\omega x_{0}})\\
\omega=\sqrt{\frac{k}{m}}\\
F=\text{force}\\
k=\text{spring constant}\\
x=\text{position}\\
t=\text{time}\\
m=\text{mass}\\
A=\text{amplitude}\\
\omega=\text{angular frequency}\\
\phi=\text{phase angle}\\
v=\text{velocity}
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
\sum V=v_L+v_C=L\frac{d^2q}{dt}+\frac{1}{C}q=0\\
q(t)=A\cos(\omega t+\phi)\\
A=\sqrt{q_{0}^{2}+\frac{i_{0}^{2}}{\omega^{2}}}\\\phi=\arctan(\frac{-i_{0}}{\omega q_{0}})\\
\omega=\sqrt{\frac{1}{LC}}\\
v=\text{voltage}\\
L=\text{self inductance}\\
q,Q=\text{electric charge}\\
t=\text{time}\\
C=\text{capacitance}\\
A=\text{amplitude}\\
\omega=\text{angular frequency}\\
\phi=\text{phase angle}\\
i=\text{electric current}
\end{aligned}
$$

---
### damped harmonic oscillator
- decreasing energy because of damping force
![350](4%20Physics/Images/damped%20oscillation.png)

---
### damped harmonic oscillator formula
$$
\begin{aligned}
m\frac{d^{2}x}{dt^{2}}+b\frac{dx}{dt}+kx=0\\
m=\text{mass}\\
x=\text{position}\\
t=\text{time}\\
b=\text{damping coefficient}\\
k=\text{spring constant}
\end{aligned}
$$

---
### underdamped harmonic oscillator
- slow decrease of periodic motion
![350](4%20Physics/Images/under%20damped%20oscillation.png)

---
### underdamped harmonic oscillator formula
$$
\begin{aligned}
\gamma<\omega_0\implies x(t)=A_{0}\exp(-\gamma t)\cos(\omega_1t+\phi)\\
A=\sqrt{x_0^2+(\frac{v_0+\gamma x_0}{\omega_1})^2}\\
\phi=\arctan(\frac{-v_0-\gamma x_0}{\omega_1x_0})\\
\gamma=\frac{b}{2m}\\
\omega_0=\sqrt{\frac{k}{m}}\\
\omega_1=\sqrt{\omega_0^2-\gamma^2}\\
\gamma=\text{damping rate}\\
\omega=\text{angular frequency}\\
x=\text{position}\\
t=\text{time}\\
A=\text{amplitude}\\
\gamma=\text{damping rate}\\
\phi=\text{phase angle}\\
v=\text{velocity}\\
b=\text{damping coefficient}\\
m=\text{mass}\\
k=\text{spring constant}
\end{aligned}
$$

---
### damped RLC harmonic oscillator
- decreasing energy because of resistance

---
### damped RLC harmonic oscillator formula
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
### underdamped RLC harmonic oscillator
- slow decrease of periodic motion

---
### underdamped RLC harmonic oscillator formula
$$
\begin{aligned}
R^{2}<\frac{4L}{C}\implies q(t)=A_0\exp(-\gamma t)\cos(\omega_1t+\phi)\\
A=\sqrt{q_0^2+(\frac{i_0+\gamma q_0}{\omega_1})^2}\\
\phi=\arctan(\frac{-i_0-\gamma q_0}{\omega_1q_0})\\
\gamma=\frac{R}{2L}\\
\omega_0=\sqrt{\frac{1}{LC}}\\
\omega_1=\sqrt{\omega_0^2-\gamma^2}\\
R=\text{resistance}\\
L=\text{self inductance}\\
C=\text{capacitance}\\
q=\text{electric charge}\\
t=\text{time}\\
A=\text{amplitude}\\
\gamma=\text{damping rate}\\
\omega=\text{angular frequency}\\
\phi=\text{phase angle}\\
i=\text{electric current}
\end{aligned}
$$

---
### driven damped harmonic oscillator
- additional energy because of driving force
![250](4%20Physics/Images/driven%20damped%20oscillation.png)

---
### driven damped harmonic oscillator formula
$$
\begin{aligned}
m\frac{d^{2}x}{dt^{2}}+b\frac{dx}{dt}+kx=F_0\cos(\Omega t)\\
x(t)=A\cos(\Omega t+\phi)\\
A=\frac{F_0}{m}\sqrt{\frac{1}{(\omega_0^2-\Omega^2)^{2}+(2\gamma\Omega)^2}}\\
\phi=\arctan(\frac{2\gamma\Omega}{\omega_0^2-\Omega^2})\\
m=\text{mass}\\
x=\text{position}\\
t=\text{time}\\
b=\text{damping coefficient}\\
k=\text{spring constant}\\
F=\text{force}\\
\Omega,\omega=\text{angular frequency}\\
A=\text{amplitude}\\
\phi=\text{phase angle}\\
\gamma=\text{damping rate}
\end{aligned}
$$

---
### driven damped RLC harmonic oscillator
- additional energy because of connected emf

---
### driven damped RLC harmonic oscillator formula
$$
\begin{aligned}
L\frac{d^{2}q}{dt^{2}}+R\frac{dq}{dt}+\frac{q}{C}=V_0\cos(\Omega t)\\
q(t)=A\cos(\Omega t+\phi)\\
A=\frac{V_0}{L}\sqrt{\frac{1}{(\omega_0^2-\Omega^2)^{2}+(2\gamma\Omega)^2}}\\
\phi=\arctan(\frac{2\gamma\Omega}{\omega_0^2-\Omega^2})\\
L=\text{self inductance}\\
q=\text{electric charge}\\
t=\text{time}\\
R=\text{resistance}\\
C=\text{capacitance}\\
V=\text{voltage}\\
\Omega,\omega=\text{angular frequency}\\
A=\text{amplitude}\\
\phi=\text{phase angle}\\
\gamma=\text{damping rate}
\end{aligned}
$$

---
### term
- definition

---
### term
- definition

---
### term
- definition

---
### term
- definition

---
### term
- definition

---
### term
- definition

---
