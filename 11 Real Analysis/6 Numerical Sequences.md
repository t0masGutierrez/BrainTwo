### sequence
- infinite list of ordered terms

---
### sequence formula
$$
\begin{aligned}
\{ a _ { n } \} _ { n = 1 } ^ { \infty } = a : \mathbb N \rightarrow S \\
n \mapsto a _ { n } \\
a _ { n } = \text {term}
\end{aligned}
$$

---
### convergent
- there exists limit of sequence

---
### convergent formula
$$
\begin{aligned}
\exists a \in X : \lim _ { n \rightarrow \infty } a _ { n } = a \iff \forall \epsilon > 0 , \exists N \in \mathbb N , \forall n \ge N : d ( a _ { n } , a ) < \epsilon \\
\set { a _ { n } } = \text {convergent sequence} \\
a = \text {sequential limit}
\end{aligned}
$$

---
### divergent
- there exists no limit of sequence

---
### divergent formula
$$
\begin{aligned}
\not \exists a \in X : \lim _ { n \rightarrow \infty } a _ { n } = a \iff \exists \epsilon > 0 , \forall N \in \mathbb N , \exists n \ge N : d ( a _ { n } , a ) \ge \epsilon \\
\set { a _ { n } } = \text {divergent sequence} \\
a = \text {sequential limit}
\end{aligned}
$$

---
### subsequence
- infinite sublist of ordered terms

---
### subsequence formula
$$
\begin{aligned}
\{ a _ { n _ { k } } \} _ { k = 1 } ^ { \infty } = a \circ n : \mathbb N \rightarrow S \\
k \mapsto a _ { n _ { k } } \\
\forall k \in \mathbb N : n _ { k } < n _ { k + 1 } \\
\{ a _ { n _ { k } } \} = \text {subsequence} \\
a _ { n _ { k } } = \text {term}
\end{aligned}
$$

---
### cauchy
- all terms of cauchy sequence are eventually close

---
### cauchy formula
$$
\begin{aligned}
\forall \epsilon > 0 , \exists N \in \mathbb N , \forall n , m \ge N : d ( a _ { n } , a _ { m } ) < \epsilon \\
\{ _ { c } a _ { n } \} = \text {cauchy sequence}
\end{aligned}
$$

---
### complete
- every cauchy sequence of complete metric space equal convergent sequence 

---
### complete formula
$$
\begin{aligned}
\forall \{ _ { c } a _ { n } \} \subset X , \exists a \in X : \lim _ { n \rightarrow \infty } { } _ { c } a _ { n } = a \\
\{ _ { c } a _ { n } \} = \text {cauchy sequence} \\
X = \text {complete metric space} \\
a = \text {sequential limit} \\
\end{aligned}
$$

---
### limit superior
- supremum of derived set of subsequence

---
### limit superior formula
$$
\begin{aligned}
S = \{ a \in \mathbb R | \lim _ { k \rightarrow \infty } a _ { n _ { k } } = a \} \implies \lim _ { n \rightarrow \infty } \sup a _ { n } = \sup S \\
\lim _ { n \rightarrow \infty } \sup a _ { n } = \lim _ { n \rightarrow \infty } \sup _ { k \ge n } x _ { k } \\
a = \text {sequential limit} \\
\set { a _ { n _ { k } } } = \text {subsequence} \\
S = \text {derived set} \\
\sup S = \text {limit superior}
\end{aligned}
$$

---
### limit inferior
- infimum of derived set of subsequence

---
### limit inferior formula
$$
\begin{aligned}
S = \{ a \in \mathbb R | \lim _ { k \rightarrow \infty } a _ { n _ { k } } = a \} \implies \lim _ { n \rightarrow \infty } \inf a _ { n } = \inf S \\
\lim _ { n \rightarrow \infty } \inf a _ { n } = \lim _ { n \rightarrow \infty } \inf _ { k \ge n } x _ { k } \\
a = \text {sequential limit} \\
\set { a _ { n _ { k } } } = \text {subsequence} \\
S = \text {derived set} \\
\sup S = \text {limit inferior}
\end{aligned}
$$

---
### limit convergence property
- distance between $n$th term of convergent sequence and sequential limit approaches zero as number of terms approaches infinity

---
### limit convergence property formula
$$
\begin{aligned}
\lim _ { n \rightarrow \infty } a _ { n } = a \implies \lim _ { n \rightarrow \infty } d ( a _ { n } , a ) = 0 \\
\set { a _ { n } } = \text {convergent sequence} \\
a = \text {sequential limit}
\end{aligned}
$$

---
### algebra convergence property
- addition
- multiplication
- scalar multiplication
- scalar addition
- reciprocal

---
### algebra convergence property formula
$$
\begin{aligned}
( a _ { n } , b _ { n } \in \mathbb C ) \land ( \lim _ { n \rightarrow \infty } a _ { n } = a ) \land ( \lim _ { n \rightarrow \infty } b _ { n } = b ) \implies \lim _ { n \rightarrow \infty } ( a _ { n } + b _ { n } ) = a + b \\
( a _ { n } , b _ { n } \in \mathbb C ) \land ( \lim _ { n \rightarrow \infty } a _ { n } = a ) \land ( \lim _ { n \rightarrow \infty } b _ { n } = b ) \implies \lim _ { n \rightarrow \infty } ( a _ { n } \cdot b _ { n } ) = a \cdot b \\
( a _ { n } \in \mathbb C ) \land ( c \in \mathbb R ) \land ( \lim _ { n \rightarrow \infty } a _ { n } = a ) \implies \lim _ { n \rightarrow \infty } c a _ { n } = c \cdot a \\
( a _ { n } \in \mathbb C ) \land ( c \in \mathbb R ) \land ( \lim _ { n \rightarrow \infty } a _ { n } = a ) \implies \lim _ { n \rightarrow \infty } ( c + a _ { n } ) = c + a \\
( a _ { n } \in \mathbb C ) \land ( \lim _ { n \rightarrow \infty } a _ { n } = a ) \implies \lim _ { n \rightarrow \infty } \frac { 1 } { a _ { n } } = \frac { 1 } { a } \\
\end{aligned}
$$

---
### convergence property
- subsequence convergence
- neighborhood convergence
- unique convergence
- bounded convergence
- limit convergence

---
### convergence property formula
$$
\begin{aligned}
\lim _ { n \rightarrow \infty } a _ { n } = a \implies \forall \epsilon > 0 , \exists K \in \mathbb N , \forall n _ { k } \ge n _ { K } \ge N : d ( a _ { n _ { k } } , a ) < \epsilon \\
\lim _ { n \rightarrow \infty } a _ { n } = a \iff \forall \epsilon > 0 , \exists N \in \mathbb N , \forall n \ge N : a _ { n } \in N _ { \epsilon } ( a ) \\
( \lim _ { n \rightarrow \infty } a _ { n } = a ) \land ( \lim _ { n \rightarrow \infty } a _ { n } = a ' ) \implies a = a ' \\
\lim _ { n \rightarrow \infty } a _ { n } = a \implies \exists \epsilon > 0 : \{ a _ { n } \} \subset B _ { \epsilon } ( a ) \subset X \\
a \in S ' \implies \exists \{ a _ { n } \} \in S \subset X : \lim _ { n \rightarrow \infty } a _ { n } = a
\end{aligned}
$$

---
### cauchy property
- every convergent sequence of metric space equal cauchy sequence
- every cauchy sequence of compact set equal convergent sequence
- every cauchy sequence of k-dimensional real numbers equal convergent sequence

---
### cauchy property formula
$$
\begin{aligned}
\exists a \in X : \lim _ { n \rightarrow \infty } a _ { n } = a \implies \{ a _ { n } \} = \{ _ { c } a _ { n } \} \\
\forall \set { Y _ { i } } \subset X , \exists \{ Y _ { i _ { 1 } } , \dots Y _ { i _ { n } } \} \subset \{ Y _ { i } \} : S \subset \bigcup _ { k = 1 } ^ { n } Y _ { i _ { k } } \implies \forall \{ _ { c } a _ { n } \} \subset S , \exists a \in X : \lim _ { n \rightarrow \infty } { } _ { c } a _ { n } = a \\
\forall \{ _ { c } a _ { n } \} \subset \mathbb R ^ { k } , \exists a \in \mathbb R ^ { k } : \lim _ { n \rightarrow \infty } { } _ { c } a _ { n } = a \\
\end{aligned}
$$

---
### closed subsequence property
- derived set of subsequence equal closed set

---
### closed subsequence property formula
$$
\begin{aligned}
S = \{ a | \lim _ { k \rightarrow \infty } a _ { n _ { k } } = a \} \implies S ' \subset S \subset X \\
S = \text {closed set} \\
a = \text {sequential limit} \\
\set { a _ { n _ { k } } } = \text {subsequence} \\
S ' = \text {derived set} \\
X = \text {metric space}
\end{aligned}
$$

---
### limit exterior property
- membership
- eventual bound
- convergence

---
### limit exterior property formula
$$
\begin{aligned}
\sup S , \inf S \in S \\
a > \sup S \implies \exists N \in \mathbb N , \forall n \ge N : a _ { n } < a \\
a < \inf S \implies \exists N \in \mathbb N , \forall n \ge N : a _ { n } > a \\
\lim _ { n \rightarrow \infty } a _ { n } = a \iff \lim _ { n \rightarrow \infty } \sup a _ { n } = \lim _ { n \rightarrow \infty } \inf a _ { n } = a
\end{aligned}
$$

---
