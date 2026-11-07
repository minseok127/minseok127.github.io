---
layout: default
title: 선형변환의 전사와 basis
parent: 선형대수
nav_order: 37
---

# 선형변환의 전사와 basis

---

### 질문

- 선형변환의 전사가 무엇인가
- 정의역의 basis를 선형변환하는 것과 전사는 어떻게 연결되나

---

선형변환 $T: V \rightarrow W$가 전사(surjective, onto)라는 것은 모든 $\vec{w} \in W$에 대해서 $\vec{w} = T(\vec{v})$인 $\vec{v} \in V$가 존재하는 것을 뜻한다. 이건 공역과 치역이 같다는 것과 필요충분조건이다. 다음과 같이 쓸 수 있다.

$$
\text{T가 전사} \iff Im(T) = W
$$

$T$에 상관없이 $Im(T) \subset W$이므로, $W \subset Im(T)$임을 보이면 $Im(T) = W$이다. 만약 $T$가 전사라면 $W$에 속한 모든 벡터가 $T(\vec{v})$의 형태로 나타날 수 있고, 이건 $Im(T) = \set{T(\vec{v}) : \vec{v} \in V}$의 정의를 만족하므로 $Im(T)$에 속한다. 반대로 $Im(T) = W$가 참이면 $W$의 모든 벡터들이 $Im(T)$에 속한다는 것이고, $Im(T)$에 속한다는 것은 $T(\vec{v})$ 형태로 나타날 수 있다는 것이므로, 전사의 정의를 만족한다. 양쪽 조건문이 참이기에 위의 필요충분조건이 성립한다.

정의역 $V$의 basis가 $\vec{b_1}, ... , \vec{b_n}$이라고 치자. 그러면 $V = span(\vec{b_1}, ... , \vec{b_n})$이다. [선형변환의 단사와 basis]({% link docs/선형대수/선형변환_단사_basis.md %}) 페이지에서는 다음 필요충분조건이 성립함을 봤다.

$$
\text{T가 단사} \iff T(\vec{b_1}), ... , T(\vec{b_n}) \text{이 Im(T)의 basis}
$$

그런데 $T$가 전사인 것은 $Im(T) = W$와 필요충분조건이다. 따라서 다음 조건문이 참이다.

$$
\text{T가 단사이면서 전사} \implies T(\vec{b_1}), ... , T(\vec{b_n}) \text{이 W의 basis}
$$

반대로 $T(\vec{b_1}), ... , T(\vec{b_n})$이 $W$의 basis라고 가정하자. 그러면 $W = span(T(\vec{b_1}), ... , T(\vec{b_n}))$이고, $T(\vec{b_1}), ... , T(\vec{b_n})$은 선형독립이다. 그런데 [선형변환의 단사와 basis]({% link docs/선형대수/선형변환_단사_basis.md %}) 페이지에 따르면 $Im(T) = span(T(\vec{b_1}), ... , T(\vec{b_n}))$이므로, $Im(T) = W$이다. 이건 $T$가 전사인 것과 필요충분조건이다. 따라서 다음 조건문이 성립한다.

$$
T(\vec{b_1}), ... , T(\vec{b_n}) \text{이 W의 basis} \implies \text{T가 전사}
$$

또한 [선형변환의 단사와 basis]({% link docs/선형대수/선형변환_단사_basis.md %}) 페이지에 따르면 정의역의 basis를 선형변환한 것이 선형독립인 것은 $T$가 단사인 것과 필요충분조건이다. 따라서 다음 조건문도 성립한다.

$$
T(\vec{b_1}), ... , T(\vec{b_n}) \text{이 W의 basis} \implies \text{T가 단사}
$$

정리하면 다음과 같다.

$$
T(\vec{b_1}), ... , T(\vec{b_n}) \text{이 W의 basis} \implies \text{T가 단사이면서 전사}
$$

조건문이 양쪽으로 성립하므로 필요충분조건이다.

$$
\text{T가 단사이면서 전사} \iff T(\vec{b_1}), ... , T(\vec{b_n}) \text{이 W의 basis}
$$

$T$가 단사이면 정의역의 basis는 변환 후 치역의 basis가 된다. 단사이면서 전사이기까지하면 정의역의 basis는 변환 후 공역의 basis가 된다. 이처럼 전사이면서 단사인 사상을 전단사(bijective)라고 한다.
