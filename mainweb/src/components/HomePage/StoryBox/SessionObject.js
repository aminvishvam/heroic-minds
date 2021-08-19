import Image1 from "../../../assets/HomePageAssets/sessionImg1.png";
import Image2 from "../../../assets/HomePageAssets/sessionImg2.png";
import Image3 from "../../../assets/HomePageAssets/sessionImg3.png";
import Image4 from "../../../assets/HomePageAssets/sessionImg4.png";
import Audio1 from "../../../assets/HomePageAssets/storyAudio1.wav";
import Audio2 from "../../../assets/HomePageAssets/storyAudio2.wav";
import Audio3 from "../../../assets/HomePageAssets/storyAudio3.wav";
import Audio4 from "../../../assets/HomePageAssets/storyAudio4.wav";

const SessionObject = [

    {
        key: 1,
        title: "Letter To Yourself",
        subtitle: "Positive Psychology",
        audio: Audio1,
        audioImg: Image1,
        journalQuestions: {
            question1:
                "Does the work in your life serve a strong purpose like David? Are you approaching your work with deep rooted purpose? What is that purpose?",
            question2:
                "Could you find greater purpose in your work? Who or what is it benefitting? Why? How? How can you approach your work such that it increases the purpose it has?",
        },
    },

    {
        key: 2,
        title: "Here & Now",
        subtitle: "Gestalt Psychology",
        audio: Audio2,
        audioImg: Image2,
        journalQuestions: {
            question1:
                "Is there a relationship in your life that you would like to improve? How so?",
            question2:
                "How does deciding to empower someone else will bring out the greatest parts of you?",
        },
    },

    {
        key: 3,
        title: "Re-Wire Thought",
        subtitle: "CBT",
        audio: Audio3,
        audioImg: Image3,
        journalQuestions: {
            question1:
                "Do you think people are looking for meaning or the rapture of being alive? What are you looking for?",
            question2:
                "How do you seek the greatest good for the world in your daily life? How does it improve your life? How does it invigorate your life?",
        },
    },

    {
        key: 4,
        title: "The Reason Why",
        subtitle: "Existential Psychology",
        audio: Audio4,
        audioImg: Image4,
        journalQuestions: {
            question1:
                "In the dark reflection of a meaningless life, what do you think of to find light in the dark?",
            question2:
                "In all your daily tasks and duties, which bring the greatest purpose? what is that purpose? where could you find purpose in other tasks?",
        },
    },
];


const SessionTranscript = ({ index }) => {
    switch (parseInt(index)) {


        case 1:
            return (
                <p>
                    David was the youngest of eight Israli brothers. He was the smallest
                    and weakest of them all. David was the only one of his brothers not
                    chosen to fight in the army. Instead, his job was to be a shepherd,
                    taking care of and herding the family's sheep.
                    <br />
                    <br />
                    While in the fields all alone, lions and bears tried to attack the
                    sheep. Scared and searching for a way to protect the sheep David began
                    using a slingshot and rocks to scare the animals away. Once the
                    animals scurried away and David was able to catch his breath, he
                    wondered where the fearlessness came from. Then he realized, the
                    desire to protect the sheep, uncovered a courage deep within him. Time
                    and time again this occurred, the predators would come, he would focus
                    on nothing other than doing the best he could for the sheep and for
                    his family. This allowed David to perfect his ability to fight and
                    specifically use a slingshot and stones as a weapon. David’s family
                    did not know of the lions or bears nor that he could fight or use a
                    slingshot.
                    <br />
                    <br />
                    One day, David and his family got word that there was a giant man
                    named Goliath in the opposing Philistine army threatening to fight
                    anyone.
                    <br />
                    <br />
                    While his seven brothers went off to battle, David was stuck at home.
                    <br />
                    <br />
                    David was leaving the house one day to tend the pasture and care for
                    the sheep.
                    <br />
                    <br />
                    His father stopped him and asked if he would be willing to bring
                    something to his brothers at the battle. He quickly obliged and began
                    his journey to meet his brothers.
                    <br />
                    <br />
                    When David arrived he saw his seven brothers standing in a crowd of
                    other Israli warriors. They all looked scared and worried. As David
                    glanced above their heads he noticed a man in the distance at least
                    three times bigger than any man he had ever seen. This man was covered
                    in body armour and holding a big metal sword.
                    <br />
                    <br />
                    David approached his brothers. He asked them, “what is going on?”
                    <br />
                    His brothers told him that if no one was going to fight goliath, he
                    would make all of the Israelites his slaves.
                    <br />
                    <br />
                    David thought to himself about protecting the sheep, when he was
                    scared but needed to protect his own, he found a courage deep within
                    him that would overpower the fear that he felt.
                    <br />
                    <br />
                    David asked his brothers, “who is going to fight him?”
                    <br />
                    <br />
                    His brothers, without hesitation said, “no one, none of us want to die
                    for no reason. Not even the king has any idea of what to do.”
                    <br />
                    <br />
                    David looked at his brothers and the other warriors. He saw how much
                    bigger and stronger they were than he was. He thought to himself, they
                    must be missing the courage and fearlessness that I have experienced.
                    <br />
                    <br />
                    David, shy to admit that he believed he could take on the giant,
                    tapped one of his brothers on the shoulder, and said, “I will fight
                    him.”
                    <br />
                    <br />
                    His brothers said, “are you sure? A small, weak shepherd boy armed
                    with a slingshot and a few stones, is going to fight a giant?”
                    <br />
                    <br />
                    David responded, yes.
                    <br />
                    <br />
                    One of the warriors hands him a shield and says, you will need this.
                    <br />
                    <br />
                    David, not strong enough to carry it, pushed the offering away.
                    <br />
                    <br />
                    Everyone but David was overwhelmed by the giant. They all thought
                    ‘Look at the size of him!’ but David looked at the giant in relation
                    to the courage that he had felt many times when he was out in the
                    field alone. He also thought, this giant man must think because he is
                    big, and strong, that he can survive by his own rules, killing,
                    abusing and making life as brutal as possible for others, which David
                    knew, meant that he didn’t have the spirit in his heart, and the
                    courage that comes from serving the greatest good.
                    <br />
                    <br />
                    So as others saw Goliath as too big to fight David saw Goliath as too
                    big to miss.
                    <br />
                    <br />
                    David stepped out of the crowd to approach Goliath.
                    <br />
                    <br />
                    Goliath, said to David, “I am a dog, that you come at me with sticks.”
                    Meaning, you think this is a game? You bring me this insignificant
                    challenge?
                    <br />
                    <br />
                    David responded to Goliath, “You come against me with a sword, and
                    spear and Javelin, and that is all. But I come against you with
                    fearlessness and courage from serving my people.” Meaning, you can
                    have all the tools and weapons in the world but if you do it for the
                    wrong reasons, without a powerful spirit in your heart, you don't have
                    anything powerful.”
                    <br />
                    <br />
                    As Goliath began to come toward David, David ran toward him.
                    <br />
                    <br />
                    David reached into his bag and grabbed a stone, he pulled it back in
                    his slingshot and let go.
                    <br />
                    <br />
                    He hit Goliath square in the forehead, and he fell to the ground.
                    <br />
                    <br />
                    Little, weak, quiet David defeated Goliath.
                    <br />
                    <br />
                    The point of the story isn’t just the underdog, courage, that the
                    bigger they are the harder they fall, or that you can beat strength
                    with intellect.
                    <br />
                    <br />
                    It is the courage that comes through purely wanting to serve others.
                    That is how David found his courage in the field protecting the sheep.
                    That is why David never had the desire to tell anyone he defeated the
                    lions and bears, that he could use a slingshot or that he had the
                    ability to be fearless. So much so that in the original story in the
                    bible, David says things to himself such as, the lord is my shepherd,
                    I lack nothing. Even though I walk through the darkest valley, I will
                    fear no evil, for you are with me. I know in the bible this refers to
                    a god, but the idea of god itself refers to bringing heaven to earth,
                    therefore serving other people to improve the world. If you are that
                    confident in yourself from serving the world, you don't have to tell a
                    soul how powerful you are nor do you have to act in any way to appear
                    above anyone else.
                    <br />
                    <br />
                    In the story there is no sign of hesitation in David whether he can or
                    cannot handle Goliath because the focus is taken off of him. I realize
                    this story involves the concept of potential death, which is not to be
                    taken literally. The message is when you do completely serve others
                    and not yourself, there is no longer a reason to have any fear. When
                    the sole priority becomes serving others there is an uncovering of a
                    deep resolve and courage that you feel. We see this in the paternal
                    instinct to protect loved ones, to protect teammates, to protect
                    friends, this is not some far off idea.
                    <br />
                    <br />
                    In this approach to life, you still hear and think about the fear, but
                    the hero chooses whether or not to listen to it.
                    <br />
                    <br />
                    To conclude when we think of being a leader often we think we have to
                    be put into that role in which to act as a leader, especially in
                    business or sport. David makes it abundantly clear that, you have the
                    ability to lead in any moment, even while alone and no one is
                    watching. Your time will come that people will see.
                    <br />
                    <br />
                </p>
            );

        case 2:
            return (
                <p>
                    Sia directed a musical drama titled, Music and she also wrote the song
                    “Together” which is the theme song for the movie. Both are referenced
                    here.
                    <br />
                    <br />
                    Zu is a young woman struggling with substance abuse trying to turn her
                    life around.
                    <br />
                    <br />
                    The problem is that she is unable to find the courage to take
                    responsibility for her actions and make real change.
                    <br />
                    <br />
                    Zu finds herself in debt and begins looking for a loophole, a way to
                    repay the debt with money she doesn’ have to work for. She assumes
                    since her grandmother's passing that she could use money from the will
                    to pay the debt. Only to find out that her grandmother did not leave
                    her any money. Her grandmother left her something else.
                    <br />
                    <br />
                    Zu was left with the custody of her autistic half sister named Music.
                    <br />
                    <br />
                    Initially, Zu is not able to properly care for or love Music. Their
                    relationship is empty and troubled.
                    <br />
                    <br />
                    One day in the midst of yelling and crying the neighbour knocked on
                    the door to see what was going on. Zu said to the neighbour, while
                    sounding defeated, “How am I supposed to take care of Music, when I
                    can't even take care of myself?”
                    <br />
                    <br />
                    Day after day. Music sits in the apartment with her headphones on
                    feeling alone even though Zu is sitting an arms length away. Music is
                    unsure what to think. She is not ready to engage in any sort of
                    relationship with Zu because there was no expression of devotion, care
                    or appreciation for her.
                    <br />
                    <br />
                    Finally, Zu attempts to start loving Music, however, she does so
                    rationally and strategically. She attempts to check the boxes, provide
                    food for her, give her toys, and the opportunity to watch tv. It is a
                    negotiated agreement that is a transaction of you do x and I’ll do y
                    and that should equal love. But it doesn’t work.
                    <br />
                    <br />
                    As a lyric in the movie goes, “come on, give me some Stevie Wonder.”
                    Meaning, could Zu find the ability to love that is not based on
                    anything physical, not based on a contractual agreement? It is a
                    feeling of love for something that you may not necessarily be able to
                    see. Again, Zu does try to will a feeling of love upon herself and
                    force better behaviours into her life hoping that would lead to this
                    powerful feeling of love. But it doesn’t work.
                    <br />
                    <br />
                    In debt and wishing she could properly take care of Music, Zu finally
                    breaks down. She cries in frustration because she is not able to
                    connect with Music. She throws books across the room in anger because
                    she is unhappy with who she has become. She wants to be better but has
                    not been able to make real changes to improve herself.
                    <br />
                    <br />
                    Then one afternoon, Music is sitting at the kitchen table
                    hyper-focused on drawing. Zu, standing across the room notices that
                    her blue headphones are about to fall off. While Music continues to
                    draw vigorously with her head down, Zu walks over, bends down and
                    readjusts her headphones. Music looks up, taking a break from her
                    important drawing. She cracks a little smile, just enough to barely
                    show her teeth and her eyes squint ever so slightly. Something Zu had
                    never seen before.
                    <br />
                    <br />
                    Zu feels a warmth, a connection, an energy, she forgets about her
                    worries for a brief moment.
                    <br />
                    <br />
                    The next morning, Zu wanted to experience that feeling again. She woke
                    up 20 minutes early to make breakfast for Music, which is usually a
                    last minute bowl of cereal. Zu positions the eggs and ketchup on the
                    plate to make a smiley face. She then calls Music to come to the table
                    for breakfast.
                    <br />
                    <br />
                    While Zu washes the dishes she looks out the corner of her eye with
                    curiosity for whether Music will notice the smiley face or not.
                    <br />
                    <br />
                    Not expecting a well-prepared breakfast, Music sits down at the
                    kitchen table. She looks down at her plate with curiosity and soon
                    discovers what she is looking at. She looks up and smiles at Zu. This
                    time a full smile, teeth showing and eyes squinting. Zu smiled
                    back.And then, that same feeling came over her, a warmth, a
                    connection. Her worries vanish. A feeling of desire to improve herself
                    for Music takes over.
                    <br />
                    <br />
                    More and more, Zu found the energy and time to communicate with Music,
                    to commit to Music, to empower Music, to make music feel loved,
                    encouraged, wanted. At this point in the movie Zu says, “I am actually
                    learning how to love because I love her and I am going to continue
                    because now she is helping me.”
                    <br />
                    <br />
                    Finally, Zu figured it out. The love for Music and the desire to
                    empower Music, is what energizes her to change her bad habits. She was
                    able to go from the person she was to the person she wanted to be… to
                    the person people needed her to be.
                    <br />
                    <br />
                    As the lyrics go,
                    <br />
                    <br />
                    “You can't love me unless you love you too.”
                    <br />
                    <br />
                    The idea of love for yourself in this movie is not patting yourself on
                    the back, buying yourself something new or lying to yourself about how
                    great you are.
                    <br />
                    <br />
                    This love is the desire to make life better for someone else and in
                    the attempt to do so, one must bring about the best in themselves.
                    <br />
                    <br />
                    In realizing the impact she was making on Music and the fact that she
                    was improving her own life, Zu felt a strong purpose and fulfillment,
                    which created more energy to improve herself. Zu then had the ability
                    to make sacrifices and withstand change. Zu was able to go from
                    thinking about making change to actually making change. She can go
                    from looking for a reason to make change, to having every reason in
                    the world.
                    <br />
                    <br />
                </p>
            );

        case 3:
            return (
                <p>
                    Crashing through stadium support beams and flying through storm
                    clouds, Harry finds himself on the brink of death while seeking the
                    golden snitch. All while being chased by evil and arch rival Draco
                    Malfoy. Catching the snitch could of course win the game for his team
                    and his school house,
                    <br />
                    <br />
                    Gryffindor. Simply seeking the golden snitch could mean severe injury
                    or even death.
                    <br />
                    <br />
                    For those that have seen Harry Potter you have experienced the
                    somewhat bazaar but intriguing game of Quidditch.
                    <br />
                    <br />
                    The game is rather simple, the first team to earn 150 points wins. To
                    do that, you can rack up individual goals worth 10 points, or your
                    designated seeker can catch an elusive, winged ball called the Snitch,
                    to earn 150 points and end the game.
                    <br />
                    <br />
                    The game appears as a hybrid of soccer and water polo although instead
                    of running or swimming, the players fly around on broomsticks. There
                    are offensive players, defensive players, and technically goalies as
                    well.
                    <br />
                    <br />
                    Harry is the seeker for team Gryffindor. A position bestowed upon the
                    most talented and courageous player on each team. His job is to catch,
                    with his bare hands, the near impossible to see, flying snitch. The
                    snitch has a mind of its own, flying wherever it chooses, even out of
                    the playing area at times.
                    <br />
                    <br />
                    Those that seek the snitch are led on a challenging and potentially
                    deadly journey.
                    <br />
                    <br />
                    Catching the snitch instantly ends the game and brings victory to your
                    team. This means that in the context of the game, catching the snitch
                    is the greatest thing you can do.
                    <br />
                    <br />
                    When you look at the game of Quidditch, at what appears to be
                    controlled chaos, with people flying around on broomsticks, balls
                    being tossed in the air, bodies bashing into one another- one may see
                    two different games being played. One of those games is controlled by
                    a finite set of rules which is the game everyone but the seekers are
                    playing. Slowly and incrementally earning points toward the
                    game-winning 150 points. The other game, which only the seekers play,
                    is one that appears to lack rules and even strategy. The pursuit of
                    the snitch is a journey into the unknown where learning tactics and
                    strategy are part of the process. The seeker forges their own path of
                    discovery toward success. This is what makes it such a courageous and
                    exciting position.
                    <br />
                    <br />
                    As Harry sets out to catch the snitch he is not distracted by the
                    other students playing the traditional approach to the game, he does
                    not worry about failure, judgement, or whether he is doing the right
                    thing. But how?
                    <br />
                    <br />
                    Harry is not distracted by others playing the traditional game because
                    the game he is playing is so captivating that it leaves no cognitive
                    space to worry about irrelevant factors. Thoughts of failure,
                    judgement and whether he is doing the right thing are drowned by the
                    potential benefits to his team and the fact that he is forging his own
                    path as he plays. Mistakes and errors are an immanent part of the
                    process.
                    <br />
                    <br />
                    The journey of seeking the snitch represents the optimal change that
                    happens as you seek the highest good. Distraction falls to the
                    way-side, fear decreases, contemplation vanishes, and a sense of time
                    is skewed.
                    <br />
                    Today, people often refer to this state as flow.
                    <br />
                    <br />
                    The famous psychologist, Carl Rogers states, “a person is a fluid
                    process, not a fixed and static entity; a flowing river of change, not
                    a block of solid material; a continually changing constellation of
                    potentialities, not a fixed quantity of traits.”
                    <br />
                    <br />
                    It is in seeking the snitch that the hero surfaces. It is not the end
                    goal of completing the task and catching the snitch.
                    <br />
                    <br />
                    As dull as it may sound, in this context, the snitch itself does not
                    hold the answer or the powerful meaning. Rather, it is the pursuit of
                    the greatest good in and of itself that brings about the greatest
                    parts of an individual and likely the greatest life experience.
                    <br />
                    <br />
                    Joseph Campbell, professor of literature and arguably the greatest
                    expert on heroism said,
                    <br />
                    <br />
                    “People say that what we are all seeking is a meaning for life. I
                    don’t think that’s what we’re really seeking. I think that what we’re
                    seeking is an experience of being alive, so that our life experiences
                    on the purely physical plane will resonate with our own innermost
                    being and reality, so that we actually feel the rapture of being
                    alive.”
                    <br />
                    <br />
                    It is the feelings that come with this way of living, to catch the
                    snitch, to seek the greatest good, to serve others, that stimulate the
                    human experience. Seeking of the snitch is what resurrects the
                    individual from the traditional way of living to an invigorating,
                    purpose-driven life.
                    <br />
                    <br />
                </p>
            );

        case 4:
            return (
                <p>
                    True Detective is one of the most woefully bitter and bleak TV shows
                    to emerge in recent years. Despite its somber tone and themes of loss,
                    yearning and mortality, it connected with a massive audience. The
                    plot—a pair of detectives’ relentlessly hunting down a serial killer.
                    As if the world hasn’t heard this plot before, it was definitely a
                    worn out one.
                    <br />
                    <br />
                    So what was at the heart of its enormous appeal?
                    <br />
                    <br />
                    Maybe the show was a mirror, reflecting the vacuum at the heart of our
                    culture and our yearning for meaning in a world that can seem entirely
                    superficial and achingly numb. Or was it actually a uniquely riveting
                    exploration of nihilism, the belief that nothing has any real value,
                    and the fact that we could experience this vicariously through the
                    journeys of the two lead characters?
                    <br />
                    <br />
                    On the surface they were truly polar opposites:
                    <br />
                    <br />
                    Marty Hart is a ‘family man’, staunch believer in the American Dream,
                    upholder of society’s values and institutions, and a solid team player
                    who gets on well with his work colleagues. On the inside, Marty feels
                    the need for something more intriguing than a dad who has to get home
                    to mow the lawn. This desire for a more engaging life manifests itself
                    in his actions such as affairs that he hides from his wife as well as
                    reckless behaviours at work. In one scenario he shoots a suspect point
                    blank, in another, he fights his partner Rustin in a parking lot. All
                    what appears to be out of impulse. Marty likes to carry on as if
                    everything is okay, but of course, his actions tell a different story.
                    <br />
                    <br />
                    On the other hand, Rustin Cohle is a brooding, intellectual skeptic
                    and loner at odds with both his workmates and the world at large. His
                    lengthy and profound philosophical discourses proves he may be the
                    only man able to compete in conversation with the infamous Aristotle
                    or Friedrich Nietzsche. Of course for Rustin, these philosophical
                    reflections are an attempt to answer the same life riddle that Marty
                    is struggling with.
                    <br />
                    <br />
                    Rustin says things like,
                    <br />
                    <br />
                    ‘Human consciousness is a tragic misstep in evolution. We are
                    creatures that should not by natural law exist, each of us programmed
                    to think we are somebody, when in fact everybody is nobody. The only
                    honourable thing for our species to do is deny our programming and
                    walk hand in hand into extinction’.
                    <br />
                    <br />
                    Hearing such a dark depiction of life can be quite intimidating. But,
                    one may realize that it is in this darkness that we can find the
                    light, our own light. The reflection on such a dark idea with the
                    realization that the ability to find the light lies in our own mind,
                    may be the guide to life's often ambiguous meaning.
                    <br />
                    <br />
                    These musings— delivered during lengthy car rides through desolate
                    Ozark hinterlands-- drive Marty to distraction but it’s not just
                    Rustin who possesses a dangerous nihilism; Marty secretly harbours his
                    own self-destructive black hole deep in his heart and both men are on
                    paths that will eventually lead to heart-breaking decay and loss in
                    their lives.
                    <br />
                    <br />
                    This is all happening while a serial killer is on the loose and it is
                    their sole job to trace their steps and lock them up.
                    <br />
                    <br />
                    While the main plot boils, a subplot explores this personal despair as
                    it eats away at both men from the inside and their personal lives
                    unravel; only the solving of the case can have any hope of redeeming
                    them both.
                    <br />
                    <br />
                    Work proves to be their ultimate salvation or maybe, a break from the
                    continued search to fill their void of meaning. The solving of the
                    case leads to a catharsis or cleansing for both men: they become
                    reconciled to their pasts, find comfort in the present and even form a
                    tentative hope for the future. But the nihilism and despair at the
                    heart of the story is what lingers.
                    <br />
                    <br />
                    It’s ok to identify with these journeys but would we want to
                    experience them for real? The bone-deep feelings of despair and
                    hopelessness with reliance on external factors such as our career to
                    rectify the lack of fulfillment or meaning? The utter lack of faith in
                    anything, even oneself?
                    <br />
                    <br />
                    Many of us go through a kind of imitated ‘pop-nihilism’ in our teens
                    as evidenced by punk, goth, disrespecting superiors, risky behaviours,
                    etc. This is nihilism as a play on words, meme and image rather than
                    the real thing which often emerges later in life and the consequences
                    of which are often more damaging than black lipstick and a cider
                    hangover.
                    <br />
                    <br />
                    So how do we avoid nihilism casting a shadow over our lives?
                    <br />
                    <br />
                    Nietzsche countered it with the idea of self-knowledge, with the
                    notion of self-creation, the drive to take control and mould nature in
                    the way you want, and find meaning in life experiences. So whatever
                    the factors that make you lose hope, death, despair, sickness, love,
                    failure-- the essence of the human spirit is to be able to take
                    control and react, and thus find meaning in at least the effort, if
                    not in its success.
                    <br />
                    <br />
                    “You say, it's dark. And in truth, I did place a cloud before your
                    sun. But do you not see how the edges of the cloud are already glowing
                    and turning light.” - A quote from Friedrich Nietzsche.
                    <br />
                    <br />
                    The stoic and platonic philosophers offer another perspective: use the
                    mind to understand the world around you, including yourself, and find
                    meaning through this process. Another approach is offered by
                    philosophers like Schopenhauer and Kierkegaard, which involves
                    accepting nihilism as a given, and psychologically adapting to it in
                    some way...
                    <br />
                    <br />
                    Or, like the two anti-heroes (those who lack the conventional
                    attributes of a traditional hero) in True Detective, we can find
                    meaning in work.
                    <br />
                    <br />
                    There is dignity in all labour but the best nihilism-antidote is in
                    work that carries personal meaning. And by work, this does not only
                    mean our formalized pension earning job, but all the work we carry out
                    in our lives: Providing for our loved ones. Exercising our creativity.
                    Being a wonderful colleague. Helping to grow an enterprise one can be
                    proud of. Maybe even tracking down a serial killer.
                    <br />
                    <br />
                    Ultimately, it's useless and counterproductive to focus on all the bad
                    and evil of the world, all the cruel inexplicable consequences of
                    fate. It's when we turn our attention to the mysterious, inexplicable
                    existence of good in the world that we truly learn whatever there is
                    in life that is worth knowing.
                    <br />
                    <br />
                </p>
            );


    }
};

export { SessionObject };
export { SessionTranscript };