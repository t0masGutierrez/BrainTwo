### joint random variable
- function of sample space outcome equal real vector

---
### joint random variable formula
$$
\begin{aligned}
( X , Y ) : \Omega \rightarrow \mathbb R ^ { 2 } \\
X ( \omega ) , Y ( \omega ) = ( x , y ) \\
X , Y = \text {random variable} \\
\Omega = \text {sample space} \\
x , y = \text {real number} \\
\omega = \text {outcome}
\end{aligned}
$$

---
### joint cumulative distribution function
- cumulative probability as function of joint random variable

---
### joint cumulative distribution function formula
$$
\begin{aligned}
F _ { X , Y } ( x , y ) = P ( X \le x , Y \le y ) \\
1 - F _ { X } ( x ) - F _ { Y } ( y ) + F _ { X , Y } ( x , y ) = P ( X > x , Y > y ) \\
F _ { X } ( x ) - F _ { X , Y } = P ( X \le x , Y > y ) \\
F _ { Y } ( x ) - F _ { X , Y } = P ( X > x , Y \le y ) \\
\end{aligned}
$$

---
### joint probability mass function
- probability as function of joint discrete random variable

---
### joint probability mass function formula
$$
\begin{aligned}
P ( a \le X \le b , c \le Y \le d ) = \sum _ { a \le x _ { i } \le b } \sum _ { c \le y _ { j } \le d } P ( X = x _ { i } , Y = y _ { j } ) \\
P ( X \le x , Y \le y ) = \sum _ { x _ { i } \le x } \sum _ { y _ { j } \le y } P ( X = x _ { i } , Y = y _ { j } ) \\
P ( X , Y ) = \sum _ { i } \sum _ { j } P ( X = x _ { i } , Y = y _ { j } ) = 1 \\
P ( X = x , Y = y ) = P ( X \le x , Y \le y ) - \\
P ( X \le x - 1 , Y \le y ) - \\
P ( X \le x , Y \le y - 1 ) + \\
P ( X \le x - 1 , Y \le y - 1 )
\end{aligned}
$$

---
### joint probability density function
- probability as function of joint continuous random variable

---
### joint probability density function formula
$$
\begin{aligned}
P ( X = x , Y = y ) = 0 \\
P ( X \in A , Y \in B ) = \int _ { A } \int _ { B } f _ { X , Y } ( x , y ) d y d x = 1 \\
P ( X \le a , Y \le b ) = \int _ { - \infty } ^ { a } \int _ { - \infty } ^ { b } f _ { X , Y } ( x , y ) d y d x = F _ { X , Y } ( a , b ) \\
P ( a \le X \le b , c \le Y \le d ) = \int _ { a } ^ { b } \int _ { c } ^ { d } f _ { X , Y } ( x , y ) d y d x = F _ { X , Y } ( b , d ) - \\
F _ { X , Y } ( a , d ) - \\
F _ { X , Y } ( b , c ) + \\
F _ { X , Y } ( a , c )
\end{aligned}
$$

---
### marginal probability mass function
- probability as function of single discrete random variable

---
### marginal probability mass function formula
$$
\begin{aligned}
P ( X = x ) = \sum _ { y } P ( X = x , Y = y ) \\
P ( Y = y ) = \sum _ { x } P ( X = x , Y = y ) \\
X , Y = \text {random variable} \\
x , y = \text {real number}
\end{aligned}
$$

---
### marginal probability density function
- probability as function of single continuous random variable

---
### marginal probability density function formula
$$
\begin{aligned}
f _ { X } ( x ) = \int _ { - \infty } ^ { \infty } f _ { X , Y } ( x , y ) d y \\
f _ { Y } ( y ) = \int _ { - \infty } ^ { \infty } f _ { X , Y } ( x , y ) d x \\
X , Y = \text {random variable} \\
x , y = \text {real number}
\end{aligned}
$$

---
### indicator random variable
- function of sample space outcome equal binary number

---
### indicator random variable formula
$$
\begin{aligned}
I = \begin{cases} 1 , \quad A \\ 0 , \quad A ^ { c } \end{cases} \\
A = \text {event}
\end{aligned}
$$

---
### indicator expectation
- mean of indicator random variable

---
### indicator expectation formula
$$
\begin{aligned}
E [ X ] = E [ \sum _ { i = 1 } ^ { n } I _ { i } ] = \sum _ { i = 1 } ^ { n } P ( A _ { i } ) \\
X , I = \text {random variable} \\
A = \text {event}
\end{aligned}
$$

---
### indicator variance
- spread of indicator random variable around mean

---
### indicator variance formula
$$
\begin{aligned}
\text {Var} ( X ) = \text {Var} ( \sum _ { i = 1 } ^ { n } I _ { i } ) = \sum _ { i = 1 } ^ { n } P ( A _ { i } ) Q ( A _ { i } ) \\
Q ( A ) = 1 - P ( A ) \\
X , I = \text {random variable} \\
A = \text {event}
\end{aligned}
$$

---
### convolution
- probability as function of sum of independent random variable

---
### convolution formula
$$
\begin{aligned}
P ( X + Y = z ) = \sum _ { x } P ( Y = z - x ) P ( X = x ) \\
P ( X + Y = z ) = \sum _ { y } P ( X = z - y ) P ( Y = y ) \\
f _ { X + Y } ( z ) = \int _ { - \infty } ^ { \infty } f _ { Y } ( z - x ) f _ { X } ( x ) d x \\
f _ { X + Y } ( z ) = \int _ { - \infty } ^ { \infty } f _ { X } ( z - y ) f _ { Y } ( y ) d y
\end{aligned}
$$

---
### independent random variable
- 1st random variable cannot influence the outcome 2nd random variable

---
### independent random variable formula
$$
\begin{aligned}
P ( X = x \mid Y = y ) = P ( X = x ) \\
P ( Y = y \mid X = x ) = P ( Y = y ) \\
X , Y = \text {random variable} \\
x , y = \text {real number}
\end{aligned}
$$

---
### dependent random variable
- 1st random variable can influence the outcome 2nd random variable

---
### dependent random variable formula
$$
\begin{aligned}
P ( X = x , Y = y ) \ne P ( X = x ) P ( Y = y ) \\
f _ { X , Y } ( x , y ) \ne f _ { X } ( x ) f _ { Y } ( y ) \\
X , Y = \text {random variable} \\
x , y = \text {real number}
\end{aligned}
$$

---
### conditional probability 
- likelihood random variable X will occur given random variable Y already occur

---
### conditional probability formula
$$
\begin{aligned}
P ( X = x \mid Y = y ) = \frac { P ( X = x , Y = y ) } { P ( Y = y ) } \\
f _ { X \mid Y } ( x \mid y ) = \frac { f _ { X , Y } ( x , y ) } { f _ { Y } ( y ) }
\end{aligned}
$$

---
### joint expectation
- mean of joint random variable

---
### joint expectation formula
$$
\begin{aligned}
E [ g ( X , Y ) ] = \sum _ { x } \sum _ { y } g ( x , y ) P ( X = x , Y = y ) \\
E [ g ( X , Y ) ] = \int _ { - \infty } ^ { \infty } \int _ { - \infty } ^ { \infty } g ( x , y ) f ( x , y ) d y d x \\
X , Y = \text {random variable} \\
x , y = \text {real number}
\end{aligned}
$$

---
### expectation multiplication property
- expectation of independent product equal product of expectation

---
### expectation addition property formula
$$
\begin{aligned}
P ( X \in A , Y \in B ) = P ( X \in A ) P ( Y \in B ) \implies E [ X Y ] = E [ X ] E [ Y ] \\
X , Y = \text {random variable} \\
\end{aligned}
$$

---
### joint variance
- spread of joint random variable around mean

---
### joint variance formula
$$
\begin{aligned}
\text {Var} ( X , Y ) = \begin{bmatrix} \text {Var} ( X ) & \text {Cov} ( X , Y ) \\
\text {Cov} ( Y , X ) & \text {Var} ( Y ) \end{bmatrix} \\
X , Y = \text {random variable}
\end{aligned}
$$

---
### variance addition property
- spread of random variable equal sum of joint variance and covariance

---
### variance addition property formula
$$
\begin{aligned}
\text {Var} ( X + Y ) = \text {Var} ( X ) + \text {Var} ( Y ) + 2 \text {Cov} ( X , Y ) \\
X , Y = \text {random variable}
\end{aligned}
$$

---
### conditional expectation
- mean of joint conditional random variable

---
### conditional expectation formula
$$
\begin{aligned}
E [ X | Y = y ] = \sum _ { x } x P ( X = x | Y = y ) \\
E [ X | Y = y ] = \int _ { - \infty } ^ { \infty } x f _ { X | Y } ( x , y ) d x \\
X , Y = \text {random variable}
\end{aligned}
$$

---
### conditional expectation property
- expectation equal expectation of conditional expectation

---
### conditional expectation property formula
$$
\begin{aligned}
E [ X ] = E ( E [ X \mid Y ] ) \\
X , Y = \text {random variable}
\end{aligned}
$$

---
### covariance
- joint spread of two random variable around mean

---
### covariance formula
$$
\begin{aligned}
\text {Cov} ( X , Y ) = E [ ( X - E [ X ] ) ( Y - E [ Y ] ) ] = E [ X Y ] - E [ X ] E [ Y ] \\

\end{aligned}
$$

---
### covariance property
- symmetry
- identity
- linearity
- independence

---
### covariance property formula
$$
\begin{aligned}
\text {Cov} ( X , Y ) = \text {Cov} ( Y , X ) \\
\text {Cov} ( X , X ) = \text {Cov} ( X ) \\
\text {Cov} ( a X + b Y , Z + c ) = a \text {Cov} ( X , Z ) + b \text {Cov} ( Y , Z ) \\
P ( X \in A , Y \in B ) = P ( X \in A ) P ( Y \in B ) \implies \text {Cov} ( X , Y ) = 0
\end{aligned}
$$

---
### iid
- independent and identically distributed

---
### iid formula
$$  
\begin{aligned}  
\forall i , j \in ( 1 , \dots , m ) : P ( X _ { i } \in A , X _ { j } \in B ) = P ( X _ { i } \in A ) P ( X _ { j } \in B ) \\
\forall i \in ( 1 , \dots , m ) : X _ { i } \sim N ( \mu , \sigma ^ { 2 } ) \\
X , Y = \text {random variable} \\
m = \text {number of random variables} \\
N = \text {probability distribution}
\end{aligned}  
$$

---
### iid expectation
- mean of iid random variable

---
### iid expectation formula
$$
\begin{aligned}
E [ \sum _ { i = 1 } ^ { n } X _ { i } ] = n \mu \\
X = \text {iid random variable} \\
n = \text {sample size} \\
\mu = \text {mean} \\
\end{aligned}
$$

---
### iid variance
- spread of iid random variable around mean

---
### iid variance formula
$$
\begin{aligned}
\text {Var} ( \sum _ { i = 1 } ^ { n } X _ { i } ) = n \sigma ^ { 2 } \\
X = \text {iid random variable} \\
n = \text {sample size} \\
\sigma ^ { 2 } = \text {variance} \\
\end{aligned}
$$

---
