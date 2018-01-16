# og-tweets

Find all replies to: https://twitter.com/coates/status/950941400673210369

Followed instructions here: https://inkdroid.org/2017/01/29/replies/

* using this: https://github.com/docnow/twarc
* registered Twitter app here: https://apps.twitter.com/

```
pip install twarc
twarc configure
twarc replies 950941400673210369 > replies.json
twarc replies 950941400673210369 --recursive > replies-all.json
```
