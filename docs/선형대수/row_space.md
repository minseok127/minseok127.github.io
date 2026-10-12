---
layout: default
title: Row Space
parent: 선형대수
nav_order: 30
---

# Row Space

---

### 질문

- 선형변환 $A$와 $A^T$가 만드는 부분공간들은 어떤 관계가 있나?

---

Row space는 행벡터들로 만들어지는 부분공간이다. $m \times n$ 행렬 $A$에 대해서, $A^T$의 열벡터들이 $A$의 행벡터들이 되기 때문에 $C(A^T)$가 Row space이다. $A^T$는 $n \times m$이니까 $C(A^T) \subset \mathbb{R}^n$이다. 정리해보면 $N(A)$와 $C(A^T)$는 선형변환 $A$의 입력 공간인 $\mathbb{R}^n$에 포함되고, $N(A^T)$와 $C(A)$는 선형변환 $A$의 출력 공간인 $\mathbb{R}^m$에 포함된다.

행렬 $A$를 다음과 같이 $m$개의 행벡터들로 표현해보자. 각각의 벡터들은 $A^T$의 열벡터들이다.

$$
A = \begin{pmatrix}
\vec{r_1}^T \\
\vdots \\
\vec{r_m}^T
\end{pmatrix}
$$

$N(A)$에 속하는 임의의 벡터 $\vec{x}$는 $A\vec{x} = \vec{0}$을 만족한다. 이건 모든 $\vec{r_i}$와 $\vec{x}$의 내적값이 0이라는 것이다. $\vec{x}$가 $A^T$의 모든 열벡터와 수직이므로 $\vec{x} \in C(A^T)^\perp$이다. 따라서 $N(A) \subset C(A^T)^\perp$이다. 이번엔 반대로 $C(A^T)^\perp$에 속하는 임의의 벡터 $\vec{y}$를 생각해보자. 모든 $\vec{r_i}$들은 $C(A^T)$에 속하고, $\vec{y}$는 $C(A^T)$의 모든 벡터와 수직이므로 $A \vec{y} = \vec{0}$이다. 따라서 $C(A^T)^\perp \subset N(A)$이다. 포함관계가 양쪽으로 성립하기에 $N(A) = C(A^T)^\perp$이다.

행렬 $A^T$에 대해서도 같은 논리가 적용된다. $A^T$를 $n$개의 행벡터들로 표현해보자. 각각의 벡터들은 $A$의 열벡터들이다.

$$
A^T = \begin{pmatrix}
\vec{c_1}^T \\
\vdots \\
\vec{c_n}^T
\end{pmatrix}
$$

$N(A^T)$에 속하는 임의의 벡터 $\vec{x}$는 $A$의 모든 열벡터와 수직이므로 $\vec{x} \in C(A)^\perp$이다. 따라서 $N(A^T) \subset C(A)^\perp$이다. $C(A)^\perp$에 속하는 임의의 벡터 $\vec{y}$는 $A^T \vec{y} = \vec{0}$을 만족하므로 $C(A)^\perp \subset N(A^T)$이다. 따라서 $N(A^T) = C(A)^\perp$이다.

위에서 나온 두 식, $N(A) = C(A^T)^\perp$와 $N(A^T) = C(A)^\perp$에 $\perp$를 씌울 수 있는지 알아보자. 임의의 부분공간 $W$와 여기에 속하는 임의의 벡터 $\vec{w}$에 대해서, $\vec{w}$는 $W^\perp$의 모든 벡터들에 수직이다. 따라서 $\vec{w} \in (W^\perp)^\perp$이고, $W \subset (W^\perp)^\perp$이다. 이번에는 $(W^\perp)^\perp$에 속하는 임의의 벡터 $\vec{v}$를 생각해보자. [그람 슈미트 과정]({% link docs/선형대수/그람_슈미트.md %}) 페이지에서 본 것처럼 임의의 벡터는 $W \oplus W^\perp$로 나타낼 수 있으므로, $vec{v}$도 $W$에 속하는 어떤 벡터 $\vec{p}$와 $W^\perp$에 속하는 어떤 벡터 $\vec{q}$의 합으로 나타낼 수 있다. 즉 $\vec{v} = \vec{p} + \vec{q}$로 표현할 수 있다. $\vec{v}$는 $W^\perp$에 속하는 모든 벡터들에 수직이기에 $\vec{v} \cdot \vec{q} = 0$이다. $\vec{q}$는 $W$에 속하는 모든 벡터들에 수직이기에 $\vec{p} \cdot \vec{q} = 0$이다. 따라서 양변에 $\vec{q}$를 내적하면 $\lVert \vec{q} \rVert^2 = 0$이 된다. 즉 $\vec{q} = \vec{0}$이므로 $\vec{v} = \vec{p}$이다. $\vec{v}$가 $W$에 속하는 어떤 벡터와 같으므로 $(W^\perp)^\perp \subset W$이다. 포함관계가 양쪽으로 성립하기에 $W = (W^\perp)^\perp$이다. 

이 성질을 원래 보려던 두 식에 적용하면 $N(A)^\perp = C(A^T), N(A^T)^\perp = C(A)$이다. 근데 [차원 정리]({% link docs/선형대수/차원_정리.md %}) 페이지에서는 $\dim C(A) = n - \dim N(A)$인 것을 봤고, [그람 슈미트 과정]({% link docs/선형대수/그람_슈미트.md %}) 페이지에서는 $\dim N(A)^\perp = n - \dim N(A)$인 것을 봤다. 여기서 $N(A)^\perp = C(A^T)$를 기반으로 차원의 관계를 보면 다음과 같다.

$$
\dim C(A) = \dim C(A^T) = n - \dim N(A)
$$

$C(A) \subset \mathbb{R}^m$, $C(A^T) \subset \mathbb{R}^n$이다. 근데 둘의 차원은 $n - \dim N(A)$로 같다. 정리하면 $C(A)$는 출력 공간에 포함되고 $C(A^T)$는 입력 공간에 포함되지만, 두 부분공간의 차원은 같다.

지금까지 내용들을 [N(A)의 직교여공간과 선형변환]({% link docs/선형대수/N(A)_직교여공간_선형변환.md %}) 페이지와 종합해서 생각해보면 다음 그림들로 표현할 수 있다. 각 그림에서 왼쪽이 $\mathbb{R}^n$이고, 오른쪽이 $\mathbb{R}^m$이다.

![row_space_1.png](https://minseok127.github.io/docs/선형대수/row_space_1.png)

첫 번째로 $\mathbb{R}^n$에 속하는 임의의 벡터 $\vec{x}$를 $A$로 선형변환 해보자. 이건 $\vec{x}$를 $N(A)^\perp$에 정사영한 벡터 $\vec{x_r}$을 변환한 것과 같다. 이렇게 변환된 벡터는 $C(A) = N(A^T)^\perp$에 있다. 변환된 벡터를 $A^T$로 다시 변환하면 $C(A^T) = N(A)^\perp$로 간다. 주의할 점은 $\vec{x_r}$이 속했던 부분공간으로 돌아가는 것이지, 역행렬처럼 $\vec{x_r}$이 된다는 보장은 없다.

![row_space_2.png](https://minseok127.github.io/docs/선형대수/row_space_2.png)

두 번째로 $\mathbb{R}^m$에 속하는 임의의 벡터 $\vec{y}$를 $A^T$로 선형변환 해보자. 이건 $\vec{y}$를 $N(A^T)^\perp$에 정사영한 벡터 $\vec{y_c}$를 변환한 것과 같다. 변환된 벡터는 $C(A^T) = N(A)^\perp$에 있다. 변환된 벡터를 $A$로 다시 변환하면 $C(A) = N(A^T)^\perp$로 간다. 마찬가지로 역행렬이 아니기에, $\vec{y_c}$로 돌아간다는 보장은 없다.
