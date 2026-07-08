---
layout: default
title: 1. Chapter 1의 Practice Questions
parent: Options, Futures, and Other Derivatives
nav_order: 1
---

# Chapter 1의 Practice Questions

---

문제들 중에 헷갈렸던 것들만 추려서 정리.

---

1.19. In the 1980s, Bankers Trust developed _index currency option notes_
(ICONs). These were bonds in which the amount received by the holder at maturity
varied with a foreign exchange rate. One example was its trade with the Long
Term Credit Bank of Japan. The ICON specified that if the yen/USD exchange
rate, $S_{T}$, is greater than 169 yen per dollar at maturity (in 1995), the
holder of the bond receives $1,000. If it is less than 169 yen per dollar, the
amount received by the holder of the bond is 

$$
1000 - max[0, 1000(\frac{169}{S_{T}} - 1)]
$$

When the exchange rate is below 84.5, nothing is received by the holder at
maturity. Show that this ICON is a combination of a regular bond and two
options.

처음에 헷갈렸던 부분은 이 상품의 손익 그래프를 옵션만 결합하는 것이 아니라, regular bond도 결합해야 한다는 거였다. 근데 알아보니 되게 간단한 거였는데, 애초에 채권이라는 건 채무자가 돈을 빌리고 만기일에 다시 그 돈을 돌려주는 거니까 만기일에 regular bond가 상환하는 금액은 채권의 액면가가 되는 것임. 즉 문제 상황에서는 원래 환율이 어떻든 regular bond만 따지면 1000달러가 기본이 되는 거.

그 다음에 헷갈렸던 부분은 수식인데, 보면 $\frac{169}{S_{T}}$ 이런 형태의 손익 그래프를 어떻게 옵션들의 결합으로 만들어낼 수 있는 지 모르겠던 거였다. 이걸 넘어가려면 손익 그래프의 y축을 어떤 화폐로 할 건지 정해야 했다. 달러로도 생각해도 되고, 엔으로 생각해도 된다.

먼저 y축을 엔으로 생각하기로 해보자. 편의를 위해 $S_{T} = x$로 표기한다. 내가 상환해야 하는 금액을 엔으로 표현해보자. $x$가 169 이상이면 내가 상환해야 하는 엔은 $1000x$이다. 그리고 84.5 이하면 0이다. 그 사이라면 달러 기준으로 작성된 수식을 엔 기준으로 바꾸면 된다. 그러면 $1000x - \frac{169000x}{x} + 1000x = 2000x - 169000$ 이렇게 표현된다. 기본적으로 regular bond의 상환 금액을 엔으로 표현한다면 1000x가 되는데, 여기에 옵션을 어떻게 결합해야 169 이상에서는 1000x가 유지되고, 84.5 ~ 169 에서는 2000x - 169000이 되고, 84.5 이하에서는 0이 되나?

여기서 x는 yen per dollar 이기 때문에, x가 커질수록 1달러 당 교환할 수 있는 엔의 수량이 많아진다. 즉 엔의 가치가 떨어진다. x가 작아질수록 엔의 가치는 커진다. 우리는 x가 169보다 작아지는 구간에서 1000x를 2000x - 169000으로 변환해야 하므로, 옵션이 만들어내는 손익은 1000x - 169000엔이 되어야한다. 이걸 다르게 말하면 엔의 가치가 커질수록 손해여야 하는 구조니까 엔에 대한 콜옵션을 매도하는 것을 생각할 수 있다. 수식을 보면 옵션의 규모도 정해진다. 옵션이 행사되는 상황에서 나는 1000달러를 받고 옵션 행사자는 169000엔을 받아가는 것이다. 그러면 x=169에서 169000엔에 대한 콜옵션을 매도한다는 것인데, 이건 정확 무슨 의미일까? 옵션 매수자는 1000달러를 나한테 주고 169000엔을 얻을 수 있는 선택지가 생긴 상황이다. 만약에 x가 169보다 커진다면, 1000달러를 주고 169000엔보다 더 많은 엔을 교환할 수 있으니 굳이 옵션을 행사할 필요가 없어진다. 반대로 x가 169보다 작아질수록 원래 1000달러로 교환할 수 있는 엔보다 더 많은 수량인 169000엔을 얻게 되니 옵션을 행사하게 된다. 그러면 옵션 프리미엄을 생각하지 말고 매도자의 손익을 생각해보면, x가 169보다 커지면 거래가 발생하지 않으니까 나는 1000달러 (1000x엔)그대로 가지고 있는 것. 근데 x가 169보다 작아진다면 내가 가지고 있는 1000x엔에서 옵션 행사로 인해 발생하는 거래를 반영해야 한다. 그러면 옵션 매수자는 나한테 1000달러를 주고 169000엔을 받아가야 한다. 그러면 나는 원래 1000x엔을 가지고 있었으니, 결국 내가 보유하는 엔은 원래 1000x엔에 더해서 옵션 매수자가 나한테 준 달러 = 1000x엔, 여기에 169000엔을 빼주면 됨. 즉 $2000x - 169000$ 이 되는 것. 

x=169에서 169000엔에 대한 콜옵션을 매도하면 x가 84.5 이상인 상황에서는 수식대로 손익 그래프가 생긴다. 그치만 x가 84.5보다 작아지는 상황에서는 마이너스가 된다. 이걸 0으로 상쇄 시키기 위해서 두 번째 옵션이 필요하다. 즉 84.5보다 작은 구간에서 $169000 - 2000x$ 형태의 손익 그래프가 나오는 옵션을 생각해야 한다. x가 작아질수록 엔의 가치는 커지고, 내 손익 그래프가 따라서 커지는 옵션이 필요하다. 즉 엔에 대한 콜옵션을 매수하는 것을 생각할 수 있다. 정확하게는 x=84.5에서 169000엔에 대한 콜옵션을 매수하면 된다. 즉 나는 x가 84.5 이하라면, 2000달러를 지불하고 169000엔을 받는 것. 원래라면 2000달러로 교환할 수 있는 엔은 2000x인데 이건 169000보다 작으니 차익만큼이 수익이 되는 것. 그러면 이걸 원래 이 콜옵션 매수 이전의 자산가치인 2000x - 169000에 더하면 0이 되는 것. 

이번에는 y축을 달러로 생각하기로 해보자. $t = \frac{1}{S_{T}}$ 이렇게 치환해서 생각하면, t는 dollar per yen이다. 그리고 수식이 $2000 - 169000t$ 달러의 형태로 변환된다. 즉 $t <= \frac{1}{169}$ 인 구간에서는 1000, $t >= \frac{1}{84.5}$ 인 구간에서는 0, 그 사이는 $2000 - 169000t$인 그래프가 된다. t가 작아질수록 달러의 가치는 커지고, t가 커질수록 달러의 가치는 낮아진다.

기본적으로 나는 1000달러를 가지고 있기 때문에 $t < =\frac{1}{169}$ 에서는 사실 아무 옵션을 고려하지 않아도 된다. 문제는 중간 구간인데, 내가 가진 1000달러에서 옵션을 통해 1000 - 169000t 만큼의 변화를 만들어야 한다. 달러의 가치가 낮아질수록 손해가 생겨야 하므로, 달러에 대한 풋옵션을 매도하는 걸 고려할 수 있다. 정확한 규모는 얼마일까? t가 $\frac{1}{169}$보다 작다면 옵션 매수자는 옵션을 행사할 필요가 없다. t가 $\frac{1}{169}$보다 커질수록 옵션 매수자는 1000달러를 169000엔으로 바꾸는 옵션을 행사해서 원래 교환할 수 있는 엔보다 더 많이 가져가게 된다. 그러면 t가 $\frac{1}{169}$보다 큰 상황에서 나의 현금 흐름은 옵션 매수자가 나한테 1000달러 주고, 나는 169000엔을 교환해줘야 한다. 그러면 169000엔을 만기일의 달러로 변환하면 169000t 달러가 된다. 그러면 내가 가진 원래 1000달러에 1000달러 추가하고, 169000t 달러를 빼니까 원래 의도했던 2000 - 169000t가 된다.

이번엔 t가 $\frac{1}{84.5}$보다 커지는 상황에서 손익 그래프를 0으로 만들어야 한다. 그러면 이 구간에서는 옵션을 통해 169000t - 2000의 손익이 만들어져야 한다. t가 커질수록 달러 가치는 낮아지는데 수익은 커져야 하므로 달러에 대한 풋옵션을 매수하는 걸 생각할 수 있다. 정확하게는 $t=\frac{1}{84.5}$에서 2000달러를 팔 수 있는 풋옵션을 매수하면 된다. 즉 이 구간에서는 나는 2000달러를 주고 169000엔을 받아서 169000t 달러로 바꾸면 수익이 된다. 이 수익을 원래 그래프에 더하면 0이 된다.

---

1.29. A U.S. company knows it will have to pay 3 million euros in three months. The current exchange rate is 1.1500 dollars per euro. Discuss how forward and options contracts can be used by the company to hedge its exposure.

---

1.32 On May 21, 2020, an investor owns 100 Apple shares. As indicated in Table 1.3, the share price is about $316 and a December put option with a strike price of $290 costs $21.30. The investor is comparing two alternatives to limit downside risk. The first involves buying one December put option contract with a strike price of $290. The second involves instructing a broker to sell the 100 shares as soon as Apple's price reaches $290. Discuss the advantages and disadvantages of the two strategies.
