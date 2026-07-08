---
layout: default
title: 1. CH1의 Practice Questions
parent: Options, Futures, and Other Derivatives
nav_order: 1
---

# Chapter 1의 Practice Questions

---

문제들 중에 헷갈렸던 것들만 추려서 정리.

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
