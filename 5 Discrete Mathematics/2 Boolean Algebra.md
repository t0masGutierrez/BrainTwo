### boolean algebra
- set ${\{0, 1}\}$ with two binary operations ${\{\land, \lor}\}$ and single unary operation $\{\overline{\ }\}$ such that these hold for all ${\{x, y, z}\}$
![[5 Discrete Mathematics/Images/boolean algebra.png]]

---
### boolean complement
- opposite of proposition
- not

---
### boolean complement formula
$$
\begin{aligned}
\overline{1} = 0 \\
\overline{0} = 1
\end{aligned}
$$


---
### boolean product
- joining of both proposition
- and

---
### boolean product formula
$$
\begin{aligned}
1 \times 1 = 1 \\
1 \times 0 = 0 \\
0 \times 1 = 0 \\
0 \times 0 = 0
\end{aligned}
$$

---
### boolean sum
- joining of either proposition
- or

---
### boolean sum formula
$$
\begin{aligned}
1 + 1 = 1 \\
1 + 0 = 1 \\
0 + 1 = 1 \\
0 + 0 = 0
\end{aligned}
$$

---
### boolean function
- boolean expression as function of boolean variable(s)

---
### boolean function formula
$$
\begin{aligned}
f : \{0, 1\}^n \rightarrow \{0, 1\} \\
n = \text{number of variables}
\end{aligned}
$$

---
### boolean complexity
- number of variable combinations

---
### boolean complexity formula
$$
\begin{aligned}
N = 2^n \\
n = \text{number of variables}
\end{aligned}
$$

---
### boolean variable
- variable whose values equal 1 or 0

---
### boolean expression
- combination of boolean variables with boolean operators

---
### boolean identity
- boolean expression that satisfy the requirements of tautology
![[5 Discrete Mathematics/Images/boolean identity.png]]

---
### dual of boolean expression
- interchange products and sums
- interchange 1s and 0s

---
### duality principle
- if dual of both sides of boolean expression then boolean identity remains true

---
### literal
- boolean variable or complement of boolean variable

---
### minterm
- boolean product of literals equal 1

---
### sum of products expansion
- represent boolean function as boolean sum of minterms

---
### calculate sum of products expansion
- construct truth table
- identify rows where output equal 1
- formulate minterm of rows
- compute boolean sum of minterms

---
### maxterm
- boolean sum of literals equal 0

---
### product of sums expansion
- represent boolean function as boolean product of maxterms

---
### calculate product of sums expansion
- construct truth table
- identify rows where output equal 0
- formulate maxterm of rows
- compute boolean product of maxterms

---
### functional completeness
- if every boolean function representable by set of boolean operators then boolean operators functionally complete

---
### logic gate
- input value(s) of boolean variable
- perform boolean operation
- output value of boolean variable

---
### not gate
- input value of boolean variable
- perform boolean complementation
- output complement of boolean variable
![[5 Discrete Mathematics/Images/not gate.png]]

---
### or gate
- input value of boolean variables
- perform boolean addition
- output sum of boolean variables
![[5 Discrete Mathematics/Images/or gate.png]]

---
### and gate
- input value of boolean variables
- perform boolean multiplication
- output product of boolean variables
![[5 Discrete Mathematics/Images/and gate.png]]

---
### logic circuit
- output based on combination of logic gate inputs
![[5 Discrete Mathematics/Images/logic circuit.png]]

---
### carry
- values that transfer from boolean addition because sum greater than 1

---
### half adder
- input value of boolean variables not including carry
- perform boolean addition not including carry
- output sum of boolean variables and carry

---
### full adder
- input value of boolean variables including carry
- perform boolean addition including carry
- output sum of boolean variables and carry

---
