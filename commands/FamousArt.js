const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "famousart",
    description: "Famous Art Quotes!",
    async execute(message, args){

                   
                       const art1 = new MessageEmbed()
                       .setTitle("The Mona Lisa")
                       .setDescription("*Any list of Most Famous Paintings would be incomplete without the mention of the Mona Lisa by Leonardo da Vinci. This infamous portrait of Lisa del Giocondo was completed some time between 1503-1519 and currently on display at the Musee du Louvre in Paris.*")
                       .setColor("GREEN")
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935371995045040168/most-famous-paintings-1.png?width=431&height=671")
                       
  
                       const art2 = new MessageEmbed()
                       .setTitle("The Scream")
                       .setColor("GREEN")
                       .setDescription("*Using oil and pastel on cardboard, Edvard Munch painted his most famous piece, The Scream, circa 1893. Featuring a ghoulish figure that looks like the host from Tales from the Crypt, the backdrop of this expressionist painting is said to be Oslo, Norway.*")
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935371995384782948/most-famous-paintings-2.png?width=822&height=671")
  
                       const art3 = new MessageEmbed()
                       .setTitle("Starry Night")
                       .setColor("GREEN")
                       .setDescription("*Vincent van Gogh has painted countless well-known pieces; however, his painting Starry Night is widely considered to be his magnum opus. Painted in 1889, the piece was done from memory and whimsically depicts the view from his room at the sanitarium he resided in at the time.*")
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935371995850362920/most-famous-paintings-3.png")
  
                       const art4 = new MessageEmbed()
                       .setTitle("Guernica")
                       .setColor("GREEN")
                       .setDescription("*Inspired by the bombing of Guernica, Spain, during the Spanish Civil War, Pablo Picasso completed this most famous piece, Guernica, in 1937. This piece was originally commissioned by the Spanish government and intended to depict the suffering of war and ultimately stand as symbol for peace.*")
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935371996068470814/most-famous-paintings-4.png")

                       const art5 = new MessageEmbed()
                       .setTitle("The Persistence of Memory")
                       .setColor("GREEN")
                       .setDescription("*Painted in 1931 by yet another Spanish artist, Salvador Dali's The Persistance of Memory is one of the most recognizable and individual pieces in art history. Depicting a dismal shoreline draped with melting clocks, it is thought that Albert Einstein's Theory of Relativity inspired this bizarre piece.*")
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935371996357853234/most-famous-paintings-5.png")

                       const art6 = new MessageEmbed()
                       .setTitle("Three Musicians")
                       .setColor("GREEN")
                       .setDescription("*At first glance it might look like a collage but Pablo Picasso's famous painting, Three Musicians is actually an oil painting. Completed in 1921, he painted two very similar paintings that are mutually referred to as Three Musicians and can be found in the New York MoMA and the Philadelphia Museum of Art.*")
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935371996596944926/Picasso-3musicians.png")

                       const art7 = new MessageEmbed()
                       .setTitle("A Sunday Afternoon on the Island of La Grande Jatte")
                       .setColor("GREEN")
                       .setDescription("*Using the unique technique of pointillism, creating a complete image that is made up of only distinct individual dots, the French painter Georges Seurat brings us his most famous piece A Sunday Afternoon on the Island of La Grande Jatte.*")
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935371996596944926/Picasso-3musicians.png")

                       const art8 = new MessageEmbed()
                       .setTitle("Girl with a Pearl Earring")
                       .setColor("GREEN")
                       .setDescription("*Considered by some to be the “Mona Lisa of the North“, this enchanting painting by the Dutch artist, Johannes Vermeer, features exactly what the title infers - a Girl with a Peal Earring. Completed circa 1665, this piece can now be found in the Mauritshuis Gallery in the Hague.*")
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935371997289021440/most-famous-paintings-8.png?width=583&height=671")

                       const art9 = new MessageEmbed()
                       .setTitle("Whistler's Mother")
                       .setColor("GREEN")
                       .setDescription("*Whistler's Mother is the truncated name for James McNeill Whistler's very famous portrait originally known as Arrangement in Grey and Black: The Artist's Mother. Painted in 1871, it's one of the few American pieces on this list - although it is owned by a Parisian museum and therefore rarely seen in the states.*")
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935371997574201354/most-famous-paintings-9.png?width=772&height=671")

                       const art10 = new MessageEmbed()
                       .setTitle("Portrait de L'artiste Sans Barbe")
                       .setColor("GREEN")
                       .setDescription("*Although the title isn't very creative, Vincent van Gogh's Self-Portrait without Beard is certainly one of the most notable paintings of all time. While Van Gogh has painted many portraits before, this is the most notable because it's one of the few that depicts him without a beard. Additionally, having sold for $71.5 million in 1998, it is one of the most expensive paintings ever sold.*")
                       .setImage("https://imgur.com/uEQZYlQ")

                       const art11 = new MessageEmbed()
                       .setTitle("The Night Watch")
                       .setColor("GREEN")
                       .setDescription("*In its native Dutch tongue, De Nachtwacht is most popularly referred to in modern culture as The Night Watch. Using oil on canvas, Rembrandt (van Rijn) was commissioned by a militia captain and his 17 militia guards in 1642 to paint their company, in an effort to show off for the French Queen that would be visiting.*")
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935372248821415996/most-famous-paintings-11.png")

                       const art12 = new MessageEmbed()
                       .setTitle("The Kiss")
                       .setColor("GREEN")
                       .setDescription("*Easily touted as Gustav Klimt's most famous painting, The Kiss is a realistic yet geometric depiction of a kissing couple, completed in 1908 in Vienna, Austria. What makes this piece different than the other oil paintings on the list is that it also incorporates gold leaf on canvas (in addition to oils).*")
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935372249144369253/most-famous-paintings-12.png?width=661&height=671")

                       const art13 = new MessageEmbed()
                       .setTitle("Water Lilies")
                       .setColor("GREEN")
                       .setDescription("*French painter Claude Monet painted a series of 250 pieces known as Water Lilies between 1840 and 1926 - it's exactly what it sounds like, 250 paintings depicting a water lily pond from his backyard. While this might not be one individual painting, considering the collection is spread amongst the most renowned galleries of the world, the series is a deserving installment on this list.*")
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935372249802887218/most-famous-paintings-13.png?width=714&height=671")

                       const art14 = new MessageEmbed()
                       .setTitle("The Flower Carrier")
                       .setColor("GREEN")
                       .setDescription("*Known in its native tongue as “Cargador de Flores“, The Flower Carrier was painted by Diego Rivera in 1935. Widely considered to be the greatest Mexican painter of the twentieth century, Rivera was known for his simple paintings dominated by their bright colors and The Flower Carrier is no exception.*")
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935372250520100964/carrier.png")

                       const art15 = new MessageEmbed()
                       .setTitle("American Gothic")
                       .setColor("GREEN")
                       .setDescription("*Marking the list as another iconic piece in American art, American Gothic, painted by Grant Wood in 1930 is a dry depiction of a farmer and his Plain-Jane daughter - The Great Depression personified.*")
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935372250851454996/most-famous-paintings-15.png")

                       const art16 = new MessageEmbed()
                       .setTitle("Cafe Terrace at Night")
                       .setColor("GREEN")
                       .setDescription("*Never one for flashy titles, Cafe Terrace at Night (1888) by the ever-prolific Vincent Van Gogh, is one of the most individual depictions of such a mundane setting. Though Van Gogh never signed this piece, he references his famous Cafe masterpiece in many personal documents.*")
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935372251124072469/most-famous-paintings-16.png?width=529&height=671")

                       const art17 = new MessageEmbed()
                       .setTitle("The Son of Man")
                       .setColor("GREEN")
                       .setDescription("*The most current piece of all on this list, painted in 1964, is Rene Magrittees The Son of Man. Although it is a self-portrait, his face is largely covered by a floating green apple and contributes to his series of paintings known as the The Great War on Facades.*")
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935372251484803132/most-famous-paintings-17.png")

                       const art18 = new MessageEmbed()
                       .setTitle("No. 5, 1948")
                       .setColor("GREEN")
                       .setDescription("*Another of the more current pieces, painted by Jackson Pollock in 1948, the impersonally titled No. 5, 1948, though chaotic, is a signature piece of art nonetheless and a revealing insight to the turmoil that was swirling within Pollock.*")
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935372251832942602/most-famous-paintings-18.png")

                       const art19 = new MessageEmbed()
                       .setTitle("Bal du moulin de la Galette")
                       .setColor("GREEN")
                       .setDescription("*While the imagery in this painting might not be the most immediately recognizable, having sold for $78.1 million (adjusted price of $127.4 million), French artist Pierre-Auguste Renoires Bal du Moulin de la Galette is one of the most expensive paintings of all time and therefore, one of the most famous.*")
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935372252118147142/most-famous-paintings-19.png")

                       const art20 = new MessageEmbed()
                       .setTitle("Dogs Playing Poker")
                       .setColor("GREEN")
                       .setDescription("*Commissioned by Brown & Begelow Cigars in 1903, American painter C.M. Coolidge painted 16 unforgettable images of Dogs Playing Poker for the brand. Spoofed many times in greeting cards and in popular culture, this series of dogs playing cards around a table is widely recognizable and truly iconic.*")
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935372252575305818/most-famous-paintings-20.png?width=895&height=671")                       
                        var messages = [art1, art2, art3, art4, art5, art6, art7, art8, art9, art10, art11, art12, art13, art14, art15, art16, art17, art18, art19, art20];
                        var rnd = Math.floor(Math.random() * messages.length);
    
                        message.reply({ embeds: [messages[rnd]]});
                     }
    }






        
    
