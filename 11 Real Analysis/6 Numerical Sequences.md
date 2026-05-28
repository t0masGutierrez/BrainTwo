### sequence
- infinite list of ordered terms

---
### sequence formula
$$
\begin{aligned}
\{a_{n}\}_{n=1}^{\infty} = a: \mathbb N \rightarrow S \\
n \mapsto a_{n} \\
a_{n} = \text{term} 
\end{aligned}
$$

---
### convergent
- there exists limit of sequence

---
### convergent formula
$$
\begin{aligned}
\exists a \in X: \lim_{n \rightarrow \infty}a_{n} = a \iff \forall \epsilon > 0, \exists N \in \mathbb N, \forall n \ge N: d(a_{n}, a) < \epsilon \\
\set {a_{n}} = \text{convergent sequence} \\
a = \text{sequential limit} 
\end{aligned}
$$

---
### divergent
- there exists no limit of sequence

---
### divergent formula
$$
\begin{aligned}
\not\exists a \in X: \lim_{n \rightarrow \infty}a_{n} = a \iff \exists \epsilon > 0, \forall N \in \mathbb N, \exists n \ge N: d(a_{n}, a) \ge \epsilon \\
\set {a_{n}} = \text{divergent sequence} \\
a = \text{sequential limit}
\end{aligned}
$$

---
### subsequence
- infinite sublist of ordered terms

---
### subsequence formula
$$
\begin{aligned}
\{a_{n_{k}}\}_{k=1}^{\infty} = a \circ n: \mathbb N \rightarrow S \\
k \mapsto a_{n_{k}} \\
\forall k \in \mathbb N: n_{k} < n_{k+1}  \\
\{a_{n_{k}}\} = \text{subsequence} \\
a_{n_{k}} = \text{term} 
\end{aligned}
$$

---
### cauchy
- all terms of cauchy sequence are eventually close

---
### cauchy formula
$$
\begin{aligned}
\forall \epsilon > 0, \exists N \in \mathbb N, \forall n, m \ge N: d(a_{n}, a_{m}) < \epsilon \\
\{_{c}a_{n}\} = \text{cauchy sequence}
\end{aligned}
$$

---
### complete
- every cauchy sequence of complete metric space equal convergent sequence 

---
### complete formula
$$
\begin{aligned}
\forall \{_{c}a_{n}\} \subset X, \exists a \in X: \lim_{n \rightarrow \infty} {}_{c}a_{n} = a \\
\{_{c}a_{n}\} = \text{cauchy sequence} \\
X = \text{complete metric space} \\
a = \text{sequential limit} \\
\end{aligned}
$$

---
### limit superior
- supremum of derived set of subsequence

---
### limit superior formula
$$
\begin{aligned}
S = \{a \in \mathbb R|\lim_{k\rightarrow \infty} a_{n_{k}} = a\} \implies  \lim_{n\rightarrow \infty} \sup a_{n} = \sup S \\
\lim_{n\rightarrow \infty} \sup a_{n} = \lim_{n \rightarrow \infty} \sup_{k \ge n} x_{k} \\
a = \text{sequential limit} \\
\set{a_{n_{k}}} = \text{subsequence} \\
S = \text{derived set} \\
\sup S = \text{limit superior}
\end{aligned}
$$

---
### limit inferior
- infimum of derived set of subsequence

---
### limit inferior formula
$$
\begin{aligned}
S = \{a \in \mathbb R|\lim_{k\rightarrow \infty} a_{n_{k}} = a\} \implies \lim_{n\rightarrow \infty} \inf a_{n} = \inf S \\
\lim_{n\rightarrow \infty} \inf a_{n} = \lim_{n \rightarrow \infty} \inf_{k \ge n} x_{k} \\
a = \text{sequential limit} \\
\set{a_{n_{k}}} = \text{subsequence} \\
S = \text{derived set} \\
\sup S = \text{limit inferior}
\end{aligned}
$$

---
### limit convergence property
- distance between $n$th term of convergent sequence and sequential limit approaches zero as number of terms approaches infinity

---
### limit convergence property formula
$$
\begin{aligned}
\lim_{n \rightarrow \infty} a_{n} = a \implies \lim_{n \rightarrow \infty} d(a_{n}, a) = 0 \\
\set {a_{n}} = \text{convergent sequence} \\
a = \text{sequential limit}
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
(a_{n}, b_{n} \in \mathbb C) \land (\lim_{n \rightarrow \infty}a_{n} = a) \land (\lim_{n \rightarrow \infty}b_{n} = b) \implies \lim_{n \rightarrow \infty}(a_{n} + b_{n}) = a + b \\
(a_{n}, b_{n} \in \mathbb C) \land (\lim_{n \rightarrow \infty}a_{n} = a) \land (\lim_{n \rightarrow \infty}b_{n} = b) \implies \lim_{n \rightarrow \infty}(a_{n} \cdot b_{n}) = a \cdot b \\
(a_{n} \in \mathbb C) \land (c \in \mathbb R) \land (\lim_{n \rightarrow \infty}a_{n} = a) \implies \lim_{n \rightarrow \infty}ca_{n} = c \cdot a \\
(a_{n} \in \mathbb C) \land (c \in \mathbb R) \land (\lim_{n \rightarrow \infty}a_{n} = a) \implies \lim_{n \rightarrow \infty}(c + a_{n}) = c + a \\
(a_{n} \in \mathbb C) \land (\lim_{n \rightarrow \infty}a_{n} = a) \implies \lim_{n \rightarrow \infty} \frac{1}{a_{n}} = \frac{1}{a} \\
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
\lim_{n \rightarrow \infty} a_{n} = a \implies \forall \epsilon > 0, \exists K \in \mathbb N, \forall n_{k} \ge n_{K} \ge N: d(a_{n_{k}}, a) < \epsilon \\
\lim_{n \rightarrow \infty} a_{n} = a \iff \forall \epsilon> 0, \exists N \in \mathbb N, \forall n \ge N: a_{n} \in N_{\epsilon}(a) \\
(\lim_{n \rightarrow \infty} a_{n} = a) \land (\lim_{n \rightarrow \infty} a_{n} = a') \implies a = a' \\
\lim_{n \rightarrow \infty} a_{n} = a \implies \exists \epsilon > 0: \{a_{n}\} \subset B_{\epsilon}(a) \subset X \\
a \in S' \implies \exists \{a_{n}\} \in S \subset X: \lim_{n \rightarrow \infty} a_{n} = a 
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
\exists a \in X:\lim_{n\rightarrow \infty} a_{n} = a \implies \{a_{n}\} = \{_{c}a_{n}\} \\
\forall \set{Y_{i}} \subset X, \exists \{Y_{i_{1}}, \dots Y_{i_{n}}\} \subset \{Y_{i}\}: S \subset \bigcup_{k=1}^n Y_{i_{k}} \implies \forall \{_{c}a_{n}\} \subset S, \exists a \in X: \lim_{n\rightarrow \infty} {}_{c}a_{n} = a \\
\forall \{_{c}a_{n}\} \subset \mathbb R^k, \exists a \in \mathbb R^k: \lim_{n\rightarrow \infty} {}_{c}a_{n} = a \\
\end{aligned}
$$

---
### closed subsequence property
- derived set of subsequence equal closed set

---
### closed subsequence property formula
$$
\begin{aligned}
S = \{a | \lim_{k\rightarrow \infty} a_{n_{k}} = a\} \implies S' \subset S \subset X \\
S = \text{closed set} \\
a = \text{sequential limit} \\
\set {a_{n_{k}}} = \text{subsequence} \\
S' = \text{derived set} \\
X = \text{metric space} 
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
\sup S, \inf S \in S \\
a > \sup S \implies \exists N \in \mathbb N, \forall n \ge N: a_{n} < a \\
a < \inf S \implies \exists N \in \mathbb N, \forall n \ge N: a_{n} > a \\
\lim_{n \rightarrow \infty} a_{n} = a \iff \lim_{n\rightarrow \infty} \sup a_{n} = \lim_{n\rightarrow \infty} \inf a_{n} = a
\end{aligned}
$$

---
