<?php

namespace App\Controller;

use App\Entity\Annonce;
use App\Form\AnnonceType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AnnonceController extends AbstractController
{
    /**
     * @Route("/annonce", name="app_annonce")
     */
    public function index(): Response
    {
        return $this->render('annonce/index.html.twig', [
            'controller_name' => 'AnnonceController',
        ]);
    }

    /**
     * @Route("/ajoutAnnonce", name="ajoutAnnonce")
     */
    public function ajouterAnnonce(Request $request): Response 
    {
        $annonce = new Annonce();
        $form = $this->createForm(AnnonceType::class, $annonce);

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($annonce);
            $em->flush();

            return $this->redirectToRoute('afficherTous');     
        }
        return $this->render('annonce/ajoutAnnonce.html.twig', [
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/tousAnnonce", name="afficherTous")
     */
    public function afficherTous(): Response
    {
        $annonces = $this->getDoctrine()->getRepository(Annonce::class)->findAll();
        return $this->render('annonce/afficherTous.html.twig', [
            'annonces' => $annonces
        ]);
    }


}
