---
layout: default
title: N(A)의 coset과 선형변환
parent: 선형대수
nav_order: 28
---

# N(A)의 coset과 선형변환

---

### 질문

- N(A)로 coset을 정의하면 선형변환을 이해할 때 어떤 도움이 되나?

---

[coset]({% link docs/선형대수/coset.md %}) 페이지에 따르면, 두 벡터 $\vec{x}, \vec{y}$가 같은 coset에 속하는 것은 $\vec{x} - \vec{y}$가 coset의 기준이 되는 부분공간에 속하는 것과 같은 말이다. $N(A)$를 coset의 기준으로 정의하면 $\vec{x} - \vec{y} \in N(A)$이다. 이건 $A(\vec{x} - \vec{y}) = \vec{0}$이라는 것이고, 전개해보면 $A\vec{x} = A\vec{y}$이다. 즉 $N(A)$를 기준으로 coset을 정의하면, 같은 coset에 속하는 벡터들은 변환 후 전부 같은 벡터가 된다.

[차원 정리]({% link docs/선형대수/차원_정리.md %}) 페이지에서는 $\mathbb{R}^n$의 basis를 다음과 같이 구성했다.

$$
\set{ \vec{b_1}, ... , \vec{b_p}, \vec{u_1}, ... ,\vec{u_k}}
$$

$\set{ \vec{b_1}, ... , \vec{b_p}}$는 $N(A)$의 basis이다. 나머지 벡터들이 구성하는 부분공간은 $U$라고 부르자. $N(A)$의 basis와 $U$의 basis를 합치면 $\mathbb{R}^n$의 basis이므로, $N(A)$에 속하는 벡터와 $U$에 속하는 벡터의 합으로 $\mathbb{R}^n$의 모든 벡터를 표현할 수 있다. 즉 $N(A) + U = \mathbb{R}^n$이다.

부분공간 $U$에 속하는 벡터들을 $\set{\vec{0}, \vec{x_1}, \vec{x_2}, ...}$와 같이 적어보자. $\vec{x_i}$는 $\vec{0}$가 아닌 벡터들이다. 각각의 벡터에 $N(A)$를 더하면 coset이 된다. 이걸 보기 쉽게 나열해보자.

$$
\begin{aligned}
\vec{0} + N(A) \\
\vec{x_1} + N(A) \\
\vec{x_2} + N(A) \\
\vdots
\end{aligned}
$$

줄마다 coset을 나타낸다. $N(A) + U = \mathbb{R}^n$이기 때문에 $\mathbb{R}^n$의 모든 벡터들은 이 coset들 중 하나에 속한다. 그런데 $N(A)$를 기준으로 coset을 정의하면, 같은 coset에 속하는 벡터들은 변환 후 같은 벡터가 된다. 따라서 $\mathbb{R}^n$에 속하는 벡터들이 변환 후 어떤 벡터가 되는지는 $U$에 속하는 벡터들인 $\set{\vec{x_1}, \vec{x_2}, ...}$가 변환 후 어떤 벡터들이 되는지 보면 된다. $\vec{0}$가 대표하는 coset은 변환 후 $\vec{0}$가 된다.

$\set{\vec{x_1}, \vec{x_2}, ...}$ 중에 같은 벡터로 변환되는 것들이 있을까? $\vec{x_i}$가 $N(A)$에도 속한다고 가정해보자. 그러면 $\vec{x_i}$는 $\set{ \vec{b_1}, ... , \vec{b_p}}$의 선형결합으로도, $\set{ \vec{u_1}, ... , \vec{u_k}}$의 선형결합으로도 표현될 수 있어야 한다. 즉 다음 수식이 성립해야한다.

$$
\vec{x_i} = \sum_{l}c_l\vec{b_l} = \sum_{m}d_m\vec{u_m}
$$

이건 다음 수식과 같다.

$$
\sum_{l}c_l\vec{b_l} - \sum_{m}d_m\vec{u_m} = \vec{0}
$$

$\set{ \vec{b_1}, ... , \vec{b_p}, \vec{u_1}, ... ,\vec{u_k}}$는 $\mathbb{R}^n$의 basis이므로 모든 계수가 0이어야 한다. 근데 모든 계수가 0이면 $\vec{x_i} = \sum_{l}0 \times \vec{b_l} = \sum_{m}0 \times \vec{u_m} = \vec{0}$이다. 이건 $\vec{x_i} \neq \vec{0}$이라는 조건에 위배되므로, $\vec{x_i}$가 $N(A)$에 속한다는 가정은 성립하지 않는다. $U$는 부분공간이기 때문에 $U$에 속하는 임의의 두 벡터 $\vec{x_i}, \vec{x_j}$의 차이도 $U$에 속한다. $\vec{0}$가 아닌 $U$의 모든 벡터는 $N(A)$에 속하지 않으므로 $\vec{x_i} - \vec{x_j} \notin N(A)$이다. [coset]({% link docs/선형대수/coset.md %}) 페이지에서는 두 벡터의 차이로 coset의 동일함을 판단하는 명제가 있었다.

$$
\vec{x} + W = \vec{y} + W \iff \vec{x} - \vec{y} \in W
$$

 명제가 양쪽 방향이기 때문에 대우를 생각해보면 다음과 같다.

$$
\vec{x} + W \neq \vec{y} + W \iff \vec{x} - \vec{y} \notin W
$$

따라서 $\vec{x_i} - \vec{x_j} \notin N(A)$이면 $\vec{x_i}$와 $\vec{x_j}$는 다른 coset에 속한다. 즉 $U$에 속하는 모든 벡터들은 서로 다른 coset들에 속한다. 다르게 말하면 모든 벡터가 서로 다른 coset을 대표한다. 또한 $\vec{x_i} - \vec{x_j} \notin N(A)$이기 때문에 $A(\vec{x_i} - \vec{x_j}) \neq \vec{0}$이다. 즉 $A\vec{x_i} \neq A\vec{x_j}$이다. 서로 다른 coset에 속하면 변환 후에 서로 다른 벡터가 된다.

정리하면 $U$의 모든 벡터들은 서로 다른 coset들을 대표한다.  $\mathbb{R}^n$에 속하는 임의의 벡터는 이 coset들 중 하나에 속한다. 같은 coset에 속한 벡터들은 같은 벡터로 변환되므로, 임의의 벡터가 변환되는 것을 $U$에 속한 벡터가 변환되는 거로 바꿔서 볼 수 있다. 즉 $U$의 모든 벡터들이 변환되는 것을 이해하면 $\mathbb{R}^n$의 모든 벡터들이 어떻게 변환되는 건지 이해할 수 있다.
