import DownloadIcon from "../../assets/images/download-icon.png";
import Resume from "../../assets/documents/Fhatuwani_Martin_Raphalalani_CV.pdf";
const DownloadResume = () => {
  return (
    <section>
      <a className="download-btn" href={Resume} download="Fhatuwani-Raphalalani">
        <img
          src={DownloadIcon}
          alt="Download icon"
          className="download-img"
        ></img>
        Download CV
      </a>
    </section>
  );
};

export default DownloadResume;