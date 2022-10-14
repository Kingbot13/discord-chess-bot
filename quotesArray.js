const quotesArray = [
{
  quote: 'When you see a good move, look for a better one',
  author: 'Emanuel Lasker'
},
{
  quote: 'Nothing excites jaded Grandmasters more than a theoretical novelty',
  author: 'Dominic Lawson'
},
{
  quote: 'The Pin is mightier than the sword',
  author: 'Fred Reinfeld'
},
{
  quote: "We cannot resist the fascination of sacrifice, since a passion forsacrifices is part of a Chessplayer's nature",
  author: 'Rudolf Spielman'
},
{
  quote: 'All I want to do, ever, is just play Chess',
  author: 'Bobby Fischer'
},
{
  quote: 'A win by an unsound combination, however showy,fills me with artistic horror',
  author: 'Wilhelm Steinitz'
},
{
  quote: 'The chessboard is the world, the pieces are the phenomena of theUniverse, the rules of the game are what we call the laws of Natureand the player on the other side is hidden from us',
  author: 'Thomas Huxley'
},
{
  quote: 'Adequate compensation for a sacrifice is having a sound combination leading to a winning position; adequate compensation for a blunder ishaving your opponent snatch defeat from the jaws of victory',
  author: 'Bruce A. Moon'
},
{
  quote: 'Strategy requires thought, tactics require observation',
  author: 'Max Euwe'
},
{
  quote: "I don't believe in psychology. I believe in good moves",
  author: 'Bobby Fischer'
},
{
  quote: 'Modern Chess is too much concerned with things likePawn structure. Forget it, Checkmate ends the game',
  author: 'Nigel Short'
},
{
  quote: 'Life is a kind of Chess, with struggle, competition, good and ill events',
  author: 'Benjamin Franklin'
},
{
  quote: 'Even the laziest King flees wildly in the face of a double check!',
  author: 'Aaron Nimzowitsch'
},
{
  quote: 'Combinations have always been the most intriguing aspect of Chess.The masters look for them, the public applauds them, the criticspraise them. It is because combinations are possible that Chessis more than a lifeless mathematical exercise. They are thepoetry of the game; they are to Chess what melody is tomusic. They represent the triumph of mind over matter',
  author: 'Reuben Fine'
},
{
  quote: 'I give 98 percent of my mental energy to Chess',
  author: 'Others give only  percentBobby Fischer'
},
{
  quote: 'Chess is a fairy tale of 1001 blunders',
  author: 'Savielly Tartakower'
},
{
  quote: 'Chess is no whit inferior to the violin, and we have alarge number of professional violinists',
  author: 'Mikhail Botvinnik'
},
{
  quote: 'Only the player with the initiative has the right to attack',
  author: 'Wilhelm Steinitz'
},
{
  quote: 'The winner of the game is the player who makes the next-to-last mistake',
  author: 'Savielly Tartakover'
},
{
  quote: "Your body has to be in top condition. Your Chess deterioratesas your body does. You can't separate body from mind",
  author: 'Bobby Fischer'
},
{
  quote: 'Of Chess it has been said that life is not longenough for it, but that is the fault of life, not Chess',
  author: 'William Ewart Napier'
},
{
  quote: 'I have added these principles to the law: get the Knightsinto action before both Bishops are developed',
  author: 'Emanuel Lasker'
},
{
  quote: 'Life is like a game of Chess, changing with each move',
  author: 'Chinese proverb'
},
{
  quote: 'You cannot play at Chess if you are kind-hearted',
  author: 'French Proverb'
},
{
  quote: "Its just you and your opponent at the boardand you're trying to prove something",
  author: 'Bobby Fischer'
},
{
  quote: 'It is the aim of the modern school, not to treat every positionaccording to one general law, but according tothe principle inherent in the position',
  author: 'Richard Reti'
},
{
  quote: 'The Pawns are the soul of the game',
  author: 'Francois Andre Danican Philidor'
},
{
  quote: 'In order to improve your game, you must study the endgame beforeeverything else, for whereas the endings can be studied andmastered by themselves, the middle game and the openingmust be studied in relation to the endgame',
  author: 'Jose Raul Capablanca'
},
{
  quote: 'Without error there can be no brilliancy',
  author: 'Emanuel Lasker'
},
{ quote: 'Chess is like war on a board', author: 'Bobby Fischer' },
{
  quote: 'Chess is played with the mind and not with the hands!',
  author: 'Renaud and Kahn'
},
{ quote: 'Chess is mental torture', author: 'Garry Kasparov' },
{
  quote: 'Many have become Chess Masters,no one has become the Master of Chess',
  author: 'Siegbert Tarrasch'
},
{
  quote: "The most important feature of the Chess position is the activity of thepieces. This is absolutely fundamental in all phases of the game:Opening, Middlegame and especially Endgame. The primaryconstraint on a piece's activity is the Pawn structure",
  author: 'Michael Stean'
},
{
  quote: 'You have to have the fighting spirit. You haveto force moves and take chances',
  author: 'Bobby Fischer'
},
{
  quote: 'Could we look into the head of a Chess player,we should see there a whole world of feelings,images, ideas, emotion and passion',
  author: 'Alfred Binet'
},
{
  quote: 'Openings teach you openings. Endgames teach you chess!',
  author: 'Stephan Gerzadowicz'
},
{
  quote: 'My style is somewhere between that of Tal and Petrosian',
  author: 'Reshevsky'
},
{
  quote: 'Play the opening like a book, the middle game likea magician, and the endgame like a machine',
  author: 'Spielmann'
},
{
  quote: "That's what Chess is all about. One day you give youropponent a lesson, the next day he gives you one",
  author: 'Bobby Fischer'
},
{
  quote: 'Some part of a mistake is always correct',
  author: 'Savielly Tartakover'
},
{
  quote: 'Methodical thinking is of more use in Chess than inspiration',
  author: 'C. J. S. Purdy'
},
{ quote: 'When in doubt... play Chess!', author: 'Tevis' },
{
  quote: 'Who is your opponent tonight,tonight I am playing against the Black pieces',
  author: 'Akiba Rubinstein'
},
{
  quote: "I like the moment when I break a man's ego",
  author: 'Bobby Fischer'
},
{
  quote: 'Excellence at Chess is one mark of a scheming mind',
  author: 'Sir Arthur Conan Doyle'
},
{
  quote: 'A bad day of Chess is better than any good day at work',
  author: 'Anonymous'
},
{ quote: 'Chess is the art of analysis', author: 'Mikhail Botvinnik' },
{
  quote: 'The mistakes are there, waiting to be made',
  author: 'Savielly Tartakower'
},
{
  quote: "There are tough players and nice guys, and I'm a tough player",
  author: 'Bobby Fischer'
},
{
  quote: "After black's reply to 1.e4 with 1..e5, leaves himalways trying to get into the game",
  author: 'Howard Staunton'
},
{ quote: 'A player surprised is half beaten', author: 'Proverb' },
{
  quote: 'A passed Pawn increases in strength as the numberof pieces on the board diminishes',
  author: 'Capablanca'
},
{
  quote: 'The essence of Chess is thinking about what Chess is',
  author: 'David Bronstein'
},
{
  quote: 'I am the best player in the world and I am here to prove it',
  author: 'Bobby Fischer'
},
{
  quote: 'Chess is a forcing house where the fruits ofcharacter can ripen more fully than in life',
  author: 'Edward Morgan Foster'
},
{
  quote: 'Half the variations which are calculated in a tournament gameturn out to be completely superfluous. Unfortunately, no oneknows in advance which half',
  author: 'Jan Tinman'
},
{ quote: 'Chess is as much a mystery as women', author: 'Purdy' },
{
  quote: "Good positions don't win games, good moves do",
  author: 'Gerald Abrahams'
},
{
  quote: 'If I win a tournament, I win it by myself.I do the playing. Nobody helps me',
  author: 'Bobby Fischer'
},
{
  quote: 'What would Chess be without silly mistakes?',
  author: 'Kurt Richter'
},
{
  quote: 'Before the endgame, the Gods have placed the middle game',
  author: 'Siegbert Tarrasch'
},
{ quote: "Chess was Capablanca's mother tongue", author: 'Reti' },
{
  quote: 'Alekhine is a poet who creates a work of art out of somethingthat would hardly inspire another man tosend home a picture post card',
  author: 'Max Euwe'
},
{
  quote: "Don't even mention losing to me. I can't stand to think of it",
  author: 'Bobby Fischer'
},
{
  quote: 'During a Chess competition a Chessmaster should be acombination of a beast of prey and a monk',
  author: 'Alexander Alekhine'
},
{
  quote: 'No one ever won a game by resigning',
  author: 'Saviely Tartakower'
},
{
  quote: 'The defensive power of a pinned piece is only imaginary',
  author: 'Aaron Nimzovich'
},
{
  quote: 'When the Chess game is over, the Pawn andthe King go back to the same box',
  author: 'Irish saying'
},
{
  quote: 'A strong memory, concentration, imagination, and a strong willis required to become a great Chess player',
  author: 'Bobby Fischer'
},
{ quote: 'Every Chess master was once a beginner', author: 'Chernev' },
{
  quote: "One doesn't have to play well, it'senough to play better than your opponent",
  author: 'Siegbert Tarrasch'
},
{ quote: 'Chess is above all, a fight!', author: 'Emanuel Lasker' },
{
  quote: 'Discovered check is the dive bomber of the Chessboard',
  author: 'Reuben Fine'
},
{
  quote: "I know people who have all the will in the world,but still can't play good Chess",
  author: 'Bobby Fischer'
},
{
  quote: 'A Chess game is a dialogue, a conversation between a player and his opponent. Each move by the opponent may contain threats or be ablunder, but a player cannot defend against threats or takeadvantage of blunders if he does not first ask himself:What is my opponent planning after each move?',
  author: 'Bruce A. Moon'
},
{
  quote: 'The hardest game to win is a won game',
  author: 'Emanuel Lasker'
},
{
  quote: 'The most powerful weapon in Chess is to have the next move',
  author: 'David Bronstein'
},
{
  quote: "He who fears an isolated Queen's Pawn should give up Chess",
  author: 'Siegbert Tarrasch'
},
{
  quote: 'Different people feel differently about resigning',
  author: 'Bobby Fischer'
},
{
  quote: 'Chess is not like life... it has rules!',
  author: 'Mark Pasternak'
},
{ quote: 'Why must I lose to this idiot?', author: 'Aron Nimzovich' },
{
  quote: "It's always better to sacrifice your opponent's men",
  author: 'Savielly Tartakover'
},
{
  quote: 'To avoid losing a piece, many a person has lost the game',
  author: 'Savielly Tartakover'
},
{
  quote: 'All that matters on the Chessboard is good moves',
  author: 'Bobby Fischer'
},
{
  quote: 'Help your pieces so they can help you',
  author: 'Paul Morphy'
},
{
  quote: 'In a gambit you give up a Pawn for the sake of getting a lost game',
  author: 'Samuel Standige Boden'
},
{
  quote: 'It is not enough to be a good player... you must also play well',
  author: 'Siegbert Tarrasch'
},
{
  quote: 'A sacrifice is best refuted by accepting it',
  author: 'Wilhelm Steinitz'
},
{
  quote: 'Tactics flow from a superior position',
  author: 'Bobby Fischer'
},
{
  quote: 'Later, I began to succeed in decisive games. Perhapsbecause I realized a very simple truth: not onlywas I worried, but also my opponent',
  author: 'Mikhail Tal'
},
{ quote: 'Chess is life', author: 'Bobby Fischer' },
{ quote: 'Chess is a beautiful mistress', author: 'Bent Larsen' },
{
  quote: 'Some sacrifices are sound; the rest are mine',
  author: 'Mikhail Tal'
},
{ quote: 'Best by test: 1. e4', author: 'Bobby Fischer' },
{
  quote: 'A bad plan is better than none at all',
  author: 'Frank Marshall'
},
{
  quote: 'Chess books should be used as we use glasses: to assistthe sight, although some players make use of them as ifthey thought they conferred sight',
  author: 'Jose Raul Capablanca'
},
{
  quote: 'There are two types of sacrifices: correct ones and mine',
  author: 'Mikhail Tal'
},
{
  quote: 'Morphy was probably the greatest genius of them all',
  author: 'Bobby Fischer'
},
{
  quote: "My opponents make good moves too. SometimesI don't take these things into consideration",
  author: 'Bobby Fischer'
},
{
  quote: 'The combination player thinks forward; he starts fromthe given position, and tries the forceful moves in his mind',
  author: 'Emanuel Lasker'
},
{
  quote: "A Chess game is divided into three stages: the first, when you hopeyou have the advantage, the second when you believe you have anadvantage, and the third... when you know you're going to lose!",
  author: 'Savielly Tartakower'
},
{ quote: 'Chess demands total concentration', author: 'Bobby Fischer' },
{
  quote: 'Chess, like love, like music, has the power to make people happy',
  author: 'Siegbert Tarrasch'
},
{ quote: 'All my games are real', author: 'Bobby Fischer' },
{
  quote: 'Chess is everything: art, science and sport',
  author: 'Anatoly Karpov'
},
{
  quote: 'Chess is the art which expresses the science of logic',
  author: 'Mikhail Botvinnik'
},
{
  quote: 'Not all artists are Chess players, but all Chess players are artists',
  author: 'Marcel Duchamp'
},
{ quote: 'Chess is imagination', author: 'David Bronstein' },
{
  quote: "I'm not afraid of Spassky. The world knows I'm the best",
  author: "You don't need a match to prove itBobby Fischer"
},
{
  quote: 'If cunning alone were needed to excel, women',
  author: 'would be the best Chess playersAlbin'
},
{
  quote: "Chess is thirty to forty percent psychology. You don't have thiswhen you play a computer. I can't confuse it",
  author: 'Judith Polgar'
},
{
  quote: 'On the chessboard, lies and hypocrisy do not survive long',
  author: 'Emanuel Lasker'
},
{
  quote: 'Chess is war over the board. The object is to crush the opponents mind',
  author: 'Bobby Fischer'
},
{
  quote: 'The passed Pawn is a criminal, who should be kept under lock and key. Mild measures, such as police surveillance, are not sufficient',
  author: 'Aaron Nimzovich'
},
{
  quote: 'Chess holds its master in its own bonds, shackling the mind and brainso that the inner freedom of the very strongest must suffer',
  author: 'Albert Einstein'
},
{
  quote: 'Human affairs are like a Chess game: only those who do nottake it seriously can be called good players',
  author: "Hung Tzu Ch'eng"
},
{
  quote: 'The blunders are all there on the board, waiting to be made',
  author: 'Savielly Tartakover'
},
{
  quote: 'Via the squares on the chessboard, the Indians explain the movement oftime and the age, the higher influences which control the world andthe ties which link Chess with the human soul',
  author: 'Al-Masudi'
},
{
  quote: 'It is no time to be playing Chess when the house is on fire',
  author: 'Italian Proverb'
},
{
  quote: 'You sit at the board and suddenly your heart leaps. Your hand trembles to pick up the piece and move it.  But what Chess teaches you is that youmust sit there calmly and think about whether its really a good ideaand whether there are other better ideas',
  author: 'Stanley Kubrick'
},
{
  quote: 'Daring ideas are like Chess men moved forward. Theymay be beaten, but they may start a winning game',
  author: 'Johann Wolfgang von Goethe'
},
{
  quote: "Of all my Russian books, the defense contains and diffuses thegreatest 'warmth' which may seem odd seeing how supremely abstract Chess is supposed to be",
  author: 'Vladimir Nabokov'
},
{
  quote: 'For surely of all the drugs in the world, Chess must bethe most permanently pleasurable',
  author: 'Assiac'
},
{
  quote: 'A thorough understanding of the typical mating continuations makesthe most complicated sacrificial combinations leading up to themnot only not difficult, but almost a matter of course',
  author: 'Siegbert Tarrasch'
},
{
  quote: 'Chess problems demand from the composer the same virtues thatcharacterize all worthwhile art: originality, invention, conciseness, harmony, complexity, and splendid insincerity',
  author: 'Vladimir Nabokov'
},
{
  quote: 'Personally, I rather look forward to a computer program winning theworld Chess Championship. Humanity needs a lesson in humility',
  author: 'Richard Dawkings'
},
{
  quote: "The boy then a 12 year old boy named Anatoly Karpov doesn't have aclue about Chess, and there's no future at all for him in this profession",
  author: 'Mikhail Botvinnik'
},
{
  quote: 'As one by one I mowed them down, my superioritysoon became apparent',
  author: 'Jose Capablanca'
},
{
  quote: 'Though most people love to look at the games of the great attacking masters, some of the most successful players in history have been thequiet positional players. They slowly grind you down by taking away your space, tying up your pieces, and leaving you with virtually nothing to do!',
  author: 'Yasser Seirawan'
},
{
  quote: "Chess is ruthless: you've got to be prepared to kill people",
  author: 'Nigel Short'
},
{
  quote: 'There must have been a time when men were demigods,or they could not have invented Chess',
  author: 'Gustav Schenk'
},
{
  quote: 'Chess is really ninety nine percent calculation',
  author: 'Soltis'
},
{
  quote: 'Chess is the gymnasium of the mind',
  author: 'Blaise Pascal'
},
{
  quote: 'The game of Chess is not merely an idle amusement; several veryvaluable qualities of the mind are to be acquired and strengthened byit, so as to become habits ready on all occasions; for life is a kind of Chess',
  author: 'Benjamin Franklin'
},
{
  quote: "Winning isn't everything... but losing is nothing",
  author: 'Mednis'
},
{ quote: 'Only sissies Castle', author: 'Rob Sillars' },
{
  quote: "Look at Garry Kasparov. After he loses, invariably he wins thenext game. He just kills the next guy. That's somethingthat we have to learn to be able to do",
  author: 'Maurice Ashley'
},
{
  quote: "There just isn't enough televised Chess ",
  author: 'David Letterman'
},
{
  quote: 'Avoid the crowd. Do your own thinking independently.Be the Chess player, not the Chess piece',
  author: 'Ralph Charell'
},
{
  quote: 'Chess is a terrible game. If you have no center, your opponenthas a freer position. If you do have a center, then youreally have something to worry about!',
  author: 'Siegbert Tarrasch'
},
{
  quote: 'Any material change in a position must come about by mate,a capture, or a Pawn promotion',
  author: 'Purdy'
},
{
  quote: "We don't really know how the game was invented, though there aresuspicions. As soon as we discover the culprits, we'll let you know",
  author: 'Bruce Pandolfini'
},
{
  quote: "The battle for the ultimate truth will never be won.And that's why Chess is so fascinating",
  author: 'Hans Kmoch'
},
{
  quote: 'Chess makes man wiser and clear-sighted',
  author: 'Vladimir Putin'
},
{
  quote: 'I am still a victim of Chess. It has all the beauty of art and muchmore. It cannot be commercialized. Chess is muchpurer than art in its social position',
  author: 'Marcel Duchamp'
},
{
  quote: 'Blessed be the memory of him who gave the world this immortal game',
  author: 'A. G. Gardiner'
},
{
  quote: 'In the perfect Chess combination as in a first-rate short story, thewhole plot and counter-plot should lead up to a striking finale,the interest not being allayed until the very last moment',
  author: 'Yates and Winter'
},
{ quote: 'Castle early and often', author: 'Rob Sillars' },
{
  quote: 'I believe that Chess possesses a magic that is also a help in advancedage. A rheumatic knee is forgotten during a game of Chess and other events can seem quite unimportant in comparisonwith a catastrophe on the chessboard',
  author: 'Vlastimil Hort'
},
{
  quote: 'Chess is a more highly symbolic game, but the aggressions aretherefore even more frankly represented in the play. It probablybegan as a war game; that is, the representation of a miniaturebattle between the forces of two kingdoms',
  author: 'Karl Meninger'
},
{
  quote: 'No Chess Grandmaster is normal; they onlydiffer in the extent of their madness',
  author: 'Viktor Korchnoi'
},
{ quote: 'Chess is 99 percent tactics', author: 'Teichmann' },
{
  quote: "I'd rather have a Pawn than a finger",
  author: 'Reuben Fine'
},
{
  quote: 'Chess mastery essentially consists of analyzing',
  author: 'Chess positions accuratelyMikhail Botvinnik'
},
{
  quote: "If your opponent cannot do anything active, then don't rush the position;instead you should let him sit there, suffer, and beg you for a draw",
  author: 'Jeremy Silman'
},
{
  quote: 'The Chess pieces are the block alphabet which shapes thoughts; andthese thoughts, although making a visual design on the chessboard,express their beauty abstractly, like a poem',
  author: 'Marcel Duchamp'
},
{
  quote: 'Examine moves that smite! A good eye for smites is far moreimportant than a knowledge of strategical principles',
  author: 'Purdy'
},
{ quote: 'Chess is like life', author: 'Boris Spassky' },
{
  quote: "If your opponent offers you a draw, try to work outwhy he thinks he's worse off",
  author: 'Nigel Short'
},
{
  quote: "Chess teaches you to control the initial excitement you feel whenyou see something that looks good and it trains you to thinkobjectively when you're in trouble",
  author: 'Stanley Kubrick'
},
{
  quote: 'Let the perfectionist play postal',
  author: 'Yasser Seirawan'
},
{
  quote: "If Chess is a science, it's a most inexact one. If Chess is an art, it is tooexacting to be seen as one. If Chess is a sport, it's too esoteric. If Chessis a game, it's too demanding to be just a game. If Chess is a mistress,she's a demanding one. If Chess is a passion, it's a rewarding one. If Chess is life, it's a sad one",
  author: 'Unknown'
},
{
  quote: 'Chess is a foolish expedient for making idle people believe they aredoing something very clever when they are only wasting their time',
  author: 'George Bernard Shaw'
},
{
  quote: 'You must take your opponent into a deep dark forest where 2+2=5,and the path leading out is only wide enough for one',
  author: 'Mikhail Tal'
},
{
  quote: 'I feel as if I were a piece in a game of Chess, when myopponent says of it: That piece cannot be moved',
  author: 'Soren Kierkegaard'
},
{
  quote: "When your house is on fire, you cant be bothered with the neighbors.Or, as we say in Chess, if your King is under attack you don't worryabout losing a Pawn on the Queen's side",
  author: 'Gary Kasparov'
},
{
  quote: 'Man is a frivolous, a specious creature, and like a Chess player, caresmore for the process of attaining his goal than for the goal itself',
  author: 'Dostoyevsky'
},
{
  quote: "When asked, -How is that you pick better moves than your opponents?,I responded: I'm very glad you asked me that, because, as it happens,there is a very simple answer. I think up my own moves, and Imake my opponent think up his",
  author: 'Alexander Alekhine'
},
{
  quote: 'Mistrust is the most necessary characteristic of the Chess player',
  author: 'Siegbert Tarrasch'
},
{
  quote: 'What is the object of playing a gambit opening?... To acquire areputation of being a dashing player at the cost of losing a game',
  author: 'Siegbert Tarrasch'
},
{
  quote: 'Pawns: they are the soul of this game, they aloneform the attack and defense',
  author: 'Philidor'
},
{ quote: 'Chess is above all, a fight!', author: 'Emanuel Lasker' },
{
  quote: 'In Chess, at least, the brave inherit the earth',
  author: 'Edmar Mednis'
},
{
  quote: 'There are two classes of men; those who are content to yield to circumstances and who play whist; those who aim to controlcircumstances, and who play Chess',
  author: 'Mortimer Collins'
},
{
  quote: 'The tactician must know what to do whenever something needs doing;the strategist must know what to do when nothing needs doing',
  author: 'Savielly Tartakover'
},
{
  quote: 'When you are lonely, when you feel yourself an alien in the world, play Chess. This will raise your spirits and be your counselor in war',
  author: 'Aristotle'
},
{
  quote: 'All Chess players should have a hobby',
  author: 'Savielly Tartakower'
},
{
  quote: 'I played Chess with him and would have beaten him sometimes only healways took back his last move, and ran the game out differently',
  author: 'Mark Twain'
},
{
  quote: 'The tactician knows what to do when there is something to do; whereasthe strategian knows what to do when there is nothing to do',
  author: 'Gerald Abrahams'
},
{
  quote: "In Chess, just as in life, today's bliss may be tomorrow's poison",
  author: 'Assaic'
},
{
  quote: 'You may learn much more from a game you lose than from agame you win. You will have to lose hundreds of gamesbefore becoming a good player',
  author: 'Jose Raul Capablanca'
},
{
  quote: "The way he plays Chess demonstrates a man's whole nature",
  author: 'Stanley Ellin'
},
{
  quote: 'You can only get good at Chess if you love the game',
  author: 'Bobby Fischer'
},
{
  quote: 'A man that will take back a move at Chess will pick a pocket',
  author: 'Richard Fenton'
},
{
  quote: "Whoever sees no other aim in the game than that of giving checkmateto one's opponent will never become a good Chess player",
  author: 'Euwe'
},
{
  quote: 'In blitz, the Knight is stronger than the Bishop',
  author: 'Vlastimil Hort'
},
{
  quote: 'Chess is a fighting game which is purely intellectual and includes chance',
  author: 'Richard Reti'
},
{
  quote: 'Chess is a sea in which a gnat may drink and an elephant may bathe',
  author: 'Hindu proverb'
},
{
  quote: 'Pawn endings are to Chess what putting is to golf',
  author: 'Cecil Purdy'
},
{
  quote: 'Chess opens and enriches your mind',
  author: 'Saudin Robovic'
},
{
  quote: 'The isolated Pawn casts gloom over the entire chessboard',
  author: 'Aaron Nimzovich'
},
{
  quote: 'For me, Chess is life and every game is like a new life. EveryChess player gets to live many lives in one lifetime',
  author: 'Eduard Gufeld'
},
{
  quote: 'Chess is a terrific way for kids to build self image and self esteem',
  author: 'Saudin Robovic'
},
{
  quote: 'If a ruler does not understand Chess, how can he rule over a kingdom?',
  author: 'King Khusros II'
},
{
  quote: 'Chess is a cold bath for the mind',
  author: 'Sir John Simon'
},
{
  quote: "Becoming successful at Chess allows you to discover yourown personality. That's what I want for the kids I teach",
  author: 'Saudin Robovic'
},
{
  quote: 'Chess is so inspiring that I do not believe a good player iscapable of having an evil thought during the game',
  author: 'Wilhelm Steinitz'
},
{
  quote: 'You are for me the Queen on d8 and I am the Pawn on d7!! ',
  author: 'GM Eduard Gufeld'
},
{
  quote: 'By playing at Chess then, we may learn:    First: Foresight...    Second: Circumspection...    Third: Caution...And lastly, we learn by Chess the habit of not being discouraged bypresent bad appearances in the state of our affairs, the habit of hoping for a favorable chance, and that of persevering in the secrets of resources',
  author: 'Benjamin Franklin'
},
{
  quote: 'I prefer to lose a really good game than to win a bad one',
  author: 'David Levy'
},
{
  quote: 'Capture of the adverse King is the ultimate but not the first object of the game',
  author: 'William Steinitz'
},
{
  quote: 'When I have White, I win because I am white;When I have Black, I win because I am Bogolyubov',
  author: 'Bogolyubov'
},
{ quote: 'Every Pawn is a potential Queen', author: 'James Mason' },
{
  quote: 'Chess is in its essence a game, in its form an art,and in its execution a science',
  author: 'Baron Tassilo'
},
{
  quote: 'No price is too great for the scalp of the enemy King',
  author: 'Koblentz'
},
{
  quote: 'In life, as in Chess, ones own Pawns block ones way.  A mansvery wealth, ease, leisure, children, books, which should helphim to win, more often checkmate him',
  author: 'Charles Buxton'
},
{
  quote: 'Chess is a part of culture and if a culture isdeclining then Chess too will decline',
  author: 'Mikhail Botvinnik'
},
{
  quote: 'A good sacrifice is one that is not necessarily soundbut leaves your opponent dazed and confused',
  author: 'Rudolph Spielmann'
},
{
  quote: 'Chess, like any creative activity, can exist only throughthe combined efforts of those who have creative talent, andthose who have the ability to organize their creative work',
  author: 'Mikhail Botvinnik'
},
{ quote: 'One bad move nullifies forty good ones', author: 'Horowitz' },
{
  quote: 'Place the contents of the Chess box in a hat, shake them upvigorously, pour them on the board from a height of twofeet, and you get the style of Steinitz',
  author: 'H. E. Bird'
},
{
  quote: 'I have never in my life played the French Defence,which is the dullest of all openings',
  author: 'Wilhelm Steinitz'
},
{
  quote: 'Pawns are born free, yet they are everywhere in chains',
  author: 'Rick Kennedy'
},
{
  quote: 'It is not a move, even the best movethat you must seek, but a realizable plan',
  author: 'Eugene Znosko-Borovsky'
},
{
  quote: 'Those who say they understand Chess, understand nothing',
  author: 'Robert Hubner'
},
{
  quote: 'Good offense and good defense bothbegin with good development',
  author: 'Bruce A. Moon'
},
{
  quote: 'Botvinnik tried to take the mystery out of Chess, always relatingit to situations in ordinary life. He used to call Chess a typicalinexact problem similar to those which people are alwayshaving to solve in everyday life',
  author: 'Garry Kasparov'
},
{
  quote: 'A good player is always lucky',
  author: 'Jose Raul Capablanca'
},
{
  quote: 'The sign of a great Master is his ability to wina won game quickly and painlessly',
  author: 'Irving Chernev'
},
{
  quote: 'One of these modest little moves may be more embarrassing to your opponent than the biggest threat',
  author: 'Siegbert Tarrasch'
},
{
  quote: 'Live, lose, and learn, by observing your opponent how to win',
  author: 'Amber Steenbock'
},
{ quote: 'The older I grow, the more I value Pawns', author: 'Keres' },
{
  quote: 'Everything is in a state of flux, and this includes the world of Chess',
  author: 'Mikhail Botvinnik'
},
{
  quote: "The beauty of a move lies not in its' appearancebut in the thought behind it",
  author: 'Aaron Nimzovich'
},
{
  quote: 'My God, Bobby Fischer plays so simply',
  author: 'Alexei Suetin'
},
{
  quote: 'You need not play well - just help your opponent to play badly',
  author: 'Genrikh Chepukaitis'
},
{
  quote: "It is difficult to play against Einstein's theory --on his first loss to Fischer",
  author: 'Mikhail Tal'
},
{
  quote: 'The only thing Chess players have in common is Chess',
  author: 'Lodewijk Prins'
},
{
  quote: 'Bobby just drops the pieces and they fall on the right squares',
  author: 'Miguel Najdorf'
},
{
  quote: 'We must make sure that Chess will not be like a dead language,very interesting, but for a very small group',
  author: 'Sytze Faber'
},
{
  quote: 'The passion for playing Chess is one of themost unaccountable in the world',
  author: 'H.G. Wells'
},
{
  quote: 'Chess is so interesting in itself, as not to need the view of gain toinduce engaging in it; and thence it is never played for money',
  author: 'Benjamin Franklin'
},
{
  quote: 'The enormous mental resilience, without which no Chess playercan exist, was so much taken up by Chess that he couldnever free his mind of this game',
  author: 'Albert Einstein'
},
{
  quote: "Nowadays, when you're not a grandmaster at 14, you can forget about it",
  author: 'Anand Viswanathan'
},
{
  quote: 'Do you realize Fischer almost never has any bad pieces? He exchanges them, and the bad pieces remain with his opponents',
  author: 'Yuri Balashov'
},
{
  quote: "It is always better to sacrifice your opponent's men",
  author: 'Savielly Tartakower'
},
{
  quote: 'In Chess, as it is played by masters, chance is practically eliminated',
  author: 'Emanuel Lasker'
},
{
  quote: "You know you're going to lose. Even when I was ahead I knew I was going to lose  --on playing against Fischer",
  author: 'Andrew Soltis'
},
{
  quote: "I won't play with you anymore. You have insulted my friend--when an opponent cursed himself for a blunder",
  author: 'Miguel Najdorf'
},
{
  quote: "You know, comrade Pachman, I don't enjoy being a Minister,I would rather play Chess like you",
  author: 'Che Guevara'
},
{
  quote: 'It began to feel as though you were playing against Chess itself--on playing against Robert Fischer',
  author: 'Walter Shipman'
},
{ quote: 'Checkers is for tramps', author: 'Paul Morphy' },
{
  quote: 'When you play Bobby, it is not a question if you win or lose.It is a question if you survive',
  author: 'Boris Spassky'
},
{
  quote: "When you absolutely don't know what to do anymore, it is time to panic",
  author: 'John van der Wiel'
},
{ quote: 'We like to think', author: 'Gary Kasparov' },
{
  quote: 'Dazzling combinations are for the many, shifting wood is for the few',
  author: 'Georg Kieninger'
},
{
  quote: 'In complicated positions, Bobby Fischer hardly had to be afraid of anybody',
  author: 'Paul Keres'
},
{
  quote: 'It was clear to me that the vulnerable point of the American Grandmaster Bobby Fischer was in double-edged, hanging, irrationalpositions, where he often failed to find a win even in a won position',
  author: 'Efim Geller'
},
{
  quote: 'I love all positions. Give me a difficult positional game, I will play it.But totally won positions, I cannot stand them',
  author: 'Hein Donner'
},
{
  quote: "In Fischer's hands, a slight theoretical advantageis as good a being a Queen ahead",
  author: 'Isaac Kashdan'
},
{ quote: 'I still hope to kill Fischer', author: 'Boris Spassky' },
{ quote: 'Is Bobby Fischer quite sane?', author: 'Salo Flohr' },
{
  quote: 'Robert Fischer is a law unto himself',
  author: 'Larry Evans'
},
{
  quote: 'Fischer is under obligation to nobody',
  author: 'Joseph Platz'
},
{
  quote: "Bobby Fischer's current state of mind is indeed a tragedy. One of theworlds greatest Chess players - the pride and sorrow of American Chess",
  author: 'Frank Brady'
},
{
  quote: 'Fischer is an American Chess tragedy on par with Morphy and Pillsbury',
  author: 'Mig Greengard'
},
{
  quote: 'Nonsense was the last thing Fischer was interested in,as far as Chess was concerned',
  author: 'Elie Agur'
},
{
  quote: 'Fischer is the strongest player in the world. In fact,the strongest player who ever lived',
  author: 'Larry Evans'
},
{
  quote: "If you aren't afraid of Spassky, then I have removed the element of money",
  author: 'Jim Slater'
},
{
  quote: 'I guess a certain amount of temperament is expected of Chess geniuses',
  author: 'Ron Gross'
},
{
  quote: 'Fischer sacrificed virtually everything most of us weakies to use his term value, respect, and cherish, for the sake of an artful, often beautiful board game, for the ambivalent privilege of being its greatest master',
  author: 'Paul Kollar'
},
{
  quote: 'Fischer Chess play was always razor-sharp, rational and brilliant. One of the best ever',
  author: 'Dave Regis'
},
{
  quote: 'Fischer wanted to give the Russians a taste of their own medicine',
  author: 'Larry Evans'
},
{
  quote: 'With or without the title, Bobby Fischer wasunquestionably the greatest player of his time',
  author: 'Burt Hochberg'
},
{
  quote: "Fischer is completely natural. He plays no roles.He's like a child. Very, very simple",
  author: 'Zita Rajcsanyi'
},
{
  quote: 'Spassky will not be psyched out by Fischer',
  author: 'Mike Goodall'
},
{
  quote: 'Already at 15 years of age he was a Grandmaster, a record atthat time, and his battle to reach the top was the backgroundfor all the major Chess events of the 1960',
  author: 'Tim Harding'
},
{
  quote: 'Fischer, who may or may not be mad as a hatter,has every right to be horrified',
  author: 'Jeremy Silman'
},
{
  quote: "When I asked Fischer why he had not played a certain move in ourgame, he replied: 'Well, you laughed when I wrote it down!'",
  author: 'Mikhail Tal'
},
{
  quote: 'I look one move ahead... the best!',
  author: 'Siegbert Tarrasch'
},
{
  quote: 'Fischer prefers to enter Chess history alone',
  author: 'Miguel Najdorf'
},
{
  quote: 'Bobby is the most misunderstood, misquoted celebritywalking the face of this earth',
  author: 'Yasser Seirawan'
},
{
  quote: "When you don't know what to play, wait for an idea to come into your opponent's mind. You may be sure that idea will be wrong",
  author: 'Siegbert Tarrasch'
},
{
  quote: 'There is no remorse like the remorse of Chess',
  author: 'H. G. Wells'
},
{
  quote: 'By this measure on the gap between Fischer & his contemporaries,I consider him the greatest world champion',
  author: 'Garry Kasparov'
},
{
  quote: 'By the beauty of his games, the clarity of his play, and the brillianceof his ideas, Fischer made himself an artist of the samestature as Brahms, Rembrandt, and Shakespeare',
  author: 'David Levy'
},
{
  quote: 'Chess is a terrible game. If you have no center, your opponenthas a freer position. If you do have a center, then youreally have something to worry about!',
  author: 'Siegbert Tarrasch'
},
{
  quote: "Many Chess players were surprised when after the game, Fischer quietly explained: 'I had already analyzed this possibility' in a positionwhich I thought was not possible to foresee from the opening",
  author: 'Mikhail Tal'
},
{
  quote: 'Suddenly it was obvious to me in my analysis I had missed whatFischer had found with the greatest of ease at the board',
  author: 'Mikhail Botvinnik'
},
{
  quote: 'The King is a fighting piece. Use it!',
  author: 'Wilhelm Steinitz'
},
{
  quote: 'A thorough understanding of the typical mating continuations makesthe most complicated sacrificial combinations leading up to themnot only not difficult, but almost a matter of course',
  author: 'Siegbert Tarrasch'
},
{
  quote: 'Bobby Fischer is the greatest Chess genius of all time!',
  author: 'Alexander Kotov'
},
{
  quote: 'The laws of Chess do not permit a free choice:you have to move whether you like it or not',
  author: 'Emanuel Lasker'
},
{
  quote: 'First-class players lose to second-class players becausesecond-class players sometimes play a first-class game',
  author: 'Siegbert Tarrasch'
},
{
  quote: 'Bobby is the finest Chess player this country ever produced. His memoryfor the moves, his brilliance in dreaming up combinations,and his fierce determination to win are uncanny',
  author: 'John Collins'
},
{
  quote: 'After a bad opening, there is hope for the middle game. After a badmiddle game, there is hope for the endgame. But once you arein the endgame, the moment of truth has arrived',
  author: 'Edmar Mednis'
},
{
  quote: "Weak points or holes in the opponent's position mustbe occupied by pieces not Pawns",
  author: 'Siegbert Tarrasch'
},
{
  quote: 'There is only one thing Fischer does in Chess without pleasure: to lose!',
  author: 'Boris Spassky'
},
{
  quote: 'Bobby Fischer is the greatest Chess player who has ever lived',
  author: 'Ken Smith'
},
{
  quote: 'Up to this point White has been following well-known analysis. Butnow he makes a fatal error: he begins to use his own head',
  author: 'Siegbert Tarrasch'
},
{
  quote: 'Fischer was a master of clarity and a king of artful positioning. His opponents would see where he was going but were powerless to stop him',
  author: 'Bruce Pandolfini'
},
{
  quote: 'No other master has such a terrific will to win. At the board he radiates danger, and even the strongest opponents tend to freeze, like rabbits when they smell a panther. Even his weaknesses are dangerous. As white, his opening game is predictable - you can make plans against it - but so strong that your plans almost never work. In the middle game his precision and invention are fabulous, and in the end game you simply cannot beat him',
  author: 'Anonymous German Expert'
},
{
  quote: 'White lost because he failed to remember the rightcontinuation and had to think up the moves himself',
  author: 'Siegbert Tarrasch'
},
{
  quote: "Not only will I predict his triumph over Botvinnik, but I'll go further and say that he'll probably be the greatest Chess player that ever lived",
  author: 'John Collins'
},
{
  quote: 'I consider Fischer to be one of the greatest opening experts ever',
  author: 'Keith Hayward'
},
{
  quote: 'I like to say that Bobby Fischer was the greatest player ever. Butwhat made Fischer a genius was his ability to blend an Americanfreshness and pragmatism with Russian ideas about strategy',
  author: 'Bruce Pandolfini'
},
{
  quote: 'At this time Fischer is simply a level above allthe best Chessplayers in the world',
  author: 'John Jacobs'
},
{
  quote: 'I have always a slight feeling of pity for the man whohas no knowledge of Chess',
  author: 'Siegbert Tarrasch'
},
{
  quote: "There's never before been a Chess player with such a thorough knowledgeof the intricacies of the game and such an absolutely indomitable willto win. I think Bobby is the greatest player that ever lived",
  author: 'Lisa Lane'
},
{
  quote: "He who takes the Queen's Knight's Pawn will sleep in the streetsAnonymous  302",
  author: "I had a toothache during the first game. In the second game I had aheadache. In the third game it was an attack of rheumatism. In thefourth game, I wasn't feeling well. And in the fifth game? Well,must one have to win every game?"
},
{
  quote: 'Siegbert Tarrasch  303',
  author: 'The stomach is an essential part of the Chess masterBent Larsen'
},
{
  quote: 'We must make sure that Chess will not be like a dead language, very interesting, but for a very small group',
  author: 'Sytze Faber'
},
{
  quote: "I'm not a materialistic person, in that, I don't suffer the lack or loss of money.  The absence of worldly goods I don't look back on. For Chess is a way I can be as materialistic as I want without having to sell my soul ",
  author: 'Jamie Walter Adams'
},
{
  quote: 'These are not pieces, they are men! For any man to walk into the line of fire will be one less man in your army to fight for you. Value every troop and use him wisely, throw him not to the dogs as he is there to serve his King ',
  author: 'Jamie Walter Adams'
},
{
  quote: "Chess isn't a game of speed, it is a game of speech through actions",
  author: 'Matthew Selman'
},
]

module.exports = quotesArray;