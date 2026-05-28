### tree
- tree if and only if there exists unique simple path between any two vertices

---
### tree formula
$$
\begin{aligned}
|E| = n - 1 \\
n = \text{number of vertices} \\
|E| = \text{number of edges}
\end{aligned}
$$

---
### tree graph
- graph that may not contain loops, multiple edges, cycles, or disconnections
![[5 Discrete Mathematics/Images/tree.png|500]]

---
### tree graph formula
$$
\begin{aligned}
\forall a(a, a) \notin R \\
(a, b) \in R \implies (b, a) \notin R \\
(a, b) \in R \land (b, c) \in R \implies (a, c) \notin R \\
\forall (e \in E)(e \in R)
\end{aligned}
$$

---
### forest graph
- collection of disjoint trees
![[5 Discrete Mathematics/Images/forest.png]]

---
### root tree graph
- tree graph where single vertex acts as the root and every edge direct away from root
![[5 Discrete Mathematics/Images/root tree.png|400]]

---
### parent vertex
- vertex directly above children vertices

---
### child vertex
- vertices directly below parent vertex

---
### ancestor 
- vertices indirectly above parent vertex including grandparent vertices

---
### descendent
- vertices indirectly below parent vertex including grandchildren vertices

---
### leaf vertex
- vertex with zero children vertices

---
### internal vertex
- vertex with non zero children vertices

---
### subtree
- subgraph of tree graph from vertex and its descendent(s)

---
### order root tree
- root tree where the children of internal vertex order from left to right

---
### N-ary tree
- root tree where every internal vertex has $\le N$ children vertices

---
### full N-ary tree
- root tree where every interval vertex has *N* children vertices

---
### full N-ary tree formula
$$
\begin{aligned}
n \rightarrow i = \frac{n - 1}{N} \land l = \frac{(n + 1)(N - 1)}{N} \\
i \rightarrow n = Ni + 1 \land l = (N -1)i + 1 \\
l \rightarrow n = \frac{Nl - 1}{N - 1} \land i = \frac{l - 1}{N - 1} \\
n = \text{number of vertices} \\
N = \text{number of children vertices} \\
i = \text{number of internal vertices} \\
l = \text{number of leaves}
\end{aligned}
$$

---
### binary tree
- root tree where every internal vertex has 2 children vertices
![[5 Discrete Mathematics/Images/binary tree.png|400]]

---
### vertex level
- length of path from root vertex

---
### tree height
- maximum vertex level

---
### tree height upper bound
- if N-ary tree of height *h* then there exists $N^h$ leaves

---
### balance N-ary tree
- all leaves of height *h* or $h - 1$ 

---
### tree height theorem
- if N-ary tree of height *h* and *l* leaves then $h \ge \lceil log_{N} (l) \rceil$ 
- if full balance N-ary tree of height *h* and *l* leaves then $h = \lceil log_{N} (l) \rceil$ 

---
