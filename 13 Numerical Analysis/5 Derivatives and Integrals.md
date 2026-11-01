---


---
### symbolic differentiation
- compute analytic derivative using calculus

---
### symbolic differentiation formula
$$
\begin{lgathered}
f'(x)=\frac{d}{dx}f(x)
\end{lgathered}
$$

---
### finite difference
- approximate derivative using function values at finitely separated points

---
### finite difference formula
$$
\begin{lgathered}
f'(x)=\lim_{h\rightarrow0}\frac{f(x+h)-f(x)}{h}=\lim_{h\rightarrow0}D_hf(x)\\
h=\text{step size}
\end{lgathered}
$$

---
### truncation error
- error because of approximating the derivative with finite step size

---
### truncation error formula
$$
\begin{lgathered}
e_T(h)=D_hf(x)-f'(x)\\
h=\text{step size}
\end{lgathered}
$$

---
### order of accuracy
- describe how quickly truncation error decrease as the step size approach zero

---
### order of accuracy formula
$$
\begin{lgathered}
e_T(h)=O(h^p)\iff\exists C,h_0>0,\forall0<h<h_0:|e_T(h)|\le Ch^p\\
h=\text{step size}\\
C=\text{constant}
\end{lgathered}
$$

---
### first-order forward difference
- use points at and to the right of the target

---
### first-order forward difference formula
$$
\begin{lgathered}
D_h^+f(x)\approx\frac{f(x+h)-f(x)}{h}\\
\exists c\in(x,x+h):e_T(h)=\frac{h}{2}f''(c)\\
h=\text{step size}
\end{lgathered}
$$

---
### first-order backward difference
- use points at and to the left of the target

---
### first-order backward difference formula
$$
\begin{lgathered}
D_h^-f(x)\approx\frac{f(x)-f(x-h)}{h}\\
\exists c\in(x-h,x):e_T(h)=\frac{-h}{2}f''(c)\\
h=\text{step size}
\end{lgathered}
$$

---
### second-order centered difference
- use points on both sides of the target

---
### second-order centered difference formula
$$
\begin{lgathered}
D_h^0f(x)\approx\frac{f(x+h)-f(x-h)}{2h}\\
\exists c\in(x-h,x+h):e_T(h)=\frac{-h^2}{6}f'''(c)\\
h=\text{step size}
\end{lgathered}
$$

---
### second-order second-derivative centered difference
- approximate the rate of change of the first derivative using points on both sides of the target

---
### second-order second-derivative centered difference
$$
\begin{lgathered}
D_h^{0(2)}f(x)\approx\frac{f(x-h)-2f(x)+f(x+h)}{h^2}\\
\exists c\in(x-h,x+h):e_T(h)=\frac{-h^2}{12}f^{(4)}(c)\\
h=\text{step size}
\end{lgathered}
$$

---
### fourth-order centered difference
- use points on both sides of the target

---
### fourth-order centered difference formula
$$
\begin{lgathered}
D_h^0f(x)\approx
\frac{f(x-2h)-8f(x-h)+8f(x+h)-f(x+2h)}{12h}\\
\exists c\in(x-2h,x+2h):e_T(h)=\frac{h^4}{30}f^{(5)}(c)\\
h=\text{step size}
\end{lgathered}
$$

---
### fourth-order second-derivative centered difference
- approximate the rate of change of the first derivative using points on both sides of the target

---
### fourth-order second-derivative centered difference
$$
\begin{lgathered}
D_h^{0(2)}f(x)\approx\frac{-f(x-2h)+16f(x-h)-30f(x)+16f(x+h)-f(x+2h)}{12h^2}\\
\exists c\in(x-2h,x+2h):e_T(h)=\frac{h^4}{90}f^{(6)}(c)\\
h=\text{step size}
\end{lgathered}
$$

---
### taylor expansion
- derive finite difference and its truncation error

---
### taylor expansion formula
$$
\begin{lgathered}
f(x+h)=\sum_{k=0}^{m}\frac{f^{(k)}(x)}{k!}h^k+R_m\\
R_m=\frac{f^{(m+1)}(c)}{(m+1)!}h^{m+1}\\
h=\text{step size}\\
R=\text{remainder}
\end{lgathered}
$$

---
### rounding error
- error because of finite-precision numerical calculations

---
### rounding error formula
$$
\begin{lgathered}
e_R(h)=O(\frac{\epsilon_{\text{mach}}}{h})\\
\epsilon_{\text{mach}}=\text{machine precision}\\
h=\text{step size}
\end{lgathered}
$$

---
### error boundary
- bound the total error

---
### error boundary formula
$$
\begin{lgathered}
|e^+(h)|\le\frac{h}{2}\max_{t\in[x,x+h]}|f''(t)|+\frac{2\epsilon_{\text{mach}}}{h}\\[6pt]
|e^-(h)|\le\frac{h}{2}\max_{t\in[x-h,x]}|f''(t)|+\frac{2\epsilon_{\text{mach}}}{h}\\[6pt]
|e^0(h)|\le\frac{h^2}{6}\max_{t\in[x-h,x+h]}|f'''(t)|+\frac{\epsilon_{\text{mach}}}{h}
\end{lgathered}
$$

---
### optimal step size
- step size with the smallest total error

---
### optimal step size formula
$$
\begin{lgathered}
h_*^+=\sqrt{\frac{4\epsilon_{\text{mach}}}{\max\limits_{t\in[x,x+h]}|f''(t)|}}\\[8pt]
h_*^-=\sqrt{\frac{4\epsilon_{\text{mach}}}{\max\limits_{t\in[x-h,x]}|f''(t)|}}\\[8pt]
h_*^0=\sqrt[3]{\frac{3\epsilon_{\text{mach}}}{\max\limits_{t\in[x-h,x+h]}|f'''(t)|}}
\end{lgathered}
$$

---
### richardson extrapolation
- combining approximations at different step sizes cancel the leading truncation error
- if greater accuracy required of centered difference without deriving new formula then richardson extrapolation

---
### richardson extrapolation formula
$$
\begin{lgathered}
f(x)=D_hf(x)+Kh^p+O(h^{p+1})\\
D_{\mathrm{ext}}f(x)=\frac{2^pD_{h/2}f(x)-D_hf(x)}{2^p-1}\\
\implies f(x)=D_{\mathrm{ext}}f(x)+O(h^{p+1})\\
h=\text{step size}\\
K=\text{leading coefficient}
\end{lgathered}
$$

---
