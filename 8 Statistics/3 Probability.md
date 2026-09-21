### sample space
- set of all possible outcomes of experiment

---
### sample space formula
$$
\begin{lgathered}
\Omega=\set{\omega_1,\omega_2,\dots,\omega_n}\\
\omega=\text{outcome}
\end{lgathered}
$$

---
### event
- subset of sample space

---
### event formula
$$
\begin{lgathered}
A\subset\Omega\\
A=\text{event}\\
\Omega=\text{sample space}
\end{lgathered}
$$

---
### probability
- likelihood event will occur

---
### probability formula
$$
\begin{lgathered}
P:2^\Omega\rightarrow[0,1]\\
\Omega=\text{sample space}
\end{lgathered}
$$

---
### classical probability
- probability based on equally likely outcomes

---
### classical probability formula
$$
\begin{lgathered}
P(A)=\frac{\text{number of favorable outcomes}}{\text{total number of outcomes}}
\end{lgathered}
$$

---
### empirical probability
- probability based on experimental data

---
### empirical probability formula
$$
\begin{lgathered}
P(A)=\frac{\text{number of events occurences}}{\text{number of trials}}
\end{lgathered}
$$

---
### subjective probability
- probability based on personal judgement

---
### subjective probability formula
$$
\begin{lgathered}
P(A|I)\\
I=\text{information}
\end{lgathered}
$$

---
### axiomatic probability
- probability based on mathematical rules

---
### axiomatic probability formula
$$
\begin{lgathered}
0\le P(A)\le1\\
A\cap B=\emptyset\implies P(A\cup B)=P(A)+P(B)\\
P(\Omega)=1
\end{lgathered}
$$

---
### complimentary probability
- likelihood event will not occur

---
### complimentary probability formula
$$
\begin{lgathered}
P(A^c)=1-P(A)
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
- event B outcome independent event A outcome
- with replacement

---
### independent multiplication rule
- likelihood event A and event B will occur given event B independent event A

---
### independent multiplication formula
$$
\begin{lgathered}
P(A\cap B)=P(A)P(B)
\end{lgathered}
$$

---
### dependent event
- event B outcome dependent event A outcome
- without replacement

---
### dependent multiplication rule
- likelihood event A and event B will occur given event B dependent event A

---
### dependent multiplication rule formula
$$
\begin{lgathered}
P(A\cap B)=P(A)P(B|A)
\end{lgathered}
$$

---
### disjoint event
- two events cannot occur at same time

---
### disjoint addition rule
- likelihood event A or event B will occur given event B mutually exclusive event A

---
### disjoint addition rule formula
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
### joint addition rule formula
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
### venn diagram
- frequency distribution of two or more events
![[8 Statistics/Images/venn diagram.png|350]]

---
### bayes rule
- method of updating probability of hypothesis based on evidence

---
### bayes rule formula
$$
\begin{lgathered}
P(A|B)=\frac{P(A)P(B|A)}{P(B)}\\
A=\text{hypothesis}\\
B=\text{evidence}
\end{lgathered}
$$

---
### law of total probability
- partition event into sum of possible cases

---
### law of total probability formula
$$
\begin{lgathered}
P(A)=\sum_{i=1}^{n}P(A|B_{i})P(B_{i})\\
A,B=\text{event}
\end{lgathered}
$$

---
### permutation
- number of ways to arrange objects with order

---
### permutation formula
$$
\begin{lgathered}
_{n}P_{k}=\frac{n!}{(n-k)!}=k!\begin{pmatrix}n\\k\end{pmatrix}\\
n=\text{number of objects}\\
k=\text{number of arrangements}
\end{lgathered}
$$

---
### combination
- number of ways to arrange objects without order

---
### combination formula
$$
\begin{lgathered}
\begin{pmatrix}n\\k\end{pmatrix}=\frac{n!}{k!(n-k)!}\\
n=\text{number of objects}\\
k=\text{number of choices}
\end{lgathered}
$$

---
