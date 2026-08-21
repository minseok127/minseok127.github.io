---
layout: default
title: 부분공간의 포함관계와 basis의 포함관계
parent: 선형대수
nav_order: 15
---

# 부분공간의 포함관계와 basis의 포함관계

---

### 질문

- 부분공간 $P, Q$에 대해서 $P \subset Q$ 일 때, $Q$의 basis 중에서 $P$의 basis를 포함하는 경우가 존재하나?

---

부분공간 $P, Q$가 있다. $P \subset Q$이고, $P \neq Q$ 이다. $P$의 basis를 $B_P$라고 하고, 크기를 $p$라고 하자. 그리고 $B_P$의 원소들을 $\vec{b_i}$로 표현하자. 그러면 다음 수식은 모든 계수가 0이어야 한다.

$$
c_1\vec{b_1} + c_2\vec{b_2} + ... + c_p\vec{b_p} = \vec{0}
$$

$span(B_P) \neq Q$ 이기 때문에 $Q$에 속하면서 $span(B_P)$에는 속하지 않는 벡터가 존재한다. 이 벡터를 $\vec{u_1}$ 이라고 표현하자. 이 벡터와 $B_P$는 선형독립일까? 다음 수식을 생각해보자.

$$
d_1\vec{u_1} + c_1\vec{b_1} + c_2\vec{b_2} + ... + c_p\vec{b_p} = \vec{0}
$$

$\lbrace \vec{u_1}, \vec{b_1}, ... , \vec{b_p} \rbrace$가 선형종속이라고 가정해보자. 만약 $d_1 \neq 0$ 이라면 $\vec{u_1} \in span(B_P)$이므로 조건을 만족하지 않는다. 반대로 $d_1 = 0$ 이라면 $c_1\vec{b_1} + c_2\vec{b_2} + ... + c_p\vec{b_p} = \vec{0}$ 을 만족하는 계수 중에 0이 아닌 것이 존재한다는 건데, 이는 $B_P$가 basis라는 조건에 모순이다. 선형종속이라는 가정에서는 모든 경우가 모순이기 때문에 $\lbrace \vec{u_1}, \vec{b_1}, ... , \vec{b_p} \rbrace$ 는 선형독립이다. 그리고 $\vec{u_1} \in Q$ 이기 때문에 $span(\lbrace \vec{u_1}, \vec{b_1}, ... , \vec{b_p} \rbrace) \subset Q$ 이다.

[span(S)의 basis 크기는 유일한가?]({% link docs/선형대수/span_basis_크기.md %}) 페이지에 따르면 부분공간의 basis는 여러 방식으로 만들 수 있지만 모든 basis의 크기는 동일해야한다. $Q$의 basis를 $B_Q$라고 하고, 크기를 $q$라고 하자. 그리고 위의 방식대로 $\vec{u}$들을 $k$개 모았다고 치자. $p + k < q$ 인 동안에는 $span(\lbrace \vec{u_1}, ... , \vec{u_k},  \vec{b_1}, ... , \vec{b_p} \rbrace) \neq Q$이다. 만약 $span(\lbrace \vec{u_1}, ... , \vec{u_k},  \vec{b_1}, ... , \vec{b_p} \rbrace) = Q$ 였다면 $\lbrace \vec{u_1}, ... , \vec{u_k},  \vec{b_1}, ... , \vec{b_p} \rbrace$가 선형독립이기 때문에 $Q$의 basis라는 것인데, $p + k \neq q$ 이므로 모순이다. 그럼 이번에는 $p + k = q$가 될 때까지 벡터를 뽑았다고 치자. $Q$에 속하면서 선형독립인 벡터들을 $q$개 모은 것인데, 이걸 $Q$의 basis라고 할 수 있을까?

$span(\lbrace \vec{u_1}, ... , \vec{u_k},  \vec{b_1}, ... , \vec{b_p} \rbrace) \neq Q$ 라고 가정해보자. 그러면 $Q$에 속하는 벡터 중에 $span(\lbrace \vec{u_1}, ... , \vec{u_k},  \vec{b_1}, ... , \vec{b_p} \rbrace)$ 에 속하지 않는 벡터가 있다는 것이다. 이 벡터를 $\vec{x}$라고 하자. 위의 전개 방식을 그대로 따라가면 $\lbrace \vec{x}, \vec{u_1}, ... , \vec{u_k},  \vec{b_1}, ... , \vec{b_p} \rbrace$ 는 선형독립인 것을 알 수 있다. 그런데 [span(S)의 부분집합 크기에 따른 선형독립성]({% link docs/선형대수/span_부분집합_선형독립.md %}) 페이지에 따르면, $\lbrace \vec{x}, \vec{u_1}, ... , \vec{u_k},  \vec{b_1}, ... , \vec{b_p} \rbrace \subset span(B_Q)$ 이고 $\lbrace \vec{x}, \vec{u_1}, ... , \vec{u_k},  \vec{b_1}, ... , \vec{b_p} \rbrace$가 선형독립이기 때문에 $\lbrace \vec{x}, \vec{u_1}, ... , \vec{u_k},  \vec{b_1}, ... , \vec{b_p} \rbrace$의 크기는 $B_Q$의 크기인 $q$ 이하여야 한다. 그런데 $1 + k + p = 1 + q$ 이므로 모순이다. 따라서 $span(\lbrace \vec{u_1}, ... , \vec{u_k},  \vec{b_1}, ... , \vec{b_p} \rbrace) = Q$ 이다. 

정리하면 $\lbrace \vec{u_1}, ... , \vec{u_k},  \vec{b_1}, ... , \vec{b_p} \rbrace$는 선형독립이고 $span$이 $Q$와 같기 때문에 $Q$의 basis이고, 이 basis는 $P$의 basis $B_P$를 포함하기에, $P \subset Q$ 이면 $B_P \subset B_Q$인 경우가 존재한다고 할 수 있다. 또한 이를 기반으로 차원의 대소관계를 다음과 같이 표현할 수 있다.

$$
P \subset Q \implies \dim P \le \dim Q
$$
