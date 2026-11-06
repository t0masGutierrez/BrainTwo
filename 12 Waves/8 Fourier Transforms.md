### fourier transform
- definition

---
### fourier transform formula
$$
\begin{lgathered}
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
f(-x)=f(x)\implies\int_{-\infty}^\infty f(x)dx=2\int_{0}^\infty f(x)dx\\
f(-x)=-f(x)\implies\int_{-\infty}^\infty f(x)dx=0
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
C(k)=\frac{1}{2\pi}\exp(\frac{-\sigma^{2}k^2}{2})\cos(k\mu)\\
S(k)=\frac{1}{2\pi}\exp(\frac{-\sigma^{2}k^2}{2})\sin(k\mu)
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
\infty,&x=0\\
0,&x\ne0
\end{cases}\\
\delta(x-\mu)=\lim_{\sigma\rightarrow0^+}f_{\sigma}(x)\\
\delta(x-x')=\frac{1}{\pi}\int_0^\infty\cos[k(x-x')]dk=\frac{1}{\pi}\int_0^\infty[\cos(kx)\cos(k'x)+\sin(kx)\sin(k'x)]dk\\
\int_{-\infty}^\infty\delta(k-k')f(k')dk'=f(k)
\end{lgathered}
$$

---
### orthogonality
- definition

---
### orthogonality formula
$$
\begin{lgathered}
\frac{1}{2\pi}\int_{-\infty}^\infty\cos(kx)\cos(k'x)dx=\frac{1}{2}[\delta(k-k')+\delta(k+k')]\\
\frac{1}{2\pi}\int_{-\infty}^\infty\sin(kx)\sin(k'x)dx=\frac{1}{2}[\delta(k-k')-\delta(k+k')]\\
\frac{1}{2\pi}\int_{-\infty}^\infty\cos(kx)\sin(k'x)dx=0
\end{lgathered}
$$

---
