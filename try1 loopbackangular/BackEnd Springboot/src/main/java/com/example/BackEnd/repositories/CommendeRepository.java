package com.example.BackEnd.repositories;
import com.example.BackEnd.models.Commende;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommendeRepository extends JpaRepository<Commende, Long>{
    void deleteCmdByIdCmd(Long id);
    Commende findCmdByIdCmd(Long id);
}
