



import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import { Image, Tooltip, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton ,Badge, Box } from '@chakra-ui/react';
import { SiPython, SiRstudio, SiSass, SiCss3, SiPhp, SiHtml5 } from 'react-icons/si';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faUtensils, faPlane, faBook, faMusic } from '@fortawesome/free-solid-svg-icons';




const LanguageLevel = ({ level }) => {
  const colors = {
    beginner: 'gray.300',
    intermediate: 'yellow.300',
    advanced: 'green.300',
    expert: 'teal.300',
  };

  return (
    <Box display="flex">
      {[...Array(4)].map((_, index) => (
        <Box
          key={index}
          w="5"
          h="5"
          rounded="full"
          bg={index < level ? colors.expert : 'gray.100'}
          ml={index > 0 ? '1' : '0'}
        />
      ))}
    </Box>
  );
};

const CV = () => {
  return (
    <main className="cv-container bg-gray-100 p-6">
      {/* Section Image et Informations */}
      <div id="image_plus_info" className="flex items-center border p-4 rounded-lg shadow bg-gradient-to-r from-blue-200 to-blue-900">
        <Image
          objectFit="cover"
          borderRadius="full"
          boxSize="200px"
          src="1675256249928.jpg"
          alt="Votre Nom"
        />
        <div className="ml-4">
          <p className="text-lg font-semibold text-white">
            Je suis Lydia, une étudiante en Master 2 MIASHS spécialisée en web analyse. Mes compétences analytiques et ma
            capacité à résoudre des problèmes complexes sont renforcées par ma formation en mathématiques. Je suis
            autonome, organisée et capable de travailler en équipe. J&apos;ai également une expérience en collaboration sur
            des projets, démontrant ma flexibilité.
          </p>
        </div>
      </div>

      {/* Accordéon pour les sections */}
      <Accordion allowToggle>
        {/* Section Contact */}
        <AccordionItem>
          <h1>
            <AccordionButton>
              <span>Contact</span>
              <AccordionIcon />
            </AccordionButton>
          </h1>
          <AccordionPanel bg="gray.100" p="4">
            <div id='contact-info'>
              <div className="flex items-center">
                <FaPhone style={{ color: '#004080' }} />
                <span>07 62 49 86 65</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope style={{ color: '#004080' }} />
                <span>lydiarah99@gmail.com</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt style={{ color: '#004080' }} />
                <span>183 Rue Gabriel Péri, 94400, Vitry-sur-Seine</span>
              </div>
              <div className="flex items-center">
                <FaLinkedin style={{ color: '#004080' }} />
                <span>
                  <a
                    href="https://www.linkedin.com/in/lydia-rahmani"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.linkedin.com/in/lydia-rahmani
                  </a>
                </span>
              </div>
            </div>
          </AccordionPanel>
        </AccordionItem>

       {/* Section Expérience Professionnelle */}
<AccordionItem>
  <h1>
    <AccordionButton>
      <span>Expérience Professionnelle</span>
      <AccordionIcon />
    </AccordionButton>
  </h1>
  <AccordionPanel bg="blue.100" p="4">
    <div className="mb-4">
      {[
        {
          company: "Institut ONCOLille (Stage)",
          position: "Stagiaire Data Analyste",
          date: "2022 - Présent",
          duration: "2 Mois",
          responsibilities: [
            "Déterminer les facteurs individuels et socioéconomiques qui influencent la récidive des cancers œsophagiens",
            "Réalisation d&apos;une étude statistique",
            "Modélisation prédictive en utilisant les méthodes de classification supervisée (Bagging, Neural network, RandomForest, Logistic Regression)",
          ],
        },
        {
          company: "Employée Polyvalente",
          position: "Traitement des commandes, Serveuse en salle, Caissière, Gestion d'équipe",
        },
        {
          company: "Tutorat en Mathématiques",
          position: "Chez Petit Prince Burger, Lille",
          date: "juin 2020 - à ce jour",
          responsibilities: [
            "Assistance dans la compréhension du cours et des travaux dirigés de mathématiques auprès des lycéens de 2ème année et 3ème année",
          ],
        },
      ].map((experience, index) => (
        <Box key={index} bg="white" p="4" rounded="md" shadow="md" mb="4">
          <h3 className="text-lg font-semibold mb-2">{experience.company}</h3>
          {(experience.date || experience.position) && (
            <p>
              {experience.position} | {experience.date} | {experience.duration}
            </p>
          )}
          {experience.responsibilities && (
            <ul className="list-disc ml-6">
              {experience.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          )}
        </Box>
      ))}
    </div>
  </AccordionPanel>
</AccordionItem>


       {/* Section Éducation */}
<AccordionItem>
  <h1>
    <AccordionButton>
      <span>Éducation</span>
      <AccordionIcon />
    </AccordionButton>
  </h1>
  <AccordionPanel bg="blue.100" p="4">
    <div className="mb-4">
      {[
        {
          degree: "Master 2 MIASHS parcours Web Analyste",
          university: "Université de Lille",
          date: "2023 - 2024",
        },
        {
          degree: "Master 1 MIASHS parcours Web Analyste",
          university: "Université de Lille",
          date: "2022 - 2023",
        },
        {
          degree: "Licence 2 informatique",
          university: "USTHB",
          date: "2018 - 2019",
        },
        {
          degree: "Licence 1 mathématiques et informatique",
          university: "Université de Lille",
          date: "2017 - 2018",
        },
      ].map((education, index) => (
        <Box key={index} bg="white" p="4" rounded="md" shadow="md" mb="4">
          <h3 className="text-lg font-semibold mb-2">{education.degree}</h3>
          <p>{education.university}, {education.date}</p>
        </Box>
      ))}
    </div>
  </AccordionPanel>
</AccordionItem>


      {/* Section Projets Académiques */}
<AccordionItem>
  <h1>
    <AccordionButton>
      <span>Projets Académiques</span>
      <AccordionIcon />
    </AccordionButton>
  </h1>
  <AccordionPanel bg="blue.100" p="4">
    <div className="mb-4">
      {[
        {
          title: "Projet universitaire : Prévision",
          date: "Jan. 2023 - Avril. 2023",
          description: [
            "Application des méthodes statistiques (HOLT, BOX, JENKINS)",
            "Visualisation et Reporting",
          ],
        },
        {
          title: "Projet universitaire : Programmation Web",
          date: "Fév. 2023 - Avril. 2023",
          description: [
            "Création d&apos;un chat en ligne permettant aux utilisateurs de communiquer en temps réel",
            "Outils utilisés : PHP, JavaScript, HTML, CSS",
          ],
        },
        {
          title: "Projet universitaire : ANALYSE DES DONNÉES",
          date: "Déc. 2022 - Janv. 2023",
          description: [
            "Extraction des données, Visualisation et Reporting",
            "Outil utilisé : Python",
          ],
        },
        {
          title: "Projet universitaire : SEO",
          date: "Déc. 2022 - Janv. 2023",
          description: [
            "Réalisation de l&apos;Audit Technique d'un site internet",
            "Maniement des outils SEO",
          ],
        },
        {
          title: "Projet universitaire : Étude statistique",
          date: "Sept. 2022 - Déc. 2022",
          description: [
            "Extraction des données, Visualisation et Reporting",
            "Réaliser une ACP et une régression linéaire",
            "Outil utilisé : RSTUDIO",
          ],
        },
      ].map((project, index) => (
        <Box key={index} bg="white" p="4" rounded="md" shadow="md" mb="4">
          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
          <p>{project.date}</p>
          {project.description.map((desc, idx) => (
            <p key={idx}>{desc}</p>
          ))}
        </Box>
      ))}
    </div>
  </AccordionPanel>
</AccordionItem>


        {/* Section Compétences */}
        <AccordionItem>
          <h1>
            <AccordionButton>
              <span>Compétences</span>
              <AccordionIcon />
            </AccordionButton>
          </h1>
          <AccordionPanel bg="gray.100" p="4">
            <div className="mb-4">
              <ul className="list-disc ml-6">
                <li>Pack office : Word, Excel, PowerPoint</li>
                <li>Programmation :
                  <Tooltip label="Python" aria-label="Python Tooltip">
                    <SiPython className="inline-block" />
                  </Tooltip>
                  <Tooltip label="RStudio" aria-label="RStudio Tooltip">
                    <SiRstudio className="inline-block ml-2" />
                  </Tooltip>
                  <Tooltip label="SAS" aria-label="SAS Tooltip">
                    <SiSass className="inline-block ml-2" />
                  </Tooltip>
                  <Tooltip label="CSS" aria-label="CSS Tooltip">
                    <SiCss3 className="inline-block ml-2" />
                  </Tooltip>
                  <Tooltip label="PHP" aria-label="PHP Tooltip">
                    <SiPhp className="inline-block ml-2" />
                  </Tooltip>
                  <Tooltip label="HTML5" aria-label="HTML5 Tooltip">
                    <SiHtml5 className="inline-block ml-2" />
                  </Tooltip>
                </li>
              </ul>
            </div>
          </AccordionPanel>
        </AccordionItem>

        {/* Section Langues */}
        <AccordionItem>
          <h1>
            <AccordionButton>
              <span>Langues</span>
              <AccordionIcon />
            </AccordionButton>
          </h1>
          <AccordionPanel bg="gray.100" p="4">
            <div className="mb-4">
              <ul className="list-disc ml-6">
                <li>
                  Français: <LanguageLevel level={4} />
                </li>
                <li>
                  Arabe: <LanguageLevel level={4} />
                </li>
                <li>
                  Anglais: <LanguageLevel level={2} />
                </li>
                <li>
                  Kabyle: <LanguageLevel level={4} />
                </li>
              </ul>
            </div>
          </AccordionPanel>
        </AccordionItem>

        {/* Section Atouts */}
        <AccordionItem>
          <h1>
            <AccordionButton>
              <span>Atouts</span>
              <AccordionIcon />
            </AccordionButton>
          </h1>
          <AccordionPanel bg="gray.100" p="4">
            <div className="mb-4">
              <ul className="list-disc ml-6">
                <li>
                  <RiCheckboxCircleFill className="inline-block text-green-500" /> Rigueur
                </li>
                <li>
                  <RiCheckboxCircleFill className="inline-block text-green-500" /> Esprit d’équipe
                </li>
                <li>
                  <RiCheckboxCircleFill className="inline-block text-green-500" /> Dynamisme
                </li>
                <li>
                  <RiCheckboxCircleFill className="inline-block text-green-500" /> Adaptabilité
                </li>
                <li>
                  <RiCheckboxCircleFill className="inline-block text-green-500" /> Organisation
                </li>
                <li>
                  <RiCheckboxCircleFill className="inline-block text-green-500" /> Autonomie
                </li>
              </ul>
            </div>
          </AccordionPanel>
        </AccordionItem>

        {/* Section Intérêts et Loisirs */}
        <AccordionItem>
          <h1>
            <AccordionButton>
              <span>Intérêts et Loisirs</span>
              <AccordionIcon />
            </AccordionButton>
          </h1>
          <AccordionPanel bg="gray.100" p="4">
             <div id='dv'>
      <div className="interest-item">Danse <FontAwesomeIcon icon={faMusic}  style={{ color: '#004080' }} /></div>
      <div className="interest-item">Sport <FontAwesomeIcon icon={faDumbbell} style={{ color: '#004080' }}  /></div>
      <div className="interest-item">Cuisine <FontAwesomeIcon icon={faUtensils} style={{ color: '#004080' }}  /></div>
      <div className="interest-item">Voyage <FontAwesomeIcon icon={faPlane} style={{ color: '#004080' }}  /></div>
      <div className="interest-item">Lecture <FontAwesomeIcon icon={faBook}  style={{ color: '#004080' }} /></div>
    </div>
          </AccordionPanel>
        </AccordionItem>

      </Accordion>
    </main>
  );
};

export default CV;
