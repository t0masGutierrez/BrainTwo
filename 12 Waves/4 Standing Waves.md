### standing wave
- superposition of two identical waves traveling opposite directions equal stationary disturbance
![[4 Physics/Images/standing wave.gif]]

---
### standing wave formula
$$
\begin{lgathered}
A\sin(kx-\omega t)+\\
A\sin(kx+\omega t)=\\
2A\sin(kx)\cos(\omega t)\\
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
\frac{\partial^{2}\psi}{\partial t^{2}}=v^{2}\frac{\partial^{2}\psi}{\partial x^{2}}\\
\psi=\text{wave}\\
t=\text{time}\\
v=\text{velocity}\\
x=\text{position}
\end{lgathered}
$$

---
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
### longitudinal wave
- particle oscillation parallel wave propagation
![350](4%20Physics/Images/longitudinal%20wave.png)

---
### longitudinal wave formula
$$
\begin{lgathered}
\psi\parallel v\\
\psi=\text{wave}\\
v=\text{velocity}
\end{lgathered}
$$

---
### symmetric normal mode
- fixed-fixed standing wave pattern where where all particles oscillate at the same frequency
- if free-free standing wave pattern then cosine spatial mode
![300](4%20Physics/Images/mechanical%20symmetric%20normal%20mode.png)

---
### symmetric normal mode formula
$$
\begin{lgathered}
\psi_n(x,t)=A_n\sin(k_nx)\cos(\omega_nt+\phi_n)\\
\psi(x,t)=\sum_{n=1}^\infty[C_n\cos(\omega_nt)+S_n\sin(\omega_nt)]\sin(k_nx)\\
T_{n}=\frac{2L}{nv}\iff\lambda_n=\frac{2L}{n}\\

\omega_n=\frac{n\pi v}{L}\iff k_n=\frac{n\pi}{L}\\
\begin{cases}
\psi(0,t)=0\\
\psi(L,t)=0
\end{cases}
\\
\begin{cases}
\psi(x,0)=f(x)\\
\frac{\partial\psi}{\partial t}(x,0)=g(x)
\end{cases}\\
n=1,2,3,\dots\\
A=\text{amplitude}\\
k=\text{wavenumber}\\
x=\text{position}\\
\omega=\text{angular frequency}\\
t=\text{time}\\
\phi=\text{phase angle}\\
C,S=\text{fourier coefficient}\\
T=\text{period}\\
L=\text{length}\\
v=\text{velocity}\\
\lambda=\text{wavelength}
\end{lgathered}
$$

---
### asymmetric normal mode
- fixed-free standing wave pattern where where all particles oscillate at the same frequency
- if free-fixed standing wave pattern then cosine spatial mode
![500](4%20Physics/Images/sound%20asymmetric%20normal%20mode.png)

---
### asymmetric normal mode formula
$$
\begin{lgathered}
\psi_n(x,t)=A_n\sin(k_nx)\cos(\omega_nt+\phi_n)\\
\psi(x,t)=\sum_{n=1}^\infty[C_n\cos(\omega_nt)+S_n\sin(\omega_nt)]\sin(k_nx)\\
T_{n}=\frac{4L}{(2n-1)v}\iff\lambda_n=\frac{4L}{2n-1}\\
\omega_n=\frac{(2n-1)\pi v}{2L}\iff k_n=\frac{(2n-1)\pi}{2L}\\
\begin{cases}
\psi(0,t)=0\\
\frac{\partial\psi}{\partial x}(L,t)=0
\end{cases}
\\
\begin{cases}
\psi(x,0)=f(x)\\
\frac{\partial\psi}{\partial t}(x,0)=g(x)
\end{cases}\\
n=1,2,3,\dots\\
A=\text{amplitude}\\
k=\text{wavenumber}\\
x=\text{position}\\
\omega=\text{angular frequency}\\
t=\text{time}\\
\phi=\text{phase angle}\\
C,S=\text{fourier coefficient}\\
T=\text{period}\\
L=\text{length}\\
v=\text{velocity}\\
\lambda=\text{wavelength}
\end{lgathered}
$$

---
### fourier coefficient
- amount of temporal mode

---
### fourier coefficient formula
$$
\begin{lgathered}
C_n=\frac{2}{L}\int_0^Lf(x)\sin(\frac{n\pi x}{L})dx=A_n\cos(\phi_n)\\
S_n=\frac{2}{L\omega_n}\int_0^Lg(x)\sin(\frac{n\pi x}{L})dx=-A_n\sin(\phi_n)\\
A_n=\sqrt{C_n^2+S_n^2}\\
\phi_n=\arctan({\frac{S_n}{C_n}})\\
L=\text{length}\\
f,g=\text{function}\\
x=\text{position}\\
A=\text{amplitude}\\
\phi=\text{phase angle}\\
\omega=\text{angular frequency}\\
C,S=\text{fourier coefficient}
\end{lgathered}
$$

---
