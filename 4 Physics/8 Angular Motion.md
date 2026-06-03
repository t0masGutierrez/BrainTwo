### rigid body
- body whose shape and size do not change
- distances between all points inside the body remain constant
![[4 Physics/Images/rigid body.png|300]]

---
### rigid body formula
$$
\begin{aligned}
\forall i , j \in \set { 1 , \dots , n } : | \vec r _ i - \vec r _ j | = 0 \\
i , j = \text { index } \\
\vec r = \text { position }
\end{aligned}
$$

---
### angular position
- angle as function of time
![[4 Physics/Images/angular position.png|300]]

---
### angular position formula
$$
\begin{aligned}
\vec \theta = \frac { s } { r } \\
s = \text { arc length } \\
r = \text { radius }
\end{aligned}
$$

---
### angular displacement
- vector change of angular position
![[4 Physics/Images/angular displacement.png|300]]

---
### angular displacement formula
$$
\begin{aligned}
\Delta \vec \theta = \vec \theta - \vec \theta _ { 0 } \\
\theta = \text { angular position }
\end{aligned}
$$

---
### average angular velocity
- angular position per time
![[4 Physics/Images/average angular velocity.png|200]]

---
### average angular velocity formula
$$
\begin{aligned}
\vec \omega _ { a v g } = \frac { \Delta \vec \theta } { \Delta t } \\
\vec \theta = \text { angular position } \\
t = \text { time }
\end{aligned}
$$

---
### instantaneous angular velocity
- rate of change of angular position as change of time approaches zero
![[4 Physics/Images/instantaneous angular velocity.png|200]]

---
### instantaneous angular velocity formula
$$
\begin{aligned}
\vec \omega = \frac { d \vec \theta } { d t } \\
\vec \theta = \text { angular position } \\
t = \text { time }
\end{aligned}
$$

---
### average angular acceleration
- angular velocity per time
![[4 Physics/Images/average angular acceleration.png|250]]

---
### average angular acceleration formula
$$
\begin{aligned}
\vec \alpha _ { a v g } = \frac { \Delta \vec \omega } { \Delta t } \\
\vec \omega = \text { angular velocity } \\
t = \text { time }
\end{aligned}
$$

---
### instantaneous angular acceleration
- rate of change of angular velocity as change of time approaches zero
![[4 Physics/Images/instantaneous angular acceleration.png|300]]

---
### instantaneous angular acceleration formula
$$
\begin{aligned}
\vec \alpha = \frac { d \vec \omega } { d t } = \frac { d ^ 2 \vec \theta } { d t ^ 2 } \\
\vec \omega = \text { angular velocity } \\
t = \text { time } \\
\vec \theta = \text { angular position }
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
\vec r = \text { radius } \\
\vec \theta = \text { angular position }
\end{aligned}
$$

---
### tangential velocity
- rate of change of position along circular path as change of time approaches zero
![[4 Physics/Images/tangential velocity.png|250]]

---
### tangential velocity formula
$$
\begin{aligned}
\vec v _ { t a n } = \vec r \times \vec \omega \\
\vec r = \text { radius } \\
\vec \omega = \text { angular velocity }
\end{aligned}
$$

---
### tangential acceleration
- rate of change of velocity along circular path as change of time approaches zero

---
### tangential acceleration formula
$$
\begin{aligned}
\vec a _ { t a n } = \vec r \times \vec \alpha \\
\vec r = \text { radius } \\
\vec \alpha = \text { angular acceleration }
\end{aligned}
$$

---
### radial acceleration
- acceleration vector perpendicular circular path equal change of direction

---
### radial acceleration formula
$$
\begin{aligned}
\vec a _ { r a d } = \vec r \times \vec \omega ^ 2 = \frac { \vec v _ { t a n } ^ 2 } { \vec r } \\
\vec r = \text { radius } \\
\vec \omega = \text { angular velocity } \\
\vec v = \text { velocity }
\end{aligned}
$$

---
### total acceleration
- tangential acceleration and radial acceleration
![[4 Physics/Images/total acceleration.png|250]]

---
### total acceleration formula
$$
\begin{aligned}
a = \sqrt { a _ { t a n } ^ 2 + a _ { r a d } ^ 2 } \\
a _ { t a n } = \text { tangential acceleration } \\
a _ { r a d } = \text { radial acceleration }
\end{aligned}
$$

---
### angular kinematics
- rotational motion under constant angular acceleration

---
### angular kinematics formula
$$
\begin{aligned}
\omega _ z = \omega _ { 0 z } + \alpha _ z t \\
\theta = \theta _ { 0 } + \omega _ { 0 z } t + \frac { 1 } { 2 } \alpha _ z t ^ 2 \\
\theta - \theta _ { 0 } = \frac { 1 } { 2 } ( \omega _ z + \omega _ { 0 z } ) t \\
\omega _ z ^ 2 = \omega _ { 0 z } ^ 2 + 2 \alpha _ z ( \theta - \theta _ { 0 } )
\end{aligned}
$$

---
### inertia
- resistance to acceleration

---
### inertia formula
$$
\begin{aligned}
I _ { t a n } = m \\
m = \text { mass }
\end{aligned}
$$

---
### moment of inertia
- rotational analogue of mass
![[4 Physics/Images/moment of inertia.png|300]]

---
### constant moment of inertia formula
$$
\begin{aligned}
I = \sum _ { n } m _ n r _ { n } ^ 2 \\
m = \text { mass } \\
r = \text { radius }
\end{aligned}
$$

---
### variable moment of inertia formula
$$
\begin{aligned}
I = \int r ^ 2 d m = \int r ^ 2 \rho d V \\
r = \text { radius } \\
m = \text { mass } \\
\rho = \text { density } \\
V = \text { volume }
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
![[4 Physics/Images/axis of rotation.png|600]]

---
### axis of rotation formula
$$
\begin{aligned}
I = \frac { 1 } { 12 } M L ^ 2 \\
I = \frac { 1 } { 3 } M L ^ 2 \\
I = \frac { 1 } { 12 } M ( a ^ 2 + b ^ 2 ) \\
I = \frac { 1 } { 3 } M a ^ 2 \\
I = \frac { 1 } { 2 } M ( R _ 1 ^ 2 + R _ 2 ^ 2 ) \\
I = \frac { 1 } { 2 } M R ^ 2 \\
I = M R ^ 2 \\
I = \frac { 2 } { 5 } M R ^ 2 \\
I = \frac { 2 } { 3 } M R ^ 2
\end{aligned}
$$

---
### parallel axis
- moment of inertia about parallel center of mass equal sum of moment of inertia between axes
![[4 Physics/Images/parallel axis.png]]

---
### parallel axis formula
$$
\begin{aligned}
I _ { p } = I _ { c m } + M d ^ 2 \\
I = \text { moment of inertia } \\
M = \text { system mass } \\
d = \text { distance }
\end{aligned}
$$

---
### translational kinetic energy
- kinetic energy of object undergoing translational motion dependent mass and velocity
![[4 Physics/Images/translational kinetic energy.png]]

---
### translational kinetic energy formula
$$
\begin{aligned}
K = \frac { 1 } { 2 } m v ^ 2 \\
m = \text { mass } \\
v = \text { velocity }
\end{aligned}
$$

---
### rotational kinetic energy
- kinetic energy of object undergoing rotational motion dependent moment of inertia and angular velocity
![[4 Physics/Images/rotational kinetic energy.png]]

---
### rotational kinetic energy formula
$$
\begin{aligned}
K = \frac { 1 } { 2 } I \omega ^ 2 \\
I = \text { moment of inertia } \\
\omega = \text { angular velocity }
\end{aligned}
$$

---
