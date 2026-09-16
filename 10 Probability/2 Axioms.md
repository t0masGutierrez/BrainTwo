### summation
- constant
- linearity
- partition index
- shift index
- reverse index
- double sum
- double product

---
### summation formula
$$
\begin{aligned}
&\sum_{i=m}^nc=c(n-m+1)\\
&\sum_{i=m}^n(\alpha a_i\pm\beta b_i)=\alpha\sum_{i=m}^na_i\pm\beta\sum_{i=m}^nb_i\\
&\sum_{i=m}^na_i=\sum_{i=m}^ka_i\pm\sum_{i=k+1}^na_i\\
&\sum_{i=m}^na_i=\sum_{i=m}^ka_i\pm\sum_{j=m+r}^{n+r}a_{j-r}\\
&\sum_{i=m}^na_i=c\sum_{i=m}^na_{m+n-i}\\
&\sum_{i=1}^m\sum_{j=1}^na_{\text{ij}}=\sum_{j=1}^n\sum_{i=1}^ma_{\text{ij}}\\
&(\sum_{i=1}^ma_i)(\sum_{j=1}^nb_j)=\sum_{i=1}^m\sum_{j=1}^na_{i}b_j\\
\end{aligned}
$$

---
### series
- one
- linear
- quadratic
- cubic
- geometric
- telescopic

---
### series formula
$$
\begin{aligned}
&\sum_{i=1}^n1=n\\
&\sum_{i=1}^ni=\frac{n(n+1)}{2}\\
&\sum_{i=1}^ni^2=\frac{n(n+1)(2n+1)}{6}\\
&\sum_{i=1}^ni^3=\frac{n^2(n+1)^2}{4}\\
&\sum_{i=m}^nr^i=\frac{r^m-r^{n+1}}{1-r}\\
&\sum_{i=m}^n(a_i-a_{i+1})=a_m-a_{n+1}\\
\end{aligned}
$$

---
### setting
- commutative
- associative
- distributive
- identity
- domination
- idempotent
- complement
- double complement
- universal complement
- null complement
- absorption
- de morgans
- subtraction

---
### setting formula
$$
\begin{aligned}
&A\cup B=B\cup A\\
&A\cap B=B\cap A\\
&(A\cup B)\cup C=A\cup(B\cup C)\\
&(A\cap B)\cap C=A\cap(B\cap C)\\
&A\cap(B\cup C)=(A\cap B)\cup(A\cap C)\\
&A\cup(B\cap C)=(A\cup B)\cap(A\cup C)\\
&A\cup\emptyset=A\\
&A\cap U=A\\
&A\cup U=U\\
&A\cap\emptyset=\emptyset\\
&A\cup A=A\\
&A\cap A=A\\
&A\cup A^c=U\\
&A\cap A^c=\emptyset\\
&(A^c)^c=A\\
&U^c=\emptyset\\
&\emptyset^c=U\\
&A\cup(A\cap B)=A\\
&A\cap(A\cup B)=A\\
&(A\cup B)^c=A^c\cap B^c\\
&(A\cap B)^c=A^c\cup B^c\\
&A\setminus B=A\cap B^c\\
&A\setminus A=\emptyset\\
&A\setminus\emptyset=A\\
&\emptyset\setminus A=\emptyset\\
&A\setminus U=\emptyset\\
&U\setminus A=A^c\\
&A\setminus(B\cup C)=(A\setminus B)\cap(A\setminus C)\\
&A\setminus(B\cap C)=(A\setminus B)\cup(A\setminus C)
\end{aligned}
$$

---
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
&0\le P(A)\le1\\
&P(\Omega)=1
\end{aligned}
$$

---
### frequentist probability
- relative frequency

---
### frequentist probability formula
$$
\begin{aligned}
&P(A)=\lim_{n\to\infty}\frac{m}{n}\\
&m=\text{number of successes}\\
&n=\text{total number of trials}
\end{aligned}
$$

---
### classical probability
- equally likely outcomes

---
### classical probability formula
$$
\begin{aligned}
&P(A)=\frac{m}{n}\\
&m=\text{number of favorable outcomes}\\
&n=\text{total number of outcomes}
\end{aligned}
$$

---
### complimentary probability
- likelihood event will not occur

---
### complimentary probability formula
$$
\begin{aligned}
&P(A')=1-P(A)
\end{aligned}
$$

---
### conditional probability
- likelihood event A will occur given event B already occur

---
### conditional probability formula
$$
\begin{aligned}
&P(A|B)=\frac{P(A\cap B)}{P(B)}
\end{aligned}
$$

---
### independent event
- cannot influence the outcome

---
### independent multiplication rule
- likelihood event A and event B will occur given event B independent event A

---
### independent multiplication formula
$$
\begin{aligned}
&P(A\cap B)=P(A)P(B)
\end{aligned}
$$

---
### dependent event
- can influence the outcome

---
### dependent multiplication rule
- likelihood event A and event B will occur given event B dependent event A

---
### dependent multiplication formula
$$
\begin{aligned}
&P(A\cap B)=P(A)P(B|A)
\end{aligned}
$$

---
### disjoint event
- cannot occur at the same time

---
### disjoint addition rule
- likelihood event A or event B will occur given event B mutually exclusive event A

---
### disjoint addition formula
$$
\begin{aligned}
&P(A\cup B)=P(A)+P(B)
\end{aligned}
$$

---
### joint event
- can occur at the same time

---
### joint addition rule
- likelihood event A or event B will occur given event B mutually inclusive event A

---
### joint addition formula
$$
\begin{aligned}
&P(A\cup B)=P(A)+P(B)-P(A\cap B)
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
- method of updating probability of hypothesis based on evidence

---
### bayes theorem formula
$$
\begin{aligned}
&P(A|B)=\frac{P(A)P(B|A)}{P(B)}\\
&A=\text{hypothesis}\\
&B=\text{condition}
\end{aligned}
$$

---
### law of total probability
- partition event into sum of possible cases

---
### law of total probability formula
$$
\begin{aligned}
&P(A)=\sum_{i=1}^{n}P(A|B_{i})P(B_{i})\\
&A=\text{hypothesis}\\
&B=\text{condition}
\end{aligned}
$$

---
