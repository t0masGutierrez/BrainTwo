### scalar
- quantity with magnitude

---
### vector
- quantity with both magnitude and direction
![[3 Calculus/Images/vector.png|200]]

---
### unit vector
- vector with magnitude of 1 that specify direction without scaling
![[4 Physics/Images/unit vector.png|300]]

---
### unit vector formula
$$
\begin{aligned}
\hat { i } = \frac { \vec { A _ { x } } } { A _ { x } } \\
\hat { j } = \frac { \vec { A _ { y } } } { A _ { y } } \\
\vec A _ { x } , \vec A _ { y } = \text {vector component} \\
A _ { x } , A _ { y } = \text {scalar component}
\end{aligned}
$$

---
### component
- horizontal change equal *x* component
- vertical change equal *y* component
![[4 Physics/Images/component.png|300]]

---
### scalar component formula
$$
\begin{aligned}
A _ { x } = A \cos ( \theta ) \\
A _ { y } = A \sin ( \theta ) \\
A = \text {magnitude} \\
\theta = \text {direction}
\end{aligned}
$$

---
### vector component formula
$$
\begin{aligned}
\vec { A } = \vec A _ { x } + \vec A _ { y } = A _ { x } \hat { i } + A _ { y } \hat { j } \\
\vec A _ { x } = \text {x vector component} \\
\vec A _ { y } = \text {y vector component} \\
A _ { x } = \text {x scalar component} \\
A _ { y } = \text {y scalar component} \\
\hat { i } = \text {x direction} \\
\hat { j } = \text {y direction}
\end{aligned}
$$

---
### magnitude
- distance from the origin

---
### magnitude formula
$$
\begin{aligned}
A = \sqrt { A _ { x } ^ { 2 } + A _ { y } ^ { 2 } } \\
A _ { x } = \text {x scalar component} \\
A _ { y } = \text {y scalar component}
\end{aligned}
$$

---
### direction
- counterclockwise angle between axis and vector
- left right up down

---
### direction formula
$$
\begin{aligned}
\theta = \begin{cases}
\arctan ( \frac { A _ { y } } { A _ { x } } ) , \  A _ { x } > 0 \\
\arctan ( \frac { A _ { y } } { A _ { x } } ) + 180 ^ { \circ } , \  A _ { x } < 0
\end{cases} \\
A _ { y } = \text {y scalar component} \\
A _ { x } = \text {x scalar component}
\end{aligned}
$$

---
### inverse tangent range
- 1st quadrant or 4th quadrant
![[4 Physics/Images/inverse tangent range.png|300]]

---
### inverse tangent range formula
$$
\begin{aligned}
{}[ \frac { - \pi } { 2 } \le \theta \le \frac { \pi } { 2 } ] = [ - 90 \le \theta \le 90 ] \\
\theta = \text {direction}
\end{aligned}
$$

---
### scalar multiplication
- scalar quantity multiplication with vector
- if negative scalar then direction addition with 180 or negate vector component

---
### scalar multiplication formula
$$
\begin{aligned}
c \vec { A } = c A _ { x } \hat { i } + c A _ { y } \hat { j } \\
c = \text {scalar} \\
A _ { x } = \text {x scalar component} \\
\hat { i } = \text {x direction} \\
A _ { y } = \text {y scalar component} \\
\hat { j } = \text {y direction}
\end{aligned}
$$

---
### vector addition
- vector *A* component(s) addition with corresponding vector *B* component(s)

---
### vector addition formula
$$
\begin{aligned}
\vec { R } = ( A _ { x } + B _ { x } ) \hat { i } + ( A _ { y } + B _ { y } ) \hat { j } \\
A _ { x } = \text {x scalar component} \\
\hat i = \text {x direction} \\
A _ { y } = \text {y scalar component} \\
\hat j = \text {y direction} \\
\end{aligned}
$$

---
### graphical vector addition
- vector *B* starts where vector *A* ends
- vector sum *C* equal diagonal from where vector *A* starts to where vector *B* ends
![[4 Physics/Images/graphical vector addition.png|200]]

---
### parallelogram vector addition
- both vectors start from the origin
- construct two parallel vectors
- vector sum *C* equal diagonal from the origin to where the parallel vectors intersect
![[4 Physics/Images/parallelogram vector addition.png|300]]

---
### dot product
- scalar quantity of similarity between two vectors
![[3 Calculus/Images/dot product.png]]

---
### dot product formula
$$
\begin{aligned}
\vec { A } \cdot \vec { B } = ( | A | ) ( | B | ) \cos ( \theta ) = A _ { x } B _ { x } + A _ { y } B _ { y } + A _ { z } B _ { z } \\
| A | , | B | = \text {magnitude} \\
\theta = \text {angle between vectors} \\
A _ { x } , B _ { x } = \text {x scalar component} \\
A _ { y } , B _ { y } = \text {y scalar component} \\
A _ { z } , B _ { z } = \text {z scalar component}
\end{aligned}
$$

---
### unit vector dot product
- scalar quantity of similarity between two perpendicular unit vectors equal zero

---
### unit vector dot product formula
$$
\begin{aligned}
\hat { i } \cdot \hat { j } = \hat { j } \cdot \hat { k } = \hat { k } \cdot \hat { i } = 0 \\
\hat i = \text {x direction} \\
\hat j = \text {y direction} \\
\hat k = \text {z direction}
\end{aligned}
$$

---
### cross product
- vector quantity of dissimilarity between two vectors
![[4 Physics/Images/cross product.png|300]]

---
### scalar cross product formula
$$
\begin{aligned}
| \vec { A } \times \vec { B } | = ( | A | ) ( | B | ) \sin ( \theta ) \\
| A | , | B | = \text {magnitude} \\
\theta = \text {angle between vectors}
\end{aligned}
$$

---
### vector cross product formula
$$
\begin{aligned}
\vec { A } \times \vec { B } = ( A _ { y } B _ { z } - A _ { z } B _ { y } ) \hat { i } + ( A _ { z } B _ { x } - A _ { x } B _ { z } ) \hat { j } + ( A _ { x } B _ { y } - A _ { y } B _ { x } ) \hat { k } \\
A _ { x } , B _ { x } = \text {x scalar component} \\
\hat i = \text {x direction} \\
A _ { y } , B _ { y } = \text {y scalar component} \\
\hat j = \text {y direction} \\
A _ { z } , B _ { z } = \text {z scalar component} \\
\hat k = \text {z direction}
\end{aligned}
$$

---
### unit vector cross product
- horizontal cross vertical equal longitudinal
- vertical cross longitudinal equal horizontal
- longitudinal cross horizontal equal vertical

---
### unit vector cross product formula
$$
\begin{aligned}
\hat { i } \times \hat { j } = \hat { k } \\
\hat { j } \times \hat { k } = \hat { i } \\
\hat { k } \times \hat { i } = \hat { j } \\
\hat i = \text {x direction} \\
\hat j = \text {y direction} \\
\hat k = \text {z direction}
\end{aligned}
$$

---
### right hand rule
- point hand to vector *A*
- curl palm to vector *B*
- point thumb to vector $A \times B$
![[4 Physics/Images/right hand rule.png|200]]

---
### right hand rule formula
$$
\begin{aligned}
# # # C \perp A \hookrightarrow B \\
- C \perp A \hookleftarrow B
\end{aligned}
$$

---
### vector equality property
- equal magnitude and equal direction

---
### vector equality property formula
$$
\begin{aligned}
\vec { A } = \vec { B } \iff
\begin{cases}
A _ { x } = B _ { x } \\
A _ { y } = B _ { y }
\end{cases} \\
\vec A , \vec B = \text {vector} \\
A _ { x } , B _ { x } = \text {x scalar component} \\
A _ { y } , B _ { y } = \text {y scalar component}
\end{aligned}
$$

---
### vector arithmetic property
- commutative
- associative
- identity
- inverse
- distributive

---
### vector arithmetic property formula
$$
\begin{aligned}
\vec A + \vec B = \vec B + \vec A \\
( \vec A + \vec B ) + \vec C = \vec A + ( \vec B + \vec C ) \\
\vec A + 0 = \vec A \\
1 \cdot \vec A = \vec A \\
\vec A + ( - \vec A ) = 0 \\
0 \cdot \vec A = 0 \\
c ( \vec A + \vec B ) = c \vec A + c \vec B
\end{aligned}
$$

---
### dot product direction property
- acute angle equal positive dot product
- obtuse angle equal negative dot product
- perpendicular vectors equal zero
- parallel vectors equal product of magnitude
- anti parallel vectors equal negative product of magnitude
- same vectors equal squared magnitude

---
### dot product direction property formula
$$
\begin{aligned}
0 ^ { \circ } \le \theta < 90 ^ { \circ } \iff \vec A \cdot \vec B > 0 \\
90 ^ { \circ } \le \theta < 180 ^ { \circ } \iff \vec A \cdot \vec B < 0 \\
\theta = 90 ^ { \circ } \iff \vec A \cdot \vec B = 0 \\
\theta = 0 ^ { \circ } \iff \vec A \cdot \vec B = A B \\
\theta = 180 ^ { \circ } \iff \vec A \cdot \vec B = - A B \\
\vec A = \vec B \implies ( \theta = 0 ^ { \circ } ) \land ( \vec A \cdot \vec B = A ^ { 2 } )
\end{aligned}
$$

---
### cross product direction property
- perpendicular vectors equal product of magnitude
- parallel vectors equal zero
- anti parallel vectors equal zero
- same vectors equal zero

---
### cross product direction property formula
$$
\begin{aligned}
\theta = 90 ^ { \circ } & \iff \| \vec A \times \vec B \| = ( | A | ) ( | B | ) \\
\theta = 0 ^ { \circ } & \iff \| \vec A \times \vec B \| = 0 \\
\theta = 180 ^ { \circ } & \iff \| \vec A \times \vec B \| = 0 \\
\vec A = \vec B & \implies ( \theta = 0 ^ { \circ } ) \land ( \| \vec A \times \vec B \| = 0 )
\end{aligned}
$$

---
