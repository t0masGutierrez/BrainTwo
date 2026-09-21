### limit interchange
- interchange of limit and operation equal preservation of operation under limit

---
### limit interchange formula
$$
\begin{lgathered}
T(\lim_{n\rightarrow\infty}f_{n})=\lim_{n\rightarrow\infty}T(f_{n})\\
T=\text{operation}\\
\set{f_{n}}=\text{sequence}
\end{lgathered}
$$

---
### pointwise convergent
- for every point there exists limit of sequence

---
### pointwise convergent formula
$$
\begin{lgathered}
\forall x\in S:\lim_{n\rightarrow\infty}f_{n}(x)=f(x)\\
f_{n}:S\rightarrow\mathbb R\\
f=\text{pointwise limit}\\
\set{f_{n}}=\text{pointwise convergent sequence}
\end{lgathered}
$$

---
### uniform convergent
- there exists limit of sequence for every point

---
### uniform convergent formula
$$
\begin{lgathered}
\forall\epsilon>0,\exists N\in\mathbb N,\forall n\ge N:|f_{n}(x)-f(x)|<\epsilon\\
f_{n}:S\rightarrow\mathbb R\\
f=\text{uniform limit}\\
\set{f_{n}}=\text{uniform convergent sequence}
\end{lgathered}
$$

---
### series
- sum of terms of sequence

---
### series formula
$$
\begin{lgathered}
\sum_{n=1}^{\infty}f_{n}(x)\\
f_{n}:S\rightarrow\mathbb R\\
\set{f_{n}}=\text{sequence}\\
\sum f_{n}=\text{series}
\end{lgathered}
$$

---
### limit interchange property
- pointwise convergence does not preserve continuity
- pointwise convergence does not preserve differentiability
- pointwise convergence does not preserve integrability

---
### limit interchange property formula
$$
\begin{lgathered}
\exists x\in S:\lim_{t\rightarrow x}\lim_{n\rightarrow\infty}f_{n}(t)\ne\lim_{n\rightarrow\infty}\lim_{t\rightarrow x}f_{n}(t)\\
\exists x\in S:\frac{d}{dx}\lim_{n\rightarrow\infty}f_{n}(x)\ne\lim_{n\rightarrow\infty}f_{n}'(x)\\
\exists a<b:\int_{a}^{b}\lim_{n\rightarrow\infty}f_{n}(x)dx\ne\lim_{n\rightarrow\infty}\int_{a}^{b}f_{n}(x)dx\\
\end{lgathered}
$$

---
### supremum uniform convergence property
- maximum error approaches zero as limit approaches infinity

---
### supremum uniform convergence property formula
$$
\begin{lgathered}
\forall x\in S:\lim_{n\rightarrow\infty}\sup_{x\in S}|f_{n}(x)-f(x)|=0\\
f_{n}:S\rightarrow\mathbb R\\
f=\text{uniform limit}\\
\set{f_{n}}=\text{uniform convergent sequence}
\end{lgathered}
$$

---
### continuous uniform convergence property
- uniform convergence preserve continuity

---
### continuous uniform convergence property formula
$$
\begin{lgathered}
\lim_{t\rightarrow x}\lim_{n\rightarrow\infty}f_{n}(t)=\lim_{n\rightarrow\infty}\lim_{t\rightarrow x}f_{n}(t)\\
x=\text{limit point}\\
f_{n}=\text{continuous function}\\
\set{f_{n}}=\text{uniform convergent sequence}
\end{lgathered}
$$

---
### differentiable uniform convergence property
- uniform convergence preserve differentiability

---
### differentiable uniform convergence property formula
$$
\begin{lgathered}
\frac{d}{dx}\lim_{n\rightarrow\infty}f_{n}(x)=\lim_{n\rightarrow\infty}f_{n}'(x)\\
f_{n}=\text{continuous function}\\
\set{f_{n}}=\text{uniform convergent sequence}
\end{lgathered}
$$

---
### integrable uniform convergence property
- uniform convergence preserve integrability

---
### integrable uniform convergence property formula
$$
\begin{lgathered}
\int_{a}^{b}\lim_{n\rightarrow\infty}f_{n}(x)dx=\lim_{n\rightarrow\infty}\int_{a}^{b}f_{n}(x)dx\\
\end{lgathered}
$$

---
### cauchy uniform convergence property
- uniform convergent sequence equal uniform cauchy sequence

---
### cauchy uniform convergence property formula
$$
\begin{lgathered}
\forall\epsilon>0,\exists N\in\mathbb N,\forall n,m\ge N:|f_{n}(x)-f_{m}(x)|<\epsilon\\
f_{n}:S\rightarrow\mathbb R\\
f=\text{uniform limit}\\
\set{f_{n}}=\text{uniform convergent sequence}
\end{lgathered}
$$

---
### absolute convergence series property
- finite sum of terms of sequence

---
### absolute convergence series property formula
$$
\begin{lgathered}
\sum_{n=1}^{\infty}|f_{n}(x)|<\infty\\
f_{n}:S\rightarrow\mathbb R\\
\set{f_{n}}=\text{sequence}\\
\sum f_{n}=\text{absolute convergent series}
\end{lgathered}
$$

---
### uniform convergence series property
- there exists limit of series for every point

---
### uniform convergence series property formula
$$
\begin{lgathered}
\forall x\in X:|f_{n}(x)|\le M_{n}\land\sum M_{n}<\infty\implies\forall\epsilon>0,\exists N\in\mathbb N,\forall n\ge N:|\sum_{k=1}^{n}f_{k}(x)-\sum_{k=1}^{\infty}f_{k}(x)|<\epsilon\\
f_{n}:X\rightarrow\mathbb R\\
f=\text{uniform limit}\\
\set{f_{n}}=\text{sequence}\\
\sum f_{n}=\text{uniform convergent series}
\end{lgathered}
$$

---
