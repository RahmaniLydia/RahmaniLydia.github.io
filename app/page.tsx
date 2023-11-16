



import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import { Image, Tooltip, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton ,Badge, Box } from '@chakra-ui/react';
import { SiPython, SiRstudio, SiSass, SiCss3, SiPhp, SiHtml5 } from 'react-icons/si';
import { RiCheckboxCircleFill } from 'react-icons/ri';
// Ajoutez ces imports au début de votre fichier
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faUtensils, faPlane, faBook, faDance } from '@fortawesome/free-solid-svg-icons';

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
export default function CV() {
  return (
    <main className="container mx-auto p-8 bg-gray-100 flex">
      {/* Côté gauche : Image et informations */}
      <div id='c' className="flex items-center " id="image_plus_info">
        <Image
          objectFit="cover"
          borderRadius="full"
          boxSize="200px"
          src="1675256249928.jpg"
          alt="Rahmani Lydia"
        />
        <div className="ml-4">
          <p className="text-lg font-semibold">
            Je suis Lydia, une étudiante en Master 2 MIASHS spécialisée en web analyse. Mes compétences analytiques et ma
            capacité à résoudre des problèmes complexes sont renforcées par ma formation en mathématiques. Je suis
            autonome, organisée et capable de travailler en équipe. J'ai également une expérience en collaboration sur
            des projets, démontrant ma flexibilité.
          </p>
        </div>
      </div>

      {/* Côté droit : Accordéon pour les sections */}
      <Accordion defaultIndex={[0]} allowToggle width="100%">
        {/* Section Contact */}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <span>Contact</span>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <div>
              <div className="flex items-center">
                <FaPhone className="mr-2" />
                <span>07 62 49 86 65</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2" />
                <span>lydiarah99@gmail.com</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>183 Rue Gabriel Péri, 94400, Vitry-sur-Seine</span>
              </div>
              <div className="flex items-center">
                <FaLinkedin className="mr-2" />
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

        {/* Section Expérience */}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <span>Expérience</span>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <div>
            <h2>Expérience Professionnelle</h2>
              <ul className="list-disc ml-6">
                  <li>
                    <h3>Institut ONCOLille (Stage)</h3>
                    <p>Stagiaire Data Analyste | 2022 - Présent</p>
                    <p>2 Mois</p>
                    <ul className="list-disc ml-6">
                      <li>Déterminer les facteurs individuels et socioéconomiques qui influencent la récidive des cancers œsophagiens</li>
                      <li>Réalisation d’une étude statistique</li>
                      <li>Modélisation prédictive en utilisant les méthodes de classification supervisée (Bagging, Neural network, RandomForest, Logistic Regression)</li>
                    </ul>
                  </li>
                  <li>
                    <h3>Employée Polyvalente</h3>
                    <p>Traitement des commandes, Serveuse en salle, Caissière, Gestion d'équipe</p>
                  </li>
                  <li>
                    <h3>Tutorat en Mathématiques</h3>
                    <p>Chez Petit Prince Burger, Lille (juin 2020 - à ce jour)</p>
                    <p>Assistance dans la compréhension du cours et des travaux dirigés de mathématiques auprès des lycéens de 2ème année et 3ème année</p>
                  </li>
                </ul>
            </div>
          </AccordionPanel>
        </AccordionItem>

        {/* Section Éducation */}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <span>Éducation</span>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <div>
            <h2>Éducation</h2>
              <ul className="list-disc ml-6">
                  <li>
                    <h3>Master 2 MIASHS parcours Web Analyste</h3>
                    <p>Université de Lille, 2023 - 2024</p>
                  </li>
                  <li>
                    <h3>Master 1 MIASHS parcours Web Analyste</h3>
                    <p>Université de Lille, 2022 - 2023</p>
                  </li>
                  <li>
                    <h3>Licence 2 informatique</h3>
                    <p>USTHB, 2018 - 2019</p>
                  </li>
                  <li>
                    <h3>Licence 1 mathématiques et informatique</h3>
                    <p>Université de Lille, 2017 - 2018</p>
                  </li>
                </ul>
            </div>
          </AccordionPanel>
        </AccordionItem>

        {/* Section Projets */}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <span>Projets</span>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <div>
              <h2>Projets Académiques</h2>
              <ul className="list-disc ml-6">
                  <li>
                    <h3>Projet universitaire : Prévision</h3>
                    <p>Jan. 2023 - Avril. 2023</p>
                    <p>Application des méthodes statistiques (HOLT, BOX, JENKINS)</p>
                    <p>Visualisation et Reporting</p>
                  </li>
                  <li>
                    <h3>Projet universitaire : Programmation Web</h3>
                    <p>Fév. 2023 - Avril. 2023</p>
                    <p>Création d'un chat en ligne permettant aux utilisateurs de communiquer en temps réel</p>
                    <p>Outils utilisés : PHP, JavaScript, HTML, CSS</p>
                  </li>
                  <li>
                    <h3>Projet universitaire : ANALYSE DES DONNÉES</h3>
                    <p>Déc. 2022 - Janv. 2023</p>
                    <p>Extraction des données, Visualisation et Reporting</p>
                    <p>Outil utilisé : Python</p>
                  </li>
                  <li>
                    <h3>Projet universitaire : SEO</h3>
                    <p>Déc. 2022 - Janv. 2023</p>
                    <p>Réalisation de l'Audit Technique d'un site internet</p>
                    <p>Maniement des outils SEO</p>
                  </li>
                  <li>
                    <h3>Projet universitaire : Étude statistique</h3>
                    <p>Sept. 2022 - Déc. 2022</p>
                    <p>Extraction des données, Visualisation et Reporting</p>
                    <p>Réaliser une ACP et une régression linéaire</p>
                    <p>Outil utilisé : RSTUDIO</p>
                  </li>
                </ul>
            </div>
          </AccordionPanel>
        </AccordionItem>

        {/* Section Compétences */}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <span>Compétences</span>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <div>
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
          <h2>
            <AccordionButton>
              <span>Langues</span>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <div>
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
          <h2>
            <AccordionButton>
              <span>Atouts</span>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <div>
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
        <AccordionItem>
  <h2>
    <AccordionButton>
      <span>Intérêts et Loisirs</span>
      <AccordionIcon />
    </AccordionButton>
  </h2>
  <AccordionPanel>
    <div>
    <ul className="list-disc ml-6">
        <li>
          <FontAwesomeIcon icon={faDance} className="mr-2" size="-50x" /> Danse (cours de hip-hop une fois par semaine)
        </li>
        <li>
          <FontAwesomeIcon icon={faDumbbell} className="mr-2" size="1x" /> Sport (course à pied, renforcement musculaire)
        </li>
        <li>
          <FontAwesomeIcon icon={faUtensils} className="mr-2" size="1x" /> Cuisine
        </li>
        <li>
          <FontAwesomeIcon icon={faPlane} className="mr-2" size="1x" /> Voyage
        </li>
        <li>
          <FontAwesomeIcon icon={faBook} className="mr-2" size="1x" /> Lecture
        </li>
      </ul>
    </div>
  </AccordionPanel>
</AccordionItem>
      </Accordion>
    </main>
  );
}
