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
\rho=\text{spatial mass density}
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
\rho=\text{spatial mass density}
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
### energy flux
- amount of energy flowing through normal surface per time

---
### energy flux formula
$$
\begin{lgathered}
P(x,t)=-K(\frac{\partial\psi}{\partial t})(\frac{\partial\psi}{\partial x})=\mu vA^2\omega^2\cos^2(kx\mp\omega t+\phi)\\
P_{\text{avg}}=\frac{1}{2}\mu vA^2\omega^2\\
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
- temporal derivative of energy density addition with spatial derivative of energy flux equal zero

---
### conservation of energy formula
$$
\begin{lgathered}
\frac{\partial u}{\partial t}+\frac{\partial P}{\partial x}=0\\
\frac{dE}{dt}=P(x_1,t)-P(x_2,t)\\
u=\text{energy density}\\
t=\text{time}\\
P=\text{energy flux}\\
x=\text{position}\\
E=\text{mechanical energy}
\end{lgathered}
$$

---
### characteristic impedance
- measure of medium resistance to particle motion during wave propagation

---
### characteristic impedance formula
$$
\begin{lgathered}
Z=\mu v\\
\psi\perp v\implies Z=\sqrt{\mu F_T}\\
\psi\parallel v\implies Z=\sqrt{\mu AY}\\
Z=\text{impedance}\\
\mu=\text{linear mass density}\\
v=\text{velocity}\\
\psi=\text{wave}\\
F=\text{force}\\
A=\text{area}\\
Y=\text{young's modulus}
\end{lgathered}
$$

---
### wave interface
- interaction between incident wave, reflected wave, and transmitted wave at interface

---
### wave interface formula
$$
\begin{lgathered}
F_{T_1}=F_{T_2}\\
\mu_1\ne\mu_2\\
\frac{v_2}{v_1}=\frac{n_1}{n_2}\\
\frac{f_2}{f_1}=1\\
y_2=y_1+y_r\\
y_1(x,t)=A_1\cos(\omega t-k_1x)\\
y_r(x,t)=A_r\cos(\omega t+k_1x)\\
y_2(x,t)=A_2\cos(\omega t-k_2x)\\
x=0\implies\cases{}
y_1(0,t)=y_2(0,t)\\
F_T\frac{\partial y_1}{\partial x}(0,t)=F_T\frac{\partial y_2}{\partial x}(0,t)
}
\end{lgathered}
$$

---
### amplitude reflection coefficient
- fraction of incident wave amplitude reflected into the first medium

---
### amplitude reflection coefficient formula
$$
\begin{lgathered}
\frac{A_r}{A_1}=\frac{Z_1-Z_2}{Z_1+Z_2}\\
\end{lgathered}
$$

---
### amplitude transmission coefficient
- fraction of incident wave amplitude transmitted into the second medium

---
### amplitude transmission coefficient formula
$$
\begin{lgathered}
\frac{A_2}{A_1}=\frac{2Z_1}{Z_1+Z_2}\\
\end{lgathered}
$$

---
### reflectance
- fraction of incident power reflected into the first medium

---
### reflectance formula
$$
\begin{lgathered}
\frac{P_r}{P_1}=(\frac{A_r}{A_1})^2=(\frac{Z_1-Z_2}{Z_1+Z_2})^2\\
\end{lgathered}
$$

---
### transmittance
- fraction of incident power transmitted into the second medium

---
### transmittance formula
$$
\begin{lgathered}
\frac{P_2}{P_1}=1-\frac{P_r}{P_1}=\frac{4Z_1Z_2}{(Z_1+Z_2)^2}\\
\end{lgathered}
$$

---
### conservation of energy
- amplitude transmission coefficient subtraction with amplitude reflection coefficient equal 1
- transmittance addition with reflectance equal 1

---
### conservation of energy formula
$$
\begin{lgathered}
\frac{A_2}{A_1}-\frac{A_r}{A_1}=1\\
\frac{P_2}{P_1}+\frac{P_r}{P_1}=1
\end{lgathered}
$$

---
