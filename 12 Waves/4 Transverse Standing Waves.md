### transverse wave
- particle oscillation perpendicular wave propagation
![350](4%20Physics/Images/transverse%20wave.png)

---
### transverse wave formula
$$
\begin{lgathered}
\psi\perp v\\
\psi=\text{wave}\\
v=\text{velocity}
\end{lgathered}
$$

---
### standing wave
- superposition of two identical waves traveling opposite directions
![[4 Physics/Images/standing wave.gif]]

---
### standing wave formula
$$
\begin{lgathered}
A\sin(kx-\omega t)+\\
A\sin(kx+\omega t)=\\
2A\sin(kx)\sin(\omega t)\\
A=\text{amplitude}\\
k=\text{wavenumber}\\
x=\text{position}\\
\omega=\text{angular frequency}\\
t=\text{time}\\
\phi=\text{phase angle}
\end{lgathered}
$$

---
### wave velocity
- rate of wavefront aka phase velocity

---
### wave velocity formula
$$
\begin{lgathered}
v=\lambda f=\frac{\omega}{k}\\
\lambda=\text{wavelength}\\
f=\text{oscillation frequency}\\
\omega=\text{angular frequency}\\
k=\text{wavenumber}
\end{lgathered}
$$

---
### taut string wave velocity
- rate of wavefront along string under tension

---
### taut string wave velocity formula
$$
\begin{lgathered}
v=\sqrt{\frac{F_{T}}{\mu}}\\
F=\text{force}\\
\mu=\text{linear mass density}
\end{lgathered}
$$

---
### wave equation
- temporal acceleration directly proportional spatial curvature
![300](4%20Physics/Images/wave%20equation.png)

---
### wave equation formula
$$
\begin{lgathered}
\frac{\partial^{2}y}{\partial t^{2}}=v^{2}\frac{\partial^{2}y}{\partial x^{2}}\\
y=\text{displacement}\\
t=\text{time}\\
v=\text{velocity}\\
x=\text{position}
\end{lgathered}
$$

---
### fundamental mode
- minimum mode of standing wave
![400](4%20Physics/Images/fundamental%20frequency.png)

---
### fundamental mode formula
$$
\begin{lgathered}
f_{1}=\frac{1}{2L}\sqrt{\frac{F_{T}}{\mu}}\\
\lambda_1=2L\\
L=\text{length}\\
F=\text{force}\\
\mu=\text{linear mass density}\\
\lambda=\text{wavelength}
\end{lgathered}
$$

---
### symmetric normal mode
- standing wave pattern where where all particles oscillate at the same frequency
- aka nth harmonic or $(n-1)$th overtone
![300](4%20Physics/Images/mechanical%20symmetric%20normal%20mode.png)

---
### symmetric normal mode formula
$$
\begin{lgathered}
y(x,t)=\sum_{n=1}^\infty[C_n\cos(\omega_nt)+S_n\sin(\omega_nt)]\sin(k_nx)\\
\omega_n=\frac{n\pi v}{L}\iff k_n=\frac{n\pi}{L}\\
\begin{cases}
y(0,t)=0\\
y(L,t)=0
\end{cases}
\iff
\begin{cases}
y(x,0)=f(x)\\
\frac{\partial y}{\partial t}(x,0)=g(x)
\end{cases}\\
n=0,1,2,\dots\\
\omega=\text{angular frequency}\\
t=\text{time}\\
k=\text{wavenumber}\\
x=\text{position}
\end{lgathered}
$$

---
### initial symmetric normal mode
- initial standing wave pattern where where all particles oscillate at the same frequency

---
### initial symmetric normal mode formula
$$
\begin{lgathered}
C_n=\frac{2}{L}\int_0^Lf(x)\sin(\frac{n\pi x}{L})dx\\
S_n=\frac{2v}{Ln\pi}\int_0^Lg(x)\sin(\frac{n\pi x}{L})dx\\
\end{lgathered}
$$

---
