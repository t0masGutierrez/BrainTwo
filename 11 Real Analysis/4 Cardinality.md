### convex
- segment between coordinates of convex set equal coordinate of convex set

---
### convex formula
$$
\begin{lgathered}
\forall p,q\in S\subset\mathbb R,\forall\lambda\in[0,1]:\lambda p+(1-q)\lambda\in S\\
S=\text{convex set}
\end{lgathered}
$$

---
### interval
- convex region between endpoints

---
### interval formula
$$
\begin{lgathered}
\forall(x<y)\in I\subset\mathbb R:[x,y]=\{z\in\mathbb R|x\le z\le y\}\subset I\\
I=\text{interval}
\end{lgathered}
$$

---
### k-cell
- closed hyperrectangle of k-dimensional real numbers

---
### k-cell formula
$$
\begin{lgathered}
\forall(a\le b)\in\mathbb R:\prod_{i=1}^{k}[a_{i},b_{i}]=\{x\in\mathbb R^{k}|a_{i}\le x_{i}\le b_{i}\}\\
a=\text{lower endpoint}\\
b=\text{upper endpoint}
\end{lgathered}
$$

---
### open interval
- region between two exclusive endpoints

---
### open interval formula
$$
\begin{lgathered}
(a,b)=\{x\in\mathbb R|a<x<b\}\\
a=\text{lower endpoint}\\
b=\text{upper endpoint}
\end{lgathered}
$$

---
### closed interval
- region between two inclusive endpoints

---
### closed interval formula
$$
\begin{lgathered}
\left[a,b\right]=\{x\in\mathbb R|a\le x\le b\}\\
a=\text{lower endpoint}\\
b=\text{upper endpoint}
\end{lgathered}
$$

---
### cardinality
- size of set

---
### cardinality formula
$$
\begin{lgathered}
\#A=\#B\iff f:A\rightarrow B,\forall b\in B,\exists!a\in A:f(a)=b\\
\#=\text{cardinality}\\
f=\text{bijection}
\end{lgathered}
$$

---
### natural cardinality
- smallest possible size of infinite set

---
### natural cardinality formula
$$
\begin{lgathered}
\#\mathbb N=\aleph_{0}\\
\#=\text{cardinality}
\end{lgathered}
$$

---
### real cardinality
- smallest possible size of uncountable set

---
### real cardinality formula
$$
\begin{lgathered}
\#\mathbb R=2^{\aleph_{0}}\\
\#=\text{cardinality}
\end{lgathered}
$$

---
### finite
- there exists bijection with finite subset of natural numbers

---
### finite formula
$$
\begin{lgathered}
\exists n\in\mathbb N:\{0,1,2,\dots,n\}\sim S\\
S=\text{finite set}
\end{lgathered}
$$

---
### infinite
- there exists no bijection with finite subset of natural numbers

---
### infinite formula
$$
\begin{lgathered}
\forall n\in\mathbb N:\{0,1,2,\dots,n\}\not\sim S\\
S=\text{infinite set}
\end{lgathered}
$$

---
### countable
- there exists bijection with set of natural numbers

---
### countable formula
$$
\begin{lgathered}
\mathbb N\sim S\\
S=\text{countable set}
\end{lgathered}
$$

---
### uncountable
- infinite and uncountable

---
### uncountable formula
$$
\begin{lgathered}
(\{0,1,2,\dots,n\}\not\sim S)\land(\mathbb N\not\sim S)\\
S=\text{uncountable set}
\end{lgathered}
$$

---
### countable example
- naturals
- integers
- rationals

---
### countable example formula
$$
\begin{lgathered}
\mathbb N\sim\mathbb N\\
\mathbb N\sim\mathbb Z\\
\mathbb N\sim\mathbb Q\\
\end{lgathered}
$$

---
### uncountable example
- irrationals
- reals

---
### uncountable example formula
$$
\begin{lgathered}
(\{0,1,2,\dots,n\}\not\sim\mathbb R\setminus\mathbb Q)\land(\mathbb N\not\sim\mathbb R\setminus\mathbb Q)\\
(\{0,1,2,\dots,n\}\not\sim\mathbb R)\land(\mathbb N\not\sim\mathbb R)
\end{lgathered}
$$

---
### subset cardinality property
- subset of countable set equal countable set

---
### subset cardinality property formula
$$
\begin{lgathered}
(\mathbb N\sim S)\land(S_{1}\subset S)\implies\mathbb N\sim S_{1}\\
S,S_{1}=\text{countable set}
\end{lgathered}
$$

---
### union cardinality property
- countable union of countable set equal countable set

---
### union cardinality property formula
$$
\begin{lgathered}
\forall\in\mathbb N:\mathbb N\sim S_{n}\implies\mathbb N\sim\bigcup_{n=1}^{\infty}S_{n}\\
S=\text{countable set}
\end{lgathered}
$$

---
### product cardinality property
- countable product of countable set equal countable set

---
### product cardinality property formula
$$
\begin{lgathered}
\forall\in\mathbb N:\mathbb N\sim S_{n}\implies\mathbb N\sim S^{n}\\
S=\text{countable set}
\end{lgathered}
$$

---
### interval cardinality property
- interval of real numbers equal uncountable set

---
### interval cardinality property formula
$$
\begin{lgathered}
(a,b\in\mathbb R)\land(S=\{x\in\mathbb R|a\le x\le b\})\implies\mathbb N\not\sim S\\
S=\text{uncountable set}
\end{lgathered}
$$

---
### function cardinality property
- function of countable domain equal countable range

---
### function cardinality property formula
$$
\begin{lgathered}
(f:A\rightarrow B)\land(\mathbb N\sim A)\implies\mathbb N\sim f(A)\\
f=\text{function}\\
A=\text{domain}\\
A,f(A)=\text{countable set}\\
B=\text{codomain}
\end{lgathered}
$$

---
### injection cardinality property
- injective function of uncountable domain equal uncountable codomain

---
### injection cardinality property formula
$$
\begin{lgathered}
(f:A\rightarrow B)\land(\mathbb N\not\sim A)\implies\mathbb N\not\sim B\\
f=\text{injection}\\
A=\text{domain}\\
B=\text{codomain}
\end{lgathered}
$$

---
### surjection cardinality property
- uncountable codomain of surjective function equal uncountable domain

---
### surjection cardinality property formula
$$
\begin{lgathered}
(f:A\rightarrow B)\land(\mathbb N\not\sim B)\implies\mathbb N\not\sim A\\
f=\text{surjection}\\
A=\text{domain}\\
B=\text{codomain}
\end{lgathered}
$$

---
### bijection example
- subtraction
- addition
- exponential
- logarithm
- inverse exponential

---
### bijection example formula
$$
\begin{lgathered}
f:(0,1)\rightarrow(0,\infty)\implies f(x)=\frac{x}{1-x}\\
f:(0,\infty)\rightarrow(0,1)\implies f(x)=\frac{x}{1+x}\\
f:\mathbb R\rightarrow(0,\infty)\implies f(x)=e^{x}\\
f:(0,1)\rightarrow\mathbb R\implies f(x)=\ln x\\
f:\mathbb R\rightarrow(0,1)\implies f(x)=\frac{1}{1+e^{-x}}\\
\end{lgathered}
$$

---
