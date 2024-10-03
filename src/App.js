import React, { useState } from "react";
import Header from "./Header";
import MuseumCard from "./MuseumCard";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ImageCarousel from "./ImageCarousel";
import ProgressBar from "./ProgressBar";
import ToggleSwitch from "./ToggleSwitch";

import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const [feedbackStage, setFeedbackStage] = useState(null);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const handleFeedback = (selectedStage) => {
    setFeedbackStage(selectedStage);
  };

  const submitFeedback = () => {
     // Envia o feedback do usuário e exibe um alerta com a seleção
    if (feedbackStage !== null) {
      alert(
        `Feedback enviado! Você selecionou: ${feedbackStage + 1} - ${
          ["Não Gostou", "Gostou Pouco", "Médio", "Gostou", "Gostou Muito"][
            feedbackStage
          ]
        }`
      );
    } else {
      alert("Por favor, selecione um nível de satisfação antes de enviar.");
    }
  };

  const museums = [
    // Array de objetos que contém informações sobre os museus
    {
      id: 1,
      name: "Louvre",
      location: "Paris, France",
      description:
        "O Louvre é o maior museu do mundo, e já foi um palácio real! 🎨 Além de abrigar a Mona Lisa, ele tem mais de 35 mil obras, então... prepare as pernas, porque explorar tudo é quase uma maratona!",
      image:
        "https://i.pinimg.com/originals/08/db/2c/08db2c988b465e7a68088e6bdf6325b3.jpg",
      video:
        "https://videos.pexels.com/video-files/3205451/3205451-sd_640_360_30fps.mp4",
    },
    {
      id: 2,
      name: "British Museum",
      location: "London, UK",
      description:
        "O British Museum, fundado em 1753, abriga mais de 8 milhões de objetos, incluindo a famosa Pedra de Rosetta, que ajudou a decifrar hieróglifos egípcios. 🏺 Seu acesso é gratuito, permitindo que visitantes de todo o mundo explorem a rica história e cultura de civilizações antigas. 🌍",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/British_Museum_at_night.jpg/2560px-British_Museum_at_night.jpg",
      video:
        "https://videos.pexels.com/video-files/28698278/12454429_640_360_50fps.mp4",
    },
    {
      id: 3,
      name: "Metropolitan Museum of Art",
      location: "New York, USA",
      description:
        "O Metropolitan Museum of Art, conhecido como The Met, é o maior museu de arte dos Estados Unidos, com uma coleção que abrange 5.000 anos de história. 🎨 Além da famosa pintura Washington Crossing the Delaware, o museu possui um deslumbrante rooftop com vista para Central Park, tornando a visita ainda mais memorável! 🏙️",
      image:
        "https://media.architecturaldigest.com/photos/60a4034a95b85cfe2c9816a7/16:9/w_1280,c_limit/ITM002-The-Met-Facade-during-deinstall-of-Wangechi-Mutu_s-sculptures-scaled.jpg",
      video:
        "https://videos.pexels.com/video-files/4476055/4476055-sd_640_360_30fps.mp4",
    },
    {
      id: 4,
      name: "Museo del Prado",
      location: "Madrid, Spain",
      description:
        "O Museo del Prado, em Madrid, é um dos museus de arte mais importantes do mundo, famoso por sua vasta coleção de obras-primas de artistas como Velázquez, Goya e Bosch. 🎨 Além de abrigar mais de 8.000 pinturas, o museu tem um belíssimo edifício neoclássico que por si só já vale a visita! 🏛️",
      image:
        "https://media.istockphoto.com/id/475444818/pt/foto/prado-museu.jpg?s=612x612&w=0&k=20&c=Ej8khMRROuFr5bcFEid2zQ_5KBaQxLkoIG1AuDdmGQk=",
      video:
        "https://videos.pexels.com/video-files/28698278/12454429_640_360_50fps.mp4",
    },
    {
      id: 5,
      name: "Vatican Museums",
      location: "Vatican City",
      description:
        "Os Museus Vaticanos são uma das maiores e mais impressionantes coleções de arte do mundo, com obras de artistas renomados como Rafael e Caravaggio. 🎨 Com mais de 7.000 obras expostas, a famosa Capela Sistina, com seu teto deslumbrante pintado por Michelangelo, é uma das principais atrações que fascina milhões de visitantes anualmente! 🕊️",
      image:
        "https://c4.wallpaperflare.com/wallpaper/212/578/429/spiral-italy-ladder-the-vatican-museum-wallpaper-preview.jpg",
      video:
        "https://videos.pexels.com/video-files/19283741/19283741-sd_640_360_24fps.mp4",
    },
    {
      id: 6,
      name: "Rijksmuseum",
      location: "Amsterdam, Netherlands",
      description:
        "O Rijksmuseum, em Amsterdã, é o museu nacional dos Países Baixos, conhecido por sua impressionante coleção de obras-primas da Idade de Ouro, incluindo A Ronda Noturna de Rembrandt. 🖼️ Além disso, o edifício em estilo neogótico é uma obra de arte em si, com jardins deslumbrantes que oferecem um espaço perfeito para relaxar! 🌷",
      image:
        "https://www.rijksmuseum.nl/assets/fdd2733b-030d-46be-ac53-932f3b719e77?w=1920&h=1080&fx=3333&fy=2025&c=c454422478deb97d5028ef15fe8ee1444efc831752f549ed9579f8f86f2b6708",
      video:
        "https://videos.pexels.com/video-files/14452009/14452009-sd_640_360_30fps.mp4",
    },
  ];

  const carouselImages = [
    "https://s2.glbimg.com/FhIKcnDVFxGMXR1hXnMZQ4gJwm4=/940x523/e.glbimg.com/og/ed/f/original/2020/03/20/the-british-museum.jpg",
    "https://recode.org.br/wp-content/uploads/2021/05/Museu-Fabre-em-Montpellier-1050x680-1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfDSyrbRyyrS_lCC5txFfo50gzS51NVitT5g&s",
  ];

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <Header />
      <main className="main-content">
        <section id="home">
          <h1>Bem vindo aos museus históricos</h1>
          <p>
            Descubra uma coleção impressionante de museus através de fotos e
            vídeos envolventes. Navegue por exposições cativantes e mergulhe na
            rica história da arte e cultura em nosso site.
          </p>
          <button className="toggle-theme" onClick={toggleTheme}>
            troque para o {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </section>

        <section id="carousel">
          <ImageCarousel images={carouselImages} />
        </section>

        <section id="feedback">
          <h2>Feedback sobre o Site</h2>
          <ProgressBar stage={feedbackStage} />
          <div className="feedback-buttons">
            {[
              "Não Gostou",
              "Gostou Pouco",
              "Médio",
              "Gostou",
              "Gostou Muito",
            ].map((label, index) => (
              <button key={index} onClick={() => handleFeedback(index)}>
                {label}
              </button>
            ))}
          </div>
          <button onClick={submitFeedback}>Enviar Feedback</button>
        </section>

        <section id="museums">
          <h1>Diferentes museus pelo mundo</h1>
          <div className="museum-grid">
            {museums.map((museum) => (
              <MuseumCard key={museum.id} museum={museum} />
            ))}
          </div>
        </section>

        <section
          id="contact"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            margin: "0 auto",
            maxWidth: "600px",
            textAlign: "center",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <h1 style={{ fontSize: "4vw", margin: "10px 0" }}>Meu contato</h1>
          <p style={{ fontSize: "5vw" }}>
            Meu E-mail: pedrovasco98765@gmail.com
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
