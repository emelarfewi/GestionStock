<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240510124825 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE `admin` (id INT NOT NULL, nom VARCHAR(255) NOT NULL, prenom VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE etudiant (id INT NOT NULL, nom VARCHAR(255) NOT NULL, prenom VARCHAR(255) NOT NULL, date_naissance DATE DEFAULT NULL, genre VARCHAR(255) DEFAULT NULL, description VARCHAR(500) DEFAULT NULL, adresse VARCHAR(255) DEFAULT NULL, universite VARCHAR(255) DEFAULT NULL, specialite VARCHAR(255) DEFAULT NULL, numero_telephone INT DEFAULT NULL, lien_externe VARCHAR(255) DEFAULT NULL, image VARCHAR(255) DEFAULT NULL, reset_token VARCHAR(180) DEFAULT NULL, signals INT DEFAULT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE `admin` ADD CONSTRAINT FK_880E0D76BF396750 FOREIGN KEY (id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE etudiant ADD CONSTRAINT FK_717E22E3BF396750 FOREIGN KEY (id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE annonce DROP FOREIGN KEY FK_F65593E58FD08E80');
        $this->addSql('ALTER TABLE annonce DROP FOREIGN KEY FK_F65593E5DDEAB1A3');
        $this->addSql('ALTER TABLE annonce ADD CONSTRAINT FK_F65593E58FD08E80 FOREIGN KEY (admine_id) REFERENCES `admin` (id)');
        $this->addSql('ALTER TABLE annonce ADD CONSTRAINT FK_F65593E5DDEAB1A3 FOREIGN KEY (etudiant_id) REFERENCES etudiant (id)');
        $this->addSql('ALTER TABLE user DROP nom, DROP prenom, DROP date_naissance, DROP genre, DROP description, DROP adresse, DROP universite, DROP specialite, DROP numero_telephone, DROP lien_externe, DROP image, DROP reset_token, DROP signals, CHANGE email email VARCHAR(180) NOT NULL, CHANGE password password VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE annonce DROP FOREIGN KEY FK_F65593E58FD08E80');
        $this->addSql('ALTER TABLE annonce DROP FOREIGN KEY FK_F65593E5DDEAB1A3');
        $this->addSql('ALTER TABLE `admin` DROP FOREIGN KEY FK_880E0D76BF396750');
        $this->addSql('ALTER TABLE etudiant DROP FOREIGN KEY FK_717E22E3BF396750');
        $this->addSql('DROP TABLE `admin`');
        $this->addSql('DROP TABLE etudiant');
        $this->addSql('ALTER TABLE annonce DROP FOREIGN KEY FK_F65593E5DDEAB1A3');
        $this->addSql('ALTER TABLE annonce DROP FOREIGN KEY FK_F65593E58FD08E80');
        $this->addSql('ALTER TABLE annonce ADD CONSTRAINT FK_F65593E5DDEAB1A3 FOREIGN KEY (etudiant_id) REFERENCES user (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE annonce ADD CONSTRAINT FK_F65593E58FD08E80 FOREIGN KEY (admine_id) REFERENCES user (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE user ADD nom VARCHAR(255) DEFAULT NULL, ADD prenom VARCHAR(255) DEFAULT NULL, ADD date_naissance DATE DEFAULT NULL, ADD genre VARCHAR(255) DEFAULT NULL, ADD description VARCHAR(500) DEFAULT NULL, ADD adresse VARCHAR(255) DEFAULT NULL, ADD universite VARCHAR(255) DEFAULT NULL, ADD specialite VARCHAR(255) DEFAULT NULL, ADD numero_telephone INT DEFAULT NULL, ADD lien_externe VARCHAR(255) DEFAULT NULL, ADD image VARCHAR(255) DEFAULT NULL, ADD reset_token VARCHAR(180) DEFAULT NULL, ADD signals INT DEFAULT NULL, CHANGE email email VARCHAR(255) DEFAULT NULL, CHANGE password password VARCHAR(255) DEFAULT NULL');
    }
}
