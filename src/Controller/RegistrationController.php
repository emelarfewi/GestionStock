<?php

namespace App\Controller;

use App\Entity\Etudiant;
use App\Form\EtudiantType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class RegistrationController extends AbstractController
{

    private  $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    /**
     * @Route("/signup", name="signup")
     */
    public function signup(Request $request): Response
    {
        $user = new Etudiant();

        $form = $this->createForm(EtudiantType::class, $user);

        $form->handleRequest($request);

        if($form->isSubmitted()) {
            $em = $this->getDoctrine()->getManager();
            if($form->isValid()) {
                $user->setPassword($this->passwordEncoder->encodePassword($user, $user->getPassword()));
                $user->setRoles(['ROLE_Etudiant']);

                $em = $this->getDoctrine()->getManager();
                $em->persist($user);
                $em->flush();
                
                $this->addFlash('success', 'Registration successful! Please log in.');

                return $this->redirectToRoute('login');
            }
        }
        return $this->render('registration/signup.html.twig', [
            'form' => $form->createView()
        ]);
    }



}
