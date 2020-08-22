import {Injectable} from '@angular/core';
import {DpeEstimable} from '../models/DpeEstimable';
import {MethodeDeCalculValues} from '../models/MethodeDeCalculValues';
import {BatimentUsages} from '../models/BatimentUsages';
import {HabitationProductionChauffageTypes} from '../models/HabitationProductionChauffageTypes';
import {HabitationProductionECSTypes} from '../models/HabitationProductionECSTypes';

@Injectable({
  providedIn: 'root'
})
export class CalculsDpeService {
  private static readonly JANVIER_1948 = new Date(1948, 1);

  constructor() {
  }

  getMethodeDeCalcul(dpeEstimable: DpeEstimable): MethodeDeCalculValues {

    if (dpeEstimable.getUsage() === BatimentUsages.AUTRE) {
      return MethodeDeCalculValues.FACTURES;
    }

    if ((dpeEstimable.getTypeProductionChauffage() === HabitationProductionChauffageTypes.COLLECTIVE ||
      dpeEstimable.getTypeProductionECS() === HabitationProductionECSTypes.COLLECTIVE)
      && (!dpeEstimable.hasPointDeComptageChauffageIndividuel() || !dpeEstimable.hasPointDeComptageECSIndividuel())) {
      return MethodeDeCalculValues.FACTURES;
    } else {
      if (dpeEstimable.getDateConstruction().getTime() < CalculsDpeService.JANVIER_1948.getTime()) {
        return MethodeDeCalculValues.FACTURES;
      } else {
        return MethodeDeCalculValues.CALCUL_CONVENTIONNEL;
      }
    }
  }
}
