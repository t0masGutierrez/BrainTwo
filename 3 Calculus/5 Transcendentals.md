### logarithm function
- exponent as function of product
![[3 Calculus/Images/logarithm function.png]]

---
### logarithm property
$$
\begin{aligned}
\log(1)=0\\
\log(10)=1\\
\log(a^{n})=n\times\log(a)\\
\log(ab)=\log(a)+\log(b)\\
\log(\frac{a}{b})=\log(a)-\log(b)\\
\end{aligned}
$$

---
### natural logarithm property
$$
\begin{aligned}
\ln(e^{x})=x\\
y=\ln(x)\to x=e^{y}\\
e^{\ln(x)}=x
\end{aligned}
$$

---
### natural logarithm derivative
$$
\begin{aligned}
\frac{d}{dx}\ln(u)=\frac{du}{u}\\
u=g(x)\\
du=g'(x)dx
\end{aligned}
$$

---
### natural logarithm integral
$$
\begin{aligned}
\int\frac{du}{u}=\ln(u)+c\\
u=g(x)\\
du=g'(x)dx
\end{aligned}
$$

---
### exponential function
- product as function of exponent
![[3 Calculus/Images/exponential function.png]]

---
### exponential property
$$
\begin{aligned}
n^{0}=1\\
n^{1}=n\\
n^{-1}=\frac{1}{n}\\
\sqrt[b]{x^{a}}=n^{\frac{a}{b}}\\
\frac{n^{a}}{n^{b}}=n^{a-b}\\
(n^{a})^{b}=n^{ab}\\
n^{a}\times n^{b}=n^{a+b}\\
\end{aligned}
$$

---
### natural exponential property
$$
\begin{aligned}
e^{\ln(x)}=x\\
y=e^{x}\to x=\ln(y)\\
\ln(e^{x})=x
\end{aligned}
$$

---
### natural exponential derivative
$$
\begin{aligned}
\frac{d}{dx}e^{u}=e^{u}du\\
u=g(x)\\
du=g'(x)dx
\end{aligned}
$$

---
### natural exponential integral
$$
\begin{aligned}
\int e^{u}du=e^{u}+c\\
u=g(x)\\
du=g'(x)dx
\end{aligned}
$$

---
### logarithm equation
- rewrite expression in terms of exponential argument by performing inverse operation of logarithm function

---
### exponential equation
- rewrite expression in terms of logarithm argument by performing inverse operation of exponential function

---
### inverse property
$$
\begin{aligned}
a^{\log_{x}(x)}=x\\
x=\log_{a}(y)\to y=a^{x}\\
\log_{a}(a^{x})=x
\end{aligned}
$$

---
### function of different base
- if function of different base then solve equation by performing inverse operation of function

---
### base exponential formula
$$
\begin{aligned}
a^{x}=e^{x\ln(a)}
\end{aligned}
$$

---
### base logarithm formula
$$
\begin{aligned}
\log_{a}(x)=\frac{\ln(x)}{\ln(a)}
\end{aligned}
$$

---
### different base derivative rules
$$
\begin{aligned}
\frac{d}{dx}a^{u}=\ln(a)a^{u}\frac{du}{dx}\\
\frac{d}{dx}\log_{a}(u)=\frac{1}{\ln(a)u}\frac{du}{dx}
\end{aligned}
$$

---
### different base integral rules
$$
\begin{aligned}
\int a^{u}du=\frac{a^{u}}{\ln(a)}+c\\
\int\log_{a}(u)du=\frac{\ln(u)}{\ln(a)}+c
\end{aligned}
$$

---
### logarithm differentiation
- natural logarithm both sides of equation
- differentiate both sides of equation
- isolate $f'(x)$ by multiplying derivative with $f(x)$

---
### logarithm differentiation formula
$$
\begin{aligned}
y=u^{g(x)}\to\ln(y)=g(x)\ln(u)
\end{aligned}
$$

---
### inverse trigonometric function
- input trigonometric ratio
- output angle
![[3 Calculus/Images/inverse trigonometric function.png]]

---
### inverse trigonometric formula
$$
\begin{aligned}
y=\arcsin(x)\\
\sin(y)=x
\end{aligned}
$$

---
### inverse trigonometric derivative rules
$$
\begin{aligned}
\frac{d}{dx}\arcsin(u)=\frac{u'}{\sqrt{1-u^{2}}}\\
\frac{d}{dx}\arccos(u)=\frac{-u'}{\sqrt{1-u^{2}}}\\
\frac{d}{dx}\arctan(u)=\frac{u'}{1+u^{2}}\\
\frac{d}{dx}\text{arccot}(u)=\frac{-u'}{1+u^{2}}\\
\frac{d}{dx}\text{arcsec}(u)=\frac{u'}{|u|\sqrt{u^{2}-1}}\\
\frac{d}{dx}\text{arccsc}(u)=\frac{-u'}{|u|\sqrt{u^{2}-1}}
\end{aligned}
$$

---
### inverse trigonometric integral rules
$$
\begin{aligned}
\int\frac{du}{\sqrt{a^{2}-u^{2}}}=\arcsin(\frac{u}{a})+c\\
\int\frac{du}{a^{2}+u^{2}}=\frac{1}{a}\arctan(\frac{u}{a})+c\\
\int\frac{du}{u\sqrt{u^{2}-a^{2}}}=\frac{1}{a}\text{arcsec}(\frac{|u|}{a})+c
\end{aligned}
$$

---
### hyperbolic function
- trigonometric functions except unit hyperbola instead of unit circle
![[3 Calculus/Images/hyperbolic function.png]]

---
### hyperbolic formula
$$
\begin{aligned}
\sinh(u)=\frac{e^{u}-e^{-u}}{2}\\
\cosh(u)=\frac{e^{u}+e^{-u}}{2}\\
\tanh(u)=\frac{\sinh(u)}{\cosh(u)}\\
\text{csch}(u)=\frac{1}{\sinh(u)}\\
\text{sech}(u)=\frac{1}{\cosh(u)}\\
\text{coth}(u)=\frac{1}{\tanh(u)}\\
\end{aligned}
$$

---
### hyperbolic graph
- sinh
- cosh
- tanh
- csch
- sech
- coth
![[3 Calculus/Images/hyperbolic graph.png]]

---
### hyperbolic derivative rules
$$
\begin{aligned}
\frac{d}{dx}\sinh(u)=\cosh(u)u'\\
\frac{d}{dx}\cosh(u)=\sinh(u)u'\\
\frac{d}{dx}\tanh(u)=\text{sech}^{2}(u)u'\\
\frac{d}{dx}\coth(u)=-\text{csch}^{2}(u)u'\\
\frac{d}{dx}\text{sech}(u)=-\text{sech}(u)\tanh(u)u'\\
\frac{d}{dx}\text{csch}(u)=-\text{csch}(u)\coth(u)u'
\end{aligned}
$$

---
### hyperbolic integral rules
$$
\begin{aligned}
\int\cosh(u)du=\sinh(u)+c\\
\int\sinh(u)du=\cosh(u)+c\\
\int\text{sech}^{2}(u)du=\tanh(u)+c\\
\int\text{csch}^{2}(u)du=-\text{coth}(u)+c\\
\int\text{sech}(u)\tanh(u)du=-\text{sech}(u)+c\\
\int\text{csch}(u)\text{coth}(u)du=-\text{csch}(u)+c\\
\end{aligned}
$$

---
### hyperbolic identity
- pythagorean
- sum difference
- 2nd power
- double angle
![[3 Calculus/Images/hyperbolic identity.png]]

---
### inverse hyperbolic function
- inverse trigonometric functions except unit hyperbola instead of unit circle

---
### inverse hyperbolic formula
$$
\begin{aligned}
\text{arcsinh}(u)=\ln(u+\sqrt{u^{2}+1})\\
\text{arccosh}(u)=\ln(u+\sqrt{u^{2}-1})\\
\text{arctanh}(u)=\frac{1}{2}\ln(\frac{1+u}{1-u})\\
\text{arccoth}(u)=\frac{1}{2}\ln(\frac{u+1}{u-1})\\
\text{arccsch}(u)=\ln(\frac{1}{u}+\frac{\sqrt{1+u^{2}}}{|u|})\\
\text{arcsech}(u)=\ln(\frac{1+\sqrt{1-u^{2}}}{u})
\end{aligned}
$$

---
### inverse hyperbolic graph
- inverse hyperbolic sine
- inverse hyperbolic cosine
- inverse hyperbolic tangent
- inverse hyperbolic cosecant
- inverse hyperbolic secant
- inverse hyperbolic cotangent
![[3 Calculus/Images/inverse hyperbolic graph.png]]

---
### inverse hyperbolic derivative rules
$$
\begin{aligned}
\frac{d}{dx}\text{arcsinh}(u)=\frac{u'}{\sqrt{u^{2}+1}}\\
\frac{d}{dx}\text{arccosh}(u)=\frac{u'}{\sqrt{u^{2}-1}}\\
\frac{d}{dx}\text{arctanh}(u)=\frac{u'}{1-u^{2}}\\
\frac{d}{dx}\text{arccoth}(u)=\frac{u'}{1-u^{2}}\\
\frac{d}{dx}\text{arcsech}(u)=\frac{-u'}{u\sqrt{1-u^{2}}}\\
\frac{d}{dx}\text{arccsch}(u)=\frac{-u'}{|u|\sqrt{1+u^{2}}}
\end{aligned}
$$

---
### inverse hyperbolic integral rules
$$
\begin{aligned}
\int\frac{du}{\sqrt{a^{2}\pm u^{2}}}=\ln(u+\sqrt{a^{2}\pm u^{2}})+c\\
\int\frac{du}{a^{2}-u^{2}}=\frac{1}{2a}\ln|\frac{a+u}{a-u}|+c\\
\int\frac{du}{u\sqrt{a^{2}\pm u^{2}}}=\frac{1}{a}\ln(\frac{a+\sqrt{a^{2}\pm u^{2}}}{|u|})+c
\end{aligned}
$$

---
