---
layout: default
title: span(S)의 부분집합 크기에 따른 선형독립성
parent: 선형대수
nav_order: 11
---

# span(S)의 부분집합 크기에 따른 선형독립성

---

### 질문

- $span(S)$의 부분집합 크기가 $S$의 크기보다 크면 이 부분집합은 선형종속인가?

---

어떤 벡터들로 구성된 집합 $S = \lbrace \vec{u_1}, \vec{u_2}, ...  , \vec{u_p} \rbrace$가 있다. 이 벡터들은 선형독립일 수도 있고, 선형종속일 수도 있다. 이 벡터 집합이 생성하는 공간은 다음과 같이 벡터들의 선형결합으로 표현된다.

$$
span(S) = \lbrace x_1\vec{u_1} + x_2\vec{u_2} + ... + x_p\vec{u_p} : x_i \in \mathbb{R} \rbrace
$$

$span(S)$의 공집합이 아닌 부분집합을 생각해보자. 이 부분집합은 $k$개의 벡터들로 구성되어있고 다음과 같이 표현된다.

$$
\lbrace \vec{w_1}, \vec{w_2}, ... ,\vec{w_k} \rbrace \subset span(S)
$$

만약 이 부분집합의 크기 $k$가 $span$에 사용된 집합 $S$의 크기 $p$보다 크다면, 이 부분집합은 선형종속일까? 즉 $k > p$라면 $\lbrace \vec{w_1}, \vec{w_2}, ... , \vec{w_k} \rbrace$는 선형종속인가? 이걸 증명하기 위해 먼저 $\vec{w_i}$를 수식으로 표현해보자.

$$
\vec{w_i} = c_{1i}\vec{u_1} + c_{2i}\vec{u_2} + ... + c_{pi}\vec{u_p}
$$

이 계수들을 모든 $\vec{w}$들에 대해 표현하면 다음과 같이 $p \times k$ 크기의 행렬 $M$을 쓸 수 있다. 이 행렬의 각 열은 $\vec{w_1}, \vec{w_2}, ... ,\vec{w_k}$에 대응하고, 각 행은 $\vec{u_1}, \vec{u_2}, ... \vec{u_p}$에 대응한다.

$$
M = \begin{pmatrix}
c_{11} & c_{12} & \cdots & c_{1k} \\
c_{21} & c_{22} & \cdots & c_{2k} \\
\vdots & \vdots & \cdots & \vdots \\
c_{p1} & c_{p2} & \cdots & c_{pk} \\
\end{pmatrix}
$$

그런데 [선형종속과 선형독립]({% link docs/선형대수/선형종속_선형독립.md %}) 페이지를 기반으로 보면 행렬 $M$은 행의 개수보다 열의 개수가 더 많으므로 $N(M) \neq \lbrace \vec{0} \rbrace$이다. 이를 다르게 말하면 다음과 같은 수식에서 $\vec{x}$가 $\vec{0}$이 아닌 경우가 존재한다는 것이다.

$$
\begin{aligned}
\begin{pmatrix}
c_{11} & c_{12} & \cdots & c_{1k} \\
c_{21} & c_{22} & \cdots & c_{2k} \\
\vdots & \vdots & \cdots & \vdots \\
c_{p1} & c_{p2} & \cdots & c_{pk} \\
\end{pmatrix}
\begin{pmatrix}
x_1 \\ x_2 \\ \vdots \\ x_k
\end{pmatrix} = \vec{0} \\ \\
\begin{pmatrix}
c_{11}x_1 + c_{12}x_2 + ... + c_{1k}x_k \\
c_{21}x_1 + c_{22}x_2 + ... + c_{2k}x_k \\
\vdots \\
c_{p1}x_1 + c_{p2}x_2 + ... + c_{pk}x_k
\end{pmatrix}
= \begin{pmatrix} 0 \\ 0 \\ \vdots \\ 0 \end{pmatrix}
\end{aligned}
$$

 $\vec{x} \neq \vec{0}$ 이므로 $x_i \neq 0$인 $i$가 존재한다. 편의를 위해 $x_1 \neq 0$이라고 치고 수식을 전개하면 다음과 같다.

$$
\begin{pmatrix}
c_{11} \\ c_{21} \\ \vdots \\ c_{p1}
\end{pmatrix} =
-\frac{1}{x_1} \begin{pmatrix}
c_{12}x_2 + ... + c_{1k}x_k \\
c_{22}x_2 + ... + c_{2k}x_k \\
\vdots \\
c_{p2}x_2 + ... + c_{pk}x_k
\end{pmatrix}
$$

위의 수식을 기반으로 $\vec{w_1}$을 작성해보면 다음과 같이 정리된다.

$$
\begin{aligned}
\vec{w_1} = c_{11}\vec{u_1} + c_{21}\vec{u_2} + ... + c_{p1}\vec{u_p} \\ = -\frac{1}{x_1}(c_{12}x_2 + ... + c_{1k}x_k)\vec{u_1} + \\ -\frac{1}{x_1}(c_{22}x_2 + ... + c_{2k}x_k)\vec{u_2} + \\ \vdots \\ -\frac{1}{x_1}(c_{p2}x_2 + ... + c_{pk}x_k)\vec{u_p} 
\end{aligned}
$$

위 수식을 $x$끼리 묶으면 다음과 같이 전개된다.

$$
\vec{w_1} = \frac{-x_2}{x_1}(c_{12}\vec{u_1} + c_{22}\vec{u_2} + ... c_{p2}\vec{u_p}) + ... + \frac{-x_k}{x_1}(c_{1k}\vec{u_1} + c_{2k}\vec{u_2} + ... c_{pk}\vec{u_p})
$$

$\vec{w_i} = c_{1i}\vec{u_1} + c_{2i}\vec{u_2} + ... + c_{pi}\vec{u_p}$ 이므로 $\vec{w_1}$은 다음과 같이 정리된다.

$$
\vec{w_1} = -\frac{1}{x_1}\sum_{i \neq 1}x_i\vec{w_i}
$$

$\vec{w_1}$가 부분집합 내의 다른 벡터들의 선형결합으로 표현되기 때문에 $\lbrace \vec{w_1}, \vec{w_2}, ... ,\vec{w_k} \rbrace$는 선형종속이다. 정리하면 $span(S)$에 대해서, 부분집합 크기가 $S$의 크기보다 크면 부분집합은 선형종속이다. 즉 $k > p$이면 부분집합은 선형종속이다. 그리고 이 명제의 대우를 보면 부분집합이 선형독립이면 $k \le p$인 것으로도 생각할 수 있다. 즉 부분집합이 선형독립이면 부분집합의 크기가 $S$의 크기 이하이다.
