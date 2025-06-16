const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const MarkdownBlock = CompLibrary.MarkdownBlock;
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = (props) => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Nomad Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/nomad_logo.png`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const Block = (props) => (
      <Container
        padding={["bottom", "top"]}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const AboutNomad = () => (
      <Block background="light">
        {[
          {
            title: "Nomad — A Travel-Optimized MTG Format",
            content:
              "Born on the backroads and campfires, **Nomad** is a custom Magic: The Gathering format designed for minimalism, portability, and maximum replayability. Whether you're riding across states or pitching a tent under the stars, Nomad strips the game to its essentials: 40 cards, one die, and no clutter.",
            image: `${baseUrl}img/jeep_packed.png`,
            imageAlign: "right",
          },
        ]}
      </Block>
    );

    const CorePhilosophy = () => (
      <Block background="dark">
        {[
          {
            title: "Philosophy: No Baggage",
            content:
              "No tokens. No counters. No extras. Just your deck, your wits, and a roll-down D20. Inspired by the spirit of adventure, Nomad gameplay is fast, fair, and focused.",
            image: `${baseUrl}img/unburdened.png`,
            imageAlign: "left",
          },
        ]}
      </Block>
    );

    const FormatBasics = () => (
      <Block>
        {[
          {
            title: "Format Basics",
            content:
              "- 40-card main deck\n- 20-card sideboard\n- Singleton (one of each card)\n- No tokens, counters, or extra components\n- Legacy banlist + Nomad-specific exclusions",
            image: `${baseUrl}img/backpack_mtg.png`,
            imageAlign: "right",
          },
        ]}
      </Block>
    );

    const WhyPlay = () => (
      <Block background="light">
        {[
          {
            title: "Why Play Nomad?",
            content:
              "Whether you're traveling solo or dueling in a mountain town coffee shop, Nomad brings tactical Magic anywhere — no clutter, no tracking, just gameplay. It's a love letter to simplicity for travelers and tabletop tacticians alike.",
            image: `${baseUrl}img/play_nomad.png`,
            imageAlign: "left",
          },
        ]}
      </Block>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <AboutNomad />
          <CorePhilosophy />
          <FormatBasics />
          <WhyPlay />
        </div>
      </div>
    );
  }
}

module.exports = Index;
