const AboutPage = () => {
    return (
        <>
            <h3>About Me</h3>
            <p>I am a python developer {"&"} a student, active since mid April of 2021.</p>
        </>
    );
};

export async function getStaticProps() {
    return {
        props: { title: "About" }
    };
}

export default AboutPage;
