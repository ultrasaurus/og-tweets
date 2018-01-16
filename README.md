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

note: did some post-processing to replies-all.json to make it valid json


tweets have this kind of data
```
{ contributors: null,
  truncated: false,
  is_quote_status: false,
  in_reply_to_status_id: null,
  id: 950941400673210400,
  favorite_count: 217,
  full_text: 'For a pet project, I\'m looking to list out some women who were active and influential in the web from 1995-2002, and not coming up with very many. Enlighten me, please?',
  source: '<a href="http://twitter.com" rel="nofollow">Twitter Web Client</a>',
  retweeted: false,
  coordinates: null,
  entities: { symbols: [], user_mentions: [], hashtags: [], urls: [] },
  in_reply_to_screen_name: null,
  in_reply_to_user_id: null,
  display_text_range: [ 0, 168 ],
  retweet_count: 159,
  id_str: '950941400673210369',
  favorited: false,
  user:
   { follow_request_sent: false,
     has_extended_profile: false,
     profile_use_background_image: true,
     default_profile_image: false,
     id: 14249124,
     profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/2696809/whalecopter.png',
     verified: false,
     translator_type: 'none',
     profile_text_color: '000000',
     profile_image_url_https: 'https://pbs.twimg.com/profile_images/1597362183/me_normal.jpg',
     profile_sidebar_fill_color: 'FFFFFF',
     entities: { url: [Object], description: [Object] },
     followers_count: 4563,
     profile_sidebar_border_color: '009999',
     id_str: '14249124',
     profile_background_color: '7BCDCD',
     listed_count: 313,
     is_translation_enabled: false,
     utc_offset: -18000,
     statuses_count: 20354,
     description: 'I spend my days and sleepless nights tricking software into working. Faculty at Faculty.',
     friends_count: 252,
     location: 'Montreal',
     profile_link_color: '0000FF',
     profile_image_url: 'http://pbs.twimg.com/profile_images/1597362183/me_normal.jpg',
     following: false,
     geo_enabled: true,
     profile_banner_url: 'https://pbs.twimg.com/profile_banners/14249124/1349375406',
     profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/2696809/whalecopter.png',
     screen_name: 'coates',
     lang: 'en',
     profile_background_tile: true,
     favourites_count: 1063,
     name: 'Sean Coates',
     notifications: false,
     url: 'http://t.co/Evnqau1H2Q',
     created_at: 'Sat Mar 29 03:52:29 +0000 2008',
     contributors_enabled: false,
     time_zone: 'Eastern Time (US & Canada)',
     protected: false,
     default_profile: false,
     is_translator: false },
  geo: null,
  in_reply_to_user_id_str: null,
  lang: 'en',
  created_at: 'Wed Jan 10 04:04:32 +0000 2018',
  in_reply_to_status_id_str: null,
  place: null }
```
