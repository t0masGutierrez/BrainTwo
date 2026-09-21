### normal coordinate
- combinations of physical coordinates that execute simple harmonic motion
- or physical coordinates expressed as B-coordinates

---
### normal coordinate formula
$$
\begin{lgathered}
\vec\eta(t)=[\vec x]_B=\sum_{i=1}^nC_i\cos(\omega_it+\phi_i)\\
\vec\eta(t)=[\vec q]_B=\sum_{i=1}^nC_i\cos(\omega_it+\phi_i)\\
B=(\vec A_1,\vec A_2,\dots,\vec A_n)\\
\vec\eta=\text{normal position}\\
\vec x=\text{position}\\
B=\text{ordered basis}\\
\vec A=\text{eigenvector}\\
C=\text{constant}\\
\omega=\text{angular frequency}\\
t=\text{time}\\
\phi=\text{phase angle}\\
\vec q=\text{electric charge}
\end{lgathered}
$$

---
### normal mode
- amplitude pattern where all coordinates oscillate at the same frequency

---
### normal mode formula
$$
\begin{lgathered}
K\frac{d^2\vec x}{dt}+M\vec x=0\iff L\frac{d^2\vec q}{dt}+C^{-1}\vec q=0\\
(K-\omega_i^2M)\vec A_i=0\iff(L-\omega_i^2C^{-1})\vec A_i=0\\
\vec x=\sum_{i=1}^n\eta_i\vec A_i\iff\vec q=\sum_{i=1}^n\eta_i\vec A_i\\
K=\text{spring constant}\\
\vec x=\text{position}\\
t=\text{time}\\
M=\text{mass}\\
L=\text{self inductance}\\
\vec q=\text{electric charge}\\
C=\text{capacitance}\\
\omega=\text{angular frequency}\\
\vec A=\text{eigenvector}\\
\eta=\text{normal position}
\end{lgathered}
$$

---
### normal frequency
- number of normal oscillations per time

---
### normal frequency formula
$$
\begin{lgathered}
\det(K-\omega_i^2M)=0\implies\omega_i^2=\lambda_i\impliedby\det(L-\omega_i^2C^{-1})=0\\
K_{\text{ii}}=k_i+k_{i+1}\iff L_{\text{ii}}=L_i+L_{i+1}\\
K_{i,i+1}=K_{i+1,i}=-k_{i+1}\iff L_{i,i+1}=L_{i+1,i}=-L_{i+1}\\
M_{\text{ii}}=m_i\iff C^{-1}_{\text{ii}}=C_i\\
K,k=\text{spring constant}\\
\omega=\text{angular frequency}\\
M,m=\text{mass}\\
\vec A=\text{eigenvector}\\
\lambda=\text{eigenvalue}\\
L=\text{self inductance}\\
C=\text{capacitance}\\
\end{lgathered}
$$

---
### dimension
- number of initial conditions equal double the number of coupled oscillators

---
### dimension formula
$$
\begin{lgathered}
nx_0+nv_0=2n(x_0+v_0)\iff nA_i+n\phi_i=2n(A_i+\phi_i)\\
nq_0+ni_0=2n(q_0+i_0)\iff nA_i+n\phi_i=2n(A_i+\phi_i)\\
x=\text{position}\\
v=\text{velocity}\\
A=\text{amplitude}\\
\phi=\text{phase angle}\\
q=\text{electric charge}\\
i=\text{electric current}
\end{lgathered}
$$

---
### decoupling
- convert from physical coordinates to normal coordinates

---
### decoupling formula
$$
\begin{lgathered}
\text{RREF}(P\mid\vec x)=I\mid\vec\eta\\
\text{RREF}(P\mid\vec q)=I\mid\vec\eta\\
P=\begin{bmatrix}\vert&\vert&&\vert\\\vec A_1&\vec A_2&\cdots&\vec A_n\\\vert&\vert&&\vert\end{bmatrix}\\
P=\text{eigenmatrix}\\
\vec x=\text{position}\\
I=\text{identity matrix}\\
\vec\eta=\text{normal position}\\
\vec A=\text{eigenvector}
\end{lgathered}
$$

---
