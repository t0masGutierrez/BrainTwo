### sample space
- set of all possible outcomes

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
0 \le P ( A ) \le 1 \\
A \cap B = \emptyset \implies P ( A \cup B ) = P ( A ) + P ( B ) \\
P ( \Omega ) = 1
\end{aligned}
$$

---
### frequentist probability
- relative frequency

---
### frequentist probability formula
$$
\begin{aligned}
P ( A ) = \lim _ { n \to \infty } \frac { m } { n } \\
m = \text { number of events } \\
n = \text { number of trials }
\end{aligned}
$$

---
### classical probability
- equally likely outcomes

---
### classical probability formula
$$
\begin{aligned}
P ( A ) = \frac { \text { m } } { \text { n } } \\
m = \text { number of favorable outcomes } \\
n = \text { total number of outcomes }
\end{aligned}
$$

---
### complimentary probability
- likelihood event will not occur

---
### complimentary probability formula
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
- with replacement

---
### independent multiplication rule
- likelihood event A and event B will occur given event B independent event A

---
### independent multiplication formula
$$
\begin{aligned}
P ( A \cap B ) = P ( A ) P ( B )
\end{aligned}
$$

---
### dependent event
- event B outcome dependent upon event A outcome
- without replacement

---
### dependent multiplication rule
- likelihood event A and event B will occur given event B dependent event A

---
### dependent multiplication formula
$$
\begin{aligned}
P ( A \cap B ) = P ( A ) P ( B | A )
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
### tree diagram
- probability distribution of two or more dependent categorical variables
![[8 Statistics/Images/tree diagram.png]]

---
### venn diagram
- frequency distribution of two or more dependent categorical variables
![[8 Statistics/Images/venn diagram.png|350]]

---
### bayes theorem
- method of updating probability of hypothesis based on evidence

---
### bayes formula
$$
\begin{aligned}
P ( A | B ) = \frac { P ( A ) P ( B | A ) } { P ( B ) } \\
A = \text { hypothesis } \\
B = \text { condition }
\end{aligned}
$$

---
### law of total probability
- partition event into sum of possible cases

---
### law of total probability formula
$$
\begin{aligned}
P ( A ) = \sum _ { i = 1 } ^ { n } P ( A | B _ { i } ) P ( B _ { i } ) \\
A = \text { hypothesis } \\
B = \text { condition }
\end{aligned}
$$

---
### permutation
- number of ways to arrange objects with order

---
### permutation formula
$$
\begin{aligned}
_ { n } P _ { k } = \frac { n ! } { ( n - k ) ! } = k ! \begin { p m a t r i x } n \\ k \end { p m a t r i x } \\
n = \text { number of objects } \\
k = \text { number of arrangements }
\end{aligned}
$$

---
### combination
- number of ways to arrange objects without order

---
### combination formula
$$
\begin{aligned}
\begin { p m a t r i x } n \\ k \end { p m a t r i x } = \frac { n ! } { k ! ( n - k ) ! } \\
n = \text { number of objects } \\
k = \text { number of choices }
\end{aligned}
$$

---
