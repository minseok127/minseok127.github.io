---
layout: default
title: span의 합집합은 전체 span과 같나?
parent: 선형대수
nav_order: 17
---

# span의 합집합은 전체 span과 같나?

---

### 질문

- 선형독립인 집합 $P$의 부분집합 $A, B$에 대해서, $A \bigcup B = P$ 이면 $span(A) \bigcup span(B) = span(P)$ 인가?

---

선형독립인 집합 $P$와 부분집합 $A, B$가 있다. $A$와 $B$는 공집합이 아니고, $P$가 아니다. 이 때 $A \bigcup B = P$ 이면 $span(A) \bigcup span(B) = span(P)$ 일까? $P$를 $\vec{p_i}$라고 표현하고 크기가 $n \ge 2$ 라고 하자. 그러면 다음 수식에서 모든 계수가 0이어야 한다.

$$
c_1\vec{p_1} + c_2\vec{p_2} + ... + c_n\vec{p_n} = \vec{0} 
$$

$A \bigcup B = P$ 이기 때문에 $A$와 $B$는 $\vec{p_i}$ 들로 이뤄져있다. $A$에만 존재하고 $B$에는 존재하지 않는 벡터들을 $\vec{p_a}$라고 표기하고, 반대로 $B$에만 존재하고 $A$에는 존재하지 않는 벡터들을 $\vec{p_b}$라고 표기하자. 그리고 $\vec{p_a}$의 계수를 $d_a$라고 하고, $\vec{p_b}$의 계수를 $d_b$ 라고 하자. $span(P)$ 에는 $d_a$ 중에 적어도 하나가 0이 아니면서 $d_b$ 중에서도 적어도 하나가 0이 아닌 벡터가 존재한다. 나머지 계수는 값이 상관없다. 이를 다음과 같이 표현해보자.

$$
\sum_a d_a\vec{p_{a}} + \sum_b d_b\vec{p_{b}} + \sum_{j \neq a,b} d_j\vec{p_j}
$$

이 벡터가 $span(A)$에 속한다고 가정해보자. 그러면 다음 수식에서 0이 아닌 계수가 존재해야 한다.

$$
u_0(\sum_a d_a\vec{p_{a}} + \sum_b d_b\vec{p_{b}} + \sum_{j \neq a,b} d_j\vec{p_j}) + \sum_a u_a\vec{p_a} + \sum_j u_j\vec{p_j} = \vec{0}
$$

만약 $u_0 = 0$ 이라면 $\sum_a u_a\vec{p_a}$의 계수 중에 0이 아닌게 존재해야한다. 그런데 $P$는 선형독립이고, $A$는 $P$의 부분집합이니 [선형독립 집합의 부분집합은 선형독립인가?]({% link docs/선형대수/선형독립_부분집합.md %}) 페이지에 따르면 $A$도 선형독립이다. 따라서 모순이다. 만약 $u_0 \neq 0$ 이라면 위 수식은 다음과 같이 정리할 수 있다.

$$
\sum_a (d_a + \frac{u_a}{u_0}) \vec{p_{a}} + \sum_b d_b\vec{p_{b}} + \sum_{j \neq a,b} (d_j + \frac{u_j}{u_0})\vec{p_j} = \vec{0}
$$

$P$는 선형독립이므로 모든 계수가 0이어야 한다. 그런데 $d_b \neq 0$ 이므로 모순이다. 따라서 이 벡터는 $span(A)$에 속하지 않는다. 동일한 방법으로 $span(B)$에도 속하지 않는다는 것을 볼 수 있다. $a,b$ 자리만 바꾸면 된다.

정리하면 주어진 조건에서 $A \bigcup B = P$ 이면 $span(A) \bigcup span(B) = span(P)$ 라는 명제는 성립하지 않는다. 그리고 위의 과정에 나오는 것처럼 $A,B$의 합집합이 $P$이더라도 $span(P)$에 속하는 벡터 중에는 $span(A)$에도 속하지 않고 $span(B)$에도 속하지 않는 벡터가 있었다. 다르게 말하면 $A$와도 선형독립이고, $B$와도 선형독립인 벡터가 존재한다.
