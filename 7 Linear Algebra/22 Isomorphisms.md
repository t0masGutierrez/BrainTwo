### inverse linear transformation
- composition of linear transformation and inverse linear transformation equal preimage

---
### inverse linear transformation formula
$$
\begin{aligned}
(L:\mathcal V\rightarrow\mathcal W)\land(L^{-1}:\mathcal W\rightarrow\mathcal V)\iff\forall\vec v\in\mathcal V:(L^{-1}\circ L)(\vec v)=\vec v\ \land\\
\forall\vec w\in\mathcal W:(L\circ L^{-1})(\vec w)=\vec w\\
L=\text{linear transformation}\\
L^{-1}=\text{inverse linear transformation}\\
\mathcal V,\mathcal W=\text{vector space}\\
\vec v,\vec w=\text{vector}
\end{aligned}
$$

---
### bijective linear transformation
- every element of codomain map to 1 element of domain

---
### bijective linear transformation formula
$$
\begin{aligned}
L=\text{bijection}\iff(L=\text{injection})\land(L=\text{surjection})\\
L=\text{bijective linear transformation}
\end{aligned}
$$

---
### isomorphism
- bijective linear transformation

---
### isomorphism formula
$$
\begin{aligned}
L:\mathcal V\rightarrow\mathcal W\iff\forall\vec w\in\mathcal W,\exists!\vec v\in\mathcal V:L(\vec v)=\vec w\\
L=\text{isomorphism}\\
\mathcal V=\text{domain vector space}\\
\mathcal W=\text{codomain vector space}\\
\vec v=\text{preimage}\\
L(\vec v)=\text{image}
\end{aligned}
$$

---
### isomorphic vector space
- there exists isomorphism between both vector space

---
### isomorphic vector space formula
$$
\begin{aligned}
\mathcal V\cong\mathcal W\iff\exists L:\mathcal V\rightarrow\mathcal W\\
\mathcal V=\text{domain vector space}\\
\mathcal W=\text{codomain vector space}\\
L=\text{isomorphism}\\
\end{aligned}
$$

---
### isomorphism inverse property
- for every isomorphism there exists inverse linear transformation

---
### isomorphism inverse property formula
$$
\begin{aligned}
L:\mathcal V\rightarrow\mathcal W\iff\exists L^{-1}\\
L=\text{isomorphism}\\
L^{-1}=\text{inverse linear transformation}\\
\mathcal V,\mathcal W=\text{vector space}
\end{aligned}
$$

---
### isomorphism matrix property
- for every isomorphism there exists nonsingular matrix transformation

---
### isomorphism matrix property formula
$$
\begin{aligned}
(L:\mathcal V\rightarrow\mathcal W)\land(\exists A\in\mathcal M_{nn}:\vec v\mapsto A\vec v)\iff\det(A)\ne0\\
L=\text{isomorphism}\\
A=\text{matrix transformation}\\
\vec v=\text{preimage}\\
L(\vec v)=\text{image}
\end{aligned}
$$

---
### isomorphism matrix kernel property
- matrix transformation kernel equal isomorphism of matrix transformation kernel
- image of zero equal coordinatized vector of matrix transformation zero

---
### isomorphism matrix kernel property formula
$$
\begin{aligned}
(L:\mathcal V\rightarrow\mathcal W)\land(L_{1}:\mathcal V\rightarrow\mathbb R^{n})\land([L(\vec v)]_{C}=A_{BC}[\vec v]_{B})\implies\ker(L)=L^{-1}_{1}(\ker\ A_{BC})\\
(L:\mathcal V\rightarrow\mathcal W)\land(L_{1}:\mathcal V\rightarrow\mathbb R^{n})\land([L(\vec v)]_{C}=A_{BC}[\vec v]_{B})\implies\ker(A_{BC})=L_{1}(\ker\ L)\\
\vec v\in\text{ker}(L)\iff[\vec v]_{B}\in\text{ker}(A_{BC})\\
L(\vec v)=0_{\mathcal W}\iff[L(\vec v)]_{C}=0_{\mathbb R^{m}}\\
L=\text{linear transformation}\\
L_{1}=\text{isomorphism}\\
A=\text{matrix transformation}\\
B=\text{domain basis}\\
C=\text{codomain basis}\\
{}[L(\vec v)]_{C}=\text{image coordinate vector}\\
{}[\vec v]_{B}=\text{preimage coordinate vector}
\end{aligned}
$$

---
### isomorphism matrix range property
- range equal inverse isomorphism of matrix transformation range
- image of range equal coordinatized vector of matrix transformation range

---
### isomorphism matrix range property formula
$$
\begin{aligned}
(L:\mathcal V\rightarrow\mathcal W)\land(L_{2}:\mathcal W\rightarrow\mathbb R^{m})\land([L(\vec v)]_{C}=A_{BC}[\vec v]_{B})\implies\text{range}(L)=L^{-1}_{2}(\text{range}\ A_{BC})\\
L(\vec v)\in\text{range}(L)\iff[L(\vec v)]_{C}\in\text{range}(A_{BC})\\
L=\text{linear transformation}\\
L_{2}=\text{isomorphism}\\
A=\text{matrix transformation}\\
B=\text{domain basis}\\
C=\text{codomain basis}\\
L(\vec v)=\text{image}\\
{}[L(\vec v)]_{C}=\text{image coordinate vector}
\end{aligned}
$$

---
### isomorphism matrix dimension property
- dimension of matrix transformation kernel equal dimension of kernel
- dimension of matrix transformation range equal dimension of range

---
### isomorphism matrix dimension property formula
$$
\begin{aligned}
(L:\mathcal V\rightarrow\mathcal W)\land([L(\vec v)]_{C}=A_{BC}[\vec v]_{B})\implies\dim(\ker\ A_{BC})=\dim(\ker\ L)\\
(L:\mathcal V\rightarrow\mathcal W)\land([L(\vec v)]_{C}=A_{BC}[\vec v]_{B})\implies\dim(\text{range}\ A_{BC})=\dim(\text{range}\ L)\\
L=\text{linear transformation}\\
A=\text{matrix transformation}\\
B=\text{domain basis}\\
C=\text{codomain basis}\\
{}[L(\vec v)]_{C}=\text{image coordinate vector}\\
{}[\vec v]_{B}=\text{preimage coordinate vector}
\end{aligned}
$$

---
### isomorphic dimension property
- equal dimension between isomorphic vector space

---
### isomorphic dimension property formula
$$
\begin{aligned}
\mathcal V\cong\mathcal W\iff\dim(\mathcal V)=\dim(\mathcal W)\ne\infty\\
\mathcal V,\mathcal W=\text{isomorphic vector space}
\end{aligned}
$$

---
### isomorphic real property
- n-dimensional vector space isomorphic with n-dimensional real numbers

---
### isomorphic real property formula
$$
\begin{aligned}
\dim(\mathcal V)=n\implies\mathcal V\cong\mathbb R^{n}\\
\mathcal V,\mathbb R^{n}=\text{isomorphic vector space}\\
n=\text{dimension}\\
\end{aligned}
$$

---
