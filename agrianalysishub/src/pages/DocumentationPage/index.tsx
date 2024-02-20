import React, { useEffect } from 'react'
const ratio = 0.1;

const options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio,
};

const handleIntersect = (entries: any, observer: any) => {
    entries.forEach((entry: any) => {
        if (entry.intersectionRatio > ratio) {
            console.log("Intersection ratio");
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
        }
    });
};
function DocumentationPage() {
    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersect, options);
        document.querySelectorAll(".reveal").forEach((element) => {
            observer.observe(element);
        });
        // Nettoyage de l'observateur lors du démontage du composant
        return () => observer.disconnect();
    }, []);
    return (
        <div className="max-w-2xl mx-auto md:p-4">
            <div className="reveal">
                <h1 className="text-3xl font-bold mb-4 text-dark-primary  ">Documentation du Modèle de Détection des Maladies des Bananiers</h1>
                <p className=''>
                    Bienvenue dans la documentation de notre Modèle de Détection des Maladies des Plantes. Ci-dessous, vous trouverez des informations sur l'utilisation du modèle, ses capacités et plus encore.
                </p>
            </div>
            <div className="reveal">
                <h2 className="text-2xl font-bold mt-8 mb-4 text-dark-primary pl-5  border-l-4  border-dark-primary ">Utilisation</h2>
                <p className=''>
                    Pour utiliser le Modèle de Détection des Maladies des Plantes, suivez ces étapes :
                    <ol className="list-decimal ml-6  ">
                        <li>Téléchargez une image de la feuille de la plante présentant la maladie suspectée.</li>
                        <li>Cliquez sur le bouton "Détecter" pour lancer le processus de détection.</li>
                        <li>Attendez que le modèle analyse l'image et fournisse les résultats.</li>
                    </ol>
                </p>
            </div>

            <div className="reveal">
                <h2 className="text-2xl font-bold mt-8 mb-4 text-dark-primary pl-5  border-l-4  border-dark-primary ">Capacités</h2>
                <p className=''>
                    Notre modèle est entraîné pour détecter divers types de maladies des plantes, notamment :
                    <ul className="list-disc ml-6 ">
                        <li>Taches sur les feuilles</li>
                        <li>Mildiou</li>
                        <li>Rouille</li>
                        <li>Flétrissures</li>
                    </ul>
                </p>
            </div>
            <div className="reveal">
                <h2 className="text-2xl font-bold mt-8 mb-4 text-dark-primary pl-5  border-l-4  border-dark-primary ">Précision</h2>
                <p className=''>
                    La précision de notre modèle varie en fonction de l'ensemble de données utilisé pour l'entraînement et de la qualité des images d'entrée. Dans nos tests, nous avons obtenu une précision d'environ 90%.
                </p>
            </div>

            <div className="reveal">
                <h2 className="text-2xl font-bold mt-8 mb-4  text-dark-primary pl-5  border-l-4  border-dark-primary ">Retours</h2>
                <p className=''>
                    Nous accueillons avec plaisir tous les retours ou suggestions pour améliorer notre Modèle de Détection des Maladies des Plantes. N'hésitez pas à nous contacter avec vos commentaires.
                </p>
            </div>

            <div className="reveal">
                <h2 className="text-2xl font-bold mt-8 mb-4 text-dark-primary pl-5  border-l-4  border-dark-primary ">Références</h2>
                <ul className="list-disc ml-6 ">
                    <li>Article de recherche : [Lien vers l'article de recherche]</li>
                    <li>Source de l'ensemble de données : [Lien vers l'ensemble de données]</li>
                </ul>
            </div>
        </div>
    )
}

export default DocumentationPage