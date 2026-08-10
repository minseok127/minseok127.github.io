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

---

$span$이란 벡터 집합을 받아서 공간을 만들어내는 연산이다.

$$
span(\vec{u_1}, \vec{u_2}, ... \vec{v_n}) = \lbrace c_1\vec{u_1} + c_2\vec{u_2} + ... c_n\vec{v_n}: c_i \in \mathbb{R} \rbrace
$$

어떤 행렬 $A$가 $m \times n$이라고 하자. $A$의 Column Space, $C(A)$는 $A$의 열벡터들이 만들어내는 $span$이다. 출력 벡터들로 구성되어있기 때문에 $C(A)$는 $\mathbb{R}^m$에 있다. $A$의 열벡터들을 $\vec{v_1}, \vec{v_2}, ... \vec{v_n}$이라고 표현한다면 다음과 같다.

$$
C(A) = span(\vec{v_1}, \vec{v_2}, ... \vec{v_n}) = \lbrace A\vec{x} : A\vec{x} \in \mathbb{R}^m \rbrace
$$

Null Space, $N(A)$는 $A\vec{x} = 0$을 만족하는 $\vec{x}$들의 집합을 의미한다.

$$
N(A) = \lbrace \vec{x} : A\vec{x} = 0 \rbrace
$$

$N(A)$는 $\vec{x}$들의 집합이므로 $\mathbb{R}^n$에 있다. $\vec{0}$은 $A$의 형태와 상관없이 항상 $N(A)$에 속한다. $\vec{0}$이 아닌 벡터들은 경우에 따라 null space에 속할 수도, 아닐 수도 있다.
