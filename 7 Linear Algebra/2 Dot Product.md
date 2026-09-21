### dot product
- scalar quantity of similarity between two vectors

---
### dot product formula
$$
\begin{aligned}
\vec x\cdot\vec y=\sum_{i=1}^{n}x_{i}y_{i}=(\|\vec x\|)(\|\vec y\|)\cos(\theta)\\
x,y=\text{coordinate}\\
i=\text{index}\\
n=\text{number of coordinates}\\
\vec x,\vec y=\text{vector}\\
\|\vec x\|,\|\vec y\|=\text{magnitude}\\
\theta=\text{direction}
\end{aligned}
$$

---
### direction
- counterclockwise angle between two vectors
![[3 Calculus/Images/dot product.png]]

---
### direction formula
$$
\begin{aligned}
\cos(\theta)=\frac{\vec x\cdot\vec y}{(||\vec x||)(||\vec y||)}\\
0\le\theta\le\pi\\
\vec x,\vec y=\text{vector}\\
\|\vec x\|,\|\vec y\|=\text{magnitude}
\end{aligned}
$$

---
### parallel projection
- parallel projection of $\vec y$ onto $\vec x$ equal vector component of $\vec y$ parallel $\vec x$

---
### parallel projection formula
$$
\begin{aligned}
\text{proj}_{x}(y\parallel)=(\frac{\vec x\cdot\vec y}{\|\vec x\|^{2}})\vec x\\
\vec x,\vec y=\text{vector}\\
\|\vec x\|=\text{magnitude}
\end{aligned}
$$

---
### orthogonal projection
- orthogonal projection of $\vec y$ onto $\vec x$ equal vector component of $\vec y$ orthogonal $\vec x$
![[7 Linear Algebra/Images/orthogonal projection.png|300]]

---
### orthogonal projection formula
$$
\begin{aligned}
\text{proj}_{x}(y\perp)=\vec y-(\frac{\vec x\cdot\vec y}{\|\vec x\|^{2}})\vec x\\
\vec x,\vec y=\text{vector}\\
\|\vec x\|=\text{magnitude}
\end{aligned}
$$

---
### mutually orthogonal
- for every distinct vector pair of set the dot product equal zero

---
### mutually orthogonal formula
$$
\begin{aligned}
\forall i,j\in\{1,...,k\}:i\ne j\implies\vec x_{i}\cdot\vec x_{j}=0\\
i=\text{row index}\\
j=\text{column index}\\
k=\text{number of vectors}\\
\vec x=\text{vector}
\end{aligned}
$$

---
### dot product arithmetic property
- commutative
- identity
- zero
- associative
- distributive

---
### dot product arithmetic property formula
$$
\begin{aligned}
\vec x\cdot\vec y=\vec y\cdot\vec x\\
\vec x\cdot\vec x=\|\vec x\|^{2}\ge0\\
\vec x\cdot\vec x=0\iff\vec x=\vec0\\
c(\vec x\cdot\vec y)=(c\vec x)\cdot\vec y=\vec x\cdot(c\vec y)\\
\vec x\cdot(\vec y+\vec z)=(\vec x\cdot\vec y)+(\vec x\cdot\vec z)=(\vec x+\vec y)\cdot\vec z
\end{aligned}
$$

---
### dot product unit property
- dot product of unit vector equal $\pm1$

---
### dot product unit property formula
$$
\begin{aligned}
-1\le\vec x\cdot\vec y\le1\\
\|\vec x\|,\|\vec y\|=1\\
\vec x,\vec y=\text{vector}
\end{aligned}
$$

---
### direction property
- acute angle
- right angle
- obtuse angle
- parallel direction
- orthogonal direction

---
### direction property formula
$$
\begin{aligned}
0\le\theta\le90\iff\vec x\cdot\vec y>0\\
\theta=90\iff\vec x\cdot\vec y=0\\
90\le\theta\le180\iff\vec x\cdot\vec y<0\\
\vec x\parallel\vec y\iff\vec x\cdot\vec y=\pm(\|\vec x\|)(\|\vec y\|)\\
\vec x\perp\vec y\iff\vec x\cdot\vec y=0
\end{aligned}
$$

---
### cauchy schwarz inequality
- dot product of magnitude equal upper boundary for magnitude of dot product

---
### cauchy schwarz inequality formula
$$
\begin{aligned}
|\vec x\cdot\vec y|\le(\|\vec x\|)(\|\vec y\|)\\
\vec x,\vec y=\text{vector}\\
\|\vec x\|,\|\vec y\|=\text{magnitude}
\end{aligned}
$$

---
### triangle inequality
- sum of magnitude equal upper boundary for magnitude of sum

---
### triangle inequality formula
$$
\begin{aligned}
\|\vec{x}+\vec{y}\|\le\|\vec{x}\|+\|\vec{y}\|\\
\vec x,\vec y=\text{vector}\\
\|\vec x\|,\|\vec y\|=\text{magnitude}
\end{aligned}
$$

---
