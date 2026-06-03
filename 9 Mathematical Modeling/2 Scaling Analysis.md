### scale
- size of scaling factor influence the graph of unit-free equation
![[9 Mathematical Modeling/Images/scale.png]]

---
### scale formula
$$
\begin{aligned}
D = \{ ( t , y ) \in [ - a , a ] \times [ - b , b ] | p _ { 1 } a \le t \le p _ { 2 } b , q _ { 1 } a \le y \le q _ { 2 } b \} \\
y = f ( t , c _ { 1 } , \dots , c _ { n } ) \\
p _ { 1 } , p _ { 2 } , q _ { 1 } , q _ { 2 } \in \mathbb Z \\
{}[ a ] = [ t ] \\
{}[ b ] = [ y ] \\
D = \text { domain } \\
t , y = \text { variable } \\
a , b = \text { scaling factor } \\
c = \text { parameter }
\end{aligned}
$$

---
### scale example
- $y = c _ { 1 } t ^ { 2 } + c _ { 2 } \sin ( \frac { 2 \pi t } { c _ { 3 } } )$ 
- $c _ { 1 } = 2 \frac { \text { m } } { \text { s } ^ { 2 } }$ 
- $c _ { 2 } = 0.01 \text { m }$ 
- $c _ { 3 } = 0.01 \text { s }$ 
![[9 Mathematical Modeling/Images/scale example.png|300]]

---
### scale example formula
$$
\begin{aligned}
\{ a , b \} = \{ 0.001 \text { s } , 0.005 \text { m } \} , \{ 0.02 \text { s } , 0.02 \text { m } \} , \{ 0.15 \text { s } , 0.10 \text { m } \} , \{ 10 \text { s } , 200 \text { m } \}
\end{aligned}
$$

---
### scale transformation
- change of variables from domain to scaled, normalized domain
![[9 Mathematical Modeling/Images/scale transformation.png]]

---
### scale transformation formula
$$
\begin{aligned}
( \bar t = \frac { t } { a } ) \land ( \bar y = \frac { y } { b } ) \implies \bar D = \{ ( \bar t , \bar y ) \in [ - 1 , 1 ] \times [ - 1 , 1 ] | p _ { 1 } \le \bar t \le p _ { 2 } , q _ { 1 } \le \bar y \le q _ { 2 } \} \\
\bar y = \frac { 1 } { b } f ( a \bar t , c _ { 1 } , \dots , c _ { N } ) = \bar f ( \bar t , a , b , c _ { 1 } , \dots , c _ { n } ) \\
p _ { 1 } , p _ { 2 } , q _ { 1 } , q _ { 2 } \in \mathbb Z \\
{}[ a ] = [ \bar t ] \\
{}[ b ] = [ \bar y ] \\
\bar D = \text { domain } \\
\bar t , \bar y = \text { variable } \\
a , b = \text { scaling factor } \\
c = \text { parameter }
\end{aligned}
$$

---
### scale transformation example
- $y = c _ { 1 } t ^ { 2 } + c _ { 2 } \sin ( \frac { 2 \pi t } { c _ { 3 } } )$ 
- $c _ { 1 } = 2 \frac { \text { m } } { \text { s } ^ { 2 } }$ 
- $c _ { 2 } = 0.01 \text { m }$ 
- $c _ { 3 } = 0.01 \text { s }$ 
![[9 Mathematical Modeling/Images/scale transformation example.png]]

---
### scale transformation example formula
$$
\begin{aligned}
\{ a , b \} = \{ - 1 , 1 \}
\end{aligned}
$$

---
### scale derivative property
- kth derivative of scaled function equal kth power of scaling denominator

---
### scale derivative property formula
$$
\begin{aligned}
( \bar t = \frac { t } { a } ) \land ( \bar y = \frac { y } { b } ) \implies \frac { d ^ { k } \bar y } { d \bar t ^ { k } } = ( \frac { a ^ { k } } { b } ) ( \frac { d ^ { k } y } { d t ^ { k } } ) \\
\bar t , \bar y = \text { variable } \\
a , b = \text { scaling factor }
\end{aligned}
$$

---
### characteristic scale
- typical size of scale equal input

---
### characteristic scale formula
$$
\begin{aligned}
b = \max _ { t \in I } | y | \\
a = \frac { b } { \max _ { t \in I } | \frac { d y } { d t } | }
\end{aligned}
$$

---
### associative scale
- output equal true size of scale

---
### associative scale formula
$$
\begin{aligned}
( a = \prod _ { i = 1 } ^ { n } c _ { i } ^ { \alpha _ { i } } ) \land ( [ a ] = [ t ] ) \iff \Delta _ { a } = A \alpha = \Delta _ { t } \\
( b = \prod _ { i = 1 } ^ { n } c _ { i } ^ { \beta _ { i } } ) \land ( [ b ] = [ y ] ) \iff \Delta _ { b } = A \beta = \Delta _ { y } \\
A = [ \Delta _ { c _ { 1 } } , \dots , \Delta _ { c _ { n } } ] \in \mathcal M _ { m \le n } \\
\vec \alpha = [ \alpha _ { 1 } , \dots , \alpha _ { n } ] \\
\vec \beta = [ \beta _ { 1 } , \dots , \beta _ { n } ] \\
t , y = \text { variable } \\
a , b = \text { scaling factor } \\
\alpha , \beta = \text { parameter exponent } \\
c = \text { parameter }
\end{aligned}
$$

---
### scaling property
- scale transformation under natural scale equal equivalent function with smaller dimensionless argument

---
### scaling property formula
$$
\begin{aligned}
( \bar t = \frac { t } { a } ) \land ( \bar y = \frac { y } { b } ) \implies \bar y = \phi ( \bar t , \mu _ { 1 } , \dots , \mu _ { m } ) \\
{}[ \mu ] = 1 \\
t , y , = \text { variable } \\
a , b = \text { scaling factor } \\
\mu = \text { parameter } \\
\end{aligned}
$$

---
