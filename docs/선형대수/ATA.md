---
layout: default
title: 3. A^T A
parent: 선형대수
nav_order: 3
---

# A^T A

---

### 질문

선형변환 A로 인해 타원의 장단축 $p_1$, $p_2$가 되는 입력벡터 $x_1$, $x_2$가 있을 때,

- $p_1$, $p_2$에 $A^T$ 변환하면 $x_1$, $x_2$ 방향이 될까?
- $p_1$, $p_2$에 $A^T$ 변환하면 $A^T A$의 장단축이 될까?

---

이전 글에 따르면, $(A^{-1})^T A^{-1} p_2 = \lambda p_2$ 인데, 여기에 $A A^T$를 곱하면,

$$
\begin{aligned}
A A^T (A^{-1})^T A^{-1} p_2 = \lambda A A^T p_2 \\
A (A^{-1} A)^T A^{-1} p_2 = \lambda A A^T p_2 \\
\frac{1}{\lambda} p_2 = A A^T p_2
\end{aligned}
$$

여기서 $Ax_2 = p_2$ 이므로, $A^T A x_2 = A^T p_2$ 이다. 그리고 위의 결과에 $A^{-1}$을 곱해보면 $\frac{1}{\lambda} A^{-1} p_2 = A^T p_2$ 이다.

$$
A^T A x_2 = A^T p_2 = \frac{1}{\lambda} A^{-1} p_2 = \frac{1}{\lambda} x_2
$$

즉, 입력벡터 x들은 $A^T A$의 고유벡터들이다.

정리하면 $A^T A x= A^T p = \frac{1}{\lambda} x$ 이기 때문에, $A^T p$는 입력 벡터 방향인 x 방향으로 간다.

그리고 x는 $A^T A$라는 대칭행렬의 고유벡터들이고, 이는 x가 $A^T A$ 변환이 나타내는 타원의 주축이라는 의미이기 때문에, p에 $A^T$ 변환하면 $A^T A$의 주축이 된다.

