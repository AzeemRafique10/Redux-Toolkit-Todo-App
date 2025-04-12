import "./styles.css";

function Video() {
  return (
    <div className="scroll-container">
      <section className="video-section">
        <video autoPlay muted loop playsInline className="video-element">
          <source src="" type="video/mp4" />
        </video>
      </section>

      <section className="video-section">
        <video controls autoPlay className="video-element">
          <source src="" type="video/mp4" />
        </video>
      </section>
    </div>
  );
}

export default Video;
