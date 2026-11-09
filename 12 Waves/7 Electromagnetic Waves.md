### electric gauss law
- electric charge generate electric field
- positive electric charge charge equal electric field source
- negative electric charge charge equal electric field sink
- net electric flux through closed surface proportional net electric charge enclosed

---
### electric gauss law formula
$$
\begin{lgathered}
\oint_{\partial V}\vec E\cdot d\vec A=\frac{Q_{\text{enc}}}{\epsilon_0}\\
\nabla\cdot\vec E=\frac{dQ/dV}{\epsilon_0}\\
V=\text{volume}\\
\vec E=\text{electric field}\\
\vec A=\text{area}\\
Q=\text{electric charge}\\
\epsilon_0=8.85\times10^{-12}\\
\end{lgathered}
$$

---
### magnetic gauss law
- magnetic fields have no isolated sources or sinks
- net magnetic flux through closed surface equal zero

---
### magnetic gauss law formula
$$
\begin{lgathered}
\oint_{\partial V}\vec B\cdot d\vec A=0\\
\nabla\cdot\vec B=0\\
V=\text{volume}\\
\vec B=\text{magnetic field}\\
\vec A=\text{area}
\end{lgathered}
$$

---
### faradays law of induction
- changing magnetic field generate circulating electric field

---
### faradays law of induction formula
$$
\begin{lgathered}
\oint_{\partial A}\vec E\cdot d\vec L=\frac{-d}{dt}\int_{A}\vec B\cdot d\vec A\\
\nabla\times\vec E=\frac{-\partial\vec B}{\partial t}\\
A=\text{area}\\
\vec E=\text{electric field}\\
\vec L=\text{length}\\
t=\text{time}\\
\vec B=\text{magnetic field}\\

\end{lgathered}
$$

---
### ampere-maxwell law
- electric current generate magnetic field
- changing electric field generate magnetic field

---
### ampere-maxwell law formula
$$
\begin{lgathered}
\oint_{\partial A}\vec B\cdot d\vec L=\mu_0I_{\text{enc}}+\mu_0\epsilon_0\frac{d}{dt}\int_A\vec E\cdot d\vec A\\
\nabla\times\vec B=\mu_0\vec J+\mu_0\epsilon_0\frac{\partial\vec E}{\partial t}\\
A=\text{area}\\
\vec B=\text{magnetic field}\\
\vec L=\text{length}\\
\mu_0=1.26\times10^{-6}\\
I=\text{electric current}\\
\epsilon_0=8.85\times10^{-12}\\
t=\text{time}\\
\vec E=\text{electric field}\\
\vec J=\text{electric current density}
\end{lgathered}
$$

---
### interface
- boundary between two media

---
### interface formula
$$
\begin{lgathered}
x=0\implies\hat n=\hat x\\
y=0\implies\hat n=\hat y\\
z=0\implies\hat n=\hat z
\end{lgathered}
$$

---
### normal wave interface
- interaction between incident EM wave, reflected EM wave, and transmitted EM wave at normal interface

---
### normal wave interface formula
$$
\begin{lgathered}
\mu_1=\mu_2\\
\epsilon_1\ne\epsilon_2\\
\frac{v_2}{v_1}=\frac{n_1}{n_2}\\
\frac{f_2}{f_1}=1\\
E_2=E_1+E_r\\
n_1(E_1-E_r)=n_2E_2\\
\vec E_1(\vec r,t)=E_1\cos(\omega t-\vec k_1\cdot\vec r)\hat e_1\\
\vec E_r(\vec r,t)=E_r\cos(\omega t+\vec k_1\cdot\vec r)\hat e_r\\
\vec E_2(\vec r,t)=E_2\cos(\omega t-\vec k_2\cdot\vec r)\hat e_2\\
\end{lgathered}
$$

---
### normal amplitude reflection coefficient
- fraction of incident normal electric field amplitude reflected into the first medium

---
### normal amplitude reflection coefficient formula
$$
\begin{lgathered}
\frac{E_r}{E_1}=\frac{n_1-n_2}{n_1+n_2}\\
\end{lgathered}
$$

---
### normal amplitude transmission coefficient
- fraction of incident normal electric field amplitude transmitted into the second medium

---
### normal amplitude transmission coefficient formula
$$
\begin{lgathered}
\frac{E_2}{E_1}=\frac{2n_1}{n_1+n_2}\\
\end{lgathered}
$$

---
### normal reflectance
- fraction of incident normal power reflected into the first medium

---
### normal reflectance formula
$$
\begin{lgathered}
\frac{P_r}{P_1}=(\frac{E_r}{E_1})^2=(\frac{n_1-n_2}{n_1+n_2})^2\\
\end{lgathered}
$$

---
### normal transmittance
- fraction of incident normal power transmitted into the second medium

---
### normal transmittance formula
$$
\begin{lgathered}
\frac{P_2}{P_1}=1-\frac{P_r}{P_1}=\frac{4n_1n_2}{(n_1+n_2)^2}\\
\end{lgathered}
$$

---
### normal conservation of energy
- normal amplitude transmission coefficient subtraction with normal amplitude reflection coefficient equal 1
- normal transmittance addition with normal reflectance equal 1

---
### normal conservation of energy formula
$$
\begin{lgathered}
\frac{E_2}{E_1}-\frac{E_r}{E_1}=1\\
\frac{P_2}{P_1}+\frac{P_r}{P_1}=1
\end{lgathered}
$$

---
### plane of incidence
- plane containing both the incident wavevector and the surface normal

---
### plane of incidence formula
$$
\begin{lgathered}
(\vec k_1\times\hat n)\perp\text{span}\set{\vec k_1,\hat n}\\
[a,b,c]\times\hat x=[0,c,-b]\\
[a,b,c]\times\hat y=[-c,0,a]\\
[a,b,c]\times\hat z=[b,-a,0]
\end{lgathered}
$$

---
### s polarization
- electric field perpendicular plane of incidence
- aka transverse electric field

---
### s polarization formula
$$
\begin{lgathered}
\vec E_1\times(\hat k_1\times\hat n)=0\\
\hat s=\frac{\vec k_1\times\hat n}{\|\vec k\times\hat n\|}
\end{lgathered}
$$

---
### p polarization
- electric field parallel plane of incidence
- aka transverse magnetic field

---
### p polarization formula
$$
\begin{lgathered}
\vec E_1\cdot(\hat k_1\times\hat n)=0\\
\hat p=\hat s\times\hat k_1
\end{lgathered}
$$

---
### polarization
- orientation of the electric field relative to the plane of incidence

---
### polarization formula
$$
\begin{lgathered}
\hat p\cdot\hat k_1=0\\
\hat s\cdot\hat k_1=0\\
\hat s\cdot\hat p=0
\end{lgathered}
$$

---
### general wave interface
- interaction between incident EM wave, reflected EM wave, and transmitted EM wave at general interface

---
### general wave interface formula
$$
\begin{lgathered}
\mu_1=\mu_2\\
\epsilon_1\ne\epsilon_2\\
\frac{v_2}{v_1}=\frac{n_1}{n_2}\\
\frac{f_2}{f_1}=1\\
n_1\sin\theta_1=n_2\sin\theta_2\\
\vec E_1(\vec r,t)=E_1\cos(\omega t-\vec k_1\cdot\vec r)\hat e_1\\
\vec E_r(\vec r,t)=E_r\cos(\omega t+\vec k_1\cdot\vec r)\hat e_r\\
\vec E_2(\vec r,t)=E_2\cos(\omega t-\vec k_2\cdot\vec r)\hat e_2\\
\alpha=\frac{\cos\theta_2}{\cos\theta_1}\\
\beta=\frac{n_2}{n_1}
\end{lgathered}
$$

---
### general amplitude reflection coefficient
- fraction of incident general electric field amplitude reflected into the first medium

---
### general amplitude reflection coefficient formula
$$
\begin{lgathered}
\vec E_1\times(\hat k_1\times\hat n)=0\implies\frac{E_r}{E_1}=\frac{1-\alpha\beta}{1+\alpha\beta}\\
\vec E_1\cdot(\hat k_1\times\hat n)=0\implies\frac{E_r}{E_1}=\frac{\alpha-\beta}{\alpha+\beta}
\end{lgathered}
$$

---
### general amplitude transmission coefficient
- fraction of incident general electric field amplitude transmitted into the second medium

---
### general amplitude transmission coefficient formula
$$
\begin{lgathered}
\vec E_1\times(\hat k_1\times\hat n)=0\implies\frac{E_2}{E_1}=\frac{2}{1+\alpha\beta}\\
\vec E_1\cdot(\hat k_1\times\hat n)=0\implies\frac{E_2}{E_1}=\frac{2}{\alpha+\beta}
\end{lgathered}
$$

---
### general reflectance
- fraction of incident general power reflected into the first medium

---
### general reflectance formula
$$
\begin{lgathered}
\vec E_1\times(\hat k_1\times\hat n)=0\implies\frac{P_r}{P_1}=(\frac{1-\alpha\beta}{1+\alpha\beta})^2\\
\vec E_1\cdot(\hat k_1\times\hat n)=0\implies\frac{P_r}{P_1}=(\frac{\alpha-\beta}{\alpha+\beta})^2
\end{lgathered}
$$

---
### general transmittance
- fraction of incident general power transmitted into the second medium

---
### general transmittance formula
$$
\begin{lgathered}
\vec E_1\times(\hat k_1\times\hat n)=0\implies\frac{P_2}{P_1}=\frac{4\alpha\beta}{(1+\alpha\beta)^2}\\
\vec E_1\cdot(\hat k_1\times\hat n)=0\implies\frac{P_2}{P_1}=\frac{4\alpha\beta}{(\alpha+\beta)^2}
\end{lgathered}
$$

---
### general conservation of energy
- general amplitude transmission coefficient subtraction with general amplitude reflection coefficient equal 1
- general transmittance addition with general reflectance equal 1

---
### general conservation of energy formula
$$
\begin{lgathered}
\vec E_1\cdot(\hat k_1\times\hat n)=0\implies\alpha\frac{E_2}{E_1}-\frac{E_r}{E_1}=1\\
\vec E_1\times(\hat k_1\times\hat n)=0\implies\frac{E_2}{E_1}-\frac{E_r}{E_1}=1\\
\frac{P_2}{P_1}+\frac{P_r}{P_1}=1
\end{lgathered}
$$

---
