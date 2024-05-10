<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240510094043 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE annonce (id INT AUTO_INCREMENT NOT NULL, etudiant_id INT DEFAULT NULL, admine_id INT DEFAULT NULL, ville VARCHAR(255) NOT NULL, governoment VARCHAR(255) NOT NULL, type_logement VARCHAR(255) NOT NULL, nbr_chambre INT NOT NULL, nbr_coloc INT NOT NULL, disponible_de DATE NOT NULL, loyer DOUBLE PRECISION NOT NULL, caution DOUBLE PRECISION NOT NULL, meuble VARCHAR(255) NOT NULL, description VARCHAR(255) DEFAULT NULL, photos LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', INDEX IDX_F65593E5DDEAB1A3 (etudiant_id), INDEX IDX_F65593E58FD08E80 (admine_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(255) DEFAULT NULL, roles JSON NOT NULL, password VARCHAR(255) DEFAULT NULL, User_type VARCHAR(255) NOT NULL, nom VARCHAR(255) DEFAULT NULL, prenom VARCHAR(255) DEFAULT NULL, date_naissance DATE DEFAULT NULL, genre VARCHAR(255) DEFAULT NULL, description VARCHAR(500) DEFAULT NULL, adresse VARCHAR(255) DEFAULT NULL, universite VARCHAR(255) DEFAULT NULL, specialite VARCHAR(255) DEFAULT NULL, numero_telephone INT DEFAULT NULL, lien_externe VARCHAR(255) DEFAULT NULL, image VARCHAR(255) DEFAULT NULL, reset_token VARCHAR(180) DEFAULT NULL, signals INT DEFAULT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE annonce ADD CONSTRAINT FK_F65593E5DDEAB1A3 FOREIGN KEY (etudiant_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE annonce ADD CONSTRAINT FK_F65593E58FD08E80 FOREIGN KEY (admine_id) REFERENCES user (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE annonce DROP FOREIGN KEY FK_F65593E5DDEAB1A3');
        $this->addSql('ALTER TABLE annonce DROP FOREIGN KEY FK_F65593E58FD08E80');
        $this->addSql('DROP TABLE annonce');
        $this->addSql('DROP TABLE user');
    }
}
