---
layout: default
title: N(A)의 직교여공간과 선형변환
parent: 선형대수
nav_order: 29
---

# N(A)의 직교여공간과 선형변환

---

### 질문

- $N(A)$의 직교여공간은 선형변환 이해에 어떤 도움이 되나?

---

$N(A)$를 기준으로 coset을 정의하자. 어떤 벡터 $\vec{x}$가 속한 coset을 생각해보자. $\vec{x} + N(A)$로 표현한다. $\vec{x}$를 $N(A)$에 정사영한 벡터 $\vec{x_\Vert}$와 그것에 수직인 벡터 $\vec{x_\perp}$로 분해하자. $\vec{x} - \vec{x_\perp} = \vec{x_\Vert} \in N(A)$이므로 $\vec{x_\perp}$는 $\vec{x}$와 같은 coset에 속한다. 같은 coset에 속하는 모든 벡터는 해당 coset을 대표할 수 있다. 따라서 $\vec{x} + N(A) = \vec{x_\perp} + N(A)$이다. 즉 해당 coset에 속하는 모든 벡터들은 $\vec{x_\perp} + N(A)$꼴로 표현될 수 있다. 다르게 말하면 모든 벡터들을 $N(A)^\perp \oplus N(A)$ 형태로 분해할 경우, 같은 coset에 속하는 벡터들은 전부 동일한 벡터 $\vec{x_\perp} \in N(A)^\perp$로 분해된다.

$\vec{x_\perp} + N(A)$에 속하는 임의의 벡터 길이를 생각해보자. $\vec{n} \in N(A)$일 때, 길이 제곱은 다음과 같다.

$$
\lVert \vec{x_\perp} + \vec{n} \rVert^2 = \lVert \vec{x_\perp} \rVert^2 + 2(\vec{x_\perp} \cdot \vec{n}) + \lVert \vec{n} \rVert^2
$$

$\vec{x_\perp} \cdot \vec{n} = 0$이므로 $\lVert \vec{x_\perp} + \vec{n} \rVert^2 = \lVert \vec{x_\perp} \rVert^2 + \lVert \vec{n} \rVert^2$이다. 이 값이 가장 작은 경우는 $\vec{n}$가 $\vec{0}$일 때이다. 즉 같은 coset에 속한 벡터들 중 가장 짧은 벡터는 $N(A)^\perp$에 속하는 $\vec{x_\perp}$이다.

$\mathbb{R}^n$의 단위구를 정의하면 $\set{\vec{x} \in \mathbb{R}^n : \lVert \vec{x} \rVert = 1}$이다. 이걸 [N(A)의 coset과 선형변환]({% link docs/선형대수/N(A)_coset.md %}) 페이지처럼 부분공간 $U$로 치환해서 생각해보자. 그러면 단위구에 대한 선형변환을 부분공간 $U$의 선형변환으로 바꿔 생각할 수 있다. 근데 단위구를 부분공간 $U$로 치환하면 어떤 모습일까? 이를 부분적으로 파악하기 위해 $N(A)^\perp$의 단위구 벡터를 부분공간 $U \neq N(A)^\perp$로 치환해보자. 밑에 그림에서 초록색이 주황색으로 바뀌는 것이다.

![N(A)_직교여공간_coset.png](https://minseok127.github.io/docs/선형대수/N(A)_직교여공간_선형변환.png)

$U$에는 속하지 않고 $N(A)^\perp$에만 속하는 벡터들은 치환하면 길이가 늘어난다. 왜냐면 같은 coset에 속한 벡터들 중 가장 짧은 것은 $N(A)^\perp$에 속한 벡터이기 때문이다. $N(A)^\perp$와 $U$에 모두 속하는 벡터들은 치환해도 벡터가 바뀌지 않으니 길이 또한 1로 동일하다. $U \cap N(A)^\perp \neq \set{ \vec{0}}$이면 어떤 벡터는 길어지고 어떤 벡터는 길이가 여전히 1이니 단위구가 아니다. $U \cap N(A)^\perp = \set{ \vec{0}}$이면 모든 벡터가 1보다 길어지니 마찬가지로 단위구가 아니다. $N(A)^\perp$의 단위구가 $U$의 단위구에 대응되지 않고, $N(A)^\perp$의 단위구는 $\mathbb{R}^n$의 단위구에 포함되므로, $\mathbb{R}^n$의 단위구가 $U$의 단위구에 대응되지 않는다.

$U = N(A)^\perp$이면 어떨까? $N(A)^\perp$의 단위구 벡터들은 치환 후에도 여전히 길이가 1일 것이다. $N(A)^\perp$에 속하지 않는 $\mathbb{R}^n$의 단위구 벡터들은 어떨까? 다음과 같은 벡터들에 대해 생각해보자.

$$
\set{ \vec{x} \in \mathbb{R}^n \setminus N(A)^\perp : \lVert \vec{x} \rVert = 1}
$$

벡터들은 저마다 어떤 coset에 속한다. 그리고 해당 coset에서 가장 짧은 벡터는 $N(A)^\perp$에 속한 벡터이다. 따라서 이 벡터들을 같은 coset의 $N(A)^\perp$ 벡터로 치환하면 길이가 1보다 작아진다. 이렇게 치환된 벡터들은 $N(A)^\perp$ 단위구 내부를 가득 채울까? $N(A)^\perp$에서 길이가 1보다 작은 모든 벡터들을 생각해보자. 다음과 같이 정의된다.

$$
\set{\vec{y} \in N(A)^\perp : \lVert \vec{y} \rVert < 1}
$$

$N(A) \neq \set{\vec{0}}$이라고 치자. 그리고 $N(A)$에 속하면서 길이가 1인 벡터들을 $\vec{n}$라고 하자. $\vec{y}, \vec{n}$을 사용해서 $\vec{x}$를 다음과 같이 정의해보자.

$$
\vec{x} = \vec{y} + (\sqrt{1 - \lVert \vec{y} \rVert^2}) \vec{n}
$$

이건 $\vec{y} + N(A)$ 꼴이다. 그리고 $\lVert \vec{x} \rVert = 1$이다. 즉 길이가 1보다 작은 $N(A)^\perp$의 모든 벡터들에 대해서, 각 벡터가 속한 coset에는 길이가 1인 $\mathbb{R}^n$의 벡터가 존재한다. 즉 $N(A)^\perp$에 속하지 않는 $\mathbb{R}^n$의 단위구 벡터들을 $N(A)^\perp$로 치환하면 $N(A)^\perp$의 단위구 내부를 가득 채운다.

정리하면 $\mathbb{R}^n$의 단위구는 $N(A)^\perp$의 단위구 및 내부 전체에 대응된다. 즉 입력 공간 단위구의 선형변환을 이해하는 것은 $N(A)^\perp$ 단위구와 이를 채우는 벡터들의 선형변환을 이해하는 것과 같다. $N(A)^\perp$가 아닌 다른 부분공간을 사용해도 입력 공간 단위구의 선형변환을 이해할 수 있지만, 이 경우는 변환되는 대상이 단위구가 아니다.
