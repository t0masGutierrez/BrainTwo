### alternating current
- bidirectional flow of electric charge

---
### AC electric current
- sinusoidal function of time varying electric current
---
### AC electric current formula
$$
\begin{aligned}
i(t) = I\cos(\omega t) \\
I = \text{electric current} \\
\omega = \text{angular frequency} \\
t = \text{time} 
\end{aligned}
$$

---
### AC voltage
- sinusoidal function of time varying voltage
---
### AC voltage formula
$$
\begin{aligned}
v(t) = V\cos(\omega t + \phi) \\
V = \text{voltage} \\
\omega = \text{angular frequency} \\
t = \text{time} \\
\phi = \text{phase angle}
\end{aligned}
$$

---
### rms electric current
- root mean square of electric current
---
### rms electric current
$$
\begin{aligned}
I_{rms} = \frac{I}{\sqrt2} \\
I = \text{electric current}
\end{aligned}
$$

---
### rms voltage
- root mean square of voltage

---
### rms voltage
$$
\begin{aligned}
V_{rms} = \frac{V}{\sqrt2} \\
V = \text{voltage}
\end{aligned}
$$

---
### resistor
- electric component designed to resist electric current
---
### resistor formula
$$
\begin{aligned}
v_{R} = iR \\
i = \text{electric current} \\
R = \text{resistance}
\end{aligned}
$$

---
### inductor
- electric component designed to oppose changing electric current
---
### inductor formula
$$
\begin{aligned}
v_{L} = L \frac{di}{dt} \\
L = \text{self inductance} \\
i = \text{electric current} \\
t = \text{time}
\end{aligned}
$$

---
### capacitor
- electric component designed to store electric charge
---
### capacitor formula
$$
\begin{aligned}
v_{C} = \frac{q}{C} \\
q = \text{electric charge} \\
C = \text{capacitance}
\end{aligned}
$$

---
### reactance
- reaction to AC
---
### calculate reactance
- phase angle of resistor equal 0
- phase angle of inductor voltage equal $+\pi/2$ 
- phase angle of capacitor voltage equal $-\pi/2$ 

---
### resistive reactance
- reaction to electric current
---
### resistive reactance formula
$$
\begin{aligned}
X_{R} = \frac{V_{R}}{I} = R \\
V = \text{voltage} \\
I = \text{electric current} \\
R = \text{resistance}
\end{aligned}
$$

---
### inductive reactance
- reaction to changing electric current
---
### inductive reactance formula
$$
\begin{aligned}
X_{L} = \frac{V_{L}}{I} = \omega L \\
V = \text{voltage} \\
I = \text{electric current} \\
\omega = \text{angular frequency} \\
L = \text{self inductance}
\end{aligned}
$$

---
### capacitive reactance
- reaction to changing voltage
---
### capacitive reactance formula
$$
\begin{aligned}
X_{C} = \frac{V_{C}}{I} = \frac{1}{\omega C} \\
V = \text{voltage} \\
I = \text{electric current} \\
\omega = \text{angular frequency} \\
C = \text{capacitance}
\end{aligned}
$$

---
### phase angle
- temporal difference between waves of the same angular frequency
---
### phase angle formula
$$
\begin{aligned}
\phi = \arctan(\frac{X_{L} - X_{C}}{R}) \\
X = \text{reactance} \\
R = \text{resistance}
\end{aligned}
$$

---
### calculate phase angle
- positive phase angle equal leading voltage
- negative phase angle equal lagging voltage

---
### impedance
- combination of resistance and reactance equal the total reaction to AC
---
### impedance formula
$$
\begin{aligned}
Z = \sqrt{R^2 + (X_{L} - X_{C})^2} \\
R = \text{resistance} \\
X = \text{reactance}
\end{aligned}
$$

---
### ohms law
- electric current directly proportional voltage and inversely proportional impedance

---
### ohms formula
$$
\begin{aligned}
V = IZ 
I = \text{electric current} \\
Z = \text{impedance}
\end{aligned}
$$

---
### average power
- rate of energy transfer
---
### average power formula
$$
\begin{aligned}
P = I_{rms}V_{rms} \cos(\phi) = I_{rms}^2Z \cos(\phi) = \frac{V_{rms}^2}{Z} \cos(\phi) \\
I = \text{electric current} \\
V = \text{voltage} \\
\phi = \text{phase angle} \\
Z = \text{impedance}
\end{aligned}
$$

---
### power factor
- amount of power thats dissipating energy
---
### power factor formula
$$
\begin{aligned}
\cos(\phi) = \frac{R}{Z} \\
R = \text{resistance} \\
Z = \text{impedance}
\end{aligned}
$$

---
### resonance
- driving angular frequency equal natural angular frequency thus maximizing amplitude
---
### resonant angular frequency
- inductive reactance equal capacitive reactance thus maximizing electric current
---
### resonant angular frequency formula
$$
\begin{aligned}
\omega = \sqrt{\frac{1}{LC}} \\
L = \text{self inductance} \\
C = \text{capacitance}
\end{aligned}
$$

---
### calculate resonant angular frequency
- impedance equal resistance
- power factor unity
- zero phase angle

---
### quality factor
- sharpness of resonant angular frequency maximum aka fwhm
---
### quality factor formula
$$
\begin{aligned}
Q = \frac{\omega}{\Delta \omega} = \frac{\omega L}{R} \\
\omega = \text{angular frequency} \\
\Delta \omega = \text{bandwidth} \\
L = \text{self inductance} \\
R = \text{resistance}
\end{aligned}
$$

---
### calculate quality factor
- high quality signal equal narrow, tall crest with low energy loss per cycle
- low quality signal equal broad, short crest with high energy loss per cycle

---
### step up transformer
- transform voltage from low voltage to high voltage
---
### step up transformer voltage formula
$$
\begin{aligned}
\frac{V_{2}}{V_{1}} = \frac{N_{2}}{N_{1}} \\
V = \text{voltage} \\
N = \text{number of loops}
\end{aligned}
$$

---
### step down transformer
- transform voltage from high voltage to low voltage
---
### step down transformer power formula
$$
\begin{aligned}
I_1V_{1} = I_2V_{2} \\
I = \text{electric current} \\
V = \text{voltage}
\end{aligned}
$$

---
### rectification
- AC conversion DC with electric component

---
### full wave rectification
- electric component convert full waveform
---
### average rectification electric current
- mean electric current after rectification
---
### average full wave rectification electric current formula
$$
\begin{aligned}
I_{avg} = (\frac{2}{\pi})I = 0.637I \\
I = \text{electric current}
\end{aligned}
$$

---
