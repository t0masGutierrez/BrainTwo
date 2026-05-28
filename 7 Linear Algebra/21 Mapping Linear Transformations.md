### injective linear transformation
- every element of domain map to 1 element of codomain
- one to one

---
### injective linear transformation formula
$$
\begin{aligned}
L: \mathcal V \rightarrow \mathcal W \iff \forall \vec v_{1}, \vec v_{2} \in \mathcal V: L(\vec v_{1}) = L(\vec v_{2}) \implies \vec v_{1} = \vec v_{2} \\
L = \text{injective linear transformation} \\
\mathcal V = \text{domain vector space} \\
\mathcal W = \text{codomain vector space} \\
\vec v = \text{preimage} \\
L(\vec v) = \text{image}
\end{aligned}
$$

---
### surjective linear transformation
- every element of codomain map to $\ge1$ element of domain
- onto

---
### surjective linear transformation formula
$$
\begin{aligned}
L: \mathcal V \rightarrow \mathcal W \iff \forall \vec w \in \mathcal W, \exists \vec v \in \mathcal V: L(\vec v) = \vec w \\
L = \text{surjective linear transformation} \\
\mathcal V = \text{domain vector space} \\
\mathcal W = \text{codomain vector space} \\
\vec v = \text{preimage} \\
L(\vec v) = \text{image}
\end{aligned}
$$

---
### bijective linear transformation
- linear transformation with equal dimension between domain and codomain equal bijective linear transformation

---
### bijective linear transformation formula
$$
\begin{aligned}
L: \mathcal V \rightarrow \mathcal W \land \dim(\mathcal V) = \dim(\mathcal W) \ne \infty \implies L = \text{injection} \iff L = \text{surjection} \\
L = \text{linear transformation} \\
\mathcal V = \text{domain vector space} \\
\mathcal W = \text{codomain vector space}
\end{aligned}
$$

---
### injective dimension property
- injective kernel equal trivial vector space
- or dimension of injective kernel equal zero

---
### injective dimension property formula
$$
\begin{aligned}
\text{ker}(L) = \{\vec 0_{\mathcal V}\} \lor \text{dim(ker} \ L) = 0 \\
L = \text{injective linear transformation}
\end{aligned}
$$

---
### injective linear independence property
- injective linear transformation preserve linearly independence

---
### injective linear independence property formula
$$
\begin{aligned}
L = \text{injection} \land \text{rank}(T) = \text{dim} (\mathcal V) \land L(T) = U \implies \text{rank}(U) = \text{dim}(\mathcal V) \\
L : T \subset \mathcal V \rightarrow U \subset \mathcal W \\
L = \text{injective linear transformation} \\
T, L(T) = \text{linearly independent set}
\end{aligned}
$$

---
### surjective dimension property
- surjective range equal codomain
- or dimension of surjective range not finite

---
### surjective dimension property formula
$$
\begin{aligned}
\text{range}(L) = \mathcal W \lor \text{dim(range} \ L) = \dim(\mathcal W) \ne \infty \\
L = \text{surjective linear transformation}
\end{aligned}
$$

---
### surjective spanning property
- surjective linear transformation preserve spanning

---
### surjective spanning property formula
$$
\begin{aligned}
L = \text{surjection} \land \text{span}(T) = \mathcal V \land L(T) = U \implies \text{span}(U) = \mathcal W \\
L : T \subset \mathcal V \rightarrow U \subset \mathcal W \\
L = \text{surjective linear transformation} \\
T, L(T) = \text{spanning set}
\end{aligned}
$$

---
