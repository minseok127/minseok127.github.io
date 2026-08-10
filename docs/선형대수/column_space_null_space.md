---
layout: default
title: Column Space와 Null Space
parent: 선형대수
nav_order: 9
---

# Column Space와 Null Space

---

#### 질문

- Column Space와 Null Space가 무엇인지?
- Column Space와 Null Space는 덧셈과 스칼라곱에 닫혀있나?

---

$span$이란 벡터 집합을 받아서 공간을 만들어내는 연산이다.

$$
span(\vec{u_1}, \vec{u_2}, ... \vec{u_n}) = \lbrace c_1\vec{u_1} + c_2\vec{u_2} + ... c_n\vec{u_n}: c_i \in \mathbb{R} \rbrace
$$

어떤 행렬 $A$가 $m \times n$이라고 하자. $A$의 Column Space, $C(A)$는 $A$의 열벡터들이 만들어내는 $span$이다. 출력 벡터들로 구성되어있기 때문에 $C(A)$는 $\mathbb{R}^m$에 있다. $A$의 열벡터들을 $\vec{v_1}, \vec{v_2}, ... \vec{v_n}$이라고 표현한다면 다음과 같다.

$$
C(A) = span(\vec{v_1}, \vec{v_2}, ... \vec{v_n}) = \lbrace A\vec{x} : \vec{x} \in \mathbb{R}^n \rbrace
$$

Null Space, $N(A)$는 $A\vec{x} = 0$을 만족하는 $\vec{x}$들의 집합을 의미한다. 이 집합은 입력 벡터들의 집합이므로 $\mathbb{R}^n$에 있다. $\vec{0}$은 $A$의 형태와 상관없이 항상 $N(A)$에 속한다. $\vec{0}$이 아닌 벡터들은 경우에 따라 null space에 속할 수도, 아닐 수도 있다.

$$
N(A) = \lbrace \vec{x} : A\vec{x} = \vec{0} \rbrace
$$

---

집합 $S$가 어떤 연산에 대해 닫혀있다는 것은 무슨 의미인가? 원소들에 연산을 적용한 결과 또한 같은 집합에 속한다는 것이다. $C(A)$와 $N(A)$는 둘 다 덧셈과 스칼라곱에 닫혀있을까? 즉 어떤 두 벡터 $\vec{x_1}, \vec{x_2}$가 집합의 원소들 일 때, $\alpha \vec{x_1} + \beta \vec{x_2}$도 같은 집합에 속할까?

Column space부터 생각해보자. $C(A)$의 원소들은 $\mathbb{R}^m$에 있다. 이 집합에 속하는 원소들 $A\vec{x}, A\vec{y}$을 생각해보자. 벡터 $\vec{x}$의 $i$번째 성분을 $x_i$라고 하고, 행렬 $A$의 $i$번째 열벡터를 $\vec{v_i}$라고 표현하자. 그러면 두 원소는 다음과 같이 표현된다. 

$$
\begin{aligned}
A\vec{x} = \sum_i x_{i}\vec{v_{i}} \\
A\vec{y} = \sum_i y_{i}\vec{v_{i}}
\end{aligned}
$$

만약 이 둘의 덧셈과 스칼라곱 연산 결과가 같은 열벡터들의 조합로 표현될 수 있다면 $C(A)$는 덧셈과 스칼라곱에 닫혀있는 것이다. 수식을 전개하면 다음과 같다.

$$
\alpha \sum_{i} x_{i}\vec{v_{i}} + \beta \sum_{i} y_{i}\vec{v_{i}} = \sum_{i} (\alpha x_{i} + \beta y_{i})\vec{v_i}
$$

위의 수식처럼 연산 결과인 $\alpha A\vec{x} + \beta A\vec{y}$ 또한 원래 $C(A)$ 에 속하는 원소들과 같은 방식으로 표현될 수 있기 때문에 $C(A)$는 덧셈과 스칼라곱에 닫혀있다.

다음은 $N(A)$에 대해 생각해보자. $N(A)$의 원소들은 $\mathbb{R}^n$에 있다. 이 집합에 속하는 원소들 $\vec{x_1}, \vec{x_2}$을 생각해보자. 이 원소들이 $N(A)$에 속한다는 것은 $A\vec{x_1} = A\vec{x_2} = \vec{0}$라는 의미이다. 만약에 연산 결과인 $\alpha \vec{x_{1}} + \beta \vec{x_{2}}$도 $A$로 변환했을 때 영벡터가 된다면 $N(A)$는 덧셈과 스칼라곱에 닫혀있는 것이다.

$$
A(\alpha\vec{x_1} + \beta\vec{x_2}) = \alpha A\vec{x_1} + \beta A\vec{x_2} = \alpha \vec{0} + \beta \vec{0} = \vec{0}
$$

연산 결과인 $\alpha \vec{x_{1}} + \beta \vec{x_{2}}$ 또한 $A$ 변환 후 영벡터가 되기 때문에 $N(A)$는 덧셈과 스칼라곱에 닫혀있다.
