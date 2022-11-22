import Linkedin from "../../assets/images/socials/linkedin-pink.svg";
import Github from "../../assets/images/socials/github-pink.svg";

const styles = {
  linkedin: {
    fill: '#0b66c2',
    backGround: 'green'
  },
  wrapper: {
    textAlign: "center",
    margin: "0 auto",
    marginTop: "50px"
  }
}

const NavigationSocials = () => {
  return (
    <section className="social-media">
      <a
        href="https://www.linkedin.com/in/fhatuwani-raphalalani-51bb98172/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Linkedin} alt="linkedin" style={styles.linkedin}/>
      </a>
      <a
        href="https://github.com/BigguyFM120"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Github} alt="github" style={{color: "red"}}/>
      </a>
    </section>
  );
};

export default NavigationSocials;