### differentiable
- there exists derivative of function

---
### differentiable formula
$$
\begin{aligned}
\exists L \in \mathbb R: \lim_{x \rightarrow t} \frac{f(x) - f(t)}{x - t} = L \implies f'(t) = L \\
f:[a, b] \rightarrow \mathbb R \\
L = \text{limit} \\
f' = \text{derivative} 
\end{aligned}
$$

---
### algebra differentiation property
- addition
- multiplication
- division

---
### algebra differentiation property formula
$$
\begin{aligned}
\exists L \in \mathbb R: \lim_{x \rightarrow t} \frac{f(x) - f(t)}{x - t} = L \implies (f+g)'(x) = f'(x) + g'(x) \\
\exists L \in \mathbb R: \lim_{x \rightarrow t} \frac{f(x) - f(t)}{x - t} = L \implies (f \cdot g)'(x) = f'(x) \cdot g(x) + f(x) \cdot g'(x) \\
\exists L \in \mathbb R: \lim_{x \rightarrow t} \frac{f(x) - f(t)}{x - t} = L \implies (\frac{f}{g})'(x) = \frac{f'(x) \cdot g(x) - f(x) \cdot g'(x)}{g^2(x)} \\
\end{aligned}
$$

---
### composite differentiation property
- derivative of composite function equal composite function of derivative

---
### composite differentiation property formula
$$
\begin{aligned}
\forall t \in [a, b]:\lim_{x\rightarrow t}f(x) = f(t) \land \\
\exists t \in [a, b], \exists L \in \mathbb R: \lim_{x \rightarrow t} \frac{f(x) - f(t)}{x - t} \land \\
\forall x \in [a, b]: f(x) \in I \land \\
\forall y \in I: g(y) \in \mathbb R \land \\
\exists L \in \mathbb R:\lim_{x \rightarrow t} \frac{g(x) - g(t)}{x - t} = L \land \\
\forall t \in [a, b]: h(t) = (g \circ f)(t) \implies \\
\exists L \in \mathbb R:\lim_{x \rightarrow t} \frac{h(x) - h(t)}{x - t} = L \land \\
h'(x) = (g' \circ f)(x) \cdot f'(x) \\

\end{aligned}
$$

---
### continuous differentiation property
- differentiable function equal continuous function

---
### continuous differentiation property formula
$$
\begin{aligned}
\exists L \in \mathbb R: \lim_{x \rightarrow t} \frac{f(x) - f(t)}{x - t} = L \implies \lim_{x\rightarrow t}f(x) = f(t) \\
L = \text{limit} \\
f = \text{continuous function}
\end{aligned}
$$

---
