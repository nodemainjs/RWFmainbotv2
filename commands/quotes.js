const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "quotes",
    description: "Famous Art Quotes!",
    async execute(message, args){

                   
                       const quote1 = new MessageEmbed()
                       .setTitle("“I am seeking. I am striving. I am in it with all my heart.” - Vincent van Gogh")
                       .setColor("GREEN")
                       
  
                       const quote2 = new MessageEmbed()
                       .setTitle("“Creativity takes courage.” - Henri Matisse")
                       .setColor("GREEN")
                      
  
                       const quote3 = new MessageEmbed()
                       .setTitle("“If I could say it in words there would be no reason to paint.” - Edward Hopper ")
                       .setColor("GREEN")
                       
  
                       const quote4 = new MessageEmbed()
                       .setTitle("“They always say time changes things, but you actually have to change them yourself.” - Andy Warhol")
                       .setColor("GREEN")

                       const quote5 = new MessageEmbed()
                       .setTitle("“Art washes away from the soul the dust of everyday life.” - Pablo Picasso")
                       .setColor("GREEN")

                       const quote6 = new MessageEmbed()
                       .setTitle("“Great art picks up where nature ends.” - Marc Chagall")
                       .setColor("GREEN")

                       const quote7 = new MessageEmbed()
                       .setTitle("“The position of the artist is humble. He is essentially a channel.” - Piet Mondrian")
                       .setColor("GREEN")

                       const quote8 = new MessageEmbed()
                       .setTitle("“Those who do not want to imitate anything, produce nothing.” - Salvador Dali")
                       .setColor("GREEN")

                       const quote9 = new MessageEmbed()
                       .setTitle("“The job of the artist is always to deepen the mystery.” - Francis Bacon")
                       .setColor("GREEN")

                       const quote10 = new MessageEmbed()
                       .setTitle("“To create one’s own world takes courage.” - Georgia O’Keeffe")
                       .setColor("GREEN")

                       const quote11 = new MessageEmbed()
                       .setTitle("“The object of art is not to reproduce reality, but to create a reality of the same intensity.“ - Alberto Giacometti")
                       .setColor("GREEN")

                       const quote12 = new MessageEmbed()
                       .setTitle("“The main thing is to be moved, to love, to hope, to tremble, to live.” - Auguste Rodin")
                       .setColor("GREEN")

                       const quote13 = new MessageEmbed()
                       .setTitle("“It is important to express oneself...provided the feelings are real and are taken from you own experience.” - Berthe Morisot ")
                       .setColor("GREEN")

                       const quote14 = new MessageEmbed()
                       .setTitle("“To be an artist is to believe in life.” - Henry Moore")
                       .setColor("GREEN")

                       const quote15 = new MessageEmbed()
                       .setTitle("“Every good painter paints what he is.” - Jackson Pollock")
                       .setColor("GREEN")

                       const quote16 = new MessageEmbed()
                       .setTitle("“Art is not what you see, but what you make others see.” - Edgar Degas ")
                       .setColor("GREEN")

                       const quote17 = new MessageEmbed()
                       .setTitle("“In art, the hand can never execute anything higher than the heart can imagine.” - Ralph Waldo Emerson")
                       .setColor("GREEN")

                       const quote18 = new MessageEmbed()
                       .setTitle("“Whether you succeed or not is irrelevant, there is no such thing. Making your unknown known is the important thing.” - Georgia O’Keeffe ")
                       .setColor("GREEN")

                       const quote19 = new MessageEmbed()
                       .setTitle("“What moves men of genius, or rather what inspires their work, is not new ideas, but their obsession with the idea that what has already been said is still not enough.” - Eugene Delacroix")
                       .setColor("GREEN")

                       const quote20 = new MessageEmbed()
                       .setTitle("“Art must be an expression of love or it is nothing.” - Marc Chagall ")
                       .setColor("GREEN")
                       
                        var messages = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9, quote10, quote11, quote12, quote13, quote14, quote15, quote16, quote17, quote18, quote19, quote20];
                        var rnd = Math.floor(Math.random() * messages.length);
    
                        message.reply({ embeds: [messages[rnd]]});
                     }
    }






        
    
