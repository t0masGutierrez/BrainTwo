### scale
- size of scaling factor influence the graph of unit-free equation
![[3 Mathematical Modeling/Images/scale.png]]

---
### scale formula
$$
\begin{aligned}
D = \{(t, y) \in [-a, a] \times [-b, b]| p_1a \le t \le p_2b, q_1a \le y \le q_2b\} \\
y = f(t, c_{1}, \dots, c_{n}) \\
p_{1}, p_{2}, q_{1}, q_{2} \in \mathbb Z \\
{}[a] = [t] \\
{}[b] = [y] \\
D = \text{domain} \\
t, y = \text{variable} \\
a, b = \text{scaling factor} \\
c = \text{parameter} 
\end{aligned}
$$

---
### scale example
- $y = c_1t^2 + c_{2}\sin(\frac{2\pi t}{c_{3}})$ 
- $c_{1} = 2\frac{\text{m}}{\text{s}^2}$ 
- $c_{2} = 0.01 \text{m}$ 
- $c_{3} = 0.01\text{s}$ 
![[3 Mathematical Modeling/Images/scale example.png|300]]

---
### scale example formula
$$
\begin{aligned}
\{a, b\} = \{0.001 \text{s}, 0.005\text{m}\}, \{0.02\text{s}, 0.02\text{m}\}, \{0.15 \text{s}, 0.10 \text{m}\}, \{10 \text{s}, 200 \text{m}\}
\end{aligned}
$$

---
### scale transformation
- change of variables from domain to scaled, normalized domain
![[3 Mathematical Modeling/Images/scale transformation.png]]

---
### scale transformation formula
$$
\begin{aligned}
(\bar t = \frac{t}{a}) \land (\bar y = \frac{y}{b}) \implies \bar D = \{(\bar t, \bar y) \in [-1, 1] \times [-1, 1]| p_{1} \le \bar t \le p_{2}, q_{1} \le \bar y \le q_{2}\} \\
\bar y = \frac{1}{b}f(a \bar t, c_{1}, \dots, c_{N}) = \bar f(\bar t, a, b, c_{1}, \dots, c_{n}) \\
p_{1}, p_{2}, q_{1}, q_{2} \in \mathbb Z \\
{}[a] = [\bar t] \\
{}[b] = [\bar y] \\
\bar D = \text{domain} \\
\bar t, \bar y = \text{variable} \\
a, b = \text{scaling factor} \\
c = \text{parameter} 
\end{aligned}
$$

---
### scale transformation example
- $y = c_1t^2 + c_{2}\sin(\frac{2\pi t}{c_{3}})$ 
- $c_{1} = 2\frac{\text{m}}{\text{s}^2}$ 
- $c_{2} = 0.01 \text{m}$ 
- $c_{3} = 0.01\text{s}$ 
![[3 Mathematical Modeling/Images/scale transformation example.png]]

---
### scale transformation example formula
$$
\begin{aligned}
\{a, b\} = \{-1, 1\}
\end{aligned}
$$

---
### scale derivative property
- kth derivative of scaled function equal kth power of scaling denominator

---
### scale derivative property formula
$$
\begin{aligned}
(\bar t = \frac{t}{a}) \land (\bar y = \frac{y}{b}) \implies\frac{d^k \bar y}{d \bar t^k} = (\frac{a^k}{b})(\frac{d^k y}{d t^k}) \\
\bar t, \bar y = \text{variable} \\
a, b = \text{scaling factor} 
\end{aligned}
$$

---
### characteristic scale
- typical size of scale equal input

---
### characteristic scale formula
$$
\begin{aligned}
b = \max_{t \in I}|y| \\
a = \frac{b}{\max_{t \in I}|\frac{dy}{dt}|}
\end{aligned}
$$

---
### associative scale
- output equal true size of scale

---
### associative scale formula
$$
\begin{aligned}
(a = \prod_{i=1}^n c_{i}^{\alpha_{i}}) \land ([a] = [t]) \iff \Delta_{a} = A \alpha = \Delta_{t} \\
(b = \prod_{i=1}^n c_{i}^{\beta_{i}}) \land ([b] = [y]) \iff \Delta_{b} = A \beta = \Delta_{y} \\
A = [\Delta_{c_{1}}, \dots, \Delta_{c_{n}}] \in \mathcal M_{m\le n} \\
\vec \alpha = [\alpha_{1}, \dots, \alpha_{n}] \\
\vec \beta = [\beta_{1}, \dots, \beta_{n}] \\
t, y = \text{variable} \\
a, b = \text{scaling factor} \\
\alpha, \beta = \text{parameter exponent} \\
c = \text{parameter}
\end{aligned}
$$

---
### scaling property
- scale transformation under natural scale equal equivalent function with smaller dimensionless argument

---
### scaling property formula
$$
\begin{aligned}
(\bar t = \frac{t}{a}) \land (\bar y = \frac{y}{b}) \implies \bar y = \phi(\bar t, \mu_{1}, \dots, \mu_{m}) \\
{}[\mu] = 1 \\
t, y, = \text{variable} \\
a, b = \text{scaling factor} \\
\mu = \text{parameter} \\
\end{aligned}
$$

---
