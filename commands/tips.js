const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "tips",
    description: "Famous Art tips!",
    async execute(message, args){

                   
                       const quote1 = new MessageEmbed()
                       .setTitle("Know your pencils")
                       .setColor("GREEN")
                    .setDescription("Having the right pencil to begin drawing your pencil sketch is one of the most essential sketching tips.\nThe hardness of the graphite is indicated on the side of the pencil: B pencils are softer, H are harder, and HB sits in the middle – theres a big difference between a 4H and a 4B.\nI recommend starting somewhere on the H scale as a foundation and then finishing with the darker B scale, says travelling convention artist Tim Von Rueden.\n\nWhen you're learning how to draw, it's also worth considering using mechanical pencils alongside traditional ones.\nMechanical pencils are usually better suited for precision, while traditional pencils are great for laying down large areas of texture, says Von Rueden.\nKeep in mind that most mechanical pencils come with HB pre-inserted, which gives you only the middle range to work with.")                       
                        .setImage("https://media.discordapp.net/attachments/932536682534830090/935436456862838884/missing-image.png?width=894&height=671")
                       
                        
                        const quote2 = new MessageEmbed()
                       .setTitle("Take control of your pencil")
                       .setColor("GREEN")
                        .setDescription(`"If you position your hand closer to the end of the pencil, you have more control and precision, but heavier strokes (darker markings)," says illustrator Sylwia Bomba. "Gripping further up the pencil will give you less control and precision, but lighter strokes (lighter markings)."`)
                        .setImage("https://media.discordapp.net/attachments/932536682534830090/935437363893637130/missing-image.png?width=523&height=671")
                             
                        const quote3 = new MessageEmbed()
                       .setTitle("Try different mark-making methods")
                       .setColor("GREEN")
                       .setDescription(`There are plenty of sketching tips and techniques to help you achieve different styles and effects. Above are some examples demonstrating different ways to create form and depth. "It’s important to experiment and find what works best for you, to not only complement but enhance your style," explains Von Rueden. "While I prefer smoother value transitions with the pencil strokes blending in against a thin outline, you may be more partial to cross-hatching against a bold outline."`)
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935436844936593448/missing-image.png")
  
                       const quote4 = new MessageEmbed()
                       .setTitle("Vary your lines")
                       .setColor("GREEN")
                       .setDescription(`Use varied lines, says illustrator Rovina Cai. "Not all lines are equal. Subtle shifts in the width and darkness of your lines will create a dynamic, visually interesting drawing. Controlling the kind of mark you put down can be tricky in the beginning, but with practice you will be able to create a variety of marks that work together to make a cohesive image. Experiment with different pencil grades (from 3H to 6B) and with holding the pencil at different angles."`)
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935437789548404746/missing-image.png")

                       const quote5 = new MessageEmbed()
                       .setTitle("Avoid smudging")
                       .setColor("GREEN")
                       .setDescription(`"When shading, use an extra piece of paper underneath your hand," advises artist Brun Croes. "This will minimise the amount your hand smudges your pencil lines. If you're right-handed, start shading from left to right; if you're left-handed, start at the right and move to the left.\n\n"There's nothing more frustrating than trying to make a clean-looking drawing that loses its brilliance and value thanks to smudging. Instead, use smudging to your advantage every now and then to smooth out shading. You can do this with several tools. I use a simple piece of tissue paper to get the job done."`)
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935438054989131856/missing-image.png")

                       const quote6 = new MessageEmbed()
                       .setTitle("Control your edges")
                       .setColor("GREEN")
                       .setDescription(`Von Rueden uses four different sketching techniques to define object edges: thin, hard, lost and undefined. A thin and hard edges give objects solid borders. Lost edges occur when the object and background values start to blend together, so the edge is implied rather than defined. Undefined edges need to be deciphered by the viewer themselves. He suggests exploring all four types, and combining them to create interest within your work.`)
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935438226414526504/missing-image.png?width=836&height=671")

                       const quote7 = new MessageEmbed()
                       .setTitle("Use a blending stick for smooth shading")
                       .setColor("GREEN")
                       .setDescription(`It is possible to create smooth, blended effects using pencils – for example, to capture a sky. "Sometimes it's preferable for your shading to be less sketchy and more smooth and subtle," says artist Marisa Lewis. "Pencil lines don't blend perfectly unless you're very careful."\n\nTo avoid your initial scribbles showing through, Lewis uses a particular technique – see more art techniques here. "Use spare paper to doodle a big swatch of soft graphite or charcoal pencil, then use a large blending stick to pick up the soft dust to use for your image," she explains. "Keep using the blending stick and adding more scribbles as you need more graphite." You can then build up darker areas to create definition.`)
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935438461761118228/missing-image.png?width=672&height=671")

                       const quote8 = new MessageEmbed()
                       .setTitle("Apply the 70/30 rule")
                       .setColor("GREEN")
                       .setDescription(`One of the most vital sketching tips is that less can be more! The 70/30 rule helps you create effective compositions. The idea is that 30 per cent of your sketch is filled with the main focus and detail, and the remaining 70 per cent is filler. This less interesting area helps direct attention towards the main subject of your artwork. You can see the rule in action in Von Rueden's sketch above.`)
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935438640811765790/missing-image.png?width=679&height=671")

                       const quote9 = new MessageEmbed()
                       .setTitle("Make it (almost) symmetrical")
                       .setColor("GREEN")
                       .setDescription(`"I like symmetrical drawings, but they often look boring all too quickly," says Croes. "A good way to prevent this is to add some subtle changes and only keep the general lines symmetrical instead of mirroring every small part. Keeping some elements asymmetrical helps to avoid boring repetition."`)
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935438829542867034/missing-image.png")

                       const quote10 = new MessageEmbed()
                       .setTitle("Differentiate different textures")
                       .setColor("GREEN")
                       .setDescription(`To show different textures within your sketch, you need to adjust your technique. "You wouldn’t want to shade skin the same way you shade metallics or fur. They each have unique properties and capturing that will elevate your drawings because of the accuracy depicted," says Von Rueden.\n\nA good starting point is to consider if the texture is rough or smooth, and then if it absorb or reflects light. "A reflecting and smooth texture, such as chrome, usually has higher contrasts and prominent highlights, while an absorbing and rough texture like cotton has low contrasts and little to no highlight present," he continues.`)
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935439148259622952/missing-image.png?width=758&height=671")

                       const quote11 = new MessageEmbed()
                       .setTitle("Master realism, then try something more stylised")
                       .setColor("GREEN")
                       .setDescription(`Sketches don't have to be realistic. However, Von Rueden believes it's vital to focus on creating realistic sketches first – considering elements such as lighting, values, proportions and anatomy – before trying something more stylised.\n\n"Once you understand how to recreate something realistically, it becomes incredibly easy to then create a stylised version of the same object, especially for creatures and characters," he says. "Over time you’ll make seemingly small, personal preference choices on the actual execution of a piece (often straying from realism) and that’s what will help you to gradually build up your own style."`)
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935439390057046076/missing-image.png")

                       const quote12 = new MessageEmbed()
                       .setTitle("Make characters readable as silhouettes")
                       .setColor("GREEN")
                       .setDescription(`Character design is a whole discipline in itself, but this helpful sketching technique is a good place to start. "Have you ever noticed that every important character in an animation movie is recognisable from their shadow alone?" says artist Leonardo Sala. "This magic has a name: the silhouette. The purpose of finding a strong and interesting silhouette is to create an easily recognisable character that will remain clear in the visual memory of the viewer."\n\nAnother of the great sketching tips is to see if your characters are recognisable in silhouette form. To do this, place a piece of tracing paper on your sketch and trace around your character, filling it in with solid colour. Then show a friend or colleague, and ask what they see.`)
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935439601982664704/missing-image.png")

                       const quote13 = new MessageEmbed()
                       .setTitle("Create contrast")
                       .setColor("GREEN")
                       .setDescription(`Contrast helps direct the viewer's eye within a sketch. When people talk about contrast they're usually referring to a difference in value, where light and dark areas are juxtaposed. However, you can also create contrast in hue, saturation, shape, texture, edges, proportion and so on.\n\n"Heavy contrast will demand attention," emphasises Von Rueden. "I recommend placing the highest value contrast in your area of intent focus. You can also add contrast to separate forms and distinguish different subject matter."`)
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935439835819286538/missing-image.png?width=957&height=671")

                       const quote14 = new MessageEmbed()
                       .setTitle("… but not everywhere")
                       .setColor("GREEN")
                       .setDescription(`Contrast is a powerful tool – but don't be tempted to create high contrast everywhere in your drawing, says Von Rueden. Subtle shading can be just as effective when it comes to showcasing form and detail.\n\n"In these examples [above], you can see that the softer, low-value contrast piece enables the eye to wander and doesn’t define an area of focus," Von Rueden adds. "While the area of focus in the high-value contrast piece rests on the darkest darks against the lightest lights."`)
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935440026324586546/missing-image.png")

                       const quote15 = new MessageEmbed()
                       .setTitle("Flip your image with tracing paper")
                       .setColor("GREEN")
                       .setDescription(`If you've spent a long time looking at a drawing, it can be difficult to see where the errors are and that's where these sketching tips come in. Artist Justin Gerard has a nifty sketching tip to help. "A benefit of tracing paper is that you can flip it over to see how your drawing looks from the reverse angle," he advises. "This can help reveal errors in proportion. As you work, take advantage of this in order to arrive at a more successful drawing."`)
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935440178326175754/missing-image.png")

                       const quote16 = new MessageEmbed()
                       .setTitle("Make gradients work for you")
                       .setColor("GREEN")
                       .setDescription(`Von Rueden is very fond of a well-placed gradient. "They are visually pleasant to the eye and can direct the viewer’s attention to an area of focus," he comments. "The scope of the gradient is important as well. A gradient that covers most of the drawing or subject matter will influence where the viewers look, and smaller gradients can add a pop of detail and contrast. If you feel your piece is looking flat or has lost focus, try adding a subtle gradient."`)
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935440359117439046/missing-image.png?width=792&height=671")

                       const quote17 = new MessageEmbed()
                       .setTitle("Explore abstract backgrounds")
                       .setColor("GREEN")
                       .setDescription(`"The use of irregular lines when shading adds a lot of dynamism to your sketch," Bomba says. "If you want to create a fresh and unique portrait, architecture sketch, or piece of concept art, you should definitely try this technique." Bomba uses it to add interest to flat backgrounds.`)
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935440956822544385/missing-image.png?width=472&height=671")

                       const quote18 = new MessageEmbed()
                       .setTitle("Add imperfections")
                       .setColor("GREEN")
                       .setDescription(`"Instead of just looking at what makes an object recognisable you should also consider how to make this object distinctive," says Von Rueden. Quirks and imperfections add character to your sketch, and can suggest a story for the viewer to mentally explore.\n\nIn the example above, you can see three different carrots. The first one depicts what might come to mind when you think of a carrot. The second is based on an actual carrot, with its lumps and bumps emphasised to create interest. In the third, Von Rueden has gone one step further. "Look to add [imperfections] to any given subject matter and try to have some fun pushing it into something fantastical," he suggests.`)
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935441184732610630/missing-image.png?width=822&height=671")

                       const quote19 = new MessageEmbed()
                       .setTitle("Rejoice in the details")
                       .setColor("GREEN")
                       .setDescription(`Von Rueden believes an artist's heart and soul is revealed in a sketch's details. "The additional time put into adding elements that may go unnoticed are like treats for viewers who take the time to look for them," he says.\n\nPutting extra care into the details can also teach you patience. "Great art should be nurtured, not manufactured," he adds. "Don’t overlook those details or let time be a deterrent. Embrace them!"`)
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935441399531331584/missing-image.png?width=766&height=671")

                       const quote20 = new MessageEmbed()
                       .setTitle("Trust your intuition")
                       .setColor("GREEN")
                       .setDescription(`"Creating art takes courage. To fully express who you are, what you’re interested in, how you’re feeling and what you stand for can be daunting. Too many artists play it safe. They find an appealing and marketable comfort zone, and then only create from that space," says Von Rueden.\n\nFrom experience, he's found that work that feels authentic will resonate more with people. "When you’re in your creative zone, trust your gut feelings and be expressive with your preliminary sketches and thumbnails," he continues. "Don’t worry about the reaction. Create without the fear of whether it will be 'good' or not."`)
                       .setImage("https://media.discordapp.net/attachments/932536682534830090/935441629119143946/missing-image.png?width=888&height=671")
                       
                        var messages = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9, quote10, quote11, quote12, quote13, quote14, quote15, quote16, quote17, quote18, quote19, quote20];
                        var rnd = Math.floor(Math.random() * messages.length);
    
                        message.reply({ embeds: [messages[rnd]]});
                     }
    }






        
    
