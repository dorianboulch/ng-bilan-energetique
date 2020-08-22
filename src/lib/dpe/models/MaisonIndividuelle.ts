import {Batiment} from './Batiment';
import {HabitationProductionChauffageTypes} from './HabitationProductionChauffageTypes';
import {HabitationProductionECSTypes} from './HabitationProductionECSTypes';
import {DpeEstimable} from './DpeEstimable';
import {BatimentUsages} from './BatimentUsages';

export class MaisonIndividuelle extends Batiment implements DpeEstimable {


  getDateConstruction(): Date {
    return this.dateConstruction;
  }

  getUsage(): BatimentUsages {
    return this.usage;
  }

  getTypeProductionChauffage(): HabitationProductionChauffageTypes {
    return HabitationProductionChauffageTypes.INDIVIDUELLE;
  }

  getTypeProductionECS(): HabitationProductionECSTypes {
    return HabitationProductionECSTypes.INDIVIDUELLE;
  }

  hasPointDeComptageChauffageIndividuel(): boolean {
    return true;
  }

  hasPointDeComptageECSIndividuel(): boolean {
    return true;
  }
}
