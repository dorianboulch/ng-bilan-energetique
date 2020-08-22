import {TestBed} from '@angular/core/testing';

import {CalculsDpeService} from './calculs-dpe.service';
import {Appartement} from '../models/Appartement';
import {BatimentUsages} from '../models/BatimentUsages';
import {HabitationProductionChauffageTypes} from '../models/HabitationProductionChauffageTypes';
import {HabitationProductionECSTypes} from '../models/HabitationProductionECSTypes';
import {Immeuble} from '../models/Immeuble';
import {MethodeDeCalculValues} from '../models/MethodeDeCalculValues';
import {MaisonIndividuelle} from '../models/MaisonIndividuelle';

describe('CalculsDpeService', () => {
  let service: CalculsDpeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculsDpeService);
  });

  it('maison usage autre', () => {
    const maison = new MaisonIndividuelle();
    maison.usage = BatimentUsages.AUTRE;

    expect(service.getMethodeDeCalcul(maison)).toBe(MethodeDeCalculValues.FACTURES);
  });

  it('maison construite avant 1948', () => {
    const maison = new MaisonIndividuelle();
    maison.usage = BatimentUsages.HABITATION;
    maison.dateConstruction = new Date(1947, 1);

    expect(service.getMethodeDeCalcul(maison)).toBe(MethodeDeCalculValues.FACTURES);
  });

  it('maison construite après 1948', () => {
    const maison = new MaisonIndividuelle();
    maison.usage = BatimentUsages.HABITATION;
    maison.dateConstruction = new Date(1949, 1);

    expect(service.getMethodeDeCalcul(maison)).toBe(MethodeDeCalculValues.CALCUL_CONVENTIONNEL);
  });

  it('appartement production individuelle', () => {
    const appartement = new Appartement();
    appartement.usage = BatimentUsages.HABITATION;
    appartement.typeProductionChauffage = HabitationProductionChauffageTypes.INDIVIDUELLE;
    appartement.typeProductionECS = HabitationProductionECSTypes.INDIVIDUELLE;

    appartement.immeuble = new Immeuble();
    appartement.immeuble.dateConstruction = new Date(1947, 1);

    expect(service.getMethodeDeCalcul(appartement)).toBe(MethodeDeCalculValues.FACTURES);
  });

  it('appartement avant 1948 production collective avec points de comptage individuels', () => {
    const appartement = new Appartement();
    appartement.usage = BatimentUsages.HABITATION;
    appartement.typeProductionChauffage = HabitationProductionChauffageTypes.COLLECTIVE;
    appartement.typeProductionECS = HabitationProductionECSTypes.COLLECTIVE;
    appartement.pointDeComptageChauffageIndividuel = true;
    appartement.pointDeComptageECSIndividuel = true;

    appartement.immeuble = new Immeuble();
    appartement.immeuble.dateConstruction = new Date(1947, 1);

    expect(service.getMethodeDeCalcul(appartement)).toBe(MethodeDeCalculValues.FACTURES);
  });

  it('appartement après 1948 production collective avec points de comptage individuels', () => {
    const appartement = new Appartement();
    appartement.usage = BatimentUsages.HABITATION;
    appartement.typeProductionChauffage = HabitationProductionChauffageTypes.COLLECTIVE;
    appartement.typeProductionECS = HabitationProductionECSTypes.COLLECTIVE;
    appartement.pointDeComptageChauffageIndividuel = true;
    appartement.pointDeComptageECSIndividuel = true;

    appartement.immeuble = new Immeuble();
    appartement.immeuble.dateConstruction = new Date(1949, 1);

    expect(service.getMethodeDeCalcul(appartement)).toBe(MethodeDeCalculValues.CALCUL_CONVENTIONNEL);
  });

  it('appartement production collective sans points de comptage individuel', () => {
    const appartement = new Appartement();
    appartement.usage = BatimentUsages.HABITATION;
    appartement.typeProductionChauffage = HabitationProductionChauffageTypes.COLLECTIVE;
    appartement.typeProductionECS = HabitationProductionECSTypes.COLLECTIVE;
    appartement.pointDeComptageChauffageIndividuel = false;
    appartement.pointDeComptageECSIndividuel = false;

    appartement.immeuble = new Immeuble();
    appartement.immeuble.dateConstruction = new Date(1947, 1);

    expect(service.getMethodeDeCalcul(appartement)).toBe(MethodeDeCalculValues.FACTURES);
  });
});
