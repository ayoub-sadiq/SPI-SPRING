package fr.univbrest.dosi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import fr.univbrest.dosi.bean.Formation;
import fr.univbrest.dosi.business.FormationBusiness;

@RestController
@RequestMapping("/formations")
public class FormationController {
	
	private FormationBusiness business;

	@Autowired
	public FormationController(FormationBusiness business) {
		this.business = business;
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public Formation creerFormation(@RequestBody Formation formationACreer) {
		return business.creerFormation(formationACreer);
	}
	
	@RequestMapping(method = RequestMethod.GET)
	public List<Formation> recupererToutesLesFormations() {
		return business.recupererToutesLesFormations();
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/nom/{nom}")
	public List<Formation> recupererLaFormationAvecLeNom(@PathVariable("nom") String nom) {
		return business.rechercherFormationParNom(nom);
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/count")
	public long recupererLeNombreDeFormation() {
		return business.CountFormation();
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/{id}")
	public Formation recupererLaFormationAvecLId(@PathVariable String id) {
		return business.rechercherFormationParId(id);
	}

	@RequestMapping(method = RequestMethod.DELETE, value="/delete/{id}")
	public void DeleteFormation(@PathVariable String id) {
		business.supprimerFormation(id);
	}
	
	@RequestMapping(method = RequestMethod.PUT, value="/update/")
	public Formation UpdateFormation(@RequestBody Formation formationAMaj) {
		return business.UpdateFormation(formationAMaj);
	}
}
