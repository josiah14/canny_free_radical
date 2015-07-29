# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

posts_list = [
          [
            "KISS and KIDS",
            "kiss-and-kids.png",
            "-KISS = Keep It Simple Stupid\n-KIDS == Keep It Dry Stupid\n\nThis is a rant on how to not write 'stupid' code into your programs.  Whether novice or elite, it is essential, if you want to become a respectable programmer, to learn the mantra, Don't Repeat Yourself and don't add complexity where it need not be.  blah blah so on and so forth until I'm done complaining about how few people tend to follow these basic, simple guidelines to produce maintainable code, even when moving swiftly."
          ],
          [
            "Something Whimsical",
            "something-whimsical.png",
            "I'm writing something senseless and whimsical here. lah-dee-dah-doo-day.  This is a short post, but hey, at least it has a \n#Header"
          ],
          [
            "An Introduction to Prolog",
            "spock-logic.jpg",
            "Prolog post text goes here..."
          ],
          [
            "An Overview of the Phoenix Framework",
            "phoenixframework.png",
            "fourth post text goes here..."
          ],
          [
            "A First Glance at ChainFlow",
            "chainflow-glance.png",
            "fifth post text goes here..."
          ],
          [
            "Sixth Post",
            "sixth-post.png",
            "sixth post text goes here..."
          ],
          [
            "This is the Seventh Post, which is about Monads (again)!",
            "seventh-post.png",
            "seventh post text goes here..."
          ],
          [
            "Eighth Post",
            "eighth-post.jpg",
            "eighth post text goes here..."
          ],
          [
            "Nineth Post",
            "nineth-post.jpg",
            "nineth post text goes here..."
          ],
          [
            "About Atomicity",
            "tenth-post.jpg",
            "tenth post text goes here..."
          ],
          [
            "Elm's Time Travelling Debugger Examined",
            "tardis.jpg",
            "Elm time travelling post text goes here..."
          ]
        ]

posts_list.each do |title, cover_image, content|
  Post.create(title: title, cover_image: cover_image, content: content);
end
