---
layout: default
title: span(S)의 basis 크기는 유일한가?
parent: 선형대수
nav_order: 12
---

# span(S)의 basis 크기는 유일한가?

---

### 질문

- 선형종속인 벡터 집합 S를 선형독립으로 만들 때, 어떤 순서로 벡터를 소거하든지 최종 벡터 수는 같아지는가?

---

$span(S)$의 basis (기저)란 선형독립이면서 $spanning \ set$이 $span(S)$와 같은 벡터 집합이다. [선형종속과 선형독립]({% link docs/선형대수/선형종속_선형독립.md %}) 페이지에 따르면 선형종속인 벡터 집합에 대해서 다른 벡터들의 선형결합으로 표현되는 벡터를 소거해도 $span$이 유지된다. 따라서 $S$가 선형종속이었다면 선형독립이 될 때까지 종속인 벡터들을 소거하며 basis를 찾을 수 있다. 

그런데 벡터들을 소거하는 순서는 정해져있지 않다. 예를 들어 $span(\lbrace (1,0), (1,1), (0,1) \rbrace)$를 생각해보면 아무 벡터나 먼저 소거해도 된다. 그러면 basis는 $\lbrace (1,1), (0,1) \rbrace$도 되고, $\lbrace (1,0), (0,1) \rbrace$도 되고, $\lbrace (1,0), (1,1) \rbrace$도 된다. 즉 소거하는 순서가 달라진다는 것은 basis가 되는 벡터 집합이 여러 개일 수 있다는 것이다. 그러면 이 basis들의 크기는 전부 동일할까?

[span(S)의 부분집합 크기에 따른 선형독립성]({% link docs/선형대수/span_부분집합_선형독립.md %}) 페이지에 따르면, $S = \lbrace \vec{u_1}, \vec{u_2}, ... , \vec{u_p} \rbrace$이고 $\lbrace \vec{w_1}, \vec{w_2}, ... ,\vec{w_k} \rbrace \subset span(S)$ 라고 할 때 다음 명제가 성립한다.

$$
k > p \implies \lbrace \vec{w_1}, \vec{w_2}, ... ,\vec{w_k} \rbrace가 \ 선형종속
$$

이 명제의 대우를 생각해보면 다음도 성립한다.

$$
\lbrace \vec{w_1}, \vec{w_2}, ... ,\vec{w_k} \rbrace가 \ 선형독립 \implies p \ge k
$$

$span(S)$의 basis들 $B_1, B_2$를 생각해보자. 이 두 basis의 크기를 각각 $b_1, b_2$라고 하자. $B_1, B_2$는 basis이기 때문에 $span(S) = span(B_1) = span(B_2)$이다. 따라서 다음과 같은 관계가 성립한다.

$$
\begin{aligned}
B_1 \subset span(S) = span(B_2) \\
B_2 \subset span(S) = span(B_1)
\end{aligned}
$$

$B_1, B_2$는 basis이기 때문에 둘 다 선형독립이다. 따라서 위의 부분집합 조건들을 이전에 보았던 명제의 조건으로 생각해보면 다음이 성립한다.

$$
\begin{aligned}
B_1 \subset span(B_2), \ B_1이 \ 선형독립 \implies b_2 \ge b_1 \\ B_2 \subset span(B_1), \ 
B_2가 \ 선형독립 \implies b_1 \ge b_2
\end{aligned}
$$

따라서 $b_1 = b_2$가 된다. 즉 어떤 경로로 basis를 만들어도 벡터 집합의 크기는 같아진다.
