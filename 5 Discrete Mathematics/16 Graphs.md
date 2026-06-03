### graph
- set of vertices and edges where vertices represent elements and edges represent relations
![[5 Discrete Mathematics/Images/graph.png|300]]

---
### graph formula
$$
\begin{aligned}
G = ( V , E ) \\
V = \text { set of vertices } \\
E = \text { set of edges }
\end{aligned}
$$

---
### loop
- edge connecting vertex with itself

---
### multiple edge
- distinct edges connecting same pair of vertices

---
### multiplicity
- number of distinct edges connecting same pair of vertices

---
### simple graph
- undirect graph that may not contain loops or multiple edges
![[5 Discrete Mathematics/Images/simple graph.png]]

---
### multigraph
- undirect graph that may contain multiple edges but not loops 
![[5 Discrete Mathematics/Images/multigraph.png]]

---
### pseudograph
- undirect graph that may contain multiple edges and loops
![[5 Discrete Mathematics/Images/pseudograph.png]]

---
### direct graph
- graph whose edges have direction
![[5 Discrete Mathematics/Images/direct graph.png]]

---
### undirect graph
- graph whose edges do not have direction

---
### mix graph
- graph whose edges both have direction and do not have direction

---
### graph summary
- simple graph
- multigraph
- pseudograph
- simple direct graph
- direct multigraph
- mix graph
![[5 Discrete Mathematics/Images/graph summary.png]]

---
### social network
- graph whose vertices represent people and edges represent relationship between people

---
### communication network
- graph whose vertices represent devices and edges represent type of communication between devices

---
### information network
- graph whose vertices represent sources of information and edges represent links between sources of information

---
### transportation network
- graph whose vertices represent locations and edges represent routes between locations

---
### biological network
- graph whose vertices represent living entity and edges represent relationship between living entity

---
### semantic network
- graph whose vertices represent natural language and edges represent relations between similar natural language

---
### adjacent
- two vertices share the same edge

---
### incident
- if two vertices share the same edge then edge incident with both vertices aka both vertices endpoint of edge

---
### neighborhood
- set of all adjacent vertices

---
### undirect neighborhood formula
$$
\begin{aligned}
N ( v ) = \{ u \in V | ( v , u ) \in E \} \\
v = \text { home vertex } \\
u = \text { neighbor vertex }
\end{aligned}
$$

---
### direct neighborhood formula
$$
\begin{aligned}
N ^ { - } ( v ) = \{ u \in V | ( u , v ) \in E \} \\
N ^ { + } ( v ) = \{ u \in V | ( v , u ) \in E \}
\end{aligned}
$$

---
### degree of vertex
- number of edges incident with vertex

---
### degree of vertex formula
$$
\begin{aligned}
d e g ( v ) = N ( v )
\end{aligned}
$$

---
### isolate vertex
- vertex of degree 0

---
### pendant vertex
- vertex of degree 1

---
### undirect handshaking theorem
- for all undirect graphs the sum of the degrees of all vertices equal twice the number of edges

---
### undirect handshaking formula
$$
\begin{aligned}
\sum _ { v \in V } d e g ( v ) = 2 | E | \\
| E | = \text { number of edges }
\end{aligned}
$$

---
### edge parity theorem
- for all undirect graphs theres always even number of vertices with odd degree

---
### edge parity formula
$$
\begin{aligned}
\mathbb { E } = 2 k \\
\sum _ { v \in V } d e g ( v ) = 2 | E | \\
\therefore \sum _ { v \in V } d e g ( v ) \in \mathbb { E }
\end{aligned}
$$

---
### in degree of vertex
- number of incoming edges incident with vertex

---
### in degree of vertex formula
$$
\begin{aligned}
d e g ^ { - } ( v ) = \{ u \in V | ( u , v ) \in E \} \\
u = \text { initial vertex } \\
v = \text { terminal vertex }
\end{aligned}
$$

---
### out degree of vertex
- number of outgoing edges incident with vertex

---
### out degree of vertex formula
$$
\begin{aligned}
d e g ^ { + } ( v ) = \{ u \in V | ( v , u ) \in E \} \\
v = \text { initial vertex } \\
u = \text { terminal vertex }
\end{aligned}
$$

---
### direct handshaking theorem
- for all direct graphs the sum of the in degrees of all vertices and the sum of the out degrees of all vertices equal the number of edges

---
### direct handshaking formula
$$
\begin{aligned}
\sum _ { v \in V } d e g ^ { - } ( v ) = \sum _ { v \in V } d e g ^ { + } ( v ) = | E | \\
| E | = \text { number of edges }
\end{aligned}
$$

---
### complete graph
- graph where every pair of vertices connect by exactly 1 edge
![[5 Discrete Mathematics/Images/complete graph.png]]

---
### complete graph formula
$$
\begin{aligned}
| E | = \frac { n ( n - 1 ) } { 2 } \\
n = \text { number of vertices }
\end{aligned}
$$

---
### cycle graph
- graph where traversal of all vertices without traversing same vertex twice can begin and end at the same vertex
![[5 Discrete Mathematics/Images/cycle graph.png]]

---
### cycle graph formula
$$
\begin{aligned}
| E | = n \\
n = \text { number of vertices }
\end{aligned}
$$

---
### wheel graph
- cycle graph except central vertex connect all vertices
![[5 Discrete Mathematics/Images/wheel graph.png]]

---
$$
\begin{aligned}
| E | = 2 ( n - 1 ) \\
n = \text { number of vertices }
\end{aligned}
$$

---
### hypercube graph
- graph where vertices equal $2 ^ { n }$ bit strings of length *n* and two vertices adjacent if and only if bit strings differ by exactly 1 bit
![[5 Discrete Mathematics/Images/hypercube graph.png]]

---
### hypercube graph formula
$$
\begin{aligned}
| E | = n \times 2 ^ { n - 1 } \\
n = \text { number of vertices }
\end{aligned}
$$

---
### bipartition
- divide set of vertices into two disjoint subsets such that every vertex has edge and there exists no edge between vertices within same set
![[5 Discrete Mathematics/Images/bipartite graph.png]]

---
### bipartition formula
$$
\begin{aligned}
V _ { 1 } \cup V _ { 2 } = V \land V _ { 1 } \cap V _ { 2 } = \emptyset
\end{aligned}
$$

---
### bipartite color theorem
- bipartition of graph possible if and only if coloring of vertices with exactly two colors such that no adjacent vertices share the same color 

---
### bipartite path theorem
- bipartition of graph possible if and only if traversal of odd number of distinct edges cannot begin and end at the same vertex 

---
### matching
- subset of edges that do not share the same vertex

---
### match vertex
- matching edge incident with vertex

---
### maximum matching
- matching with the most edges among all edges within graph

---
### complete matching
- matching edge incident with every vertex

---
### hall marriage theorem
- bipartite graph $G = ( V , E )$ with bipartition $( V _ { 1 } , V _ { 2 } )$ has complete matching if and only if $| N ( A ) | \ge | A |$ for all subsets $A$ of subset $V _ { 1 }$

---
### subgraph
- subset of vertices from larger graph where edges exist between select vertices

---
### subgraph formula
$$
\begin{aligned}
W \subseteq V \land F \subseteq E \\
H = ( W , F ) \\
G = ( V , E )
\end{aligned}
$$

---
### induce subgraph
- subset of vertices from larger graph where edges exist between subset of vertices

---
### induce subgraph formula
$$
\begin{aligned}
e \in F \iff ( v _ { 1 } , v _ { 2 } ) \in W \\
H = ( W , F ) \\
G = ( V , E )
\end{aligned}
$$

---
### edge addition
- graph addition with edge connect non adjacent vertices

---
### edge addition formula
$$
\begin{aligned}
G + e = ( V , E \cup \{ e \} )
\end{aligned}
$$

---
### edge subtraction
- graph subtraction with edge disconnect adjacent vertices

---
### edge subtraction formula
$$
\begin{aligned}
G - e = ( V , E - \{ e \} )
\end{aligned}
$$

---
### edge contraction
- graph subtraction with edge merges vertices incident with edge into single vertex

---
### edge contraction formula
$$
\begin{aligned}
V ' = V - \{ v _ { 1 } , v _ { 2 } \} \cup \{ w \} \\
E ' = \{ e \in E | e \ne w \} \\
w = \text { merge vertex }
\end{aligned}
$$

---
### vertex subtraction
- graph subtraction with vertex disconnect incident edges

---
### vertex subtraction formula
$$
\begin{aligned}
G - v = ( V - { v } , E ' ) \\
G = ( V , E )
\end{aligned}
$$

---
### graph union
- joining of vertices and edges between graphs

---
### graph union formula
$$
\begin{aligned}
G _ { 1 } \cup G _ { 2 } = V _ { 1 } \cup V _ { 2 } \land E _ { 1 } \cup E _ { 2 } \\
G _ { 1 } = ( V _ { 1 } , E _ { 1 } ) \\
G _ { 2 } = ( V _ { 2 } , E _ { 2 } )
\end{aligned}
$$

---
