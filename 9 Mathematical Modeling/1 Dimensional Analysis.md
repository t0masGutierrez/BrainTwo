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
{}[ q ] = \prod _ { i = 1 } ^ { m } D _ { i } ^ { a _ { i } } \iff \Delta _ { q } = [ a _ { 1 } , \dots , a _ { m } ] \in \mathbb R ^ { m } \\
q = \text { quantity } \\
D = \text { dimension } \\
a = \text { dimensional exponent }
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
- $q = 3 \frac { k g \cdot m ^ { 2 } } { s ^ { 2 } }$ 
- $D = \set { L , T , M , \theta }$ 
- $[ q ] = M L ^ { 2 } T ^ { - 2 }$ 
- $\Delta _ { q } = [ 2 , - 2 , 1 , 0 ]$ 

---
### dimensional basis
- spanning
- linearly independent

---
### dimensional basis formula
$$
\begin{aligned}
\text { Span } ( D ) = \mathcal V \\
\text { Rank } ( D ) = m
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
{}[ p \pm q ] \in D \iff [ p ] = [ q ] \\
{}[ p \cdot q ] = [ p ] \cdot [ q ] \\
{}[ \frac { p } { q } ] = \frac { [ p ] } { [ q ] } \\
{}[ q ^ { k } ] = [ q ] ^ { k } \\
{}[ \int p \cdot d q ] = [ p ] \cdot [ q ] \\
{}[ \frac { d ^ { k } p } { d q ^ { k } } ] = \frac { [ p ] } { [ q ] ^ { k } }
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
\Delta _ { pq } = \Delta _ { p } + \Delta _ { q } \\
\Delta _ { p / q } = \Delta _ { p } - \Delta _ { q } \\
\Delta _ { q ^ { k } } = k \Delta _ { q }
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
{}[ q ] = 1 \iff \Delta _ { q } = 0 \\
q = \text { pure number }
\end{aligned}
$$

---
### change of units
- convert unit of quantity with respect to dimensional basis

---
### change of units formula
$$
\begin{aligned}
q ' = q \prod _ { i = 1 } ^ { m } \lambda _ { i } ^ { a _ { i } } \\
q = \text { quantity } \\
\lambda = \text { unit conversion factor } \\
a = \text { dimensional exponent }
\end{aligned}
$$

---
### unit-free equation
- every quantity of equation equal dimensionless quantity

---
### unit-free equation formula
$$
\begin{aligned}
q _ { 1 } = f ( q _ { 2 } , \dots , q _ { n } ) \implies q _ { 1 } ' = f ' ( q _ { 2 } ' , \dots , q _ { n } ' )
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
- $x = \frac { 1 } { 2 } g t ^ { 2 }$ 
- $D = \set { L , T }$ 
- $[ x ] = L , [ t ] = T , [ g ] = L T ^ { - 2 }$ 
- $x ' = x \lambda _ { 1 } , t ' = t \lambda _ { 2 } , g ' = g \lambda _ { 1 } \lambda _ { 2 } ^ { - 2 }$ 
- $( x ' \lambda _ { 1 } ^ { - 1 } ) = \frac { 1 } { 2 } ( g ' \lambda _ { 1 } ^ { - 1 } \lambda _ { 2 } ^ { 2 } ) ( t ' \lambda _ { 2 } ^ { - 1 } ) ^ { 2 }$ 
- $x ' \lambda _ { 1 } ^ { - 1 } \lambda _ { 1 } ^ { 1 } = \frac { 1 } { 2 } g ' t ' ^ { 2 } \lambda _ { 2 } ^ { 2 } \lambda _ { 2 } ^ { - 2 }$ 
- $\lambda \not \in x '$ 

---
### dimensionless power product
- product of power of quantity with respect to quantitative exponent

---
### dimensionless power product formula
$$
\begin{aligned}
\pi = \prod _ { i = 1 } ^ { n } q _ { i } ^ { b _ { i } } > 0 \\
q = \text { quantity } \\
b = \text { quantitative exponent }
\end{aligned}
$$

---
### buckingham pi property
- calculate units
- form matrix whose columns equal units
- convert matrix into reduced row echelon form
- back substitute for the fundamental solution set
- dimensional exponent of first target dimensionless power product equal 1 and dimensional exponent of additional target dimensionless power product equal 0
- every physically meaningful equation expressible as relationship between $n - m - 1$ dimensionless power product

---
### buckingham pi property formula
$$
\begin{aligned}
q _ { 1 } = f ( q _ { 2 } , \dots , q _ { n } ) \sim \pi _ { 1 } = \phi ( \pi _ { 2 } , \dots , \pi _ { n - m - 1 } ) \\
{}[ \pi ] = 1 \iff \Delta _ { \pi } = \sum _ { i = 1 } ^ { n } b _ { i } \Delta _ { q _ { i } } = A \vec b = 0 \\
A = [ \Delta q _ { 1 } , \dots , \Delta q _ { n } ] \in \mathcal M _ { mn } \\
\vec b = [ b _ { 1 } , \dots , b _ { n } ] \in \mathbb R ^ { n } \\
q = \text { quantity } \\
\pi = \text { dimensionless power product } \\
b = \text { quantitative exponent }
\end{aligned}
$$

---
