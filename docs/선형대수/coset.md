---
layout: default
title: coset
parent: 선형대수
nav_order: 27
---

# coset

---

### 질문

- 부분공간의 coset이 뭔가?
- coset끼리 겹칠 수 있나?
- 모든 벡터들은 coset에 속하나?

---

coset은 co + set이다. co는 짝을 이룬다는 의미이고, set과 함께 생각하면 짝을 이루는 집합이라는 뜻이다. coset을 번역하면 잉여류라고 한다. 잉여 + 류이고 해석하면 나머지에 따른 분류이다. 예를 들어 정수를 3으로 나눈 나머지로 분류해보자. $\set{...,0,3,6,...}$, $\set{...,1,4,7,...}$, $\set{...,2,5,8,...}$ 이렇게 겹치지 않는 3개의 집합으로 분류된다. 부분공간에 대해서도 coset을 생각할 수 있다. $W$가 $\mathbb{R}^n$의 부분공간이고 $\vec{x} \in \mathbb{R}^n$일 때, $W$의 coset은 $\lbrace \vec{x} + \vec{w} : \vec{w} \in W \rbrace$이다. 즉 $W$의 모든 벡터들을 $\vec{x}$만큼 평행이동시킨 집합이다.

부분공간 $W$의 coset은 부분공간일까? coset에 속하는 어떤 벡터 $\vec{x} + \vec{w_1}$와 이것의 스칼라배인 $2(\vec{x} + \vec{w_1})$를 생각해보자. $2(\vec{x} + \vec{w_1})$이 $\vec{x} + W$에 속한다면 $W$에 속하는 어떤 벡터 $\vec{w}$에 대해 $2(\vec{x} + \vec{w_1}) = \vec{x} + \vec{w}$로 표현될 수 있다. 근데 이걸 정리하면 $\vec{x} = \vec{w} - 2\vec{w_1}$이다. 만약 $\vec{x} \notin W$라면 성립하지 않으므로, coset은 모든 선형결합에 닫혀있다고 할 수 없다. 즉 $\vec{x} \notin W$이면 coset은 부분공간이 아니다.

서로 다른 두 벡터 $\vec{x}, \vec{y}$가 있다. 이 벡터들로 만들어지는 부분공간 $W$의 coset을 생각해보자. $\vec{x} + W$와 $\vec{y} + W$로 표현한다. 만약 두 집합이 같다면, $W$에 속하는 임의의 벡터 $\vec{w_x}$에 대해서 $\vec{x} + \vec{w_x} \in \vec{y} + W$이다. 즉 $\vec{x} + \vec{w_x}$를 $\vec{y}$와 $W$에 속한 어떤 벡터 $\vec{w_y}$의 합, $\vec{x} + \vec{w_x} = \vec{y} + \vec{w_y}$으로 적을 수 있다. 식을  $\vec{x} - \vec{y} = \vec{w_y} - \vec{w_x}$로 바꿔서 보면 $\vec{w_y} - \vec{w_x} \in W$이므로  $\vec{x} - \vec{y} \in W$이다. 다음 명제가 성립한다.

$$
\vec{x} + W = \vec{y} + W \implies \vec{x} - \vec{y} \in W
$$

반대 방향도 성립하는지 보자. $\vec{x} - \vec{y}$가 $W$에 속한 어떤 벡터이다. $\vec{x} + W$는 $\vec{y} + (\vec{x} - \vec{y}) + W$와 같다. 이때 $W$에 속한 모든 벡터들에 $\vec{x} - \vec{y}$를 더한 벡터들을 원소로 는 집합 $W^\prime$을 생각해보자. $W^\prime = (\vec{x} - \vec{y}) + W$이다. 이건 부분공간일까? 이 집합에 속하는 두 벡터 $(\vec{x} - \vec{y}) + \vec{w_1}$과 $(\vec{x} - \vec{y}) + \vec{w_2}$의 선형결합을 다음과 같이 정리해보자.

$$
\begin{aligned}
\alpha\lbrace(\vec{x} - \vec{y}) + \vec{w_1} \rbrace + \beta \lbrace(\vec{x} - \vec{y}) + \vec{w_2} \rbrace \\
= (\vec{x} - \vec{y}) + (\alpha + \beta - 1)(\vec{x} - \vec{y}) + \alpha \vec{w_1} + \beta \vec{w_2}
\end{aligned}
$$

$(\alpha + \beta - 1)(\vec{x} - \vec{y}) + \alpha \vec{w_1} + \beta \vec{w_2}$은 $W$에 속하는 벡터들의 선형결합이기 때문에, 결국 $(\vec{x} - \vec{y}) + W$꼴이 된다. 즉 $W^\prime$은 선형결합에 닫혀있다. 따라서 $W^\prime$은 부분공간이고 coset인 $\vec{y} + W^\prime$를 생각할 수 있다. 그리고 $\vec{x} - \vec{y}$도 $W$에 속하기 때문에 $W^\prime$의 모든 원소들은 $W$에 속한다. 즉 $W^\prime \subset W$이다. 따라서 $\vec{y} + W^\prime \subset \vec{y} + W$이다. $\vec{x} + W = \vec{y} + W^\prime$이었으니 $\vec{x} + W \subset \vec{y} + W$이다.

$\vec{x} - \vec{y} \in W$이면 $\vec{y} - \vec{x}$도 $W$에 속한다. $\vec{y} + W$는 $\vec{x} + (\vec{y} - \vec{x}) + W$와 같다. 위와 동일한 논리를 거치면 $\vec{y} +W \subset \vec{x} + W$라고 할 수 있다. 서로가 서로에게 포함되기 때문에 $\vec{x} + W = \vec{y} + W$이다. 따라서 다음 명제가 성립한다.

$$
\vec{x} - \vec{y} \in W \implies \vec{x} + W = \vec{y} + W
$$

명제가 양방향으로 성립하기 때문에 정리하면 다음과 같다.

$$
\vec{x} + W = \vec{y} + W \iff \vec{x} - \vec{y} \in W
$$

서로 다른 벡터들에 의해 만들어지는 coset이 같은 집합이라면, 두 벡터를 뺀 것이 $W$에 속한다. 반대로 두 벡터를 뺀 것이 $W$에 속하면, 두 벡터가 만들어내는 coset은 같은 집합이다. 그리고 여기서 본 것처럼 coset을 나타내는 벡터는 하나로 정해진 것이 아니다. 위 성질을 만족하는 벡터들 중 어떤 것을 사용해도 같은 coset을 표현할 수 있다.

모든 벡터들이 coset에 속할까? 이건 간단한데, 자기 자신을 기준으로 coset을 만들 수 있기 때문에 모든 벡터들은 어떤 coset에 속한다고 할 수 있다. 그러면 몇개의 coset에 속할 수 있을까? 이를 위해 서로 다른 coset이 같은 원소를 공유할 수 있는지를 보자. $\vec{x} + W \neq \vec{y} + W$라고 하자. $\vec{z} \in \mathbb{R}^n$가 $\vec{x} + W$에도 속하고 $\vec{y} + W$에도 속한다고 가정하자.

$$
\begin{aligned}
\vec{z} \in \vec{x} + W \\
\vec{z} \in \vec{y} + W
\end{aligned}
$$

이건 $\vec{z} - \vec{x} \in W$, $\vec{z} - \vec{y} \in W$라는 것과 동일하다. 그러면 위의 명제에 따라 $\vec{z} + W = \vec{x} + W = \vec{y} + W$인 것인데, $\vec{x} + W \neq \vec{y} + W$라는 조건에 위배된다. 따라서 같은 원소를 포함하는 서로 다른 coset은 존재하지 않는다. 정리하면 모든 벡터는 어떤 coset에 속하고 서로 다른 coset은 같은 벡터를 공유하지 않으므로, $\mathbb{R}^n$에 속하는 모든 벡터들은 겹치지 않는 coset들로 분류되는 것을 알 수 있다.
