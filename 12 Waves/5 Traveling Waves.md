### traveling wave
- disturbance propagating through space

---
### traveling wave formula
$$
\begin{lgathered}
\psi(x,t)=f(x\mp{vt})\\
x=\text{position}\\
v=\text{velocity}\\
t=\text{time}
\end{lgathered}
$$

---
### wave velocity
- ratio between tendency to return change and tendency to resist change

---
### wave velocity formula
$$
\begin{lgathered}
v=\sqrt{\frac{\text{elasticity}}{\text{inertia}}}
\end{lgathered}
$$

---
### sound wave velocity
- speed of sound wave

---
### sound wave velocity formula
$$
\begin{lgathered}
v=331\sqrt{\frac{T}{273}}\\
T=\text{absolute temperature}
\end{lgathered}
$$

---
### solid wave velocity
- speed of sound wave through solid
![200](4%20Physics/Images/solid%20wave%20velocity.png)

---
### solid wave velocity formula
$$
\begin{lgathered}
v=\sqrt{\frac{Y}{\rho}}\\
Y=\text{young's modulus}\\
\rho=\text{density}
\end{lgathered}
$$

---
### liquid wave velocity
- speed of sound wave through liquid
![200](4%20Physics/Images/liquid%20wave%20velocity.png)

---
### liquid wave velocity formula
$$
\begin{lgathered}
v=\sqrt{\frac{B}{\rho}}\\
B=\text{bulk modulus}\\
\rho=\text{density}
\end{lgathered}
$$

---
### gas wave velocity
- speed of sound wave through ideal gas
![200](4%20Physics/Images/gas%20wave%20velocity.png)

---
### gas wave velocity formula
$$
\begin{lgathered}
v=\sqrt{\frac{\gamma RT}{M}}\\
\gamma=\text{adiabatic index}\\
R=8.314\\
T=\text{absolute temperature}\\
M=\text{molar mass}
\end{lgathered}
$$

---
### energy density
- measure of energy compactness

---
### energy density formula
$$
\begin{lgathered}
u(x,t)=\frac{1}{2}\mu(\frac{\partial\psi}{\partial t})^2+\frac{1}{2}K(\frac{\partial\psi}{\partial x})^2=\mu A^2\omega^2\cos^2(kx\mp\omega t+\phi)\\
u_{\text{avg}}=\frac{1}{2}\mu A^2\omega^2\\
\psi\perp v\implies K=F_T\\
\psi\parallel v\implies K=YA\\
\mu=\text{linear mass density}\\
\psi=\text{wave}\\
t=\text{time}\\
K=\text{elastic coefficient}\\
x=\text{position}\\
A=\text{amplitude}\\
k=\text{wavenumber}\\
\omega=\text{angular frequency}\\
\phi=\text{phase angle}\\
F=\text{force}\\
Y=\text{young's modulus}\\
A=\text{area}
\end{lgathered}
$$

---
### energy flux density
- amount of energy flowing through normal surface per time

---
### energy flux density formula
$$
\begin{lgathered}
I(x,t)=-K(\frac{\partial\psi}{\partial t})(\frac{\partial\psi}{\partial x})=\mu vA^2\omega^2\cos^2(kx\mp\omega t+\phi)\\
I_{\text{avg}}=\frac{1}{2}\mu vA^2\omega^2\\
\psi\perp v\implies K=F_T\\
\psi\parallel v\implies K=YA\\
K=\text{elastic coefficient}\\
\psi=\text{wave}\\
t=\text{time}\\
x=\text{position}\\
\mu=\text{linear mass density}\\
v=\text{velocity}\\
A=\text{amplitude}\\
k=\text{wavenumber}\\
\omega=\text{angular frequency}\\
\phi=\text{phase angle}
\end{lgathered}
$$

---
### conservation of energy
- energy density addition with energy flux density equal zero

---
### conservation of energy formula
$$
\begin{lgathered}
\frac{\partial u}{\partial t}+\frac{\partial I}{\partial x}=0\\
\frac{dE}{dt}=I(x_1,t)-I(x_2,t)
\end{lgathered}
$$

---
### characteristic impedance
- measure of medium resistance to particle motion during wave propagation

---
### characteristic impedance formula
$$
\begin{lgathered}
\psi\perp v\implies Z=\sqrt{\mu F_T}\\
\psi\parallel v\implies Z=A\sqrt{\rho Y}
\end{lgathered}
$$

---
### wave interface
- interaction between incidence wave, reflected wave, and transmitted wave at interface

---
### wave interface formula
$$
\begin{lgathered}
F_{T_1}=F_{T_2}\\
\mu_1\ne\mu_2\\
y_1(x,t)=A_1\cos(\omega t-k_1x)+A_r\cos(\omega t+k_1x)\\
y_2(x,t)=A_2\cos(\omega t-k_2x)\\
\lambda_2=\frac{v_2\lambda_1}{v_1}\\
y_1(0,t)=y_2(0,t)\\
F_T\frac{\partial y_1}{\partial x}(0,t)=F_T\frac{\partial y_2}{\partial x}(0,t)\\
\frac{A_r}{A_1}=\frac{Z_1-Z_2}{Z_1+Z_2}\\
\frac{A_2}{A_1}=\frac{2Z_1}{Z_1+Z_2}\\
\frac{I_r}{I_1}=(\frac{Z_1-Z_2}{Z_1+Z_2})^2\\
\frac{I_2}{I_1}=\frac{4Z_1Z_2}{(Z_1+Z_2)^2}\\
\frac{I_r}{I_1}+\frac{I_2}{I_1}=1
\end{lgathered}
$$

---
### quarter-wave impedance matching
- eliminate wave reflection between two media with different characteristic impedance by inserting intermediate layer of thickness equal one-quarter of the wavelength

---
### quarter-wave impedance matching formula
$$
\begin{lgathered}
Z_m=\sqrt{Z_1Z_2}\\
d=\frac{\lambda_m}{4}\\
\Delta\phi=\pi\\
\frac{I_r}{I_1}=0\\
\frac{I_2}{I_1}=1
\end{lgathered}
$$

---
