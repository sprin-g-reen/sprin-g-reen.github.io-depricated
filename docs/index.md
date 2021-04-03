<h1 align='center'>DOCS</h1>

###### [sprin-g-reen](../) > [docs](../docs/)

<hr>

### CONTENTS:
  - [Cryptography Bot V1](#cryptography-bot)
  - [Cryptography Bot V2](#cryptography-bot-V2)
  - [Poll Bot](#poll-bot)
  - []()
  - [More Info](#For-more-informations-visit:)


<hr>

  
### Cryptography Bot
###### A product of [SIMPLE CRYPTOGRAPHY](https://github.com/Parvat-web-dev/Simple-Cryptography)

A bot that can encode and decode the given text with a key.<br>
Commands:
  - `/start`
  - `/encode` or `/en`
  - `/decode` or `/de`
  - `/crypto`
Using the bot:
  - There are some basic commands that will carry the encryption and decryption
  - `/start`: Starts the bot.
  - `/encode` or `/en`: Encodes the given text with a key.
    - Usage:
    - `/encode | Your Key | Youtr Text`
    - Example:
      - `/encode | Hello | What are you doing?`
      - It returns:
        - `51809 25279 25279 32480 58252 33617 29069 26795 57115 35512 38923 30206 57115 26416 31722 36649 27553 27553 52567`
        - which is the encoded text.
  - `/decode` or `/de`: Decodes the given encoded text with a key.
    - Usage:
    - `/decode | Your Key | Encoded text`
    - Example:
      -  `/decode | Bye | 45745 31722 24142 38544 62042 31722 36649 37786 54462 38544 35512 27174 36649 36649 29069 36649 38544 42334`
      -  It returns:
         -  `Meet you tomorrow!`
         -  Which is the decoded text
  - `/crypto`: Encodes or decodes a text file(_with `*.txt` extention_).
    - Usage:
    - `TO ENCODE a file`
    - `Send a file to the bot.`
    - `The send reply to the file with text:`
      - `/crypto Your Key`
      - `It will return a `_*.txt.cet_ ` file which means it is `_cryptography encoded text_` file`
    - `TO DECODE a file`
    - `Send a file to the bot.`
    - `The send reply to the file with text:`
      - `/crypto Your Key`
      - `It will return a `_*.txt_ `file. Note: the file you send must be a `_*.txt.cet_ `type file.`
 
 
For simple-cryptography's online use see: [https://sprin-g-reen.github.io/simple%20cryptography/](https://sprin-g-reen.github.io/simple%20cryptography)


<hr>


### Cryptography Bot V2
##### The next version of [Cryptography V1 Bot](https://telegram.me/simple-cryptography) with a new [Inline Feature]()

Inline Usage:
  - Just Type `@scrptogbot` then your `key` and the `text` with `#` in between to seperate the _key_ and _text_
    - The text area will be: `@scrptogbot Key # Text`
    - The first look of [Cryptography V2 Bot](https://telegram.me/scrptogbot):


      <li> <img src="../images/simple-cryptography-first-look.png"></img></li>
    

### Poll Bot
##### A simple poll bot that can create simple polls in groups and channels.

Commands:
  - /help
  - /alive
  - /poll

Functions:
  - /help:
    See the Help Text
  - /alive:
    Check if the bot is running or not
  - /poll:
    Create polls.
  - How To Create Polls:
    - Use:
    - `/poll | Your Question | Option1, Option2, Option3, more_option | **kwargs`

You can add As may options as you want. (minimum 1)<br>
What is `**kwargs?`<br>
**kwargs are the optional commands, that you can pass when necessary!
Those are:
  - `multi_answer = True/False`
    - This enables or disables The multiple answer mode. By   default It is False.
      - example:
            `/poll | This is my question | Ans1, Ans2 | multi_answer = True | op = seconds`<br>
        This tells how many seconds will the poll will last.
        It might be 'op' or 'open_period'
        - example:
            `/poll | This is my question | Ans1, Ans2 | op = 60`<br>
            Now thw poll will last for 60 seconds.
  - `dn = True/False`
    - This tells that showld the poll be notidied in the notifications of the group members. By Default it is True. It might be 'dn' or 'disable_notification'.
      - example:
            `/poll | This is my question | Ans1, Ans2 | dn = False`

Did you know, you can use multiple optional commands or dont use it:
Example:
  - `/poll | Hi there | Hello, Good bye`
  - `/poll | This will close in 10s | Nice, Bad | op = 10`
  - `/poll | Hello | Hi, Bye, Hi dev, Bye human | ma = True open_period = 50`

Note:
  - Use comma(**`','`**) to split the _options_.
  - Every part is split by `'|'`.
  - To use ',' in option use: `'<.>'`



### For more informations visit:
  - Official Site:
    - https://sprin-g-reen.github.io/

  Telegram:
  - [SPRINGREEN BOTS](https://telegram.me/venilabots)
  - [SPRINGREEN DISCUSSION](https://telegram.me/venilabots)
  
  Credits:
  - [@Parvat_R](https://telegram.me/Parvat_R)
  - [@Rohithaditya](https://telegram.me/Rohithaditya)

Created with:
  - [python](https://python.org/)
  - [pyTelegramBotAPI](https://pypi.org/project/pyTelegramBotAPI/)