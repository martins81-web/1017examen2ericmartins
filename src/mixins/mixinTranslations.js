export const mixinTranslations = {
    data () {
        return {
            //CHANGE LANGUAGE ***french or english***
           language: "fr"
        }
      },
      //Traductions anglaises
    en: {
      firstName: "Firstname",
      age: "Age",
      lastName: "Lastname",
      email: "Email",
      contact: "Contact",
      reasonOfContact: "Reason of Contact",
      job: "Job information",
      informations: "Informations",
      project: "Project",
      appointment: "Take appointment",
      other: "Other",
      about: "About",
      home: "Home",
      projects: "Projects",
      myProjects: "My Projects",
      visitPortugal: "Visit Portugal",
      chuckNorrisJokes: "Chuck Norris Jokes",
      quebecerSpotify: "Quebecer Spotify",
      clientsContactList: "Clients Contact List",
      veterinaryClinic: "Veterinary Clinic",
      aboutUs: "About Us",
      profile: "Profile",
      skills: "My Skills",
      studies: "My studies",
      presentation1: "Hello, my name is Eric Martins, I am 39 years old, if you are on my page it is surely not by chance.",
      presentation2: "I am a junior Front-End Developer in training at College Trois Rivières, but that was not always the case, I worked for a long time as a content creator, I was not predestined to do that.",
      presentation3: "So I decided to  reorient my career towards web development, this now brings me to the stage of looking for opportunities in website and web application development. I am strongly interested in development in JavaScript language and its frameworks.",
      formation1: "Certificate of collegial studies in WEB Development, College Trois-Rivières, Trois-Rivières",
      formation2: "Certificate of collegial studies in Internet telecommunications networks, College de Saint-Laurent, Montreal",
      formation3: "Electronics and Computer Engineering - Automation - University of Porto, Portugal",
      formation31: "* Comparative evaluation issued by the MICC: College diploma in general education, Undergraduate university studies - one year completed - pure and applied science sector"
    },
    //traduction françaises
    fr: {
      firstName: "Prénom",
      age: "Age",
      lastName: "Nom",
      email: "Courriel",
      contact: "Contact",
      reasonOfContact: "Raison du contact",
      job: "Emploi",
      informations: "Informations",
      project: "Projet",
      appointment: "Prise de rendez-vous",
      other: "Autre",
      about: "À propos",
      home: "Accueil",
      projects: "Projets",
      myProjects: "Mes Projets",
      visitPortugal: "Visitez le Portugal",
      chuckNorrisJokes: "Les blagues de Chuck Norris",
      quebecerSpotify: "Spotify Québécois",
      clientsContactList: "Bottin des clients",
      veterinaryClinic: "Clinique vétérinaire",
      aboutUs: "À Propos de nous",
      profile: "Profil",
      skills: "Mes compétences",
      studies: "Mes formations",
      presentation1: "Bonjour, je m'appelle Eric Martins, j'ai 39 ans, si vous vous trouvez sur ma page ce n'est sûrement pas par hasard.",
      presentation2: "Je suis un Développeur Front-End junior en formation au Cégep Trois Rivières, mais ça n'a pas été toujours le cas, j'ai travaillé longtemps comme rédacteur web, je n'était pas prédestiné à faire cela.",
      presentation3: "J'ai donc décidé de me reconvertir au milieu de l'informatique et réorienter ma carrière vers le développement web, cela m'amène maintenant à l'étape de recherche d'opportunités en développement de sites et d'applications web. Je suis fortement intéressé par le développement en langage JavaScript et ses frameworks.",
      formation1:"Attestation d’études collégiales en Développement WEB, Cégep Trois-Rivières, Trois-Rivières",
      formation2: "Attestation d’études collégiales en réseaux de télécommunication Internet, Cégep de Saint-Laurent, Montréal",
      formation3: "Génie électronique et ordinateurs – automatisation - Université de Porto, Portugal",
      formation31: "*Évaluation comparative délivrée par le MICC : Diplôme d’études collégiales en formation générale, Études universitaires de premier cycle — une année complétée — secteur des sciences pures et appliquées"

    }, 
    /* filtre qui verifie si une traduction existe et qui retourne son valeur*/
    filters :{
        translateTo: function (value, language) {
        if (!value) return '';
          let data = mixinTranslations;
          let locale = language;
          value = value.toString();
          if (data[locale][value]) {
              return data[locale][value];
          }
          else {
              return value;
          }
           /*  if (language==='english'){
                let keys= Object.keys(mixinTranslations.en);        
                for(let i=0; i<keys.length; i++){
                    if (keys[i]===value){
                        return mixinTranslations.en[value]
                    }
                }  
            } else if (language === 'french'){
                let keys= Object.keys(mixinTranslations.fr);        
                for(let i=0; i<keys.length; i++){
                    if (keys[i]===value){
                        return mixinTranslations.fr[value]
                    }
                }    
            } */
        },
      
    }
  };
  
  