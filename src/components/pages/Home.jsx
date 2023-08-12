import bgImage from '../../image/bg_image.jpg';

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(
        rgba(47, 48, 58, 0.4), 
        rgba(47, 48, 58, 0.4)
    ), url(${bgImage})`,
        width: 'auto',
        height: '100vh',
        paddingTop: '250px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <h2
        style={{
          margin: '0',
          letterSpacing: '1rem',
          color: '#286ead',
          fontSize: '50px',
          textAlign: 'center',
        }}
      >
        PHONEBOOK
      </h2>
    </div>
  );
};

export default Home;
