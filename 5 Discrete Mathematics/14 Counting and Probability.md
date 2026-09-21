### product rule
- if there exists $n_{1}$ ways to do the first task and for every way of doing the first task there exists $n_{2}$ ways to do the second task then $n_{1}\times n_{2}$ ways to do the procedure

---
### calculate product rule
- $n_{1}$ multiplication with $n_{2}$

---
### sum rule
- if there exists either $n_{1}$ ways or $n_{2}$ ways to do the task and none of the $n_{1}$ ways is the same as any of the $n_{2}$ ways then $n_{1}+n_{2}$ ways to do the task

---
### calculate sum rule
- $n_{1}$ addition with $n_{2}$

---
### subtraction rule
- if there exists either $n_{1}$ ways or $n_{2}$ ways to do the task then $n_{1}+n_{2}$ ways to do the task less the number of common ways

---
### calculate subtraction rule
- $n_{1}$ addition with $n_{2}$
- sum subtraction with the number of common ways

---
### principle of inclusion exclusion
- the number of union elements equal the sum of the number of elements of per set less the number of common elements

---
### formula of inclusion exclusion
$$
\begin{lgathered}
|A\cup B|=|A|+|B|-|A\cap B|
\end{lgathered}
$$

---
### quotient rule
- if there exists $n_{1}$ ways to do the task and for every outcome there exists $n_{2}$ unique ways to get that outcome then $n_{1}\div n_{2}$ number of unique outcomes

---
### calculate quotient rule
- $n_{1}$ division with $n_{2}$

---
### tree diagram
- diagram illustrate the total number of possible outcomes
![[5 Discrete Mathematics/Images/tree diagram.png]]

---
### pigeonhole principle
- if *a* pigeons put into *b* holes and $a>b$ then at least 1 hole must contain >1 pigeon
![[5 Discrete Mathematics/Images/pigeonhole principle.png]]

---
### pigeonhole formula
$$
\begin{lgathered}
k=\lceil\frac{a}{b}\rceil\\
a=\text{number of pigeons}\\
b=\text{number of pigeonholes}
\end{lgathered}
$$

---
### permutation
- number of ways to arrange objects with order

---
### permutation formula
$$
\begin{lgathered}
P(n,r)=\frac{n!}{(n-r)!}=n(n-1)(n-2)...(n-r+1)\\
n=\text{number of objects without replacement}\\
r=\text{number of arrangements}
\end{lgathered}
$$

---
### permutation formula
$$
\begin{lgathered}
P(n,r)=n^{r}\\
n=\text{number of objects with replacement}\\
r=\text{number of arrangements}
\end{lgathered}
$$

---
### combination
- number of ways to choose objects without order

---
### combination formula
$$
\begin{lgathered}
C(n,r)=\frac{n!}{r!(n-r)!}=\frac{n(n-1)(n-2)...(n-r+1)}{r!}\\
n=\text{number of objects without replacement}\\
r=\text{number of choices}
\end{lgathered}
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
\begin{lgathered}
P(A)=\frac{\text{number of favorable outcomes}}{\text{total number of possible outcomes}}
\end{lgathered}
$$

---
### complementary probability
- likelihood event will not occur

---
### complementary probability formula
$$
\begin{lgathered}
P(A')=1-P(A)
\end{lgathered}
$$

---
### conditional probability
- likelihood event A will occur given event B already occur

---
### conditional probability formula
$$
\begin{lgathered}
P(A|B)=\frac{P(A\cap B)}{P(B)}
\end{lgathered}
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
\begin{lgathered}
P(A\cap B)=P(A)\times P(B)
\end{lgathered}
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
\begin{lgathered}
P(A\cap B)=P(A)\times P(B|A)
\end{lgathered}
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
\begin{lgathered}
P(A\cup B)=P(A)+P(B)
\end{lgathered}
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
\begin{lgathered}
P(A\cup B)=P(A)+P(B)-P(A\cap B)
\end{lgathered}
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
\begin{lgathered}
P(B|A)=\frac{P(A|B)\times P(B)}{P(A)}
\end{lgathered}
$$

---
