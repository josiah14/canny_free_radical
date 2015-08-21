# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

posts_list = [
          [
            'KISS and KIDS',
            'kiss-and-kids.png',
            "- KISS = Keep It Simple Stupid\n-KIDS == Keep It Dry Stupid\n\nThis is a rant on how to not write 'stupid' code into your programs.  Whether novice or elite, it is essential, if you want to become a respectable programmer, to learn the mantra, Don't Repeat Yourself and don't add complexity where it need not be.  blah blah so on and so forth until I'm done complaining about how few people tend to follow these basic, simple guidelines to produce maintainable code, even when moving swiftly."
          ],
          [
            'Something Whimsical',
            'something-whimsical.png',
            "I'm writing something senseless and whimsical here. lah-dee-dah-doo-day.  This is a short post, but hey, at least it has a \n# Header"
          ],
          [
            'An Introduction to Prolog',
            'spock-logic.jpg',
            'Prolog post text goes here...'
          ],
          [
            'An Overview of the Phoenix Framework',
            'phoenixframework.png',
            'fourth post text goes here...'
          ],
          [
            'A First Glance at ChainFlow',
            'chainflow-glance.png',
            'fifth post text goes here...'
          ],
          [
            'Sixth Post',
            'sixth-post.png',
            'sixth post text goes here...'
          ],
          [
            'This is the Seventh Post, which is about Monads (again)!',
            'seventh-post.png',
            'seventh post text goes here...'
          ],
          [
            'Eighth Post',
            'eighth-post.jpg',
            'eighth post text goes here...'
          ],
          [
            'Nineth Post',
            'nineth-post.jpg',
            'nineth post text goes here...'
          ],
          [
            'About Atomicity',
            'tenth-post.jpg',
            'tenth post text goes here...'
          ],
          [
            "Elm's Time Travelling Debugger Examined",
            'tardis.jpg',
            '# Some header

```ruby
# this is an innocuous method that does nothing important
def method(arg)
puts arg.to_s if arg.respond_to(:to_s)
fail ArgumentError "The arg provided to #{__method__} must be stringifiable"
end
```

```javascript
/*
* Some comment
*/
globalVar = 5;
var localFunc = function (arg) {
    // log information to the console
    console.log(arg);
    return {
        publicFunction: function () { return "hello world!"; }
    }
    },
    aHash = {
    \'one\': 1,
    "two": 2
    };

function anotherFunk(args) {
$(document).on(\'load\', function () {
    console.log(\'loaded\');
});
}

```
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at purus elit. Quisque tincidunt, massa eget fringilla ultricies, ligula lacus facilisis arcu, non tincidunt risus nunc in magna. Mauris vehicula viverra blandit. Vivamus quis sodales nisi. Mauris tellus urna, malesuada quis bibendum sed, maximus vitae nisl. Etiam elementum, orci vel lacinia pretium, felis purus euismod purus, id blandit nibh lectus ac orci. Nulla tincidunt elementum lobortis. Cras pulvinar tincidunt tristique. Quisque sit amet lectus dignissim, bibendum sem at, congue ipsum. Nunc sit amet lectus id neque rutrum suscipit. Vivamus euismod varius eros eu mollis. Nam ut fringilla orci.

```haskell
data Person = { firstName :: String
            , lastName :: String
            , age :: Int
            , height :: Float
            , phoneNumber :: String
            , favor :: String
            } deriving Show

data Maybe a = Nothing | Just a

type letters = String

class Eq a where
    (==) :: a -> a -> Bool
    (/=) :: a -> a -> Bool
    x == y = not (x /= y)
    x /= y = not (x == y)

person :: Person
person = Person { firstName = "Clark"
                , lastName = "Kent"
                , age = 30
                , height = 73.6
                , phoneNumber = "555-555-5555"
                , favor = "Save the planet (again)!"
                }

stringifyPerson :: Person -> String
stringifyPerson = show

main :: IO ()
main = putStrLn stringifyPerson . person >> readLn >>= putStrLn

```
Mauris ut odio nisl. Curabitur sit amet nisl luctus, vulputate ligula convallis, posuere erat. Etiam lorem quam, tincidunt a congue et, tempus a elit. In hac habitasse platea dictumst. Sed et massa vehicula, ullamcorper enim volutpat, dictum dolor. Nam ultricies tincidunt viverra. Praesent neque tortor, tincidunt sit amet diam at, tempus tristique tellus. Fusce id erat efficitur neque dapibus vestibulum at a urna. Suspendisse sed tempor est, vitae facilisis magna. Curabitur et consectetur ante.

Donec hendrerit lectus at dolor eleifend, at elementum magna vehicula. Curabitur odio enim, egestas ac gravida eget, sollicitudin ac libero. Suspendisse at diam at justo laoreet tempus. Donec congue nisl felis, vel congue sapien imperdiet eget. Vestibulum sit amet risus vestibulum, vehicula metus vel, hendrerit risus. Maecenas faucibus vestibulum diam in vestibulum. Etiam felis quam, facilisis vitae erat ac, elementum vehicula urna. Fusce condimentum, justo vitae feugiat vulputate, purus arcu posuere felis, a cursus tellus arcu nec ante.

Sed tincidunt, metus vel tempor porta, nunc leo hendrerit ligula, ac aliquet mi dolor eget ligula. Vivamus mollis, lorem id congue elementum, nisl augue tempor felis, ut mattis sapien ante pretium mi. Suspendisse mollis augue et nunc lobortis, et luctus ante sagittis. Ut vitae purus eu quam ullamcorper sagittis. Aliquam dapibus lobortis justo a feugiat. Ut convallis erat nulla, nec ultrices libero ullamcorper sagittis. Etiam venenatis, augue sagittis facilisis dictum, velit libero efficitur est, nec ullamcorper justo tellus id enim.

Quisque lobortis ante vitae ultricies eleifend. Vivamus libero tellus, venenatis in leo id, dictum euismod nunc. Nulla facilisi. Sed efficitur tincidunt pulvinar. Fusce eu dui nibh. Suspendisse vel varius elit. Vestibulum vehicula dui tortor. Fusce molestie posuere libero nec egestas. Etiam placerat urna in placerat dapibus. Nam elementum sapien sed augue varius, eu tempus tortor lobortis. Quisque eu augue eget tortor eleifend venenatis sit amet ut risus. Proin iaculis, velit nec convallis gravida, felis ex tempus est, sed pellentesque est ex quis sem. Aenean varius tristique vehicula. Aenean eget massa tempus nibh condimentum pharetra. Mauris mollis justo ipsum.'
        ]
    ]

posts_list.each do |title, cover_image, content|
  Post.create(title: title, cover_image: cover_image, content: content)
end
