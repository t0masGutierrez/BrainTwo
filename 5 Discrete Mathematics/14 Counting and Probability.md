### product rule
- if there exists $n _ { 1 }$ ways to do the first task and for every way of doing the first task there exists $n _ { 2 }$ ways to do the second task then $n _ { 1 } \times n _ { 2 }$ ways to do the procedure

---
### calculate product rule
- $n _ { 1 }$ multiplication with $n _ { 2 }$

---
### sum rule
- if there exists either $n _ { 1 }$ ways or $n _ { 2 }$ ways to do the task and none of the $n _ { 1 }$ ways is the same as any of the $n _ { 2 }$ ways then $n _ { 1 } + n _ { 2 }$ ways to do the task

---
### calculate sum rule
- $n _ { 1 }$ addition with $n _ { 2 }$

---
### subtraction rule
- if there exists either $n _ { 1 }$ ways or $n _ { 2 }$ ways to do the task then $n _ { 1 } + n _ { 2 }$ ways to do the task less the number of common ways

---
### calculate subtraction rule
- $n _ { 1 }$ addition with $n _ { 2 }$
- sum subtraction with the number of common ways

---
### principle of inclusion exclusion
- the number of union elements equal the sum of the number of elements of per set less the number of common elements

---
### formula of inclusion exclusion
$$
\begin{aligned}
| A \cup B | = | A | + | B | - | A \cap B |
\end{aligned}
$$

---
### quotient rule
- if there exists $n _ { 1 }$ ways to do the task and for every outcome there exists $n _ { 2 }$ unique ways to get that outcome then $n _ { 1 } \div n _ { 2 }$ number of unique outcomes

---
### calculate quotient rule
- $n _ { 1 }$ division with $n _ { 2 }$

---
### tree diagram
- diagram illustrate the total number of possible outcomes
![[5 Discrete Mathematics/Images/tree diagram.png]]

---
### pigeonhole principle
- if *a* pigeons put into *b* holes and $a > b$ then at least 1 hole must contain >1 pigeon
![[5 Discrete Mathematics/Images/pigeonhole principle.png]]

---
### pigeonhole formula
$$
\begin{aligned}
k = \lceil \frac { a } { b } \rceil \\
a = \text { number of pigeons } \\
b = \text { number of pigeonholes }
\end{aligned}
$$

---
### permutation
- number of ways to arrange objects with order

---
### permutation formula
$$
\begin{aligned}
P ( n , r ) = \frac { n ! } { ( n - r ) ! } = n ( n - 1 ) ( n - 2 ) . . . ( n - r + 1 ) \\
n = \text { number of objects without replacement } \\
r = \text { number of arrangements }
\end{aligned}
$$

---
### permutation formula
$$
\begin{aligned}
P ( n , r ) = n ^ r \\
n = \text { number of objects with replacement } \\
r = \text { number of arrangements }
\end{aligned}
$$

---
### combination
- number of ways to choose objects without order

---
### combination formula
$$
\begin{aligned}
C ( n , r ) = \frac { n ! } { r ! ( n - r ) ! } = \frac { n ( n - 1 ) ( n - 2 ) . . . ( n - r + 1 ) } { r ! } \\
n = \text { number of objects without replacement } \\
r = \text { number of choices }
\end{aligned}
$$

---
### sample space
- set of all possible outcomes of experiment

---
### event
- subset of sample space

---
### probability
- likelihood event will occur

---
### probability formula
$$
\begin{aligned}
P ( A ) = \frac { \text { number of favorable outcomes } } { \text { total number of possible outcomes } }
\end{aligned}
$$

---
### complementary probability
- likelihood event will not occur

---
### complementary probability formula
$$
\begin{aligned}
P ( A ' ) = 1 - P ( A )
\end{aligned}
$$

---
### conditional probability
- likelihood event A will occur given event B already occur

---
### conditional probability formula
$$
\begin{aligned}
P ( A | B ) = \frac { P ( A \cap B ) } { P ( B ) }
\end{aligned}
$$

---
### independent event
- event B outcome not dependent upon event A outcome

---
### independent multiplication rule
- likelihood event A and event B will occur given event B independent event A

---
### independent multiplication formula
$$
\begin{aligned}
P ( A \cap B ) = P ( A ) \times P ( B )
\end{aligned}
$$

---
### dependent event
- event B outcome dependent upon event A outcome

---
### dependent multiplication rule
- likelihood event A and event B will occur given event B dependent event A

---
### dependent multiplication formula
$$
\begin{aligned}
P ( A \cap B ) = P ( A ) \times P ( B | A )
\end{aligned}
$$

---
### disjoint event
- two events cannot occur at same time

---
### disjoint addition rule
- likelihood event A or event B will occur given event B mutually exclusive event A

---
### disjoint addition formula
$$
\begin{aligned}
P ( A \cup B ) = P ( A ) + P ( B )
\end{aligned}
$$

---
### joint event
- two events can occur at same time

---
### joint addition rule
- likelihood event A or event B will occur given event B mutually inclusive event A

---
### joint addition formula
$$
\begin{aligned}
P ( A \cup B ) = P ( A ) + P ( B ) - P ( A \cap B )
\end{aligned}
$$

---
### multiplication rule
- independent or dependent

---
### addition rule
- disjoint or joint

---
### bayes theorem
- likelihood event will occur based on prior evidence

---
### bayes formula
$$
\begin{aligned}
P ( B | A ) = \frac { P ( A | B ) \times P ( B ) } { P ( A ) }
\end{aligned}
$$

---
