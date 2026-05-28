### sequence
- ordered collection of objects
![[11 Discrete Mathematics/Images/sequence.png]]

---
### sequence formula
$$
\begin{aligned}
a_{n} = a_{1}, a_{2}, ... a_{n}
\end{aligned}
$$

---
### nth term of geometric sequence
- term multiplication with common ratio

---
### nth term of geometric sequence formula
$$
\begin{aligned}
a_{n} = a_1r^{n - 1} \\
a_{1} = \text{1st term} \\
r = \text{common ratio} \\
n = \text{index}
\end{aligned}
$$

---
### nth term of arithmetic sequence
- term addition with common difference

---
### nth term of arithmetic sequence formula
$$
\begin{aligned}
a_{n} = a_{1} + (n - 1)d \\
a_{1} = \text{1st term} \\
d = \text{common difference} \\
n = \text{index}
\end{aligned}
$$

---
### recurrence relation
- sequence as function of preceding term(s)

---
### recurrence relation formula
$$
\begin{aligned}
a_{n} = a_{n - 1}, a_{n - 2}, ... a_{n - k} \\
k = \text{number of preceding terms}
\end{aligned}
$$

---
### fibonacci sequence
- sequence of terms starting with 0 and 1 where each subsequent term equal sum of the two preceding terms

---
### fibonacci sequence formula
$$
\begin{aligned}
f_{n} = f_{n - 1} + f_{n - 2} + ... + f_{n} \\
f_{0} = 0 \\
f_{1} = 1 \\
2 \le n \le \infty
\end{aligned}
$$

---
### forward substitution
- start from initial conditions and substitute forward until *nth* term of sequence

---
### backward substitution
- start from *nth* term of sequence and substitute backward until initial conditions

---
### summation
- sum of terms
![[11 Discrete Mathematics/Images/summation.png]]

---
### summation formula
$$
\begin{aligned}
\sum_{k = 1}^n a_{k} = a_{1} + a_{2} + ... + a_{n} \\
k = \text{index} \\
n = \text{number of terms} \\
\sum = \text{summation} \\
a_{k} = \text{kth term}
\end{aligned}
$$

---
### change of summation index
- rewrite summation so index fit common summation formulae

---
### change of summation index formula
$$
\begin{aligned}
\sum_{k = m}^n = \sum_{k = 1}^n - \sum_{k = 1}^{m - 1}
\end{aligned}
$$

---
### arithmetic series
- sum of arithmetic sequence

---
### arithmetic series formula
$$
\begin{aligned}
S_{n} = \frac{n(a_{1} + a_{n})}{2} \\
a_{1} = \text{1st term} \\
a_{n} = \text{nth term}
\end{aligned}
$$

---
### finite geometric series
- sum of finite geometric sequence

---
### finite geometric series formula
$$
\begin{aligned}
S_{n} = \frac{a_{1}(1 - r^n)}{1 - r} \\
a_{1} = \text{1st term} \\
r = \text{common ratio}
\end{aligned}
$$

---
### infinite geometric series
- sum of infinite geometric sequence

---
### infinite geometric series formula
$$
\begin{aligned}
S = \frac{a_{1}}{1 - r} \\
a_{1} = \text{1st term} \\
r = \text{common ratio}
\end{aligned}
$$

---
