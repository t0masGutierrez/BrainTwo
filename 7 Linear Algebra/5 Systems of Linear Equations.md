### linear equation
- equation involving 1 or more variables with degree 1

---
### linear equation formula
$$
\begin{aligned}
\sum _ { i = 1 } ^ { n } a _ { i } x _ { i } = b \\
a = \text { coefficient } \\
x = \text { variable } \\
b = \text { constant }
\end{aligned}
$$

---
### system of linear equations
- collection of $m$ linear equations, each with linear combination of the same $n$ variables

---
### system of linear equations formula
$$
\begin{aligned}
\begin { a r r a y } { l }
a _ { 11 } x _ { 1 } + a _ { 12 } x _ { 2 } + \cdots + a _ { 1 n } x _ { n } = b _ { 1 } \\
a _ { 21 } x _ { 1 } + a _ { 22 } x _ { 2 } + \cdots + a _ { 2 n } x _ { n } = b _ { 2 } \\
\quad \vdots \quad \qquad \vdots \quad \qquad \ddots \qquad \vdots \qquad \vdots \\
a _ { m 1 } x _ { 1 } + a _ { m 2 } x _ { 2 } + \cdots + a _ { m n } x _ { n } = b _ { m }
\end { a r r a y } \\
a = \text { coefficient } \\
x = \text { variable } \\
b = \text { constant }
\end{aligned}
$$

---
### particular solution of system of linear equations
- $n$-tuple of solutions that satisfy every linear equation of the system

---
### particular solution of system of linear equations formula
$$
\begin{aligned}
y = ( y _ { 1 } , \dots , y _ { n } ) \iff \forall j \in \set { 1 , \dots , m } : \sum _ { i = 1 } ^ { n } a _ { j i } y _ { i } = b _ { j } \\
m = \text { number of linear equations } \\
n = \text { number of variables } \\
a = \text { coefficient } \\
y = \text { solution } \\
b = \text { constant }
\end{aligned}
$$

---
### complete solution of system of linear equations
- set of all $n$-tuple of solutions that satisfy every linear equation of the system

---
### complete solution of system of linear equations formula
$$
\begin{aligned}
Y = \{ ( y _ { 1 } , \dots , y _ { n } ) \in \mathbb R ^ { n } \mid \forall j \in \set { 1 , \dots , m } : \sum _ { i = 1 } ^ { n } a _ { j i } y _ { i } = b _ { j } \} \\
Y = \text { complete solution set } \\
m = \text { number of linear equations } \\
n = \text { number of variables } \\
a = \text { coefficient } \\
y = \text { solution } \\
b = \text { constant }
\end{aligned}
$$

---
### coefficient matrix
- two dimensional array of coefficients

---
### coefficient matrix formula
$$
\begin{aligned}
A = \begin { b m a t r i x }
a _ { 11 } & a _ { 12 } & \cdots & a _ { 1 n } \\
a _ { 21 } & a _ { 22 } & \cdots & a _ { 2 n } \\
\vdots & \vdots & \ddots & \vdots \\
a _ { m 1 } & a _ { m 2 } & \cdots & a _ { m n } \\
\end { b m a t r i x } \\
| A | = m \times n \\
a = \text { coefficient } \\
m = \text { number of rows } \\
n = \text { number of columns }
\end{aligned}
$$

---
### variable matrix 
- 1 dimensional array of variables

---
### variable matrix formula
$$
\begin{aligned}
X = \begin { b m a t r i x }
x _ { 1 } \\
x _ { 2 } \\
\vdots \\
x _ { n }
\end { b m a t r i x } \\
| X | = n \times 1 \\
x = \text { variable }
\end{aligned}
$$

---
### constant matrix
- 1 dimensional array of constants

---
### constant matrix formula
$$
\begin{aligned}
B = \begin { b m a t r i x }
b _ { 1 } \\
b _ { 2 } \\
\vdots \\
b _ { m }
\end { b m a t r i x } \\
| B | = m \times 1 \\
b = \text { constant }
\end{aligned}
$$

---
### system of linear equations
- collection of $m$ linear equations, each with linear combination of the same $n$ variables

---
### system of linear equations formula
$$
\begin{aligned}
A X = B \\
\begin{bmatrix}
a _ { 11 } & a _ { 12 } & \cdots & a _ { 1 n } \\
a _ { 21 } & a _ { 22 } & \cdots & a _ { 2 n } \\
\vdots & \vdots & \ddots & \vdots \\
a _ { m 1 } & a _ { m 2 } & \cdots & a _ { m n } \\
\end { b m a t r i x } \begin { b m a t r i x }
x _ { 1 } \\
x _ { 2 } \\
\vdots \\
x _ { n }
\end { b m a t r i x } = \begin { b m a t r i x }
b _ { 1 } \\
b _ { 2 } \\
\vdots \\
b _ { m }
\end { b m a t r i x } \\
A = \text { coefficient matrix } \\
X = \text { variable matrix } \\
B = \text { constant matrix }
\end{aligned}
$$

---
### augmented matrix
- coefficient matrix with appended constant matrix

---
### augmented matrix formula
$$
\begin{aligned}
A \mid B = \left [ \begin { a r r a y } { c c c c | c }
a _ { 11 } & a _ { 12 } & \cdots & a _ { 1 n } & b _ { 1 } \\
a _ { 21 } & a _ { 22 } & \cdots & a _ { 2 n } & b _ { 2 } \\
\vdots & \vdots & \ddots & \vdots & \vdots \\
a _ { m 1 } & a _ { m 2 } & \cdots & a _ { m n } & b _ { m }
\end { a r r a y } \right ]
\end{aligned}
$$

---
### simultaneous matrix
- combine augmented matrices with equal coefficient matrices but different constant matrices 

---
### simultaneous matrix formula
$$
\begin{aligned}
A \mid B \mid B ' = \left [ \begin { a r r a y } { c c c c | c | c }
a _ { 11 } & a _ { 12 } & \cdots & a _ { 1 n } & b _ { 1 } & b _ { 1 } ' \\
a _ { 21 } & a _ { 22 } & \cdots & a _ { 2 n } & b _ { 2 } & b _ { 2 } ' \\
\vdots & \vdots & \ddots & \vdots & \vdots & \vdots \\
a _ { m 1 } & a _ { m 2 } & \cdots & a _ { m n } & b _ { m } & b _ { m } '
\end { a r r a y } \right ]
\end{aligned}
$$

---
### number of solutions
- single solution
- infinite solutions
- zero solutions

---
### single solution
- intersecting lines

---
### infinite solutions
- equal lines

---
### zero solutions
- parallel lines

---
### consistent system
- nonzero number of solutions

---
### inconsistent system
- zero number of solutions

---
### type I row operation
- row scaling

---
### type I row operation formula
$$
\begin{aligned}
\langle i \rangle \implies c \langle i \rangle \\
i = \text { row index } \\
c = \text { scalar }
\end{aligned}
$$

---
### type II row operation
- row replacement

---
### type II row operation formula
$$
\begin{aligned}
\langle i \rangle \implies \langle i \rangle + c \langle j \rangle \\
i , j = \text { row index } \\
c = \text { scalar }
\end{aligned}
$$

---
### type III row operation
- row swapping

---
### type III row operation formula
$$
\begin{aligned}
\langle i \rangle \iff \langle j \rangle \\
i , j = \text { row index }
\end{aligned}
$$

---
### pivot entry
- special entry equal 1

---
### target entry
- special entry equal 0

---
### pivot column
- column with nonzero pivot entries

---
### nonpivot column
- column with zero pivot entries

---
### independent variable
- variable of nonpivot column equal arbitrary real number

---
### dependent variable
- variable of pivot column equal solution of system of linear equations

---
### row echelon form
- staircase pattern of pivot entries where all entries below pivot entry equal zero

---
### gaussian elimination
- form the augmented matrix of the system
- perform type I row operation on the 1st entry of 1st row such that its 1
- perform type II row operation on all entries below the pivot entry such that its 0
- if zero pivot entry then perform type III row operation with lower row, if all zeros below zero pivot entry then skip column
- final form of the system equal row echelon form
- back substitute for the particular solution of system of linear equations

---
### row operation property
- associative
- multiple associative

---
### row operation property formula
$$
\begin{aligned}
R ( A B ) = ( R ( A ) ) B \\
R _ { n } ( \dots ( R _ { 2 } ( R _ { 1 } ( A B ) ) ) \dots ) = ( R _ { n } ( \dots ( R _ { 2 } ( R _ { 1 } ( A ) ) ) \dots ) ) B \\
\end{aligned}
$$

---
