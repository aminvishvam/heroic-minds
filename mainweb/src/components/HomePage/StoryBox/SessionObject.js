import Image1 from "../../../assets/HomePageAssets/sessionImg1.png";
import Image2 from "../../../assets/HomePageAssets/sessionImg2.png";
import Image3 from "../../../assets/HomePageAssets/sessionImg3.png";
import Image4 from "../../../assets/HomePageAssets/sessionImg4.png";
import Audio1 from "../../../assets/HomePageAssets/sessionAudio1.mp3";
import Audio2 from "../../../assets/HomePageAssets/sessionAudio2.mp3";
import Audio3 from "../../../assets/HomePageAssets/sessionAudio3.mp3";
import Audio4 from "../../../assets/HomePageAssets/sessionAudio4.mp3";

const SessionObject = [
    {
        key: 1,
        title: "Letter To Yourself",
        subtitle: "Behaviour Change",
        audio: Audio1,
        audioImg: Image1,
        journalQuestions: {
            question1: "You could improve upon...",
            question2:
                "It is okay that you are under performing in this area because…",
            question3: "I believe you can improve because....",
            question4:
                "Improving this part of your life will be better for the people around you because...",
            question5: "This is what it will feel like to improve....",
            question6: "This is how you can begin improving today…",
        },
    },

    {
        key: 2,
        title: "Authentic Life",
        subtitle: "Clarity",
        audio: Audio2,
        audioImg: Image2,
        journalQuestions: {
            question1: "A part of my life that does not sit well with me...",
            question2: "It makes me think…",
            question3: "It makes me feel…",
            question4: "It makes me feel…",
            question5: "Fixing the issue makes me feel…",
            question6: "I have realized...",
        },
    },

    {
        key: 3,
        title: "Just Listen",
        subtitle: "Confidence",
        audio: Audio3,
        audioImg: Image3,
        journalQuestions: {
            question1: "What is the thought?",
            question2: " Is it a rational thought?",
            question3: " Does it make sense?",
            question4: "Should you give it more attention? Less attention?",
            question5:
                " Do you feel the need to question or challenge it? Go for it if you want.",
            question6: " How do you feel now?",
        },
    },

    {
        key: 4,
        title: "Next 5",
        subtitle: "Optimism",
        audio: Audio4,
        audioImg: Image4,
        journalQuestions: {
            question1:
                "What didn’t you like about yesterday or earlier today? Why did it make you feel down?",
            question2:
                "What is it you want to execute or complete in the next 5 hours?",
            question3: "How or why will you avoid distraction? Get back on track?",
            question4: "Why do you want to have a high-performing 5 hours?",
            question5: "How will you feel when you are all done?",
        },
    },
];

const SessionTranscript = ({ index }) => {
    switch (parseInt(index)) {
        case 1:
            return (
                <p>
                    This is an opportunity to enhance yourself, who you are and how you
                    behave. You are going to do this by writing an empowering letter to
                    yourself.
                    <br />
                    <br />
                    Think of an area in your life that you would like to improve. Some
                    ideas to get you started.. Maybe you want to improve your patience,
                    organization, listening, empathy, focus, or kindness.
                    <br />
                    You will write this letter from the perspective of someone else
                    talking to you.
                    <br />
                    <br />
                    It is important that you are straight-forward with the change that
                    could be made while also empowering and uplifting to encourage that
                    change can be made.
                    <br />
                    <br />
                    Make sure you will write this letter without editing or re-reading
                    until you are finished. There are no rules for structure or wording,
                    just write what you think and feel... as if you are writing to a
                    friend.
                    <br />
                    <br />
                    Once completed you will review the letter for one focused, final read.
                    <br />
                    <br />
                    You can pause this recording as you go if you'd like.
                    <br />
                    <br />
                    It would go something like this:
                    <br />
                    <br />
                    Dear self...
                    <br />
                    <br />
                    This is an area of your life that you could improve upon...
                    <br />
                    <br />
                    It is okay that you are under performing in this area because…
                    <br />
                    <br />
                    I believe you can improve because....
                    <br />
                    <br />
                    To improve this part of your life will be better for the people around
                    you because…
                    <br />
                    <br />
                    This is what it will feel like to improve....
                    <br />
                    <br />
                    This is how you can begin to improve today...
                    <br />
                    <br />
                    Sincerely, self.
                    <br />
                    <br />
                    Once finished, Re-read what you wrote, click save and you are all
                    finished.
                    <br />
                    <br />
                </p>
            );

        case 2:
            return (
                <p>
                    This is a mindful exercise to enhance your awareness of the present
                    moment. This is not only to increase your connection to the present
                    moment but more importantly, to maintain an authentic life experience.
                    <br />
                    <br />
                    Often suppressing thoughts and emotions skews our reality which allows
                    us to avoid uncomfortable thoughts and feelings. The problem is, this
                    blinds us from the formidable thoughts and feelings that, while
                    uncomfortable, may lead us to make change and discovery to improve
                    ourselves.
                    <br />
                    <br />
                    Increasing your awareness of any avoided thoughts or feelings in this
                    present moment embraces the awareness of your environment, knowledge
                    of yourself, acceptance of yourself, responsibility for your decisions
                    and the ability you have to change.
                    <br />
                    <br />
                    In this practice you will reflect on everything from the first person,
                    for example, I am thinking, or I am feeling.
                    <br />
                    <br />
                    Remember, you can pause this as you go.
                    <br />
                    <br />
                    <b>Let’s begin,</b>
                    <br />
                    <br />
                    Think about a part of your life that may not sit well with you.
                    <br />
                    <br />
                    Maybe a past experience, a future obligation or something right now in
                    the present that may be uncomfortable to think about.
                    <br />
                    <br />
                    What exactly are you thinking?
                    <br />
                    <br />
                    How exactly do you feel?
                    <br />
                    <br />
                    What is the connection between the two?
                    <br />
                    <br />
                    Bounce back and forth between thoughts and feelings with as much
                    awareness and description as you can.
                    <br />
                    <br />
                    If you were asked to fix this issue, in a way that creates the
                    greatest outcome for you and others involved… What comes to mind? How
                    exactly do you feel?
                    <br />
                    <br />
                    Conclude with the thoughts and feelings that come to mind if you were
                    to fix this issue.
                    <br />
                    <br />
                </p>
            );

        case 3:
            return (
                <p>
                    Often, negative or unwanted thoughts continue on a loop in the
                    background and we hardly challenge them. We allow them to keep
                    circling and often believe what they have to say. I think many of us
                    can relate to this when we have time to ourselves or when it is time
                    to sleep. This exercise is going to give you a chance to challenge a
                    negative or unwanted thought simply by giving it your full attention
                    and determining if it deserves the value that we give it. Is it a
                    rational thought? Does it make sense? Should you give it more
                    attention? Less attention? Could now be a good time to question the
                    thought or challenge it? Or maybe by giving the thought some attention
                    in itself is all you needed to do, and the impact the thought has on
                    you, dissipates. All the thought needed was some undivided attention
                    instead of allowing it to continue on a loop in the back of your mind.
                    <br />
                    <br />
                    Give it a shot, without forcing it, allow a negative or unwanted
                    thought to come to mind...
                    <br />
                    <br />
                </p>
            );

        case 4:
            return (
                <p>
                    We are going to prepare for a high-performing next 5 hours. Having a
                    rough plan in place can increase our optimism in execution and
                    decrease our overthinking.
                    <br />
                    <br />
                    To begin, reflect on what you didn’t like about yesterday or earlier
                    today and why it made you feel down.
                    <br />
                    <br />
                    Explain how you are going to make the best of the next 5 hours. It can
                    be simple and powerful. Are you going to take time to yourself? Are
                    you going to buckle down and work hard? Are you going to try to fix
                    something? Learn something? Whatever it may be, describe how you will
                    feel in the moment of execution, what will you be thinking? How will
                    you avoid distraction? How will you get back on track if you stumble
                    off track? What may be the most important, why do you want to have a
                    high performing 5 hours?
                    <br />
                    And finally, how will you feel when you are done?
                    <br />
                    <br />
                    Alright, let’s get to it.
                    <br />
                    <br />
                </p>
            );
    }
};

export { SessionObject };
export { SessionTranscript };
