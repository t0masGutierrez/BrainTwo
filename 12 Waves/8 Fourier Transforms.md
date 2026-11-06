### fourier
- definition

---
### fourier formula
$$
\begin{lgathered}
f(x)=\frac{c_0}{2}+\sum_{n=1}^\infty[C_n\cos(k_nx)+S_n\sin(k_nx)]\\
C_n=\frac{2}{L}\int_{-L/2}^{L/2}f(x)\cos(k_nx)dx\\
S_n=\frac{2}{L}\int_{-L/2}^{L/2}f(x)\sin(k_nx)dx\\
f(x)=\int_{-\infty}^\infty[C(k)\cos(kx)+S(k)\sin(kx)]dk\\
C(k)=\frac{1}{2\pi}\int_{-\infty}^\infty f(x)\cos(kx)dx\\
S(k)=\frac{1}{2\pi}\int_{-\infty}^\infty f(x)\sin(kx)dx
\end{lgathered}
$$

---
### symmetry
- definition

---
### symmetry formula
$$
\begin{lgathered}
f(x)=2m\implies\int_{-A}^Af(x)dx=2\int_{0}^Af(x)dx\\
f(x)=2m+1\implies\int_{-A}^Af(x)dx=0
\end{lgathered}
$$

---
### gaussian
- definition

---
### gaussian formula
$$
\begin{lgathered}
f_{\sigma}(x)=\exp(\frac{-(x-\mu)^{2}}{2\sigma^{2}})\sqrt{\frac{1}{2\pi\sigma^2}}\\
\int_{-\infty}^\infty f_{\sigma}(x)dx=1\\
S(k)=0\\
C(k)=\frac{1}{2\pi}\exp(\frac{-\sigma^{2}k^2}{2})
\end{lgathered}
$$

---
### dirac delta
- definition

---
### dirac delta formula
$$
\begin{lgathered}
\delta(x)=\begin{cases}
\lim_{\sigma\rightarrow0}f_{\sigma}(x),&x\ne0\\
0,&x\ne0
\end{cases}\\
\int_{-\infty}^\infty\delta(x)dx=1\\
\int_{-\infty}^\infty\delta(x-a)g(x)dx=g(a)
\end{lgathered}
$$

---
