puts "Hello, I am C-3P0, human-cyborg relations."

print "\nAnd your name is? "
name = gets.chomp

if name == "Obi-Wan Kenobi"
    puts "Oh, marvelous! Simply marvelous! Say hello to R2-D2; he's been looking all over for you!"
else
    puts "It is a pleasure to meet you, #{name}."
    print "I'm terribly sorry for prying,
      but you don't by any chance go by the alias of Obi-Wan Kenobi, do you? "
end
answer = gets.chomp[0].downcase