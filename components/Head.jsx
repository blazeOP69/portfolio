import Head from "next/head";

const CustomHead = ({ title }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content="Hello, myself BlazeOP69." />
            <meta name="keywords" content="BlazeOP69,DevBlazeOP69" />
            <meta property="og:title" content="BlazeOP69" />
            <meta property="og:description" content="Hello, myself BlazeOP69." />
            <meta property="og:image" content="https://i.imgur.com/OJeZfNJ.png" />
            <meta property="og:url" content="https://dhunganakunjan.com.np" />
            <meta name="twitter:card" content="summary_large_image" />
            <link rel="shortcut icon" href="https://i.imgur.com/5G7iRHA.png" type="image/png" />
        </Head>
    );
};

export default CustomHead;

CustomHead.defaultProps = {
    title: "BlazeOP69"
};
