### thermodynamic system
- object capable of exchanging mass or energy with surroundings
![[4 Physics/Images/system.png]]

---
### thermodynamic system formula
$$
\begin{aligned}
\text{universe}=\text{system}+\text{surroundings}
\end{aligned}
$$

---
### closed system
- can exchange energy with surroundings but not mass

---
### closed system formula
$$
\begin{aligned}
\frac{dE}{dt}\ne0\\
\frac{dm}{dt}=0\\
E=\text{energy}\\
t=\text{time}\\
m=\text{mass}
\end{aligned}
$$

---
### open system
- can exchange both mass and energy with surroundings

---
### open system formula
$$
\begin{aligned}
\frac{dE}{dt}\ne0\\
\frac{dm}{dt}\ne0\\
E=\text{energy}\\
t=\text{time}\\
m=\text{mass}
\end{aligned}
$$

---
### isolated system
- cannot exchange neither mass nor energy with surroundings

---
### isolated system formula
$$
\begin{aligned}
\frac{dE}{dt}=0\\
\frac{dm}{dt}=0\\
E=\text{energy}\\
t=\text{time}\\
m=\text{mass}
\end{aligned}
$$

---
### work
- transfer of mechanical energy by the component of force parallel displacement
![300](4%20Physics/Images/thermodynamic%20work.png)

---
### work formula
$$
\begin{aligned}
W=\sum_{i}p_{i}\Delta V_{i}=\int_{V_{1}}^{V_{2}}p\cdot dV\\
p=\text{pressure}\\
V=\text{volume}
\end{aligned}
$$

---
### positive work
- work done by system on surroundings
- gas particles decrease kinetic energy as gas expands
![300](4%20Physics/Images/positive%20work.png)

---
### positive work formula
$$
\begin{aligned}
\Delta V>0\implies W>0\\
V=\text{volume}\\
W=\text{work}
\end{aligned}
$$

---
### negative work
- work done on system by surroundings equal negative work
- gas particles increase kinetic energy as gas compresses
![300](4%20Physics/Images/negative%20work.png)

---
### negative work formula
$$
\begin{aligned}
\Delta V<0\implies W<0\\
V=\text{volume}\\
W=\text{work}
\end{aligned}
$$

---
### internal energy
- potential energy of intermolecular force and kinetic energy of molecular motion

---
### internal energy formula
$$
\begin{aligned}
U=\frac{f}{2}NkT\\
f=\text{degrees of freedom}\\
N=\text{number of particles}\\
k=1.381\times10^{-23}\\
T=\text{temperature}
\end{aligned}
$$

---
### first law of thermodynamics
- energy can neither be created nor destroyed but can be transformed
- temperature change equal result of work and/or heat
![200](4%20Physics/Images/first%20law%20of%20thermodynamics.png)

---
### first law of thermodynamics formula
$$
\begin{aligned}
\Delta U=Q-W\\
Q=\text{heat}\\
W=\text{work}
\end{aligned}
$$

---
### state function
- physical quantity whose value depend on state of system
- pressure, volume, temperature, and internal energy

---
### state function formula
$$
\begin{aligned}
\int_A^BdF
\end{aligned}
$$

---
### path function
- physical quantity whose value depend on path by which system achieved state
- heat and work

---
### path function formula
$$
\oint_A^B\delta F
$$

---
### thermodynamic equilibrium
- stable state of thermodynamic system where macroscopic behavior remain constant over time

---
### thermodynamic equilibrium formula
$$
\begin{aligned}
\nabla T=0\\
\nabla p=0\\
\nabla\frac{\partial U}{\partial N}=0\\
T=\text{temperature}\\
p=\text{pressure}\\
U=\text{internal energy}\\
N=\text{number of particles}
\end{aligned}
$$

---
### thermodynamic process
- path through state space of thermodynamic system
![[4 Physics/Images/thermodynamic process.png|300]]

---
### thermodynamic process formula
$$
\begin{aligned}
x_1(t)\rightarrow x_2(t)\\
x=\text{state}\\
t=\text{time}
\end{aligned}
$$

---
### quasi-static process
- thermodynamic process whose path through state space occur infinitely slowly such that intermediate state equal equilibrium state
![300](4%20Physics/Images/quasi-static%20process.png)

---
### quasi-static process formula
$$
\begin{aligned}
\forall t:\nabla T=\nabla p=\nabla\frac{\partial U}{\partial N}=0\\
t=\text{time}\\
T=\text{temperature}\\
p=\text{pressure}\\
U=\text{internal energy}\\
N=\text{number of particles}
\end{aligned}
$$

---
### cyclic process
- thermodynamic process whose final state equal initial state
![300](4%20Physics/Images/cyclic%20process.png)

---
### cyclic process formula
$$
\begin{aligned}
\Delta U=0\\
U=\text{internal energy}
\end{aligned}
$$

---
### isothermal process
- constant temperature

---
### isothermal process formula
$$
\begin{aligned}
p_{1}V_{1}=p_{2}V_{2}\implies\Delta U=0\\
T_i=T_f\\
p=\text{pressure}\\
V=\text{volume}\\
T=\text{temperature}\\
U=\text{internal energy}
\end{aligned}
$$

---
### isochoric process
- constant volume

---
### isochoric process formula
$$
\begin{aligned}
\frac{p_{1}}{T_{1}}=\frac{p_{2}}{T_{2}}\implies\Delta U=Q\\
T_i>T_f\\
p=\text{pressure}\\
T=\text{temperature}\\
U=\text{internal energy}\\
Q=\text{heat}
\end{aligned}
$$

---
### isobaric process
- constant pressure

---
### isobaric process formula
$$
\begin{aligned}
\frac{V_{1}}{T_{1}}=\frac{V_{2}}{T_{2}}\implies\Delta U=nC_V\Delta T\\
T_i<T_f\\
V=\text{volume}\\
T=\text{temperature}\\
U=\text{internal energy}\\
n=\text{number of moles}\\
C=\text{molar heat capacity}
\end{aligned}
$$

---
### adiabatic process
- zero heat flow between system and surroundings

---
### adiabatic process formula
$$
\begin{aligned}
p_{1}V_{1}^{\gamma}=p_{2}V_{2}^{\gamma}\implies\Delta U=-W\\
T_{1}V_{1}^{\gamma-1}=T_{2}V_{2}^{\gamma-1}\implies\Delta U=nC_V(T_1-T_2)=\\
\frac{C_V}{R}(p_1V_1-p_2V_2)=\\
\frac{1}{\gamma-1}(p_1V_1-p_2V_2)\\
T_i<T_f\\
p=\text{pressure}\\
V=\text{volume}\\
U=\text{internal energy}\\
W=\text{work}\\
T=\text{temperature}\\
\gamma=\text{molar heat capacity ratio}\\
n=\text{number of moles}\\
C=\text{molar heat capacity}\\
R=8.314
\end{aligned}
$$

---
### specific heat
- amount of heat required to change the temperature of 1 kilogram of substance by 1 degree celsius without changing its phase

---
### specific heat formula
$$
\begin{aligned}
Q=nC\Delta T\\
n=\text{number of moles}\\
C=\text{molar heat capacity}\\
T=\text{temperature}
\end{aligned}
$$

---
### molar heat capacity ratio
- ratio describing the adiabatic response of gas
![400](4%20Physics/Images/molar%20heat%20capacity%20ratio.png)

---
### molar heat capacity ratio formula
$$
\begin{aligned}
\gamma=\frac{C_{p}}{C_{V}}\\
C=\text{molar heat capacity}
\end{aligned}
$$

---
### constant volume molar heat capacity
- molar heat capacity of gas inside fixed container
![300](4%20Physics/Images/constant%20volume%20molar%20heat%20capacity.png)

---
### constant volume molar heat capacity formula
$$
\begin{aligned}
C_{V}=\frac{f}{2}R\\
f=\text{degrees of freedom}\\
R=8.314
\end{aligned}
$$

---
### constant pressure molar heat capacity
- molar heat capacity of gas inside movable container
![300](4%20Physics/Images/constant%20pressure%20molar%20heat%20capacity.png)

---
### constant pressure molar heat capacity formula
$$
\begin{aligned}
C_{p}=C_{V}+R\\
C=\text{molar heat capacity}\\
R=8.314
\end{aligned}
$$

---
