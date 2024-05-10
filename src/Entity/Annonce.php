<?php

namespace App\Entity;

use App\Repository\AnnonceRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints\Date;

/**
 * @ORM\Entity(repositoryClass=AnnonceRepository::class)
 */
class Annonce
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $ville;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $governoment;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $typeLogement;

    /**
     * @ORM\Column(type="integer")
     */
    private $nbrChambre;

    /**
     * @ORM\Column(type="integer")
     */
    private $nbrColoc;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $disponibleDe;

    /**
     * @ORM\Column(type="float")
     */
    private $loyer;

    /**
     * @ORM\Column(type="float")
     */
    private $caution;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $meuble;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private $photos = [];  //5 

    /**
     * @ORM\ManyToOne(targetEntity=Etudiant::class, inversedBy="annonces")
     */
    private $Etudiant;

    /**
     * @ORM\ManyToOne(targetEntity=Admin::class, inversedBy="annonces")
     */
    private $Admine;



    public function getId(): ?int
    {
        return $this->id;
    }

    public function getVille(): ?string
    {
        return $this->ville;
    }

    public function setVille(string $ville): self
    {
        $this->ville = $ville;

        return $this;
    }

    public function getGovernoment(): ?string
    {
        return $this->governoment;
    }

    public function setGovernoment(string $governoment): self
    {
        $this->governoment = $governoment;

        return $this;
    }

    public function getTypeLogement(): ?string
    {
        return $this->typeLogement;
    }

    public function setTypeLogement(string $typeLogement): self
    {
        $this->typeLogement = $typeLogement;

        return $this;
    }

    public function getNbrChambre(): ?int
    {
        return $this->nbrChambre;
    }

    public function setNbrChambre(int $nbrChambre): self
    {
        $this->nbrChambre = $nbrChambre;

        return $this;
    }

    public function getNbrColoc(): ?int
    {
        return $this->nbrColoc;
    }

    public function setNbrColoc(int $nbrColoc): self
    {
        $this->nbrColoc = $nbrColoc;

        return $this;
    }

    public function getDisponibleDe(): ?Date
    {
        return $this->disponibleDe;
    }

    public function setDisponibleAPartirDe(Date $disponibleDe): self
    {
        $this->disponibleDe = $disponibleDe;

        return $this;
    }

    public function getLoyer(): ?float
    {
        return $this->loyer;
    }

    public function setLoyer(float $loyer): self
    {
        $this->loyer = $loyer;

        return $this;
    }

    public function getCaution(): ?float
    {
        return $this->caution;
    }

    public function setCaution(float $caution): self
    {
        $this->caution = $caution;

        return $this;
    }

    public function getMeuble(): ?string
    {
        return $this->meuble;
    }

    public function setMeuble(string $meuble): self
    {
        $this->meuble = $meuble;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getPhotos(): ?array
    {
        return $this->photos;
    }

    public function setPhotos(array $photo1): self
    {
        $this->photos = $photo1;

        return $this;
    }

    public function getEtudiant(): ?Etudiant
    {
        return $this->Etudiant;
    }

    public function setEtudiant(?Etudiant $Etudiant): self
    {
        $this->Etudiant = $Etudiant;

        return $this;
    }

    public function getAdmine(): ?Admin
    {
        return $this->Admine;
    }

    public function setAdmine(?Admin $Admine): self
    {
        $this->Admine = $Admine;

        return $this;
    }

}
