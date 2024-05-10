<?php

namespace App\Controller;

use App\Entity\Etudiant;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class EtudiantController extends AbstractController
{
    /**
     * @Route("/etudiant", name="app_etudiant")
     */
    public function index(): Response
    {
        return $this->render('etudiant/index.html.twig', [
            'controller_name' => 'EtudiantController',
        ]);
    }

        /**
     * @Route("/etudiants", name="afficherEtud")
     */
    public function afficherTous(): Response
    {
        $etudiants = $this->getDoctrine()->getRepository(Etudiant::class)->findAll();
        return $this->render('etudiant/afficherTous.html.twig', [
            'etudiants' => $etudiants
        ]);
    }
}
