### mathematical model
- equation that express relationship between given quantity(s) of interest

---
### unit
- scale of measurement

---
### unit example
- meter
- second
- kilogram
- kelvin

---
### dimension
- type of measurement

---
### dimension formula
$$
\begin{aligned}
{}[q] = \prod_{i=1}^m D_{i}^{a_{i}} \iff \Delta_{q} = [a_{1}, \dots, a_{m}] \in \mathbb R^m \\
q = \text{quantity} \\ 
D = \text{dimension} \\
a = \text{dimensional exponent}
\end{aligned}
$$

---
### dimension example
- length
- time
- mass
- temperature

---
### dimension example formula
- $q = 3 \frac{kg \cdot m^2}{s^2}$ 
- $D = \set{L, T, M, \theta}$ 
- $[q] = ML^2T^{-2}$ 
- $\Delta_{q} = [2, -2, 1, 0]$ 

---
### dimensional basis
- spanning
- linearly independent

---
### dimensional basis formula
$$
\begin{aligned}
\text{Span}(D) = \mathcal V \\
\text{Rank}(D) = m
\end{aligned}
$$

---
### dimension property
- addition
- multiplication
- division
- exponentiation
- integration
- differentiation

---
### dimension property formula
$$
\begin{aligned}
{}[p \pm q] \in D \iff [p] = [q] \\
{}[p \cdot q] = [p] \cdot [q] \\
{}[\frac{p}{q}] = \frac{[p]}{[q]} \\
{}[q^k] = [q]^k \\
{}[\int p \cdot dq] = [p] \cdot [q] \\
{}[\frac{d^kp}{dq^k}] = \frac{[p]}{[q]^k}
\end{aligned}
$$

---
### exponent property
- multiplication
- division
- exponentiation

---
### exponent property formula
$$
\begin{aligned}
\Delta_{pq} = \Delta_{p} + \Delta_{q} \\
\Delta_{p/q} = \Delta_{p} - \Delta_{q} \\
\Delta_{q^k} = k\Delta_{q}
\end{aligned}
$$

---
### dimensionless
- dimension equal 1
- dimensional exponent equal 0

---
### dimensionless formula
$$
\begin{aligned}
{}[q] = 1 \iff \Delta_{q} = 0 \\
q = \text{pure number}
\end{aligned}
$$

---
### change of units
- convert unit of quantity with respect to dimensional basis

---
### change of units formula
$$
\begin{aligned}
q' = q\prod_{i=1}^m \lambda_{i}^{a_{i}} \\
q = \text{quantity} \\
\lambda = \text{unit conversion factor} \\
a = \text{dimensional exponent}
\end{aligned}
$$

---
### unit-free equation
- every quantity of equation equal dimensionless quantity

---
### unit-free equation formula
$$
\begin{aligned}
q_{1} = f(q_{2}, \dots, q_{n}) \implies q_{1}' = f'(q_{2}', \dots, q_{n}')
\end{aligned}
$$

---
### unit-free example
- define the dimensions
- define the change of units
- substitute the change of units into equation
- dimensional exponent of unit conversion factor equal negative dimensional exponent of quantity such that sum of corresponding dimensional exponent equal zero

---
### unit-free example formula
- $x = \frac{1}{2}gt^2$ 
- $D = \set{L, T}$ 
- $[x] = L, [t] = T, [g] = LT^{-2}$ 
- $x' = x\lambda_{1}, t' = t\lambda_{2}, g' = g\lambda_{1}\lambda_{2}^{-2}$ 
- $(x'\lambda_{1}^{-1}) = \frac{1}{2}(g'\lambda_{1}^{-1}\lambda_{2}^2)(t'\lambda_{2}^{-1})^2$ 
- $x'\lambda_{1}^{-1}\lambda_{1}^{1} = \frac{1}{2}g't'^2\lambda_{2}^2\lambda_{2}^{-2}$ 
- $\lambda \not\in x'$ 

---
### dimensionless power product
- product of power of quantity with respect to quantitative exponent

---
### dimensionless power product formula
$$
\begin{aligned}
\pi = \prod_{i=1}^n q_{i}^{b_{i}} > 0 \\
q = \text{quantity} \\
b = \text{quantitative exponent}
\end{aligned}
$$

---
### buckingham pi property
- calculate units
- form matrix whose columns equal units
- convert matrix into reduced row echelon form
- back substitute for the fundamental solution set
- dimensional exponent of first target dimensionless power product equal 1 and dimensional exponent of additional target dimensionless power product equal 0
- every physically meaningful equation expressible as relationship between $n-m-1$ dimensionless power product

---
### buckingham pi property formula
$$
\begin{aligned}
q_{1} = f(q_{2}, \dots, q_{n}) \sim \pi_{1} = \phi (\pi_{2}, \dots, \pi_{n-m-1}) \\
{}[\pi] = 1 \iff \Delta_\pi = \sum_{i=1}^n b_{i}\Delta_{q_{i}} = A\vec b = 0 \\
A = [\Delta q_{1}, \dots, \Delta q_{n}] \in \mathcal M_{mn} \\
\vec b = [b_{1}, \dots, b_{n}] \in \mathbb R^n \\
q = \text{quantity} \\
\pi = \text{dimensionless power product} \\
b = \text{quantitative exponent}
\end{aligned}
$$

---
