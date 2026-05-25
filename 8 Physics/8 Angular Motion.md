### rigid body
- body whose shape and size do not change
- distances between all points inside the body remain constant
![300](8%20Physics/Images/rigid%20body.png)

---
### rigid body formula
$$
\begin{aligned}
\forall i, j \in \set{1, \dots, n}: |\vec r_{i} - \vec r_{j}| = 0 \\
i, j = \text{index} \\
\vec r = \text{position}
\end{aligned}
$$

---
### angular position
- angle as function of time
![300](8%20Physics/Images/angular%20position.png)

---
### angular position formula
$$
\begin{aligned}
\vec \theta = \frac{s}{r} \\
s = \text{arc length} \\
r = \text{radius}
\end{aligned}
$$

---
### angular displacement
- vector change of angular position
![300](8%20Physics/Images/angular%20displacement.png)

---
### angular displacement formula
$$
\begin{aligned}
\Delta \vec \theta = \vec \theta - \vec \theta_{0} \\
\theta = \text{angular position}
\end{aligned}
$$

---
### average angular velocity
- angular position per time
![200](8%20Physics/Images/average%20angular%20velocity.png)

---
### average angular velocity formula
$$
\begin{aligned}
\vec \omega_{avg} = \frac{\Delta \vec \theta}{\Delta t} \\
\vec \theta = \text{angular position} \\
t = \text{time}
\end{aligned}
$$

---
### instantaneous angular velocity
- rate of change of angular position as change of time approaches zero
![200](8%20Physics/Images/instantaneous%20angular%20velocity.png)

---
### instantaneous angular velocity formula
$$
\begin{aligned}
\vec \omega = \frac{d\theta}{dt} \\
\vec \theta = \text{angular position} \\
t = \text{time}
\end{aligned}
$$

---
### average angular acceleration
- angular velocity per time
![250](8%20Physics/Images/average%20angular%20acceleration.png)

---
### average angular acceleration formula
$$
\begin{aligned}
\vec \alpha_{avg} = \frac{\Delta \vec \omega}{\Delta t} \\
\vec \omega = \text{angular velocity} \\
t = \text{time}
\end{aligned}
$$

---
### instantaneous angular acceleration
- rate of change of angular velocity as change of time approaches zero
![300](8%20Physics/Images/instantaneous%20angular%20acceleration.png)

---
### instantaneous angular acceleration formula
$$
\begin{aligned}
\vec \alpha = \frac{d\vec \omega}{dt} = \frac{d^2\vec \theta}{dt^2} \\
\vec \omega = \text{angular velocity} \\
t = \text{time} \\
\vec \theta = \text{angular position}
\end{aligned}
$$

---
### tangential position
- position along circular path as function of time

---
### tangential position formula
$$
\begin{aligned}
\vec s = \vec r \times \vec \theta \\
\vec r = \text{radius} \\
\vec \theta = \text{angular position}
\end{aligned}
$$

---
### tangential velocity
- rate of change of position along circular path as change of time approaches zero
![250](8%20Physics/Images/tangential%20velocity.png)

---
### tangential velocity formula
$$
\begin{aligned}
\vec v_{tan} = \vec r \times \vec \omega \\
\vec r = \text{radius} \\
\vec \omega = \text{angular velocity}
\end{aligned}
$$

---
### tangential acceleration
- rate of change of velocity along circular path as change of time approaches zero

---
### tangential acceleration formula
$$
\begin{aligned}
\vec a_{tan} = \vec r \times \vec \alpha \\
\vec r = \text{radius} \\
\vec \alpha = \text{angular acceleration}
\end{aligned}
$$

---
### radial acceleration
- acceleration vector perpendicular circular path equal change of direction

---
### radial acceleration formula
$$
\begin{aligned}
\vec a_{rad} = \vec r \times \vec \omega^2 = \frac{\vec v_{tan}^2}{\vec r}\\
\vec r = \text{radius} \\
\vec \omega = \text{angular velocity} \\
\vec v = \text{velocity} 
\end{aligned}
$$

---
### total acceleration
- tangential acceleration and radial acceleration
![250](8%20Physics/Images/total%20acceleration.png)

---
### total acceleration formula
$$
\begin{aligned}
a = \sqrt{a_{tan}^2 + a_{rad}^2} \\
a_{tan} = \text{tangential acceleration} \\
a_{rad} = \text{radial acceleration}
\end{aligned}
$$

---
### angular kinematics
- rotational motion under constant angular acceleration

---
### angular kinematics formula
$$
\begin{aligned}
\omega_{z} = \omega_{0z} + \alpha_{z} t \\
\theta = \theta_{0} + \omega_{0z}t + \frac{1}{2} \alpha_{z} t^2 \\
\theta - \theta_{0} = \frac{1}{2} (\omega_{z} + \omega_{0z})t \\
\omega_{z}^2 = \omega_{0z}^2 + 2\alpha_{z}(\theta - \theta_{0})
\end{aligned}
$$

---
### inertia
- resistance to acceleration

---
### inertia formula
$$
\begin{aligned}
I_{tan} = m \\
m = \text{mass}
\end{aligned}
$$

---
### moment of inertia
- rotational analogue of mass
![300](8%20Physics/Images/moment%20of%20inertia.png)

---
### constant moment of inertia formula
$$
\begin{aligned}
I = \sum_{n} m_nr_{n}^2 \\
m = \text{mass} \\
r = \text{radius}
\end{aligned}
$$

---
### variable moment of inertia formula
$$
\begin{aligned}
I = \int r^2dm = \int r^2\rho dV \\
r = \text{radius} \\
m = \text{mass} \\
\rho = \text{density} \\
V = \text{volume}
\end{aligned}
$$

---
### axis of rotation
- center rod
- side rod
- center plate
- side plate
- center thick hollow cylinder
- center solid cylinder
- center thin hollow cylinder
- center solid sphere
- center thin hollow sphere
![600](8%20Physics/Images/axis%20of%20rotation.png)

---
### axis of rotation formula
$$
\begin{aligned}
I = \frac{1}{12}ML^2 \\
I = \frac{1}{3}ML^2 \\
I = \frac{1}{12}M(a^2+b^2) \\
I = \frac{1}{12}ML^2 \\
I = \frac{1}{3}Ma^2 \\
I = \frac{1}{2}M(R_{1}^2+R_{2}^2) \\
I = \frac{1}{12}MR^2 \\
I = MR^2 \\
I = \frac{2}{5}MR^2 \\
I = \frac{2}{3}MR^2 
\end{aligned}
$$

---
### parallel axis
- moment of inertia about parallel center of mass equal sum of moment of inertia between axes
![[8 Physics/Images/parallel axis.png]]

---
### parallel axis formula
$$
\begin{aligned}
I_{p} = I_{cm} + Md^2 \\
I = \text{moment of inertia} \\
M = \text{system mass} \\
d = \text{distance}
\end{aligned}
$$

---
### translational kinetic energy
- kinetic energy of object undergoing translational motion dependent mass and velocity
![[8 Physics/Images/translational kinetic energy.png]]

---
### translational kinetic energy formula
$$
\begin{aligned}
K = \frac{1}{2}mv^2 \\
m = \text{mass} \\
v = \text{velocity}
\end{aligned}
$$

---
### rotational kinetic energy
- kinetic energy of object undergoing rotational motion dependent moment of inertia and angular velocity
![[8 Physics/Images/rotational kinetic energy.png]]

---
### rotational kinetic energy formula
$$
\begin{aligned}
K = \frac{1}{2}I\omega^2 \\
I = \text{moment of inertia} \\
\omega = \text{angular velocity}
\end{aligned}
$$

---
