### alternating current
- bidirectional flow of electric charge

---
### AC electric current
- sinusoidal function of time varying electric current
![[4 Physics/Images/AC electric current.png|300]]

---
### AC electric current formula
$$
\begin{aligned}
i ( t ) = I \cos ( \omega t ) \\
I = \text { electric current } \\
\omega = \text { angular frequency } \\
t = \text { time }
\end{aligned}
$$

---
### AC voltage
- sinusoidal function of time varying voltage
![[4 Physics/Images/AC voltage.png|300]]

---
### AC voltage formula
$$
\begin{aligned}
v ( t ) = V \cos ( \omega t + \phi ) \\
V = \text { voltage } \\
\omega = \text { angular frequency } \\
t = \text { time } \\
\phi = \text { phase angle }
\end{aligned}
$$

---
### rms electric current
- root mean square of electric current
![[4 Physics/Images/rms electric current.png|300]]

---
### rms electric current
$$
\begin{aligned}
I _ { r m s } = \frac { I } { \sqrt 2 } \\
I = \text { electric current }
\end{aligned}
$$

---
### rms voltage
- root mean square of voltage

---
### rms voltage
$$
\begin{aligned}
V _ { r m s } = \frac { V } { \sqrt 2 } \\
V = \text { voltage }
\end{aligned}
$$

---
### resistor
- electric component designed to resist electric current
![[4 Physics/Images/resistor2.png|400]]

---
### resistor formula
$$
\begin{aligned}
v _ { R } = i R \\
i = \text { electric current } \\
R = \text { resistance }
\end{aligned}
$$

---
### inductor
- electric component designed to oppose changing electric current
![[4 Physics/Images/inductor2.png|400]]

---
### inductor formula
$$
\begin{aligned}
v _ { L } = L \frac { d i } { d t } \\
L = \text { self inductance } \\
i = \text { electric current } \\
t = \text { time }
\end{aligned}
$$

---
### capacitor
- electric component designed to store electric charge
![[4 Physics/Images/capacitor1.png|400]]

---
### capacitor formula
$$
\begin{aligned}
v _ { C } = \frac { q } { C } \\
q = \text { electric charge } \\
C = \text { capacitance }
\end{aligned}
$$

---
### reactance
- reaction to AC
![[4 Physics/Images/reactance.png|300]]

---
### calculate reactance
- phase angle of resistor equal 0
- phase angle of inductor voltage equal $+ \pi / 2$ 
- phase angle of capacitor voltage equal $- \pi / 2$ 

---
### resistive reactance
- reaction to electric current
![[4 Physics/Images/resistive reactance.png|400]]

---
### resistive reactance formula
$$
\begin{aligned}
X _ { R } = \frac { V _ { R } } { I } = R \\
V = \text { voltage } \\
I = \text { electric current } \\
R = \text { resistance }
\end{aligned}
$$

---
### inductive reactance
- reaction to changing electric current
![[4 Physics/Images/inductive reactance.png|200]]

---
### inductive reactance formula
$$
\begin{aligned}
X _ { L } = \frac { V _ { L } } { I } = \omega L \\
V = \text { voltage } \\
I = \text { electric current } \\
\omega = \text { angular frequency } \\
L = \text { self inductance }
\end{aligned}
$$

---
### capacitive reactance
- reaction to changing voltage
![[4 Physics/Images/capacitive reactance.png|400]]

---
### capacitive reactance formula
$$
\begin{aligned}
X _ { C } = \frac { V _ { C } } { I } = \frac { 1 } { \omega C } \\
V = \text { voltage } \\
I = \text { electric current } \\
\omega = \text { angular frequency } \\
C = \text { capacitance }
\end{aligned}
$$

---
### phase angle
- temporal difference between waves of the same angular frequency
![[4 Physics/Images/phase angle.png|300]]

---
### phase angle formula
$$
\begin{aligned}
\phi = \arctan ( \frac { X _ { L } - X _ { C } } { R } ) \\
X = \text { reactance } \\
R = \text { resistance }
\end{aligned}
$$

---
### calculate phase angle
- positive phase angle equal leading voltage
- negative phase angle equal lagging voltage

---
### impedance
- combination of resistance and reactance equal the total reaction to AC
![[4 Physics/Images/impedance.png|400]]

---
### impedance formula
$$
\begin{aligned}
Z = \sqrt { R ^ 2 + ( X _ { L } - X _ { C } ) ^ 2 } \\
R = \text { resistance } \\
X = \text { reactance }
\end{aligned}
$$

---
### ohms law
- electric current directly proportional voltage and inversely proportional impedance

---
### ohms formula
$$
\begin{aligned}
V = I Z
I = \text { electric current } \\
Z = \text { impedance }
\end{aligned}
$$

---
### average power
- rate of energy transfer
![[4 Physics/Images/average power.png|350]]

---
### average power formula
$$
\begin{aligned}
P = I _ { r m s } V _ { r m s } \cos ( \phi ) = I _ { r m s } ^ 2 Z \cos ( \phi ) = \frac { V _ { r m s } ^ 2 } { Z } \cos ( \phi ) \\
I = \text { electric current } \\
V = \text { voltage } \\
\phi = \text { phase angle } \\
Z = \text { impedance }
\end{aligned}
$$

---
### power factor
- amount of power thats dissipating energy
![[4 Physics/Images/power factor.png]]

---
### power factor formula
$$
\begin{aligned}
\cos ( \phi ) = \frac { R } { Z } \\
R = \text { resistance } \\
Z = \text { impedance }
\end{aligned}
$$

---
### resonance
- driving angular frequency equal natural angular frequency thus maximizing amplitude
![[4 Physics/Images/resonance1.png|300]]

---
### resonant angular frequency
- inductive reactance equal capacitive reactance thus maximizing electric current
![[4 Physics/Images/resonant angular frequency.png|250]]

---
### resonant angular frequency formula
$$
\begin{aligned}
\omega = \sqrt { \frac { 1 } { L C } } \\
L = \text { self inductance } \\
C = \text { capacitance }
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
![[4 Physics/Images/quality factor.png|250]]

---
### quality factor formula
$$
\begin{aligned}
Q = \frac { \omega } { \Delta \omega } = \frac { \omega L } { R } \\
\omega = \text { angular frequency } \\
\Delta \omega = \text { bandwidth } \\
L = \text { self inductance } \\
R = \text { resistance }
\end{aligned}
$$

---
### calculate quality factor
- high quality signal equal narrow, tall crest with low energy loss per cycle
- low quality signal equal broad, short crest with high energy loss per cycle

---
### step up transformer
- transform voltage from low voltage to high voltage
![[4 Physics/Images/step up transformer.png|300]]

---
### step up transformer voltage formula
$$
\begin{aligned}
\frac { V _ { 2 } } { V _ { 1 } } = \frac { N _ { 2 } } { N _ { 1 } } \\
V = \text { voltage } \\
N = \text { number of loops }
\end{aligned}
$$

---
### step down transformer
- transform voltage from high voltage to low voltage
![[4 Physics/Images/step down transformer.png|300]]

---
### step down transformer power formula
$$
\begin{aligned}
I _ 1 V _ { 1 } = I _ 2 V _ { 2 } \\
I = \text { electric current } \\
V = \text { voltage }
\end{aligned}
$$

---
### rectification
- AC conversion DC with electric component

---
### full wave rectification
- electric component convert full waveform
![[4 Physics/Images/full wave rectification.png|250]]

---
### average rectification electric current
- mean electric current after rectification
![[4 Physics/Images/average rectification electric current.png]]

---
### average full wave rectification electric current formula
$$
\begin{aligned}
I _ { a v g } = ( \frac { 2 } { \pi } ) I = 0.637 I \\
I = \text { electric current }
\end{aligned}
$$

---
