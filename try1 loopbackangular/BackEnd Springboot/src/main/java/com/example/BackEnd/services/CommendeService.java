package com.example.BackEnd.services;
import com.example.BackEnd.models.Commende;
import com.example.BackEnd.repositories.CommendeRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class CommendeService {
    private final CommendeRepository commendeRepo;

    @Autowired
    public CommendeService(CommendeRepository commendeRepo) {
        this.commendeRepo = commendeRepo;
    }

    public Commende addCommende(Commende commende) {
        return commendeRepo.save(commende);
    }

    public List<Commende> findAllCommendes() {
        return commendeRepo.findAll();
    }

    public Commende updateCommende(Commende commende) {
        return commendeRepo.save(commende);
    }

    public Commende findById(Long id) {
        return commendeRepo.findCmdByIdCmd(id);
    }

    public void deleteCommende(Long id) {
        commendeRepo.deleteCmdByIdCmd(id);
    }
}
