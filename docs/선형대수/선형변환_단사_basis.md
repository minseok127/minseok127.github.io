---
layout: default
title: 선형변환의 단사와 basis
parent: 선형대수
nav_order: 36
---

# 선형변환의 단사와 basis

---

### 질문

- basis를 선형변환하면 basis인가

---

[차원 정리]({% link docs/선형대수/차원_정리.md %}) 페이지에서는 basis를 선형변환하면 basis인가에 대한 질문을 $T: \mathbb{R}^n \rightarrow \mathbb{R}^m$에서 했다. 이에 대한 답은 정확히 말하면 $N(T)$의 basis를 포함한 $\mathbb{R}^n$의 basis에 대해서, $N(T)$의 basis를 제외한 나머지 벡터들은 선형변환 후 $C(T)$의 basis가 된다는 거였다. 일반적인 벡터공간에 대해서도 이것이 성립하는지 알아보자.

선형변환 $T: V \rightarrow W$에서 정의역은 벡터공간 $V$, 공역은 벡터공간 $W$, 치역은 벡터공간 $Im(T)$이다. $Im(T) \subset W$는 항상 성립한다. 만약 $W \subset Im(T)$도 성립하면 $W = Im(T)$이다. 위에서 했던 질문을 일반적인 벡터공간에 대해 다시 쓰면, $N(T)$의 basis를 포함한 $V$의 basis에 대해서, $N(T)$의 basis를 제외한 나머지 벡터들이 선형변환 후 $Im(T)$의 basis가 되는가?

이 질문에 답하기 위해 사용할 수 있는 정리를 먼저 보자. 이건 모든 선형변환에 대해 성립한다. 선형변환 $T$의 정의역 $V$에 대해 $V = span(\vec{v_1}, ... , \vec{v_n})$이라고 하자. $\vec{v_1}, ... , \vec{v_n}$은 선형독립일 수도 있고 선형종속일 수도 있다. 물론 basis가 아닐 수도 있다. 이때 다음이 성립한다.

$$
Im(T) = span(T(\vec{v_1}), ... , T(\vec{v_n}))
$$

$Im(T) = \set{T(\vec{v}) : \vec{v} \in V}$이므로 $V$의 임의의 벡터를 선형결합 $c_1\vec{v_1} + ... + c_n\vec{v_n}$으로 표현할 때, $Im(T)$의 모든 벡터는 $T(c_1\vec{v_1} + ... + c_n\vec{v_n})$ 형태로 표현할 수 있다. 선형변환 성질에 따라 이건 $c_1T(\vec{v_1}) + ... + c_nT(\vec{v_n})$과 같다. 즉 $Im(T)$의 모든 벡터가 $span(T(\vec{v_1}), ... , T(\vec{v_n}))$에 속하므로 $Im(T) \subset span(T(\vec{v_1}), ... , T(\vec{v_n}))$이다. 반대로 $span(T(\vec{v_1}), ... , T(\vec{v_n}))$의 모든 벡터는 $c_1T(\vec{v_1}) + ... + c_nT(\vec{v_n})$ 형태로 표현할 수 있다. 선형변환 성질에 따라 이건 $T(c_1\vec{v_1} + ... + c_n\vec{v_n})$과 같고, $c_1\vec{v_1} + ... + c_n\vec{v_n}$은 $V$의 원소이기 때문에, 이 벡터는 $Im(T)$의 정의를 만족한다. 즉  $span(T(\vec{v_1}), ... , T(\vec{v_n})) \subset Im(T)$이다. 포함관계가 양쪽으로 성립하기에 $Im(T) = span(T(\vec{v_1}), ... , T(\vec{v_n}))$이다.

이걸 $V$의 basis $B = \set{\vec{b_1}, ... , \vec{b_n}}$에 대해 생각해보자. 위 정리에 따라 $Im(T) = span(T(\vec{b_1}), ... , T(\vec{b_n}))$이다. 따라서 $T(\vec{b_1}), ... , T(\vec{b_n})$이 선형독립이면 $Im(T)$의 basis이다. 그런데 [선형변환의 단사]({% link docs/선형대수/선형변환_단사.md %}) 페이지에서는 다음 명제가 참임을 증명했다.

$$
\text{T가 단사} \implies \text{선형독립인 벡터들을 선형변환해도 선형독립}
$$

이에 따라 만약 $T$가 단사라면 $T(\vec{b_1}), ... , T(\vec{b_n})$은 선형독립이므로 $Im(T)$의 basis가 된다. 즉 다음 명제가 성립한다.

$$
\text{T가 단사} \implies T(\vec{b_1}), ... , T(\vec{b_n}) \text{이 Im(T)의 basis}
$$

이 명제의 역은 성립할까? [선형변환의 단사]({% link docs/선형대수/선형변환_단사.md %}) 페이지의 마지막에서는 일반적인 선형독립 벡터집합이 변환 후 선형독립이 되어도 $T$가 단사가 아닌 반례가 존재하는 것을 봤다.

그런데 특이한 점은 이 선형독립 벡터집합이 $T$의 정의역인 $V$의 basis라는 조건이 붙으면 반례가 존재하지 않는다. 즉 정의역 $V$의 basis가 선형변환 후에도 선형독립이면 $T$는 단사이다. 증명은 다음과 같다. [선형변환의 단사]({% link docs/선형대수/선형변환_단사.md %}) 페이지에 따르면 다음 필요충분조건이 참이다.

$$
span(\vec{b_1}, ... , \vec{b_n}) \cap N(T) = \set{\vec{0}} \iff T(\vec{b_1}), ... , T(\vec{b_n}) \text{이 선형독립}
$$

$\vec{b_1}, ... , \vec{b_n}$이 정의역 $V$의 basis라고 가정해보자. $V = span(\vec{b_1}, ... , \vec{b_n})$이다. 따라서 $T(\vec{b_1}), ... , T(\vec{b_n})$이 선형독립이라는 조건이 참이면, $span(\vec{b_1}, ... , \vec{b_n}) \cap N(T) = \set{\vec{0}}$라는 조건도 참이라는 것이고, 이 조건은 $V \cap N(T) = \set{\vec{0}}$로 바꿔적을 수 있다. 그런데 $N(T) \subset V$이므로 교집합이 $\vec{0}$뿐이라는 것은 $N(T) = \set{\vec{0}}$인 것이다. 그리고 $N(T) = \set{\vec{0}}$ 조건은 $T$가 단사라는 조건과 필요충분조건이다. 정리하면 $\vec{b_1}, ... , \vec{b_n}$이 정의역 $V$의 basis라는 가정 하에서 $T(\vec{b_1}), ... , T(\vec{b_n})$이 선형독립이라는 명제가 참이면, $T$가 단사라는 명제도 참이다. 그리고 $Im(T) = span(T(\vec{b_1}), ... , T(\vec{b_n}))$은 항상 참이기에 $T(\vec{b_1}), ... , T(\vec{b_n})$이 선형독립인 것은 $Im(T)$의 basis라는 것과 필요충분조건이다. 따라서 다음 조건문이 참이다.

$$
T(\vec{b_1}), ... , T(\vec{b_n}) \text{이 Im(T)의 basis} \implies \text{T가 단사}
$$

양쪽 방향이 참이므로 필요충분조건이다.

$$
\text{T가 단사} \iff T(\vec{b_1}), ... , T(\vec{b_n}) \text{이 Im(T)의 basis}
$$

만약에 어떤 벡터집합 $\vec{v_1}, ... , \vec{v_k}$가 $V$의 basis가 아니면서 선형독립이었다면? 그러면 $span(\vec{v_1}, ... , \vec{v_k})$는 $V$의 부분공간이지만 $V$와 같지는 않다. 따라서 $span(\vec{v_1}, ... , \vec{v_k}) \cap N(T) = \set{\vec{0}}$가 참이라도 $N(T) \neq \set{\vec{0}}$일 수 있다. 다르게 말하면 $span(\vec{v_1}, ... , \vec{v_k}) \cap N(T) = \set{\vec{0}}$가 참이니 $T(\vec{v_1}), ... , T(\vec{v_k})$는 선형독립이지만 $T$가 단사인지 아닌지는 모르는 것이다. 이게 [선형변환의 단사]({% link docs/선형대수/선형변환_단사.md %}) 페이지 마지막에 나온 반례의 상황이다.

이걸 위에서 했던 질문의 관점에서 생각해보자. $T$가 단사이면 $N(T) = \set{\vec{0}}$이다. 그리고 $\set{\vec{0}}$의 basis는 $\emptyset$이다. 따라서 $T$가 단사일 경우, $V$의 basis에서 $N(T)$의 basis를 제외한 나머지 벡터들은 $V$의 basis 자체이다. 그리고 이 벡터들은 $T$로 변환된 후 $Im(T)$의 basis가 된다.

$T$가 단사가 아니라면? 그러면 $V$의 basis에서 $N(T)$의 basis를 제외한 나머지 벡터들이 $span$하는 벡터공간 $V^\prime$에 대해, 새로운 선형변환 $T^\prime : V^\prime \rightarrow W$을 생각하면 된다. 대응 관계는 유지시켜서 $T(\vec{v}) = T^\prime(\vec{v})$이다. 이때 $T^\prime$은 단사일까? 만약 $V^\prime \cap N(T) \neq \set{\vec{0}}$라고 가정한다면, 다음 수식을 만족하는 $\vec{0}$가 아닌 벡터가 존재한다. $\vec{v}^\prime$은 $V^\prime$의 basis이고 $\vec{n}$은 $N(T)$의 basis이다.

$$
\sum c_i\vec{v_i}^\prime = \sum d_j\vec{n_j}
$$

그런데 두 basis의 합집합은 $V$의 basis이므로 위 수식에서 모든 계수가 0이어야 한다는 모순이 발생한다. 따라서 $V^\prime \cap N(T) = \set{\vec{0}}$이다. 정리하면 $V^\prime$의 basis $\vec{v_1}^\prime, ...,\vec{v_k}^\prime$에 대해 $T^\prime(\vec{v_1}^\prime), ...,T^\prime(\vec{v_k}^\prime)$는 선형독립이고, $Im(T^\prime) = span(T^\prime(\vec{v_1}^\prime), ...,T^\prime(\vec{v_k}^\prime))$이므로, $T^\prime(\vec{v_1}^\prime), ...,T^\prime(\vec{v_k}^\prime)$는 $Im(T^\prime)$의 basis이다. 또한 위에서 본 필요충분조건에 따라 $T^\prime$은 단사이다. 

그런데 $T(\vec{v}) = T^\prime(\vec{v})$니까 $T^\prime(\vec{v_1}^\prime), ...,T^\prime(\vec{v_k}^\prime)$은 $T(\vec{v_1}^\prime), ...,T(\vec{v_k}^\prime)$와 같다. 즉 $T(\vec{v_1}^\prime), ...,T(\vec{v_k}^\prime)$는 $Im(T^\prime)$의 basis이다. 그리고 $Im(T)$는 $T(\vec{v_i}^\prime)$들과 $T(\vec{n_j})$들의 선형결합이고, $T(\vec{n_j})$들의 선형결합은 항상 $\vec{0}$이므로 $Im(T)$는 $T(\vec{v_i}^\prime)$들의 $span$, 즉 $Im(T^\prime)$과 같은 벡터공간이다. 즉 두 선형변환의 정의역은 달라도 치역은 동일하다. 정리하면 $T(\vec{v_1}^\prime), ...,T(\vec{v_k}^\prime)$는 $Im(T^\prime)$의 basis인데, $Im(T^\prime)$은 $Im(T)$와 같은 벡터공간이니까 $Im(T)$의 basis라고도 말할 수 있다. $T$가 단사가 아니더라도 나머지 벡터들은 선형 변환 후 $Im(T)$의 basis가 된다.

$T: \mathbb{R}^n \rightarrow \mathbb{R}^m$에서 다시 생각해보자. $N(T)$의 basis를 포함한 $\mathbb{R}^n$의 basis에 대해서, $N(T)$의 basis를 제외한 나머지 벡터들은 선형변환 후 $C(T)$의 basis가 된다. 이 말은 $T$가 단사라는 것이 아니다. 윗 문단에 나온 것처럼, $\mathbb{R}^n$의 basis에서 $N(T)$의 basis를 제외한 나머지 벡터들이 $span$하는 공간을 $V^\prime$라고 할 때, $T^\prime : V^\prime \rightarrow W$라는 선형변환이 단사인 것이다. [N(A)의 coset과 선형변환]({% link docs/선형대수/N(A)_coset.md %}) 페이지와 [N(A)의 직교여공간과 선형변환]({% link docs/선형대수/N(A)_직교여공간_선형변환.md %}) 페이지의 관점에서는 $U$를 $C(A)$로 변환하는 것이 단사라는 것이다. [행공간 (row space)]({% link docs/선형대수/row_space.md %}) 페이지의 관점에서는 $C(A^T) = N(A)^\perp$를 $C(A)=N(A^T)^\perp$로 변환하는 것이 단사라는 것이다.
